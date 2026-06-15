export class WalletService {
  private wallet: any;

  connect(wallet: any) {
    this.wallet = wallet;

    return {
      success: true,
      address: wallet.publicKey
    };
  }

  getWallet() {
    return this.wallet;
  }
}
