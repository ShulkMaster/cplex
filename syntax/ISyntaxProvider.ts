import {CSyntax, Derivation, Derivations, Terminal} from './index.js';

export type ISyntax<T extends Derivations> = {
  [k in keyof Pick<CSyntax, T>]: {
    [terminalKey in Terminal]?: (Derivation | null)[];
  };
}

export interface ISyntaxProvider<T extends Derivations> {
    getSyntax(): ISyntax<T>;
}
