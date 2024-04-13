// JavaScript로 컴파일 진행하기
 
const solc = require('solc');
const fs = require('fs-extra');
const path = require('path');
 
class Contract {
    static compile(_filename) {
        const contractPath = path.join(__dirname, '../contracts', _filename);
        const data = JSON.stringify({
            language: 'Solidity',
            sources: {
                [_filename]: {
                    content: fs.readFileSync(contractPath, 'utf8'),
                },
            },
            settings: {
                outputSelection: {
                    '*': {
                        '*': ['*'],
                    },
                },
            },
        });
 
        const compiled = JSON.parse(solc.compile(data));
 
        return Contract.writeOutput(compiled); // [abi, bytecode]
    }
 
    static writeOutput(_compiled) {
        for (const contractFileName in _compiled.contracts) {
            const [contractName] = contractFileName.split('.');
            const contract = _compiled.contracts[contractFileName][contractName];
 
            const abi = contract.abi;
            const bytecode = contract.evm.bytecode.object;
 
            const obj = {
                abi,
                bytecode,
            };
 
            const buildPath = path.join(__dirname, '../build', `${contractName}.json`);
            fs.outputJSONSync(buildPath, obj);
 
            return [abi, bytecode];
        }
    }
}
 
module.exports = { Contract };