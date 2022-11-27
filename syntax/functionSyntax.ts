import {ISyntax, ISyntaxProvider} from './ISyntaxProvider';
import {mapSet, ProductionSet} from './Set.js';

export type TypeSpecifier = 'typeSpecifier';

export type DeclarationSpecifier = 'declarationSpecifier';

export type DeclarationSpecifiers = 'declarationSpecifiers';

export type Declarator = 'declarator';

export type DeclaratorList = 'initDeclaratorList';

export type DeclarationSet =
  | TypeSpecifier
  | DeclarationSpecifier
  | DeclarationSpecifiers
  | Declarator
  | DeclaratorList
  | 'declaration'
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

const declarator: ProductionSet = {
  Semi: [''],
  Equal: [''],
  Comma: ['Comma', 'Identifier', 'initDeclaratorList'],
};

const initDeclaratorList: ProductionSet = {
  Identifier: ['Identifier', 'declarator'],
};

export const declaration: ProductionSet = {
  ...mapSet(declarationSpecifiers, [
      'declarationSpecifiers',
      'initDeclaratorList',
      'Semi',
    ],
  ),
};

export const DeclarationSyntaxProvider: ISyntaxProvider<DeclarationSet> = {
  getSyntax(): ISyntax<DeclarationSet> {
    return {
      typeSpecifier,
      declarationSpecifier,
      declarationSpecifiers,
      declarator,
      initDeclaratorList,
      declaration,
    };
  },
};
