import fs from '#fs';
const body = fs.readFileSync(new URL(import.meta.url), 'utf-8')
console.log(body);
