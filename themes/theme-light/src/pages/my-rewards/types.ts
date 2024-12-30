export interface IRewardRequest {
  _id: string;
  userId: string;
  action: string;
  status: string;
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
