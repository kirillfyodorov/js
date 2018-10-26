# imagemin-jpegtran-gfw

> jpegtran imagemin plugin


## Install

```bash
$ npm install --save imagemin-jpegtran-gfw
```


## Usage

```js
var Imagemin = require('imagemin');
var jpegtran = require('imagemin-jpegtran-gfw');

var imagemin = new Imagemin()
	.src('images/*.jpg')
	.dest('build/images')
	.use(jpegtran({ progressive: true }));

imagemin.run(function (err, files) {
	if (err) {
		throw err;
	}

	console.log('Files optimized successfully!'); 
});
```

You can also use this plugin with [gulp](http://gulpjs.com):

```js
var gulp = require('gulp');
var jpegtran = require('imagemin-jpegtran-gfw');

gulp.task('default', function () {
	return gulp.src('images/*.jpg')
		.pipe(jpegtran({ progressive: true })())
		.pipe(gulp.dest('build/images'));
});
```


## Options

### progressive

Type: `Boolean`  
Default: `false`

Lossless conversion to progressive.


## License

MIT © [anhulife](https://github.com/anhulife)
