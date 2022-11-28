import {ISyntax, ISyntaxProvider} from './ISyntaxProvider';
import {mapSet, ProductionSet} from './Set.js';

export type TypeSpecifier = 'typeSpecifier';

export type DeclarationSpecifier = 'declarationSpecifier';

export type DeclarationSpecifiers = 'declarationSpecifiers';
export type DeclarationSpecifiersPrime = 'declarationSpecifiersPrime';

export type Declarator = 'declarator';

export type DeclaratorList = 'initDeclaratorList';

export type Initializer = 'initializer';

export type InitializerList = 'initializerList';

export type DeclarationSet =
  | TypeSpecifier
  | DeclarationSpecifier
  | DeclarationSpecifiers
  | Declarator
  | DeclaratorList
  | DeclarationSpecifiersPrime
  | Initializer
  | InitializerList
  | 'declaration';

const typeSpecifier: ProductionSet = {
  Void: ['Void'],
  Char: ['Char'],
  Short: ['Short'],
  Int: ['Int'],
  Float: ['Float'],
  Bool: ['Bool'],
};

export const declarationSpecifier: ProductionSet = {
  Const: ['Const'],
  Static: ['Static'],
  ...mapSet(typeSpecifier, ['typeSpecifier']),
};

const declarationSpecifiers: ProductionSet = mapSet(declarationSpecifier, [
  'declarationSpecifier',
  'declarationSpecifiersPrime',
]);

const declarationSpecifiersPrime: ProductionSet = {
  Identifier: [''],
  ...mapSet(declarationSpecifiers, ['declarationSpecifiers']),
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
  ]),
};

export const initializer: ProductionSet = {
  Semi: [''],
  Equal: ['Equal', 'initializerList']
}

const initializerList: ProductionSet = {  }

export const DeclarationSyntaxProvider: ISyntaxProvider<DeclarationSet> = {
  getSyntax(): ISyntax<DeclarationSet> {
    return {
      typeSpecifier,
      declarationSpecifiersPrime,
      declarationSpecifier,
      declarationSpecifiers,
      declarator,
      initDeclaratorList,
      declaration,
      initializer,
      initializerList
    };
  },
};
