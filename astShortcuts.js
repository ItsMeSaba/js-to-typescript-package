const getVariableInit = ref => ref.declarations[0].init;

const getVariableId = ref => ref.declarations[0].id;


module.exports = {
    getVariableInit,
    getVariableId
}