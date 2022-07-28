import bcrypt from 'bcrypt';
const a = '$2a$10$wsqNajk.oqNojGlVe4Rddx//CEX/mMK1BHCIcMQKVXY9a.kO';
console.log(a.length);

const pw = 'asdf';

const hashed = bcrypt.hashSync(pw, 10);
console.log(hashed);
