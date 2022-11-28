import { type } from 'os';
import { declarationSpecifier } from './DeclarationSyntax.js';
import { ISyntax, ISyntaxProvider } from './ISyntaxProvider.js';
import { mapSet, ProductionSet } from './Set.js';

export type selectionStatement = 'selectionStatement';
export type selectionStatementPrime = 'selectionStatementPrime';
export type ExpressionStatement = 'expressionStatement';
export type AssignmentExpression = 'assignmentExpression';
export type ForDeclaration = 'forDeclaration';
export type forCondition = 'forCondition';
export type IterationStatement = 'iterationStatement'
export type statement = 'statement'
export type statementPrime = 'statementPrime'
export type blockItem = 'blockItem'
export type blockItemList = 'blockItemList'
export type bI = 'bI'

export type StamentSet =
    | selectionStatement
    | selectionStatementPrime
    | ExpressionStatement
    | AssignmentExpression
    | ForDeclaration
    | forCondition
    | IterationStatement
    | statement
    | statementPrime
    | blockItem
    | blockItemList
    | bI
    ;

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

const expressionStatement: ProductionSet = {
    Identifier: ['expression', 'Semi'],
    Semi: ['expression', 'Semi'],
    Comma: ['expression', 'Semi'],
    Constant: ['expression', 'Semi'],
    Question: ['expression', 'Semi'],
    OrOr: ['expression', 'Semi'],
    AndAnd: ['expression', 'Semi'],
    Or: ['expression', 'Semi'],
    Caret: ['expression', 'Semi'],
    And: ['expression', 'Semi'],
    Equal: ['expression', 'Semi'],
    NotEqual: ['expression', 'Semi'],
    Less: ['expression', 'Semi'],
    Greater: ['expression', 'Semi'],
    LessEqual: ['expression', 'Semi'],
    GreaterEqual: ['expression', 'Semi'],
    LeftShift: ['expression', 'Semi'],
    RightShift: ['expression', 'Semi'],
    Plus: ['expression', 'Semi'],
    Minus: ['expression', 'Semi'],
    Star: ['expression', 'Semi'],
    Div: ['expression', 'Semi'],
    Mod: ['expression', 'Semi'],
    DigitSequence: ['expression', 'Semi'],
    True: ['expression', 'Semi'],
    False: ['expression', 'Semi'],
    StringLiteral: ['expression', 'Semi'],
    MinusMinus: ['expression', 'Semi'],
    PlusPlus:['expression', 'Semi'],
}

const assignmentExpression: ProductionSet = {
    RightParen: ['conditionalExpression'],
    ...mapSet(expressionStatement, [
        'conditionalExpression'
    ]),
};

delete assignmentExpression.Comma;


const forDeclaration: ProductionSet = mapSet(declarationSpecifier, [
    'FuncDeclaration'
]);

const iterationStatement: ProductionSet = {
    For: ['For', 'LeftParen', 'forCondition', 'RightParen', 'LeftBrace', 'statementPrime', 'RightBrace'],
}

const forCondition: ProductionSet = mapSet(forDeclaration,
    ['forDeclaration', 'assignmentExpression', 'Semi', 'assignmentExpression'
    ]);

const statement: ProductionSet = {
        LeftBrace: ['compoundStatement'],
        Return: ['Return', 'expressionStatement'],
        For: ['iterationStatement'],
        If: ['selectionStatement'],
        ...mapSet(expressionStatement, [
            'expressionStatement'
        ]),
    };

const statementPrime: ProductionSet = {
    ...mapSet(statement, ['statement', 'statementPrime']),
    ...mapSet(declarationSpecifier, ['FuncDeclaration']),
    RightBrace: [''],
};

const blockItem: ProductionSet = mapSet(statementPrime, ['statement']);
delete blockItem.RightBrace;



const blockItemList: ProductionSet = mapSet(statementPrime, ['blockItem', 'bI']);
delete blockItemList.RightBrace;

const bI: ProductionSet = {
    ...mapSet(blockItemList, ['blockItemList']),
    RightBrace: [''],
};

export const statementSyntaxProvider: ISyntaxProvider<StamentSet> = {
    getSyntax(): ISyntax<StamentSet> {
        return {
            selectionStatement,
            selectionStatementPrime,
            expressionStatement,
            assignmentExpression,
            forDeclaration,
            forCondition,
            iterationStatement,
            statement,
            statementPrime,
            blockItem,
            blockItemList,
            bI,
        }
    },
}

