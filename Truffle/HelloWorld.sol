/* contracts/ 디렉토리 HelloWorld.sol 파일 */
 
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15; // 버전
 
// HelloWorld 라는 컨트랙트 생성
contract HelloWorld {
    string public value; // 상태 변수
 
    constructor() {
        value = 'Hello World!';
    }
 
    // 인스턴스에 있는 상태변수를 바꾸는 함수
    function setValue(string memory _v) public {
        value = _v;
    }
}