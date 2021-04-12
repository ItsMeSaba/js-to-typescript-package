const { parse, print } = require('recast');
const tsParser = require('recast/parsers/typescript');
const { loopBody } = require('./loopBody');

const parseTS = ts => parse(ts, { parser : tsParser })

Array.prototype.insert = function(index, item) {
    this.splice(index, 0, item);

    return this;
};

module.exports = function(input) {
    try {

        let tree = parse(input);        
        let ref = tree.program.body;
        
        loopBody(ref);

        let newTree = print(tree).code;

        return newTree

    } catch(e) {
        console.log('ERROR -->', e);
    }
}