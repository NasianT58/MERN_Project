import {Ratelimit} from "@upstash/ratelimit";
import {Redis} from "@upstash/redis";

import dotenv from "dotenv";

// configuring dotenv to use .env file
dotenv.config()

// creating a rate limiter that allows 10 requests per 10 seconds, using Upstash Redis
const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(), // reads UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN from .env file
    limiter: Ratelimit.slidingWindow(10, "10 s"), // 10 requests per 10 seconds
})

export default ratelimit;