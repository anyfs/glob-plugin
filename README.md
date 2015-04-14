# glob-plugin

[![npm](https://img.shields.io/npm/v/anyfs-glob-plugin.svg?style=flat-square)](https://www.npmjs.com/package/anyfs-glob-plugin)
[![npm](https://img.shields.io/npm/dm/anyfs-glob-plugin.svg?style=flat-square)](https://www.npmjs.com/package/anyfs-glob-plugin)
[![Travis](https://img.shields.io/travis/anyfs/glob-plugin.svg?style=flat-square)](https://travis-ci.org/anyfs/glob-plugin)
![npm](https://img.shields.io/npm/l/anyfs-glob-plugin.svg?style=flat-square)

Glob plugin for AnyFS.

## Usage

```js
var fs = new AnyFS(adapter);
var globPlugin = new (require('anyfs-glob-plugin'))();
fs.addPlugin(globPlugin);

fs.glob('src/**/*.js', function(err, files) {
    console.log(files);
});
```

## Acknowledgement

This plugin based on [isaacs](https://github.com/isaacs)'s [glob](https://github.com/isaacs/node-glob) package.