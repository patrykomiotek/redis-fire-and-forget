# Simple Redis pub/sub Node.js app

## Config

Copy file `.env.example` to `.env` and populate values.

If you're using local Redis e.g. using docker compose (`docker compose up`) you should be able to connect to `redis://localhost:6379`

If you're using external services like [Upstash](https://upstash.com/), create an account and populate all env variables `REDIS_DSN`,
`REDIS_URL`, `REDIS_TOKEN`

## Running scripts

Run subscriber: `npm run subscriber` and then publish messages: `npm run publisher`

Happy subscribing and publishing 💪
