/*! store2 - v2.12.0 - 2020-08-12
* Copyright (c) 2020 Nathan Bubna; Licensed (MIT OR GPL-3.0) */

!function(a,b){var c={version:"2.12.0",areas:{},apis:{},inherit:function(a,b){for(var c in a)b.hasOwnProperty(c)||Object.defineProperty(b,c,Object.getOwnPropertyDescriptor(a,c));return b},stringify:function(a){return void 0===a||"function"==typeof a?a+"":JSON.stringify(a)},parse:function(a,b){try{return JSON.parse(a,b||c.revive)}catch(b){return a}},fn:function(a,b){c.storeAPI[a]=b;for(var d in c.apis)c.apis[d][a]=b},get:function(a,b){return a.getItem(b)},set:function(a,b,c){a.setItem(b,c)},remove:function(a,b){a.removeItem(b)},key:function(a,b){return a.key(b)},length:function(a){return a.length},clear:function(a){a.clear()},Store:function(a,b,d){var e=c.inherit(c.storeAPI,function(a,b,c){return 0===arguments.length?e.getAll():"function"==typeof b?e.transact(a,b,c):void 0!==b?e.set(a,b,c):"string"==typeof a||"number"==typeof a?e.get(a):"function"==typeof a?e.each(a):a?e.setAll(a,b):e.clear()});e._id=a;try{b.setItem("__store2_test","ok"),e._area=b,b.removeItem("__store2_test")}catch(a){e._area=c.storage("fake")}return e._ns=d||"",c.areas[a]||(c.areas[a]=e._area),c.apis[e._ns+e._id]||(c.apis[e._ns+e._id]=e),e},storeAPI:{area:function(a,b){var d=this[a];return d&&d.area||(d=c.Store(a,b,this._ns),this[a]||(this[a]=d)),d},namespace:function(a,b){if(!a)return this._ns?this._ns.substring(0,this._ns.length-1):"";var d=a,e=this[d];if(!(e&&e.namespace||(e=c.Store(this._id,this._area,this._ns+d+"."),this[d]||(this[d]=e),b)))for(var f in c.areas)e.area(f,c.areas[f]);return e},isFake:function(){return"fake"===this._area.name},toString:function(){return"store"+(this._ns?"."+this.namespace():"")+"["+this._id+"]"},has:function(a){return this._area.has?this._area.has(this._in(a)):!!(this._in(a)in this._area)},size:function(){return this.keys().length},each:function(a,b){for(var d=0,e=c.length(this._area);d<e;d++){var f=this._out(c.key(this._area,d));if(void 0!==f&&!1===a.call(this,f,this.get(f),b))break;e>c.length(this._area)&&(e--,d--)}return b||this},keys:function(a){return this.each(function(a,b,c){c.push(a)},a||[])},get:function(a,b){var d,e=c.get(this._area,this._in(a));return"function"==typeof b&&(d=b,b=null),null!==e?c.parse(e,d):null!=b?b:e},getAll:function(a){return this.each(function(a,b,c){c[a]=b},a||{})},transact:function(a,b,c){var d=this.get(a,c),e=b(d);return this.set(a,void 0===e?d:e),this},set:function(a,b,d){var e=this.get(a);return null!=e&&!1===d?b:c.set(this._area,this._in(a),c.stringify(b),d)||e},setAll:function(a,b){var c,d;for(var e in a)d=a[e],this.set(e,d,b)!==d&&(c=!0);return c},add:function(a,b){var d=this.get(a);if(d instanceof Array)b=d.concat(b);else if(null!==d){var e=typeof d;if(e===typeof b&&"object"===e){for(var f in b)d[f]=b[f];b=d}else b=d+b}return c.set(this._area,this._in(a),c.stringify(b)),b},remove:function(a,b){var d=this.get(a,b);return c.remove(this._area,this._in(a)),d},clear:function(){return this._ns?this.each(function(a){c.remove(this._area,this._in(a))},1):c.clear(this._area),this},clearAll:function(){var a=this._area;for(var b in c.areas)c.areas.hasOwnProperty(b)&&(this._area=c.areas[b],this.clear());return this._area=a,this},_in:function(a){return"string"!=typeof a&&(a=c.stringify(a)),this._ns?this._ns+a:a},_out:function(a){return this._ns?a&&0===a.indexOf(this._ns)?a.substring(this._ns.length):void 0:a}},storage:function(a){return c.inherit(c.storageAPI,{items:{},name:a})},storageAPI:{length:0,has:function(a){return this.items.hasOwnProperty(a)},key:function(a){var b=0;for(var c in this.items)if(this.has(c)&&a===b++)return c},setItem:function(a,b){this.has(a)||this.length++,this.items[a]=b},removeItem:function(a){this.has(a)&&(delete this.items[a],this.length--)},getItem:function(a){return this.has(a)?this.items[a]:null},clear:function(){for(var a in this.items)this.removeItem(a)}}},d=c.Store("local",function(){try{return localStorage}catch(a){}}());d.local=d,d._=c,d.area("session",function(){try{return sessionStorage}catch(a){}}()),d.area("page",c.storage("page")),"function"==typeof b&&void 0!==b.amd?b("store2",[],function(){return d}):"undefined"!=typeof module&&module.exports?module.exports=d:(a.store&&(c.conflict=a.store),a.store=d)}(this,this&&this.define);