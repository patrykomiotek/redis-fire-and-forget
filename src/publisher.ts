import "dotenv/config";

import Redis from "ioredis";
// TODO: for upstash
// import { Redis } from "@upstash/redis";

type Message = {
  type: string;
  payload: {
    id: string;
    content?: string;
  };
};

const redis = new Redis(process.env.REDIS_DSN!);
// TODO: for upstash
// const redis = new Redis({
//   url: process.env.REDIS_URL,
//   token: process.env.REDIS_TOKEN,
// });

// setInterval(() => {
//   const message = { foo: Math.random() };
//   // Publish to my-channel-1 or my-channel-2 randomly.
//   const channel = `my-channel-${1 + Math.round(Math.random())}`;

//   // Message can be either a string or a buffer
//   redis.publish(channel, JSON.stringify(message));
//   console.log("Published %s to %s", message, channel);
// }, 1000);

const message: Message = {
  type: "user-joined",
  payload: {
    id: "qwerty",
    content: "User has joined the session",
  },
};

const channel = "session-123";

const publish = async () => {
  try {
    await redis.publish(channel, JSON.stringify(message));
    process.exit(0);
  } catch (error) {
    console.error("Redis publish error: ", error);
    process.exit(1);
  }
};

const start = async () => {
  await publish();
};

start();
