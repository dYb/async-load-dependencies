function loadScript (script, done) {
  // if skipWhenSupports function return true, then skip this script
  if (typeof script.skipWhenSupports === 'function' && script.skipWhenSupports()) {
    done()
    return
  }

  const js = document.createElement('script')
  if (typeof script === 'object') {
    Object.keys(script).forEach((key) => {
      if (key !== 'skipWhenSupports') {
        js[key] = script[key]
      }
    })
    if (script.async !== false) {
      js.async = true
    }
    if (script.defer !== false) {
      js.defer = true
    }
  } else {
    js.src = script
    js.async = true
    js.defer = true
  }
  js.onload = () => {
    done()
  }
  js.onerror = () => {
    done(new Error('Failed to load script ' + script))
  }
  document.head.appendChild(js)
}

function asyncLoadDependencies (urls = [], callback = () => {}) {
  if (urls.length === 0) {
    callback()
    return
  }
  let count = 0
  urls.forEach((url) => {
    loadScript(url, () => {
      count += 1
      if (count === urls.length) {
        callback()
      }
    })
  })
}

module.exports = asyncLoadDependencies
