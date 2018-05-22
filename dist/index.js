(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.asyncLoad = global.asyncLoad || {})));
}(this, (function (exports) { 'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

function loadScript(script, done) {
  // if skipWhenSupports function return true, then skip this script
  if (typeof script.skipWhenSupports === 'function' && script.skipWhenSupports()) {
    done();
    return;
  }

  var js = document.createElement('script');
  if ((typeof script === 'undefined' ? 'undefined' : _typeof(script)) === 'object') {
    Object.keys(script).forEach(function (key) {
      if (key !== 'skipWhenSupports') {
        js[key] = script[key];
      }
    });
    if (script.async !== false) {
      js.async = true;
    }
    if (script.defer !== false) {
      js.defer = true;
    }
  } else {
    js.src = script;
    js.async = true;
    js.defer = true;
  }
  js.onload = function () {
    done();
  };
  js.onerror = function () {
    done(new Error('Failed to load script ' + script));
  };
  document.head.appendChild(js);
}

function asyncLoadDependencies() {
  var urls = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  if (urls.length === 0) {
    callback();
    return;
  }
  var count = 0;
  urls.forEach(function (url) {
    loadScript(url, function () {
      count += 1;
      if (count === urls.length) {
        callback();
      }
    });
  });
}

var src = asyncLoadDependencies;

exports['default'] = src;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBsb2FkU2NyaXB0IChzY3JpcHQsIGRvbmUpIHtcbiAgLy8gaWYgc2tpcFdoZW5TdXBwb3J0cyBmdW5jdGlvbiByZXR1cm4gdHJ1ZSwgdGhlbiBza2lwIHRoaXMgc2NyaXB0XG4gIGlmICh0eXBlb2Ygc2NyaXB0LnNraXBXaGVuU3VwcG9ydHMgPT09ICdmdW5jdGlvbicgJiYgc2NyaXB0LnNraXBXaGVuU3VwcG9ydHMoKSkge1xuICAgIGRvbmUoKVxuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QganMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuICBpZiAodHlwZW9mIHNjcmlwdCA9PT0gJ29iamVjdCcpIHtcbiAgICBPYmplY3Qua2V5cyhzY3JpcHQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGtleSAhPT0gJ3NraXBXaGVuU3VwcG9ydHMnKSB7XG4gICAgICAgIGpzW2tleV0gPSBzY3JpcHRba2V5XVxuICAgICAgfVxuICAgIH0pXG4gICAgaWYgKHNjcmlwdC5hc3luYyAhPT0gZmFsc2UpIHtcbiAgICAgIGpzLmFzeW5jID0gdHJ1ZVxuICAgIH1cbiAgICBpZiAoc2NyaXB0LmRlZmVyICE9PSBmYWxzZSkge1xuICAgICAganMuZGVmZXIgPSB0cnVlXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGpzLnNyYyA9IHNjcmlwdFxuICAgIGpzLmFzeW5jID0gdHJ1ZVxuICAgIGpzLmRlZmVyID0gdHJ1ZVxuICB9XG4gIGpzLm9ubG9hZCA9ICgpID0+IHtcbiAgICBkb25lKClcbiAgfVxuICBqcy5vbmVycm9yID0gKCkgPT4ge1xuICAgIGRvbmUobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBzY3JpcHQgJyArIHNjcmlwdCkpXG4gIH1cbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChqcylcbn1cblxuZnVuY3Rpb24gYXN5bmNMb2FkRGVwZW5kZW5jaWVzICh1cmxzID0gW10sIGNhbGxiYWNrID0gKCkgPT4ge30pIHtcbiAgaWYgKHVybHMubGVuZ3RoID09PSAwKSB7XG4gICAgY2FsbGJhY2soKVxuICAgIHJldHVyblxuICB9XG4gIGxldCBjb3VudCA9IDBcbiAgdXJscy5mb3JFYWNoKCh1cmwpID0+IHtcbiAgICBsb2FkU2NyaXB0KHVybCwgKCkgPT4ge1xuICAgICAgY291bnQgKz0gMVxuICAgICAgaWYgKGNvdW50ID09PSB1cmxzLmxlbmd0aCkge1xuICAgICAgICBjYWxsYmFjaygpXG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3luY0xvYWREZXBlbmRlbmNpZXNcbiJdLCJuYW1lcyI6WyJsb2FkU2NyaXB0Iiwic2NyaXB0IiwiZG9uZSIsInNraXBXaGVuU3VwcG9ydHMiLCJqcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiYXN5bmMiLCJkZWZlciIsInNyYyIsIm9ubG9hZCIsIm9uZXJyb3IiLCJFcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsImFzeW5jTG9hZERlcGVuZGVuY2llcyIsInVybHMiLCJjYWxsYmFjayIsImxlbmd0aCIsImNvdW50IiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxVQUFULENBQXFCQyxNQUFyQixFQUE2QkMsSUFBN0IsRUFBbUM7O01BRTdCLE9BQU9ELE9BQU9FLGdCQUFkLEtBQW1DLFVBQW5DLElBQWlERixPQUFPRSxnQkFBUCxFQUFyRCxFQUFnRjs7Ozs7TUFLMUVDLEtBQUtDLFNBQVNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBWDtNQUNJLFFBQU9MLE1BQVAseUNBQU9BLE1BQVAsT0FBa0IsUUFBdEIsRUFBZ0M7V0FDdkJNLElBQVAsQ0FBWU4sTUFBWixFQUFvQk8sT0FBcEIsQ0FBNEIsVUFBQ0MsR0FBRCxFQUFTO1VBQy9CQSxRQUFRLGtCQUFaLEVBQWdDO1dBQzNCQSxHQUFILElBQVVSLE9BQU9RLEdBQVAsQ0FBVjs7S0FGSjtRQUtJUixPQUFPUyxLQUFQLEtBQWlCLEtBQXJCLEVBQTRCO1NBQ3ZCQSxLQUFILEdBQVcsSUFBWDs7UUFFRVQsT0FBT1UsS0FBUCxLQUFpQixLQUFyQixFQUE0QjtTQUN2QkEsS0FBSCxHQUFXLElBQVg7O0dBVkosTUFZTztPQUNGQyxHQUFILEdBQVNYLE1BQVQ7T0FDR1MsS0FBSCxHQUFXLElBQVg7T0FDR0MsS0FBSCxHQUFXLElBQVg7O0tBRUNFLE1BQUgsR0FBWSxZQUFNOztHQUFsQjtLQUdHQyxPQUFILEdBQWEsWUFBTTtTQUNaLElBQUlDLEtBQUosQ0FBVSwyQkFBMkJkLE1BQXJDLENBQUw7R0FERjtXQUdTZSxJQUFULENBQWNDLFdBQWQsQ0FBMEJiLEVBQTFCOzs7QUFHRixTQUFTYyxxQkFBVCxHQUFnRTtNQUFoQ0MsSUFBZ0MsdUVBQXpCLEVBQXlCO01BQXJCQyxRQUFxQix1RUFBVixZQUFNLEVBQUk7O01BQzFERCxLQUFLRSxNQUFMLEtBQWdCLENBQXBCLEVBQXVCOzs7O01BSW5CQyxRQUFRLENBQVo7T0FDS2QsT0FBTCxDQUFhLFVBQUNlLEdBQUQsRUFBUztlQUNUQSxHQUFYLEVBQWdCLFlBQU07ZUFDWCxDQUFUO1VBQ0lELFVBQVVILEtBQUtFLE1BQW5CLEVBQTJCOzs7S0FGN0I7R0FERjs7O0FBVUYsVUFBaUJILHFCQUFqQjs7Ozs7OyJ9
