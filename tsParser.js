const {parse, print} = require('recast')
const tsParser = require("recast/parsers/typescript");


// Typescript code parser
module.exports.parseTS = ts => parse(ts, { parser: tsParser }).program.body[0]; 