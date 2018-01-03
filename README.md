Static Assets Management
===================

A framework to process, concatenate, minify and revision static assets.

* CSS preprocessing,
* CSS minification,
* CSS source maps,
* Static JS code analysis,
* JS concatenation,
* JS minification,
* File revisioning,
* Revisioned file manifest.

----------

Prerequisites
-------------

#### Node
```
brew install node
```

#### Gulp
```
 npm install gulp -g
```

Installation
-----------
Installs all dependencies listed in the `package.json`
*Navigate into the project folder.*
```
 npm i
```

Configuration
-----------
Set project specific configurations such as file paths in the  `config.js` file.


Gulp Tasks
-----------
Use the `default` task to bundle all assets, run tasks individually or create a custom build in the gulpfile.
```
 gulp task
```

* `styles` - compile scss, create source maps & minify
* `scripts` - merge & minify scripts
* `fingerprint` - fingerprint files
* `revision` - revision files after fingerprint


Gulp Modules Used
-----------
* [gulp-sass](https://github.com/dlmanning/gulp-sass)
* [gulp-clean-css](https://github.com/scniro/gulp-clean-css)
* [gulp-jshint](https://github.com/spalger/gulp-jshint)
* [gulp-concat](https://github.com/contra/gulp-concat)
* [gulp-uglify](https://github.com/terinjokes/gulp-uglify)
* [gulp-rev](https://github.com/sindresorhus/gulp-rev)
* [gulp-rev-delete-original](https://github.com/nib-health-funds/gulp-rev-delete-original)
* [gulp-rev-collector](https://github.com/shonny-ua/gulp-rev-collector)
* [gulp-clean](https://github.com/peter-vilja/gulp-clean)
* [gulp-rename](https://github.com/hparra/gulp-rename)
* [gulp-sequence](https://github.com/teambition/gulp-sequence)
* [gulp-util](https://www.npmjs.com/package/gulp-util)
