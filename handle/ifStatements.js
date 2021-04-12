module.exports.ifStatements = function ifStatements(ref, loopBody) {
    loopBody(ref.consequent.body);
}