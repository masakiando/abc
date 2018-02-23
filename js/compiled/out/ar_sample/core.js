// Compiled by ClojureScript 1.9.946 {}
goog.provide('ar_sample.core');
goog.require('cljs.core');
goog.require('ar_sample.app');
goog.require('goog.events');
goog.require('integrant.core');
cljs.core.enable_console_print_BANG_.call(null);
ar_sample.core.HELVETIKER_FONT_PATH = "data/helvetiker_regular.typeface.json";
ar_sample.core._PLUS_config_PLUS_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"marker","marker",865118313),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"app-state","app-state",-1509963278),new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"light","light",1918998747),new cljs.core.Keyword(null,"fonts","fonts",1683167295),new cljs.core.Keyword(null,"scene","scene",1523800415)],[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"context","context",-830191113),integrant.core.ref.call(null,new cljs.core.Keyword(null,"context","context",-830191113)),new cljs.core.Keyword(null,"clock","clock",-894301127),integrant.core.ref.call(null,new cljs.core.Keyword(null,"clock","clock",-894301127)),new cljs.core.Keyword(null,"mesh","mesh",456320595),integrant.core.ref.call(null,new cljs.core.Keyword(null,"mesh","mesh",456320595))], null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"app-state","app-state",-1509963278),integrant.core.ref.call(null,new cljs.core.Keyword(null,"app-state","app-state",-1509963278)),new cljs.core.Keyword(null,"source","source",-433931539),integrant.core.ref.call(null,new cljs.core.Keyword(null,"source","source",-433931539)),new cljs.core.Keyword(null,"renderer","renderer",336841071),integrant.core.ref.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071)),new cljs.core.Keyword(null,"mesh","mesh",456320595),integrant.core.ref.call(null,new cljs.core.Keyword(null,"mesh","mesh",456320595)),new cljs.core.Keyword(null,"scene","scene",1523800415),integrant.core.ref.call(null,new cljs.core.Keyword(null,"scene","scene",1523800415)),new cljs.core.Keyword(null,"camera","camera",-1190348585),integrant.core.ref.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585)),new cljs.core.Keyword(null,"context","context",-830191113),integrant.core.ref.call(null,new cljs.core.Keyword(null,"context","context",-830191113))], null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),integrant.core.ref.call(null,new cljs.core.Keyword(null,"source","source",-433931539)),new cljs.core.Keyword(null,"camera","camera",-1190348585),integrant.core.ref.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app-state","app-state",-1509963278),integrant.core.ref.call(null,new cljs.core.Keyword(null,"app-state","app-state",-1509963278)),new cljs.core.Keyword(null,"fonts","fonts",1683167295),integrant.core.ref.call(null,new cljs.core.Keyword(null,"fonts","fonts",1683167295))], null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"camera","camera",-1190348585),integrant.core.ref.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585)),new cljs.core.Keyword(null,"light","light",1918998747),integrant.core.ref.call(null,new cljs.core.Keyword(null,"light","light",1918998747)),new cljs.core.Keyword(null,"marker","marker",865118313),integrant.core.ref.call(null,new cljs.core.Keyword(null,"marker","marker",865118313))], null)]);
cljs.core._add_method.call(null,integrant.core.init_key,new cljs.core.Keyword(null,"fonts","fonts",1683167295),(function (_,fonts){
return fonts;
}));
if(typeof ar_sample.core.system !== 'undefined'){
} else {
ar_sample.core.system = cljs.core.atom.call(null,null);
}
ar_sample.core.start = (function ar_sample$core$start(fonts){
var config = cljs.core.assoc.call(null,ar_sample.core._PLUS_config_PLUS_,new cljs.core.Keyword(null,"fonts","fonts",1683167295),fonts);
return cljs.core.reset_BANG_.call(null,ar_sample.core.system,integrant.core.init.call(null,config));
});
ar_sample.core.stop = (function ar_sample$core$stop(system){
return integrant.core.halt_BANG_.call(null,cljs.core.deref.call(null,system));
});
ar_sample.core.init = (function ar_sample$core$init(){
return (new THREE.FontLoader()).load(ar_sample.core.HELVETIKER_FONT_PATH,(function (font){
return ar_sample.core.start.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"helvetiker","helvetiker",1953500540),font], null));
}));
});
goog.events.listen(window,goog.events.EventType.LOAD,ar_sample.core.init);
ar_sample.core.on_js_reload = (function ar_sample$core$on_js_reload(){
cljs.core.print.call(null,"reloading system ... ");

var map__38441_38443 = cljs.core.deref.call(null,ar_sample.core.system);
var map__38441_38444__$1 = ((((!((map__38441_38443 == null)))?((((map__38441_38443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38441_38443.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38441_38443):map__38441_38443);
var fonts_38445 = cljs.core.get.call(null,map__38441_38444__$1,new cljs.core.Keyword(null,"fonts","fonts",1683167295));
ar_sample.core.stop.call(null,ar_sample.core.system);

ar_sample.core.start.call(null,fonts_38445);

return cljs.core.println.call(null,"reloading done.");
});

//# sourceMappingURL=core.js.map?rel=1518288637928
