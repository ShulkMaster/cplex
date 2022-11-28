import { ISyntax, ISyntaxProvider } from './ISyntaxProvider';
import { mapSet, ProductionSet } from './Set.js';

export type conditionalExpression = 'conditionalExpression';
export type conditionalExpressionPrime = 'conditionalExpressionPrime';
export type logicalOrExpression = 'logicalOrExpression';
export type logicalOrExpressionPrime = 'logicalOrExpressionPrime';
export type logicalAndExpression = 'logicalAndExpression';
export type logicalAndExpressionPrime = 'logicalAndExpressionPrime';
export type inclusiveOrExpression = 'inclusiveOrExpression';
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
export type AdditiveExpressionPrime = 'additiveExpressionPrime';
export type AdditiveExpression = 'additiveExpression';
export type shiftExpression = 'shiftExpression';
export type shiftExpressionPrime = 'shiftExpressionPrime';
export type relationalExpressionPrime = 'relationalExpressionPrime'
export type relationalExpression = 'relationalExpression'
export type equalityExpressionPrime = 'equalityExpressionPrime'

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
  | AdditiveExpressionPrime
  | AdditiveExpression
  | shiftExpression
  | shiftExpressionPrime
  | relationalExpressionPrime
  | relationalExpression
  | equalityExpressionPrime
  | 'expression'
  ;

const constanExpression: ProductionSet = {
  Constant: ['Const'],
  DigitSequence: ['DigitSequence'],
  True: ['DigitSequence'],
  False: ['False'],
  StringLiteral: ['StringLiteral'],
}

const relationalExpression: ProductionSet = {
  Identifier: ['shiftExpression', 'relationalExpressionPrime'],
  Semi: ['shiftExpression', 'relationalExpressionPrime'],
  Comma: ['shiftExpression', 'relationalExpressionPrime'],
  Constant: ['shiftExpression', 'relationalExpressionPrime'],
  RightParen: ['shiftExpression', 'relationalExpressionPrime'],
  Question: ['shiftExpression', 'relationalExpressionPrime'],
  Colon: ['shiftExpression', 'relationalExpressionPrime'],
  OrOr: ['shiftExpression', 'relationalExpressionPrime'],
  AndAnd: ['shiftExpression', 'relationalExpressionPrime'],
  Or: ['shiftExpression', 'relationalExpressionPrime'],
  Caret: ['shiftExpression', 'relationalExpressionPrime'],
  And: ['shiftExpression', 'relationalExpressionPrime'],
  Equal: ['shiftExpression', 'relationalExpressionPrime'],
  NotEqual: ['shiftExpression', 'relationalExpressionPrime'],
  Less: ['shiftExpression', 'relationalExpressionPrime'],
  Greater: ['shiftExpression', 'relationalExpressionPrime'],
  LessEqual: ['shiftExpression', 'relationalExpressionPrime'],
  GreaterEqual:['shiftExpression', 'relationalExpressionPrime'],
  LeftShift:['shiftExpression', 'relationalExpressionPrime'],
  RightShift:['shiftExpression', 'relationalExpressionPrime'],
  Plus:['shiftExpression', 'relationalExpressionPrime'],
  Minus:['shiftExpression', 'relationalExpressionPrime'],
  Star:['shiftExpression', 'relationalExpressionPrime'],
  Div:['shiftExpression', 'relationalExpressionPrime'],
  Mod:['shiftExpression', 'relationalExpressionPrime'],
  DigitSequence:['shiftExpression', 'relationalExpressionPrime'],
  True:['shiftExpression', 'relationalExpressionPrime'],
  False:['shiftExpression', 'relationalExpressionPrime'],
  StringLiteral:['shiftExpression', 'relationalExpressionPrime'],
  PlusPlus:['shiftExpression', 'relationalExpressionPrime'],
  MinusMinus:['shiftExpression', 'relationalExpressionPrime'],
}

const castExpression: ProductionSet = {
  Identifier: ['Identifier', 'invokeExpression'],
  PlusPlus: ['unaryExpression'],
  MinusMinus: ['unaryExpression'],
  ...mapSet(constanExpression, ['constanExpression']),
}

const unaryExpression: ProductionSet = {
  PlusPlus: ['unaryExpressionPrime' 'unaryExpressionAlpha'],
  MinusMinus: ['unaryExpressionPrime' 'unaryExpressionAlpha'],
}

const unaryExpressionAlpha: ProductionSet = {
  Char: ['typeSpecifier'],
  Int: ['typeSpecifier'],
  PlusPlus: ['unaryOperator' 'castExpression'],
  MinusMinus: ['unaryOperator' 'castExpression'],
}

const unaryExpressionPrime: ProductionSet = {
  PlusPlus: ['PlusPlus'],
  MinusMinus: ['MinusMinus'],
}

const unaryOperator: ProductionSet = {
  Plus: ['Plus'],
  Minus: ['Minus'],
}

