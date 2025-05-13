import * as stytch from 'stytch';

// Initialize Stytch client for API routes
export const stytchClient = new stytch.Client({
  project_id: process.env.STYTCH_PROJECT_ID!,
  secret: process.env.STYTCH_SECRET_KEY!,
});
