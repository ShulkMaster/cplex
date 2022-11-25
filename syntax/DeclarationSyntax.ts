import {ISyntax, ISyntaxProvider} from './ISyntaxProvider';

export type DeclarationDerivation =
  | 'declarationSpecifiers'
  | 'declarationSpecifier'
  | 'typeSpecifier'
  | 'storageClassSpecifier'
  ;

const DeclarationSyntax: ISyntax<DeclarationDerivation> = {
  declarationSpecifier: {
    Const: ['Const'],
    Static: ['storageClassSpecifier'],
    Typedef: ['storageClassSpecifier'],
    Char: ['typeSpecifier'],
    Int: ['typeSpecifier'],
    Float: ['typeSpecifier'],
  },
  declarationSpecifiers: undefined,
  storageClassSpecifier: {
    Typedef: ['Typedef', null],
    Static: ['Static', null],
  },
  typeSpecifier: {
    Char: ['Char', null],
    Int: ['Int', null],
    Float: ['Float', null],
  }
};

export const DeclarationSyntaxProvider: ISyntaxProvider<DeclarationDerivation> = {
  getSyntax(): ISyntax<DeclarationDerivation> {
    return DeclarationSyntax;
  }
}
