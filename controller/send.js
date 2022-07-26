import { NCPClient } from 'node-sens';
import { config } from '../config.js';
const ncp = new NCPClient(config.ncpcInfo);

export async function sendMessage(phone, msg) {
  const ret = await ncp.sendSMS({
    to: phone,
    content: msg,
  });
  return ret;
}
console.log(sendMessage('01066389228', 'Hello SENS'));
