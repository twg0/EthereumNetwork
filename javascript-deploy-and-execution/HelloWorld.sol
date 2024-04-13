// 스마트 컨트랙트 코드
 
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15; // 버전
 
// HelloWorld 라는 컨트랙트 생성
contract HelloWorld {
    string public value; // 상태 변수
    // 상태 변수를 public으로 할 경우 getter 함수를 자동으로 만들어준다.
    constructor() {
        value = 'Hello World!';
    }
 
    // 인스턴스에 있는 상태변수를 바꾸는 함수
    function setValue(string memory _v) public {
        value = _v;
    }
}