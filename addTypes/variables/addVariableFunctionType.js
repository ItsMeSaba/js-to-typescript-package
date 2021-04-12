module.exports.addVariableFunctionType = function addVariableFunctionType(ref, a, loopBody) {
    // console.log('ref', ref.declarations[0].init.body.body)

    loopBody(ref.declarations[0].init.body.body)
}