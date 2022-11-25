parser grammar c;

options {
    tokenVocab=cLexer;
}

root: program* EOF;

program:
    | declaration
    //| definition
    //| initialization
    ;

declaration
    :   declarationSpecifiers initDeclaratorList? ';'
    ;

initDeclaratorList
    :   initDeclarator initDeclaratorFollow*
    ;

initDeclaratorFollow: ',' initDeclarator;

declarationSpecifiers
    :   declarationSpecifier+
    ;

initDeclarator
    :   declarator ('=' initializer)?
    ;

declarationSpecifier
    :   Const
    |   typeSpecifier
    |   storageClassSpecifier
    ;

storageClassSpecifier
    :   'typedef'
    |   'static'
    ;

typeSpecifier
    :   ('void'
    |   'char'
    |   'short'
    |   'int'
    |   'long'
    |   'float'
    |   'double'
    |   'signed'
    |   'unsigned')
    |   structSpecifier
    |   enumSpecifier
    |   Identifier
    ;

structSpecifier
    :   Struct Identifier '{' structDeclaration+ '}'
    |   Struct '{' structDeclaration+ '}'
    |   Struct Identifier
    ;

structDeclaration
    :   specifierQualifierList structDeclaratorList ';'
    |   specifierQualifierList ';'
    ;

structDeclaratorList
    :   structDeclarator (',' structDeclarator)*
    ;

structDeclarator
    :   declarator
    |   declarator? ':' Constant
    ;

declarator
    :   pointer? Identifier
    ;

initializer
    :   assignmentExpression
    |   '{' initializerList ','? '}'
    ;

initializerList
    :   designation? initializer (',' designation? initializer)*
    ;

designation
    :   designatorList '='
    ;

designatorList
    :   designator+
    ;

designator
    :   '[' Const ']'
    |   '.' Identifier
    ;

assignmentExpression
    :   conditionalExpression
    |   unaryExpression assignmentOperator assignmentExpression
    |   DigitSequence // for
    ;

conditionalExpression
    :   logicalOrExpression ('?' expression ':' conditionalExpression)?
    ;

logicalOrExpression
    :   logicalAndExpression ( '||' logicalAndExpression)*
    ;

logicalAndExpression
    :   inclusiveOrExpression ('&&' inclusiveOrExpression)*
    ;

inclusiveOrExpression
    :   exclusiveOrExpression ('|' exclusiveOrExpression)*
    ;

exclusiveOrExpression
    :   andExpression ('^' andExpression)*
    ;

andExpression
    :   equalityExpression ( '&' equalityExpression)*
    ;

equalityExpression
    :   relationalExpression (('=='| '!=') relationalExpression)*
    ;

relationalExpression
    :   shiftExpression (('<'|'>'|'<='|'>=') shiftExpression)*
    ;

shiftExpression
    :   additiveExpression (('<<'|'>>') additiveExpression)*
    ;

additiveExpression
    :   multiplicativeExpression (('+'|'-') multiplicativeExpression)*
    ;

multiplicativeExpression
    :   castExpression (('*'|'/'|'%') castExpression)*
    ;

castExpression
    :   unaryExpression
    |   DigitSequence
    ;

unaryExpression
    :
    ('++' |  '--' |  'sizeof')*
    (postfixExpression
    |   unaryOperator castExpression
    |   'sizeof' '(' typeName ')'
    |   '&&' Identifier // GCC extension address of label
    )
    ;

typeName
    :   specifierQualifierList abstractDeclarator?
    ;

pointer
    :  (('*'|'^') Const?)+ // ^ - Blocks language extension
    ;

abstractDeclarator
    :   pointer
    |   pointer? directAbstractDeclarator
    ;

directAbstractDeclarator
    :   '(' abstractDeclarator ')'
    |   '[' Const? assignmentExpression? ']'
    |   '[' 'static' Const? assignmentExpression ']'
    |   '[' Const 'static' assignmentExpression ']'
    |   '[' '*' ']'
    |   '(' parameterTypeList? ')'
    |   directAbstractDeclarator '[' Const? assignmentExpression? ']'
    |   directAbstractDeclarator '[' 'static' Const? assignmentExpression ']'
    |   directAbstractDeclarator '[' Const 'static' assignmentExpression ']'
    |   directAbstractDeclarator '[' '*' ']'
    |   directAbstractDeclarator '(' parameterTypeList? ')'
    ;

postfixExpression
    :
    (   primaryExpression
    |   '__extension__'? '(' typeName ')' '{' initializerList ','? '}'
    )
    ('[' expression ']'
    | '(' argumentExpressionList? ')'
    | ('.' | '->') Identifier
    | ('++' | '--')
    )*
    ;

parameterTypeList
    :   parameterList (',' '...')?
    ;

parameterList
    :   parameterDeclaration (',' parameterDeclaration)*
    ;

parameterDeclaration
    :   declarationSpecifiers declarator
    |   declarationSpecifiers abstractDeclarator?
    ;

specifierQualifierList
    :   (typeSpecifier| Const) specifierQualifierList?
    ;

enumSpecifier
    :   'enum' Identifier? '{' enumeratorList ','? '}'
    |   'enum' Identifier
    ;

enumeratorList
    :   enumerator enumaratorFollow*
    ;

enumaratorFollow: ',' enumerator;

enumerator
    :   Identifier enumeratorAssign?
    ;

enumeratorAssign: '=' IntegerConstant;