const invokeExpression: ProductionSet = {
  Identifier: [''],
  Semi: [''],
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
  Identifier: ['castExpression', 'multiplicativeExpression'],
  Semi: [''],
  Comma: [''],
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
  Star: ['Star', 'castExpression', 'multiplicativeExpression'],
  Div: ['Div', 'castExpression', 'multiplicativeExpression'],
  Mod: ['Mod', 'castExpression', 'multiplicativeExpression'],
  PlusPlus: ['castExpression', 'multiplicativeExpression'],
  MinusMinus: ['castExpression', 'multiplicativeExpression'],
  ...mapSet(constanExpression, ['castExpression', 'multiplicativeExpression']),
}

const additiveExpressionPrime: ProductionSet = {
  Semi: [''],
  Comma: [''],
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
  Plus: ['Plus', 'multiplicativeExpression', 'additiveExpressionPrime'],
  Minus: ['Minus', 'multiplicativeExpression', 'additiveExpressionPrime'],
};

const additiveExpression: ProductionSet = {
  Identifier: ['multiplicativeExpression','additiveExpressionPrime',],
  Star: ['multiplicativeExpression','additiveExpressionPrime',],
  Div: ['multiplicativeExpression','additiveExpressionPrime',],
  Mod: ['multiplicativeExpression','additiveExpressionPrime',],
  PlusPlus: ['multiplicativeExpression','additiveExpressionPrime',],
  MinusMinus: ['multiplicativeExpression','additiveExpressionPrime',],
  ...mapSet(additiveExpressionPrime, [
    'multiplicativeExpression',
    'additiveExpressionPrime',
  ]),
  ...mapSet(constanExpression, [
    'multiplicativeExpression',
    'additiveExpressionPrime',
  ]),
};

const shiftExpressionPrime: ProductionSet = {
  Semi: [''],
  Comma: [''],
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
  LeftShift: ['LeftShift', 'additiveExpression', 'shiftExpressionPrime'],
  RightShift: ['RightShift', 'additiveExpression', 'shiftExpressionPrime' ],
}

const shiftExpression: ProductionSet = {
  Identifier: ['additiveExpression', 'shiftExpressionPrime'],
  Semi: ['additiveExpression', 'shiftExpressionPrime'],
  Comma: ['additiveExpression', 'shiftExpressionPrime'],
  RightParen: ['additiveExpression', 'shiftExpressionPrime'],
  Question: ['additiveExpression', 'shiftExpressionPrime'],
  Colon: ['additiveExpression', 'shiftExpressionPrime'],
  OrOr: ['additiveExpression', 'shiftExpressionPrime'],
  AndAnd: ['additiveExpression', 'shiftExpressionPrime'],
  Or: ['additiveExpression', 'shiftExpressionPrime'],
  Caret: ['additiveExpression', 'shiftExpressionPrime'],
  And: ['additiveExpression', 'shiftExpressionPrime'],
  Equal: ['additiveExpression', 'shiftExpressionPrime'],
  NotEqual: ['additiveExpression', 'shiftExpressionPrime'],
  Less: ['additiveExpression', 'shiftExpressionPrime'],
  Greater: ['additiveExpression', 'shiftExpressionPrime'],
  LessEqual: ['additiveExpression', 'shiftExpressionPrime'],
  GreaterEqual: ['additiveExpression', 'shiftExpressionPrime'],
  LeftShift: ['additiveExpression', 'shiftExpressionPrime'],
  RightShift: ['additiveExpression', 'shiftExpressionPrime'],
  Plus: ['additiveExpression', 'shiftExpressionPrime'],
  Minus: ['additiveExpression', 'shiftExpressionPrime'],
  Star: ['additiveExpression', 'shiftExpressionPrime'],
  Div: ['additiveExpression', 'shiftExpressionPrime'],
  Mod: ['additiveExpression', 'shiftExpressionPrime'],
  PlusPlus: ['additiveExpression', 'shiftExpressionPrime'],
  MinusMinus: ['additiveExpression', 'shiftExpressionPrime'],
};

const relationalExpressionPrime: ProductionSet = {
  Semi: [''],
  Comma: [''],
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
  Less: ['Less', 'shiftExpression', 'relationalExpressionPrime'], 
  Greater: ['Greater', 'shiftExpression', 'relationalExpressionPrime'], 
  LessEqual: ['LessEqual', 'shiftExpression', 'relationalExpressionPrime'], 
  GreaterEqual: ['GreaterEqual', 'shiftExpression', 'relationalExpressionPrime'],
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
  ...mapSet(constanExpression, ['logicalOrExpression', 'conditionalExpressionPrime'])
};

const conditionalExpressionPrime: ProductionSet = {
  Semi: [''],
  Comma: [''],
  RightParen: [''],
  Question: ['Question', 'Colon', 'expression', 'conditionalExpression'],
  Colon: ['']
};


const selectionStatement: ProductionSet = {
  If: ['If', 'LeftParen', 'expression', 'RightParen', 'compoundStatement', 'selectionStatementPrime']
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

export const expressionSyntaxProvider: ISyntaxProvider<ExpressionSet> = {
  getSyntax(): ISyntax<ExpressionSet> {
    return {
      constanExpression,
      castExpression,
      unaryExpression,
      unaryExpressionAlpha,
      unaryExpressionPrime,
      unaryOperator,
      invokeExpression,
      multiplicativeExpression,
      additiveExpressionPrime,
      additiveExpression,
      shiftExpressionPrime,
    };
  },
}