import Token from 'antlr4/Token';
import cLexer from 'lexer/cLexer.js';

export class CParser {

    private readonly lex: cLexer;

    constructor(lex: cLexer) {
        this.lex = lex;
    }

    public parse(): void {
        let continues = true;
        while(continues){
            const token = this.lex.nextToken()
            const lineCol = `[${token.line}, ${token.column}]`;
            console.log(`${lineCol}: ${token.type} -> ${token.text}`);
            continues = token.type !== -1;
        }
    }
}

