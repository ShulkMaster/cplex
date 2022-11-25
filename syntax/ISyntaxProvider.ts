import {CSyntax, Derivation, Terminal} from './index';

export type ISyntax = {
  [k in keyof CSyntax]: {
    [terminalKey in Terminal]?: Derivation[];
  };
}

export interface ISyntaxProvider {
    getSyntax(): ISyntax[];
}

const xd: ISyntax = {
  declarationSpecifier: undefined, declarationSpecifiers: undefined, storageClassSpecifier: undefined,
  typeSpecifier: {
    AndAnd: ['And' , 'Break', 'declarationSpecifiers'],
  }
}

const s = xd;
