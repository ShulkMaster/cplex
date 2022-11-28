import {ISyntax, ISyntaxProvider} from './ISyntaxProvider';
import {mapSet, ProductionSet} from './Set.js'; 

export type conditionalExpression = 'conditionalExpression';
export type conditionalExpressionPrime = 'conditionalExpressionPrime';
export type logicalOrExpression = 'logicalOrExpression';
export type logicalOrExpressionPrime = 'logicalOrExpressionPrime';
export type logicalAndExpression = 'logicalAndExpression';
export type logicalAndExpressionPrime = 'logicalAndExpressionPrime';
export type inclusiveOrExpression= 'inclusiveOrExpression';
export type inclusiveOrExpressionPrime = 'inclusiveOrExpressionPrime';
export type exclusiveOrExpression = 'exclusiveOrExpression';
export type ConstanExpression = 'constanExpression';
export type selectionStatement = 'selectionStatement';
export type selectionStatementPrime = 'selectionStatementPrime';
export type castExpression = 'castExpression';
export type InvokeExpression = 'invokeExpression';
export type unaryExpression = 'unaryExpression';
export type unaryExpressionAlpha = 'unaryExpressionAlpha';
export type unaryExpressionPrime = 'unaryExpressionPrime';
export type unaryOperator = 'unaryOperator';
export type MultiplicativeExpression = 'multiplicativeExpression';
export type additiveExpressionPrime = ''


export type ExpressionSet =
  | conditionalExpression  
  | conditionalExpressionPrime
  | logicalOrExpression
  | logicalOrExpressionPrime
  | logicalAndExpression
  | logicalAndExpressionPrime
  | inclusiveOrExpression
  | inclusiveOrExpressionPrime
  | exclusiveOrExpression
  | ConstanExpression
  | selectionStatement
  | selectionStatementPrime
  | castExpression
  | InvokeExpression
  | unaryExpression
  | MultiplicativeExpression
  | unaryExpressionAlpha
  | unaryExpressionPrime 
  | unaryOperator
  | 'expression'
  ;


  const ConstanExpression: ProductionSet = {
    Constant: ['Const'],
    DigitSequence: ['DigitSequence'],
    True: ['DigitSequence'],
    False: ['False'],
    StringLiteral: ['StringLiteral'],
  }

  const  castExpression: ProductionSet = {
    Identifier: ['Identifier', 'invokeExpression'], 
    PlusPlus: ['unaryExpression'],
    MinusMinus: ['unaryExpression'], 
    ...mapSet(ConstanExpression, ['ConstanExpression']),
  }
  
  const  unaryExpression: ProductionSet = {
    PlusPlus: ['unaryExpressionPrime' 'unaryExpressionAlpha'],
    MinusMinus: ['unaryExpressionPrime' 'unaryExpressionAlpha'], 
  }
  
  const  unaryExpressionAlpha: ProductionSet = {
    Char: ['typeSpecifier'],
    Int: ['typeSpecifier'], 
    PlusPlus: ['unaryOperator' 'castExpression'],
    MinusMinus: ['unaryOperator' 'castExpression'], 
  }
  
  const  unaryExpressionPrime: ProductionSet = {
    PlusPlus: ['PlusPlus'],
    MinusMinus: ['MinusMinus'], 
  }
  
  const  unaryOperator: ProductionSet = {
    Plus: ['Plus'],
    Minus: ['Minus'], 
  }

  const invokeExpression: ProductionSet = {
    Identifier: [''],
    Semi:[''],
    LeftParen: ['LeftParen', 'expression', 'RightParen'],
    Comma: [''],
    Constant: [''],
    RightParen: [''],
    Question: [''],
    Colon: [''],
    OrOr: [''],
    AndAnd: [''],
    Or: [''],
    Caret: [''],
    And: [''],    
    Equal: [''],
    NotEqual: [''],
    Less: [''],
    Greater: [''],
    LessEqual: [''],
    GreaterEqual: [''],
    LeftShift: [''],
    RightShift: [''],
    Plus: [''],
    Minus: [''],
    Star: [''],
    Div: [''],
    Mod: [''],
    DigitSequence: [''],
    True: [''],
    False: [''],
    StringLiteral: [''],
    PlusPlus: [''],
    MinusMinus: [''],    
  }

  const multiplicativeExpression: ProductionSet = {

  }

