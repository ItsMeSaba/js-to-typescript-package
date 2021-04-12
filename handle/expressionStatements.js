const { addTypesToExpressionStatement } = require("../addTypes/expressionStatement/addTypesToExpressionStatement")

module.exports.expressionStatements = function expressionStatements(ref, loopBody) {
    addTypesToExpressionStatement(ref, loopBody)
}