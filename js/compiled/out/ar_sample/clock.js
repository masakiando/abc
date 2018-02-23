// Compiled by ClojureScript 1.9.946 {}
goog.provide('ar_sample.clock');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('integrant.core');
ar_sample.clock.make_clock = (function ar_sample$clock$make_clock(time,font){
var opts = ({"font": font, "size": 0.175, "height": 0.05, "curveSegments": (12), "bevelEnabled": false});
var geo = (new THREE.TextGeometry(time,opts));
var mat = (new THREE.MeshNormalMaterial(({"transparent": false, "side": THREE.DoubleSide})));
return (new THREE.Mesh(geo,mat));
});
cljs.core._add_method.call(null,integrant.core.init_key,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (_,p__32945){
var map__32946 = p__32945;
var map__32946__$1 = ((((!((map__32946 == null)))?((((map__32946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32946.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32946):map__32946);
var app_state = cljs.core.get.call(null,map__32946__$1,new cljs.core.Keyword(null,"app-state","app-state",-1509963278));
var fonts = cljs.core.get.call(null,map__32946__$1,new cljs.core.Keyword(null,"fonts","fonts",1683167295));
var new_clock = ((function (map__32946,map__32946__$1,app_state,fonts){
return (function ar_sample$clock$new_clock(){
var now = (new Date());
var time = goog.string.format("%02d:%02d:%02d",now.getHours(),now.getMinutes(),now.getSeconds());
return ar_sample.clock.make_clock.call(null,time,new cljs.core.Keyword(null,"helvetiker","helvetiker",1953500540).cljs$core$IFn$_invoke$arity$1(fonts));
});})(map__32946,map__32946__$1,app_state,fonts))
;
var rec = ((function (map__32946,map__32946__$1,app_state,fonts){
return (function ar_sample$clock$rec(clock,target,on_update){
if(cljs.core.truth_(new cljs.core.Keyword("clock","running?","clock/running?",-407242313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)))){
if(cljs.core.truth_(clock)){
target.remove(clock);
} else {
}

var clock_SINGLEQUOTE_ = new_clock.call(null);
target.add(clock_SINGLEQUOTE_);

on_update.call(null,clock_SINGLEQUOTE_);

return setTimeout(((function (clock_SINGLEQUOTE_,map__32946,map__32946__$1,app_state,fonts){
return (function (){
return ar_sample$clock$rec.call(null,clock_SINGLEQUOTE_,target,on_update);
});})(clock_SINGLEQUOTE_,map__32946,map__32946__$1,app_state,fonts))
,(200));
} else {
return null;
}
});})(map__32946,map__32946__$1,app_state,fonts))
;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clock-fn","clock-fn",1828895298),((function (map__32946,map__32946__$1,app_state,fonts){
return (function (target,on_update){
cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword("clock","running?","clock/running?",-407242313),true);

return rec.call(null,null,target,on_update);
});})(map__32946,map__32946__$1,app_state,fonts))
,new cljs.core.Keyword(null,"app-state","app-state",-1509963278),app_state], null);
}));
cljs.core._add_method.call(null,integrant.core.halt_key_BANG_,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (_,p__32948){
var map__32949 = p__32948;
var map__32949__$1 = ((((!((map__32949 == null)))?((((map__32949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32949.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32949):map__32949);
var app_state = cljs.core.get.call(null,map__32949__$1,new cljs.core.Keyword(null,"app-state","app-state",-1509963278));
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword("clock","running?","clock/running?",-407242313),false);
}));
ar_sample.clock.attach_clock = (function ar_sample$clock$attach_clock(p__32951,target,on_update){
var map__32952 = p__32951;
var map__32952__$1 = ((((!((map__32952 == null)))?((((map__32952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32952.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32952):map__32952);
var clock_fn = cljs.core.get.call(null,map__32952__$1,new cljs.core.Keyword(null,"clock-fn","clock-fn",1828895298));
return clock_fn.call(null,target,on_update);
});

//# sourceMappingURL=clock.js.map?rel=1518288631257
