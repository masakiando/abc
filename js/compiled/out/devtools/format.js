// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__30835__auto__ = (((value == null))?null:value);
var m__30836__auto__ = (devtools.format._header[goog.typeOf(x__30835__auto__)]);
if(!((m__30836__auto__ == null))){
return m__30836__auto__.call(null,value);
} else {
var m__30836__auto____$1 = (devtools.format._header["_"]);
if(!((m__30836__auto____$1 == null))){
return m__30836__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__30835__auto__ = (((value == null))?null:value);
var m__30836__auto__ = (devtools.format._has_body[goog.typeOf(x__30835__auto__)]);
if(!((m__30836__auto__ == null))){
return m__30836__auto__.call(null,value);
} else {
var m__30836__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__30836__auto____$1 == null))){
return m__30836__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__30835__auto__ = (((value == null))?null:value);
var m__30836__auto__ = (devtools.format._body[goog.typeOf(x__30835__auto__)]);
if(!((m__30836__auto__ == null))){
return m__30836__auto__.call(null,value);
} else {
var m__30836__auto____$1 = (devtools.format._body["_"]);
if(!((m__30836__auto____$1 == null))){
return m__30836__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o39333 = temp__5455__auto__;
var temp__5455__auto____$1 = (o39333["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o39334 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o39334["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o39335 = temp__5455__auto____$2;
return (o39335["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o39336 = temp__5455__auto__;
var temp__5455__auto____$1 = (o39336["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o39337 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o39337["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o39338 = temp__5455__auto____$2;
return (o39338["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o39339 = temp__5455__auto__;
var temp__5455__auto____$1 = (o39339["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o39340 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o39340["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o39341 = temp__5455__auto____$2;
return (o39341["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o39342 = temp__5455__auto__;
var temp__5455__auto____$1 = (o39342["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o39343 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o39343["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o39344 = temp__5455__auto____$2;
return (o39344["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o39345 = temp__5455__auto__;
var temp__5455__auto____$1 = (o39345["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o39346 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o39346["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o39347 = temp__5455__auto____$2;
return (o39347["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o39348 = temp__5455__auto__;
var temp__5455__auto____$1 = (o39348["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o39349 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o39349["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o39350 = temp__5455__auto____$2;
return (o39350["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o39351 = temp__5455__auto__;
var temp__5455__auto____$1 = (o39351["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o39352 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o39352["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o39353 = temp__5455__auto____$2;
return (o39353["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__31388__auto__ = [];
var len__31381__auto___39355 = arguments.length;
var i__31382__auto___39356 = (0);
while(true){
if((i__31382__auto___39356 < len__31381__auto___39355)){
args__31388__auto__.push((arguments[i__31382__auto___39356]));

var G__39357 = (i__31382__auto___39356 + (1));
i__31382__auto___39356 = G__39357;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq39354){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39354));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__31388__auto__ = [];
var len__31381__auto___39359 = arguments.length;
var i__31382__auto___39360 = (0);
while(true){
if((i__31382__auto___39360 < len__31381__auto___39359)){
args__31388__auto__.push((arguments[i__31382__auto___39360]));

var G__39361 = (i__31382__auto___39360 + (1));
i__31382__auto___39360 = G__39361;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq39358){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39358));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__31388__auto__ = [];
var len__31381__auto___39363 = arguments.length;
var i__31382__auto___39364 = (0);
while(true){
if((i__31382__auto___39364 < len__31381__auto___39363)){
args__31388__auto__.push((arguments[i__31382__auto___39364]));

var G__39365 = (i__31382__auto___39364 + (1));
i__31382__auto___39364 = G__39365;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq39362){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39362));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__31388__auto__ = [];
var len__31381__auto___39367 = arguments.length;
var i__31382__auto___39368 = (0);
while(true){
if((i__31382__auto___39368 < len__31381__auto___39367)){
args__31388__auto__.push((arguments[i__31382__auto___39368]));

var G__39369 = (i__31382__auto___39368 + (1));
i__31382__auto___39368 = G__39369;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq39366){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39366));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__31388__auto__ = [];
var len__31381__auto___39371 = arguments.length;
var i__31382__auto___39372 = (0);
while(true){
if((i__31382__auto___39372 < len__31381__auto___39371)){
args__31388__auto__.push((arguments[i__31382__auto___39372]));

var G__39373 = (i__31382__auto___39372 + (1));
i__31382__auto___39372 = G__39373;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq39370){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39370));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__31388__auto__ = [];
var len__31381__auto___39375 = arguments.length;
var i__31382__auto___39376 = (0);
while(true){
if((i__31382__auto___39376 < len__31381__auto___39375)){
args__31388__auto__.push((arguments[i__31382__auto___39376]));

var G__39377 = (i__31382__auto___39376 + (1));
i__31382__auto___39376 = G__39377;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq39374){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39374));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__31388__auto__ = [];
var len__31381__auto___39379 = arguments.length;
var i__31382__auto___39380 = (0);
while(true){
if((i__31382__auto___39380 < len__31381__auto___39379)){
args__31388__auto__.push((arguments[i__31382__auto___39380]));

var G__39381 = (i__31382__auto___39380 + (1));
i__31382__auto___39380 = G__39381;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq39378){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39378));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__31388__auto__ = [];
var len__31381__auto___39389 = arguments.length;
var i__31382__auto___39390 = (0);
while(true){
if((i__31382__auto___39390 < len__31381__auto___39389)){
args__31388__auto__.push((arguments[i__31382__auto___39390]));

var G__39391 = (i__31382__auto___39390 + (1));
i__31382__auto___39390 = G__39391;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((1) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31389__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__39385){
var vec__39386 = p__39385;
var state_override = cljs.core.nth.call(null,vec__39386,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__39386,state_override){
return (function (p1__39382_SHARP_){
return cljs.core.merge.call(null,p1__39382_SHARP_,state_override);
});})(vec__39386,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq39383){
var G__39384 = cljs.core.first.call(null,seq39383);
var seq39383__$1 = cljs.core.next.call(null,seq39383);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__39384,seq39383__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__31388__auto__ = [];
var len__31381__auto___39393 = arguments.length;
var i__31382__auto___39394 = (0);
while(true){
if((i__31382__auto___39394 < len__31381__auto___39393)){
args__31388__auto__.push((arguments[i__31382__auto___39394]));

var G__39395 = (i__31382__auto___39394 + (1));
i__31382__auto___39394 = G__39395;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq39392){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39392));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__31388__auto__ = [];
var len__31381__auto___39398 = arguments.length;
var i__31382__auto___39399 = (0);
while(true){
if((i__31382__auto___39399 < len__31381__auto___39398)){
args__31388__auto__.push((arguments[i__31382__auto___39399]));

var G__39400 = (i__31382__auto___39399 + (1));
i__31382__auto___39399 = G__39400;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((1) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31389__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq39396){
var G__39397 = cljs.core.first.call(null,seq39396);
var seq39396__$1 = cljs.core.next.call(null,seq39396);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__39397,seq39396__$1);
});


//# sourceMappingURL=format.js.map?rel=1518288639042
