import { writeFileSync, readFileSync } from 'fs';

let lib = readFileSync('lib/ng5-select2.component.ts').toString();
writeFileSync('lib/ng5-select2.component.ts.bak', lib);

const styles = readFileSync('lib/ng5-select2.component.css');
lib = lib.replace(/CSS/, `${styles}`);

writeFileSync('lib/ng5-select2.component.ts', lib);