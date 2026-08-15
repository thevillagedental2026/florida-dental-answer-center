import {readFile,readdir,writeFile} from "node:fs/promises";
const directory=new URL("../data/",import.meta.url);
const files=(await readdir(directory)).filter(name=>name.endsWith(".json")).sort();
const topics={};
for(const file of files)topics[file.replace(".json","")]=JSON.parse(await readFile(new URL(file,directory),"utf8"));
await writeFile(new URL("../assets/offline-data.js",import.meta.url),`window.DENTAL_ANSWER_DATA=${JSON.stringify(topics)};\n`);
console.log(`Bundled ${Object.values(topics).flat().length} answers for offline use.`);
