module.exports.addTypesToExpressionStatement = function addTypesToExpressionStatement(ref, loopBody) {
    let args = ref.expression.arguments;
    
    if(!args) return false;

    for(let i = 0; i < args.length; i++) {
        
        switch (args[i].type) {
            case 'ArrowFunctionExpression':
                loopBody(args[i].body.body)
            break;

            case 'FunctionExpression':
                loopBody(args[i].body.body)
            break;
        }    
    }
}