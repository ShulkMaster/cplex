import cLexer from 'lexer/cLexer.js';
import { SyntaxTable } from '../syntax/SyntaxTable.js';
import {DeclarationSyntaxProvider} from '../syntax/DeclarationSyntax.js';
import type {Terminal} from '../syntax';

export class CParser {

    private readonly lex: cLexer;
    private readonly _table = new SyntaxTable();

    constructor(lex: cLexer) {
        this.lex = lex;
        this._table.addSyntaxProvider(DeclarationSyntaxProvider)
        this._table.addSyntaxProvider(DeclarationSyntaxProvider)
    }

    public parse(): void {
        let continues = true;
        const names = this.lex.getSymbolicNames() as Terminal[];
        while(continues){
            const token = this.lex.nextToken()
            const lineCol = `[${token.line}, ${token.column}]`;
            const name = names[token.type];
            console.log(`${lineCol}: ${token.type}(${name}) -> ${token.text}`);
            continues = token.type !== -1;
            const stack = this._table.getDerivations('declarationSpecifier', name);
            console.log(stack);
        }
    }
}

