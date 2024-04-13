/* migrations/ 디렉토리 2_deploy_HelloWorld.js 파일 */
 
const helloworld = artifacts.require('HelloWorld'); 
// build 디렉토리 안의 json 파일 가져오기
 
module.exports = function (deployer) {
    deployer.deploy(helloworld);
};