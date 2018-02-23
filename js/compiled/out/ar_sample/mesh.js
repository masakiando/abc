// Compiled by ClojureScript 1.9.946 {}
goog.provide('ar_sample.mesh');
goog.require('cljs.core');
goog.require('integrant.core');
cljs.core._add_method.call(null,integrant.core.init_key,new cljs.core.Keyword(null,"mesh","mesh",456320595),(function (_,___$1){
var geo = (new THREE.CubeGeometry((1),0.2,(1)));
var opts = ({"transparent": true, "opacity": 0.5, "side": THREE.DoubleSide});
var mat = (new THREE.MeshNormalMaterial(opts));
return (new THREE.Mesh(geo,mat));
}));

//# sourceMappingURL=mesh.js.map?rel=1518288631267
