import { mkdirSync, writeFileSync } from "node:fs";

// The plan make.fun will carry out in public: turn $100 into the most
// money in 30 days, using only what an AI agent can do alone.
const PLAN =
  "Day 1: ChatGPT Plus $20, list 5 AI workflow templates for Shopify sellers at $15 on Gumroad. Days 2-10: ship 1/day, post each on X, r/Shopify. Days 11-30: reinvest into $5/day X ads, kill ads <1.5x ROAS, double winners, bundle top 3 $39. Target $30/day by d20. Day 30: $500-700.";

if ([...PLAN].length > 280 || PLAN.trim().length === 0) {
  throw new Error("plan must be 1-280 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PLAN, "utf8");
