import {Production} from 'syntax';
import {ISyntax, ISyntaxProvider} from './ISyntaxProvider';

export type DeclarationDerivation =
  | 'declarationSpecifiers'
  | 'declarationSpecifier'
  | 'typeSpecifier'
  | 'storageClassSpecifier'
  ;

export const Declarations: Production<DeclarationDerivation> = {
  declarationSpecifiers: 'declarationSpecifiers',
  declarationSpecifier: 'declarationSpecifiers',
  typeSpecifier: 'declarationSpecifiers',
  storageClassSpecifier: 'declarationSpecifiers',
} as const;

export const DeclarationSyntax: ISyntaxProvider = {
  const syntax: ISyn
  getSyntax(): ISyntax[] {
    return [{
      declarationSpecifier: {

      }
    }];
  }
}
