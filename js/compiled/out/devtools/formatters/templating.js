// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x41495_41496 = value;
x41495_41496.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x41498_41499 = value;
x41498_41499.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x41501_41502 = value;
x41501_41502.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__30090__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__30090__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__30090__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__31388__auto__ = [];
var len__31381__auto___41509 = arguments.length;
var i__31382__auto___41510 = (0);
while(true){
if((i__31382__auto___41510 < len__31381__auto___41509)){
args__31388__auto__.push((arguments[i__31382__auto___41510]));

var G__41511 = (i__31382__auto___41510 + (1));
i__31382__auto___41510 = G__41511;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__41505_41512 = cljs.core.seq.call(null,items);
var chunk__41506_41513 = null;
var count__41507_41514 = (0);
var i__41508_41515 = (0);
while(true){
if((i__41508_41515 < count__41507_41514)){
var item_41516 = cljs.core._nth.call(null,chunk__41506_41513,i__41508_41515);
if(!((item_41516 == null))){
if(cljs.core.coll_QMARK_.call(null,item_41516)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_41516)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_41516));
}
} else {
}

var G__41517 = seq__41505_41512;
var G__41518 = chunk__41506_41513;
var G__41519 = count__41507_41514;
var G__41520 = (i__41508_41515 + (1));
seq__41505_41512 = G__41517;
chunk__41506_41513 = G__41518;
count__41507_41514 = G__41519;
i__41508_41515 = G__41520;
continue;
} else {
var temp__5457__auto___41521 = cljs.core.seq.call(null,seq__41505_41512);
if(temp__5457__auto___41521){
var seq__41505_41522__$1 = temp__5457__auto___41521;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41505_41522__$1)){
var c__31033__auto___41523 = cljs.core.chunk_first.call(null,seq__41505_41522__$1);
var G__41524 = cljs.core.chunk_rest.call(null,seq__41505_41522__$1);
var G__41525 = c__31033__auto___41523;
var G__41526 = cljs.core.count.call(null,c__31033__auto___41523);
var G__41527 = (0);
seq__41505_41512 = G__41524;
chunk__41506_41513 = G__41525;
count__41507_41514 = G__41526;
i__41508_41515 = G__41527;
continue;
} else {
var item_41528 = cljs.core.first.call(null,seq__41505_41522__$1);
if(!((item_41528 == null))){
if(cljs.core.coll_QMARK_.call(null,item_41528)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_41528)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_41528));
}
} else {
}

var G__41529 = cljs.core.next.call(null,seq__41505_41522__$1);
var G__41530 = null;
var G__41531 = (0);
var G__41532 = (0);
seq__41505_41512 = G__41529;
chunk__41506_41513 = G__41530;
count__41507_41514 = G__41531;
i__41508_41515 = G__41532;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq41504){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41504));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__31388__auto__ = [];
var len__31381__auto___41540 = arguments.length;
var i__31382__auto___41541 = (0);
while(true){
if((i__31382__auto___41541 < len__31381__auto___41540)){
args__31388__auto__.push((arguments[i__31382__auto___41541]));

var G__41542 = (i__31382__auto___41541 + (1));
i__31382__auto___41541 = G__41542;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((2) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31389__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__41536_41543 = cljs.core.seq.call(null,children);
var chunk__41537_41544 = null;
var count__41538_41545 = (0);
var i__41539_41546 = (0);
while(true){
if((i__41539_41546 < count__41538_41545)){
var child_41547 = cljs.core._nth.call(null,chunk__41537_41544,i__41539_41546);
if(!((child_41547 == null))){
if(cljs.core.coll_QMARK_.call(null,child_41547)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_41547))));
} else {
var temp__5455__auto___41548 = devtools.formatters.helpers.pref.call(null,child_41547);
if(cljs.core.truth_(temp__5455__auto___41548)){
var child_value_41549 = temp__5455__auto___41548;
template.push(child_value_41549);
} else {
}
}
} else {
}

var G__41550 = seq__41536_41543;
var G__41551 = chunk__41537_41544;
var G__41552 = count__41538_41545;
var G__41553 = (i__41539_41546 + (1));
seq__41536_41543 = G__41550;
chunk__41537_41544 = G__41551;
count__41538_41545 = G__41552;
i__41539_41546 = G__41553;
continue;
} else {
var temp__5457__auto___41554 = cljs.core.seq.call(null,seq__41536_41543);
if(temp__5457__auto___41554){
var seq__41536_41555__$1 = temp__5457__auto___41554;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41536_41555__$1)){
var c__31033__auto___41556 = cljs.core.chunk_first.call(null,seq__41536_41555__$1);
var G__41557 = cljs.core.chunk_rest.call(null,seq__41536_41555__$1);
var G__41558 = c__31033__auto___41556;
var G__41559 = cljs.core.count.call(null,c__31033__auto___41556);
var G__41560 = (0);
seq__41536_41543 = G__41557;
chunk__41537_41544 = G__41558;
count__41538_41545 = G__41559;
i__41539_41546 = G__41560;
continue;
} else {
var child_41561 = cljs.core.first.call(null,seq__41536_41555__$1);
if(!((child_41561 == null))){
if(cljs.core.coll_QMARK_.call(null,child_41561)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_41561))));
} else {
var temp__5455__auto___41562 = devtools.formatters.helpers.pref.call(null,child_41561);
if(cljs.core.truth_(temp__5455__auto___41562)){
var child_value_41563 = temp__5455__auto___41562;
template.push(child_value_41563);
} else {
}
}
} else {
}

