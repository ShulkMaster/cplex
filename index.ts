import antlr4 from 'antlr4';
import {readFileSync, writeFileSync} from 'fs';
import cLexer from './lexer/cLexer.js';
import {CParser, ParseNode} from './parser/CParser.js';

const stream = readFileSync('samples/declare.c');

const charStream = new antlr4.InputStream(stream.toString());
const lexer = new cLexer(charStream);
const parser = new CParser(lexer);

function clear(ast: ParseNode): void {
  delete ast.up;
  ast.children.forEach(clear);
}

try{
  const ast = parser.parse();
  clear(ast);
  writeFileSync('out/ast.json', JSON.stringify(ast, undefined, 2));
} catch (e){
  console.error('Error de parseo');
}
