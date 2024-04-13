// index.js 파일
 
const { Contract } = require('./controllers/compile');
const { Client } = require('./controllers/client');
 
const [abi, bytecode] = Contract.compile('HelloWorld.sol');
 
const client = new Client('ws://127.0.0.1:9005');
 
const txObject = {
    data: bytecode,
};
 
const contract = new client.web3.eth.Contract(abi);
 
// web3 deploy
async function init() {
    // contract.deploy()의 반환값은 promise 객체
    // 트랜잭션 풀에 있는 내용이 블록에 쌓일 때까지 await
    const instance = await contract.deploy(txObject).send({ from: '0x65555766ecd47f2e7a596a7da929fa5d3f1dc28d' });
    
    console.log(instance.options.address); // Contract Address
}
 
init()
 
const CA = '0x7719722c312BaF7D6D27BE0aE7E8b09f7FD3D30F';
const deployed = new client.web3.eth.Contract(abi, CA); // abi 파일과 CA를 이용해 컨트랙트 조회 가능
 
deployed.methods
    .value()
    .call()
    .then((data) => {
        console.log(data);
    });
 
deployed.methods
    .setValue('Hello Smart Contract!')
    .send({ from: '0x65555766ecd47f2e7a596a7da929fa5d3f1dc28d' })
    .then((data) => {
        console.log(data);
    });