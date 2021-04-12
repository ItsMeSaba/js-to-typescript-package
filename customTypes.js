const { stringifyWithSpaces } = require('./jsonFunctions');

// function which takes properties of object and returns typescript type of object
function objectInterface(properties) {
    let obj = {};

    for(let i = 0; i < properties.length; i++) {
        let name = properties[i].key.type === 'Literal' ? properties[i].key.value : properties[i].key.name;

        switch (properties[i].value.type) {
            case 'Literal':
                obj[name] = typeof properties[i].value.value;

                break;

            case 'ObjectExpression':
                obj[name] = objectInterface(properties[i].value.properties);

                break;

            case 'ArrayExpression':
                let json = stringifyWithSpaces(arrayInterface(properties[i].value.elements));
                obj[name] = json;

                break;
        }
    }

    return obj;
}

// function which takes properties of object and returns typescript type of object
function arrayInterface(elements) {
    let set = new Set();
    for(let i = 0; i < elements.length; i++) {

        switch (elements[i].type) {
            case 'Literal':
                if(elements[i].value === null) {
                    set.add('null');

                    continue
                }

                set.add(typeof elements[i].value)

                break;
        
            case 'ObjectExpression':
                let objType = stringifyWithoutQuotes(objectInterface(elements[i].properties));
                
                set.add(objType);

                break;

            case 'ArrayExpression':
                set.add(arrayInterface(elements[i].elements))

                break;
        }
    }

    return set.size > 1 ? `(${Array(...set).join(' | ')})[]` : `${Array(...set).join('')}[]`;
}

module.exports = {
    objectInterface,
    arrayInterface
}