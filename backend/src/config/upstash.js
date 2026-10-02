import {Ratelimit} from "@upstash/ratelimit";
import {Redis} from "@upstash/redis";

import dotenv from "dotenv";

// configuring dotenv to use .env file
dotenv.config()

// creating a rate limiter that allows 100 requests per 60 seconds, using Upstash Redis
const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(), // reads UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN from .env file
    limiter: Ratelimit.slidingWindow(5, "10 s"), // 100 requests per 60 seconds
})

export default ratelimit;