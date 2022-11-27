import {Derivation, Terminal} from './index';

export type ProductionSet = {
  [terminalKey in Terminal]?: Derivation[];
};

export const mapSet = (set1: ProductionSet, derivations: Derivation[]): ProductionSet => {
  const prodSet: ProductionSet = {};
  for (const key of Object.keys(set1)) {
    prodSet[key] = derivations;
  }
  return prodSet;
};
