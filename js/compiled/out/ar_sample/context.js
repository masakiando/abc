// Compiled by ClojureScript 1.9.946 {}
goog.provide('ar_sample.context');
goog.require('cljs.core');
goog.require('ar_sample.camera');
goog.require('ar_sample.source');
goog.require('integrant.core');
cljs.core._add_method.call(null,integrant.core.init_key,new cljs.core.Keyword(null,"context","context",-830191113),(function (_,p__32937){
var map__32938 = p__32937;
var map__32938__$1 = ((((!((map__32938 == null)))?((((map__32938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32938.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32938):map__32938);
var source = cljs.core.get.call(null,map__32938__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var camera = cljs.core.get.call(null,map__32938__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
var opts = ({"debug": false, "cameraParametersUrl": "data/camera_para.dat", "detectionMode": "mono", "imageSmoothingEnabled": true, "maxDetectionRate": (60), "canvasWidth": source.parameters.sourceWidth, "canvasHeight": source.parameters.sourceHeight});
var context = (new THREEx.ArToolkitContext(opts));
var G__32940 = context;
G__32940.init(((function (G__32940,opts,context,map__32938,map__32938__$1,source,camera){
return (function (){
return camera.projectionMatrix.copy(context.getProjectionMatrix());
});})(G__32940,opts,context,map__32938,map__32938__$1,source,camera))
);

return G__32940;
}));

//# sourceMappingURL=context.js.map?rel=1518288631211
