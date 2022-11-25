import cLexer from 'lexer/cLexer.js';
import { SyntaxTable } from 'syntax/SyntaxTable';

export class CParser {

    private readonly lex: cLexer;
    private readonly _table = new SyntaxTable();

    constructor(lex: cLexer) {
        this.lex = lex;
    }

    public parse(): void {
        let continues = true;
        const names = this.lex.getTokenNames();
        while(continues){
            const token = this.lex.nextToken()
            const lineCol = `[${token.line}, ${token.column}]`;
            const name = names[token.type];
            console.log(`${lineCol}: ${token.type}(${name}) -> ${token.text}`);
            continues = token.type !== -1;
        }
    }
}

