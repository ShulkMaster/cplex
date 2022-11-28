import { ISyntax, ISyntaxProvider } from './ISyntaxProvider';
import { mapSet, ProductionSet } from './Set.js';

export type TypeSpecifier = 'typeSpecifier';
export type DeclarationSpecifier = 'declarationSpecifier';
export type DeclarationSpecifiers = 'declarationSpecifiers';
export type DeclarationSpecifiersPrime = 'declarationSpecifiersPrime';
export type Initializer = 'initializer';
export type InitializerList = 'initializerList';
export type initDeclaratorListPrime = 'initDeclaratorListPrime';
export type ExternalDeclaration = 'externalDeclaration';
export type declaratorPrime = 'declaratorPrime';

export type DeclarationSet =
  | TypeSpecifier
  | DeclarationSpecifier
  | DeclarationSpecifiers
  | initDeclaratorListPrime
  | DeclarationSpecifiersPrime
  | Initializer
  | InitializerList
  | declaratorPrime
  | ExternalDeclaration
  | 'declaration';

export const typeSpecifier: ProductionSet = {
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

export const declaration: ProductionSet = {
  ...mapSet(declarationSpecifiers, [
    'declarationSpecifiers',
    'Identifier',
    'declarationPrime',
  ]),
};

const initDeclaratorListPrime: ProductionSet = {
  Semi: [''],
  Comma: ['Comma', 'Identifier', 'initDeclaratorListPrime'],
  Assign: [''],
};

export const initializer: ProductionSet = {
  Semi: [''],
  Assign: ['Assign', 'initializerList']
}

const initializerList: ProductionSet = {
  Identifier: ['expression'],
  Semi: ['expression'],
  Comma: ['expression'],
  LeftBrace: ['LeftBrace', 'Constant', 'RightBrace'],
  Constant: ['expression'],
  Question: ['expression'],
  OrOr: ['expression'],
  AndAnd: ['expression'],
  Or: ['expression'],
  Caret: ['expression'],
  And: ['expression'],
  Equal: ['expression'],
  NotEqual: ['expression'],
  Less: ['expression'],
  LessEqual: ['expression'],
  Greater:['expression'],
  Div:['expression'],
  GreaterEqual: ['expression'],
  LeftShift: ['expression'],
  RightShift: ['expression'],
  Plus: ['expression'],
  Minus: ['expression'],
  Star: ['expression'],
  Mod: ['expression'],
  DigitSequence: ['expression'],
  True: ['expression'],
  False: ['expression'],
  StringLiteral: ['expression'],
  PlusPlus: ['expression'],
  MinusMinus: ['expression'],
};

const declaratorPrime: ProductionSet = {
  Semi: ['initDeclaratorListPrime', 'initializer', 'Semi'],
  LeftParen: ['LeftParen', 'functionDefinition'],
  Comma: ['Comma', 'Identifier', 'initDeclaratorListPrime'],
  Assign: ['initDeclaratorListPrime', 'initializer', 'Semi'],
};

const externalDeclaration: ProductionSet = mapSet(declarationSpecifier,
  ['declarationSpecifiers', 'Identifier', 'declaratorPrime']
);

export const DeclarationSyntaxProvider: ISyntaxProvider<DeclarationSet> = {
  getSyntax(): ISyntax<DeclarationSet> {
    return {
      typeSpecifier,
      declarationSpecifiersPrime,
      declarationSpecifier,
      declarationSpecifiers,
      initDeclaratorListPrime,
      declaration,
      initializer,
      initializerList,
      declaratorPrime,
      externalDeclaration,
    };
  },
};
