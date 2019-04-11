// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"introAnimation.526c8d05.js":[function(require,module,exports) {
var define;
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

parcelRequire = function (e, r, t, n) {
  var i,
      o = "function" == typeof parcelRequire && parcelRequire,
      u = "function" == typeof require && require;

  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw c.code = "MODULE_NOT_FOUND", c;
      }

      p.resolve = function (r) {
        return e[t][1][r] || r;
      }, p.cache = {};
      var l = r[t] = new f.Module(t);
      e[t][0].call(l.exports, p, l, l.exports, this);
    }

    return r[t].exports;

    function p(e) {
      return f(p.resolve(e));
    }
  }

  f.isParcelRequire = !0, f.Module = function (e) {
    this.id = e, this.bundle = f, this.exports = {};
  }, f.modules = e, f.cache = r, f.parent = o, f.register = function (r, t) {
    e[r] = [function (e, r) {
      r.exports = t;
    }, {}];
  };

  for (var c = 0; c < t.length; c++) {
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  }

  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
      return l;
    }) : n && (this[n] = l);
  }

  if (parcelRequire = f, i) throw i;
  return f;
}({
  "m6Ky": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.textHoby = exports.textTest = void 0;
    var e = "Hi, my name is Josip.<br>\nI'm a highscool junior developer, <br>\neager in learning new skills and getting more experience.<br>\nI started off as a robotician <br>\nlearning to appreciate good quality code.<br>\nThat eventually lead to me becoming a web developer";
    exports.textTest = e;
    var t = "Although almost all of my projects are made in JavaScript <br>\n    I consider myself a python developer and a linux enthusiast <br>\n\n";
    exports.textHoby = t;
  }, {}],
  "kbG+": [function (require, module, exports) {
    "use strict";

    var e = require("./text");

    screen.orientation.lock("landscape"), window.onload = function () {
      function n(e, n, t) {
        var s = e.length,
            l = 0;
        !function e(n, t, o) {
          var c = document.getElementsByClassName(t)[0];
          l < s ? (c.innerHTML = c.innerHTML.slice(0, -1), c.innerHTML += n[l], c.innerHTML += "_", setTimeout(function () {
            e(n, t, o);
          }, 70), l++) : (c.innerHTML = c.innerHTML.slice(0, -1), o && o());
        }(e, n, t);
      }

      function t(e, n) {
        e.onclick = function () {
          var t = document.getElementsByClassName("sidebar__file");
          Array.from(t).map(function (e) {
            console.table(e), e.classList.remove("file__selected");
          }), document.getElementsByClassName("window__text")[0].innerHTML = n, e.classList.add("file__selected"), document.getElementsByClassName("file__selection")[0].innerHTML = e.innerHTML;
        };
      }

      document.getElementsByClassName("tag__open")[0].innerHTML = "", document.getElementsByClassName("tag__close")[0].innerHTML = "", document.getElementsByClassName("intro__text")[0].innerHTML = "", n("<coder>", "tag__open", function () {
        n("Not Tech Support!", "intro__text", function () {
          n("</coder>", "tag__close");
        });
      }), function () {
        for (var e = document.getElementsByClassName("text__num")[0], n = 0; n <= 34; n++) {
          e.innerHTML += "".concat(n, "\n");
        }
      }(), t(document.getElementsByClassName("file__about")[0], e.textTest), t(document.getElementsByClassName("file__doing")[0], e.textHoby);
      var s,
          l = (s = null, function (e) {
        s && (s.style.display = "none"), e.style.display = "inline", s = e;
      });
      l(document.getElementsByClassName("sidebar__files")[0]), document.getElementsByClassName("icon__files")[0].onclick = function () {
        l(document.getElementsByClassName("sidebar__files")[0]);
      }, document.getElementsByClassName("icon__search")[0].onclick = function () {
        l(document.getElementsByClassName("sidebar__search")[0]);
      }, document.getElementsByClassName("icon__source")[0].onclick = function () {
        l(document.getElementsByClassName("sidebar__source")[0]);
      }, document.getElementsByClassName("icon__debug")[0].onclick = function () {
        l(document.getElementsByClassName("sidebar__debug")[0]);
      };
    };
  }, {
    "./text": "m6Ky"
  }]
}, {}, ["kbG+"], null);
},{}]