// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Chatroom, Message, User, UserChatroom } = initSchema(schema);

export {
  Chatroom,
  Message,
  User,
  UserChatroom
};