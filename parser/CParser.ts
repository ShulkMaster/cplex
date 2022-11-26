import cLexer from 'lexer/cLexer.js';
import {SyntaxTable} from '../syntax/SyntaxTable.js';
import {DeclarationSyntaxProvider} from '../syntax/DeclarationSyntax.js';
import type {Terminal} from '../syntax';
import {Derivation, Derivations} from '../syntax';

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

  constructor(lex: cLexer) {
    this.lex = lex;
    this.table.addSyntaxProvider(DeclarationSyntaxProvider);
    this.stack.push('compilationUnit');
  }

  private getLast(): Derivation {
    const size = Math.max(0, this.stack.length - 1);
    return this.stack[size];
  }

  private getLastIndex(arr: Array<any>): number {
    return Math.max(0, arr.length - 1);
  }

  public parse(): ParseNode {
    const names = this.lex.getSymbolicNames() as Terminal[];
    const parsed: ParseNode = {name: 'compilationUnit', text: '', children: [], up: null};
    let temp: ParseNode = parsed;
    let token = this.lex.nextToken();
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
        token = this.lex.nextToken();
        temp = temp.up;
        continue;
      }
      const productions = this.table.getDerivations(lastDerivation as Derivations, name);
      this.stack.pop();
      temp = this.makeBranch(temp);
      this.stack.push(...productions);
    }
    console.log(this.stack);
    return parsed;
  }

  private makeBranch(parent: ParseNode): ParseNode {
    const last = this.getLast();
    if (last === '' || !this.table.isNonTerminal(last) || last === parent.name) {
      return parent;
    }
    const child = {name: last, text: '', children: [], up: parent };
    parent.children.push(child);
         return child;
  }
}

