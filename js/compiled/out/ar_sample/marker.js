// Compiled by ClojureScript 1.9.946 {}
goog.provide('ar_sample.marker');
goog.require('cljs.core');
goog.require('ar_sample.context');
goog.require('ar_sample.clock');
goog.require('ar_sample.mesh');
goog.require('integrant.core');
cljs.core._add_method.call(null,integrant.core.init_key,new cljs.core.Keyword(null,"marker","marker",865118313),(function (_,p__32958){
var map__32959 = p__32958;
var map__32959__$1 = ((((!((map__32959 == null)))?((((map__32959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32959.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32959):map__32959);
var context = cljs.core.get.call(null,map__32959__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var clock = cljs.core.get.call(null,map__32959__$1,new cljs.core.Keyword(null,"clock","clock",-894301127));
var mesh = cljs.core.get.call(null,map__32959__$1,new cljs.core.Keyword(null,"mesh","mesh",456320595));
var marker = (new THREE.Group());
var opts = ({"type": "pattern", "patternUrl": "data/hiro.patt"});
(new THREEx.ArMarkerControls(context,marker,opts));

ar_sample.clock.attach_clock.call(null,clock,marker,((function (marker,opts,map__32959,map__32959__$1,context,clock,mesh){
return (function (c){
c.rotation.x = (- (Math.PI / (2)));

return c.position.set(-0.46,0.2,0.1);
});})(marker,opts,map__32959,map__32959__$1,context,clock,mesh))
);

mesh.position.set((0),0.1,(0));

marker.add(mesh);

return marker;
}));

//# sourceMappingURL=marker.js.map?rel=1518288631312
