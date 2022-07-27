import { WebClient, LogLevel } from '@slack/web-api';
import { config } from './config.js';

const client = new WebClient(config.slackInfo.oauthToken, {
  logLevel: LogLevel.DEBUG,
});

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
const id = findConversation('test');

export async function publishMessage(id, text) {
  try {
    const result = await client.chat.postMessage({
      token: config.slackInfo.oauthToken,
      channel: config.slackInfo.channelName,
      text: text,
    });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
publishMessage(id, 'Hello world :tada:');
