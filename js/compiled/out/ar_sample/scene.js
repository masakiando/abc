// Compiled by ClojureScript 1.9.946 {}
goog.provide('ar_sample.scene');
goog.require('cljs.core');
goog.require('ar_sample.camera');
goog.require('ar_sample.light');
goog.require('ar_sample.marker');
goog.require('integrant.core');
cljs.core._add_method.call(null,integrant.core.init_key,new cljs.core.Keyword(null,"scene","scene",1523800415),(function (_,opts){
var map__32965 = opts;
var map__32965__$1 = ((((!((map__32965 == null)))?((((map__32965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32965.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32965):map__32965);
var camera = cljs.core.get.call(null,map__32965__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
var light = cljs.core.get.call(null,map__32965__$1,new cljs.core.Keyword(null,"light","light",1918998747));
var marker = cljs.core.get.call(null,map__32965__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
var G__32967 = (new THREE.Scene());
G__32967.add(camera);

G__32967.add(light);

G__32967.add(marker);

return G__32967;
}));

//# sourceMappingURL=scene.js.map?rel=1518288631367
