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
 
    it('ETH 단위 변경하기', () => {
        console.log(web3.utils.toWei('1', 'gwei')); // 1 Gwei를 wei 단위로 변환
        console.log(web3.utils.toWei('1', 'ether')); // 1 Ether를 wei 단위로 변환
    });
});