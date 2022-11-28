compilationUnitA ::=externalDeclaration compilationUnitA
externalDeclaration ::= declarationSpecifiers Identifier declaratorPrime
declaratorPrime ::= initDeclaratorListPrime initializer ;
declaratorPrime ::= ( functionDefinition

// int x = int x;|
compilationUnitA::=''

initDeclaratorListPrime: Comma Identifier initDeclaratorListPrime
initDeclaratorListPrime ::= ''

declarationSpecifiers ::= declarationSpecifier declarationSpecifiersPrime

declarationSpecifiersPrime ::= ''
declarationSpecifiersPrime ::= declarationSpecifiers

declarationSpecifier ::= Const
declarationSpecifier ::= Static
declarationSpecifier ::= typeSpecifier

typeSpecifier ::= Char
typeSpecifier ::= Int
typeSpecifier ::= Bool

initializer ::= = initializerList
initializer ::= ''

initializerList ::= { Constant }
initializerList ::= expression

functionDefinition ::= declaration fD1
functionDefinition ::= ) fD1

fD1 ::= compoundStatement
fD1 ::= ;

declaration ::= declarationSpecifiers Identifier declarationPrime
declarationPrime ::= , declaration
declarationPrime ::= )

FuncDeclaration ::= declarationSpecifiers Identifier FuncDeclarationPrime
FuncDeclarationPrime ::= , FuncDeclaration
FuncDeclarationPrime ::= initializer ;

compoundStatement ::= Lef bI }

bI ::= ''
bI ::= blockItemList

blockItemList ::= blockItem bI

blockItem ::= FuncDeclaration
blockItem ::= statement

statementPrime ::= statement statementPrime
statementPrime ::= ''
statementPrime ::= FuncDeclaration

statement ::= iterationStatement
statement ::= compoundStatement
statement ::= expressionStatement
statement ::= selectionStatement

iterationStatement ::= For ( forCondition ) { statementPrime }

forCondition ::= forDeclaration assignmentExpression ; assignmentExpression

forDeclaration ::= FuncDeclaration

assignmentExpression ::= conditionalExpression
expressionStatement ::= expression ;

// this is redundat and is added in case we need it later
expression ::= conditionalExpression expressionPrime
expressionPrime ::= , conditionalExpression
expressionPrime ::= ''

conditionalExpression ::= logicalOrExpression conditionalExpressionPrime
conditionalExpressionPrime ::= ? expression : conditionalExpression
conditionalExpressionPrime ::= ''

logicalOrExpression ::= logicalAndExpression logicalOrExpressionPrime
logicalOrExpressionPrime ::= || logicalAndExpression logicalOrExpressionPrime
logicalOrExpressionPrime ::= ''

logicalAndExpression ::= inclusiveOrExpression logicalAndExpressionPrime
logicalAndExpressionPrime ::= && inclusiveOrExpression logicalAndExpressionPrime
logicalAndExpressionPrime ::= ''

inclusiveOrExpression ::= exclusiveOrExpression inclusiveOrExpressionPrime
inclusiveOrExpressionPrime ::= | exclusiveOrExpression inclusiveOrExpressionPrime
inclusiveOrExpressionPrime ::= ''

exclusiveOrExpression ::= andExpression exclusiveOrExpressionPrime
exclusiveOrExpressionPrime ::= ^ andExpression exclusiveOrExpressionPrime
exclusiveOrExpressionPrime ::= ''

andExpression ::= equalityExpression andExpressionPrime
andExpressionPrime ::= & equalityExpression andExpressionPrime
andExpressionPrime ::= ''

equalityExpression ::= relationalExpression equalityExpressionPrime
equalityExpressionPrime ::= == relationalExpression equalityExpressionPrime
equalityExpressionPrime ::= != relationalExpression equalityExpressionPrime
equalityExpressionPrime ::= ''

relationalExpression ::= shiftExpression relationalExpressionPrime
relationalExpressionPrime ::= < shiftExpression relationalExpressionPrime
relationalExpressionPrime ::= > shiftExpression relationalExpressionPrime
relationalExpressionPrime ::= <= shiftExpression relationalExpressionPrime
relationalExpressionPrime ::= >= shiftExpression relationalExpressionPrime
relationalExpressionPrime ::= ''

shiftExpression ::= additiveExpression shiftExpressionPrime
shiftExpressionPrime ::= << additiveExpression shiftExpressionPrime
shiftExpressionPrime ::= >> additiveExpression shiftExpressionPrime
shiftExpressionPrime ::= ''

additiveExpression ::= multiplicativeExpression additiveExpressionPrime
additiveExpressionPrime ::= + multiplicativeExpression additiveExpressionPrime
additiveExpressionPrime ::= - multiplicativeExpression additiveExpressionPrime
additiveExpressionPrime ::= ''

multiplicativeExpression ::= castExpression multiplicativeExpression
multiplicativeExpression ::= * castExpression multiplicativeExpression
multiplicativeExpression ::= / castExpression multiplicativeExpression
multiplicativeExpression ::= % castExpression multiplicativeExpression
multiplicativeExpression ::= ''

castExpression ::= unaryExpression
castExpression ::= DigitSequence
castExpression ::= constantExpression
castExpression ::= Identifier

constantExpression ::= Constant

unaryExpression ::= unaryExpressionPrime unaryExpressionAlpha

unaryExpressionAlpha ::= unaryOperator castExpression
unaryExpressionAlpha ::= typeSpecifier

unaryExpressionPrime ::= ++
unaryExpressionPrime ::= --

unaryOperator ::= +
unaryOperator ::= -

selectionStatement ::= if ( expression ) compoundStatement selectionStatementPrime
selectionStatementPrime ::= else statement
selectionStatementPrime ::= ''

