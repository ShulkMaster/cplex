import {readFileSync, writeFileSync} from 'fs';
import papaparse from 'papaparse';

export function writeCode(): void {
  const csv = readFileSync('lang/xd.csv');
  const raw = papaparse
    .parse(csv.toString(), {})
    .data;
  const csvData: string[][] = raw.filter(r => r[0]);

  let union = `\nexport type CGrammar =`;
  let types = ``;
  let objects = '\n';
  const file = writeHeader();
  const headers = raw[0];
  let finalExport = `export const CSyntaxProvider: ISyntaxProvider<CGrammar> = {
  getSyntax(): ISyntax<CGrammar> {
    return {`;

  for (let x = 1; x < csvData.length;x++) {
    const row = csvData[x];
    if (!Boolean(row[0])) continue;
    const prod = row[0];
    const original = prod[0].toUpperCase() + prod.substring(1);
    types = types + `export type ${original} = '${row[0]}';\n`;
    union = union + `\n  | ${original}`;
    const keys = writeKeys(headers, row);
    console.log(prod);
    objects = objects + `\nconst ${row[0]}: ProductionSet = {` + keys + '};\n';
    finalExport = finalExport + `\n      ${prod},`;
  }
  union += ';\n';
  finalExport = finalExport + `
    }
  }
};`;
  const content = file + types + union + objects + finalExport;
  writeFileSync('syntax/CSyntax.ts', content);
}

function writeHeader(): string {
  return `import { ISyntax, ISyntaxProvider } from './ISyntaxProvider';
import { ProductionSet } from './Set.js';

`;
}

function writeKeys(headers: string[], productions: string[]): string {
  let keys = '\n';
  for (let x = 1; x < productions.length; x++){
    const rule = productions[x];
    if(!rule) continue;
    console.log(rule);

    const ruleList = rule.split(/::=/)[1].trim().split(' ');
    let terminal = headers[x-1];
    if(terminal === '$'){
      terminal = 'EOF';
    }
    for(let j = 0; j < ruleList.length; j++){
      const l = ruleList[j];
      if(l === '$'){
        ruleList[j] = 'EOF';
      }
      if(l === 'ε'){
        ruleList[j] = '';
      }
    }
    const stringJson = JSON.stringify(ruleList, undefined, 0)
      .replace(/"/g, "'");
    keys = keys + `${terminal}: ${stringJson},\n`;
  }
  return  keys;
}

writeCode();