var G__41564 = cljs.core.next.call(null,seq__41536_41555__$1);
var G__41565 = null;
var G__41566 = (0);
var G__41567 = (0);
seq__41536_41543 = G__41564;
chunk__41537_41544 = G__41565;
count__41538_41545 = G__41566;
i__41539_41546 = G__41567;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq41533){
var G__41534 = cljs.core.first.call(null,seq41533);
var seq41533__$1 = cljs.core.next.call(null,seq41533);
var G__41535 = cljs.core.first.call(null,seq41533__$1);
var seq41533__$2 = cljs.core.next.call(null,seq41533__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__41534,G__41535,seq41533__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__31388__auto__ = [];
var len__31381__auto___41570 = arguments.length;
var i__31382__auto___41571 = (0);
while(true){
if((i__31382__auto___41571 < len__31381__auto___41570)){
args__31388__auto__.push((arguments[i__31382__auto___41571]));

var G__41572 = (i__31382__auto___41571 + (1));
i__31382__auto___41571 = G__41572;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((1) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31389__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq41568){
var G__41569 = cljs.core.first.call(null,seq41568);
var seq41568__$1 = cljs.core.next.call(null,seq41568);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41569,seq41568__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__31388__auto__ = [];
var len__31381__auto___41575 = arguments.length;
var i__31382__auto___41576 = (0);
while(true){
if((i__31382__auto___41576 < len__31381__auto___41575)){
args__31388__auto__.push((arguments[i__31382__auto___41576]));

var G__41577 = (i__31382__auto___41576 + (1));
i__31382__auto___41576 = G__41577;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((1) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31389__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq41573){
var G__41574 = cljs.core.first.call(null,seq41573);
var seq41573__$1 = cljs.core.next.call(null,seq41573);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41574,seq41573__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__41579 = arguments.length;
switch (G__41579) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj41581 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__30102__auto__ = start_index;
if(cljs.core.truth_(or__30102__auto__)){
return or__30102__auto__;
} else {
return (0);
}
})()};
return obj41581;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__31388__auto__ = [];
var len__31381__auto___41589 = arguments.length;
var i__31382__auto___41590 = (0);
while(true){
if((i__31382__auto___41590 < len__31381__auto___41589)){
args__31388__auto__.push((arguments[i__31382__auto___41590]));

var G__41591 = (i__31382__auto___41590 + (1));
i__31382__auto___41590 = G__41591;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((1) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31389__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__41585){
var vec__41586 = p__41585;
var state_override_fn = cljs.core.nth.call(null,vec__41586,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((!((state_override_fn == null)))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq41583){
var G__41584 = cljs.core.first.call(null,seq41583);
var seq41583__$1 = cljs.core.next.call(null,seq41583);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__41584,seq41583__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_41592 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_41592;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),"\n","Render stack:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__41593 = name;
switch (G__41593) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__41595 = tag;
var html_tag = cljs.core.nth.call(null,vec__41595,(0),null);
var style = cljs.core.nth.call(null,vec__41595,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_41598 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),":"].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_41598;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_41599 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_41600 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_41600;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_41599;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["result of markup rendering must be a template,\n","resolved to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,value)),"initial value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,initial_value))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__41601 = initial_value;
var G__41602 = value.call(null);
initial_value = G__41601;
value = G__41602;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__41603 = initial_value;
var G__41604 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__41603;
value = G__41604;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__41605 = initial_value;
var G__41606 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__41605;
value = G__41606;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1518288643200
