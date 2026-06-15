import { Pooliq } from "../src/sdk/Pooliq";

async function run() {
  const pooliq = new Pooliq();

  const result = await pooliq.staking.deposit({
    token: "SOL",
    amount: 50
  });

  console.log(result);
}

run();
