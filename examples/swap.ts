import { Pooliq } from "../src/sdk/Pooliq";

async function run() {
  const pooliq = new Pooliq();

  const swap = await pooliq.swap.execute({
    from: "BONK",
    to: "SOL",
    amount: 10000
  });

  console.log(swap);
}

run();
