import {CSyntax, Derivation, Derivations, Terminal} from './index';

export type ISyntax<T extends Derivations> = {
  [k in keyof Pick<CSyntax, T>]: {
    [terminalKey in Terminal]?: Derivation[];
  };
}

export interface ISyntaxProvider<T extends Derivations> {
    getSyntax(): ISyntax<T>;
}
