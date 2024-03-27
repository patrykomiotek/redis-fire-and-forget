import "dotenv/config";
import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_DSN!);

// const encoder = new TextEncoder();

redis.subscribe("my-channel-1", "session-123", (error, count) => {
  if (error) {
    // Just like other commands, subscribe() can fail for some reasons,
    // ex network issues.
    console.error("Failed to subscribe: %s", error.message);
  } else {
    // `count` represents the number of channels this client are currently subscribed to.
    console.log(
      `Subscribed successfully! This client is currently subscribed to ${count} channels.`
    );
  }
});

redis.on("message", (channel, message) => {
  console.log(`Received ${message} from ${channel}`);

  // encoder.encode(`data: ${message}\n\n`);
});

// There's also an event called 'messageBuffer', which is the same as 'message' except
// it returns buffers instead of strings.
// It's useful when the messages are binary data.
// redis.on("messageBuffer", (channel, message) => {
//   // Both `channel` and `message` are buffers.
//   console.log(channel, message);
// });
