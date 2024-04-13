// web3 테스트 코드
 
const Web3 = require('web3');
 
describe('web3 테스트 코드', () => {
    let web3;
 
    it('web3 연결 테스트', () => {
        // new Web3.providers.HttpProvider("http://127.0.0.1:8545");
        web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'));
    });
 
    // 최신 블록 높이(number) 가져오기
    it('Latest Block 높이(number) 가져오기', async () => {
        const latestBlock = await web3.eth.getBlockNumber();
        console.log(latestBlock);
    });
});