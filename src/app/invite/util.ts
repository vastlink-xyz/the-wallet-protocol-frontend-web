
export interface InviteInfoData {
  amount: string;
  from: string;
  fromEmail: string;
  id: string;
  to: string;
  toEmail: string;
  token: string;
  status: InviteStatus;
}

export type InviteStatus = 'PENDING' | 'REGISTERED' | 'WAITING' | 'COMPLETED';
