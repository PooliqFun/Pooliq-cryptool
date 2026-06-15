export class TransactionService {
  async send(tx: any) {
    console.log("Executing transaction...");

    return {
      success: true,
      txid: "POOLIQ_TX_" + Date.now()
    };
  }
}
