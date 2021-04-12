#!/usr/bin/env node

const compiler = require('./index');
const { parseTS } = require('./tsParser');
const { readFileSync, writeFileSync, readdirSync, existsSync } = require('fs');
const { join, basename, extname, isAbsolute } = require('path')
const args = process.argv.splice(2);


const isJsFile = path => extname(path) === '.js';

const isDirectory = path => extname(path).length === 0;

function compile(args) {
    if(!args[0]) throw new Error('Path Not Provided');

    const path = isAbsolute(args[0]) ? args[0] : join(process.cwd(), args[0]);
    if(!existsSync(path)) throw new Error('File doesn\'t exists');


    if(isJsFile(path)) handleFile(path);
    else if(isDirectory(path)) handleDir(path);
}



compile(args);



//Functions


function handleFile(file) {
    const destination = changeExtension(file);
    const compiled = compiler(readFileSync(file))

    writeFileSync(destination, compiled);
}

function handleDir(path) {
    let dir = readdirSync(path);

    for(let i = 0; i < dir.length; i++) {
        compile([ join(path, dir[i]) ])
    }
}


function changeExtension(file) {
    const arr = file.split('.');
    arr[arr.length-1] = '.ts';

    return arr.join('');
}    