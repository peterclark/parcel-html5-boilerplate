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
})({"index.js":[function(require,module,exports) {
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/******/
(function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = 0);
  /******/
})(
/************************************************************************/

/******/
{
  /***/
  "./node_modules/imba/imba.imba":
  /*!*************************************!*\
    !*** ./node_modules/imba/imba.imba ***!
    \*************************************/

  /*! no static exports found */

  /***/
  function node_modulesImbaImbaImba(module, exports, __webpack_require__) {
    eval("module.exports = __webpack_require__(/*! ./src/imba/index.imba */ \"./node_modules/imba/src/imba/index.imba\");\n\n\n//# sourceURL=webpack:///./node_modules/imba/imba.imba?");
    /***/
  },

  /***/
  "./node_modules/imba/src/imba/dom/event-manager.imba":
  /*!***********************************************************!*\
    !*** ./node_modules/imba/src/imba/dom/event-manager.imba ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesImbaSrcImbaDomEventManagerImba(module, exports, __webpack_require__) {
    eval("function iter$(a){ return a ? (a.toArray ? a.toArray() : a) : []; };\nvar Imba = __webpack_require__(/*! ../imba */ \"./node_modules/imba/src/imba/imba.imba\");\n__webpack_require__(/*! ./pointer */ \"./node_modules/imba/src/imba/dom/pointer.imba\");\n\nvar native$ = [\n\t'keydown','keyup','keypress',\n\t'textInput','input','change','submit',\n\t'focusin','focusout','focus','blur',\n\t'contextmenu','selectstart','dblclick','selectionchange',\n\t'mousewheel','wheel','scroll',\n\t'beforecopy','copy','beforepaste','paste','beforecut','cut',\n\t'dragstart','drag','dragend','dragenter','dragover','dragleave','dragexit','drop',\n\t'mouseup','mousedown','mouseenter','mouseleave','mouseout','mouseover','mousemove',\n\t'transitionstart','transitionend','transitioncancel',\n\t'animationstart','animationiteration','animationend'\n];\n\n\n\nImba.EventManager = function EventManager(node,pars){\n\tvar self = this;\n\tif(!pars||pars.constructor !== Object) pars = {};\n\tvar events = pars.events !== undefined ? pars.events : [];\n\tself._shimFocusEvents =  true && window.netscape && node.onfocusin === undefined;\n\tself.setRoot(node);\n\tself.setListeners([]);\n\tself.setDelegators({});\n\tself.setDelegator(function(e) {\n\t\tself.delegate(e);\n\t\treturn true;\n\t});\n\t\n\tfor (let i = 0, items = iter$(events), len = items.length; i < len; i++) {\n\t\tself.register(items[i]);\n\t};\n\t\n\treturn self;\n};\n\nImba.EventManager.prototype.root = function(v){ return this._root; }\nImba.EventManager.prototype.setRoot = function(v){ this._root = v; return this; };\nImba.EventManager.prototype.count = function(v){ return this._count; }\nImba.EventManager.prototype.setCount = function(v){ this._count = v; return this; };\nImba.EventManager.prototype.__enabled = {'default': false,watch: 'enabledDidSet',name: 'enabled'};\nImba.EventManager.prototype.enabled = function(v){ return this._enabled; }\nImba.EventManager.prototype.setEnabled = function(v){\n\tvar a = this.enabled();\n\tif(v != a) { this._enabled = v; }\n\tif(v != a) { this.enabledDidSet && this.enabledDidSet(v,a,this.__enabled) }\n\treturn this;\n}\nImba.EventManager.prototype._enabled = false;\nImba.EventManager.prototype.listeners = function(v){ return this._listeners; }\nImba.EventManager.prototype.setListeners = function(v){ this._listeners = v; return this; };\nImba.EventManager.prototype.delegators = function(v){ return this._delegators; }\nImba.EventManager.prototype.setDelegators = function(v){ this._delegators = v; return this; };\nImba.EventManager.prototype.delegator = function(v){ return this._delegator; }\nImba.EventManager.prototype.setDelegator = function(v){ this._delegator = v; return this; };\n\nvar initialBind = [];\n\nImba.EventManager.prototype.enabledDidSet = function (bool){\n\tbool ? this.onenable() : this.ondisable();\n\treturn this;\n};\n\nImba.EventManager.bind = function (name){\n\tif (Imba.Events) {\n\t\treturn Imba.Events.autoregister(name);\n\t} else if (initialBind.indexOf(name) == -1 && native$.indexOf(name) >= 0) {\n\t\treturn initialBind.push(name);\n\t};\n};\n\nImba.EventManager.activate = function (){\n\tvar Imba_;\n\tif (Imba.Events) { return Imba.Events };\n\tImba.Events = new Imba.EventManager(Imba.document(),{events: []});\n\tif (false) {};\n\t\n\tImba.POINTER || (Imba.POINTER = new Imba.Pointer());\n\t\n\tvar hasTouchEvents = window && window.ontouchstart !== undefined;\n\t\n\tif (hasTouchEvents) {\n\t\tImba.Events.listen('touchstart',function(e) {\n\t\t\treturn Imba.Touch.ontouchstart(e);\n\t\t});\n\t\t\n\t\tImba.Events.listen('touchmove',function(e) {\n\t\t\treturn Imba.Touch.ontouchmove(e);\n\t\t});\n\t\t\n\t\tImba.Events.listen('touchend',function(e) {\n\t\t\treturn Imba.Touch.ontouchend(e);\n\t\t});\n\t\t\n\t\tImba.Events.listen('touchcancel',function(e) {\n\t\t\treturn Imba.Touch.ontouchcancel(e);\n\t\t});\n\t};\n\t\n\tImba.Events.register('click',function(e) {\n\t\t// Only for main mousebutton, no?\n\t\tif ((e.timeStamp - Imba.Touch.LastTimestamp) > Imba.Touch.TapTimeout) {\n\t\t\te._imbaSimulatedTap = true;\n\t\t\tvar tap = new Imba.Event(e);\n\t\t\ttap.setType('tap');\n\t\t\ttap.process();\n\t\t\tif (tap._responder && tap.defaultPrevented) {\n\t\t\t\treturn e.preventDefault();\n\t\t\t};\n\t\t};\n\t\t\n\t\treturn Imba.Events.delegate(e);\n\t});\n\t\n\tImba.Events.listen('mousedown',function(e) {\n\t\tif ((e.timeStamp - Imba.Touch.LastTimestamp) > Imba.Touch.TapTimeout) {\n\t\t\tif (Imba.POINTER) { return Imba.POINTER.update(e).process() };\n\t\t};\n\t});\n\t\n\tImba.Events.listen('mouseup',function(e) {\n\t\tif ((e.timeStamp - Imba.Touch.LastTimestamp) > Imba.Touch.TapTimeout) {\n\t\t\tif (Imba.POINTER) { return Imba.POINTER.update(e).process() };\n\t\t};\n\t});\n\t\n\tImba.Events.register(['mousedown','mouseup']);\n\tImba.Events.register(initialBind);\n\tImba.Events.setEnabled(true);\n\treturn Imba.Events;\n};\n\n\n\n\nImba.EventManager.prototype.register = function (name,handler){\n\tif(handler === undefined) handler = true;\n\tif (name instanceof Array) {\n\t\tfor (let i = 0, items = iter$(name), len = items.length; i < len; i++) {\n\t\t\tthis.register(items[i],handler);\n\t\t};\n\t\treturn this;\n\t};\n\t\n\tif (this.delegators()[name]) { return this };\n\t\n\t\n\tvar fn = this.delegators()[name] = (handler instanceof Function) ? handler : this.delegator();\n\tif (this.enabled()) { return this.root().addEventListener(name,fn,true) };\n};\n\nImba.EventManager.prototype.autoregister = function (name){\n\tif (native$.indexOf(name) == -1) { return this };\n\treturn this.register(name);\n};\n\nImba.EventManager.prototype.listen = function (name,handler,capture){\n\tif(capture === undefined) capture = true;\n\tthis.listeners().push([name,handler,capture]);\n\tif (this.enabled()) { this.root().addEventListener(name,handler,capture) };\n\treturn this;\n};\n\nImba.EventManager.prototype.delegate = function (e){\n\tvar event = Imba.Event.wrap(e);\n\tevent.process();\n\tif (this._shimFocusEvents) {\n\t\tif (e.type == 'focus') {\n\t\t\tImba.Event.wrap(e).setType('focusin').process();\n\t\t} else if (e.type == 'blur') {\n\t\t\tImba.Event.wrap(e).setType('focusout').process();\n\t\t};\n\t};\n\treturn this;\n};\n\n\n\nImba.EventManager.prototype.create = function (type,target,pars){\n\tif(!pars||pars.constructor !== Object) pars = {};\n\tvar data = pars.data !== undefined ? pars.data : null;\n\tvar source = pars.source !== undefined ? pars.source : null;\n\tvar event = Imba.Event.wrap({type: type,target: target});\n\tif (data) { (event.setData(data),data) };\n\tif (source) { (event.setSource(source),source) };\n\treturn event;\n};\n\n\n\nImba.EventManager.prototype.trigger = function (){\n\treturn this.create.apply(this,arguments).process();\n};\n\nImba.EventManager.prototype.onenable = function (){\n\tfor (let o = this.delegators(), handler, i = 0, keys = Object.keys(o), l = keys.length, name; i < l; i++){\n\t\tname = keys[i];handler = o[name];this.root().addEventListener(name,handler,true);\n\t};\n\t\n\tfor (let i = 0, items = iter$(this.listeners()), len = items.length, item; i < len; i++) {\n\t\titem = items[i];\n\t\tthis.root().addEventListener(item[0],item[1],item[2]);\n\t};\n\t\n\tif (true) {\n\t\twindow.addEventListener('hashchange',Imba.commit);\n\t\twindow.addEventListener('popstate',Imba.commit);\n\t};\n\treturn this;\n};\n\nImba.EventManager.prototype.ondisable = function (){\n\tfor (let o = this.delegators(), handler, i = 0, keys = Object.keys(o), l = keys.length, name; i < l; i++){\n\t\tname = keys[i];handler = o[name];this.root().removeEventListener(name,handler,true);\n\t};\n\t\n\tfor (let i = 0, items = iter$(this.listeners()), len = items.length, item; i < len; i++) {\n\t\titem = items[i];\n\t\tthis.root().removeEventListener(item[0],item[1],item[2]);\n\t};\n\t\n\tif (true) {\n\t\twindow.removeEventListener('hashchange',Imba.commit);\n\t\twindow.removeEventListener('popstate',Imba.commit);\n\t};\n\t\n\treturn this;\n};\n\n\n//# sourceURL=webpack:///./node_modules/imba/src/imba/dom/event-manager.imba?");
    /***/
  },

  /***/
  "./node_modules/imba/src/imba/dom/event.imba":
  /*!***************************************************!*\
    !*** ./node_modules/imba/src/imba/dom/event.imba ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function node_modulesImbaSrcImbaDomEventImba(module, exports, __webpack_require__) {
    eval("function iter$(a){ return a ? (a.toArray ? a.toArray() : a) : []; };\nvar Imba = __webpack_require__(/*! ../imba */ \"./node_modules/imba/src/imba/imba.imba\");\n\nvar keyCodes = {\n\tesc: 27,\n\ttab: 9,\n\tenter: 13,\n\tspace: 32,\n\tup: 38,\n\tdown: 40\n};\n\nvar el = Imba.Tag.prototype;\nel.stopModifier = function (e){\n\treturn e.stop() || true;\n};\nel.preventModifier = function (e){\n\treturn e.prevent() || true;\n};\nel.silenceModifier = function (e){\n\treturn e.silence() || true;\n};\nel.bubbleModifier = function (e){\n\treturn e.bubble(true) || true;\n};\nel.ctrlModifier = function (e){\n\treturn e.event().ctrlKey == true;\n};\nel.altModifier = function (e){\n\treturn e.event().altKey == true;\n};\nel.shiftModifier = function (e){\n\treturn e.event().shiftKey == true;\n};\nel.metaModifier = function (e){\n\treturn e.event().metaKey == true;\n};\nel.keyModifier = function (key,e){\n\treturn e.keyCode() ? ((e.keyCode() == key)) : true;\n};\nel.delModifier = function (e){\n\treturn e.keyCode() ? ((e.keyCode() == 8 || e.keyCode() == 46)) : true;\n};\nel.selfModifier = function (e){\n\treturn e.event().target == this._dom;\n};\nel.leftModifier = function (e){\n\treturn (e.button() != undefined) ? ((e.button() === 0)) : el.keyModifier(37,e);\n};\nel.rightModifier = function (e){\n\treturn (e.button() != undefined) ? ((e.button() === 2)) : el.keyModifier(39,e);\n};\nel.middleModifier = function (e){\n\treturn (e.button() != undefined) ? ((e.button() === 1)) : true;\n};\n\nel.getHandler = function (str,event){\n\tif (this[str]) {\n\t\treturn this;\n\t};\n\tif (this._owner_ && this._owner_.getHandler) {\n\t\treturn this._owner_.getHandler(str,event);\n\t};\n};\n\n\n\nImba.Event = function Event(e){\n\tthis.setEvent(e);\n\tthis._bubble = true;\n};\n\n\n\nImba.Event.prototype.event = function(v){ return this._event; }\nImba.Event.prototype.setEvent = function(v){ this._event = v; return this; };\n\nImba.Event.prototype.prefix = function(v){ return this._prefix; }\nImba.Event.prototype.setPrefix = function(v){ this._prefix = v; return this; };\n\nImba.Event.prototype.source = function(v){ return this._source; }\nImba.Event.prototype.setSource = function(v){ this._source = v; return this; };\n\nImba.Event.prototype.data = function(v){ return this._data; }\nImba.Event.prototype.setData = function(v){ this._data = v; return this; };\n\nImba.Event.prototype.responder = function(v){ return this._responder; }\nImba.Event.prototype.setResponder = function(v){ this._responder = v; return this; };\n\nImba.Event.wrap = function (e){\n\treturn new this(e);\n};\n\nImba.Event.prototype.setType = function (type){\n\tthis._type = type;\n\tthis;\n\treturn this;\n};\n\n\n\nImba.Event.prototype.type = function (){\n\treturn this._type || this.event().type;\n};\nImba.Event.prototype.native = function (){\n\treturn this._event;\n};\n\nImba.Event.prototype.name = function (){\n\treturn this._name || (this._name = this.type().toLowerCase().replace(/\\:/g,''));\n};\n\n\nImba.Event.prototype.bubble = function (v){\n\tif (v != undefined) {\n\t\tthis.setBubble(v);\n\t\treturn this;\n\t};\n\treturn this._bubble;\n};\n\nImba.Event.prototype.setBubble = function (v){\n\tthis._bubble = v;\n\treturn this;\n};\n\n\n\nImba.Event.prototype.stop = function (){\n\tthis.setBubble(false);\n\treturn this;\n};\n\nImba.Event.prototype.stopPropagation = function (){\n\treturn this.stop();\n};\nImba.Event.prototype.halt = function (){\n\treturn this.stop();\n};\n\n\nImba.Event.prototype.prevent = function (){\n\tif (this.event().preventDefault) {\n\t\tthis.event().preventDefault();\n\t} else {\n\t\tthis.event().defaultPrevented = true;\n\t};\n\tthis.defaultPrevented = true;\n\treturn this;\n};\n\nImba.Event.prototype.preventDefault = function (){\n\tconsole.warn(\"Event#preventDefault is deprecated - use Event#prevent\");\n\treturn this.prevent();\n};\n\n\n\nImba.Event.prototype.isPrevented = function (){\n\treturn this.event() && this.event().defaultPrevented;\n};\n\n\n\nImba.Event.prototype.cancel = function (){\n\tconsole.warn(\"Event#cancel is deprecated - use Event#prevent\");\n\treturn this.prevent();\n};\n\nImba.Event.prototype.silence = function (){\n\tthis._silenced = true;\n\treturn this;\n};\n\nImba.Event.prototype.isSilenced = function (){\n\treturn !!this._silenced;\n};\n\n\n\nImba.Event.prototype.target = function (){\n\treturn Imba.getTagForDom(this.event()._target || this.event().target);\n};\n\n\n\nImba.Event.prototype.responder = function (){\n\treturn this._responder;\n};\n\n\n\nImba.Event.prototype.redirect = function (node){\n\tthis._redirect = node;\n\treturn this;\n};\n\nImba.Event.prototype.processHandlers = function (node,handlers){\n\tlet i = 1;\n\tlet l = handlers.length;\n\tlet bubble = this._bubble;\n\tlet state = handlers.state || (handlers.state = {});\n\tlet result;\n\t\n\tif (bubble) {\n\t\tthis._bubble = 1;\n\t};\n\t\n\twhile (i < l){\n\t\tlet isMod = false;\n\t\tlet handler = handlers[i++];\n\t\tlet params = null;\n\t\tlet context = node;\n\t\tlet checkSpecial = false;\n\t\t\n\t\tif (handler instanceof Array) {\n\t\t\tparams = handler.slice(1);\n\t\t\tcheckSpecial = true;\n\t\t\thandler = handler[0];\n\t\t};\n\t\t\n\t\tif (typeof handler == 'string') {\n\t\t\tif (keyCodes[handler]) {\n\t\t\t\tparams = [keyCodes[handler]];\n\t\t\t\thandler = 'key';\n\t\t\t};\n\t\t\t\n\t\t\tlet mod = handler + 'Modifier';\n\t\t\t\n\t\t\tif (node[mod]) {\n\t\t\t\tisMod = true;\n\t\t\t\tparams = (params || []).concat([this,state]);\n\t\t\t\thandler = node[mod];\n\t\t\t};\n\t\t};\n\t\t\n\t\t\n\t\t\n\t\tif (typeof handler == 'string') {\n\t\t\tlet el = node;\n\t\t\tlet fn = null;\n\t\t\tlet ctx = state.context;\n\t\t\t\n\t\t\tif (ctx) {\n\t\t\t\tif (ctx.getHandler instanceof Function) {\n\t\t\t\t\tctx = ctx.getHandler(handler,this);\n\t\t\t\t};\n\t\t\t\t\n\t\t\t\tif (ctx[handler] instanceof Function) {\n\t\t\t\t\thandler = fn = ctx[handler];\n\t\t\t\t\tcontext = ctx;\n\t\t\t\t};\n\t\t\t};\n\t\t\t\n\t\t\tif (!fn) {\n\t\t\t\tconsole.warn((\"event \" + this.type() + \": could not find '\" + handler + \"' in context\"),ctx);\n\t\t\t};\n\t\t\t\n\t\t\t\n\t\t\t\n\t\t\t\n\t\t\t\n\t\t\t\n\t\t\t\n\t\t\t\n\t\t\t\n\t\t\t\n\t\t\t\n\t\t};\n\t\t\n\t\tif (handler instanceof Function) {\n\t\t\t// what if we actually call stop inside function?\n\t\t\t// do we still want to continue the chain?\n\t\t\t\n\t\t\t// loop through special variables from params?\n\t\t\t\n\t\t\tif (checkSpecial) {\n\t\t\t\t// replacing special params\n\t\t\t\tfor (let i = 0, items = iter$(params), len = items.length, param; i < len; i++) {\n\t\t\t\t\tparam = items[i];\n\t\t\t\t\tif (typeof param == 'string' && param[0] == '~' && param[1] == '$') {\n\t\t\t\t\t\tlet name = param.slice(2);\n\t\t\t\t\t\tif (name == 'event') {\n\t\t\t\t\t\t\tparams[i] = this;\n\t\t\t\t\t\t} else if (this[name] instanceof Function) {\n\t\t\t\t\t\t\tparams[i] = this[name]();\n\t\t\t\t\t\t} else if (node[name] instanceof Function) {\n\t\t\t\t\t\t\tparams[i] = node[name]();\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tconsole.warn((\"Missing special handler $\" + name));\n\t\t\t\t\t\t};\n\t\t\t\t\t};\n\t\t\t\t};\n\t\t\t};\n\t\t\t\n\t\t\tlet res = handler.apply(context,params || [this]);\n\t\t\t\n\t\t\tif (!isMod) {\n\t\t\t\tthis._responder || (this._responder = node);\n\t\t\t};\n\t\t\t\n\t\t\tif (res == false) {\n\t\t\t\t// console.log \"returned false - breaking\"\n\t\t\t\tbreak;\n\t\t\t};\n\t\t\t\n\t\t\tif (res && !this._silenced && (res.then instanceof Function)) {\n\t\t\t\tres.then(Imba.commit);\n\t\t\t};\n\t\t};\n\t};\n\t\n\t\n\tif (this._bubble === 1) {\n\t\tthis._bubble = bubble;\n\t};\n\t\n\treturn null;\n};\n\nImba.Event.prototype.process = function (){\n\tvar name = this.name();\n\tvar meth = (\"on\" + (this._prefix || '') + name);\n\tvar args = null;\n\tvar domtarget = this.event()._target || this.event().target;\n\tvar domnode = domtarget._responder || domtarget;\n\t\n\tvar result;\n\tvar handlers;\n\t\n\twhile (domnode){\n\t\tthis._redirect = null;\n\t\tlet node = domnode._dom ? domnode : domnode._tag;\n\t\t\n\t\tif (node) {\n\t\t\tif (handlers = node._on_) {\n\t\t\t\tfor (let i = 0, items = iter$(handlers), len = items.length, handler; i < len; i++) {\n\t\t\t\t\thandler = items[i];\n\t\t\t\t\tif (!handler) { continue; };\n\t\t\t\t\tlet hname = handler[0];\n\t\t\t\t\tif (name == handler[0] && this.bubble()) {\n\t\t\t\t\t\tthis.processHandlers(node,handler);\n\t\t\t\t\t};\n\t\t\t\t};\n\t\t\t\tif (!(this.bubble())) { break; };\n\t\t\t};\n\t\t\t\n\t\t\tif (this.bubble() && (node[meth] instanceof Function)) {\n\t\t\t\tthis._responder || (this._responder = node);\n\t\t\t\tthis._silenced = false;\n\t\t\t\tresult = args ? node[meth].apply(node,args) : node[meth](this,this.data());\n\t\t\t};\n\t\t\t\n\t\t\tif (node.onevent) {\n\t\t\t\tnode.onevent(this);\n\t\t\t};\n\t\t};\n\t\t\n\t\t\n\t\tif (!(this.bubble() && (domnode = (this._redirect || (node ? node.parent() : domnode.parentNode))))) {\n\t\t\tbreak;\n\t\t};\n\t};\n\t\n\tthis.processed();\n\t\n\t\n\t\n\tif (result && (result.then instanceof Function)) {\n\t\tresult.then(this.processed.bind(this));\n\t};\n\treturn this;\n};\n\n\nImba.Event.prototype.processed = function (){\n\tif (!this._silenced && this._responder) {\n\t\tImba.emit(Imba,'event',[this]);\n\t\tImba.commit(this.event());\n\t};\n\treturn this;\n};\n\n\n\nImba.Event.prototype.x = function (){\n\treturn this.native().x;\n};\n\n\n\nImba.Event.prototype.y = function (){\n\treturn this.native().y;\n};\n\nImba.Event.prototype.button = function (){\n\treturn this.native().button;\n};\nImba.Event.prototype.keyCode = function (){\n\treturn this.native().keyCode;\n};\nImba.Event.prototype.ctrl = function (){\n\treturn this.native().ctrlKey;\n};\nImba.Event.prototype.alt = function (){\n\treturn this.native().altKey;\n};\nImba.Event.prototype.shift = function (){\n\treturn this.native().shiftKey;\n};\nImba.Event.prototype.meta = function (){\n\treturn this.native().metaKey;\n};\nImba.Event.prototype.key = function (){\n\treturn this.native().key;\n};\n\n\n\nImba.Event.prototype.which = function (){\n\treturn this.event().which;\n};\n\n\n//# sourceURL=webpack:///./node_modules/imba/src/imba/dom/event.imba?");
    /***/
  },

  /***/
  "./node_modules/imba/src/imba/dom/html.imba":
  /*!**************************************************!*\
    !*** ./node_modules/imba/src/imba/dom/html.imba ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesImbaSrcImbaDomHtmlImba(module, exports, __webpack_require__) {
    eval("function iter$(a){ return a ? (a.toArray ? a.toArray() : a) : []; };\nvar Imba = __webpack_require__(/*! ../imba */ \"./node_modules/imba/src/imba/imba.imba\");\n\nImba.defineTag('fragment', 'element', function(tag){\n\ttag.createNode = function (){\n\t\treturn Imba.document().createDocumentFragment();\n\t};\n});\n\nImba.extendTag('html', function(tag){\n\ttag.prototype.parent = function (){\n\t\treturn null;\n\t};\n});\n\nImba.extendTag('canvas', function(tag){\n\ttag.prototype.context = function (type){\n\t\tif(type === undefined) type = '2d';\n\t\treturn this.dom().getContext(type);\n\t};\n});\n\nfunction DataProxy(node,path,args){\n\tthis._node = node;\n\tthis._path = path;\n\tthis._args = args;\n\tif (this._args) { this._setter = Imba.toSetter(this._path) };\n};\n\nDataProxy.bind = function (receiver,data,path,args){\n\tlet proxy = receiver._data || (receiver._data = new this(receiver,path,args));\n\tproxy.bind(data,path,args);\n\treturn receiver;\n};\n\nDataProxy.prototype.bind = function (data,key,args){\n\tif (data != this._data) {\n\t\tthis._data = data;\n\t};\n\treturn this;\n};\n\nDataProxy.prototype.getFormValue = function (){\n\treturn this._setter ? this._data[this._path]() : this._data[this._path];\n};\n\nDataProxy.prototype.setFormValue = function (value){\n\treturn this._setter ? this._data[this._setter](value) : ((this._data[this._path] = value));\n};\n\n\nvar isArray = function(val) {\n\treturn val && val.splice && val.sort;\n};\n\nvar isSimilarArray = function(a,b) {\n\tlet l = a.length,i = 0;\n\tif (l != b.length) { return false };\n\twhile (i++ < l){\n\t\tif (a[i] != b[i]) { return false };\n\t};\n\treturn true;\n};\n\nImba.extendTag('input', function(tag){\n\ttag.prototype.lazy = function(v){ return this._lazy; }\n\ttag.prototype.setLazy = function(v){ this._lazy = v; return this; };\n\ttag.prototype.number = function(v){ return this._number; }\n\ttag.prototype.setNumber = function(v){ this._number = v; return this; };\n\t\n\ttag.prototype.bindData = function (target,path,args){\n\t\tDataProxy.bind(this,target,path,args);\n\t\treturn this;\n\t};\n\t\n\ttag.prototype.checked = function (){\n\t\treturn this._dom.checked;\n\t};\n\t\n\ttag.prototype.setChecked = function (value){\n\t\tif (!!value != this._dom.checked) {\n\t\t\tthis._dom.checked = !!value;\n\t\t};\n\t\treturn this;\n\t};\n\t\n\ttag.prototype.setValue = function (value,source){\n\t\tif (this._localValue == undefined || source == undefined) {\n\t\t\tthis.dom().value = this._value = value;\n\t\t\tthis._localValue = undefined;\n\t\t};\n\t\treturn this;\n\t};\n\t\n\ttag.prototype.setType = function (value){\n\t\tthis.dom().type = this._type = value;\n\t\treturn this;\n\t};\n\t\n\ttag.prototype.value = function (){\n\t\tlet val = this._dom.value;\n\t\treturn (this._number && val) ? parseFloat(val) : val;\n\t};\n\t\n\ttag.prototype.oninput = function (e){\n\t\tlet val = this._dom.value;\n\t\tthis._localValue = val;\n\t\tif (this._data && !(this.lazy()) && this.type() != 'radio' && this.type() != 'checkbox') {\n\t\t\tthis._data.setFormValue(this.value(),this);\n\t\t};\n\t\treturn;\n\t};\n\t\n\ttag.prototype.onchange = function (e){\n\t\tthis._modelValue = this._localValue = undefined;\n\t\tif (!(this.data())) { return };\n\t\t\n\t\tif (this.type() == 'radio' || this.type() == 'checkbox') {\n\t\t\tlet checked = this.checked();\n\t\t\tlet mval = this._data.getFormValue(this);\n\t\t\tlet dval = (this._value != undefined) ? this._value : this.value();\n\t\t\t\n\t\t\tif (this.type() == 'radio') {\n\t\t\t\treturn this._data.setFormValue(dval,this);\n\t\t\t} else if (this.dom().value == 'on' || this.dom().value == undefined) {\n\t\t\t\treturn this._data.setFormValue(!!checked,this);\n\t\t\t} else if (isArray(mval)) {\n\t\t\t\tlet idx = mval.indexOf(dval);\n\t\t\t\tif (checked && idx == -1) {\n\t\t\t\t\treturn mval.push(dval);\n\t\t\t\t} else if (!checked && idx >= 0) {\n\t\t\t\t\treturn mval.splice(idx,1);\n\t\t\t\t};\n\t\t\t} else {\n\t\t\t\treturn this._data.setFormValue(dval,this);\n\t\t\t};\n\t\t} else {\n\t\t\treturn this._data.setFormValue(this.value());\n\t\t};\n\t};\n\t\n\ttag.prototype.onblur = function (e){\n\t\treturn this._localValue = undefined;\n\t};\n\t\n\t\n\ttag.prototype.end = function (){\n\t\tif (this._localValue !== undefined || !this._data) {\n\t\t\treturn this;\n\t\t};\n\t\t\n\t\tlet mval = this._data.getFormValue(this);\n\t\tif (mval === this._modelValue) { return this };\n\t\tif (!isArray(mval)) { this._modelValue = mval };\n\t\t\n\t\tif (this.type() == 'radio' || this.type() == 'checkbox') {\n\t\t\tlet dval = this._value;\n\t\t\tlet checked = isArray(mval) ? (\n\t\t\t\tmval.indexOf(dval) >= 0\n\t\t\t) : ((this.dom().value == 'on' || this.dom().value == undefined) ? (\n\t\t\t\t!!mval\n\t\t\t) : (\n\t\t\t\tmval == this._value\n\t\t\t));\n\t\t\t\n\t\t\tthis.setChecked(checked);\n\t\t} else {\n\t\t\tthis._dom.value = mval;\n\t\t};\n\t\treturn this;\n\t};\n});\n\nImba.extendTag('textarea', function(tag){\n\ttag.prototype.lazy = function(v){ return this._lazy; }\n\ttag.prototype.setLazy = function(v){ this._lazy = v; return this; };\n\t\n\ttag.prototype.bindData = function (target,path,args){\n\t\tDataProxy.bind(this,target,path,args);\n\t\treturn this;\n\t};\n\t\n\ttag.prototype.setValue = function (value,source){\n\t\tif (this._localValue == undefined || source == undefined) {\n\t\t\tthis.dom().value = value;\n\t\t\tthis._localValue = undefined;\n\t\t};\n\t\treturn this;\n\t};\n\t\n\ttag.prototype.oninput = function (e){\n\t\tlet val = this._dom.value;\n\t\tthis._localValue = val;\n\t\tif (this._data && !(this.lazy())) { return this._data.setFormValue(this.value(),this) };\n\t};\n\t\n\ttag.prototype.onchange = function (e){\n\t\tthis._localValue = undefined;\n\t\tif (this._data) { return this._data.setFormValue(this.value(),this) };\n\t};\n\t\n\ttag.prototype.onblur = function (e){\n\t\treturn this._localValue = undefined;\n\t};\n\t\n\ttag.prototype.render = function (){\n\t\tif (this._localValue != undefined || !this._data) { return };\n\t\tif (this._data) {\n\t\t\tlet dval = this._data.getFormValue(this);\n\t\t\tthis._dom.value = (dval != undefined) ? dval : '';\n\t\t};\n\t\treturn this;\n\t};\n});\n\nImba.extendTag('option', function(tag){\n\ttag.prototype.setValue = function (value){\n\t\tif (value != this._value) {\n\t\t\tthis.dom().value = this._value = value;\n\t\t};\n\t\treturn this;\n\t};\n\t\n\ttag.prototype.value = function (){\n\t\treturn this._value || this.dom().value;\n\t};\n});\n\nImba.extendTag('select', function(tag){\n\ttag.prototype.bindData = function (target,path,args){\n\t\tDataProxy.bind(this,target,path,args);\n\t\treturn this;\n\t};\n\t\n\ttag.prototype.setValue = function (value,syncing){\n\t\tlet prev = this._value;\n\t\tthis._value = value;\n\t\tif (!syncing) { this.syncValue(value) };\n\t\treturn this;\n\t};\n\t\n\ttag.prototype.syncValue = function (value){\n\t\tlet prev = this._syncValue;\n\t\t\n\t\tif (this.multiple() && (value instanceof Array)) {\n\t\t\tif ((prev instanceof Array) && isSimilarArray(prev,value)) {\n\t\t\t\treturn this;\n\t\t\t};\n\t\t\t\n\t\t\tvalue = value.slice();\n\t\t};\n\t\t\n\t\tthis._syncValue = value;\n\t\t\n\t\tif (typeof value == 'object') {\n\t\t\tlet mult = this.multiple() && (value instanceof Array);\n\t\t\t\n\t\t\tfor (let i = 0, items = iter$(this.dom().options), len = items.length, opt; i < len; i++) {\n\t\t\t\topt = items[i];\n\t\t\t\tlet oval = (opt._tag ? opt._tag.value() : opt.value);\n\t\t\t\tif (mult) {\n\t\t\t\t\topt.selected = value.indexOf(oval) >= 0;\n\t\t\t\t} else if (value == oval) {\n\t\t\t\t\tthis.dom().selectedIndex = i;\n\t\t\t\t\tbreak;\n\t\t\t\t};\n\t\t\t};\n\t\t} else {\n\t\t\tthis.dom().value = value;\n\t\t};\n\t\treturn this;\n\t};\n\t\n\ttag.prototype.value = function (){\n\t\tif (this.multiple()) {\n\t\t\tlet res = [];\n\t\t\tfor (let i = 0, items = iter$(this.dom().selectedOptions), len = items.length, option; i < len; i++) {\n\t\t\t\toption = items[i];\n\t\t\t\tres.push(option._tag ? option._tag.value() : option.value);\n\t\t\t};\n\t\t\treturn res;\n\t\t} else {\n\t\t\tlet opt = this.dom().selectedOptions[0];\n\t\t\treturn opt ? ((opt._tag ? opt._tag.value() : opt.value)) : null;\n\t\t};\n\t};\n\t\n\ttag.prototype.onchange = function (e){\n\t\tif (this._data) { return this._data.setFormValue(this.value(),this) };\n\t};\n\t\n\ttag.prototype.end = function (){\n\t\tif (this._data) {\n\t\t\tthis.setValue(this._data.getFormValue(this),1);\n\t\t};\n\t\t\n\t\tif (this._value != this._syncValue) {\n\t\t\tthis.syncValue(this._value);\n\t\t};\n\t\treturn this;\n\t};\n});\n\n\n//# sourceURL=webpack:///./node_modules/imba/src/imba/dom/html.imba?");
    /***/
  },

  /***/
  "./node_modules/imba/src/imba/dom/index.imba":
  /*!***************************************************!*\
    !*** ./node_modules/imba/src/imba/dom/index.imba ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function node_modulesImbaSrcImbaDomIndexImba(module, exports, __webpack_require__) {
    eval("var Imba = __webpack_require__(/*! ../imba */ \"./node_modules/imba/src/imba/imba.imba\");\n\n__webpack_require__(/*! ./manager */ \"./node_modules/imba/src/imba/dom/manager.imba\");\n__webpack_require__(/*! ./event-manager */ \"./node_modules/imba/src/imba/dom/event-manager.imba\");\n\nImba.TagManager = new Imba.TagManagerClass();\n\n__webpack_require__(/*! ./tag */ \"./node_modules/imba/src/imba/dom/tag.imba\");\n__webpack_require__(/*! ./html */ \"./node_modules/imba/src/imba/dom/html.imba\");\n__webpack_require__(/*! ./pointer */ \"./node_modules/imba/src/imba/dom/pointer.imba\");\n__webpack_require__(/*! ./touch */ \"./node_modules/imba/src/imba/dom/touch.imba\");\n__webpack_require__(/*! ./event */ \"./node_modules/imba/src/imba/dom/event.imba\");\n\nif (true) {\n\t__webpack_require__(/*! ./reconciler */ \"./node_modules/imba/src/imba/dom/reconciler.imba\");\n};\n\nif (false) {};\n\n\n//# sourceURL=webpack:///./node_modules/imba/src/imba/dom/index.imba?");
    /***/
  },

  /***/
  "./node_modules/imba/src/imba/dom/manager.imba":
  /*!*****************************************************!*\
    !*** ./node_modules/imba/src/imba/dom/manager.imba ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesImbaSrcImbaDomManagerImba(module, exports, __webpack_require__) {
    eval("function iter$(a){ return a ? (a.toArray ? a.toArray() : a) : []; };\nvar Imba = __webpack_require__(/*! ../imba */ \"./node_modules/imba/src/imba/imba.imba\");\n\nImba.TagManagerClass = function TagManagerClass(){\n\tthis._inserts = 0;\n\tthis._removes = 0;\n\tthis._mounted = [];\n\tthis._mountables = 0;\n\tthis._unmountables = 0;\n\tthis._unmounting = 0;\n\tthis;\n};\n\nImba.TagManagerClass.prototype.mounted = function (){\n\treturn this._mounted;\n};\n\nImba.TagManagerClass.prototype.insert = function (node,parent){\n\tthis._inserts++;\n\tif (node && node.mount) { this.regMountable(node) };\n\t\n\t\n\t\n\treturn;\n};\n\nImba.TagManagerClass.prototype.remove = function (node,parent){\n\treturn this._removes++;\n};\n\n\nImba.TagManagerClass.prototype.changes = function (){\n\treturn this._inserts + this._removes;\n};\n\nImba.TagManagerClass.prototype.mount = function (node){\n\treturn;\n};\n\nImba.TagManagerClass.prototype.refresh = function (force){\n\tif(force === undefined) force = false;\n\tif (false) {};\n\tif (!force && this.changes() == 0) { return };\n\t\n\tif ((this._inserts && this._mountables > this._mounted.length) || force) {\n\t\tthis.tryMount();\n\t};\n\t\n\tif ((this._removes || force) && this._mounted.length) {\n\t\tthis.tryUnmount();\n\t};\n\t\n\tthis._inserts = 0;\n\tthis._removes = 0;\n\treturn this;\n};\n\nImba.TagManagerClass.prototype.unmount = function (node){\n\treturn this;\n};\n\nImba.TagManagerClass.prototype.regMountable = function (node){\n\tif (!(node.FLAGS & Imba.TAG_MOUNTABLE)) {\n\t\tnode.FLAGS |= Imba.TAG_MOUNTABLE;\n\t\treturn this._mountables++;\n\t};\n};\n\n\nImba.TagManagerClass.prototype.tryMount = function (){\n\tvar count = 0;\n\tvar root = document.body;\n\tvar items = root.querySelectorAll('.__mount');\n\t\n\tfor (let i = 0, ary = iter$(items), len = ary.length, el; i < len; i++) {\n\t\tel = ary[i];\n\t\tif (el && el._tag) {\n\t\t\tif (this._mounted.indexOf(el._tag) == -1) {\n\t\t\t\tthis.mountNode(el._tag);\n\t\t\t};\n\t\t};\n\t};\n\treturn this;\n};\n\nImba.TagManagerClass.prototype.mountNode = function (node){\n\tif (this._mounted.indexOf(node) == -1) {\n\t\tthis.regMountable(node);\n\t\tthis._mounted.push(node);\n\t\t\n\t\tnode.FLAGS |= Imba.TAG_MOUNTED;\n\t\tif (node.mount) { node.mount() };\n\t\t\n\t\t\n\t\t\n\t\t\n\t\t\n\t};\n\treturn;\n};\n\nImba.TagManagerClass.prototype.tryUnmount = function (){\n\tthis._unmounting++;\n\t\n\tvar unmount = [];\n\tvar root = document.body;\n\tfor (let i = 0, items = iter$(this._mounted), len = items.length, item; i < len; i++) {\n\t\titem = items[i];\n\t\tif (!item) { continue; };\n\t\tif (!document.documentElement.contains(item._dom)) {\n\t\t\tunmount.push(item);\n\t\t\tthis._mounted[i] = null;\n\t\t};\n\t};\n\t\n\tthis._unmounting--;\n\t\n\tif (unmount.length) {\n\t\tthis._mounted = this._mounted.filter(function(item) { return item && unmount.indexOf(item) == -1; });\n\t\tfor (let i = 0, len = unmount.length, item; i < len; i++) {\n\t\t\titem = unmount[i];\n\t\t\titem.FLAGS = item.FLAGS & ~Imba.TAG_MOUNTED;\n\t\t\tif (item.unmount && item._dom) {\n\t\t\t\titem.unmount();\n\t\t\t} else if (item._scheduler) {\n\t\t\t\titem.unschedule();\n\t\t\t};\n\t\t};\n\t};\n\treturn this;\n};\n\n\n//# sourceURL=webpack:///./node_modules/imba/src/imba/dom/manager.imba?");
    /***/
  },

  /***/
  "./node_modules/imba/src/imba/dom/pointer.imba":
  /*!*****************************************************!*\
    !*** ./node_modules/imba/src/imba/dom/pointer.imba ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesImbaSrcImbaDomPointerImba(module, exports, __webpack_require__) {
    eval("var Imba = __webpack_require__(/*! ../imba */ \"./node_modules/imba/src/imba/imba.imba\");\n\nImba.Pointer = function Pointer(){\n\tthis._button = -1;\n\tthis._event = {x: 0,y: 0,type: 'uninitialized'};\n\treturn this;\n};\n\nImba.Pointer.prototype.button = function (){\n\treturn this._button;\n};\n\nImba.Pointer.prototype.touch = function (){\n\treturn this._touch;\n};\n\nImba.Pointer.prototype.update = function (e){\n\tthis._event = e;\n\tthis._dirty = true;\n\treturn this;\n};\n\n\nImba.Pointer.prototype.process = function (){\n\tvar e1 = this._event;\n\t\n\tif (this._dirty) {\n\t\tthis._prevEvent = e1;\n\t\tthis._dirty = false;\n\t\t\n\t\t\n\t\tif (e1.type == 'mousedown') {\n\t\t\tthis._button = e1.button;\n\t\t\t\n\t\t\tif ((this._touch && this._button != 0)) {\n\t\t\t\treturn;\n\t\t\t};\n\t\t\t\n\t\t\t\n\t\t\tif (this._touch) { this._touch.cancel() };\n\t\t\tthis._touch = new Imba.Touch(e1,this);\n\t\t\tthis._touch.mousedown(e1,e1);\n\t\t} else if (e1.type == 'mousemove') {\n\t\t\tif (this._touch) { this._touch.mousemove(e1,e1) };\n\t\t} else if (e1.type == 'mouseup') {\n\t\t\tthis._button = -1;\n\t\t\t\n\t\t\tif (this._touch && this._touch.button() == e1.button) {\n\t\t\t\tthis._touch.mouseup(e1,e1);\n\t\t\t\tthis._touch = null;\n\t\t\t};\n\t\t\t\n\t\t};\n\t} else if (this._touch) {\n\t\tthis._touch.idle();\n\t};\n\treturn this;\n};\n\nImba.Pointer.prototype.x = function (){\n\treturn this._event.x;\n};\nImba.Pointer.prototype.y = function (){\n\treturn this._event.y;\n};\n\n\n//# sourceURL=webpack:///./node_modules/imba/src/imba/dom/pointer.imba?");
    /***/
  },

  /***/
  "./node_modules/imba/src/imba/dom/reconciler.imba":
  /*!********************************************************!*\
    !*** ./node_modules/imba/src/imba/dom/reconciler.imba ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesImbaSrcImbaDomReconcilerImba(module, exports, __webpack_require__) {
    eval("function iter$(a){ return a ? (a.toArray ? a.toArray() : a) : []; };\nvar self = {};\n// externs;\n\nvar Imba = __webpack_require__(/*! ../imba */ \"./node_modules/imba/src/imba/imba.imba\");\n\nvar removeNested = function(root,node,caret) {\n\t// if node/nodes isa String\n\t// \twe need to use the caret to remove elements\n\t// \tfor now we will simply not support this\n\tif (node instanceof Array) {\n\t\tfor (let i = 0, items = iter$(node), len = items.length; i < len; i++) {\n\t\t\tremoveNested(root,items[i],caret);\n\t\t};\n\t} else if (node && node._slot_) {\n\t\troot.removeChild(node);\n\t} else if (node != null) {\n\t\t// what if this is not null?!?!?\n\t\t// take a chance and remove a text-elementng\n\t\tlet next = caret ? caret.nextSibling : root._dom.firstChild;\n\t\tif ((next instanceof Text) && next.textContent == node) {\n\t\t\troot.removeChild(next);\n\t\t} else {\n\t\t\tthrow 'cannot remove string';\n\t\t};\n\t};\n\t\n\treturn caret;\n};\n\nvar appendNested = function(root,node) {\n\tif (node instanceof Array) {\n\t\tlet i = 0;\n\t\tlet c = node.taglen;\n\t\tlet k = (c != null) ? ((node.domlen = c)) : node.length;\n\t\twhile (i < k){\n\t\t\tappendNested(root,node[i++]);\n\t\t};\n\t} else if (node && node._dom) {\n\t\troot.appendChild(node);\n\t} else if (node != null && node !== false) {\n\t\troot.appendChild(Imba.createTextNode(node));\n\t};\n\t\n\treturn;\n};\n\n\n\n\n\n\nvar insertNestedBefore = function(root,node,before) {\n\tif (node instanceof Array) {\n\t\tlet i = 0;\n\t\tlet c = node.taglen;\n\t\tlet k = (c != null) ? ((node.domlen = c)) : node.length;\n\t\twhile (i < k){\n\t\t\tinsertNestedBefore(root,node[i++],before);\n\t\t};\n\t} else if (node && node._dom) {\n\t\troot.insertBefore(node,before);\n\t} else if (node != null && node !== false) {\n\t\troot.insertBefore(Imba.createTextNode(node),before);\n\t};\n\t\n\treturn before;\n};\n\n\nself.insertNestedAfter = function (root,node,after){\n\tvar before = after ? after.nextSibling : root._dom.firstChild;\n\t\n\tif (before) {\n\t\tinsertNestedBefore(root,node,before);\n\t\treturn before.previousSibling;\n\t} else {\n\t\tappendNested(root,node);\n\t\treturn root._dom.lastChild;\n\t};\n};\n\nvar reconcileCollectionChanges = function(root,new$,old,caret) {\n\t\n\tvar newLen = new$.length;\n\tvar lastNew = new$[newLen - 1];\n\t\n\t\n\t\n\t\n\t\n\t\n\t\n\t\n\t\n\t\n\t\n\t\n\t\n\t\n\t\n\t\n\t\n\tvar newPosition = [];\n\t\n\t\n\tvar prevChain = [];\n\t\n\tvar lengthChain = [];\n\t\n\t\n\tvar maxChainLength = 0;\n\tvar maxChainEnd = 0;\n\t\n\tvar hasTextNodes = false;\n\tvar newPos;\n\t\n\tfor (let idx = 0, items = iter$(old), len = items.length, node; idx < len; idx++) {\n\t\t// special case for Text nodes\n\t\tnode = items[idx];\n\t\tif (node && node.nodeType == 3) {\n\t\t\tnewPos = new$.indexOf(node.textContent);\n\t\t\tif (newPos >= 0) { new$[newPos] = node };\n\t\t\thasTextNodes = true;\n\t\t} else {\n\t\t\tnewPos = new$.indexOf(node);\n\t\t};\n\t\t\n\t\tnewPosition.push(newPos);\n\t\t\n\t\tif (newPos == -1) {\n\t\t\troot.removeChild(node);\n\t\t\tprevChain.push(-1);\n\t\t\tlengthChain.push(-1);\n\t\t\tcontinue;\n\t\t};\n\t\t\n\t\tvar prevIdx = newPosition.length - 2;\n\t\t\n\t\t\n\t\twhile (prevIdx >= 0){\n\t\t\tif (newPosition[prevIdx] == -1) {\n\t\t\t\tprevIdx--;\n\t\t\t} else if (newPos > newPosition[prevIdx]) {\n\t\t\t\t// Yay, we're bigger than the previous!\n\t\t\t\tbreak;\n\t\t\t} else {\n\t\t\t\t// Nope, let's walk back the chain\n\t\t\t\tprevIdx = prevChain[prevIdx];\n\t\t\t};\n\t\t};\n\t\t\n\t\tprevChain.push(prevIdx);\n\t\t\n\t\tvar currLength = (prevIdx == -1) ? 0 : (lengthChain[prevIdx] + 1);\n\t\t\n\t\tif (currLength > maxChainLength) {\n\t\t\tmaxChainLength = currLength;\n\t\t\tmaxChainEnd = idx;\n\t\t};\n\t\t\n\t\tlengthChain.push(currLength);\n\t};\n\t\n\tvar stickyNodes = [];\n\t\n\t\n\t\n\tvar cursor = newPosition.length - 1;\n\twhile (cursor >= 0){\n\t\tif (cursor == maxChainEnd && newPosition[cursor] != -1) {\n\t\t\tstickyNodes[newPosition[cursor]] = true;\n\t\t\tmaxChainEnd = prevChain[maxChainEnd];\n\t\t};\n\t\t\n\t\tcursor -= 1;\n\t};\n\t\n\t\n\tfor (let idx = 0, items = iter$(new$), len = items.length, node; idx < len; idx++) {\n\t\tnode = items[idx];\n\t\tif (!stickyNodes[idx]) {\n\t\t\t// create textnode for string, and update the array\n\t\t\tif (!(node && node._dom)) {\n\t\t\t\tnode = new$[idx] = Imba.createTextNode(node);\n\t\t\t};\n\t\t\t\n\t\t\tvar after = new$[idx - 1];\n\t\t\tself.insertNestedAfter(root,node,(after && after._slot_ || after || caret));\n\t\t};\n\t\t\n\t\tcaret = node._slot_ || (caret && caret.nextSibling || root._dom.firstChild);\n\t};\n\t\n\t\n\treturn lastNew && lastNew._slot_ || caret;\n};\n\n\n\nvar reconcileCollection = function(root,new$,old,caret) {\n\tvar k = new$.length;\n\tvar i = k;\n\tvar last = new$[k - 1];\n\t\n\t\n\tif (k == old.length && new$[0] === old[0]) {\n\t\t// running through to compare\n\t\twhile (i--){\n\t\t\tif (new$[i] !== old[i]) { break; };\n\t\t};\n\t};\n\t\n\tif (i == -1) {\n\t\treturn last && last._slot_ || last || caret;\n\t} else {\n\t\treturn reconcileCollectionChanges(root,new$,old,caret);\n\t};\n};\n\n\n\nvar reconcileLoop = function(root,new$,old,caret) {\n\tvar nl = new$.length;\n\tvar ol = old.length;\n\tvar cl = new$.cache.i$; \n\tvar i = 0,d = nl - ol;\n\t\n\t\n\t\n\t\n\twhile (i < ol && i < nl && new$[i] === old[i]){\n\t\ti++;\n\t};\n\t\n\t\n\tif (cl > 1000 && (cl - nl) > 500) {\n\t\tnew$.cache.$prune(new$);\n\t};\n\t\n\tif (d > 0 && i == ol) {\n\t\t// added at end\n\t\twhile (i < nl){\n\t\t\troot.appendChild(new$[i++]);\n\t\t};\n\t\treturn;\n\t} else if (d > 0) {\n\t\tlet i1 = nl;\n\t\twhile (i1 > i && new$[i1 - 1] === old[i1 - 1 - d]){\n\t\t\ti1--;\n\t\t};\n\t\t\n\t\tif (d == (i1 - i)) {\n\t\t\tlet before = old[i]._slot_;\n\t\t\twhile (i < i1){\n\t\t\t\troot.insertBefore(new$[i++],before);\n\t\t\t};\n\t\t\treturn;\n\t\t};\n\t} else if (d < 0 && i == nl) {\n\t\t// removed at end\n\t\twhile (i < ol){\n\t\t\troot.removeChild(old[i++]);\n\t\t};\n\t\treturn;\n\t} else if (d < 0) {\n\t\tlet i1 = ol;\n\t\twhile (i1 > i && new$[i1 - 1 + d] === old[i1 - 1]){\n\t\t\ti1--;\n\t\t};\n\t\t\n\t\tif (d == (i - i1)) {\n\t\t\twhile (i < i1){\n\t\t\t\troot.removeChild(old[i++]);\n\t\t\t};\n\t\t\treturn;\n\t\t};\n\t} else if (i == nl) {\n\t\treturn;\n\t};\n\t\n\treturn reconcileCollectionChanges(root,new$,old,caret);\n};\n\n\nvar reconcileIndexedArray = function(root,array,old,caret) {\n\tvar newLen = array.taglen;\n\tvar prevLen = array.domlen || 0;\n\tvar last = newLen ? array[newLen - 1] : null;\n\t\n\t\n\tif (prevLen > newLen) {\n\t\twhile (prevLen > newLen){\n\t\t\tvar item = array[--prevLen];\n\t\t\troot.removeChild(item._slot_);\n\t\t};\n\t} else if (newLen > prevLen) {\n\t\t// find the item to insert before\n\t\tlet prevLast = prevLen ? array[prevLen - 1]._slot_ : caret;\n\t\tlet before = prevLast ? prevLast.nextSibling : root._dom.firstChild;\n\t\t\n\t\twhile (prevLen < newLen){\n\t\t\tlet node = array[prevLen++];\n\t\t\tbefore ? root.insertBefore(node._slot_,before) : root.appendChild(node._slot_);\n\t\t};\n\t};\n\t\n\tarray.domlen = newLen;\n\treturn last ? last._slot_ : caret;\n};\n\n\n\n\nvar reconcileNested = function(root,new$,old,caret) {\n\t\n\t// var skipnew = new == null or new === false or new === true\n\tvar newIsNull = new$ == null || new$ === false;\n\tvar oldIsNull = old == null || old === false;\n\t\n\t\n\tif (new$ === old) {\n\t\t// remember that the caret must be an actual dom element\n\t\t// we should instead move the actual caret? - trust\n\t\tif (newIsNull) {\n\t\t\treturn caret;\n\t\t} else if (new$._slot_) {\n\t\t\treturn new$._slot_;\n\t\t} else if ((new$ instanceof Array) && new$.taglen != null) {\n\t\t\treturn reconcileIndexedArray(root,new$,old,caret);\n\t\t} else {\n\t\t\treturn caret ? caret.nextSibling : root._dom.firstChild;\n\t\t};\n\t} else if (new$ instanceof Array) {\n\t\tif (old instanceof Array) {\n\t\t\t// look for slot instead?\n\t\t\tlet typ = new$.static;\n\t\t\tif (typ || old.static) {\n\t\t\t\t// if the static is not nested - we could get a hint from compiler\n\t\t\t\t// and just skip it\n\t\t\t\tif (typ == old.static) { // should also include a reference?\n\t\t\t\t\tfor (let i = 0, items = iter$(new$), len = items.length; i < len; i++) {\n\t\t\t\t\t\t// this is where we could do the triple equal directly\n\t\t\t\t\t\tcaret = reconcileNested(root,items[i],old[i],caret);\n\t\t\t\t\t};\n\t\t\t\t\treturn caret;\n\t\t\t\t} else {\n\t\t\t\t\tremoveNested(root,old,caret);\n\t\t\t\t};\n\t\t\t\t\n\t\t\t\t\n\t\t\t} else {\n\t\t\t\t// Could use optimized loop if we know that it only consists of nodes\n\t\t\t\treturn reconcileCollection(root,new$,old,caret);\n\t\t\t};\n\t\t} else if (!oldIsNull) {\n\t\t\tif (old._slot_) {\n\t\t\t\troot.removeChild(old);\n\t\t\t} else {\n\t\t\t\t// old was a string-like object?\n\t\t\t\troot.removeChild(caret ? caret.nextSibling : root._dom.firstChild);\n\t\t\t};\n\t\t};\n\t\t\n\t\treturn self.insertNestedAfter(root,new$,caret);\n\t\t\n\t} else if (!newIsNull && new$._slot_) {\n\t\tif (!oldIsNull) { removeNested(root,old,caret) };\n\t\treturn self.insertNestedAfter(root,new$,caret);\n\t} else if (newIsNull) {\n\t\tif (!oldIsNull) { removeNested(root,old,caret) };\n\t\treturn caret;\n\t} else {\n\t\t// if old did not exist we need to add a new directly\n\t\tlet nextNode;\n\t\t\n\t\tif (old instanceof Array) {\n\t\t\tremoveNested(root,old,caret);\n\t\t} else if (old && old._slot_) {\n\t\t\troot.removeChild(old);\n\t\t} else if (!oldIsNull) {\n\t\t\t// ...\n\t\t\tnextNode = caret ? caret.nextSibling : root._dom.firstChild;\n\t\t\tif ((nextNode instanceof Text) && nextNode.textContent != new$) {\n\t\t\t\tnextNode.textContent = new$;\n\t\t\t\treturn nextNode;\n\t\t\t};\n\t\t};\n\t\t\n\t\t\n\t\treturn self.insertNestedAfter(root,new$,caret);\n\t};\n};\n\n\nImba.extendTag('element', function(tag){\n\t\n\t// 1 - static shape - unknown content\n\t// 2 - static shape and static children\n\t// 3 - single item\n\t// 4 - optimized array - only length will change\n\t// 5 - optimized collection\n\t// 6 - text only\n\t\n\ttag.prototype.setChildren = function (new$,typ){\n\t\t// if typeof new == 'string'\n\t\t// \treturn self.text = new\n\t\tvar old = this._tree_;\n\t\t\n\t\tif (new$ === old && (!(new$) || new$.taglen == undefined)) {\n\t\t\treturn this;\n\t\t};\n\t\t\n\t\tif (!old && typ != 3) {\n\t\t\tthis.removeAllChildren();\n\t\t\tappendNested(this,new$);\n\t\t} else if (typ == 1) {\n\t\t\tlet caret = null;\n\t\t\tfor (let i = 0, items = iter$(new$), len = items.length; i < len; i++) {\n\t\t\t\tcaret = reconcileNested(this,items[i],old[i],caret);\n\t\t\t};\n\t\t} else if (typ == 2) {\n\t\t\treturn this;\n\t\t} else if (typ == 3) {\n\t\t\tlet ntyp = typeof new$;\n\t\t\t\n\t\t\tif (ntyp != 'object') {\n\t\t\t\treturn this.setText(new$);\n\t\t\t};\n\t\t\t\n\t\t\tif (new$ && new$._dom) {\n\t\t\t\tthis.removeAllChildren();\n\t\t\t\tthis.appendChild(new$);\n\t\t\t} else if (new$ instanceof Array) {\n\t\t\t\tif (new$._type == 5 && old && old._type == 5) {\n\t\t\t\t\treconcileLoop(this,new$,old,null);\n\t\t\t\t} else if (old instanceof Array) {\n\t\t\t\t\treconcileNested(this,new$,old,null);\n\t\t\t\t} else {\n\t\t\t\t\tthis.removeAllChildren();\n\t\t\t\t\tappendNested(this,new$);\n\t\t\t\t};\n\t\t\t} else {\n\t\t\t\treturn this.setText(new$);\n\t\t\t};\n\t\t} else if (typ == 4) {\n\t\t\treconcileIndexedArray(this,new$,old,null);\n\t\t} else if (typ == 5) {\n\t\t\treconcileLoop(this,new$,old,null);\n\t\t} else if ((new$ instanceof Array) && (old instanceof Array)) {\n\t\t\treconcileNested(this,new$,old,null);\n\t\t} else {\n\t\t\t// what if text?\n\t\t\tthis.removeAllChildren();\n\t\t\tappendNested(this,new$);\n\t\t};\n\t\t\n\t\tthis._tree_ = new$;\n\t\treturn this;\n\t};\n\t\n\ttag.prototype.content = function (){\n\t\treturn this._content || this.children().toArray();\n\t};\n\t\n\ttag.prototype.setText = function (text){\n\t\tif (text != this._tree_) {\n\t\t\tvar val = (text === null || text === false) ? '' : text;\n\t\t\t(this._text_ || this._dom).textContent = val;\n\t\t\tthis._text_ || (this._text_ = this._dom.firstChild);\n\t\t\tthis._tree_ = text;\n\t\t};\n\t\treturn this;\n\t};\n});\n\n\nvar proto = Imba.Tag.prototype;\nproto.setContent = proto.setChildren;\n\n\nvar apple = typeof navigator != 'undefined' && (navigator.vendor || '').indexOf('Apple') == 0;\nif (apple) {\n\tproto.setText = function (text){\n\t\tif (text != this._tree_) {\n\t\t\tthis._dom.textContent = ((text === null || text === false) ? '' : text);\n\t\t\tthis._tree_ = text;\n\t\t};\n\t\treturn this;\n\t};\n};\n\n\n//# sourceURL=webpack:///./node_modules/imba/src/imba/dom/reconciler.imba?");
    /***/
  },

  /***/
  "./node_modules/imba/src/imba/dom/tag.imba":
  /*!*************************************************!*\
    !*** ./node_modules/imba/src/imba/dom/tag.imba ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesImbaSrcImbaDomTagImba(module, exports, __webpack_require__) {
    eval("function iter$(a){ return a ? (a.toArray ? a.toArray() : a) : []; };\nvar Imba = __webpack_require__(/*! ../imba */ \"./node_modules/imba/src/imba/imba.imba\");\n\nImba.CSSKeyMap = {};\n\nImba.TAG_BUILT = 1;\nImba.TAG_SETUP = 2;\nImba.TAG_MOUNTING = 4;\nImba.TAG_MOUNTED = 8;\nImba.TAG_SCHEDULED = 16;\nImba.TAG_AWAKENED = 32;\nImba.TAG_MOUNTABLE = 64;\nImba.TAG_AUTOCLASS_GLOBALS = true;\nImba.TAG_AUTOCLASS_LOCALS = true;\nImba.TAG_AUTOCLASS_SVG = true;\n\n\n\nImba.document = function (){\n\treturn window.document;\n};\n\n\n\nImba.root = function (){\n\treturn Imba.getTagForDom(Imba.document().body);\n};\n\nImba.static = function (items,typ,nr){\n\titems._type = typ;\n\titems.static = nr;\n\treturn items;\n};\n\n\n\nImba.mount = function (node,into){\n\tinto || (into = Imba.document().body);\n\tinto.appendChild(node.dom());\n\tImba.TagManager.insert(node,into);\n\tnode.scheduler().configure({events: true}).activate(false);\n\tImba.TagManager.refresh();\n\treturn node;\n};\n\n\nImba.createTextNode = function (node){\n\tif (node && node.nodeType == 3) {\n\t\treturn node;\n\t};\n\treturn Imba.document().createTextNode(node);\n};\n\n\n\n\n\nImba.Tag = function Tag(dom,ctx){\n\tthis.setDom(dom);\n\tthis.$ = TagCache.build(this);\n\tthis.$up = this._owner_ = ctx;\n\tthis._tree_ = null;\n\tthis.FLAGS = 0;\n\tthis.build();\n\tthis;\n};\n\n\nImba.Tag.buildNode = function (){\n\tvar dom = Imba.document().createElement(this._nodeType || 'div');\n\tif (this._classes) {\n\t\tvar cls = this._classes.join(\" \");\n\t\tif (cls) { dom.className = cls };\n\t};\n\treturn dom;\n};\n\nImba.Tag.createNode = function (){\n\tvar proto = (this._protoDom || (this._protoDom = this.buildNode()));\n\treturn proto.cloneNode(false);\n};\n\nImba.Tag.build = function (ctx){\n\treturn new this(this.createNode(),ctx);\n};\n\nImba.Tag.dom = function (){\n\treturn this._protoDom || (this._protoDom = this.buildNode());\n};\n\nImba.Tag.end = function (){\n\treturn this.commit(0);\n};\n\n\n\nImba.Tag.inherit = function (child){\n\tchild._protoDom = null;\n\t\n\tif (this._nodeType) {\n\t\tchild._nodeType = this._nodeType;\n\t\tchild._classes = this._classes.slice();\n\t\t\n\t\tif (child._flagName) {\n\t\t\treturn child._classes.push(child._flagName);\n\t\t};\n\t} else {\n\t\tchild._nodeType = child._name;\n\t\tchild._flagName = null;\n\t\treturn child._classes = [];\n\t};\n};\n\n\n\nImba.Tag.prototype.optimizeTagStructure = function (){\n\tif (false) {};\n\tvar ctor = this.constructor;\n\tlet keys = Object.keys(this);\n\t\n\tif (keys.indexOf('mount') >= 0) {\n\t\tif (ctor._classes && ctor._classes.indexOf('__mount') == -1) {\n\t\t\tctor._classes.push('__mount');\n\t\t};\n\t\t\n\t\tif (ctor._protoDom) {\n\t\t\tctor._protoDom.classList.add('__mount');\n\t\t};\n\t};\n\t\n\tfor (let i = 0, items = iter$(keys), len = items.length, key; i < len; i++) {\n\t\tkey = items[i];\n\t\tif ((/^on/).test(key)) { Imba.EventManager.bind(key.slice(2)) };\n\t};\n\treturn this;\n};\n\n\nImba.attr(Imba.Tag,'accesskey');\nImba.attr(Imba.Tag,'autocapitalize');\nImba.attr(Imba.Tag,'contenteditable');\nImba.attr(Imba.Tag,'contextmenu');\nImba.attr(Imba.Tag,'dir');\nImba.attr(Imba.Tag,'draggable');\nImba.attr(Imba.Tag,'dropzone');\nImba.attr(Imba.Tag,'hidden');\nImba.attr(Imba.Tag,'inputmode');\nImba.attr(Imba.Tag,'itemid');\nImba.attr(Imba.Tag,'itemprop');\nImba.attr(Imba.Tag,'itemref');\nImba.attr(Imba.Tag,'itemscope');\nImba.attr(Imba.Tag,'itemtype');\nImba.attr(Imba.Tag,'lang');\nImba.attr(Imba.Tag,'name');\nImba.attr(Imba.Tag,'role');\nImba.attr(Imba.Tag,'slot');\nImba.attr(Imba.Tag,'spellcheck');\nImba.attr(Imba.Tag,'tabindex');\nImba.Tag.prototype.title = function(v){ return this.getAttribute('title'); }\nImba.Tag.prototype.setTitle = function(v){ this.setAttribute('title',v); return this; };\nImba.attr(Imba.Tag,'translate');\n\nImba.Tag.prototype.dom = function (){\n\treturn this._dom;\n};\n\nImba.Tag.prototype.setDom = function (dom){\n\tdom._tag = this;\n\tthis._dom = this._slot_ = dom;\n\treturn this;\n};\n\nImba.Tag.prototype.ref = function (){\n\treturn this._ref;\n};\n\nImba.Tag.prototype.root = function (){\n\treturn this._owner_ ? this._owner_.root() : this;\n};\n\n\n\nImba.Tag.prototype.ref_ = function (ref){\n\tthis.flag(this._ref = ref);\n\treturn this;\n};\n\n\n\nImba.Tag.prototype.setData = function (data){\n\tthis._data = data;\n\treturn this;\n};\n\n\n\nImba.Tag.prototype.data = function (){\n\treturn this._data;\n};\n\n\nImba.Tag.prototype.bindData = function (target,path,args){\n\treturn this.setData(args ? target[path].apply(target,args) : target[path]);\n};\n\n\n\nImba.Tag.prototype.setHtml = function (html){\n\tif (this.html() != html) {\n\t\tthis._dom.innerHTML = html;\n\t};\n\treturn this;\n};\n\n\n\nImba.Tag.prototype.html = function (){\n\treturn this._dom.innerHTML;\n};\n\nImba.Tag.prototype.on$ = function (slot,handler,context){\n\tlet handlers = this._on_ || (this._on_ = []);\n\tlet prev = handlers[slot];\n\t\n\tif (slot < 0) {\n\t\tif (prev == undefined) {\n\t\t\tslot = handlers[slot] = handlers.length;\n\t\t} else {\n\t\t\tslot = prev;\n\t\t};\n\t\tprev = handlers[slot];\n\t};\n\t\n\thandlers[slot] = handler;\n\tif (prev) {\n\t\thandler.state = prev.state;\n\t} else {\n\t\thandler.state = {context: context};\n\t\tif (true) { Imba.EventManager.bind(handler[0]) };\n\t};\n\treturn this;\n};\n\n\nImba.Tag.prototype.setId = function (id){\n\tif (id != null) {\n\t\tthis.dom().id = id;\n\t};\n\treturn this;\n};\n\nImba.Tag.prototype.id = function (){\n\treturn this.dom().id;\n};\n\n\n\nImba.Tag.prototype.setAttribute = function (name,value){\n\tvar old = this.dom().getAttribute(name);\n\t\n\tif (old == value) {\n\t\tvalue;\n\t} else if (value != null && value !== false) {\n\t\tthis.dom().setAttribute(name,value);\n\t} else {\n\t\tthis.dom().removeAttribute(name);\n\t};\n\treturn this;\n};\n\nImba.Tag.prototype.setNestedAttr = function (ns,name,value,modifiers){\n\tif (this[ns + 'SetAttribute']) {\n\t\tthis[ns + 'SetAttribute'](name,value,modifiers);\n\t} else {\n\t\tthis.setAttributeNS(ns,name,value);\n\t};\n\treturn this;\n};\n\nImba.Tag.prototype.setAttributeNS = function (ns,name,value){\n\tvar old = this.getAttributeNS(ns,name);\n\t\n\tif (old != value) {\n\t\tif (value != null && value !== false) {\n\t\t\tthis.dom().setAttributeNS(ns,name,value);\n\t\t} else {\n\t\t\tthis.dom().removeAttributeNS(ns,name);\n\t\t};\n\t};\n\treturn this;\n};\n\n\n\n\nImba.Tag.prototype.removeAttribute = function (name){\n\treturn this.dom().removeAttribute(name);\n};\n\n\n\nImba.Tag.prototype.getAttribute = function (name){\n\treturn this.dom().getAttribute(name);\n};\n\n\nImba.Tag.prototype.getAttributeNS = function (ns,name){\n\treturn this.dom().getAttributeNS(ns,name);\n};\n\n\nImba.Tag.prototype.set = function (key,value,mods){\n\tlet setter = Imba.toSetter(key);\n\tif (this[setter] instanceof Function) {\n\t\tthis[setter](value,mods);\n\t} else {\n\t\tthis._dom.setAttribute(key,value);\n\t};\n\treturn this;\n};\n\n\nImba.Tag.prototype.get = function (key){\n\treturn this._dom.getAttribute(key);\n};\n\n\n\nImba.Tag.prototype.setContent = function (content,type){\n\tthis.setChildren(content,type);\n\treturn this;\n};\n\n\n\nImba.Tag.prototype.setChildren = function (nodes,type){\n\t// overridden on client by reconciler\n\tthis._tree_ = nodes;\n\treturn this;\n};\n\n\n\nImba.Tag.prototype.setTemplate = function (template){\n\tif (!this._template) {\n\t\tif (this.render == Imba.Tag.prototype.render) {\n\t\t\tthis.render = this.renderTemplate; \n\t\t};\n\t};\n\t\n\tthis.template = this._template = template;\n\treturn this;\n};\n\nImba.Tag.prototype.template = function (){\n\treturn null;\n};\n\n\n\nImba.Tag.prototype.renderTemplate = function (){\n\tvar body = this.template();\n\tif (body != this) { this.setChildren(body) };\n\treturn this;\n};\n\n\n\n\nImba.Tag.prototype.removeChild = function (child){\n\tvar par = this.dom();\n\tvar el = child._slot_ || child;\n\tif (el && el.parentNode == par) {\n\t\tImba.TagManager.remove(el._tag || el,this);\n\t\tpar.removeChild(el);\n\t};\n\treturn this;\n};\n\n\n\nImba.Tag.prototype.removeAllChildren = function (){\n\tif (this._dom.firstChild) {\n\t\tvar el;\n\t\twhile (el = this._dom.firstChild){\n\t\t\t true && Imba.TagManager.remove(el._tag || el,this);\n\t\t\tthis._dom.removeChild(el);\n\t\t};\n\t};\n\tthis._tree_ = this._text_ = null;\n\treturn this;\n};\n\n\n\nImba.Tag.prototype.appendChild = function (node){\n\tif ((typeof node=='string'||node instanceof String)) {\n\t\tthis.dom().appendChild(Imba.document().createTextNode(node));\n\t} else if (node) {\n\t\tthis.dom().appendChild(node._slot_ || node);\n\t\tImba.TagManager.insert(node._tag || node,this);\n\t\t\n\t};\n\treturn this;\n};\n\n\n\nImba.Tag.prototype.insertBefore = function (node,rel){\n\tif ((typeof node=='string'||node instanceof String)) {\n\t\tnode = Imba.document().createTextNode(node);\n\t};\n\t\n\tif (node && rel) {\n\t\tthis.dom().insertBefore((node._slot_ || node),(rel._slot_ || rel));\n\t\tImba.TagManager.insert(node._tag || node,this);\n\t\t\n\t};\n\treturn this;\n};\n\nImba.Tag.prototype.detachFromParent = function (){\n\tif (this._slot_ == this._dom) {\n\t\tthis._slot_ = (this._dom._placeholder_ || (this._dom._placeholder_ = Imba.document().createComment(\"node\")));\n\t\tthis._slot_._tag || (this._slot_._tag = this);\n\t\t\n\t\tif (this._dom.parentNode) {\n\t\t\tImba.TagManager.remove(this,this._dom.parentNode);\n\t\t\tthis._dom.parentNode.replaceChild(this._slot_,this._dom);\n\t\t};\n\t};\n\treturn this;\n};\n\nImba.Tag.prototype.attachToParent = function (){\n\tif (this._slot_ != this._dom) {\n\t\tlet prev = this._slot_;\n\t\tthis._slot_ = this._dom;\n\t\tif (prev && prev.parentNode) {\n\t\t\tImba.TagManager.insert(this);\n\t\t\tprev.parentNode.replaceChild(this._dom,prev);\n\t\t};\n\t};\n\t\n\treturn this;\n};\n\n\n\nImba.Tag.prototype.orphanize = function (){\n\tvar par;\n\tif (par = this.parent()) { par.removeChild(this) };\n\treturn this;\n};\n\n\n\nImba.Tag.prototype.text = function (v){\n\treturn this._dom.textContent;\n};\n\n\n\nImba.Tag.prototype.setText = function (txt){\n\tthis._tree_ = txt;\n\tthis._dom.textContent = (txt == null || this.text() === false) ? '' : txt;\n\tthis;\n\treturn this;\n};\n\n\n\n\nImba.Tag.prototype.dataset = function (key,val){\n\tif (key instanceof Object) {\n\t\tfor (let v, i = 0, keys = Object.keys(key), l = keys.length, k; i < l; i++){\n\t\t\tk = keys[i];v = key[k];this.dataset(k,v);\n\t\t};\n\t\treturn this;\n\t};\n\t\n\tif (arguments.length == 2) {\n\t\tthis.setAttribute((\"data-\" + key),val);\n\t\treturn this;\n\t};\n\t\n\tif (key) {\n\t\treturn this.getAttribute((\"data-\" + key));\n\t};\n\t\n\tvar dataset = this.dom().dataset;\n\t\n\tif (!dataset) {\n\t\tdataset = {};\n\t\tfor (let i = 0, items = iter$(this.dom().attributes), len = items.length, atr; i < len; i++) {\n\t\t\tatr = items[i];\n\t\t\tif (atr.name.substr(0,5) == 'data-') {\n\t\t\t\tdataset[Imba.toCamelCase(atr.name.slice(5))] = atr.value;\n\t\t\t};\n\t\t};\n\t};\n\t\n\treturn dataset;\n};\n\n\n\nImba.Tag.prototype.render = function (){\n\treturn this;\n};\n\n\n\nImba.Tag.prototype.build = function (){\n\treturn this;\n};\n\n\n\nImba.Tag.prototype.setup = function (){\n\treturn this;\n};\n\n\n\nImba.Tag.prototype.commit = function (){\n\tif (this.beforeRender() !== false) this.render();\n\treturn this;\n};\n\nImba.Tag.prototype.beforeRender = function (){\n\treturn this;\n};\n\n\n\nImba.Tag.prototype.tick = function (){\n\tif (this.beforeRender() !== false) this.render();\n\treturn this;\n};\n\n\n\nImba.Tag.prototype.end = function (){\n\tthis.setup();\n\tthis.commit(0);\n\tthis.end = Imba.Tag.end;\n\treturn this;\n};\n\n\nImba.Tag.prototype.$open = function (context){\n\tif (context != this._context_) {\n\t\tthis._tree_ = null;\n\t\tthis._context_ = context;\n\t};\n\treturn this;\n};\n\n\n\nImba.Tag.prototype.synced = function (){\n\treturn this;\n};\n\n\n\n\nImba.Tag.prototype.awaken = function (){\n\treturn this;\n};\n\n\n\nImba.Tag.prototype.flags = function (){\n\treturn this._dom.classList;\n};\n\n\n\nImba.Tag.prototype.flag = function (name,toggler){\n\t// it is most natural to treat a second undefined argument as a no-switch\n\t// so we need to check the arguments-length\n\tif (arguments.length == 2) {\n\t\tif (this._dom.classList.contains(name) != !!toggler) {\n\t\t\tthis._dom.classList.toggle(name);\n\t\t};\n\t} else {\n\t\t// firefox will trigger a change if adding existing class\n\t\tif (!this._dom.classList.contains(name)) { this._dom.classList.add(name) };\n\t};\n\treturn this;\n};\n\n\n\nImba.Tag.prototype.unflag = function (name){\n\tthis._dom.classList.remove(name);\n\treturn this;\n};\n\n\n\nImba.Tag.prototype.toggleFlag = function (name){\n\tthis._dom.classList.toggle(name);\n\treturn this;\n};\n\n\n\nImba.Tag.prototype.hasFlag = function (name){\n\treturn this._dom.classList.contains(name);\n};\n\n\nImba.Tag.prototype.flagIf = function (flag,bool){\n\tvar f = this._flags_ || (this._flags_ = {});\n\tlet prev = f[flag];\n\t\n\tif (bool && !prev) {\n\t\tthis._dom.classList.add(flag);\n\t\tf[flag] = true;\n\t} else if (prev && !bool) {\n\t\tthis._dom.classList.remove(flag);\n\t\tf[flag] = false;\n\t};\n\t\n\treturn this;\n};\n\n\n\nImba.Tag.prototype.setFlag = function (name,value){\n\tlet flags = this._namedFlags_ || (this._namedFlags_ = {});\n\tlet prev = flags[name];\n\tif (prev != value) {\n\t\tif (prev) { this.unflag(prev) };\n\t\tif (value) { this.flag(value) };\n\t\tflags[name] = value;\n\t};\n\treturn this;\n};\n\n\n\n\nImba.Tag.prototype.scheduler = function (){\n\treturn (this._scheduler == null) ? (this._scheduler = new Imba.Scheduler(this)) : this._scheduler;\n};\n\n\n\nImba.Tag.prototype.schedule = function (options){\n\tif(options === undefined) options = {events: true};\n\tthis.scheduler().configure(options).activate();\n\treturn this;\n};\n\n\n\nImba.Tag.prototype.unschedule = function (){\n\tif (this._scheduler) { this.scheduler().deactivate() };\n\treturn this;\n};\n\n\n\n\nImba.Tag.prototype.parent = function (){\n\treturn Imba.getTagForDom(this.dom().parentNode);\n};\n\n\n\nImba.Tag.prototype.children = function (sel){\n\tlet res = [];\n\tfor (let i = 0, items = iter$(this._dom.children), len = items.length, item; i < len; i++) {\n\t\titem = items[i];\n\t\tres.push(item._tag || Imba.getTagForDom(item));\n\t};\n\treturn res;\n};\n\nImba.Tag.prototype.querySelector = function (q){\n\treturn Imba.getTagForDom(this._dom.querySelector(q));\n};\n\nImba.Tag.prototype.querySelectorAll = function (q){\n\tvar items = [];\n\tfor (let i = 0, ary = iter$(this._dom.querySelectorAll(q)), len = ary.length; i < len; i++) {\n\t\titems.push(Imba.getTagForDom(ary[i]));\n\t};\n\treturn items;\n};\n\n\n\nImba.Tag.prototype.matches = function (sel){\n\tvar fn;\n\tif (sel instanceof Function) {\n\t\treturn sel(this);\n\t};\n\t\n\tif (sel.query instanceof Function) { sel = sel.query() };\n\tif (fn = (this._dom.matches || this._dom.matchesSelector || this._dom.webkitMatchesSelector || this._dom.msMatchesSelector || this._dom.mozMatchesSelector)) {\n\t\treturn fn.call(this._dom,sel);\n\t};\n};\n\n\n\nImba.Tag.prototype.closest = function (sel){\n\treturn Imba.getTagForDom(this._dom.closest(sel));\n};\n\n\n\nImba.Tag.prototype.contains = function (node){\n\treturn this.dom().contains(node._dom || node);\n};\n\n\n\n\nImba.Tag.prototype.log = function (){\n\tvar $0 = arguments, i = $0.length;\n\tvar args = new Array(i>0 ? i : 0);\n\twhile(i>0) args[i-1] = $0[--i];\n\targs.unshift(console);\n\tFunction.prototype.call.apply(console.log,args);\n\treturn this;\n};\n\nImba.Tag.prototype.css = function (key,val,mod){\n\tif (key instanceof Object) {\n\t\tfor (let v, i = 0, keys = Object.keys(key), l = keys.length, k; i < l; i++){\n\t\t\tk = keys[i];v = key[k];this.css(k,v);\n\t\t};\n\t\treturn this;\n\t};\n\t\n\tvar name = Imba.CSSKeyMap[key] || key;\n\t\n\tif (val == null) {\n\t\tthis.dom().style.removeProperty(name);\n\t} else if (val == undefined && arguments.length == 1) {\n\t\treturn this.dom().style[name];\n\t} else if (name.match(/^--/)) {\n\t\tthis.dom().style.setProperty(name,val);\n\t} else {\n\t\tif ((typeof val=='number'||val instanceof Number) && (name.match(/width|height|left|right|top|bottom/) || (mod && mod.px))) {\n\t\t\tthis.dom().style[name] = val + \"px\";\n\t\t} else {\n\t\t\tthis.dom().style[name] = val;\n\t\t};\n\t};\n\treturn this;\n};\n\nImba.Tag.prototype.setStyle = function (style){\n\treturn this.setAttribute('style',style);\n};\n\nImba.Tag.prototype.style = function (){\n\treturn this.getAttribute('style');\n};\n\n\n\nImba.Tag.prototype.trigger = function (name,data){\n\tif(data === undefined) data = {};\n\treturn  true && Imba.Events.trigger(name,this,{data: data});\n};\n\n\n\nImba.Tag.prototype.focus = function (){\n\tthis.dom().focus();\n\treturn this;\n};\n\n\n\nImba.Tag.prototype.blur = function (){\n\tthis.dom().blur();\n\treturn this;\n};\n\nImba.Tag.prototype.toString = function (){\n\treturn this.dom().outerHTML;\n};\n\n\nImba.Tag.prototype.initialize = Imba.Tag;\n\nImba.SVGTag = function SVGTag(){ return Imba.Tag.apply(this,arguments) };\n\nImba.subclass(Imba.SVGTag,Imba.Tag);\nImba.SVGTag.namespaceURI = function (){\n\treturn \"http://www.w3.org/2000/svg\";\n};\n\nImba.SVGTag.buildNode = function (){\n\tvar dom = Imba.document().createElementNS(this.namespaceURI(),this._nodeType);\n\tif (this._classes) {\n\t\tvar cls = this._classes.join(\" \");\n\t\tif (cls) { dom.className.baseVal = cls };\n\t};\n\treturn dom;\n};\n\nImba.SVGTag.inherit = function (child){\n\tchild._protoDom = null;\n\t\n\tif (this == Imba.SVGTag) {\n\t\tchild._nodeType = child._name;\n\t\treturn child._classes = [];\n\t} else {\n\t\tchild._nodeType = this._nodeType;\n\t\tvar classes = (this._classes || []).slice(0);\n\t\tif (Imba.TAG_AUTOCLASS_SVG) {\n\t\t\tclasses.push(\"_\" + child._name.replace(/_/g,'-'));\n\t\t};\n\t\treturn child._classes = classes;\n\t};\n};\n\n\nImba.HTML_TAGS = \"a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr\".split(\" \");\nImba.HTML_TAGS_UNSAFE = \"article aside header section\".split(\" \");\n\nImba.HTML_ATTRS = {\n\ta: \"href target hreflang media download rel type ping referrerpolicy\",\n\taudio: \"autoplay controls crossorigin loop muted preload src\",\n\tarea: \"alt coords download href hreflang ping referrerpolicy rel shape target\",\n\tbase: \"href target\",\n\tvideo: \"autoplay buffered controls crossorigin height loop muted preload poster src width playsinline\",\n\tfieldset: \"disabled form name\",\n\tform: \"method action enctype autocomplete target\",\n\tbutton: \"autofocus type form formaction formenctype formmethod formnovalidate formtarget value name\",\n\tembed: \"height src type width\",\n\tinput: \"accept disabled form list max maxlength min minlength pattern required size step type\",\n\tlabel: \"accesskey for form\",\n\timg: \"alt src srcset crossorigin decoding height importance intrinsicsize ismap referrerpolicy sizes width usemap\",\n\tlink: \"rel type href media\",\n\tiframe: \"allow allowfullscreen allowpaymentrequest height importance name referrerpolicy sandbox src srcdoc width frameborder align longdesc scrolling\",\n\tmeta: \"property content charset desc http-equiv color-scheme name scheme\",\n\tmap: \"name\",\n\toptgroup: \"label\",\n\toption: \"label\",\n\toutput: \"for form\",\n\tobject: \"type data width height\",\n\tparam: \"name type value valuetype\",\n\tprogress: \"max\",\n\tscript: \"src type async defer crossorigin integrity nonce language nomodule\",\n\tselect: \"size form multiple\",\n\tsource: \"sizes src srcset type media\",\n\ttextarea: \"rows cols minlength maxlength form wrap\",\n\ttrack: \"default kind label src srclang\",\n\ttd: \"colspan rowspan headers\",\n\tth: \"colspan rowspan\"\n};\n\n\nImba.HTML_PROPS = {\n\tinput: \"autofocus autocomplete autocapitalize autocorrect value placeholder required disabled multiple checked readOnly spellcheck\",\n\ttextarea: \"autofocus autocomplete autocapitalize autocorrect value placeholder required disabled multiple checked readOnly spellcheck\",\n\tform: \"novalidate\",\n\tfieldset: \"disabled\",\n\tbutton: \"disabled\",\n\tselect: \"autofocus disabled required readOnly multiple\",\n\toption: \"disabled selected value\",\n\toptgroup: \"disabled\",\n\tprogress: \"value\",\n\tfieldset: \"disabled\",\n\tcanvas: \"width height\"\n};\n\nvar extender = function(obj,sup) {\n\tfor (let v, i = 0, keys = Object.keys(sup), l = keys.length, k; i < l; i++){\n\t\tk = keys[i];v = sup[k];(obj[k] == null) ? (obj[k] = v) : obj[k];\n\t};\n\t\n\tobj.prototype = Object.create(sup.prototype);\n\tobj.__super__ = obj.prototype.__super__ = sup.prototype;\n\tobj.prototype.constructor = obj;\n\tif (sup.inherit) { sup.inherit(obj) };\n\treturn obj;\n};\n\n\n\nfunction Tag(){\n\treturn function(dom,ctx) {\n\t\tthis.initialize(dom,ctx);\n\t\treturn this;\n\t};\n};\n\nImba.Tags = function Tags(){\n\tthis;\n};\n\nImba.Tags.prototype.__clone = function (ns){\n\tvar clone = Object.create(this);\n\tclone._parent = this;\n\treturn clone;\n};\n\nImba.Tags.prototype.ns = function (name){\n\treturn this['_' + name.toUpperCase()] || this.defineNamespace(name);\n};\n\nImba.Tags.prototype.defineNamespace = function (name){\n\tvar clone = Object.create(this);\n\tclone._parent = this;\n\tclone._ns = name;\n\tthis['_' + name.toUpperCase()] = clone;\n\treturn clone;\n};\n\nImba.Tags.prototype.baseType = function (name,ns){\n\treturn (Imba.indexOf(name,Imba.HTML_TAGS) >= 0) ? 'element' : 'div';\n};\n\nImba.Tags.prototype.defineTag = function (fullName,supr,body){\n\tif(body==undefined && typeof supr == 'function') body = supr,supr = '';\n\tif(supr==undefined) supr = '';\n\tif (body && body._nodeType) {\n\t\tsupr = body;\n\t\tbody = null;\n\t};\n\t\n\tif (this[fullName]) {\n\t\tconsole.log(\"tag already exists?\",fullName);\n\t};\n\t\n\t\n\tvar ns;\n\tvar name = fullName;\n\tlet nsidx = name.indexOf(':');\n\tif (nsidx >= 0) {\n\t\tns = fullName.substr(0,nsidx);\n\t\tname = fullName.substr(nsidx + 1);\n\t\tif (ns == 'svg' && !supr) {\n\t\t\tsupr = 'svg:element';\n\t\t};\n\t};\n\t\n\tsupr || (supr = this.baseType(fullName));\n\t\n\tlet supertype = ((typeof supr=='string'||supr instanceof String)) ? this.findTagType(supr) : supr;\n\tlet tagtype = Tag();\n\t\n\ttagtype._name = name;\n\ttagtype._flagName = null;\n\t\n\tif (name[0] == '#') {\n\t\tImba.SINGLETONS[name.slice(1)] = tagtype;\n\t\tthis[name] = tagtype;\n\t} else if (name[0] == name[0].toUpperCase()) {\n\t\tif (Imba.TAG_AUTOCLASS_LOCALS) {\n\t\t\ttagtype._flagName = name;\n\t\t};\n\t} else {\n\t\tif (Imba.TAG_AUTOCLASS_GLOBALS) {\n\t\t\ttagtype._flagName = \"_\" + fullName.replace(/[_\\:]/g,'-');\n\t\t};\n\t\tthis[fullName] = tagtype;\n\t};\n\t\n\textender(tagtype,supertype);\n\t\n\tif (body) {\n\t\tbody.call(tagtype,tagtype,tagtype.TAGS || this);\n\t\tif (tagtype.defined) { tagtype.defined() };\n\t\tthis.optimizeTag(tagtype);\n\t};\n\treturn tagtype;\n};\n\nImba.Tags.prototype.defineSingleton = function (name,supr,body){\n\treturn this.defineTag(name,supr,body);\n};\n\nImba.Tags.prototype.extendTag = function (name,supr,body){\n\tif(body==undefined && typeof supr == 'function') body = supr,supr = '';\n\tif(supr==undefined) supr = '';\n\tvar klass = (((typeof name=='string'||name instanceof String)) ? this.findTagType(name) : name);\n\t\n\tif (body) { body && body.call(klass,klass,klass.prototype) };\n\tif (klass.extended) { klass.extended() };\n\tthis.optimizeTag(klass);\n\treturn klass;\n};\n\nImba.Tags.prototype.optimizeTag = function (tagtype){\n\tvar prototype_;\n\treturn (prototype_ = tagtype.prototype) && prototype_.optimizeTagStructure  &&  prototype_.optimizeTagStructure();\n};\n\nImba.Tags.prototype.findTagType = function (type){\n\tvar attrs, props;\n\tlet klass = this[type];\n\tif (!klass) {\n\t\tif (type.substr(0,4) == 'svg:') {\n\t\t\tklass = this.defineTag(type,'svg:element');\n\t\t} else if (Imba.HTML_TAGS.indexOf(type) >= 0) {\n\t\t\tklass = this.defineTag(type,'element');\n\t\t\t\n\t\t\tif (attrs = Imba.HTML_ATTRS[type]) {\n\t\t\t\tfor (let i = 0, items = iter$(attrs.split(\" \")), len = items.length; i < len; i++) {\n\t\t\t\t\tImba.attr(klass,items[i]);\n\t\t\t\t};\n\t\t\t};\n\t\t\t\n\t\t\tif (props = Imba.HTML_PROPS[type]) {\n\t\t\t\tfor (let i = 0, items = iter$(props.split(\" \")), len = items.length; i < len; i++) {\n\t\t\t\t\tImba.attr(klass,items[i],{dom: true});\n\t\t\t\t};\n\t\t\t};\n\t\t};\n\t};\n\treturn klass;\n};\n\nImba.createElement = function (name,ctx,ref,pref){\n\tvar type = name;\n\tvar parent;\n\tif (name instanceof Function) {\n\t\ttype = name;\n\t} else {\n\t\tif (null) {};\n\t\ttype = Imba.TAGS.findTagType(name);\n\t};\n\t\n\tif (ctx instanceof TagMap) {\n\t\tparent = ctx.par$;\n\t} else if (pref instanceof Imba.Tag) {\n\t\tparent = pref;\n\t} else {\n\t\tparent = (ctx && pref != undefined) ? ctx[pref] : ((ctx && ctx._tag || ctx));\n\t};\n\t\n\tvar node = type.build(parent);\n\t\n\tif (ctx instanceof TagMap) {\n\t\tctx.i$++;\n\t\tnode.$key = ref;\n\t};\n\t\n\tif (ctx && ref != undefined) {\n\t\tctx[ref] = node;\n\t};\n\t\n\treturn node;\n};\n\nImba.createTagCache = function (owner){\n\tvar item = [];\n\titem._tag = owner;\n\treturn item;\n};\n\nImba.createTagMap = function (ctx,ref,pref){\n\tvar par = ((pref != undefined) ? pref : ctx._tag);\n\tvar node = new TagMap(ctx,ref,par);\n\tctx[ref] = node;\n\treturn node;\n};\n\nImba.createTagList = function (ctx,ref,pref){\n\tvar node = [];\n\tnode._type = 4;\n\tnode._tag = ((pref != undefined) ? pref : ctx._tag);\n\tctx[ref] = node;\n\treturn node;\n};\n\nImba.createTagLoopResult = function (ctx,ref,pref){\n\tvar node = [];\n\tnode._type = 5;\n\tnode.cache = {i$: 0};\n\treturn node;\n};\n\n\nfunction TagCache(owner){\n\tthis._tag = owner;\n\tthis;\n};\nTagCache.build = function (owner){\n\tvar item = [];\n\titem._tag = owner;\n\treturn item;\n};\n\n\n\nfunction TagMap(cache,ref,par){\n\tthis.cache$ = cache;\n\tthis.key$ = ref;\n\tthis.par$ = par;\n\tthis.i$ = 0;\n};\n\nTagMap.prototype.$iter = function (){\n\tvar item = [];\n\titem._type = 5;\n\titem.cache = this;\n\treturn item;\n};\n\nTagMap.prototype.$prune = function (items){\n\tlet cache = this.cache$;\n\tlet key = this.key$;\n\tlet clone = new TagMap(cache,key,this.par$);\n\tfor (let i = 0, ary = iter$(items), len = ary.length, item; i < len; i++) {\n\t\titem = ary[i];\n\t\tclone[item.key$] = item;\n\t};\n\tclone.i$ = items.length;\n\treturn cache[key] = clone;\n};\n\nImba.TagMap = TagMap;\nImba.TagCache = TagCache;\nImba.SINGLETONS = {};\nImba.TAGS = new Imba.Tags();\nImba.TAGS.element = Imba.TAGS.htmlelement = Imba.Tag;\nImba.TAGS['svg:element'] = Imba.SVGTag;\n\nImba.attr(Imba.Tag,'is');\n\nImba.defineTag = function (name,supr,body){\n\tif(body==undefined && typeof supr == 'function') body = supr,supr = '';\n\tif(supr==undefined) supr = '';\n\treturn Imba.TAGS.defineTag(name,supr,body);\n};\n\nImba.defineSingletonTag = function (id,supr,body){\n\tif(body==undefined && typeof supr == 'function') body = supr,supr = 'div';\n\tif(supr==undefined) supr = 'div';\n\treturn Imba.TAGS.defineTag(this.name(),supr,body);\n};\n\nImba.extendTag = function (name,body){\n\treturn Imba.TAGS.extendTag(name,body);\n};\n\nImba.getTagSingleton = function (id){\n\tvar klass;\n\tvar dom,node;\n\t\n\tif (klass = Imba.SINGLETONS[id]) {\n\t\tif (klass && klass.Instance) { return klass.Instance };\n\t\t\n\t\t\n\t\tif (dom = Imba.document().getElementById(id)) {\n\t\t\t// we have a live instance - when finding it through a selector we should awake it, no?\n\t\t\t// console.log('creating the singleton from existing node in dom?',id,type)\n\t\t\tnode = klass.Instance = new klass(dom);\n\t\t\tnode.awaken(dom); \n\t\t\treturn node;\n\t\t};\n\t\t\n\t\tdom = klass.createNode();\n\t\tdom.id = id;\n\t\tnode = klass.Instance = new klass(dom);\n\t\tnode.end().awaken(dom);\n\t\treturn node;\n\t} else if (dom = Imba.document().getElementById(id)) {\n\t\treturn Imba.getTagForDom(dom);\n\t};\n};\n\nvar svgSupport = typeof SVGElement !== 'undefined';\n\n\nImba.getTagForDom = function (dom){\n\tif (!dom) { return null };\n\tif (dom._dom) { return dom };\n\tif (dom._tag) { return dom._tag };\n\tif (!dom.nodeName) { return null };\n\t\n\tvar name = dom.nodeName.toLowerCase();\n\tvar type = name;\n\tvar ns = Imba.TAGS;\n\t\n\tif (dom.id && Imba.SINGLETONS[dom.id]) {\n\t\treturn Imba.getTagSingleton(dom.id);\n\t};\n\t\n\tif (svgSupport && (dom instanceof SVGElement)) {\n\t\ttype = ns.findTagType(\"svg:\" + name);\n\t} else if (Imba.HTML_TAGS.indexOf(name) >= 0) {\n\t\ttype = ns.findTagType(name);\n\t} else {\n\t\ttype = Imba.Tag;\n\t};\n\t\n\treturn new type(dom,null).awaken(dom);\n};\n\n\nif (false) { var camelCase, unprefixed, styles; };\n\nImba.Tag;\n\n\n//# sourceURL=webpack:///./node_modules/imba/src/imba/dom/tag.imba?");
    /***/
  },

  /***/
  "./node_modules/imba/src/imba/dom/touch.imba":
  /*!***************************************************!*\
    !*** ./node_modules/imba/src/imba/dom/touch.imba ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function node_modulesImbaSrcImbaDomTouchImba(module, exports, __webpack_require__) {
    eval("function iter$(a){ return a ? (a.toArray ? a.toArray() : a) : []; };\nvar Imba = __webpack_require__(/*! ../imba */ \"./node_modules/imba/src/imba/imba.imba\");\n\n\n\n\n\n\n\n\n\n\nImba.Touch = function Touch(event,pointer){\n\t// @native  = false\n\tthis.setEvent(event);\n\tthis.setData({});\n\tthis.setActive(true);\n\tthis._button = event && event.button || 0;\n\tthis._suppress = false; \n\tthis._captured = false;\n\tthis.setBubble(false);\n\tpointer = pointer;\n\tthis.setUpdates(0);\n\treturn this;\n};\n\nImba.Touch.LastTimestamp = 0;\nImba.Touch.TapTimeout = 50;\n\n\n\nvar touches = [];\nvar count = 0;\nvar identifiers = {};\n\nImba.Touch.count = function (){\n\treturn count;\n};\n\nImba.Touch.lookup = function (item){\n\treturn item && (item.__touch__ || identifiers[item.identifier]);\n};\n\nImba.Touch.release = function (item,touch){\n\tvar v_, $1;\n\t(((v_ = identifiers[item.identifier]),delete identifiers[item.identifier], v_));\n\t((($1 = item.__touch__),delete item.__touch__, $1));\n\treturn;\n};\n\nImba.Touch.ontouchstart = function (e){\n\tfor (let i = 0, items = iter$(e.changedTouches), len = items.length, t; i < len; i++) {\n\t\tt = items[i];\n\t\tif (this.lookup(t)) { continue; };\n\t\tvar touch = identifiers[t.identifier] = new this(e); \n\t\tt.__touch__ = touch;\n\t\ttouches.push(touch);\n\t\tcount++;\n\t\ttouch.touchstart(e,t);\n\t};\n\treturn this;\n};\n\nImba.Touch.ontouchmove = function (e){\n\tvar touch;\n\tfor (let i = 0, items = iter$(e.changedTouches), len = items.length, t; i < len; i++) {\n\t\tt = items[i];\n\t\tif (touch = this.lookup(t)) {\n\t\t\ttouch.touchmove(e,t);\n\t\t};\n\t};\n\t\n\treturn this;\n};\n\nImba.Touch.ontouchend = function (e){\n\tvar touch;\n\tfor (let i = 0, items = iter$(e.changedTouches), len = items.length, t; i < len; i++) {\n\t\tt = items[i];\n\t\tif (touch = this.lookup(t)) {\n\t\t\ttouch.touchend(e,t);\n\t\t\tthis.release(t,touch);\n\t\t\tcount--;\n\t\t};\n\t};\n\t\n\t\n\t\n\t\n\treturn this;\n};\n\nImba.Touch.ontouchcancel = function (e){\n\tvar touch;\n\tfor (let i = 0, items = iter$(e.changedTouches), len = items.length, t; i < len; i++) {\n\t\tt = items[i];\n\t\tif (touch = this.lookup(t)) {\n\t\t\ttouch.touchcancel(e,t);\n\t\t\tthis.release(t,touch);\n\t\t\tcount--;\n\t\t};\n\t};\n\treturn this;\n};\n\nImba.Touch.onmousedown = function (e){\n\treturn this;\n};\n\nImba.Touch.onmousemove = function (e){\n\treturn this;\n};\n\nImba.Touch.onmouseup = function (e){\n\treturn this;\n};\n\n\nImba.Touch.prototype.phase = function(v){ return this._phase; }\nImba.Touch.prototype.setPhase = function(v){ this._phase = v; return this; };\nImba.Touch.prototype.active = function(v){ return this._active; }\nImba.Touch.prototype.setActive = function(v){ this._active = v; return this; };\nImba.Touch.prototype.event = function(v){ return this._event; }\nImba.Touch.prototype.setEvent = function(v){ this._event = v; return this; };\nImba.Touch.prototype.pointer = function(v){ return this._pointer; }\nImba.Touch.prototype.setPointer = function(v){ this._pointer = v; return this; };\nImba.Touch.prototype.target = function(v){ return this._target; }\nImba.Touch.prototype.setTarget = function(v){ this._target = v; return this; };\nImba.Touch.prototype.handler = function(v){ return this._handler; }\nImba.Touch.prototype.setHandler = function(v){ this._handler = v; return this; };\nImba.Touch.prototype.updates = function(v){ return this._updates; }\nImba.Touch.prototype.setUpdates = function(v){ this._updates = v; return this; };\nImba.Touch.prototype.suppress = function(v){ return this._suppress; }\nImba.Touch.prototype.setSuppress = function(v){ this._suppress = v; return this; };\nImba.Touch.prototype.data = function(v){ return this._data; }\nImba.Touch.prototype.setData = function(v){ this._data = v; return this; };\nImba.Touch.prototype.__bubble = {chainable: true,name: 'bubble'};\nImba.Touch.prototype.bubble = function(v){ return v !== undefined ? (this.setBubble(v),this) : this._bubble; }\nImba.Touch.prototype.setBubble = function(v){ this._bubble = v; return this; };\nImba.Touch.prototype.timestamp = function(v){ return this._timestamp; }\nImba.Touch.prototype.setTimestamp = function(v){ this._timestamp = v; return this; };\n\nImba.Touch.prototype.gestures = function(v){ return this._gestures; }\nImba.Touch.prototype.setGestures = function(v){ this._gestures = v; return this; };\n\n\n\nImba.Touch.prototype.capture = function (){\n\tthis._captured = true;\n\tthis._event && this._event.stopPropagation();\n\tif (!this._selblocker) {\n\t\tthis._selblocker = function(e) { return e.preventDefault(); };\n\t\tImba.document().addEventListener('selectstart',this._selblocker,true);\n\t};\n\treturn this;\n};\n\nImba.Touch.prototype.isCaptured = function (){\n\treturn !!this._captured;\n};\n\n\n\nImba.Touch.prototype.extend = function (plugin){\n\t// console.log \"added gesture!!!\"\n\tthis._gestures || (this._gestures = []);\n\tthis._gestures.push(plugin);\n\treturn this;\n};\n\n\n\nImba.Touch.prototype.redirect = function (target){\n\tthis._redirect = target;\n\treturn this;\n};\n\n\n\nImba.Touch.prototype.suppress = function (){\n\t// collision with the suppress property\n\tthis._active = false;\n\t\n\treturn this;\n};\n\nImba.Touch.prototype.setSuppress = function (value){\n\tconsole.warn('Imba.Touch#suppress= is deprecated');\n\tthis._supress = value;\n\tthis;\n\treturn this;\n};\n\nImba.Touch.prototype.touchstart = function (e,t){\n\tthis._event = e;\n\tthis._touch = t;\n\tthis._button = 0;\n\tthis._x = t.clientX;\n\tthis._y = t.clientY;\n\tthis.began();\n\tthis.update();\n\tif (e && this.isCaptured()) { e.preventDefault() };\n\treturn this;\n};\n\nImba.Touch.prototype.touchmove = function (e,t){\n\tthis._event = e;\n\tthis._x = t.clientX;\n\tthis._y = t.clientY;\n\tthis.update();\n\tif (e && this.isCaptured()) { e.preventDefault() };\n\treturn this;\n};\n\nImba.Touch.prototype.touchend = function (e,t){\n\tthis._event = e;\n\tthis._x = t.clientX;\n\tthis._y = t.clientY;\n\tthis.ended();\n\t\n\tImba.Touch.LastTimestamp = e.timeStamp;\n\t\n\tif (this._maxdr < 20) {\n\t\tvar tap = new Imba.Event(e);\n\t\ttap.setType('tap');\n\t\ttap.process();\n\t};\n\t\n\tif (e && this.isCaptured()) {\n\t\te.preventDefault();\n\t};\n\t\n\treturn this;\n};\n\nImba.Touch.prototype.touchcancel = function (e,t){\n\treturn this.cancel();\n};\n\nImba.Touch.prototype.mousedown = function (e,t){\n\tvar self = this;\n\tself._event = e;\n\tself._button = e.button;\n\tself._x = t.clientX;\n\tself._y = t.clientY;\n\tself.began();\n\tself.update();\n\tself._mousemove = function(e) { return self.mousemove(e,e); };\n\tImba.document().addEventListener('mousemove',self._mousemove,true);\n\treturn self;\n};\n\nImba.Touch.prototype.mousemove = function (e,t){\n\tthis._x = t.clientX;\n\tthis._y = t.clientY;\n\tthis._event = e;\n\tif (this.isCaptured()) { e.preventDefault() };\n\tthis.update();\n\tthis.move();\n\treturn this;\n};\n\nImba.Touch.prototype.mouseup = function (e,t){\n\tthis._x = t.clientX;\n\tthis._y = t.clientY;\n\tthis.ended();\n\treturn this;\n};\n\nImba.Touch.prototype.idle = function (){\n\treturn this.update();\n};\n\nImba.Touch.prototype.began = function (){\n\tthis._timestamp = Date.now();\n\tthis._maxdr = this._dr = 0;\n\tthis._x0 = this._x;\n\tthis._y0 = this._y;\n\t\n\tvar dom = this.event().target;\n\tvar node = null;\n\t\n\tthis._sourceTarget = dom && Imba.getTagForDom(dom);\n\t\n\twhile (dom){\n\t\tnode = Imba.getTagForDom(dom);\n\t\tif (node && node.ontouchstart) {\n\t\t\tthis._bubble = false;\n\t\t\tthis.setTarget(node);\n\t\t\tthis.target().ontouchstart(this);\n\t\t\tif (!this._bubble) { break; };\n\t\t};\n\t\tdom = dom.parentNode;\n\t};\n\t\n\tthis._updates++;\n\treturn this;\n};\n\nImba.Touch.prototype.update = function (){\n\tvar target_;\n\tif (!this._active || this._cancelled) { return this };\n\t\n\tvar dr = Math.sqrt(this.dx() * this.dx() + this.dy() * this.dy());\n\tif (dr > this._dr) { this._maxdr = dr };\n\tthis._dr = dr;\n\t\n\t\n\tif (this._redirect) {\n\t\tif (this._target && this._target.ontouchcancel) {\n\t\t\tthis._target.ontouchcancel(this);\n\t\t};\n\t\tthis.setTarget(this._redirect);\n\t\tthis._redirect = null;\n\t\tif (this.target().ontouchstart) { this.target().ontouchstart(this) };\n\t\tif (this._redirect) { return this.update() }; \n\t};\n\t\n\t\n\tthis._updates++;\n\tif (this._gestures) {\n\t\tfor (let i = 0, items = iter$(this._gestures), len = items.length; i < len; i++) {\n\t\t\titems[i].ontouchupdate(this);\n\t\t};\n\t};\n\t\n\t(target_ = this.target()) && target_.ontouchupdate  &&  target_.ontouchupdate(this);\n\tif (this._redirect) this.update();\n\treturn this;\n};\n\nImba.Touch.prototype.move = function (){\n\tvar target_;\n\tif (!this._active || this._cancelled) { return this };\n\t\n\tif (this._gestures) {\n\t\tfor (let i = 0, items = iter$(this._gestures), len = items.length, g; i < len; i++) {\n\t\t\tg = items[i];\n\t\t\tif (g.ontouchmove) { g.ontouchmove(this,this._event) };\n\t\t};\n\t};\n\t\n\t(target_ = this.target()) && target_.ontouchmove  &&  target_.ontouchmove(this,this._event);\n\treturn this;\n};\n\nImba.Touch.prototype.ended = function (){\n\tvar target_;\n\tif (!this._active || this._cancelled) { return this };\n\t\n\tthis._updates++;\n\t\n\tif (this._gestures) {\n\t\tfor (let i = 0, items = iter$(this._gestures), len = items.length; i < len; i++) {\n\t\t\titems[i].ontouchend(this);\n\t\t};\n\t};\n\t\n\t(target_ = this.target()) && target_.ontouchend  &&  target_.ontouchend(this);\n\tthis.cleanup_();\n\treturn this;\n};\n\nImba.Touch.prototype.cancel = function (){\n\tif (!this._cancelled) {\n\t\tthis._cancelled = true;\n\t\tthis.cancelled();\n\t\tthis.cleanup_();\n\t};\n\treturn this;\n};\n\nImba.Touch.prototype.cancelled = function (){\n\tvar target_;\n\tif (!this._active) { return this };\n\t\n\tthis._cancelled = true;\n\tthis._updates++;\n\t\n\tif (this._gestures) {\n\t\tfor (let i = 0, items = iter$(this._gestures), len = items.length, g; i < len; i++) {\n\t\t\tg = items[i];\n\t\t\tif (g.ontouchcancel) { g.ontouchcancel(this) };\n\t\t};\n\t};\n\t\n\t(target_ = this.target()) && target_.ontouchcancel  &&  target_.ontouchcancel(this);\n\treturn this;\n};\n\nImba.Touch.prototype.cleanup_ = function (){\n\tif (this._mousemove) {\n\t\tImba.document().removeEventListener('mousemove',this._mousemove,true);\n\t\tthis._mousemove = null;\n\t};\n\t\n\tif (this._selblocker) {\n\t\tImba.document().removeEventListener('selectstart',this._selblocker,true);\n\t\tthis._selblocker = null;\n\t};\n\t\n\treturn this;\n};\n\n\n\nImba.Touch.prototype.dr = function (){\n\treturn this._dr;\n};\n\n\n\nImba.Touch.prototype.dx = function (){\n\treturn this._x - this._x0;\n};\n\n\n\nImba.Touch.prototype.dy = function (){\n\treturn this._y - this._y0;\n};\n\n\n\nImba.Touch.prototype.x0 = function (){\n\treturn this._x0;\n};\n\n\n\nImba.Touch.prototype.y0 = function (){\n\treturn this._y0;\n};\n\n\n\nImba.Touch.prototype.x = function (){\n\treturn this._x;\n};\n\n\n\nImba.Touch.prototype.y = function (){\n\treturn this._y;\n};\n\n\n\nImba.Touch.prototype.tx = function (){\n\tthis._targetBox || (this._targetBox = this._target.dom().getBoundingClientRect());\n\treturn this._x - this._targetBox.left;\n};\n\n\n\nImba.Touch.prototype.ty = function (){\n\tthis._targetBox || (this._targetBox = this._target.dom().getBoundingClientRect());\n\treturn this._y - this._targetBox.top;\n};\n\n\n\nImba.Touch.prototype.button = function (){\n\treturn this._button;\n}; \n\nImba.Touch.prototype.sourceTarget = function (){\n\treturn this._sourceTarget;\n};\n\nImba.Touch.prototype.elapsed = function (){\n\treturn Date.now() - this._timestamp;\n};\n\n\nImba.TouchGesture = function TouchGesture(){ };\n\nImba.TouchGesture.prototype.__active = {'default': false,name: 'active'};\nImba.TouchGesture.prototype.active = function(v){ return this._active; }\nImba.TouchGesture.prototype.setActive = function(v){ this._active = v; return this; }\nImba.TouchGesture.prototype._active = false;\n\nImba.TouchGesture.prototype.ontouchstart = function (e){\n\treturn this;\n};\n\nImba.TouchGesture.prototype.ontouchupdate = function (e){\n\treturn this;\n};\n\nImba.TouchGesture.prototype.ontouchend = function (e){\n\treturn this;\n};\n\n\n\n//# sourceURL=webpack:///./node_modules/imba/src/imba/dom/touch.imba?");
    /***/
  },

  /***/
  "./node_modules/imba/src/imba/imba.imba":
  /*!**********************************************!*\
    !*** ./node_modules/imba/src/imba/imba.imba ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesImbaSrcImbaImbaImba(module, exports) {
    eval("\n\nvar Imba = {VERSION: '1.4.4'};\n\n\n\nImba.setTimeout = function (delay,block){\n\treturn setTimeout(function() {\n\t\tblock();\n\t\treturn Imba.commit();\n\t},delay);\n};\n\n\n\nImba.setInterval = function (interval,block){\n\treturn setInterval(function() {\n\t\tblock();\n\t\treturn Imba.commit();\n\t},interval);\n};\n\n\n\nImba.clearInterval = function (id){\n\treturn clearInterval(id);\n};\n\n\n\nImba.clearTimeout = function (id){\n\treturn clearTimeout(id);\n};\n\n\nImba.subclass = function (obj,sup){\n\tfor (let k in sup){\n\t\tlet v;\n\t\tv = sup[k];if (sup.hasOwnProperty(k)) { obj[k] = v };\n\t};\n\t\n\tobj.prototype = Object.create(sup.prototype);\n\tobj.__super__ = obj.prototype.__super__ = sup.prototype;\n\tobj.prototype.initialize = obj.prototype.constructor = obj;\n\treturn obj;\n};\n\n\n\nImba.iterable = function (o){\n\treturn o ? ((o.toArray ? o.toArray() : o)) : [];\n};\n\n\n\nImba.await = function (value){\n\tif (value instanceof Array) {\n\t\tconsole.warn(\"await (Array) is deprecated - use await Promise.all(Array)\");\n\t\treturn Promise.all(value);\n\t} else if (value && value.then) {\n\t\treturn value;\n\t} else {\n\t\treturn Promise.resolve(value);\n\t};\n};\n\nvar dashRegex = /-./g;\nvar setterCache = {};\n\nImba.toCamelCase = function (str){\n\tif (str.indexOf('-') >= 0) {\n\t\treturn str.replace(dashRegex,function(m) { return m.charAt(1).toUpperCase(); });\n\t} else {\n\t\treturn str;\n\t};\n};\n\nImba.toSetter = function (str){\n\treturn setterCache[str] || (setterCache[str] = Imba.toCamelCase('set-' + str));\n};\n\nImba.indexOf = function (a,b){\n\treturn (b && b.indexOf) ? b.indexOf(a) : [].indexOf.call(a,b);\n};\n\nImba.len = function (a){\n\treturn a && ((a.len instanceof Function) ? a.len.call(a) : a.length) || 0;\n};\n\nImba.prop = function (scope,name,opts){\n\tif (scope.defineProperty) {\n\t\treturn scope.defineProperty(name,opts);\n\t};\n\treturn;\n};\n\nImba.attr = function (scope,name,opts){\n\tif(opts === undefined) opts = {};\n\tif (scope.defineAttribute) {\n\t\treturn scope.defineAttribute(name,opts);\n\t};\n\t\n\tlet getName = Imba.toCamelCase(name);\n\tlet setName = Imba.toCamelCase('set-' + name);\n\tlet proto = scope.prototype;\n\t\n\tif (opts.dom) {\n\t\tproto[getName] = function() { return this.dom()[name]; };\n\t\tproto[setName] = function(value) {\n\t\t\tif (value != this[name]()) {\n\t\t\t\tthis.dom()[name] = value;\n\t\t\t};\n\t\t\treturn this;\n\t\t};\n\t} else {\n\t\tproto[getName] = function() { return this.getAttribute(name); };\n\t\tproto[setName] = function(value) {\n\t\t\tthis.setAttribute(name,value);\n\t\t\treturn this;\n\t\t};\n\t};\n\treturn;\n};\n\nImba.propDidSet = function (object,property,val,prev){\n\tlet fn = property.watch;\n\tif (fn instanceof Function) {\n\t\tfn.call(object,val,prev,property);\n\t} else if ((typeof fn=='string'||fn instanceof String) && object[fn]) {\n\t\tobject[fn](val,prev,property);\n\t};\n\treturn;\n};\n\n\n\nvar emit__ = function(event,args,node) {\n\t// var node = cbs[event]\n\tvar prev,cb,ret;\n\t\n\twhile ((prev = node) && (node = node.next)){\n\t\tif (cb = node.listener) {\n\t\t\tif (node.path && cb[node.path]) {\n\t\t\t\tret = args ? cb[node.path].apply(cb,args) : cb[node.path]();\n\t\t\t} else {\n\t\t\t\t// check if it is a method?\n\t\t\t\tret = args ? cb.apply(node,args) : cb.call(node);\n\t\t\t};\n\t\t};\n\t\t\n\t\tif (node.times && --node.times <= 0) {\n\t\t\tprev.next = node.next;\n\t\t\tnode.listener = null;\n\t\t};\n\t};\n\treturn;\n};\n\n\nImba.listen = function (obj,event,listener,path){\n\tvar cbs,list,tail;\n\tcbs = obj.__listeners__ || (obj.__listeners__ = {});\n\tlist = cbs[event] || (cbs[event] = {});\n\ttail = list.tail || (list.tail = (list.next = {}));\n\ttail.listener = listener;\n\ttail.path = path;\n\tlist.tail = tail.next = {};\n\treturn tail;\n};\n\n\nImba.once = function (obj,event,listener){\n\tvar tail = Imba.listen(obj,event,listener);\n\ttail.times = 1;\n\treturn tail;\n};\n\n\nImba.unlisten = function (obj,event,cb,meth){\n\tvar node,prev;\n\tvar meta = obj.__listeners__;\n\tif (!meta) { return };\n\t\n\tif (node = meta[event]) {\n\t\twhile ((prev = node) && (node = node.next)){\n\t\t\tif (node == cb || node.listener == cb) {\n\t\t\t\tprev.next = node.next;\n\t\t\t\t\n\t\t\t\tnode.listener = null;\n\t\t\t\tbreak;\n\t\t\t};\n\t\t};\n\t};\n\treturn;\n};\n\n\nImba.emit = function (obj,event,params){\n\tvar cb;\n\tif (cb = obj.__listeners__) {\n\t\tif (cb[event]) { emit__(event,params,cb[event]) };\n\t\tif (cb.all) { emit__(event,[event,params],cb.all) }; \n\t};\n\treturn;\n};\n\nImba.observeProperty = function (observer,key,trigger,target,prev){\n\tif (prev && typeof prev == 'object') {\n\t\tImba.unlisten(prev,'all',observer,trigger);\n\t};\n\tif (target && typeof target == 'object') {\n\t\tImba.listen(target,'all',observer,trigger);\n\t};\n\treturn this;\n};\n\nmodule.exports = Imba;\n\n\n//# sourceURL=webpack:///./node_modules/imba/src/imba/imba.imba?");
    /***/
  },

  /***/
  "./node_modules/imba/src/imba/index.imba":
  /*!***********************************************!*\
    !*** ./node_modules/imba/src/imba/index.imba ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesImbaSrcImbaIndexImba(module, exports, __webpack_require__) {
    eval("/* WEBPACK VAR INJECTION */(function(global) {var Imba = __webpack_require__(/*! ./imba */ \"./node_modules/imba/src/imba/imba.imba\");\nvar activate = false;\nvar ns = ((typeof window !== 'undefined') ? window : (((typeof global !== 'undefined') ? global : null)));\n\nif (ns && ns.Imba) {\n\tconsole.warn((\"Imba v\" + (ns.Imba.VERSION) + \" is already loaded.\"));\n\tImba = ns.Imba;\n} else if (ns) {\n\tns.Imba = Imba;\n\tactivate = true;\n\tif (ns.define && ns.define.amd) {\n\t\tns.define(\"imba\",[],function() { return Imba; });\n\t};\n};\n\nmodule.exports = Imba;\n\nif (true) {\n\t__webpack_require__(/*! ./scheduler */ \"./node_modules/imba/src/imba/scheduler.imba\");\n\t__webpack_require__(/*! ./dom/index */ \"./node_modules/imba/src/imba/dom/index.imba\");\n};\n\nif (activate) {\n\tImba.EventManager.activate();\n};\n\nif (false) {};\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/imba/src/imba/index.imba?");
    /***/
  },

  /***/
  "./node_modules/imba/src/imba/scheduler.imba":
  /*!***************************************************!*\
    !*** ./node_modules/imba/src/imba/scheduler.imba ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function node_modulesImbaSrcImbaSchedulerImba(module, exports, __webpack_require__) {
    eval("function iter$(a){ return a ? (a.toArray ? a.toArray() : a) : []; };\nvar Imba = __webpack_require__(/*! ./imba */ \"./node_modules/imba/src/imba/imba.imba\");\n\nvar requestAnimationFrame; \nvar cancelAnimationFrame;\n\nif (false) {};\n\nif (true) {\n\tcancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitRequestAnimationFrame;\n\trequestAnimationFrame = window.requestAnimationFrame;\n\trequestAnimationFrame || (requestAnimationFrame = window.webkitRequestAnimationFrame);\n\trequestAnimationFrame || (requestAnimationFrame = window.mozRequestAnimationFrame);\n\trequestAnimationFrame || (requestAnimationFrame = function(blk) { return setTimeout(blk,1000 / 60); });\n};\n\nfunction Ticker(){\n\tvar self = this;\n\tself._queue = [];\n\tself._stage = -1;\n\tself._scheduled = false;\n\tself._ticker = function(e) {\n\t\tself._scheduled = false;\n\t\treturn self.tick(e);\n\t};\n\tself;\n};\n\nTicker.prototype.stage = function(v){ return this._stage; }\nTicker.prototype.setStage = function(v){ this._stage = v; return this; };\nTicker.prototype.queue = function(v){ return this._queue; }\nTicker.prototype.setQueue = function(v){ this._queue = v; return this; };\n\nTicker.prototype.add = function (item,force){\n\tif (force || this._queue.indexOf(item) == -1) {\n\t\tthis._queue.push(item);\n\t};\n\t\n\tif (!this._scheduled) { return this.schedule() };\n};\n\nTicker.prototype.tick = function (timestamp){\n\tvar items = this._queue;\n\tif (!this._ts) { this._ts = timestamp };\n\tthis._dt = timestamp - this._ts;\n\tthis._ts = timestamp;\n\tthis._queue = [];\n\tthis._stage = 1;\n\tthis.before();\n\tif (items.length) {\n\t\tfor (let i = 0, ary = iter$(items), len = ary.length, item; i < len; i++) {\n\t\t\titem = ary[i];\n\t\t\tif (item instanceof Function) {\n\t\t\t\titem(this._dt,this);\n\t\t\t} else if (item.tick) {\n\t\t\t\titem.tick(this._dt,this);\n\t\t\t};\n\t\t};\n\t};\n\tthis._stage = 2;\n\tthis.after();\n\tthis._stage = this._scheduled ? 0 : (-1);\n\treturn this;\n};\n\nTicker.prototype.schedule = function (){\n\tif (!this._scheduled) {\n\t\tthis._scheduled = true;\n\t\tif (this._stage == -1) {\n\t\t\tthis._stage = 0;\n\t\t};\n\t\trequestAnimationFrame(this._ticker);\n\t};\n\treturn this;\n};\n\nTicker.prototype.before = function (){\n\treturn this;\n};\n\nTicker.prototype.after = function (){\n\tif (Imba.TagManager) {\n\t\tImba.TagManager.refresh();\n\t};\n\treturn this;\n};\n\nImba.TICKER = new Ticker();\nImba.SCHEDULERS = [];\n\nImba.ticker = function (){\n\treturn Imba.TICKER;\n};\n\nImba.requestAnimationFrame = function (callback){\n\treturn requestAnimationFrame(callback);\n};\n\nImba.cancelAnimationFrame = function (id){\n\treturn cancelAnimationFrame(id);\n};\n\n\n\n\nvar commitQueue = 0;\n\nImba.commit = function (params){\n\tcommitQueue++;\n\t\n\tImba.emit(Imba,'commit',(params != undefined) ? [params] : undefined);\n\tif (--commitQueue == 0) {\n\t\tImba.TagManager && Imba.TagManager.refresh();\n\t};\n\treturn;\n};\n\n\n\nImba.Scheduler = function Scheduler(target){\n\tvar self = this;\n\tself._id = counter++;\n\tself._target = target;\n\tself._marked = false;\n\tself._active = false;\n\tself._marker = function() { return self.mark(); };\n\tself._ticker = function(e) { return self.tick(e); };\n\t\n\tself._dt = 0;\n\tself._frame = {};\n\tself._scheduled = false;\n\tself._timestamp = 0;\n\tself._ticks = 0;\n\tself._flushes = 0;\n\t\n\tself.onevent = self.onevent.bind(self);\n\tself;\n};\n\nvar counter = 0;\n\nImba.Scheduler.event = function (e){\n\treturn Imba.emit(Imba,'event',e);\n};\n\n\n\nImba.Scheduler.prototype.__raf = {watch: 'rafDidSet',name: 'raf'};\nImba.Scheduler.prototype.raf = function(v){ return this._raf; }\nImba.Scheduler.prototype.setRaf = function(v){\n\tvar a = this.raf();\n\tif(v != a) { this._raf = v; }\n\tif(v != a) { this.rafDidSet && this.rafDidSet(v,a,this.__raf) }\n\treturn this;\n};\nImba.Scheduler.prototype.__interval = {watch: 'intervalDidSet',name: 'interval'};\nImba.Scheduler.prototype.interval = function(v){ return this._interval; }\nImba.Scheduler.prototype.setInterval = function(v){\n\tvar a = this.interval();\n\tif(v != a) { this._interval = v; }\n\tif(v != a) { this.intervalDidSet && this.intervalDidSet(v,a,this.__interval) }\n\treturn this;\n};\nImba.Scheduler.prototype.__events = {watch: 'eventsDidSet',name: 'events'};\nImba.Scheduler.prototype.events = function(v){ return this._events; }\nImba.Scheduler.prototype.setEvents = function(v){\n\tvar a = this.events();\n\tif(v != a) { this._events = v; }\n\tif(v != a) { this.eventsDidSet && this.eventsDidSet(v,a,this.__events) }\n\treturn this;\n};\nImba.Scheduler.prototype.marked = function(v){ return this._marked; }\nImba.Scheduler.prototype.setMarked = function(v){ this._marked = v; return this; };\n\nImba.Scheduler.prototype.rafDidSet = function (bool){\n\tif (bool && this._active) this.requestTick();\n\treturn this;\n};\n\nImba.Scheduler.prototype.intervalDidSet = function (time){\n\tclearInterval(this._intervalId);\n\tthis._intervalId = null;\n\tif (time && this._active) {\n\t\tthis._intervalId = setInterval(this.oninterval.bind(this),time);\n\t};\n\treturn this;\n};\n\nImba.Scheduler.prototype.eventsDidSet = function (new$,prev){\n\tif (this._active && new$ && !prev) {\n\t\treturn Imba.listen(Imba,'commit',this,'onevent');\n\t} else if (!(new$) && prev) {\n\t\treturn Imba.unlisten(Imba,'commit',this,'onevent');\n\t};\n};\n\n\n\nImba.Scheduler.prototype.active = function (){\n\treturn this._active;\n};\n\n\n\nImba.Scheduler.prototype.dt = function (){\n\treturn this._dt;\n};\n\n\n\nImba.Scheduler.prototype.configure = function (options){\n\tvar v_;\n\tif(options === undefined) options = {};\n\tif (options.raf != undefined) { (this.setRaf(v_ = options.raf),v_) };\n\tif (options.interval != undefined) { (this.setInterval(v_ = options.interval),v_) };\n\tif (options.events != undefined) { (this.setEvents(v_ = options.events),v_) };\n\treturn this;\n};\n\n\n\nImba.Scheduler.prototype.mark = function (){\n\tthis._marked = true;\n\tif (!this._scheduled) {\n\t\tthis.requestTick();\n\t};\n\treturn this;\n};\n\n\n\nImba.Scheduler.prototype.flush = function (){\n\tthis._flushes++;\n\tthis._target.tick(this);\n\tthis._marked = false;\n\treturn this;\n};\n\n\n\nImba.Scheduler.prototype.tick = function (delta,ticker){\n\tthis._ticks++;\n\tthis._dt = delta;\n\t\n\tif (ticker) {\n\t\tthis._scheduled = false;\n\t};\n\t\n\tthis.flush();\n\t\n\tif (this._raf && this._active) {\n\t\tthis.requestTick();\n\t};\n\treturn this;\n};\n\nImba.Scheduler.prototype.requestTick = function (){\n\tif (!this._scheduled) {\n\t\tthis._scheduled = true;\n\t\tImba.TICKER.add(this);\n\t};\n\treturn this;\n};\n\n\n\nImba.Scheduler.prototype.activate = function (immediate){\n\tif(immediate === undefined) immediate = true;\n\tif (!this._active) {\n\t\tthis._active = true;\n\t\tthis._commit = this._target.commit;\n\t\tthis._target.commit = function() { return this; };\n\t\tthis._target && this._target.flag  &&  this._target.flag('scheduled_');\n\t\tImba.SCHEDULERS.push(this);\n\t\t\n\t\tif (this._events) {\n\t\t\tImba.listen(Imba,'commit',this,'onevent');\n\t\t};\n\t\t\n\t\tif (this._interval && !this._intervalId) {\n\t\t\tthis._intervalId = setInterval(this.oninterval.bind(this),this._interval);\n\t\t};\n\t\t\n\t\tif (immediate) {\n\t\t\tthis.tick(0);\n\t\t} else if (this._raf) {\n\t\t\tthis.requestTick();\n\t\t};\n\t};\n\treturn this;\n};\n\n\n\nImba.Scheduler.prototype.deactivate = function (){\n\tif (this._active) {\n\t\tthis._active = false;\n\t\tthis._target.commit = this._commit;\n\t\tlet idx = Imba.SCHEDULERS.indexOf(this);\n\t\tif (idx >= 0) {\n\t\t\tImba.SCHEDULERS.splice(idx,1);\n\t\t};\n\t\t\n\t\tif (this._events) {\n\t\t\tImba.unlisten(Imba,'commit',this,'onevent');\n\t\t};\n\t\t\n\t\tif (this._intervalId) {\n\t\t\tclearInterval(this._intervalId);\n\t\t\tthis._intervalId = null;\n\t\t};\n\t\t\n\t\tthis._target && this._target.unflag  &&  this._target.unflag('scheduled_');\n\t};\n\treturn this;\n};\n\nImba.Scheduler.prototype.track = function (){\n\treturn this._marker;\n};\n\nImba.Scheduler.prototype.oninterval = function (){\n\tthis.tick();\n\tImba.TagManager.refresh();\n\treturn this;\n};\n\nImba.Scheduler.prototype.onevent = function (event){\n\tif (!this._events || this._marked) { return this };\n\t\n\tif (this._events instanceof Function) {\n\t\tif (this._events(event,this)) this.mark();\n\t} else if (this._events instanceof Array) {\n\t\tif (this._events.indexOf((event && event.type) || event) >= 0) {\n\t\t\tthis.mark();\n\t\t};\n\t} else {\n\t\tthis.mark();\n\t};\n\treturn this;\n};\n\n\n//# sourceURL=webpack:///./node_modules/imba/src/imba/scheduler.imba?");
    /***/
  },

  /***/
  "./node_modules/webpack/buildin/global.js":
  /*!***********************************!*\
    !*** (webpack)/buildin/global.js ***!
    \***********************************/

  /*! no static exports found */

  /***/
  function node_modulesWebpackBuildinGlobalJs(module, exports) {
    eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");
    /***/
  },

  /***/
  "./src/about.imba":
  /*!************************!*\
    !*** ./src/about.imba ***!
    \************************/

  /*! no static exports found */

  /***/
  function srcAboutImba(module, exports, __webpack_require__) {
    eval("var Imba = __webpack_require__(/*! imba */ \"./node_modules/imba/imba.imba\"), _1 = Imba.createElement;\nvar About = Imba.defineTag('About', function(tag){\n\ttag.prototype.render = function (){\n\t\tvar $ = this.$;\n\t\treturn this.$open(0).setChildren(\n\t\t\t$[0] || _1('div',$,0,this).flag('ui').flag('inverted').flag('vertical').flag('footer').flag('segment').setId('footer').setContent(\n\t\t\t\t$[1] || _1('div',$,1,0).flag('ui').flag('container').setContent([\n\t\t\t\t\t_1('h3',$,2,1).flag('ui').flag('horizontal').flag('divider').flag('inverted').flag('header').setText(\"About\"),\n\t\t\t\t\t\n\t\t\t\t\t_1('div',$,3,1).flag('ui').flag('stackable').flag('inverted').flag('equal').flag('height').flag('centered').flag('grid').setContent([\n\t\t\t\t\t\t_1('div',$,4,3).flag('eight').flag('wide').flag('right').flag('aligned').flag('column').setContent([\n\t\t\t\t\t\t\t_1('img',$,5,4).flag('ui').flag('small').flag('circular').flag('right').flag('floated').flag('image').setSrc(\"ellen.png\"),\n\t\t\t\t\t\t\t_1('p',$,6,4).setContent(\n\t\t\t\t\t\t\t\t$[7] || _1('strong',$,7,6).setText(\"Ellen\")\n\t\t\t\t\t\t\t,2),\n\t\t\t\t\t\t\t_1('p',$,8,4).flag('bio').setText(\"Ellen was trained at a young age using the Suzuki Violin Method, and later played in school and college orchestras, string quartets, and other ensembles. Her undergraduate degree is in German with a minor in Math (from UT Austin), and she has a Master of Arts degree in German from Middlebury College.\")\n\t\t\t\t\t\t],2),\n\t\t\t\t\t\t_1('div',$,9,3).flag('eight').flag('wide').flag('column').setContent([\n\t\t\t\t\t\t\t_1('img',$,10,9).flag('ui').flag('small').flag('circular').flag('left').flag('floated').flag('image').setSrc(\"leah.png\"),\n\t\t\t\t\t\t\t_1('p',$,11,9).setContent(\n\t\t\t\t\t\t\t\t$[12] || _1('strong',$,12,11).setText(\"Leah\")\n\t\t\t\t\t\t\t,2),\n\t\t\t\t\t\t\t_1('p',$,13,9).flag('bio').setText(\"Leah began playing flute at age eleven, and has since played in various musical ensembles, including school and college bands, as well as a flute choir. She attended Texas Lutheran University, earning a Bachelor of Arts degree in Social Work, and the University of Texas Health Science Center, earning a Bachelor of Science in Nursing.\")\n\t\t\t\t\t\t],2)\n\t\t\t\t\t],2)\n\t\t\t\t],2)\n\t\t\t,2)\n\t\t,2).synced((\n\t\t\t$[5].end(),\n\t\t\t$[10].end()\n\t\t,true));\n\t};\n})\nexports.About = About;\n\n\n//# sourceURL=webpack:///./src/about.imba?");
    /***/
  },

  /***/
  "./src/booking.imba":
  /*!**************************!*\
    !*** ./src/booking.imba ***!
    \**************************/

  /*! no static exports found */

  /***/
  function srcBookingImba(module, exports, __webpack_require__) {
    eval("function iter$(a){ return a ? (a.toArray ? a.toArray() : a) : []; };\nvar Imba = __webpack_require__(/*! imba */ \"./node_modules/imba/imba.imba\"), _2 = Imba.createTagList, _1 = Imba.createElement;\nconst booking = {\n\tfullName: '',\n\tmobile: '',\n\tdate: '',\n\tlocation: '',\n\tservices: [],\n\tagreeToTerms: false\n};\n\nvar Booking = Imba.defineTag('Booking', function(tag){\n\t\n\tWEDDING = [\n\t\t{id: 1,name: 'Prelude',price: 300.00},\n\t\t{id: 2,name: 'Marches',price: 300.00},\n\t\t{id: 3,name: 'Ceremony',price: 300.00},\n\t\t{id: 4,name: 'Prelude & Marches',price: 400.00},\n\t\t{id: 5,name: 'Prelude & Ceremony',price: 400.00},\n\t\t{id: 6,name: 'Marches & Ceremony',price: 400.00},\n\t\t{id: 7,name: 'Prelude, Marches & Ceremony',price: 450.00}\n\t];\n\t\n\tRECEPTION = [\n\t\t{id: 8,name: '1 Hour Reception',price: 300.00},\n\t\t{id: 9,name: '2 Hour Reception',price: 500.00},\n\t\t{id: 10,name: '3 Hour Reception',price: 625.00},\n\t\t{id: 11,name: '4 Hour Reception',price: 775.00}\n\t];\n\t\n\tBOTH = [\n\t\t{id: 12,name: 'Wedding Service & 1 Hour Reception',price: 600.00},\n\t\t{id: 13,name: 'Wedding Service & 2 Hour Reception',price: 750.00},\n\t\t{id: 14,name: 'Wedding Service & 3 Hour Reception',price: 850.00}\n\t];\n\t\n\ttag.prototype.services = function (){\n\t\treturn WEDDING.concat(RECEPTION,BOTH);\n\t};\n\t\n\ttag.prototype.validateBooking = function (e){\n\t\tthis._bookNow.dom().classList.add('loading');\n\t\tthis.clearErrors();\n\t\tconst errors = [];\n\t\tfor (let i = 0, items = ['fullName','mobile','date','location'], len = items.length, field; i < len; i++) {\n\t\t\tfield = items[i];\n\t\t\tif (!booking[field] || booking[field].trim().length == 0) {\n\t\t\t\terrors.push(field);\n\t\t\t};\n\t\t};\n\t\tif (!booking.services || booking.services.length == 0) {\n\t\t\terrors.push('services');\n\t\t};\n\t\tif (booking.agreeToTerms !== true) {\n\t\t\terrors.push('agreeToTerms');\n\t\t};\n\t\tfor (let i = 0, len = errors.length; i < len; i++) {\n\t\t\tdocument.querySelector((\".\" + errors[i])).classList.add('error');\n\t\t};\n\t\tif (errors.length > 0) {\n\t\t\te.prevent();\n\t\t\treturn this._bookNow.dom().classList.remove('loading');\n\t\t};\n\t};\n\t\n\ttag.prototype.clearErrors = function (){\n\t\tlet res = [];\n\t\tfor (let i = 0, items = iter$(Object.keys(booking)), len = items.length; i < len; i++) {\n\t\t\tres.push(document.querySelector((\".\" + items[i])).classList.remove('error'));\n\t\t};\n\t\treturn res;\n\t};\n\t\n\ttag.prototype.render = function (){\n\t\tvar $ = this.$, self = this, t0;\n\t\treturn self.$open(0).setChildren(\n\t\t\t$[0] || _1('div',$,0,self).flag('ui').flag('vertical').flag('stripe').flag('segment').setId('booking').setContent(\n\t\t\t\t$[1] || _1('div',$,1,0).flag('ui').flag('container').setContent([\n\t\t\t\t\t_1('h3',$,2,1).flag('ui').flag('horizontal').flag('divider').flag('header').setContent([\n\t\t\t\t\t\t$[3] || _1('i',$,3,2).flag('calendar').flag('icon'),\n\t\t\t\t\t\t\"Contact\"\n\t\t\t\t\t],2),\n\t\t\t\t\t\n\t\t\t\t\t_1('form',$,4,1).flag('ui').flag('large').flag('form').setMethod('post').setName('booking').setAction(\"/?p=thanks\").on$(0,['submit','validateBooking'],self).setContent([\n\t\t\t\t\t\t_1('input',$,5,4).setType('hidden').setName('form-name').setValue('booking',1),\n\t\t\t\t\t\t_1('div',$,6,4).flag('three').flag('fields').setContent([\n\t\t\t\t\t\t\t_1('div',$,7,6).flag('required').flag('fullName').flag('field').setContent([\n\t\t\t\t\t\t\t\t_1('label',$,8,7).setText(\"Your Full Name\"),\n\t\t\t\t\t\t\t\t_1('input',$,9,7).setId('fullName').setType('text').setName('full_name').setMaxlength('30').setValue('',1)\n\t\t\t\t\t\t\t],2),\n\t\t\t\t\t\t\t_1('div',$,10,6).flag('required').flag('mobile').flag('field').setContent([\n\t\t\t\t\t\t\t\t_1('label',$,11,10).setText(\"Mobile phone\"),\n\t\t\t\t\t\t\t\t_1('input',$,12,10).setId('mobile').setType('tel').setName('mobile').setMaxlength('10').setValue('',1)\n\t\t\t\t\t\t\t],2),\n\t\t\t\t\t\t\t_1('div',$,13,6).flag('required').flag('date').flag('field').setContent([\n\t\t\t\t\t\t\t\t_1('label',$,14,13).setText(\"Date of Event\"),\n\t\t\t\t\t\t\t\t_1('input',$,15,13).flag('ui').setId('eventDate').setType('text').setName('event_date').setValue('',1)\n\t\t\t\t\t\t\t],2)\n\t\t\t\t\t\t],2),\n\t\t\t\t\t\t_1('div',$,16,4).flag('two').flag('fields').setContent([\n\t\t\t\t\t\t\t_1('div',$,17,16).flag('required').flag('location').flag('field').setContent([\n\t\t\t\t\t\t\t\t_1('label',$,18,17).setText(\"Event Location\"),\n\t\t\t\t\t\t\t\t_1('input',$,19,17).setId('eventLocation').setType('text').setName('event_location').setMaxlength('100').setValue('',1)\n\t\t\t\t\t\t\t],2),\n\t\t\t\t\t\t\t_1('div',$,20,16).flag('required').flag('services').flag('field').setContent([\n\t\t\t\t\t\t\t\t_1('label',$,21,20).setText(\"Services\"),\n\t\t\t\t\t\t\t\t_1('select',$,22,20).flag('ui').flag('dropdown').setId('services').setMultiple('multiple').setName('services')\n\t\t\t\t\t\t\t],2)\n\t\t\t\t\t\t],2),\n\t\t\t\t\t\t_1('div',$,24,4).flag('ui').flag('segment').setContent(\n\t\t\t\t\t\t\t$[25] || _1('div',$,25,24).flag('required').flag('inline').flag('agreeToTerms').flag('field').setContent(\n\t\t\t\t\t\t\t\t$[26] || _1('div',$,26,25).flag('ui').flag('toggle').flag('checkbox').setContent([\n\t\t\t\t\t\t\t\t\t_1('input',$,27,26).flag('hidden').setId('agreeToTerms').setType('checkbox').setName('contract_accepted').setChecked(''),\n\t\t\t\t\t\t\t\t\t_1('label',$,28,26).setFor(\"contract_accepted\").setContent([\n\t\t\t\t\t\t\t\t\t\t_1('span',$,29,28).setText(\"I have read and agree to the terms of the\"),\n\t\t\t\t\t\t\t\t\t\t_1('a',$,30,28).setHref('fluteviolin_contract.pdf').setTarget('_blank').setText(\" contract\")\n\t\t\t\t\t\t\t\t\t],2)\n\t\t\t\t\t\t\t\t],2)\n\t\t\t\t\t\t\t,2)\n\t\t\t\t\t\t,2),\n\t\t\t\t\t\t\n\t\t\t\t\t\t_1('div',$,31,4).flag('ui').flag('three').flag('column').flag('stackable').flag('centered').flag('grid').setContent(\n\t\t\t\t\t\t\tt0 = $[32] || (t0=_1('div',$,32,31)).flag('column').setContent(\n\t\t\t\t\t\t\t\tself._bookNow = self._bookNow||_1('button',t0).flag('bookNow').flag('massive').flag('fluid').flag('ui').flag('primary').flag('button').setId('bookNow').setType('submit').setText(\"Contact\")\n\t\t\t\t\t\t\t,2)\n\t\t\t\t\t\t,2)\n\t\t\t\t\t],2)\n\t\t\t\t],2)\n\t\t\t,2)\n\t\t,2).synced((\n\t\t\t$[4].end((\n\t\t\t\t$[5].end(),\n\t\t\t\t$[9].bindData(booking,'fullName').end(),\n\t\t\t\t$[12].bindData(booking,'mobile').end(),\n\t\t\t\t$[15].bindData(booking,'date').end(),\n\t\t\t\t$[19].bindData(booking,'location').end(),\n\t\t\t\t$[22].bindData(booking,'services').setContent(\n\t\t\t\t\t(function tagLoop($0) {\n\t\t\t\t\t\tfor (let i = 0, items = iter$(self.services()), len = $0.taglen = items.length, service; i < len; i++) {\n\t\t\t\t\t\t\tservice = items[i];\n\t\t\t\t\t\t\t($0[i] || _1('option',$0,i)).setText(\"$\" + (service.price) + \" - \" + (service.name));\n\t\t\t\t\t\t};return $0;\n\t\t\t\t\t})($[23] || _2($,23,$[22]))\n\t\t\t\t,4).end(),\n\t\t\t\t$[27].bindData(booking,'agreeToTerms').end(),\n\t\t\t\t$[28].end((\n\t\t\t\t\t$[30].end()\n\t\t\t\t,true)),\n\t\t\t\tself._bookNow.end()\n\t\t\t,true))\n\t\t,true));\n\t};\n})\nexports.Booking = Booking;\n\n\n//# sourceURL=webpack:///./src/booking.imba?");
    /***/
  },

  /***/
  "./src/index.imba":
  /*!************************!*\
    !*** ./src/index.imba ***!
    \************************/

  /*! no static exports found */

  /***/
  function srcIndexImba(module, exports, __webpack_require__) {
    eval("var Imba = __webpack_require__(/*! imba */ \"./node_modules/imba/imba.imba\"), _1 = Imba.createElement;\nvar Masthead = __webpack_require__(/*! ./masthead */ \"./src/masthead.imba\").Masthead;\nvar Prices = __webpack_require__(/*! ./prices */ \"./src/prices.imba\").Prices;\nvar Booking = __webpack_require__(/*! ./booking */ \"./src/booking.imba\").Booking;\nvar About = __webpack_require__(/*! ./about */ \"./src/about.imba\").About;\nvar Listen = __webpack_require__(/*! ./listen */ \"./src/listen.imba\").Listen;\n\nvar App = Imba.defineTag('App', function(tag){\n\ttag.prototype.render = function (){\n\t\tvar $ = this.$;\n\t\treturn this.$open(0).setChildren($.$ = $.$ || [\n\t\t\t_1(Masthead,$,0,this),\n\t\t\t_1(Listen,$,1,this),\n\t\t\t_1(Prices,$,2,this),\n\t\t\t_1(Booking,$,3,this),\n\t\t\t_1(About,$,4,this)\n\t\t],2).synced((\n\t\t\t$[0].end(),\n\t\t\t$[1].end(),\n\t\t\t$[2].end(),\n\t\t\t$[3].end(),\n\t\t\t$[4].end()\n\t\t,true));\n\t};\n});\n\nImba.mount((_1(App)).end());\n\n\n//# sourceURL=webpack:///./src/index.imba?");
    /***/
  },

  /***/
  "./src/listen.imba":
  /*!*************************!*\
    !*** ./src/listen.imba ***!
    \*************************/

  /*! no static exports found */

  /***/
  function srcListenImba(module, exports, __webpack_require__) {
    eval("function iter$(a){ return a ? (a.toArray ? a.toArray() : a) : []; };\nvar Imba = __webpack_require__(/*! imba */ \"./node_modules/imba/imba.imba\"), _1 = Imba.createElement;\nvar Listen = Imba.defineTag('Listen', function(tag){\n\t\n\ttag.prototype.pauseAllAudio = function (){\n\t\tlet res = [];\n\t\tfor (let i = 0, items = iter$(document.querySelectorAll('audio')), len = items.length; i < len; i++) {\n\t\t\tres.push(items[i].pause());\n\t\t};\n\t\treturn res;\n\t};\n\t\n\ttag.prototype.toggleAudio = function (audio){\n\t\tif (audio.dom().paused) {\n\t\t\tthis.pauseAllAudio();\n\t\t\treturn this.play(audio.dom());\n\t\t} else {\n\t\t\treturn this.pause(audio.dom());\n\t\t};\n\t};\n\t\n\ttag.prototype.play = function (audio){\n\t\treturn audio.play();\n\t};\n\t\n\ttag.prototype.pause = function (audio){\n\t\treturn audio.pause();\n\t};\n\t\n\ttag.prototype.render = function (){\n\t\tvar $ = this.$, t0, t1, t2, t3;\n\t\treturn this.$open(0).setChildren(\n\t\t\t$[0] || _1('div',$,0,this).flag('ui').flag('vertical').flag('stripe').flag('segment').setId('listen').setContent([\n\t\t\t\t_1('div',$,1,0).flag('ui').flag('container').setContent(\n\t\t\t\t\t$[2] || _1('h3',$,2,1).flag('ui').flag('horizontal').flag('divider').flag('header').setContent([\n\t\t\t\t\t\t$[3] || _1('i',$,3,2).flag('music').flag('icon'),\n\t\t\t\t\t\t\"Listen\"\n\t\t\t\t\t],2)\n\t\t\t\t,2),\n\t\t\t\t\n\t\t\t\t_1('div',$,4,0).flag('ui').flag('container').setContent(\n\t\t\t\t\t$[5] || _1('div',$,5,4).flag('ui').flag('equal').flag('width').flag('stackable').flag('grid').setContent([\n\t\t\t\t\t\t_1('div',$,6,5).flag('column').setContent(\n\t\t\t\t\t\t\tt0 = $[7] || (t0=_1('a',$,7,6)).flag('ui').flag('massive').flag('fluid').flag('animated').flag('fade').flag('gray').flag('music').flag('button').setContent([\n\t\t\t\t\t\t\t\tthis._autumn = this._autumn||_1('audio',t0).flag('autumn').setContent(\n\t\t\t\t\t\t\t\t\t$[8] || _1('source',$,8,this._autumn).setSrc('autumn.mp3')\n\t\t\t\t\t\t\t\t,2),\n\t\t\t\t\t\t\t\t_1('div',$,9,t0).flag('hidden').flag('content').setContent(\n\t\t\t\t\t\t\t\t\t$[10] || _1('i',$,10,9).flag('play').flag('icon')\n\t\t\t\t\t\t\t\t,2),\n\t\t\t\t\t\t\t\t_1('div',$,11,t0).flag('visible').flag('content').setContent([\n\t\t\t\t\t\t\t\t\t$[12] || _1('i',$,12,11).flag('play').flag('icon'),\n\t\t\t\t\t\t\t\t\t\"Autumn\"\n\t\t\t\t\t\t\t\t],2)\n\t\t\t\t\t\t\t],2)\n\t\t\t\t\t\t,2),\n\t\t\t\t\t\t_1('div',$,13,5).flag('column').setContent(\n\t\t\t\t\t\t\tt1 = $[14] || (t1=_1('a',$,14,13)).flag('ui').flag('massive').flag('fluid').flag('animated').flag('fade').flag('gray').flag('music').flag('button').setContent([\n\t\t\t\t\t\t\t\tthis._bouree = this._bouree||_1('audio',t1).flag('bouree').setContent(\n\t\t\t\t\t\t\t\t\t$[15] || _1('source',$,15,this._bouree).setSrc('bouree.mp3')\n\t\t\t\t\t\t\t\t,2),\n\t\t\t\t\t\t\t\t_1('div',$,16,t1).flag('hidden').flag('content').setContent(\n\t\t\t\t\t\t\t\t\t$[17] || _1('i',$,17,16).flag('play').flag('icon')\n\t\t\t\t\t\t\t\t,2),\n\t\t\t\t\t\t\t\t_1('div',$,18,t1).flag('visible').flag('content').setContent([\n\t\t\t\t\t\t\t\t\t$[19] || _1('i',$,19,18).flag('play').flag('icon'),\n\t\t\t\t\t\t\t\t\t\"Bouree\"\n\t\t\t\t\t\t\t\t],2)\n\t\t\t\t\t\t\t],2)\n\t\t\t\t\t\t,2),\n\t\t\t\t\t\t_1('div',$,20,5).flag('column').setContent(\n\t\t\t\t\t\t\tt2 = $[21] || (t2=_1('a',$,21,20)).flag('ui').flag('massive').flag('fluid').flag('animated').flag('fade').flag('gray').flag('music').flag('button').setContent([\n\t\t\t\t\t\t\t\tthis._canon = this._canon||_1('audio',t2).flag('canon').setContent(\n\t\t\t\t\t\t\t\t\t$[22] || _1('source',$,22,this._canon).setSrc('canon.mp3')\n\t\t\t\t\t\t\t\t,2),\n\t\t\t\t\t\t\t\t_1('div',$,23,t2).flag('hidden').flag('content').setContent(\n\t\t\t\t\t\t\t\t\t$[24] || _1('i',$,24,23).flag('play').flag('icon')\n\t\t\t\t\t\t\t\t,2),\n\t\t\t\t\t\t\t\t_1('div',$,25,t2).flag('visible').flag('content').setContent([\n\t\t\t\t\t\t\t\t\t$[26] || _1('i',$,26,25).flag('play').flag('icon'),\n\t\t\t\t\t\t\t\t\t\"Canon\"\n\t\t\t\t\t\t\t\t],2)\n\t\t\t\t\t\t\t],2)\n\t\t\t\t\t\t,2),\n\t\t\t\t\t\t_1('div',$,27,5).flag('column').setContent(\n\t\t\t\t\t\t\tt3 = $[28] || (t3=_1('a',$,28,27)).flag('ui').flag('massive').flag('fluid').flag('animated').flag('fade').flag('gray').flag('music').flag('button').setContent([\n\t\t\t\t\t\t\t\tthis._frivolity = this._frivolity||_1('audio',t3).flag('frivolity').setContent(\n\t\t\t\t\t\t\t\t\t$[29] || _1('source',$,29,this._frivolity).setSrc('frivolity.mp3')\n\t\t\t\t\t\t\t\t,2),\n\t\t\t\t\t\t\t\t_1('div',$,30,t3).flag('hidden').flag('content').setContent(\n\t\t\t\t\t\t\t\t\t$[31] || _1('i',$,31,30).flag('play').flag('icon')\n\t\t\t\t\t\t\t\t,2),\n\t\t\t\t\t\t\t\t_1('div',$,32,t3).flag('visible').flag('content').setContent([\n\t\t\t\t\t\t\t\t\t$[33] || _1('i',$,33,32).flag('play').flag('icon'),\n\t\t\t\t\t\t\t\t\t\"Frivolity\"\n\t\t\t\t\t\t\t\t],2)\n\t\t\t\t\t\t\t],2)\n\t\t\t\t\t\t,2)\n\t\t\t\t\t],2)\n\t\t\t\t,2)\n\t\t\t],2)\n\t\t,2).synced((\n\t\t\t$[7].on$(0,['tap','prevent',['toggleAudio',this._autumn]],this).end((\n\t\t\t\t$[8].end()\n\t\t\t,true)),\n\t\t\t$[14].on$(0,['click','prevent',['toggleAudio',this._bouree]],this).end((\n\t\t\t\t$[15].end()\n\t\t\t,true)),\n\t\t\t$[21].on$(0,['click','prevent',['toggleAudio',this._canon]],this).end((\n\t\t\t\t$[22].end()\n\t\t\t,true)),\n\t\t\t$[28].on$(0,['click','prevent',['toggleAudio',this._frivolity]],this).end((\n\t\t\t\t$[29].end()\n\t\t\t,true))\n\t\t,true));\n\t};\n})\nexports.Listen = Listen;\n\n\n//# sourceURL=webpack:///./src/listen.imba?");
    /***/
  },

  /***/
  "./src/masthead.imba":
  /*!***************************!*\
    !*** ./src/masthead.imba ***!
    \***************************/

  /*! no static exports found */

  /***/
  function srcMastheadImba(module, exports, __webpack_require__) {
    eval("var Imba = __webpack_require__(/*! imba */ \"./node_modules/imba/imba.imba\"), _1 = Imba.createElement;\nvar Masthead = Imba.defineTag('Masthead', function(tag){\n\t\n\ttag.prototype.render = function (){\n\t\tvar $ = this.$;\n\t\treturn this.$open(0).setChildren($.$ = $.$ || [\n\t\t\t_1('div',$,0,this).flag('ui').flag('vertical').flag('masthead').flag('center').flag('aligned').flag('segment').setId('home').setContent([\n\t\t\t\t_1('div',$,1,0).flag('ui').flag('container').setContent(\n\t\t\t\t\t$[2] || _1('div',$,2,1).flag('ui').flag('large').flag('secondary').flag('inverted').flag('pointing').flag('menu').setContent([\n\t\t\t\t\t\t_1('a',$,3,2).flag('item').setHref('#home').setText(\"home\"),\n\t\t\t\t\t\t_1('a',$,4,2).flag('item').setHref('#listen').setText(\"listen\"),\n\t\t\t\t\t\t_1('a',$,5,2).flag('item').setHref('#prices').setText(\"prices\"),\n\t\t\t\t\t\t_1('a',$,6,2).flag('item').setHref('#footer').setText(\"about\"),\n\t\t\t\t\t\t_1('div',$,7,2).flag('right').flag('item').setContent(\n\t\t\t\t\t\t\t$[8] || _1('a',$,8,7).flag('ui').flag('inverted').flag('button').setHref('#booking').setText(\"contact\")\n\t\t\t\t\t\t,2)\n\t\t\t\t\t],2)\n\t\t\t\t,2),\n\t\t\t\t_1('div',$,9,0).flag('ui').flag('text').flag('container').setContent([\n\t\t\t\t\t_1('h1',$,10,9).flag('ui').flag('inverted').flag('header').setText(\"Flute & Violin\"),\n\t\t\t\t\t_1('p',$,11,9).flag('tagline').setText(\"by leah clark & ellen chappell\")\n\t\t\t\t],2)\n\t\t\t],2),\n\t\t\t_1('div',$,12,this).flag('ui').flag('vertical').flag('center').flag('aligned').flag('segment').flag('callout').setContent(\n\t\t\t\t$[13] || _1('p',$,13,12).setText(\"Complement your occasion with the mellifluous strains of flute & violin.\")\n\t\t\t,2)\n\t\t],2).synced((\n\t\t\t$[3].end(),\n\t\t\t$[4].end(),\n\t\t\t$[5].end(),\n\t\t\t$[6].end(),\n\t\t\t$[8].end()\n\t\t,true));\n\t};\n})\nexports.Masthead = Masthead;\n\n\n//# sourceURL=webpack:///./src/masthead.imba?");
    /***/
  },

  /***/
  "./src/prices.imba":
  /*!*************************!*\
    !*** ./src/prices.imba ***!
    \*************************/

  /*! no static exports found */

  /***/
  function srcPricesImba(module, exports, __webpack_require__) {
    eval("var Imba = __webpack_require__(/*! imba */ \"./node_modules/imba/imba.imba\"), _1 = Imba.createElement;\nvar Prices = Imba.defineTag('Prices', function(tag){\n\t\n\ttag.prototype.render = function (){\n\t\tvar $ = this.$;\n\t\treturn this.$open(0).setChildren(\n\t\t\t$[0] || _1('div',$,0,this).flag('ui').flag('vertical').flag('stripe').flag('segement').setId('prices').setContent([\n\t\t\t\t_1('div',$,1,0).flag('ui').flag('container').setContent(\n\t\t\t\t\t$[2] || _1('h3',$,2,1).flag('ui').flag('horizontal').flag('divider').flag('header').setContent([\n\t\t\t\t\t\t$[3] || _1('i',$,3,2).flag('dollar').flag('icon'),\n\t\t\t\t\t\t\"Prices\"\n\t\t\t\t\t],2)\n\t\t\t\t,2),\n\t\t\t\t\n\t\t\t\t_1('div',$,4,0).flag('ui').flag('container').setContent(\n\t\t\t\t\t$[5] || _1('div',$,5,4).flag('ui').flag('equal').flag('width').flag('stackable').flag('grid').setContent([\n\t\t\t\t\t\t_1('div',$,6,5).flag('column').setContent(\n\t\t\t\t\t\t\t$[7] || _1('table',$,7,6).flag('ui').flag('blue').flag('selectable').flag('table').setContent([\n\t\t\t\t\t\t\t\t_1('thead',$,8,7).setContent(\n\t\t\t\t\t\t\t\t\t$[9] || _1('tr',$,9,8).flag('center').flag('aligned').setContent(\n\t\t\t\t\t\t\t\t\t\t$[10] || _1('th',$,10,9).setColspan('2').setContent(\n\t\t\t\t\t\t\t\t\t\t\t$[11] || _1('h3',$,11,10).setText(\"Wedding\")\n\t\t\t\t\t\t\t\t\t\t,2)\n\t\t\t\t\t\t\t\t\t,2)\n\t\t\t\t\t\t\t\t,2),\n\t\t\t\t\t\t\t\t_1('tbody',$,12,7).setContent([\n\t\t\t\t\t\t\t\t\t_1('tr',$,13,12).setContent([\n\t\t\t\t\t\t\t\t\t\t_1('td',$,14,13).flag('center').flag('aligned').setContent(\n\t\t\t\t\t\t\t\t\t\t\t$[15] || _1('h4',$,15,14).setContent([\"Prelude\",$[16] || _1('small',$,16,15).setText(\"30 minutes of pre-wedding music\")],2)\n\t\t\t\t\t\t\t\t\t\t,2),\n\t\t\t\t\t\t\t\t\t\t_1('td',$,17,13).flag('center').flag('aligned').setContent(\n\t\t\t\t\t\t\t\t\t\t\t$[18] || _1('div',$,18,17).flag('ui').flag('tiny').flag('blue').flag('statistic').setContent(\n\t\t\t\t\t\t\t\t\t\t\t\t$[19] || _1('div',$,19,18).flag('value').setText(\"300\")\n\t\t\t\t\t\t\t\t\t\t\t,2)\n\t\t\t\t\t\t\t\t\t\t,2)\n\t\t\t\t\t\t\t\t\t],2),\n\t\t\t\t\t\t\t\t\t_1('tr',$,20,12).setContent([\n\t\t\t\t\t\t\t\t\t\t_1('td',$,21,20).flag('center').flag('aligned').setContent(\n\t\t\t\t\t\t\t\t\t\t\t$[22] || _1('h4',$,22,21).setContent([\"Marches\",$[23] || _1('small',$,23,22).setText(\"processional and/or recessional\")],2)\n\t\t\t\t\t\t\t\t\t\t,2),\n\t\t\t\t\t\t\t\t\t\t_1('td',$,24,20).flag('center').flag('aligned').setContent(\n\t\t\t\t\t\t\t\t\t\t\t$[25] || _1('div',$,25,24).flag('ui').flag('tiny').flag('blue').flag('statistic').setContent(\n\t\t\t\t\t\t\t\t\t\t\t\t$[26] || _1('div',$,26,25).flag('value').setText(\"300\")\n\t\t\t\t\t\t\t\t\t\t\t,2)\n\t\t\t\t\t\t\t\t\t\t,2)\n\t\t\t\t\t\t\t\t\t],2),\n\t\t\t\t\t\t\t\t\t_1('tr',$,27,12).setContent([\n\t\t\t\t\t\t\t\t\t\t_1('td',$,28,27).flag('center').flag('aligned').setContent(\n\t\t\t\t\t\t\t\t\t\t\t$[29] || _1('h4',$,29,28).setContent([\"Ceremony\",$[30] || _1('small',$,30,29).setText(\"up to three pieces\")],2)\n\t\t\t\t\t\t\t\t\t\t,2),\n\t\t\t\t\t\t\t\t\t\t_1('td',$,31,27).flag('center').flag('aligned').setContent(\n\t\t\t\t\t\t\t\t\t\t\t$[32] || _1('div',$,32,31).flag('ui').flag('tiny').flag('blue').flag('statistic').setContent(\n\t\t\t\t\t\t\t\t\t\t\t\t$[33] || _1('div',$,33,32).flag('value').setText(\"300\")\n\t\t\t\t\t\t\t\t\t\t\t,2)\n\t\t\t\t\t\t\t\t\t\t,2)\n\t\t\t\t\t\t\t\t\t],2),\n\t\t\t\t\t\t\t\t\t_1('tr',$,34,12).setContent([\n\t\t\t\t\t\t\t\t\t\t_1('td',$,35,34).flag('center').flag('aligned').setContent(\n\t\t\t\t\t\t\t\t\t\t\t$[36] || _1('h4',$,36,35).setText(\"Prelude & Marches\")\n\t\t\t\t\t\t\t\t\t\t,2),\n\t\t\t\t\t\t\t\t\t\t_1('td',$,37,34).flag('center').flag('aligned').setContent(\n\t\t\t\t\t\t\t\t\t\t\t$[38] || _1('div',$,38,37).flag('ui').flag('tiny').flag('blue').flag('statistic').setContent(\n\t\t\t\t\t\t\t\t\t\t\t\t$[39] || _1('div',$,39,38).flag('value').setText(\"400\")\n\t\t\t\t\t\t\t\t\t\t\t,2)\n\t\t\t\t\t\t\t\t\t\t,2)\n\t\t\t\t\t\t\t\t\t],2),\n\t\t\t\t\t\t\t\t\t_1('tr',$,40,12).setContent([\n\t\t\t\t\t\t\t\t\t\t_1('td',$,41,40).flag('center').flag('aligned').setContent(\n\t\t\t\t\t\t\t\t\t\t\t$[42] || _1('h4',$,42,41).setText(\"Prelude & Ceremony\")\n\t\t\t\t\t\t\t\t\t\t,2),\n\t\t\t\t\t\t\t\t\t\t_1('td',$,43,40).flag('center').flag('aligned').setContent(\n\t\t\t\t\t\t\t\t\t\t\t$[44] || _1('div',$,44,43).flag('ui').flag('tiny').flag('blue').flag('statistic').setContent(\n\t\t\t\t\t\t\t\t\t\t\t\t$[45] || _1('div',$,45,44).flag('value').setText(\"400\")\n\t\t\t\t\t\t\t\t\t\t\t,2)\n\t\t\t\t\t\t\t\t\t\t,2)\n\t\t\t\t\t\t\t\t\t],2),\n\t\t\t\t\t\t\t\t\t_1('tr',$,46,12).setContent([\n\t\t\t\t\t\t\t\t\t\t_1('td',$,47,46).flag('center').flag('aligned').setContent(\n\t\t\t\t\t\t\t\t\t\t\t$[48] || _1('h4',$,48,47).setText(\"Marches & Ceremony\")\n\t\t\t\t\t\t\t\t\t\t,2),\n\t\t\t\t\t\t\t\t\t\t_1('td',$,49,46).flag('center').flag('aligned').setContent(\n\t\t\t\t\t\t\t\t\t\t\t$[50] || _1('div',$,50,49).flag('ui').flag('tiny').flag('blue').flag('statistic').setContent(\n\t\t\t\t\t\t\t\t\t\t\t\t$[51] || _1('div',$,51,50).flag('value').setText(\"400\")\n\t\t\t\t\t\t\t\t\t\t\t,2)\n\t\t\t\t\t\t\t\t\t\t,2)\n\t\t\t\t\t\t\t\t\t],2),\n\t\t\t\t\t\t\t\t\t_1('tr',$,52,12).setContent([\n\t\t\t\t\t\t\t\t\t\t_1('td',$,53,52).flag('center').flag('aligned').setContent(\n\t\t\t\t\t\t\t\t\t\t\t$[54] || _1('h4',$,54,53).setText(\"Prelude, Marches & Ceremony\")\n\t\t\t\t\t\t\t\t\t\t,2),\n\t\t\t\t\t\t\t\t\t\t_1('td',$,55,52).flag('center').flag('aligned').setContent(\n\t\t\t\t\t\t\t\t\t\t\t$[56] || _1('div',$,56,55).flag('ui').flag('tiny').flag('blue').flag('statistic').setContent(\n\t\t\t\t\t\t\t\t\t\t\t\t$[57] || _1('div',$,57,56).flag('value').setText(\"450\")\n\t\t\t\t\t\t\t\t\t\t\t,2)\n\t\t\t\t\t\t\t\t\t\t,2)\n\t\t\t\t\t\t\t\t\t],2)\n\t\t\t\t\t\t\t\t],2)\n\t\t\t\t\t\t\t],2)\n\t\t\t\t\t\t,2),\n\t\t\t\t\t\t\n\t\t\t\t\t\t_1('div',$,58,5).flag('column').setContent(\n\t\t\t\t\t\t\t$[59] || _1('table',$,59,58).flag('ui').flag('blue').flag('selectable').flag('table').setContent([\n\t\t\t\t\t\t\t\t_1('thead',$,60,59).setContent(\n\t\t\t\t\t\t\t\t\t$[61] || _1('tr',$,61,60).flag('center').flag('aligned').setContent(\n\t\t\t\t\t\t\t\t\t\t$[62] || _1('th',$,62,61).setColspan('2').setContent(\n\t\t\t\t\t\t\t\t\t\t\t$[63] || _1('h3',$,63,62).setText(\"Reception\")\n\t\t\t\t\t\t\t\t\t\t,2)\n\t\t\t\t\t\t\t\t\t,2)\n\t\t\t\t\t\t\t\t,2),\n\t\t\t\t\t\t\t\t_1('tbody',$,64,59).setContent([\n\t\t\t\t\t\t\t\t\t_1('tr',$,65,64).setContent([\n\t\t\t\t\t\t\t\t\t\t_1('td',$,66,65).flag('center').flag('aligned').setContent(\n\t\t\t\t\t\t\t\t\t\t\t$[67] || _1('h4',$,67,66).setText(\"One hour\")\n\t\t\t\t\t\t\t\t\t\t,2),\n\t\t\t\t\t\t\t\t\t\t_1('td',$,68,65).flag('center').flag('aligned').setContent(\n\t\t\t\t\t\t\t\t\t\t\t$[69] || _1('div',$,69,68).flag('ui').flag('tiny').flag('blue').flag('statistic').setContent(\n\t\t\t\t\t\t\t\t\t\t\t\t$[70] || _1('div',$,70,69).flag('value').setText(\"300\")\n\t\t\t\t\t\t\t\t\t\t\t,2)\n\t\t\t\t\t\t\t\t\t\t,2)\n\t\t\t\t\t\t\t\t\t],2),\n\t\t\t\t\t\t\t\t\t_1('tr',$,71,64).setContent([\n\t\t\t\t\t\t\t\t\t\t_1('td',$,72,71).flag('center').flag('aligned').setContent(\n\t\t\t\t\t\t\t\t\t\t\t$[73] || _1('h4',$,73,72).setText(\"Two hours\")\n\t\t\t\t\t\t\t\t\t\t,2),\n\t\t\t\t\t\t\t\t\t\t_1('td',$,74,71).flag('center').flag('aligned').setContent(\n\t\t\t\t\t\t\t\t\t\t\t$[75] || _1('div',$,75,74).flag('ui').flag('tiny').flag('blue').flag('statistic').setContent(\n\t\t\t\t\t\t\t\t\t\t\t\t$[76] || _1('div',$,76,75).flag('value').setText(\"500\")\n\t\t\t\t\t\t\t\t\t\t\t,2)\n\t\t\t\t\t\t\t\t\t\t,2)\n\t\t\t\t\t\t\t\t\t],2),\n\t\t\t\t\t\t\t\t\t_1('tr',$,77,64).setContent([\n\t\t\t\t\t\t\t\t\t\t_1('td',$,78,77).flag('center').flag('aligned').setContent(\n\t\t\t\t\t\t\t\t\t\t\t$[79] || _1('h4',$,79,78).setText(\"Three hours\")\n\t\t\t\t\t\t\t\t\t\t,2),\n\t\t\t\t\t\t\t\t\t\t_1('td',$,80,77).flag('center').flag('aligned').setContent(\n\t\t\t\t\t\t\t\t\t\t\t$[81] || _1('div',$,81,80).flag('ui').flag('tiny').flag('blue').flag('statistic').setContent(\n\t\t\t\t\t\t\t\t\t\t\t\t$[82] || _1('div',$,82,81).flag('value').setText(\"625\")\n\t\t\t\t\t\t\t\t\t\t\t,2)\n\t\t\t\t\t\t\t\t\t\t,2)\n\t\t\t\t\t\t\t\t\t],2),\n\t\t\t\t\t\t\t\t\t_1('tr',$,83,64).setContent([\n\t\t\t\t\t\t\t\t\t\t_1('td',$,84,83).flag('center').flag('aligned').setContent(\n\t\t\t\t\t\t\t\t\t\t\t$[85] || _1('h4',$,85,84).setText(\"Each additional hour\")\n\t\t\t\t\t\t\t\t\t\t,2),\n\t\t\t\t\t\t\t\t\t\t_1('td',$,86,83).flag('center').flag('aligned').setContent(\n\t\t\t\t\t\t\t\t\t\t\t$[87] || _1('div',$,87,86).flag('ui').flag('tiny').flag('blue').flag('statistic').setContent(\n\t\t\t\t\t\t\t\t\t\t\t\t$[88] || _1('div',$,88,87).flag('value').setText(\"150\")\n\t\t\t\t\t\t\t\t\t\t\t,2)\n\t\t\t\t\t\t\t\t\t\t,2)\n\t\t\t\t\t\t\t\t\t],2)\n\t\t\t\t\t\t\t\t],2)\n\t\t\t\t\t\t\t],2)\n\t\t\t\t\t\t,2),\n\t\t\t\t\t\t\n\t\t\t\t\t\t_1('div',$,89,5).flag('column').setContent(\n\t\t\t\t\t\t\t$[90] || _1('table',$,90,89).flag('ui').flag('blue').flag('selectable').flag('table').setContent([\n\t\t\t\t\t\t\t\t_1('thead',$,91,90).setContent(\n\t\t\t\t\t\t\t\t\t$[92] || _1('tr',$,92,91).flag('center').flag('aligned').setContent(\n\t\t\t\t\t\t\t\t\t\t$[93] || _1('th',$,93,92).setColspan('2').setContent(\n\t\t\t\t\t\t\t\t\t\t\t$[94] || _1('h3',$,94,93).setText(\"Wedding & Reception\")\n\t\t\t\t\t\t\t\t\t\t,2)\n\t\t\t\t\t\t\t\t\t,2)\n\t\t\t\t\t\t\t\t,2),\n\t\t\t\t\t\t\t\t_1('tbody',$,95,90).setContent([\n\t\t\t\t\t\t\t\t\t_1('tr',$,96,95).setContent([\n\t\t\t\t\t\t\t\t\t\t_1('td',$,97,96).flag('center').flag('aligned').setContent(\n\t\t\t\t\t\t\t\t\t\t\t$[98] || _1('h4',$,98,97).setText(\"Wedding service and one hour\")\n\t\t\t\t\t\t\t\t\t\t,2),\n\t\t\t\t\t\t\t\t\t\t_1('td',$,99,96).flag('center').flag('aligned').setContent(\n\t\t\t\t\t\t\t\t\t\t\t$[100] || _1('div',$,100,99).flag('ui').flag('tiny').flag('blue').flag('statistic').setContent(\n\t\t\t\t\t\t\t\t\t\t\t\t$[101] || _1('div',$,101,100).flag('value').setText(\"600\")\n\t\t\t\t\t\t\t\t\t\t\t,2)\n\t\t\t\t\t\t\t\t\t\t,2)\n\t\t\t\t\t\t\t\t\t],2),\n\t\t\t\t\t\t\t\t\t_1('tr',$,102,95).setContent([\n\t\t\t\t\t\t\t\t\t\t_1('td',$,103,102).flag('center').flag('aligned').setContent(\n\t\t\t\t\t\t\t\t\t\t\t$[104] || _1('h4',$,104,103).setText(\"Wedding service and two hours\")\n\t\t\t\t\t\t\t\t\t\t,2),\n\t\t\t\t\t\t\t\t\t\t_1('td',$,105,102).flag('center').flag('aligned').setContent(\n\t\t\t\t\t\t\t\t\t\t\t$[106] || _1('div',$,106,105).flag('ui').flag('tiny').flag('blue').flag('statistic').setContent(\n\t\t\t\t\t\t\t\t\t\t\t\t$[107] || _1('div',$,107,106).flag('value').setText(\"750\")\n\t\t\t\t\t\t\t\t\t\t\t,2)\n\t\t\t\t\t\t\t\t\t\t,2)\n\t\t\t\t\t\t\t\t\t],2),\n\t\t\t\t\t\t\t\t\t_1('tr',$,108,95).setContent([\n\t\t\t\t\t\t\t\t\t\t_1('td',$,109,108).flag('center').flag('aligned').setContent(\n\t\t\t\t\t\t\t\t\t\t\t$[110] || _1('h4',$,110,109).setText(\"Wedding service and three hours\")\n\t\t\t\t\t\t\t\t\t\t,2),\n\t\t\t\t\t\t\t\t\t\t_1('td',$,111,108).flag('center').flag('aligned').setContent(\n\t\t\t\t\t\t\t\t\t\t\t$[112] || _1('div',$,112,111).flag('ui').flag('tiny').flag('blue').flag('statistic').setContent(\n\t\t\t\t\t\t\t\t\t\t\t\t$[113] || _1('div',$,113,112).flag('value').setText(\"850\")\n\t\t\t\t\t\t\t\t\t\t\t,2)\n\t\t\t\t\t\t\t\t\t\t,2)\n\t\t\t\t\t\t\t\t\t],2)\n\t\t\t\t\t\t\t\t],2)\n\t\t\t\t\t\t\t],2)\n\t\t\t\t\t\t,2)\n\t\t\t\t\t],2)\n\t\t\t\t,2)\n\t\t\t],2)\n\t\t,2).synced((\n\t\t\t$[10].end(),\n\t\t\t$[62].end(),\n\t\t\t$[93].end()\n\t\t,true));\n\t};\n})\nexports.Prices = Prices;\n\n\n//# sourceURL=webpack:///./src/prices.imba?");
    /***/
  },

  /***/
  0:
  /*!**************************************************************************************************************************!*\
    !*** multi ./src/about.imba ./src/booking.imba ./src/index.imba ./src/listen.imba ./src/masthead.imba ./src/prices.imba ***!
    \**************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    eval("__webpack_require__(/*! /Users/peter.clark/Projects/parcel-starter/src/about.imba */\"./src/about.imba\");\n__webpack_require__(/*! /Users/peter.clark/Projects/parcel-starter/src/booking.imba */\"./src/booking.imba\");\n__webpack_require__(/*! /Users/peter.clark/Projects/parcel-starter/src/index.imba */\"./src/index.imba\");\n__webpack_require__(/*! /Users/peter.clark/Projects/parcel-starter/src/listen.imba */\"./src/listen.imba\");\n__webpack_require__(/*! /Users/peter.clark/Projects/parcel-starter/src/masthead.imba */\"./src/masthead.imba\");\nmodule.exports = __webpack_require__(/*! /Users/peter.clark/Projects/parcel-starter/src/prices.imba */\"./src/prices.imba\");\n\n\n//# sourceURL=webpack:///multi_./src/about.imba_./src/booking.imba_./src/index.imba_./src/listen.imba_./src/masthead.imba_./src/prices.imba?");
    /***/
  }
  /******/

});
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55003" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map