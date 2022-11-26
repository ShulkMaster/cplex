import {Derivation, Derivations, Terminal} from './index';

export type ProductionSet = {
  [terminalKey in Terminal]?: Derivation[];
};

export const mapSet = (set1: ProductionSet, derivations: Derivations[]): ProductionSet => {
  const prodSet: ProductionSet = {};
  for (const key of Object.keys(set1).keys()) {
    prodSet[key] = derivations;
  }
  return prodSet;
};
