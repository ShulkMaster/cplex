import {DeclarationSet} from './DeclarationSyntax';
import {FunctionSet} from './functionSyntax';
import {ExpressionSet} from './ExpressionSyntax';

export type Production<T extends string> = {
  [k in T]: T;
};

type ObjectFromList<T extends ReadonlyArray<string>> = {
  [K in (T extends ReadonlyArray<infer U> ? U : never)]: never;
};

const Rules = ['Whitespace', 'Newline', 'BlockComment',
  'LineComment', 'Break', 'Case', 'Char', 'Const',
  'Continue', 'Default', 'Do', 'Double', 'Else',
  'Enum', 'Float', 'For', 'If', 'Inline', 'Int',
  'Long', 'Return', 'Short', 'Bool', 'Signed', 'Sizeof',
  'Static', 'Struct', 'Switch', 'Typedef', 'Unsigned',
  'Void', 'Volatile', 'While', 'True', 'False',
  'LeftParen', 'RightParen', 'LeftBracket', 'RightBracket',
  'LeftBrace', 'RightBrace', 'Question', 'Colon',
  'Semi', 'Comma', 'Less', 'LessEqual', 'Greater',
  'GreaterEqual', 'LeftShift', 'RightShift', 'Plus',
  'PlusPlus', 'Minus', 'MinusMinus', 'Star', 'Div',
  'Mod', 'And', 'Or', 'AndAnd', 'OrOr', 'Caret',
  'Not', 'Tilde', 'Equal', 'NotEqual', 'Assign',
  'StarAssign', 'DivAssign', 'ModAssign', 'PlusAssign',
  'MinusAssign', 'Arrow', 'Dot', 'StringLiteral',
  'Constant', 'DigitSequence', 'Identifier'] as const;

type TerminalRules = ObjectFromList<typeof Rules>;

export type Terminal = keyof TerminalRules | '' | 'EOF';

export type Derivations =
  | DeclarationSet
  | FunctionSet
  | ExpressionSet
  | 'compilationUnitA'
  | 'compilationUnit';

export type CSyntax = Production<Derivations>;

export type Derivation = Terminal | keyof CSyntax;




