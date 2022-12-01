import {readFileSync, writeFileSync} from 'fs';
import papaparse from 'papaparse';

export function writeCode(): void {
    const csv = readFileSync('lang/xd.csv');
    const csvData: string[][] = papaparse
    .parse(csv.toString(), {})
    .data
    .filter(r => r[0]);
    const filtered = csvData
    .flatMap(r => {
        if(r[0] === 'S') return 'CompilationUnit';
        const original = r[0];
        return original[0].toUpperCase() + original.substr(1);
    })
    .join(`\n  | `);
    let union = `\nexport type CGrammar =`;
    let types = ``;
    let objects = '\n';
    const file = writeHeader();
    for(const row of csvData){
        if (!Boolean(row[0])) continue;
        const prod = row[0];
        const original = prod[0].toUpperCase() + prod[0].substr(1);
        types = types + `export type ${original} = '${row[0]}';\n`;
        union = union + `\n  | ${original}`;
        objects = objects + `const ${row[0]}: ProductionSet = {\n};`;
    }

    const content = file + types + union;
    writeFileSync('syntax/CSyntax.ts', content);
}

function writeHeader(): string {
    const imports = `import { ISyntax, ISyntaxProvider } from './ISyntaxProvider';
import { mapSet, ProductionSet } from './Set.js';

`
    return imports;
}

writeCode();