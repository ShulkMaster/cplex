import { ISyntax, ISyntaxProvider } from './ISyntaxProvider';
import { mapSet, ProductionSet } from './Set.js';

export type conditionalExpression = 'conditionalExpression';
export type conditionalExpressionPrime = 'conditionalExpressionPrime';
export type LogicalOrExpression = 'logicalOrExpression';
export type LogicalOrExpressionPrime = 'logicalOrExpressionPrime';
export type LogicalAndExpressionPrime = 'logicalAndExpressionPrime';
export type inclusiveOrExpression = 'inclusiveOrExpression';
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
export type relationalExpressionPrime = 'relationalExpressionPrime';
export type relationalExpression = 'relationalExpression';
export type equalityExpressionPrime = 'equalityExpressionPrime';
export type equalityExpression = 'equalityExpression';
export type andExpression = 'andExpression';
export type AndExpressionPrime = 'andExpressionPrime';
export type exclusiveOrExpressionPrime = 'exclusiveOrExpressionPrime';
export type ExclusiveOrExpression = 'exclusiveOrExpression';
export type InclusiveOrExpression = 'inclusiveOrExpression';
export type inclusiveOrExpressionPrime = 'inclusiveOrExpressionPrime';
export type LogicalAndExpression = 'logicalAndExpression';
export type expressionPrime = 'expressionPrime';

export type ExpressionSet =
  | conditionalExpression
  | conditionalExpressionPrime
  | expressionPrime
  | LogicalOrExpression
  | LogicalOrExpressionPrime
  | LogicalAndExpressionPrime
  | inclusiveOrExpression
  | inclusiveOrExpressionPrime
  | exclusiveOrExpression
  | ConstanExpression
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
  | equalityExpression
  | andExpression
  | AndExpressionPrime
  | exclusiveOrExpressionPrime
  | ExclusiveOrExpression
  | InclusiveOrExpression
  | inclusiveOrExpressionPrime
  | LogicalAndExpression
  | 'expression'
  ;

const constanExpression: ProductionSet = {
  Constant: ['Const'],
  DigitSequence: ['DigitSequence'],
  True: ['DigitSequence'],
  False: ['False'],
  StringLiteral: ['StringLiteral'],
}

const castExpression: ProductionSet = {
  Identifier: ['Identifier', 'invokeExpression'],
  PlusPlus: ['unaryExpression'],
  MinusMinus: ['unaryExpression'],
  ...mapSet(constanExpression, ['constanExpression']),
}

const unaryExpression: ProductionSet = {
  PlusPlus: ['unaryExpressionPrime', 'unaryExpressionAlpha'],
  MinusMinus: ['unaryExpressionPrime', 'unaryExpressionAlpha'],
}

const unaryExpressionAlpha: ProductionSet = {
  Char: ['typeSpecifier'],
  Int: ['typeSpecifier'],
  PlusPlus: ['unaryOperator', 'castExpression'],
  MinusMinus: ['unaryOperator', 'castExpression'],
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
  Identifier: ['multiplicativeExpression', 'additiveExpressionPrime',],
  Star: ['multiplicativeExpression', 'additiveExpressionPrime',],
  Div: ['multiplicativeExpression', 'additiveExpressionPrime',],
  Mod: ['multiplicativeExpression', 'additiveExpressionPrime',],
  PlusPlus: ['multiplicativeExpression', 'additiveExpressionPrime',],
  MinusMinus: ['multiplicativeExpression', 'additiveExpressionPrime',],
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
  RightShift: ['RightShift', 'additiveExpression', 'shiftExpressionPrime'],
}

const shiftExpression: ProductionSet = mapSet(additiveExpression,
  ['additiveExpression', 'shiftExpressionPrime'],
);

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
  GreaterEqual: ['shiftExpression', 'relationalExpressionPrime'],
  LeftShift: ['shiftExpression', 'relationalExpressionPrime'],
  RightShift: ['shiftExpression', 'relationalExpressionPrime'],
  Plus: ['shiftExpression', 'relationalExpressionPrime'],
  Minus: ['shiftExpression', 'relationalExpressionPrime'],
  Star: ['shiftExpression', 'relationalExpressionPrime'],
  Div: ['shiftExpression', 'relationalExpressionPrime'],
  Mod: ['shiftExpression', 'relationalExpressionPrime'],
  DigitSequence: ['shiftExpression', 'relationalExpressionPrime'],
  True: ['shiftExpression', 'relationalExpressionPrime'],
  False: ['shiftExpression', 'relationalExpressionPrime'],
  StringLiteral: ['shiftExpression', 'relationalExpressionPrime'],
  PlusPlus: ['shiftExpression', 'relationalExpressionPrime'],
  MinusMinus: ['shiftExpression', 'relationalExpressionPrime'],
};

