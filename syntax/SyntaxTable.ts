import { Derivation, Terminal } from 'parser';
import cLexer from 'lexer/cLexer';

export type DerivationChain = Map<Terminal, Derivation[]>;

export class SyntaxTable {
    private readonly _derivations: Map<Derivation, DerivationChain>;
    private readonly _terminals: Map<string, Terminal>;

    constructor() {
        cLexer.literalNames.forEach(literal => {
            if(!Boolean(literal)) return;
            const terminal: Terminal = Object.assign(literal, { _terminal: true }, true);
            this._terminals.set(literal, terminal);
        });
        
    }

    public asTerminal(text: string): Terminal | undefined {
        return this._terminals.get(text);
    }

    public addDerivationChain(prod: Derivation, term: Terminal, derivations: Derivation[]): void {
        let chain = this._derivations.get(prod);
        if(!chain){
            chain = new Map();
        }
        const exist = chain.has(term);
        if(exist){
            throw Error(`Duplicating table entry [${prod}, ${term}]`);
        }
        chain.set(term, derivations);
    }

    public getDerivations(prod: Derivation, term: Terminal) : readonly Derivation[] | undefined {
        const chain = this._derivations.get(prod);
        if(!chain) return undefined;
        return chain.get(term);
    }
}