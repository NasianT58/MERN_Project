import rateLimit from "../config/upstash.js"
const rateLimiter = async (req, res, next) => {
    // per person rate limiting, would usually use an ip address or user id for the "rate-limit-key"
    try {
        const { success } = await rateLimit.limit("rate-limit-key") // destructing the result of the limit method to get the success property
        if (!success) {
            return res.status(429).json({ message: "Too many requests, please try again later." })
        }
        next()
    } catch (error) {
        console.error("Error in rate limiting:", error)
        res.status(500).json({ message: "Server error in rate limiting" })
    }

}

export default rateLimiter;