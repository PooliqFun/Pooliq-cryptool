export interface StakeParams {
  token: string;
  amount: number;
}

export interface SwapParams {
  from: string;
  to: string;
  amount: number;
}

export interface LiquidityParams {
  tokenA: string;
  tokenB: string;
  amountA: number;
  amountB: number;
}
