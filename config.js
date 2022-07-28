import dotenv from 'dotenv';
dotenv.config();

function required(key, defaultValue = undefined) {
  const value = process.env[key] || defaultValue;
  if (value == null) {
    throw new Error(`Key ${key} is undefined`);
  }
  return value;
}

export const config = {
  db: {
    host: required('DB_HOST'),
    user: required('DB_USER'),
    database: required('DB_DATABASE'),
    password: required('DB_PASSWORD'),
  },
  host: {
    port: parseInt(required('HOST_PORT', 8080)),
  },
  ncpcInfo: {
    phoneNumber: parseInt(required('PHONE_NUMBER')),
    serviceId: required('SERVICE_ID'),
    secretKey: required('SECRET_KEY'),
    accessKey: required('ACCESS_KEY'),
  },
  slackInfo: {
    oauthToken: required('OAUTH_TOKEN'),
    channelName: required('CHANNEL_NAME'),
    channelId: required('CHANNEL_ID'),
  },
  bcrypt: {
    saltRounds: parseInt(required('SALT_ROUNDS')),
  },
  jwt: {
    jwtSecretKey: required('JWT_SECRET_KEY'),
    expiresInSec: parseInt(required('EXPIRES_IN_SEC')),
  },
};
