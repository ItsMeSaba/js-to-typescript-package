const { parseTS } = require('../../tsParser');

module.exports.addTypesToFunction = function addTypesToFunction(ref, a, loopBody) {
    let parsedFunction = parseTS(`function test(a: any): any {}`);
    let paramType = parsedFunction.params[0].typeAnnotation;
    let returnType = parsedFunction.returnType;
    
    // ref[a.count].returnType = returnType;
    ref.returnType = returnType;
    
    // for(let i = 0; i < ref[a.count].params.length; i++) {
    
    if(ref.params) {        
        for(let i = 0; i < ref.params.length; i++) {
            // ref[a.count].params[i].typeAnnotation = paramType;
            ref.params[i].typeAnnotation = paramType;
        }
    }
}