import {ISyntax, ISyntaxProvider} from './ISyntaxProvider';

export type DeclarationDerivation =
  | 'declarationSpecifiers'
  | 'declarationSpecifier'
  | 'typeSpecifier'
  | 'storageClassSpecifier'
  ;

const DeclarationSyntax: ISyntax<DeclarationDerivation> = {
  declarationSpecifier: {
    Dot: ['declarationSpecifier', 'Break', 'Enum']
  },
  declarationSpecifiers: undefined,
  storageClassSpecifier: undefined,
  typeSpecifier: undefined
};

export const DeclarationSyntaxProvider: ISyntaxProvider<DeclarationDerivation> = {
  getSyntax(): ISyntax<DeclarationDerivation> {
    return DeclarationSyntax;
  }
}
