// Compiled by ClojureScript 1.9.946 {}
goog.provide('ar_sample.app');
goog.require('cljs.core');
goog.require('ar_sample.app_state');
goog.require('ar_sample.camera');
goog.require('ar_sample.context');
goog.require('ar_sample.renderer');
goog.require('ar_sample.scene');
goog.require('ar_sample.source');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('integrant.core');
ar_sample.app.setup_renderer = (function ar_sample$app$setup_renderer(renderer){
renderer.setSize((640),(480));

return goog.dom.appendChild(goog.dom.getElement("app"),renderer.domElement);
});
ar_sample.app.resize = (function ar_sample$app$resize(app){
var map__32970 = app;
var map__32970__$1 = ((((!((map__32970 == null)))?((((map__32970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32970.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32970):map__32970);
var source = cljs.core.get.call(null,map__32970__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var context = cljs.core.get.call(null,map__32970__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var renderer = cljs.core.get.call(null,map__32970__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
source.onResizeElement();

source.copyElementSizeTo(renderer.domElement);

if(cljs.core.truth_(context.arController)){
return source.copyElementSizeTo(context.arController.canvas);
} else {
return null;
}
});
ar_sample.app.start = (function ar_sample$app$start(app){
var map__32972 = app;
var map__32972__$1 = ((((!((map__32972 == null)))?((((map__32972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32972.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32972):map__32972);
var context = cljs.core.get.call(null,map__32972__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var renderer = cljs.core.get.call(null,map__32972__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
var source = cljs.core.get.call(null,map__32972__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var render = ((function (map__32972,map__32972__$1,context,renderer,source){
return (function ar_sample$app$start_$_render(){
if(cljs.core.truth_(new cljs.core.Keyword("app","running?","app/running?",-257584314).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"app-state","app-state",-1509963278).cljs$core$IFn$_invoke$arity$1(app))))){
requestAnimationFrame(ar_sample$app$start_$_render);

if(cljs.core.truth_(source.ready)){
context.update(source.domElement);

return renderer.render(new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(app),new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(app));
} else {
return null;
}
} else {
return null;
}
});})(map__32972,map__32972__$1,context,renderer,source))
;
source.init(((function (map__32972,map__32972__$1,context,renderer,source){
return (function (){
return ar_sample.app.resize.call(null,app);
});})(map__32972,map__32972__$1,context,renderer,source))
);

goog.events.listen(window,"resize",((function (map__32972,map__32972__$1,context,renderer,source){
return (function (){
return ar_sample.app.resize.call(null,app);
});})(map__32972,map__32972__$1,context,renderer,source))
);

ar_sample.app.setup_renderer.call(null,renderer);

cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"app-state","app-state",-1509963278).cljs$core$IFn$_invoke$arity$1(app),cljs.core.assoc,new cljs.core.Keyword("app","running?","app/running?",-257584314),true);

return render.call(null);
});
cljs.core._add_method.call(null,integrant.core.init_key,new cljs.core.Keyword(null,"app","app",-560961707),(function (_,opts){
ar_sample.app.start.call(null,opts);

return opts;
}));
cljs.core._add_method.call(null,integrant.core.halt_key_BANG_,new cljs.core.Keyword(null,"app","app",-560961707),(function (_,app){
goog.dom.removeChildren(goog.dom.getElement("app"));

goog.events.removeAll(window,"resize");

return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"app-state","app-state",-1509963278).cljs$core$IFn$_invoke$arity$1(app),cljs.core.assoc,new cljs.core.Keyword("app","running?","app/running?",-257584314),false);
}));

//# sourceMappingURL=app.js.map?rel=1518288631493
