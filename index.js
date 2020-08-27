const NodeRSA = require('node-rsa');
const key = new NodeRSA({b: 512});

key.generateKeyPair();

const publicDer = key.exportKey('public');
const privateDer = key.exportKey('private');

console.log(publicDer);
console.log(privateDer);

const text = 'Secret Information';
const encrypted = key.encrypt(text, 'base64');

console.log(`Valor cifrado: ${encrypted}`);

const keyToDecrypt = new NodeRSA(privateDer);
const decrypted = keyToDecrypt.decrypt(encrypted, 'utf8');
console.log(`Valor original: ${decrypted}`);