import * as DB from './model.js';
import { config } from '../config.js';
import { WebClient, LogLevel } from '@slack/web-api';

const client = new WebClient(config.slackInfo.oauthToken, {
  logLevel: LogLevel.DEBUG,
});

//TODO MAKE IT SECURE
//TODO ERROR HANDLING
export async function findById(id) {
  return DB.user.findByPk(id);
}

export async function createUser(user) {
  return DB.user.create(user).then((data) => {
    console.log(data);
    return data;
  });
}

export async function updateUser(id, password) {
  return DB.user.update({ password: password }, { where: { uid: id } });
}

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
