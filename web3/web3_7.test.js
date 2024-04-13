// web3 테스트 코드
 
const Web3 = require('web3');
const ethTx = require('ethereumjs-tx').Transaction;
 
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
 
    it('트랜잭션 실행하기', async () => {
 
        // 0xca4d95b225d1a7a48b994da481c7d7fb3eedf0a33f84f89b28868499bcc794da (보내는 사람 개인키)
        // 앞의 0x 제거
        const privateKey = Buffer.from('ca4d95b225d1a7a48b994da481c7d7fb3eedf0a33f84f89b28868499bcc794da', 'hex');
        const txCount = await web3.eth.getTransactionCount(sender);
        const txObject = {
            nonce: web3.utils.toHex(txCount), // 보내는 사람이 발생시킨 트랜잭션 횟수
            from: sender,
            to: received,
            value: web3.utils.toHex(web3.utils.toWei('1', 'ether')), // 보낼 금액 (단위를 wei로 해야한다. 10 ** 18 -> hex)
            gasLimit: web3.utils.toHex(6721975), // 해당 트랜잭션이 사용할 수 있는 가스의 최대치
            gasPrice: web3.utils.toHex(web3.utils.toWei('1', 'gwei')), // 발신자가 지불하는 가스 당 가격
            data: web3.utils.toHex(''), // 스마트 컨트랙트와 관련된 data
        };
 
        const tx = new ethTx(txObject);
        tx.sign(privateKey); // tx.sign() 메소드를 사용하면 tx 객체 안에 서명 값을 추가해준다.
        console.log(tx);
 
        const serializedTx = tx.serialize();
        console.log(serializedTx.toString('hex'));
 
        const TxObject = await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'));
        console.log(TxObject);
    });
});