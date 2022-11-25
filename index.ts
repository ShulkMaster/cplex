import antlr4 from 'antlr4';
import { readFileSync } from 'fs';
import cLexer from './lexer/cLexer.js';
import { CParser } from './parser/CParser.js';

const stream = readFileSync('samples/enum.c');

const charStream = new antlr4.InputStream(stream.toString());
const lexer = new cLexer(charStream);
const parser = new CParser(lexer);

parser.parse();
