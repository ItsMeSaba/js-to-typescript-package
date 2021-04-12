const { addTypesToArrowFunction } = require('../addTypes/functions/addTypesToArrowFunction');
const { addVariableArrayType } = require('../addTypes/variables/addVariableArrayType');
const { addVariableObjectType } = require('../addTypes/variables/addVariableObjectType');
const { addVariableFunctionType } = require('../addTypes/variables/addVariableFunctionType');
const { callExpression } = require('./callExpressions')

module.exports.variableDeclarations = function variableDeclarations(ref, i, loopBody) {
    
    switch (ref[i.count].declarations[0].init.type) {
        
        case 'ArrayExpression':
            addVariableArrayType(ref[i.count])
        break;

        case 'ObjectExpression':
            addVariableObjectType(ref, i)    
        break;            
        
        case 'CallExpression':
            callExpression(ref[i.count], i, loopBody);
        break;

        case 'ArrowFunctionExpression':
            addTypesToArrowFunction(ref[i.count], i, loopBody)
        break;

        case 'FunctionExpression':
            addVariableFunctionType(ref[i.count], i, loopBody)
        break;
    }
}  