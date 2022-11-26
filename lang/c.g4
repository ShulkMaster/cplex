parser grammar c;

options {
    tokenVocab=cLexer;
}

compilationUnit: compilationUnitPrime EOF;

compilationUnitPrime: declaration | empty;

empty:;

externalDeclaration:
  declaration
  | functionDefinition
  | Semi
  ;

functionDefinition: False;//todo

declaration: declarationSpecifiers declarationPrime Semi;

declarationPrime: empty | initDeclaratorList;

declarationSpecifiers: declarationSpecifier declarationSpecifierPrime;

declarationSpecifierPrime: declarationSpecifiers | empty;

declarationSpecifier: Const | Static | typeSpecifier;

typeSpecifier: Void | Char | Short | Int | Float | Bool | structSpecifier | Identifier;

identifierPrime: Identifier | empty;

specifierQualifierList
    :   typeSpecifier specifierQualifierList?
    |   Const specifierQualifierList?
    ;

declaratorPrime: declarator | empty;

structDeclarator
    :   declarator
    |   declaratorPrime ':' conditionalExpression
    ;

structDeclaratorList
    :   structDeclarator (',' structDeclarator)*
    ;

// The first two rules have priority order and cannot be simplified to one expression.
structDeclaration
    :   specifierQualifierList structDeclaratorList ';'
    |   specifierQualifierList ';'
    ;

structDeclarationList
    :   structDeclaration | structDeclaration structDeclarationList
    ;

structOrSpecifierPrime: identifierPrime '{' structDeclarationList '}' | Identifier;

structSpecifier: Struct structOrSpecifierPrime;

initDeclaratorList: initDeclarator initDeclaratorPrime;

initDeclaratorPrime: Comma initDeclarator | empty;

initDeclarator: declarator Equal initializer;

declarator: directDeclarator;

directDeclarator: Identifier | LeftParen declarator RightParen;

initializer:
LeftBrace initializerList initializerPrime RightBrace
| assignmentExpression
;

initializerPrime: Comma | empty;

designator
    :   '[' conditionalExpression ']'
    |   '.' Identifier
    ;

designatorList: designator designatorPrime;

designatorPrime: designatorList | empty;

designation: designatorList '=';

designationPrime: designation | empty;

initializerList: designationPrime initializer initializerListPrime;

initializerListPrime: ',' designationPrime initializer;

initializerListMega: initializerList | empty;

logicalAndExpression: True; // rework

logicalOrExpressionMega: logicalOrExpressionPrime | empty;

logicalOrExpressionPrime: '||' logicalAndExpression logicalOrExpressionMega | empty;

logicalOrExpression:  logicalAndExpression logicalOrExpressionPrime;

conditionalExpressionPrime: '?' expression ':' conditionalExpression | empty;

conditionalExpression: logicalOrExpression conditionalExpressionPrime;

assignmentExpression
    :   conditionalExpression
    //|   unaryExpression assignmentOperator assignmentExpression
    |   DigitSequence // for
    ;

expression: assignmentExpression expressionPrime;

expressionPrime: ',' assignmentExpression | empty;
