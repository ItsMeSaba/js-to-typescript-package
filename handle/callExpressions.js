module.exports.callExpression = function callExpression(ref, a, loopBody) {
    let args = ref.declarations[0].init.arguments;

    for(let i = 0; i < args.length; i++) {
        let type = args[i].type;

        switch (type) {
            case 'ArrowFunctionExpression':
                if(args[i].body) loopBody(args[i].body.body);
            break

            // case 'Identifier':
            //     let paramType = parseTS('let a = (b) => 5');

            //     console.log(paramType);
            // break
        }
    }
}