
async load dependencies before excuting main function
## USAGE


```
  import asyncLoad from 'async-load-dependencies'
  const urls = [
    '/path/to/a.js',
    '/path/to/b.js',
    {
      src: '/path/to/c.js',
      charset: 'GBK'
    }, 
    {
      src: '/path/to/fetch-polyfill',
      skipWhenSupports() {
        return window.fetch  // skip this file when fetch is supported
      }
    }
  ]
  function main () {
    // your business
  }
  asyncLoad(urls, main)
```
