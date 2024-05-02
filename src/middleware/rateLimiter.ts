import rateLimit from "express-rate-limit";

export const rateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 1,
  message: {
    message: "Too many requests from this IP, please try again later.",
  },
  statusCode: 429,
});
