import { WalletService } from "../services/wallet";
import { StakingModule } from "./staking";
import { LiquidityModule } from "./liquidity";
import { SwapModule } from "./swap";

export class Pooliq {
  wallet = new WalletService();

  staking = new StakingModule();

  liquidity = new LiquidityModule();

  swap = new SwapModule();

  async connect(wallet: any) {
    return this.wallet.connect(wallet);
  }
}
