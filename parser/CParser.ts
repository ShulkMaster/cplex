import cLexer from 'lexer/cLexer.js';
import {SyntaxTable} from '../syntax/SyntaxTable.js';
import {DeclarationSyntaxProvider} from '../syntax/DeclarationSyntax.js';
import type {Terminal} from '../syntax';
import {Derivation, Derivations} from '../syntax';

type ParseNode = {
  name: string;
  text: string;
  children: ParseNode[];
}

export class CParser {

  private readonly lex: cLexer;
  private readonly table = new SyntaxTable();
  private readonly stack: Derivation[] = [];

  constructor(lex: cLexer) {
    this.lex = lex;
    this.table.addSyntaxProvider(DeclarationSyntaxProvider);
    this.stack.push('declarationSpecifier');
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
    const parsed: ParseNode = {name: 'root', text: 'root', children: []};
    let token = this.lex.nextToken();
    console.log(`(${names[token.type]}) -> ${token.text}`);
    while (token.type !== -1) {
      const name = names[token.type];
      const lastDerivation = this.getLast();
      if (lastDerivation === null) {
        this.stack.pop();
        this.stack.pop();
        continue;
      }
      if (lastDerivation === name) {
        let temp = parsed;
        for (let i = 0; i < this.stack.length - 1; i++) {
          const path = this.stack[i];
          if(path === null) continue;
          const index = this.getLastIndex(temp.children);
          const child = temp.children[index] || {name: path, text: '',children: []};
          temp.children[index] = child;
          temp = child;
        }
        temp.children.push({name, text: token.text, children: []});
        this.stack.pop();
        console.log(`(${name}) -> ${token.text}`);
        token = this.lex.nextToken();
        continue;
      }
      const productions = this.table.getDerivations(lastDerivation as Derivations, name);
      this.stack.push(...productions);
    }
    return parsed;
  }
}

