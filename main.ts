const fs = require('node:fs');
const path = require('node:path');

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), 'CAUTION: Do not meet your past self; they are also waiting for you to fix this.');