const equalityExpressionPrime: ProductionSet = {
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
  Equal: ['Equal', 'relationalExpression', 'equalityExpressionPrime'],
  NotEqual: ['NotEqual', 'relationalExpression', 'equalityExpressionPrime'],
};

const equalityExpression: ProductionSet = {
  ...mapSet(relationalExpression, [
    'relationalExpression',
    'equalityExpressionPrime',
  ]),
};

const andExpressionPrime: ProductionSet = {
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
}

const andExpression: ProductionSet = mapSet(equalityExpression, [
  'equalityExpression', 'andExpressionPrime',
]);

const exclusiveOrExpressionPrime: ProductionSet = {
  Semi: [''],
  Comma: [''],
  RightParen: [''],
  Question: [''],
  Colon: [''],
  OrOr: [''],
  AndAnd: [''],
  Or: [''],
  Caret: ['Caret', 'andExpression', 'exclusiveOrExpressionPrime'],
};


const exclusiveOrExpression: ProductionSet = mapSet(andExpression, [
  'andExpression', 'exclusiveOrExpressionPrime'
]);

const inclusiveOrExpressionPrime: ProductionSet = {
  Semi: [''],
  Comma: [''],
  RightParen: [''],
  Question: [''],
  Colon: [''],
  OrOr: [''],
  AndAnd: [''],
  Or: ['Or', 'exclusiveOrExpression', 'inclusiveOrExpressionPrime'],
};

const inclusiveOrExpression = mapSet(exclusiveOrExpression,
  ['exclusiveOrExpression', 'inclusiveOrExpressionPrime']
);

const logicalAndExpression: ProductionSet = mapSet(inclusiveOrExpression,
  ['inclusiveOrExpression', 'logicalAndExpressionPrime']
);

const logicalOrExpressionPrime: ProductionSet = {
  Semi: [''],
  Comma: [''],
  RightParen: [''],
  Question: [''],
  Colon: [''],
  OrOr: ['OrOr', 'logicalAndExpression', 'logicalOrExpressionPrime'],
}

const logicalAndExpressionPrime: ProductionSet = {
  Semi: [''],
  Comma: [''],
  RightParen: [''],
  Question: [''],
  Colon: [''],
  OrOr: [''],
  AndAnd: ['AndAnd', 'inclusiveOrExpression', 'logicalAndExpressionPrime']
}

const logicalOrExpression: ProductionSet = mapSet(logicalAndExpression,
  ['logicalAndExpression', 'logicalOrExpressionPrime'],
);

const conditionalExpression: ProductionSet = mapSet(logicalOrExpression, 
  ['logicalOrExpression', 'conditionalExpressionPrime'],
);

const conditionalExpressionPrime: ProductionSet = {
  Semi: [''],
  Comma: [''],
  RightParen: [''],
  Question: ['Question', 'Colon', 'expression', 'conditionalExpression'],
  Colon: ['']
};

const expressionPrime: ProductionSet = {
  Semi: [''],
  Comma: ['Comma', 'conditionalExpression', 'expressionPrime'],
  RightParen: [''],
  Colon: [''],
}

const expression: ProductionSet = mapSet(conditionalExpression, 
  ['conditionalExpression', 'expressionPrime'],
);

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
  Else: ['Else', 'statement'],
};

export const expressionSyntaxProvider: ISyntaxProvider<ExpressionSet> = {
  getSyntax(): ISyntax<ExpressionSet> {
    return {
      conditionalExpression,
      conditionalExpressionPrime,
      logicalOrExpression,
      logicalOrExpressionPrime,
      logicalAndExpression,
      logicalAndExpressionPrime,
      inclusiveOrExpression,
      inclusiveOrExpressionPrime,
      exclusiveOrExpression,
      exclusiveOrExpressionPrime,
      andExpression,
      andExpressionPrime,
      equalityExpression,
      equalityExpressionPrime,
      relationalExpression,
      relationalExpressionPrime,
      shiftExpression,
      shiftExpressionPrime,
      additiveExpression,
      additiveExpressionPrime,
      multiplicativeExpression,
      castExpression,
      invokeExpression,
      constanExpression,
      unaryExpression,
      unaryExpressionAlpha,
      unaryExpressionPrime,
      unaryOperator,
      expression,
      expressionPrime
    };
  },
}