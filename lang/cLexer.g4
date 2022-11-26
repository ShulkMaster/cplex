lexer grammar cLexer;

Whitespace: [ \t]+ -> skip;

Newline
  : (   '\r' '\n'?
  |   '\n'
  )
  -> skip
  ;

BlockComment
  : '/*' .*? '*/'
  -> skip
  ;

LineComment
  : '//' ~[\r\n]*
  -> skip
  ;

// keywords
Break : 'break';
Case : 'case';
Char : 'char';
Const : 'const';
Continue : 'continue';
Default : 'default';
Do : 'do';
Double : 'double';
Else : 'else';
Enum : 'enum';
Float : 'float';
For : 'for';
If : 'if';
Inline : 'inline';
Int : 'int';
Long : 'long';
Return : 'return';
Short : 'short';
Bool : 'bool';
Signed : 'signed';
Sizeof : 'sizeof';
Static : 'static';
Struct : 'struct';
Switch : 'switch';
Typedef : 'typedef';
Unsigned : 'unsigned';
Void : 'void';
While : 'while';
True: 'true';
False: 'false';

// puntuation
LeftParen : '(';
RightParen : ')';
LeftBracket : '[';
RightBracket : ']';
LeftBrace : '{';
RightBrace : '}';
Question : '?';
Colon : ':';
Semi : ';';
Comma : ',';

// operators
//compare
Less : '<';
LessEqual : '<=';
Greater : '>';
GreaterEqual : '>=';
LeftShift : '<<';
RightShift : '>>';

//aritmetic
Plus : '+';
PlusPlus : '++';
Minus : '-';
MinusMinus : '--';
Star : '*';
Div : '/';
Mod : '%';

//logic and bits
And : '&';
Or : '|';
AndAnd : '&&';
OrOr : '||';
Caret : '^';
Not : '!';
Tilde : '~';
Equal : '==';
NotEqual : '!=';

// assigment
Assign : '=';
StarAssign : '*=';
DivAssign : '/=';
ModAssign : '%=';
PlusAssign : '+=';
MinusAssign : '-=';

// access
Arrow : '->';
Dot : '.';

StringLiteral
    :   EncodingPrefix? '"' SCharSequence? '"'
    ;

Constant
    :   IntegerConstant
    |   FloatingConstant
    |   CharacterConstant
    ;

DigitSequence
    :   Digit+
    ;


Identifier
    :   Nondigit
        (   Nondigit
        |   Digit
        )*
    ;

fragment
EncodingPrefix
    :   'u8'
    |   'u'
    |   'U'
    |   'L'
    ;

fragment
IntegerConstant
    :   DecimalConstant IntegerSuffix?
    |   HexadecimalConstant IntegerSuffix?
    ;

fragment
IntegerSuffix
    :   UnsignedSuffix LongSuffix?
    |   UnsignedSuffix LongLongSuffix
    |   LongSuffix UnsignedSuffix?
    |   LongLongSuffix UnsignedSuffix?
    ;

fragment
HexadecimalConstant
    :   HexadecimalPrefix HexadecimalDigit+
    ;

fragment
HexadecimalPrefix
    :   '0' [xX]
    ;

fragment
UnsignedSuffix
    :   [uU]
    ;

fragment
LongSuffix
    :   [lL]
    ;

fragment
LongLongSuffix
    :   'll' | 'LL'
    ;

fragment
DecimalConstant
    :   NonzeroDigit Digit*
    ;

fragment
FloatingConstant
    :   FractionalConstant ExponentPart? FloatingSuffix?
    |   DigitSequence ExponentPart FloatingSuffix?
    ;

fragment
FractionalConstant
    :   DigitSequence? '.' DigitSequence
    |   DigitSequence '.'
    ;

fragment
CharacterConstant
    :   '\'' CCharSequence '\''
    |   'L\'' CCharSequence '\''
    |   'u\'' CCharSequence '\''
    |   'U\'' CCharSequence '\''
    ;

fragment
ExponentPart
    :   [eE] Sign? DigitSequence
    ;

fragment
FloatingSuffix
    :   [flFL]
    ;

fragment
CCharSequence
    :   CChar+
    ;

fragment
CChar
   :   ~['\\\r\n]
   |   EscapeSequence
   ;

fragment
SCharSequence
    : SChar+
    ;

fragment
SChar
    :   ~["\\\r\n]
    |   EscapeSequence
    |   '\\\n'
    |   '\\\r\n'
    ;

fragment
EscapeSequence
    :   SimpleEscapeSequence
    |   OctalEscapeSequence
    |   HexadecimalEscapeSequence
    ;

fragment
SimpleEscapeSequence
    :   '\\' ['"?abfnrtv\\]
    ;

fragment
OctalEscapeSequence
    :   '\\' OctalDigit OctalDigit? OctalDigit?
    ;

fragment
HexadecimalEscapeSequence
    :   '\\x' HexadecimalDigit+
    ;

fragment
Sign
    :   [+-]
    ;

fragment
Nondigit
    :   [a-zA-Z_]
    ;

fragment
NonzeroDigit
    :   [1-9]
    ;

fragment
Digit
    :   [0-9]
    ;

fragment
OctalDigit
    :   [0-7]
    ;

fragment
HexadecimalDigit
    :   [0-9a-fA-F]
    ;
