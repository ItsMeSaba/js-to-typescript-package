const { parseTS } = require('../../tsParser');
const { stringifyQuotesSpaces } = require('../../jsonFunctions');
const { objectInterface } = require('../../customTypes');

module.exports.addVariableObjectType = function addVariableObjectType(ref, i) {
    let objType = stringifyQuotesSpaces(objectInterface(ref[i.count].declarations[0].init.properties));
    let interfaceName = `${ref[i.count].declarations[0].id.name}Interface`;
    let newObjType = parseTS(`let a : ${interfaceName}`).declarations[0].id.typeAnnotation;
    
    ref[i.count].declarations[0].id.typeAnnotation = newObjType;

    ref.insert(i.count, parseTS(`interface ${interfaceName} ${objType}\n\n`));
    i.count++;
}