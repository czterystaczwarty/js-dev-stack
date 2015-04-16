Java Script Frontend Development Stack
=========================
Prosty przykład wykorzystania [npm] + [Browserify] + [Bower] + [Babel.js] do pisaniu uporządkowanego nowoczesnego JavaScriptu (EcmaScript 6) pod przeglądarki obsługujące przynajmniej ES5 (IE9+).

Po co?
--------

* łaczenie `cat`'em kilku długich plików `.js` to dobra, ale nie najlepsza metoda budowania skryptów na produkcję,
* [VanillaJS](http://vanilla-js.com/) i globalne zmienne są świetne, ale czasem zaciągamy jakieś zależności, wtedy dobrze mieć je pod kontrolą,
* dobrze też trzymać je poza projektem,

Wymagania
--------------
* zainstalowany [node.js],
	* v0.10 powinno wystarczyć, ale...
    * [instalacja v0.12 na Ubuntu](https://nodesource.com/blog/nodejs-v012-iojs-and-the-nodesource-linux-repositories#the-nodesource-linux-repositories)
* zainstalowany [npm],
* zainstalowany [bower](http://bower.io/#install-bower)

Instalacja
-----------
1. Klonujemy repo i wchodimy do katalogu
2. Wklepujemy `$ npm install`

Użycie
-------
```sh
$ ./js-dev-stack {build|watch} [Input File] [Output File]
```

- `Input File` - Ścieżka do pliku wejściowego,
- `Output File` - Ścieżka do pliku wynikowego

#### Task `build`
* dzięki Browserify sprawdza rekurencyjnie wszystkie zależności,
* każdy moduł ma swoje prywatne `var` i publiczne `module.exports`,
* dzięki Babel.js transpiluje znalezione w modułach konstrukcje w ES6 do ES5
* [ECMAScript 6 equivalents in ES5](https://github.com/addyosmani/es6-equivalents-in-es5),
* generuje plik [source map](https://github.com/ryanseddon/source-map/wiki/Source-maps:-languages,-tools-and-other-info), dzięki któremu w Chrome DevTools widzimy kod poszczególnych modułów w ES6 zamiast załączonego do `index.html` bundla w ES5,

#### Task `watch`
* nasłuchuje na zmianach wszystkich modułów, od kótrych zależy `plik wejściowy` i przebudowuje tak samo jak `build`


------

#### praca z modułami npm

commit: [d14666f2cf9890e11298ec14b7d7af586cbba626](https://github.com/czterystaczwarty/js-dev-stack/commit/d14666f2cf9890e11298ec14b7d7af586cbba626)
```sh
$ npm install --save jquery
```

```js
var jQuery, $;
// private binding - this module only
jQuery = $ = require("jquery");
// global binding form dev tools
window.jQuery = window.$ = jQuery;
```

#### praca z modułami Bower'a

commit: [0b19a45c81a291e3dd241abb2b8f135a1b532cfc](https://github.com/czterystaczwarty/js-dev-stack/commit/0b19a45c81a291e3dd241abb2b8f135a1b532cfc)

```sh
$ bower install --save lodash
```
```js
var lodash = require("lodash");
var _ = lodash;

var arrayDiff = _.difference([1, 2, 3], [4, 2]);
```


TODO:
--------
- [x] przykład dodania zależności via npm (jQuery),
- [x] przykład dodania zależności via Bower (Lodash)
	- https://github.com/eugeneware/debowerify,
- [x] cli do budowania
- [ ] taski `build-dev` i `watch` powinny korzystać z tej samej konfiguracji bundli,
- [ ] rozwiązać problem niedziałającego `watch` na OS X,
- [ ] dopisać task `build-prod`

[node.js]:http://nodejs.org/
[npm]:https://docs.npmjs.com/getting-started/what-is-npm
[Browserify]:http://browserify.org/
[Bower]:https://bower.io
[Bower'a]:https://bower.io
[Babel.js]:http://babeljs.io
