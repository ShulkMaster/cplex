parser grammar c;

options {
    tokenVocab=cLexer;
}

compilationUnit: compilationUnitA EOF;

compilationUnitA: externalDeclaration compilationUnitA | '';
externalDeclaration : declarationSpecifiers Identifier declaratorPrime;
declaratorPrime : initDeclaratorListPrime initializer Semi | LeftParen functionDefinition;


initDeclaratorListPrime : Comma Identifier initDeclaratorListPrime | '';

declarationSpecifiers : declarationSpecifier declarationSpecifiersPrime;

declarationSpecifiersPrime : '' | declarationSpecifiers;

declarationSpecifier : Const | Static | typeSpecifier;

typeSpecifier : Char | Int | Bool;

initializer : Assign initializerList | '';

initializerList : LeftBrace Constant RightBrace | expression;

functionDefinition : declaration fD1 | RightParen fD1;

fD1 : compoundStatement | Semi;

declaration : declarationSpecifiers Identifier declarationPrime;
declarationPrime : Comma declaration | RightParen;

FuncDeclaration : declarationSpecifiers Identifier FuncDeclarationPrime;

FuncDeclarationPrime : Comma FuncDeclaration | initializer Semi;

compoundStatement : LeftBrace bI RightBrace;

bI : '' |  blockItemList;

blockItemList : blockItem bI;

blockItem : FuncDeclaration | statement;

statementPrime : statement statementPrime | '' | FuncDeclaration;

statement : iterationStatement 
| compoundStatement 
| expressionStatement 
| selectionStatement 
| Return expressionStatement;

iterationStatement : For LeftParen forCondition RightParen LeftBrace statementPrime RightBrace;

forCondition : forDeclaration assignmentExpression Semi assignmentExpression;

forDeclaration : FuncDeclaration;

assignmentExpression : conditionalExpression;
expressionStatement : expression Semi;

expression : conditionalExpression expressionPrime;
expressionPrime : Comma conditionalExpression expressionPrime | '';

conditionalExpression : logicalOrExpression conditionalExpressionPrime;
conditionalExpressionPrime : Question expression Colon conditionalExpression | '';

logicalOrExpression : logicalAndExpression logicalOrExpressionPrime;
logicalOrExpressionPrime : OrOr logicalAndExpression logicalOrExpressionPrime | '';

logicalAndExpression : inclusiveOrExpression logicalAndExpressionPrime;
logicalAndExpressionPrime : AndAnd inclusiveOrExpression logicalAndExpressionPrime | '';

inclusiveOrExpression : exclusiveOrExpression inclusiveOrExpressionPrime;
inclusiveOrExpressionPrime : Or exclusiveOrExpression inclusiveOrExpressionPrime | '';

exclusiveOrExpression : andExpression exclusiveOrExpressionPrime;
exclusiveOrExpressionPrime : Caret andExpression exclusiveOrExpressionPrime | '';

andExpression : equalityExpression andExpressionPrime;
andExpressionPrime : And equalityExpression andExpressionPrime | '';

equalityExpression : relationalExpression equalityExpressionPrime;
equalityExpressionPrime : Equal relationalExpression equalityExpressionPrime 
| NotEqual relationalExpression equalityExpressionPrime 
| '';

relationalExpression : shiftExpression relationalExpressionPrime;
relationalExpressionPrime : Less shiftExpression relationalExpressionPrime 
| Greater shiftExpression relationalExpressionPrime 
| LessEqual shiftExpression relationalExpressionPrime 
| GreaterEqual shiftExpression relationalExpressionPrime 
| '';

shiftExpression : additiveExpression shiftExpressionPrime;
shiftExpressionPrime : LeftShift additiveExpression shiftExpressionPrime 
| RightShift additiveExpression shiftExpressionPrime 
| '';

additiveExpression : multiplicativeExpression additiveExpressionPrime;
additiveExpressionPrime : Plus multiplicativeExpression additiveExpressionPrime 
| Minus multiplicativeExpression additiveExpressionPrime 
| '';

multiplicativeExpression : castExpression multiplicativeExpression 
| Star castExpression multiplicativeExpression 
| Div castExpression multiplicativeExpression
| Mod castExpression multiplicativeExpression 
| '';

castExpression : unaryExpression 
| constanExpression 
| Identifier invokeExpression;

invokeExpression : LeftParen expression RightParen 
| '';

constanExpression : Constant 
| DigitSequence 
| True 
| False
| StringLiteral;

unaryExpression : unaryExpressionPrime unaryExpressionAlpha;

unaryExpressionAlpha : unaryOperator castExpression | typeSpecifier;

unaryExpressionPrime : PlusPlus | MinusMinus;

unaryOperator : Plus | Minus;

selectionStatement : If LeftParen expression RightParen compoundStatement selectionStatementPrime;
selectionStatementPrime : Else statement | '';

