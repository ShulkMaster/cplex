import {ISyntax, ISyntaxProvider} from './ISyntaxProvider';
import {mapSet, ProductionSet} from './Set.js';

export type FuncDeclaration = 'FuncDeclaration';
export type FuncDeclarationPrime = 'FuncDeclarationPrime';
export type CompoundStatement = 'compoundStatement'
export type Bi = 'bI'

export type FunctionSet = 
| FuncDeclaration
| FuncDeclarationPrime
| CompoundStatement
| Bi
;


const FuncDeclaration: ProductionSet  = {
  Const: ['declarationSpecifiers', 'Identifier', 'FuncDeclarationPrime'],
  Static: ['declarationSpecifiers', 'Identifier', 'FuncDeclarationPrime'],
  Char: ['declarationSpecifiers', 'Identifier', 'FuncDeclarationPrime'],
  Int: ['declarationSpecifiers', 'Identifier', 'FuncDeclarationPrime'],
  Bool: ['declarationSpecifiers', 'Identifier', 'FuncDeclarationPrime'],
};

const FuncDeclarationPrime: ProductionSet = {
  Semi: ['initializer', 'Semi'],
  Comma: ['Comma', 'FuncDeclaration'],
  Equal: ['initializer', 'Semi'],

}

const compoundStatement: ProductionSet = {
  LeftBrace: ['LeftBrace', 'bI', 'RightBrace']
}

const bi: ProductionSet = {}

export const FunctionSyntaxProvider: ISyntaxProvider<FunctionSet> = {
  getSyntax(): ISyntax<FunctionSet> {
    return {
      FuncDeclaration,
      FuncDeclarationPrime,
      compoundStatement,
      bi,
    };
  },
};
