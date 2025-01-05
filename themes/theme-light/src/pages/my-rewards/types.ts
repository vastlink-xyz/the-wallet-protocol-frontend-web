export enum RewardActionType {
  // Daily Tasks
  DAILY_LOGIN = 'daily_login',
  DAILY_AI_CHAT = 'daily_ai_chat',

  // One-time Product Tasks
  FIRST_AI_CHAT = 'first_ai_chat',
}

export interface IRewardRequest {
  _id: string;
  userId: string;
  action: RewardActionType;
  status: string;
  displayName: string;
  actionContext?: any;
  amount: number;
  createdAt: string;
  claimedAt?: string;
  fulfilledAt?: string;
  errorMessage?: string;
}

export interface IUserActivity {
  _id: string;
  userId: string;
  activityType: string;
  status: string;
  createdAt: string;
}