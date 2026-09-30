const fs = require('fs');
let code = fs.readFileSync('src/pages/Home.jsx', 'utf8');

const brokenFunc = "const getFlagUrl = (id) => {\n  const map = { germany: 'de', finland: 'fi', ireland: 'ie', netherlands: 'nl', france: 'fr', spain: 'es', italy: 'it', poland: 'pl', austria: 'at', sweden: 'se', denmark: 'dk' };\n  return https://flagcdn.com/w640/.png;\n};\n\n";
const correctFunc = 'const getFlagUrl = (id) => { const map = { germany: "de", finland: "fi", ireland: "ie", netherlands: "nl", france: "fr", spain: "es", italy: "it", poland: "pl", austria: "at", sweden: "se", denmark: "dk" }; return https://flagcdn.com/w640/.png; };\n\n';

code = code.replace(brokenFunc, correctFunc);

fs.writeFileSync('src/pages/Home.jsx', code);
