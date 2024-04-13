// block.test.js 파일
 
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
});