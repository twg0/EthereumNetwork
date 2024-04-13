// web3 테스트 코드
 
const Web3 = require('web3');
 
describe('web3 테스트 코드', () => {
    let web3;
    let accounts;
 
    let sender; // 보내는 사람
    let received; // 받는 사람
 
    it('web3 연결 테스트', () => {
        // new Web3.providers.HttpProvider("http://127.0.0.1:8545");
        web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'));
    });
 
    it('전체 accounts 가져오기', async () => {
        // 현재 가나쉬에 있는 accounts
        accounts = await web3.eth.getAccounts();
        sender = accounts[0];
        received = accounts[1];
        console.log(accounts);
    });
 
    it('트랜잭션 횟수 구해오기', async () => {
        const txCount = await web3.eth.getTransactionCount(sender);
        console.log(txCount);
 
        // 트랜잭션 횟수를 hex 단위로 변환
        console.log(web3.utils.toHex(txCount));
    });
});