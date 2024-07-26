export type CoinType = 'eth' | 'matic' | 'tvwt'

interface CoinInfo {
  name: string;
}

export const coinInfoMap: { [key in CoinType]: CoinInfo } = {
  eth: {
    name: 'ETH'
  },
  matic: {
    name: 'MATIC',
  },
  tvwt: {
    name: 'TVWT',
  },
};
