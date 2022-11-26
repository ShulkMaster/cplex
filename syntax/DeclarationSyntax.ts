import {ISyntax, ISyntaxProvider} from './ISyntaxProvider';
import {mapSet, ProductionSet} from './Set';

export type TypeSpecifier = 'typeSpecifier';

export type DeclarationSpecifier = 'declarationSpecifier';

export type DeclarationSpecifiers = 'declarationSpecifiers';

export type DeclarationSet =
  | TypeSpecifier
  | DeclarationSpecifier
  | DeclarationSpecifiers
  ;

const typeSpecifier: ProductionSet = {
  Void: ['Void'],
  Char: ['Char'],
  Short: ['Short'],
  Int: ['Int'],
  Float: ['Float'],
  Bool: ['Bool'],
};

const declarationSpecifier: ProductionSet = {
  Const: ['Const'],
  Static: ['Static'],
  ...mapSet(typeSpecifier, ['typeSpecifier']),
};

const declarationSpecifiers: ProductionSet = {
  Identifier: [''],
  ...mapSet(declarationSpecifier, [
    'declarationSpecifier', 'declarationSpecifiers',
  ]),
};

export const DeclarationSyntaxProvider: ISyntaxProvider<DeclarationSet> = {
  getSyntax(): ISyntax<DeclarationSet> {
    return {
      typeSpecifier,
      declarationSpecifier,
      declarationSpecifiers,
    };
  },
};
