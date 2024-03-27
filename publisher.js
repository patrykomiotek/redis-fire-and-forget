import "dotenv/config";

import Redis from "ioredis";
// TODO: for upstash
// import { Redis } from "@upstash/redis";

const redis = new Redis(process.env.REDIS_DSN);
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

const message = {
  type: "session-join-status",
  payload: {
    success: true,
    playerId: "456",
    nick: "julek",
    code: "56778",
  },
};

const channel = "session-123";
await redis.publish(channel, JSON.stringify(message));

process.exit(0);
