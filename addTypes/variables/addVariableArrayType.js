const { parseTS } = require('../../tsParser');
const { stringifyWithSpaces } = require('../../jsonFunctions');
const { arrayInterface } = require('../../customTypes')

module.exports.addVariableArrayType = function addVariableArrayType(ref) {
    let arrType = stringifyWithSpaces(arrayInterface(ref.declarations[0].init.elements))
    let newArrType = parseTS(`let a : ${arrType}`).declarations[0].id.typeAnnotation;
    
    ref.declarations[0].id.typeAnnotation = newArrType;
}