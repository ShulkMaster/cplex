import {readFileSync} from 'fs';
import papaparse from 'papaparse';
import {SyntaxTable} from './syntax/SyntaxTable.js';
import {
  cSyntaxProvider,
  DeclarationSyntaxProvider,
  FunctionSyntaxProvider,
  statementSyntaxProvider,
  expressionSyntaxProvider,
} from './syntax/index.js';

const csv = readFileSync('lang/xd.csv');

const csvData = papaparse.parse(csv.toString(), {});
const table = new SyntaxTable();

table.addSyntaxProvider(cSyntaxProvider);
table.addSyntaxProvider(DeclarationSyntaxProvider);
table.addSyntaxProvider(FunctionSyntaxProvider);
table.addSyntaxProvider(statementSyntaxProvider);
table.addSyntaxProvider(expressionSyntaxProvider);

export const validateSyntax = (): void => {
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
}
