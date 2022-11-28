import antlr4 from 'antlr4';
import papaparse from 'papaparse';
import {readFileSync, writeFileSync} from 'fs';
import cLexer from './lexer/cLexer.js';
import {CParser, ParseNode} from './parser/CParser.js';

const stream = readFileSync('samples/declare.c');

const charStream = new antlr4.InputStream(stream.toString());
const lexer = new cLexer(charStream);
const parser = new CParser(lexer);

const csv = readFileSync('lang/xd.csv');

const csvData = papaparse.parse(csv.toString(), {});
const table = parser.table;

const header = csvData.data[0];
for (let x = 1; x < csvData.data.length; x++) {
  const row = csvData.data[x];
  if (!Boolean(row[0])) continue;
  const prod = row[0];
  const rule = table.getRule(prod);
  if (!rule) {
    console.log('Missing Rule ' + prod);
    continue;
  }
  for (let j = 1; j < row.length; j++) {
    const token = row[j];
    const tokenName = header[j];
    const productions = rule[tokenName];
    if(!token && !productions){
      continue;
    }
    if (token && productions) {
      const ruleList = token.split(/::=/)[1].trim().split(' ');
      let areEqual = ruleList.length === productions.length;
      for (let i = 0; i < ruleList.length; i++){
        let rule = ruleList[i];
        if(rule === 'ε'){
          rule = '';
        }
        areEqual = areEqual && rule === productions[i];
      }
      if(!areEqual){
        console.log(`[${prod}:${tokenName}] -> No son iguales`);
        console.log(`\t[expected] -> ${ruleList.join(' ')}`);
        console.log(`\t[actual] -> ${productions.join(' ')}`);
      }
    }
    if (!token && productions) {
      console.log(`[${prod}:${tokenName}] -> No deberia existir`);
    }
    if (token && !productions) {
      console.log(`[${prod}:${tokenName}] -> Regla faltante`);
    }
  }
}

const ast = parser.parse();

function clear(ast: ParseNode): void {
  delete ast.up;
  ast.children.forEach(clear);
}

clear(ast);
writeFileSync('out/ast.json', JSON.stringify(ast, undefined, 2));
