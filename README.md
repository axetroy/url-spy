# url-spy
[![Greenkeeper badge](https://badges.greenkeeper.io/axetroy/url-spy.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/axetroy/url-spy.svg?branch=master)](https://travis-ci.org/axetroy/url-spy)
[![Dependency](https://david-dm.org/axetroy/url-spy.svg)](https://david-dm.org/axetroy/url-spy)
![License](https://img.shields.io/badge/license-MIT-green.svg)
[![Prettier](https://img.shields.io/badge/Code%20Style-Prettier-green.svg)](https://github.com/prettier/prettier)
![Node](https://img.shields.io/badge/node-%3E=6.0-blue.svg?style=flat-square)
[![npm version](https://badge.fury.io/js/url-spy.svg)](https://badge.fury.io/js/url-spy)

url spy, listen the url when it change

## Installation
```bash
npm install url-spy
```

## Usage

```javascript
import urlSpy from 'url-spy';

urlSpy.on('urlchange', function(oldLocation,newLocation,meta){
  
});
```

## Contributing

```bash
git clone https://github.com/axetroy/url-spy.git
cd ./url-spy
yarn
```

You can flow [Contribute Guide](https://github.com/axetroy/url-spy/blob/master/contributing.md)

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars1.githubusercontent.com/u/9758711?v=3" width="100px;"/><br /><sub>Axetroy</sub>](http://axetroy.github.io)<br />[💻](https://github.com/gpmer/gpm.js/commits?author=axetroy) 🔌 [⚠️](https://github.com/gpmer/gpm.js/commits?author=axetroy) [🐛](https://github.com/gpmer/gpm.js/issues?q=author%3Aaxetroy) 🎨 |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

The [MIT License](https://github.com/axetroy/url-spy/blob/master/LICENSE)