import cLexer from 'lexer/cLexer.js';
import {SyntaxTable} from '../syntax/SyntaxTable.js';
import type {Terminal, Derivation, Derivations} from '../syntax';
import { CSyntaxProvider } from '../syntax/index.js';
import antlr4 from 'antlr4';

export type ParseNode = {
  name: string;
  text: string;
  children: ParseNode[];
  up: ParseNode | null;
}

export class CParser {

  private readonly lex: cLexer;
  private readonly table = new SyntaxTable();
  private readonly stack: Derivation[] = [];
  private lastToken: antlr4.Token | undefined = undefined;

  constructor(lex: cLexer) {
    this.lex = lex;
    this.table.addSyntaxProvider(CSyntaxProvider);
    this.stack.push('S');
  }

  private getLast(): Derivation {
    const size = Math.max(0, this.stack.length - 1);
    return this.stack[size];
  }

  public parse(): ParseNode {
    const names = this.lex.getSymbolicNames() as Terminal[];
    const parsed: ParseNode = {name: 'compilationUnit', text: '', children: [], up: null};
    let temp: ParseNode = parsed;
    let token = this.lex.nextToken();
    this.lastToken = token;
    while (token.type !== -1) {
      const name = names[token.type];
      const lastDerivation = this.getLast();
      if (lastDerivation === '') {
        this.stack.pop();
        continue;
      }
      if (lastDerivation === name) {
        temp.children.push({name, text: token.text, children: [], up: temp.up});
        this.stack.pop();
        console.log(`(${name}) -> ${token.text}`);
        this.lastToken = token;
        token = this.lex.nextToken();
        temp = temp.up;
        continue;
      }
      const productions = this.table.getDerivations(lastDerivation as Derivations, name);
      if (productions === undefined) {
        this.printHumanError(token);
      }
      this.stack.pop();
      this.stack.push(...productions);
      temp = this.makeBranch(temp);
    }
    console.log(this.stack);
    return parsed;
  }

  private printHumanError(token: antlr4.Token) {
    let missingToken: string = '';
    const errorToken = this.lastToken || token;
    for (let i = this.stack.length - 1; i >= 0; i--) {
      let aux = this.table.isNonTerminal(this.stack[i]);
      if (!aux) {
        missingToken = this.stack[i];
        break;
      }
    }

    const sourceLine = token.getInputStream().toString().split(/\n/)[errorToken.line - 1];
    const errorLocation = errorToken.column + (errorToken.stop - errorToken.start);
    console.error(`Se esperaba: ${missingToken}, en pos: ${errorToken.line} : ${errorLocation + 2 }`);
    console.error(sourceLine);
    const pad = ''.padStart(errorLocation) + '^';
    console.error(pad);
    throw new Error('ParserException');
  }

  private makeBranch(parent: ParseNode): ParseNode {
    const last = this.getLast();
    if (!this.table.isNonTerminal(last) || last === parent.name) {
      return parent;
    }
    const child = {name: last, text: '', children: [], up: parent};
    parent.children.push(child);
    return child;
  }
}

