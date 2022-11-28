import {Derivation, Derivations, Terminal} from 'syntax';
import {ISyntax, ISyntaxProvider} from './ISyntaxProvider';
import {declaration} from './DeclarationSyntax.js'
import {mapSet} from './Set.js';

export class SyntaxTable {
  private readonly _cSyntaxRules: ISyntax<Derivations>;

  constructor() {
    this._cSyntaxRules = {} as ISyntax<Derivations>;
  }

  public addSyntaxProvider<T extends Derivations>(syntaxProvider: ISyntaxProvider<T>): void {
    const syntax = syntaxProvider.getSyntax();
    for (const [key, value] of Object.entries(syntax)) {
      const production = this._cSyntaxRules[key];
      if (!production) {
        this._cSyntaxRules[key] = value;
        continue;
      }
      for (const [prodKey, prodValue] of Object.entries(production)) {
        const terminal = production[prodKey];
        if (Boolean(terminal)) throw new Error(`Duplicating table entry [${key}, ${prodKey}]`);
        production[prodKey] = prodValue;
      }
    }
  }

  public getDerivations(prod: Derivations, term: Terminal): readonly Derivation[] | undefined {
    const chain = this._cSyntaxRules[prod];
    if (!chain) return undefined;
    const rules = chain[term];
    if (!rules) return undefined;
    return [...rules].reverse();
  }

  public isNonTerminal(der: Derivation): boolean {
    return Boolean(this._cSyntaxRules[der]);
  }
}
