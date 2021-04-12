const { addTypesToFunction } = require('../addTypes/functions/addTypesToFunction')

module.exports.functionDeclarations = function functionDeclarations(ref, i, loopBody) {
    addTypesToFunction(ref)

    loopBody(ref.body.body)
}