import {ISyntax, ISyntaxProvider} from './ISyntaxProvider';
import {mapSet, ProductionSet} from './Set.js';

export type FuncDeclaration = 'FuncDeclaration';
export type FuncDeclarationPrime = 'FuncDeclarationPrime';
export type compoundStatement = 'compoundStatement';
export type declarationPrime = 'declarationPrime';
export type FD1 = 'fD1';
export type functionDefinition = 'functionDefinition';



export type FunctionSet = 
| FuncDeclaration
| FuncDeclarationPrime
| compoundStatement
| declarationPrime
| FD1
| functionDefinition
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
  Assign: ['initializer', 'Semi'],
}

const declarationPrime: ProductionSet = {
  Comma: ['Comma', 'declaration'],
  RightParen: ['RightParen'],
}

const compoundStatement: ProductionSet = {
  LeftBrace: ['LeftBrace', 'bI', 'RightBrace']
}

const fD1: ProductionSet = {
  Semi: ['Semi'],
  LeftBrace: ['compoundStatement']
}

const bi: ProductionSet = {}

const functionDefinition: ProductionSet = {
  Const: ['declaration', 'fD1'],
  Static: ['declaration', 'fD1'],
  Char: ['declaration', 'fD1'],
  Int: ['declaration', 'fD1'],
  Bool: ['declaration', 'fD1'],
  RightParen: ['RightParen', 'fD1'],
}

export const FunctionSyntaxProvider: ISyntaxProvider<FunctionSet> = {
  getSyntax(): ISyntax<FunctionSet> {
    return {
      FuncDeclaration,
      FuncDeclarationPrime,
      compoundStatement,
      declarationPrime,
      fD1,
      functionDefinition
    };
  },
};
