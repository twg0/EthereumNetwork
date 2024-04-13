// block.test.js
 
const Web3 = require("web3");
 
describe("Block test", () => {
  let web3;
 
  it("web3 연결 테스트", async () => {
    web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:9000"));
 
    const block_number = await web3.eth.getBlockNumber();
    console.log("블록 number : ", block_number);
 
    const block = await web3.eth.getBlock(10, true);
    console.log("블록 number 10 : ", block);
  });
 
  // getTransaction() 사용자가 서명까지 완료한 데이터의 결과물을 보여줌
  // EVM을 거치기 전의 트랜잭션 내용
  it("getTransaction", async () => {
    const tx = await web3.eth.getTransaction(
      "0x75c503bd98e2bbf2c8272f9ae3920411d4dce0bccbf842eaab5c0c2763a9f546"
    );
    console.log("tx : ", tx);
  });
 
  // geth 가 트랜잭션 내용을 실행한 결과물 (EVM을 거쳤다가 나온 트랜잭션)
  it("getTransactionReceipt", async () => {
    const tx = await web3.eth.getTransactionReceipt(
      "0x75c503bd98e2bbf2c8272f9ae3920411d4dce0bccbf842eaab5c0c2763a9f546"
    );
    console.log("tx Receipt : ", tx);
  });
});