/* test/ 디렉토리 HelloWorld.test.js 파일 */
 
const HelloWorld = artifacts.require('HelloWorld');
 
// contract 안에서 작성할 시 배포 진행
contract('HelloWorld', (account) => {
    console.log(account); // eth.getAccounts()
 
    let hello;
    describe('Hello Contract', () => {
        it('Hello World Contract', async () => {
            hello = await HelloWorld.deployed();
        });
 
        it('get value', async () => {
            console.log(await hello.value.call());
        });
 
        it('set value', async () => {
            await hello.setValue('Hello Truffle!');
            console.log(await hello.value.call());
        });
    });
});