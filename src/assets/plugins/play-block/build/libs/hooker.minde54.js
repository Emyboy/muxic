!function(){function o(r,t){if(null==r||"object"!=typeof r)return r;if(r.constructor!=Object&&r.constructor!=Array)return r;if(r.constructor==Date||r.constructor==RegExp||r.constructor==Function||r.constructor==String||r.constructor==Number||r.constructor==Boolean)return new r.constructor(r);t=t||new r.constructor;for(var n in r)t[n]=void 0===t[n]?o(r[n],null):t[n];return t}var r=this;if(r._hookers=r._hookers||{},void 0===t){var t={};t.trigger=function(t,n){var e=[n],c=r._hookers[t];if(void 0!==c)for(var u=0;u<c.length;u++)e[u]=o(n,{}),n=c[u].callback.apply(c[u]._this,[n,o(e,[])]);return{final:n,previousData:e}},t.register=function(o,n,e){return r._hookers[o]=r._hookers[o]||[],r._hookers[o].push({callback:n,_this:e}),t},"undefined"!=typeof module&&void 0!==module.exports?module.exports=t:"function"==typeof define&&define.amd?define([],function(){return t}):r.hooker=t}}();