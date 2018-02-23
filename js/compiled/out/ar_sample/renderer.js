// Compiled by ClojureScript 1.9.946 {}
goog.provide('ar_sample.renderer');
goog.require('cljs.core');
goog.require('integrant.core');
cljs.core._add_method.call(null,integrant.core.init_key,new cljs.core.Keyword(null,"renderer","renderer",336841071),(function (_,___$1){
var opts = ({"antialias": true, "alpha": true});
var renderer = (new THREE.WebGLRenderer(opts));
var G__32929_32930 = renderer;
G__32929_32930.setClearColor((new THREE.Color("black")),(0));


renderer.domElement.style.position = "absolute";

renderer.domElement.style.top = "0px";

renderer.domElement.style.left = "0px";

return renderer;
}));

//# sourceMappingURL=renderer.js.map?rel=1518288631159
