js-to-typescript will help you to transform Javscript code to Typescript.

Installation
---

NPM:

    npm install js-to-typescript


Import
---

js-to-typescript is designed to be imported using default import:

```js
import compiler from 'js-to-typescript';
```

CommonJs
---

```js
const compiler = require('js-to-typescript');
```



Usage
---

js-to-typescript has only default export which takes Javascript code as string end returns Typescript code

```js
import compiler from 'js-to-typescript';

compiler('let a = [1, 2, 3]')
// output: let a : number[] = [1, 2, 3]

compiler('let a = { b : 5 }') 
// output:
//  Interface aInterface {
//      b : number 
//  }
//
//  let a: aInterface = { b : 5 };
```
    

CLI
---

To use CLI tool install package globally 
    
    npm intall -g js-to-typescript

After you can run command from any directory

    compilejs (fileName OR folderName)


Compiling file

    compilejs index.js

Compiling files is folder

    compilejs scripts



Contribute
---

js-to-typescript isn't near perfect. You can help project to advance with:

1. Finding Bugs
2. Suggesting features
3. Collaborate