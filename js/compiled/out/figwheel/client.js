// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.14";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e38736){if((e38736 instanceof Error)){
var e = e38736;
return "Error: Unable to stringify";
} else {
throw e38736;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__38739 = arguments.length;
switch (G__38739) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__38737_SHARP_){
if(typeof p1__38737_SHARP_ === 'string'){
return p1__38737_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__38737_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__31388__auto__ = [];
var len__31381__auto___38742 = arguments.length;
var i__31382__auto___38743 = (0);
while(true){
if((i__31382__auto___38743 < len__31381__auto___38742)){
args__31388__auto__.push((arguments[i__31382__auto___38743]));

var G__38744 = (i__31382__auto___38743 + (1));
i__31382__auto___38743 = G__38744;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38741){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38741));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31388__auto__ = [];
var len__31381__auto___38746 = arguments.length;
var i__31382__auto___38747 = (0);
while(true){
if((i__31382__auto___38747 < len__31381__auto___38746)){
args__31388__auto__.push((arguments[i__31382__auto___38747]));

var G__38748 = (i__31382__auto___38747 + (1));
i__31382__auto___38747 = G__38748;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38745){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38745));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38749){
var map__38750 = p__38749;
var map__38750__$1 = ((((!((map__38750 == null)))?((((map__38750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38750.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38750):map__38750);
var message = cljs.core.get.call(null,map__38750__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38750__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__30102__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30102__auto__)){
return or__30102__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__30090__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__30090__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__30090__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__34580__auto___38829 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34580__auto___38829,ch){
return (function (){
var f__34581__auto__ = (function (){var switch__34525__auto__ = ((function (c__34580__auto___38829,ch){
return (function (state_38801){
var state_val_38802 = (state_38801[(1)]);
if((state_val_38802 === (7))){
var inst_38797 = (state_38801[(2)]);
var state_38801__$1 = state_38801;
var statearr_38803_38830 = state_38801__$1;
(statearr_38803_38830[(2)] = inst_38797);

(statearr_38803_38830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38802 === (1))){
var state_38801__$1 = state_38801;
var statearr_38804_38831 = state_38801__$1;
(statearr_38804_38831[(2)] = null);

(statearr_38804_38831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38802 === (4))){
var inst_38754 = (state_38801[(7)]);
var inst_38754__$1 = (state_38801[(2)]);
var state_38801__$1 = (function (){var statearr_38805 = state_38801;
(statearr_38805[(7)] = inst_38754__$1);

return statearr_38805;
})();
if(cljs.core.truth_(inst_38754__$1)){
var statearr_38806_38832 = state_38801__$1;
(statearr_38806_38832[(1)] = (5));

} else {
var statearr_38807_38833 = state_38801__$1;
(statearr_38807_38833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38802 === (15))){
var inst_38761 = (state_38801[(8)]);
var inst_38776 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38761);
var inst_38777 = cljs.core.first.call(null,inst_38776);
var inst_38778 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38777);
var inst_38779 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38778)].join('');
var inst_38780 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38779);
var state_38801__$1 = state_38801;
var statearr_38808_38834 = state_38801__$1;
(statearr_38808_38834[(2)] = inst_38780);

(statearr_38808_38834[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38802 === (13))){
var inst_38785 = (state_38801[(2)]);
var state_38801__$1 = state_38801;
var statearr_38809_38835 = state_38801__$1;
(statearr_38809_38835[(2)] = inst_38785);

(statearr_38809_38835[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38802 === (6))){
var state_38801__$1 = state_38801;
var statearr_38810_38836 = state_38801__$1;
(statearr_38810_38836[(2)] = null);

(statearr_38810_38836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38802 === (17))){
var inst_38783 = (state_38801[(2)]);
var state_38801__$1 = state_38801;
var statearr_38811_38837 = state_38801__$1;
(statearr_38811_38837[(2)] = inst_38783);

(statearr_38811_38837[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38802 === (3))){
var inst_38799 = (state_38801[(2)]);
var state_38801__$1 = state_38801;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38801__$1,inst_38799);
} else {
if((state_val_38802 === (12))){
var inst_38760 = (state_38801[(9)]);
var inst_38774 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38760,opts);
var state_38801__$1 = state_38801;
if(cljs.core.truth_(inst_38774)){
var statearr_38812_38838 = state_38801__$1;
(statearr_38812_38838[(1)] = (15));

} else {
var statearr_38813_38839 = state_38801__$1;
(statearr_38813_38839[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38802 === (2))){
var state_38801__$1 = state_38801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38801__$1,(4),ch);
} else {
if((state_val_38802 === (11))){
var inst_38761 = (state_38801[(8)]);
var inst_38766 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38767 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38761);
var inst_38768 = cljs.core.async.timeout.call(null,(1000));
var inst_38769 = [inst_38767,inst_38768];
var inst_38770 = (new cljs.core.PersistentVector(null,2,(5),inst_38766,inst_38769,null));
var state_38801__$1 = state_38801;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38801__$1,(14),inst_38770);
} else {
if((state_val_38802 === (9))){
var inst_38761 = (state_38801[(8)]);
var inst_38787 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38788 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38761);
var inst_38789 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38788);
var inst_38790 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38789)].join('');
var inst_38791 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38790);
var state_38801__$1 = (function (){var statearr_38814 = state_38801;
(statearr_38814[(10)] = inst_38787);

return statearr_38814;
})();
var statearr_38815_38840 = state_38801__$1;
(statearr_38815_38840[(2)] = inst_38791);

(statearr_38815_38840[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38802 === (5))){
var inst_38754 = (state_38801[(7)]);
var inst_38756 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38757 = (new cljs.core.PersistentArrayMap(null,2,inst_38756,null));
var inst_38758 = (new cljs.core.PersistentHashSet(null,inst_38757,null));
var inst_38759 = figwheel.client.focus_msgs.call(null,inst_38758,inst_38754);
var inst_38760 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38759);
var inst_38761 = cljs.core.first.call(null,inst_38759);
var inst_38762 = figwheel.client.autoload_QMARK_.call(null);
var state_38801__$1 = (function (){var statearr_38816 = state_38801;
(statearr_38816[(9)] = inst_38760);

(statearr_38816[(8)] = inst_38761);

return statearr_38816;
})();
if(cljs.core.truth_(inst_38762)){
var statearr_38817_38841 = state_38801__$1;
(statearr_38817_38841[(1)] = (8));

} else {
var statearr_38818_38842 = state_38801__$1;
(statearr_38818_38842[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38802 === (14))){
var inst_38772 = (state_38801[(2)]);
var state_38801__$1 = state_38801;
var statearr_38819_38843 = state_38801__$1;
(statearr_38819_38843[(2)] = inst_38772);

(statearr_38819_38843[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38802 === (16))){
var state_38801__$1 = state_38801;
var statearr_38820_38844 = state_38801__$1;
(statearr_38820_38844[(2)] = null);

(statearr_38820_38844[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38802 === (10))){
var inst_38793 = (state_38801[(2)]);
var state_38801__$1 = (function (){var statearr_38821 = state_38801;
(statearr_38821[(11)] = inst_38793);

return statearr_38821;
})();
var statearr_38822_38845 = state_38801__$1;
(statearr_38822_38845[(2)] = null);

(statearr_38822_38845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38802 === (8))){
var inst_38760 = (state_38801[(9)]);
var inst_38764 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38760,opts);
var state_38801__$1 = state_38801;
if(cljs.core.truth_(inst_38764)){
var statearr_38823_38846 = state_38801__$1;
(statearr_38823_38846[(1)] = (11));

} else {
var statearr_38824_38847 = state_38801__$1;
(statearr_38824_38847[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34580__auto___38829,ch))
;
return ((function (switch__34525__auto__,c__34580__auto___38829,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__34526__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__34526__auto____0 = (function (){
var statearr_38825 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38825[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__34526__auto__);

(statearr_38825[(1)] = (1));

return statearr_38825;
});
var figwheel$client$file_reloader_plugin_$_state_machine__34526__auto____1 = (function (state_38801){
while(true){
var ret_value__34527__auto__ = (function (){try{while(true){
var result__34528__auto__ = switch__34525__auto__.call(null,state_38801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34528__auto__;
}
break;
}
}catch (e38826){if((e38826 instanceof Object)){
var ex__34529__auto__ = e38826;
var statearr_38827_38848 = state_38801;
(statearr_38827_38848[(5)] = ex__34529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38849 = state_38801;
state_38801 = G__38849;
continue;
} else {
return ret_value__34527__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__34526__auto__ = function(state_38801){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__34526__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__34526__auto____1.call(this,state_38801);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__34526__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__34526__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__34526__auto__;
})()
;})(switch__34525__auto__,c__34580__auto___38829,ch))
})();
var state__34582__auto__ = (function (){var statearr_38828 = f__34581__auto__.call(null);
(statearr_38828[(6)] = c__34580__auto___38829);

return statearr_38828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34582__auto__);
});})(c__34580__auto___38829,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38850_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38850_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_38852 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38852){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e38851){if((e38851 instanceof Error)){
var e = e38851;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38852], null));
} else {
var e = e38851;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_38852))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38853){
var map__38854 = p__38853;
var map__38854__$1 = ((((!((map__38854 == null)))?((((map__38854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38854.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38854):map__38854);
var opts = map__38854__$1;
var build_id = cljs.core.get.call(null,map__38854__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38854,map__38854__$1,opts,build_id){
return (function (p__38856){
var vec__38857 = p__38856;
var seq__38858 = cljs.core.seq.call(null,vec__38857);
var first__38859 = cljs.core.first.call(null,seq__38858);
var seq__38858__$1 = cljs.core.next.call(null,seq__38858);
var map__38860 = first__38859;
var map__38860__$1 = ((((!((map__38860 == null)))?((((map__38860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38860.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38860):map__38860);
var msg = map__38860__$1;
var msg_name = cljs.core.get.call(null,map__38860__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38858__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38857,seq__38858,first__38859,seq__38858__$1,map__38860,map__38860__$1,msg,msg_name,_,map__38854,map__38854__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38857,seq__38858,first__38859,seq__38858__$1,map__38860,map__38860__$1,msg,msg_name,_,map__38854,map__38854__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38854,map__38854__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38862){
var vec__38863 = p__38862;
var seq__38864 = cljs.core.seq.call(null,vec__38863);
var first__38865 = cljs.core.first.call(null,seq__38864);
var seq__38864__$1 = cljs.core.next.call(null,seq__38864);
var map__38866 = first__38865;
var map__38866__$1 = ((((!((map__38866 == null)))?((((map__38866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38866.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38866):map__38866);
var msg = map__38866__$1;
var msg_name = cljs.core.get.call(null,map__38866__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38864__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38868){
var map__38869 = p__38868;
var map__38869__$1 = ((((!((map__38869 == null)))?((((map__38869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38869.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38869):map__38869);
var on_compile_warning = cljs.core.get.call(null,map__38869__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38869__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38869,map__38869__$1,on_compile_warning,on_compile_fail){
return (function (p__38871){
var vec__38872 = p__38871;
var seq__38873 = cljs.core.seq.call(null,vec__38872);
var first__38874 = cljs.core.first.call(null,seq__38873);
var seq__38873__$1 = cljs.core.next.call(null,seq__38873);
var map__38875 = first__38874;
var map__38875__$1 = ((((!((map__38875 == null)))?((((map__38875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38875.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38875):map__38875);
var msg = map__38875__$1;
var msg_name = cljs.core.get.call(null,map__38875__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38873__$1;
var pred__38877 = cljs.core._EQ_;
var expr__38878 = msg_name;
if(cljs.core.truth_(pred__38877.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38878))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38877.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38878))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38869,map__38869__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__34580__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34580__auto__,msg_hist,msg_names,msg){
return (function (){
var f__34581__auto__ = (function (){var switch__34525__auto__ = ((function (c__34580__auto__,msg_hist,msg_names,msg){
return (function (state_38967){
var state_val_38968 = (state_38967[(1)]);
if((state_val_38968 === (7))){
var inst_38887 = (state_38967[(2)]);
var state_38967__$1 = state_38967;
if(cljs.core.truth_(inst_38887)){
var statearr_38969_39016 = state_38967__$1;
(statearr_38969_39016[(1)] = (8));

} else {
var statearr_38970_39017 = state_38967__$1;
(statearr_38970_39017[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38968 === (20))){
var inst_38961 = (state_38967[(2)]);
var state_38967__$1 = state_38967;
var statearr_38971_39018 = state_38967__$1;
(statearr_38971_39018[(2)] = inst_38961);

(statearr_38971_39018[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38968 === (27))){
var inst_38957 = (state_38967[(2)]);
var state_38967__$1 = state_38967;
var statearr_38972_39019 = state_38967__$1;
(statearr_38972_39019[(2)] = inst_38957);

(statearr_38972_39019[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38968 === (1))){
var inst_38880 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38967__$1 = state_38967;
if(cljs.core.truth_(inst_38880)){
var statearr_38973_39020 = state_38967__$1;
(statearr_38973_39020[(1)] = (2));

} else {
var statearr_38974_39021 = state_38967__$1;
(statearr_38974_39021[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38968 === (24))){
var inst_38959 = (state_38967[(2)]);
var state_38967__$1 = state_38967;
var statearr_38975_39022 = state_38967__$1;
(statearr_38975_39022[(2)] = inst_38959);

(statearr_38975_39022[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38968 === (4))){
var inst_38965 = (state_38967[(2)]);
var state_38967__$1 = state_38967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38967__$1,inst_38965);
} else {
if((state_val_38968 === (15))){
var inst_38963 = (state_38967[(2)]);
var state_38967__$1 = state_38967;
var statearr_38976_39023 = state_38967__$1;
(statearr_38976_39023[(2)] = inst_38963);

(statearr_38976_39023[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38968 === (21))){
var inst_38916 = (state_38967[(2)]);
var inst_38917 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38918 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38917);
var state_38967__$1 = (function (){var statearr_38977 = state_38967;
(statearr_38977[(7)] = inst_38916);

return statearr_38977;
})();
var statearr_38978_39024 = state_38967__$1;
(statearr_38978_39024[(2)] = inst_38918);

(statearr_38978_39024[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38968 === (31))){
var inst_38946 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38967__$1 = state_38967;
if(cljs.core.truth_(inst_38946)){
var statearr_38979_39025 = state_38967__$1;
(statearr_38979_39025[(1)] = (34));

} else {
var statearr_38980_39026 = state_38967__$1;
(statearr_38980_39026[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38968 === (32))){
var inst_38955 = (state_38967[(2)]);
var state_38967__$1 = state_38967;
var statearr_38981_39027 = state_38967__$1;
(statearr_38981_39027[(2)] = inst_38955);

(statearr_38981_39027[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38968 === (33))){
var inst_38942 = (state_38967[(2)]);
var inst_38943 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38944 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38943);
var state_38967__$1 = (function (){var statearr_38982 = state_38967;
(statearr_38982[(8)] = inst_38942);

return statearr_38982;
})();
var statearr_38983_39028 = state_38967__$1;
(statearr_38983_39028[(2)] = inst_38944);

(statearr_38983_39028[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38968 === (13))){
var inst_38901 = figwheel.client.heads_up.clear.call(null);
var state_38967__$1 = state_38967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38967__$1,(16),inst_38901);
} else {
if((state_val_38968 === (22))){
var inst_38922 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38923 = figwheel.client.heads_up.append_warning_message.call(null,inst_38922);
var state_38967__$1 = state_38967;
var statearr_38984_39029 = state_38967__$1;
(statearr_38984_39029[(2)] = inst_38923);

(statearr_38984_39029[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38968 === (36))){
var inst_38953 = (state_38967[(2)]);
var state_38967__$1 = state_38967;
var statearr_38985_39030 = state_38967__$1;
(statearr_38985_39030[(2)] = inst_38953);

(statearr_38985_39030[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38968 === (29))){
var inst_38933 = (state_38967[(2)]);
var inst_38934 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38935 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38934);
var state_38967__$1 = (function (){var statearr_38986 = state_38967;
(statearr_38986[(9)] = inst_38933);

return statearr_38986;
})();
var statearr_38987_39031 = state_38967__$1;
(statearr_38987_39031[(2)] = inst_38935);

(statearr_38987_39031[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38968 === (6))){
var inst_38882 = (state_38967[(10)]);
var state_38967__$1 = state_38967;
var statearr_38988_39032 = state_38967__$1;
(statearr_38988_39032[(2)] = inst_38882);

(statearr_38988_39032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38968 === (28))){
var inst_38929 = (state_38967[(2)]);
var inst_38930 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38931 = figwheel.client.heads_up.display_warning.call(null,inst_38930);
var state_38967__$1 = (function (){var statearr_38989 = state_38967;
(statearr_38989[(11)] = inst_38929);

return statearr_38989;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38967__$1,(29),inst_38931);
} else {
if((state_val_38968 === (25))){
var inst_38927 = figwheel.client.heads_up.clear.call(null);
var state_38967__$1 = state_38967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38967__$1,(28),inst_38927);
} else {
if((state_val_38968 === (34))){
var inst_38948 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38967__$1 = state_38967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38967__$1,(37),inst_38948);
} else {
if((state_val_38968 === (17))){
var inst_38907 = (state_38967[(2)]);
var inst_38908 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38909 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38908);
var state_38967__$1 = (function (){var statearr_38990 = state_38967;
(statearr_38990[(12)] = inst_38907);

return statearr_38990;
})();
var statearr_38991_39033 = state_38967__$1;
(statearr_38991_39033[(2)] = inst_38909);

(statearr_38991_39033[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38968 === (3))){
var inst_38899 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38967__$1 = state_38967;
if(cljs.core.truth_(inst_38899)){
var statearr_38992_39034 = state_38967__$1;
(statearr_38992_39034[(1)] = (13));

} else {
var statearr_38993_39035 = state_38967__$1;
(statearr_38993_39035[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38968 === (12))){
var inst_38895 = (state_38967[(2)]);
var state_38967__$1 = state_38967;
var statearr_38994_39036 = state_38967__$1;
(statearr_38994_39036[(2)] = inst_38895);

(statearr_38994_39036[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38968 === (2))){
var inst_38882 = (state_38967[(10)]);
var inst_38882__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38967__$1 = (function (){var statearr_38995 = state_38967;
(statearr_38995[(10)] = inst_38882__$1);

return statearr_38995;
})();
if(cljs.core.truth_(inst_38882__$1)){
var statearr_38996_39037 = state_38967__$1;
(statearr_38996_39037[(1)] = (5));

} else {
var statearr_38997_39038 = state_38967__$1;
(statearr_38997_39038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38968 === (23))){
var inst_38925 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38967__$1 = state_38967;
if(cljs.core.truth_(inst_38925)){
var statearr_38998_39039 = state_38967__$1;
(statearr_38998_39039[(1)] = (25));

} else {
var statearr_38999_39040 = state_38967__$1;
(statearr_38999_39040[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38968 === (35))){
var state_38967__$1 = state_38967;
var statearr_39000_39041 = state_38967__$1;
(statearr_39000_39041[(2)] = null);

(statearr_39000_39041[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38968 === (19))){
var inst_38920 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38967__$1 = state_38967;
if(cljs.core.truth_(inst_38920)){
var statearr_39001_39042 = state_38967__$1;
(statearr_39001_39042[(1)] = (22));

} else {
var statearr_39002_39043 = state_38967__$1;
(statearr_39002_39043[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38968 === (11))){
var inst_38891 = (state_38967[(2)]);
var state_38967__$1 = state_38967;
var statearr_39003_39044 = state_38967__$1;
(statearr_39003_39044[(2)] = inst_38891);

(statearr_39003_39044[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38968 === (9))){
var inst_38893 = figwheel.client.heads_up.clear.call(null);
var state_38967__$1 = state_38967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38967__$1,(12),inst_38893);
} else {
if((state_val_38968 === (5))){
var inst_38884 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38967__$1 = state_38967;
var statearr_39004_39045 = state_38967__$1;
(statearr_39004_39045[(2)] = inst_38884);

(statearr_39004_39045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38968 === (14))){
var inst_38911 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38967__$1 = state_38967;
if(cljs.core.truth_(inst_38911)){
var statearr_39005_39046 = state_38967__$1;
(statearr_39005_39046[(1)] = (18));

} else {
var statearr_39006_39047 = state_38967__$1;
(statearr_39006_39047[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38968 === (26))){
var inst_38937 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38967__$1 = state_38967;
if(cljs.core.truth_(inst_38937)){
var statearr_39007_39048 = state_38967__$1;
(statearr_39007_39048[(1)] = (30));

} else {
var statearr_39008_39049 = state_38967__$1;
(statearr_39008_39049[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38968 === (16))){
var inst_38903 = (state_38967[(2)]);
var inst_38904 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38905 = figwheel.client.heads_up.display_exception.call(null,inst_38904);
var state_38967__$1 = (function (){var statearr_39009 = state_38967;
(statearr_39009[(13)] = inst_38903);

return statearr_39009;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38967__$1,(17),inst_38905);
} else {
if((state_val_38968 === (30))){
var inst_38939 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38940 = figwheel.client.heads_up.display_warning.call(null,inst_38939);
var state_38967__$1 = state_38967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38967__$1,(33),inst_38940);
} else {
if((state_val_38968 === (10))){
var inst_38897 = (state_38967[(2)]);
var state_38967__$1 = state_38967;
var statearr_39010_39050 = state_38967__$1;
(statearr_39010_39050[(2)] = inst_38897);

(statearr_39010_39050[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38968 === (18))){
var inst_38913 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38914 = figwheel.client.heads_up.display_exception.call(null,inst_38913);
var state_38967__$1 = state_38967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38967__$1,(21),inst_38914);
} else {
if((state_val_38968 === (37))){
var inst_38950 = (state_38967[(2)]);
var state_38967__$1 = state_38967;
var statearr_39011_39051 = state_38967__$1;
(statearr_39011_39051[(2)] = inst_38950);

(statearr_39011_39051[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38968 === (8))){
var inst_38889 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38967__$1 = state_38967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38967__$1,(11),inst_38889);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34580__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__34525__auto__,c__34580__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34526__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34526__auto____0 = (function (){
var statearr_39012 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39012[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34526__auto__);

(statearr_39012[(1)] = (1));

return statearr_39012;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34526__auto____1 = (function (state_38967){
while(true){
var ret_value__34527__auto__ = (function (){try{while(true){
var result__34528__auto__ = switch__34525__auto__.call(null,state_38967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34528__auto__;
}
break;
}
}catch (e39013){if((e39013 instanceof Object)){
var ex__34529__auto__ = e39013;
var statearr_39014_39052 = state_38967;
(statearr_39014_39052[(5)] = ex__34529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39053 = state_38967;
state_38967 = G__39053;
continue;
} else {
return ret_value__34527__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34526__auto__ = function(state_38967){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34526__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34526__auto____1.call(this,state_38967);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34526__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34526__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34526__auto__;
})()
;})(switch__34525__auto__,c__34580__auto__,msg_hist,msg_names,msg))
})();
var state__34582__auto__ = (function (){var statearr_39015 = f__34581__auto__.call(null);
(statearr_39015[(6)] = c__34580__auto__);

return statearr_39015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34582__auto__);
});})(c__34580__auto__,msg_hist,msg_names,msg))
);

return c__34580__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__34580__auto___39082 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34580__auto___39082,ch){
return (function (){
var f__34581__auto__ = (function (){var switch__34525__auto__ = ((function (c__34580__auto___39082,ch){
return (function (state_39068){
var state_val_39069 = (state_39068[(1)]);
if((state_val_39069 === (1))){
var state_39068__$1 = state_39068;
var statearr_39070_39083 = state_39068__$1;
(statearr_39070_39083[(2)] = null);

(statearr_39070_39083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (2))){
var state_39068__$1 = state_39068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39068__$1,(4),ch);
} else {
if((state_val_39069 === (3))){
var inst_39066 = (state_39068[(2)]);
var state_39068__$1 = state_39068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39068__$1,inst_39066);
} else {
if((state_val_39069 === (4))){
var inst_39056 = (state_39068[(7)]);
var inst_39056__$1 = (state_39068[(2)]);
var state_39068__$1 = (function (){var statearr_39071 = state_39068;
(statearr_39071[(7)] = inst_39056__$1);

return statearr_39071;
})();
if(cljs.core.truth_(inst_39056__$1)){
var statearr_39072_39084 = state_39068__$1;
(statearr_39072_39084[(1)] = (5));

} else {
var statearr_39073_39085 = state_39068__$1;
(statearr_39073_39085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (5))){
var inst_39056 = (state_39068[(7)]);
var inst_39058 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39056);
var state_39068__$1 = state_39068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39068__$1,(8),inst_39058);
} else {
if((state_val_39069 === (6))){
var state_39068__$1 = state_39068;
var statearr_39074_39086 = state_39068__$1;
(statearr_39074_39086[(2)] = null);

(statearr_39074_39086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (7))){
var inst_39064 = (state_39068[(2)]);
var state_39068__$1 = state_39068;
var statearr_39075_39087 = state_39068__$1;
(statearr_39075_39087[(2)] = inst_39064);

(statearr_39075_39087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (8))){
var inst_39060 = (state_39068[(2)]);
var state_39068__$1 = (function (){var statearr_39076 = state_39068;
(statearr_39076[(8)] = inst_39060);

return statearr_39076;
})();
var statearr_39077_39088 = state_39068__$1;
(statearr_39077_39088[(2)] = null);

(statearr_39077_39088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__34580__auto___39082,ch))
;
return ((function (switch__34525__auto__,c__34580__auto___39082,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__34526__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__34526__auto____0 = (function (){
var statearr_39078 = [null,null,null,null,null,null,null,null,null];
(statearr_39078[(0)] = figwheel$client$heads_up_plugin_$_state_machine__34526__auto__);

(statearr_39078[(1)] = (1));

return statearr_39078;
});
var figwheel$client$heads_up_plugin_$_state_machine__34526__auto____1 = (function (state_39068){
while(true){
var ret_value__34527__auto__ = (function (){try{while(true){
var result__34528__auto__ = switch__34525__auto__.call(null,state_39068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34528__auto__;
}
break;
}
}catch (e39079){if((e39079 instanceof Object)){
var ex__34529__auto__ = e39079;
var statearr_39080_39089 = state_39068;
(statearr_39080_39089[(5)] = ex__34529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39090 = state_39068;
state_39068 = G__39090;
continue;
} else {
return ret_value__34527__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__34526__auto__ = function(state_39068){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__34526__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__34526__auto____1.call(this,state_39068);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__34526__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__34526__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__34526__auto__;
})()
;})(switch__34525__auto__,c__34580__auto___39082,ch))
})();
var state__34582__auto__ = (function (){var statearr_39081 = f__34581__auto__.call(null);
(statearr_39081[(6)] = c__34580__auto___39082);

return statearr_39081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34582__auto__);
});})(c__34580__auto___39082,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__34580__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34580__auto__){
return (function (){
var f__34581__auto__ = (function (){var switch__34525__auto__ = ((function (c__34580__auto__){
return (function (state_39096){
var state_val_39097 = (state_39096[(1)]);
if((state_val_39097 === (1))){
var inst_39091 = cljs.core.async.timeout.call(null,(3000));
var state_39096__$1 = state_39096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39096__$1,(2),inst_39091);
} else {
if((state_val_39097 === (2))){
var inst_39093 = (state_39096[(2)]);
var inst_39094 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39096__$1 = (function (){var statearr_39098 = state_39096;
(statearr_39098[(7)] = inst_39093);

return statearr_39098;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39096__$1,inst_39094);
} else {
return null;
}
}
});})(c__34580__auto__))
;
return ((function (switch__34525__auto__,c__34580__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__34526__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__34526__auto____0 = (function (){
var statearr_39099 = [null,null,null,null,null,null,null,null];
(statearr_39099[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__34526__auto__);

(statearr_39099[(1)] = (1));

return statearr_39099;
});
var figwheel$client$enforce_project_plugin_$_state_machine__34526__auto____1 = (function (state_39096){
while(true){
var ret_value__34527__auto__ = (function (){try{while(true){
var result__34528__auto__ = switch__34525__auto__.call(null,state_39096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34528__auto__;
}
break;
}
}catch (e39100){if((e39100 instanceof Object)){
var ex__34529__auto__ = e39100;
var statearr_39101_39103 = state_39096;
(statearr_39101_39103[(5)] = ex__34529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39104 = state_39096;
state_39096 = G__39104;
continue;
} else {
return ret_value__34527__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__34526__auto__ = function(state_39096){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__34526__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__34526__auto____1.call(this,state_39096);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__34526__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__34526__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__34526__auto__;
})()
;})(switch__34525__auto__,c__34580__auto__))
})();
var state__34582__auto__ = (function (){var statearr_39102 = f__34581__auto__.call(null);
(statearr_39102[(6)] = c__34580__auto__);

return statearr_39102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34582__auto__);
});})(c__34580__auto__))
);

return c__34580__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__34580__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34580__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__34581__auto__ = (function (){var switch__34525__auto__ = ((function (c__34580__auto__,figwheel_version,temp__5457__auto__){
return (function (state_39111){
var state_val_39112 = (state_39111[(1)]);
if((state_val_39112 === (1))){
var inst_39105 = cljs.core.async.timeout.call(null,(2000));
var state_39111__$1 = state_39111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39111__$1,(2),inst_39105);
} else {
if((state_val_39112 === (2))){
var inst_39107 = (state_39111[(2)]);
var inst_39108 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_39109 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_39108);
var state_39111__$1 = (function (){var statearr_39113 = state_39111;
(statearr_39113[(7)] = inst_39107);

return statearr_39113;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39111__$1,inst_39109);
} else {
return null;
}
}
});})(c__34580__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__34525__auto__,c__34580__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34526__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34526__auto____0 = (function (){
var statearr_39114 = [null,null,null,null,null,null,null,null];
(statearr_39114[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34526__auto__);

(statearr_39114[(1)] = (1));

return statearr_39114;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34526__auto____1 = (function (state_39111){
while(true){
var ret_value__34527__auto__ = (function (){try{while(true){
var result__34528__auto__ = switch__34525__auto__.call(null,state_39111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34528__auto__;
}
break;
}
}catch (e39115){if((e39115 instanceof Object)){
var ex__34529__auto__ = e39115;
var statearr_39116_39118 = state_39111;
(statearr_39116_39118[(5)] = ex__34529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39119 = state_39111;
state_39111 = G__39119;
continue;
} else {
return ret_value__34527__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34526__auto__ = function(state_39111){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34526__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34526__auto____1.call(this,state_39111);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34526__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34526__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34526__auto__;
})()
;})(switch__34525__auto__,c__34580__auto__,figwheel_version,temp__5457__auto__))
})();
var state__34582__auto__ = (function (){var statearr_39117 = f__34581__auto__.call(null);
(statearr_39117[(6)] = c__34580__auto__);

return statearr_39117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34582__auto__);
});})(c__34580__auto__,figwheel_version,temp__5457__auto__))
);

return c__34580__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__39120){
var map__39121 = p__39120;
var map__39121__$1 = ((((!((map__39121 == null)))?((((map__39121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39121.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39121):map__39121);
var file = cljs.core.get.call(null,map__39121__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39121__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39121__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__39123 = "";
var G__39123__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39123),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__39123);
var G__39123__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39123__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__39123__$1);
if(cljs.core.truth_((function (){var and__30090__auto__ = line;
if(cljs.core.truth_(and__30090__auto__)){
return column;
} else {
return and__30090__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39123__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__39123__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__39124){
var map__39125 = p__39124;
var map__39125__$1 = ((((!((map__39125 == null)))?((((map__39125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39125.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39125):map__39125);
var ed = map__39125__$1;
var formatted_exception = cljs.core.get.call(null,map__39125__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__39125__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__39125__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__39127_39131 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__39128_39132 = null;
var count__39129_39133 = (0);
var i__39130_39134 = (0);
while(true){
if((i__39130_39134 < count__39129_39133)){
var msg_39135 = cljs.core._nth.call(null,chunk__39128_39132,i__39130_39134);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39135);

var G__39136 = seq__39127_39131;
var G__39137 = chunk__39128_39132;
var G__39138 = count__39129_39133;
var G__39139 = (i__39130_39134 + (1));
seq__39127_39131 = G__39136;
chunk__39128_39132 = G__39137;
count__39129_39133 = G__39138;
i__39130_39134 = G__39139;
continue;
} else {
var temp__5457__auto___39140 = cljs.core.seq.call(null,seq__39127_39131);
if(temp__5457__auto___39140){
var seq__39127_39141__$1 = temp__5457__auto___39140;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39127_39141__$1)){
var c__31033__auto___39142 = cljs.core.chunk_first.call(null,seq__39127_39141__$1);
var G__39143 = cljs.core.chunk_rest.call(null,seq__39127_39141__$1);
var G__39144 = c__31033__auto___39142;
var G__39145 = cljs.core.count.call(null,c__31033__auto___39142);
var G__39146 = (0);
seq__39127_39131 = G__39143;
chunk__39128_39132 = G__39144;
count__39129_39133 = G__39145;
i__39130_39134 = G__39146;
continue;
} else {
var msg_39147 = cljs.core.first.call(null,seq__39127_39141__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39147);

var G__39148 = cljs.core.next.call(null,seq__39127_39141__$1);
var G__39149 = null;
var G__39150 = (0);
var G__39151 = (0);
seq__39127_39131 = G__39148;
chunk__39128_39132 = G__39149;
count__39129_39133 = G__39150;
i__39130_39134 = G__39151;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__39152){
var map__39153 = p__39152;
var map__39153__$1 = ((((!((map__39153 == null)))?((((map__39153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39153.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39153):map__39153);
var w = map__39153__$1;
var message = cljs.core.get.call(null,map__39153__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__30090__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__30090__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__30090__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__39155 = cljs.core.seq.call(null,plugins);
var chunk__39156 = null;
var count__39157 = (0);
var i__39158 = (0);
while(true){
if((i__39158 < count__39157)){
var vec__39159 = cljs.core._nth.call(null,chunk__39156,i__39158);
var k = cljs.core.nth.call(null,vec__39159,(0),null);
var plugin = cljs.core.nth.call(null,vec__39159,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39165 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39155,chunk__39156,count__39157,i__39158,pl_39165,vec__39159,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_39165.call(null,msg_hist);
});})(seq__39155,chunk__39156,count__39157,i__39158,pl_39165,vec__39159,k,plugin))
);
} else {
}

var G__39166 = seq__39155;
var G__39167 = chunk__39156;
var G__39168 = count__39157;
var G__39169 = (i__39158 + (1));
seq__39155 = G__39166;
chunk__39156 = G__39167;
count__39157 = G__39168;
i__39158 = G__39169;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__39155);
if(temp__5457__auto__){
var seq__39155__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39155__$1)){
var c__31033__auto__ = cljs.core.chunk_first.call(null,seq__39155__$1);
var G__39170 = cljs.core.chunk_rest.call(null,seq__39155__$1);
var G__39171 = c__31033__auto__;
var G__39172 = cljs.core.count.call(null,c__31033__auto__);
var G__39173 = (0);
seq__39155 = G__39170;
chunk__39156 = G__39171;
count__39157 = G__39172;
i__39158 = G__39173;
continue;
} else {
var vec__39162 = cljs.core.first.call(null,seq__39155__$1);
var k = cljs.core.nth.call(null,vec__39162,(0),null);
var plugin = cljs.core.nth.call(null,vec__39162,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39174 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39155,chunk__39156,count__39157,i__39158,pl_39174,vec__39162,k,plugin,seq__39155__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_39174.call(null,msg_hist);
});})(seq__39155,chunk__39156,count__39157,i__39158,pl_39174,vec__39162,k,plugin,seq__39155__$1,temp__5457__auto__))
);
} else {
}

var G__39175 = cljs.core.next.call(null,seq__39155__$1);
var G__39176 = null;
var G__39177 = (0);
var G__39178 = (0);
seq__39155 = G__39175;
chunk__39156 = G__39176;
count__39157 = G__39177;
i__39158 = G__39178;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__39180 = arguments.length;
switch (G__39180) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__39181_39186 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__39182_39187 = null;
var count__39183_39188 = (0);
var i__39184_39189 = (0);
while(true){
if((i__39184_39189 < count__39183_39188)){
var msg_39190 = cljs.core._nth.call(null,chunk__39182_39187,i__39184_39189);
figwheel.client.socket.handle_incoming_message.call(null,msg_39190);

var G__39191 = seq__39181_39186;
var G__39192 = chunk__39182_39187;
var G__39193 = count__39183_39188;
var G__39194 = (i__39184_39189 + (1));
seq__39181_39186 = G__39191;
chunk__39182_39187 = G__39192;
count__39183_39188 = G__39193;
i__39184_39189 = G__39194;
continue;
} else {
var temp__5457__auto___39195 = cljs.core.seq.call(null,seq__39181_39186);
if(temp__5457__auto___39195){
var seq__39181_39196__$1 = temp__5457__auto___39195;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39181_39196__$1)){
var c__31033__auto___39197 = cljs.core.chunk_first.call(null,seq__39181_39196__$1);
var G__39198 = cljs.core.chunk_rest.call(null,seq__39181_39196__$1);
var G__39199 = c__31033__auto___39197;
var G__39200 = cljs.core.count.call(null,c__31033__auto___39197);
var G__39201 = (0);
seq__39181_39186 = G__39198;
chunk__39182_39187 = G__39199;
count__39183_39188 = G__39200;
i__39184_39189 = G__39201;
continue;
} else {
var msg_39202 = cljs.core.first.call(null,seq__39181_39196__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_39202);

var G__39203 = cljs.core.next.call(null,seq__39181_39196__$1);
var G__39204 = null;
var G__39205 = (0);
var G__39206 = (0);
seq__39181_39186 = G__39203;
chunk__39182_39187 = G__39204;
count__39183_39188 = G__39205;
i__39184_39189 = G__39206;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__31388__auto__ = [];
var len__31381__auto___39211 = arguments.length;
var i__31382__auto___39212 = (0);
while(true){
if((i__31382__auto___39212 < len__31381__auto___39211)){
args__31388__auto__.push((arguments[i__31382__auto___39212]));

var G__39213 = (i__31382__auto___39212 + (1));
i__31382__auto___39212 = G__39213;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__39208){
var map__39209 = p__39208;
var map__39209__$1 = ((((!((map__39209 == null)))?((((map__39209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39209.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39209):map__39209);
var opts = map__39209__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq39207){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39207));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e39214){if((e39214 instanceof Error)){
var e = e39214;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e39214;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__39215){
var map__39216 = p__39215;
var map__39216__$1 = ((((!((map__39216 == null)))?((((map__39216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39216.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39216):map__39216);
var msg_name = cljs.core.get.call(null,map__39216__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1518288638634
