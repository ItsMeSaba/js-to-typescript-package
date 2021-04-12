const { variableDeclarations } = require('./handle/variableDeclarations');
const { functionDeclarations } = require('./handle/functionDeclarations');
const { forLoopDeclarations } = require('./handle/forLoopDeclarations');
const { callExpression } = require('./handle/callExpressions');
const { ifStatements } = require('./handle/ifStatements');
const { expressionStatements } = require('./handle/expressionStatements');

module.exports.loopBody = function loopBody(ref) {
    if(!ref) return false;

    // Looping over code
    // i is object, to be passed down its reference and changed from other function
    for(let i = { count : 0 }; i.count < ref.length; i.count++) {
        
        // Handling different actions
        switch(ref[i.count].type) {
            case 'VariableDeclaration':
                variableDeclarations(ref, i, loopBody);
            break;
                
            case 'FunctionDeclaration':
                functionDeclarations(ref[i.count], i, loopBody)
            break;
                
            case 'ForStatement':    
                forLoopDeclarations(ref[i.count], loopBody)
            break;

            case 'IfStatement':
                ifStatements(ref[i.count], loopBody)
            break;
                
            case 'ExpressionStatement':
                expressionStatements(ref[i.count], loopBody);
            break;

            // case 'CallExpression':
            //     callExpression(ref[i.count],loopBody)
            //     console.log('callexp', ref[i.count])
            // break;
            
            // case 'FunctionExpression':
            //     functionDeclarations(ref[i.count], i);
            //     loopBody(ref[i.count].body.body)
            // break;

        }
    }
}
