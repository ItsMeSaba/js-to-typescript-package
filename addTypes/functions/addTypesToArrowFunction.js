const { parseTS } = require("../../tsParser");

// const parsedTS = parseTS(`let a = (a : any): any => 5`);


module.exports.addTypesToArrowFunction = function addTypesToArrowFunction(ref, a, loopBody) {
    const parsedArrowFunction = parseTS(`let a = (a : any): any => 5`);
    let paramType = parsedArrowFunction.declarations[0].init.params[0].typeAnnotation;
    let returnType = parsedArrowFunction.declarations[0].init.returnType;
    let params = ref.declarations[0].init.params;

    ref.declarations[0].init.returnType = returnType;
    
    for(let i = 0; i < params.length; i++) {
        params[i].typeAnnotation = paramType;
    }

    loopBody(ref.declarations[0].init.body.body);
}