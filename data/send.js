import { NCPClient } from 'node-sens';
import { config } from '../config.js';
import { WebClient, LogLevel } from '@slack/web-api';

const ncp = new NCPClient(config.ncpcInfo);

export async function sendMessage(phone, msg) {
  const ret = await ncp.sendSMS({
    to: phone,
    content: msg,
  });
  return ret;
}

const client = new WebClient(config.slackInfo.oauthToken, {
  logLevel: LogLevel.DEBUG,
});

export async function publishMessage(id, text) {
  try {
    await client.chat.postMessage({
      token: config.slackInfo.oauthToken,
      channel: config.slackInfo.channelName,
      text: text,
    });
  } catch (error) {
    console.error(error);
  }
}

//slack에서 conversationId 찾을때 활용
export async function findConversation(name) {
  try {
    const result = await client.conversations.list({
      token: config.slackInfo.oauthToken,
    });
    for (const channel of result.channels) {
      if (channel.name === name) {
        const conversationId = channel.id;
        return conversationId;
      }
    }
  } catch (error) {
    console.error(error);
  }
}