const conditionalExpression: ProductionSet = {
    Identifier: ['logicalOrExpression', 'conditionalExpressionPrime'],
    Semi: ['logicalOrExpression', 'conditionalExpressionPrime'],
    Comma: ['logicalOrExpression', 'conditionalExpressionPrime'],
    Constant: ['logicalOrExpression', 'conditionalExpressionPrime'],
    RightParen: ['logicalOrExpression', 'conditionalExpressionPrime'],
    Question: ['logicalOrExpression', 'conditionalExpressionPrime'],
    Colon: ['logicalOrExpression', 'conditionalExpressionPrime'],
    OrOr: ['logicalOrExpression', 'conditionalExpressionPrime'],
    AndAnd: ['logicalOrExpression', 'conditionalExpressionPrime'],
    Or: ['logicalOrExpression', 'conditionalExpressionPrime'],
    Caret: ['logicalOrExpression', 'conditionalExpressionPrime'],
    And: ['logicalOrExpression', 'conditionalExpressionPrime'],
    Equal: ['logicalOrExpression', 'conditionalExpressionPrime'],
    NotEqual: ['logicalOrExpression', 'conditionalExpressionPrime'],
    Less: ['logicalOrExpression', 'conditionalExpressionPrime'],
    Greater: ['logicalOrExpression', 'conditionalExpressionPrime'],
    LeftShift: ['logicalOrExpression', 'conditionalExpressionPrime'],
    RightShift: ['logicalOrExpression', 'conditionalExpressionPrime'],
    MinusMinus: ['logicalOrExpression', 'conditionalExpressionPrime'],
    PlusPlus: ['logicalOrExpression', 'conditionalExpressionPrime'],
    DigitSequence: ['logicalOrExpression', 'conditionalExpressionPrime'],
    Star: ['logicalOrExpression', 'conditionalExpressionPrime'],
    Mod: ['logicalOrExpression', 'conditionalExpressionPrime'],
    Div: ['logicalOrExpression', 'conditionalExpressionPrime'],
    Minus: ['logicalOrExpression', 'conditionalExpressionPrime'],
    Plus: ['logicalOrExpression', 'conditionalExpressionPrime'],
    LessEqual: ['logicalOrExpression', 'conditionalExpressionPrime'],
    GreaterEqual: ['logicalOrExpression', 'conditionalExpressionPrime'],
    ...mapSet(ConstanExpression, ['logicalOrExpression', 'conditionalExpressionPrime'])
};

const conditionalExpressionPrime: ProductionSet = {
    Semi: [''],
    Comma: [''],
    RightParen: [''],
    Question: ['Question', 'Colon', 'expression', 'conditionalExpression'],
    Colon: ['']
};


const selectionStatement: ProductionSet = {
  If: ['If', 'LeftParent', 'expression', 'RightParen', 'compoundStatement', 'selectionStatementPrime']
}

const selectionStatementPrime: ProductionSet = {
  Identifier: [''],
  Semi: [''],
  Comma: [''],
  Const: [''],
  Static: [''],
  Char: [''],
  Int: [''],
  Bool: [''],
  LeftBrace: [''],
  Constant: [''],
  RightBrace: [''],
  Return: [''],
  For: [''],
  Question: [''],
  OrOr: [''],
  AndAnd: [''],
  Or: [''],
  Caret: [''],
  And: [''],
  Equal: [''],
  NotEqual: [''],
  Less: [''],
  Greater: [''],
  LessEqual: [''],
  GreaterEqual: [''],
  LeftShift: [''],
  RightShift: [''],
  Plus: [''],
  Minus: [''],
  Star: [''],
  Div: [''],
  Mod: [''],
  DigitSequence: [''],
  True: [''],
  False: [''],
  StringLiteral: [''],
  PlusPlus: [''],
  MinusMinus: [''],
  If: [''],
  Else: ['Else Statement'],
  
};

export expressionSyntaxProvider: ISynta