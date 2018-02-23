// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__30773__auto__,writer__30774__auto__,opt__30775__auto__){
return cljs.core._write.call(null,writer__30774__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__31388__auto__ = [];
var len__31381__auto___31992 = arguments.length;
var i__31382__auto___31993 = (0);
while(true){
if((i__31382__auto___31993 < len__31381__auto___31992)){
args__31388__auto__.push((arguments[i__31382__auto___31993]));

var G__31994 = (i__31382__auto___31993 + (1));
i__31382__auto___31993 = G__31994;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq31991){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31991));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__31388__auto__ = [];
var len__31381__auto___31996 = arguments.length;
var i__31382__auto___31997 = (0);
while(true){
if((i__31382__auto___31997 < len__31381__auto___31996)){
args__31388__auto__.push((arguments[i__31382__auto___31997]));

var G__31998 = (i__31382__auto___31997 + (1));
i__31382__auto___31997 = G__31998;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq31995){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31995));
});

var g_QMARK__31999 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_32000 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__31999){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__31999))
,null));
var mkg_32001 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__31999,g_32000){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__31999,g_32000))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__31999,g_32000,mkg_32001){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__31999).call(null,x);
});})(g_QMARK__31999,g_32000,mkg_32001))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__31999,g_32000,mkg_32001){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_32001).call(null,gfn);
});})(g_QMARK__31999,g_32000,mkg_32001))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__31999,g_32000,mkg_32001){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_32000).call(null,generator);
});})(g_QMARK__31999,g_32000,mkg_32001))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__31484__auto___32021 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__31484__auto___32021){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__31388__auto__ = [];
var len__31381__auto___32022 = arguments.length;
var i__31382__auto___32023 = (0);
while(true){
if((i__31382__auto___32023 < len__31381__auto___32022)){
args__31388__auto__.push((arguments[i__31382__auto___32023]));

var G__32024 = (i__31382__auto___32023 + (1));
i__31382__auto___32023 = G__32024;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});})(g__31484__auto___32021))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31484__auto___32021){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31484__auto___32021),args);
});})(g__31484__auto___32021))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__31484__auto___32021){
return (function (seq32002){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32002));
});})(g__31484__auto___32021))
;


var g__31484__auto___32025 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__31484__auto___32025){
return (function cljs$spec$gen$alpha$list(var_args){
var args__31388__auto__ = [];
var len__31381__auto___32026 = arguments.length;
var i__31382__auto___32027 = (0);
while(true){
if((i__31382__auto___32027 < len__31381__auto___32026)){
args__31388__auto__.push((arguments[i__31382__auto___32027]));

var G__32028 = (i__31382__auto___32027 + (1));
i__31382__auto___32027 = G__32028;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});})(g__31484__auto___32025))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31484__auto___32025){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31484__auto___32025),args);
});})(g__31484__auto___32025))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__31484__auto___32025){
return (function (seq32003){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32003));
});})(g__31484__auto___32025))
;


var g__31484__auto___32029 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__31484__auto___32029){
return (function cljs$spec$gen$alpha$map(var_args){
var args__31388__auto__ = [];
var len__31381__auto___32030 = arguments.length;
var i__31382__auto___32031 = (0);
while(true){
if((i__31382__auto___32031 < len__31381__auto___32030)){
args__31388__auto__.push((arguments[i__31382__auto___32031]));

var G__32032 = (i__31382__auto___32031 + (1));
i__31382__auto___32031 = G__32032;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});})(g__31484__auto___32029))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31484__auto___32029){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31484__auto___32029),args);
});})(g__31484__auto___32029))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__31484__auto___32029){
return (function (seq32004){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32004));
});})(g__31484__auto___32029))
;


var g__31484__auto___32033 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__31484__auto___32033){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__31388__auto__ = [];
var len__31381__auto___32034 = arguments.length;
var i__31382__auto___32035 = (0);
while(true){
if((i__31382__auto___32035 < len__31381__auto___32034)){
args__31388__auto__.push((arguments[i__31382__auto___32035]));

var G__32036 = (i__31382__auto___32035 + (1));
i__31382__auto___32035 = G__32036;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});})(g__31484__auto___32033))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31484__auto___32033){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31484__auto___32033),args);
});})(g__31484__auto___32033))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__31484__auto___32033){
return (function (seq32005){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32005));
});})(g__31484__auto___32033))
;


var g__31484__auto___32037 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__31484__auto___32037){
return (function cljs$spec$gen$alpha$set(var_args){
var args__31388__auto__ = [];
var len__31381__auto___32038 = arguments.length;
var i__31382__auto___32039 = (0);
while(true){
if((i__31382__auto___32039 < len__31381__auto___32038)){
args__31388__auto__.push((arguments[i__31382__auto___32039]));

var G__32040 = (i__31382__auto___32039 + (1));
i__31382__auto___32039 = G__32040;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});})(g__31484__auto___32037))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31484__auto___32037){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31484__auto___32037),args);
});})(g__31484__auto___32037))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__31484__auto___32037){
return (function (seq32006){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32006));
});})(g__31484__auto___32037))
;


var g__31484__auto___32041 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__31484__auto___32041){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__31388__auto__ = [];
var len__31381__auto___32042 = arguments.length;
var i__31382__auto___32043 = (0);
while(true){
if((i__31382__auto___32043 < len__31381__auto___32042)){
args__31388__auto__.push((arguments[i__31382__auto___32043]));

var G__32044 = (i__31382__auto___32043 + (1));
i__31382__auto___32043 = G__32044;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});})(g__31484__auto___32041))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31484__auto___32041){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31484__auto___32041),args);
});})(g__31484__auto___32041))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__31484__auto___32041){
return (function (seq32007){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32007));
});})(g__31484__auto___32041))
;


var g__31484__auto___32045 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__31484__auto___32045){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__31388__auto__ = [];
var len__31381__auto___32046 = arguments.length;
var i__31382__auto___32047 = (0);
while(true){
if((i__31382__auto___32047 < len__31381__auto___32046)){
args__31388__auto__.push((arguments[i__31382__auto___32047]));

var G__32048 = (i__31382__auto___32047 + (1));
i__31382__auto___32047 = G__32048;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});})(g__31484__auto___32045))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31484__auto___32045){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31484__auto___32045),args);
});})(g__31484__auto___32045))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__31484__auto___32045){
return (function (seq32008){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32008));
});})(g__31484__auto___32045))
;


var g__31484__auto___32049 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__31484__auto___32049){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__31388__auto__ = [];
var len__31381__auto___32050 = arguments.length;
var i__31382__auto___32051 = (0);
while(true){
if((i__31382__auto___32051 < len__31381__auto___32050)){
args__31388__auto__.push((arguments[i__31382__auto___32051]));

var G__32052 = (i__31382__auto___32051 + (1));
i__31382__auto___32051 = G__32052;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});})(g__31484__auto___32049))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31484__auto___32049){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31484__auto___32049),args);
});})(g__31484__auto___32049))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__31484__auto___32049){
return (function (seq32009){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32009));
});})(g__31484__auto___32049))
;


var g__31484__auto___32053 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__31484__auto___32053){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__31388__auto__ = [];
var len__31381__auto___32054 = arguments.length;
var i__31382__auto___32055 = (0);
while(true){
if((i__31382__auto___32055 < len__31381__auto___32054)){
args__31388__auto__.push((arguments[i__31382__auto___32055]));

var G__32056 = (i__31382__auto___32055 + (1));
i__31382__auto___32055 = G__32056;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});})(g__31484__auto___32053))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31484__auto___32053){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31484__auto___32053),args);
});})(g__31484__auto___32053))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__31484__auto___32053){
return (function (seq32010){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32010));
});})(g__31484__auto___32053))
;


var g__31484__auto___32057 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__31484__auto___32057){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__31388__auto__ = [];
var len__31381__auto___32058 = arguments.length;
var i__31382__auto___32059 = (0);
while(true){
if((i__31382__auto___32059 < len__31381__auto___32058)){
args__31388__auto__.push((arguments[i__31382__auto___32059]));

var G__32060 = (i__31382__auto___32059 + (1));
i__31382__auto___32059 = G__32060;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});})(g__31484__auto___32057))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31484__auto___32057){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31484__auto___32057),args);
});})(g__31484__auto___32057))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__31484__auto___32057){
return (function (seq32011){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32011));
});})(g__31484__auto___32057))
;


var g__31484__auto___32061 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__31484__auto___32061){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__31388__auto__ = [];
var len__31381__auto___32062 = arguments.length;
var i__31382__auto___32063 = (0);
while(true){
if((i__31382__auto___32063 < len__31381__auto___32062)){
args__31388__auto__.push((arguments[i__31382__auto___32063]));

var G__32064 = (i__31382__auto___32063 + (1));
i__31382__auto___32063 = G__32064;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});})(g__31484__auto___32061))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31484__auto___32061){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31484__auto___32061),args);
});})(g__31484__auto___32061))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__31484__auto___32061){
return (function (seq32012){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32012));
});})(g__31484__auto___32061))
;


var g__31484__auto___32065 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__31484__auto___32065){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__31388__auto__ = [];
var len__31381__auto___32066 = arguments.length;
var i__31382__auto___32067 = (0);
while(true){
if((i__31382__auto___32067 < len__31381__auto___32066)){
args__31388__auto__.push((arguments[i__31382__auto___32067]));

var G__32068 = (i__31382__auto___32067 + (1));
i__31382__auto___32067 = G__32068;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});})(g__31484__auto___32065))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31484__auto___32065){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31484__auto___32065),args);
});})(g__31484__auto___32065))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__31484__auto___32065){
return (function (seq32013){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32013));
});})(g__31484__auto___32065))
;


var g__31484__auto___32069 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__31484__auto___32069){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__31388__auto__ = [];
var len__31381__auto___32070 = arguments.length;
var i__31382__auto___32071 = (0);
while(true){
if((i__31382__auto___32071 < len__31381__auto___32070)){
args__31388__auto__.push((arguments[i__31382__auto___32071]));

var G__32072 = (i__31382__auto___32071 + (1));
i__31382__auto___32071 = G__32072;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});})(g__31484__auto___32069))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31484__auto___32069){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31484__auto___32069),args);
});})(g__31484__auto___32069))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__31484__auto___32069){
return (function (seq32014){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32014));
});})(g__31484__auto___32069))
;


var g__31484__auto___32073 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__31484__auto___32073){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__31388__auto__ = [];
var len__31381__auto___32074 = arguments.length;
var i__31382__auto___32075 = (0);
while(true){
if((i__31382__auto___32075 < len__31381__auto___32074)){
args__31388__auto__.push((arguments[i__31382__auto___32075]));

var G__32076 = (i__31382__auto___32075 + (1));
i__31382__auto___32075 = G__32076;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});})(g__31484__auto___32073))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31484__auto___32073){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31484__auto___32073),args);
});})(g__31484__auto___32073))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__31484__auto___32073){
return (function (seq32015){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32015));
});})(g__31484__auto___32073))
;


var g__31484__auto___32077 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__31484__auto___32077){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__31388__auto__ = [];
var len__31381__auto___32078 = arguments.length;
var i__31382__auto___32079 = (0);
while(true){
if((i__31382__auto___32079 < len__31381__auto___32078)){
args__31388__auto__.push((arguments[i__31382__auto___32079]));

var G__32080 = (i__31382__auto___32079 + (1));
i__31382__auto___32079 = G__32080;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});})(g__31484__auto___32077))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31484__auto___32077){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31484__auto___32077),args);
});})(g__31484__auto___32077))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__31484__auto___32077){
return (function (seq32016){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32016));
});})(g__31484__auto___32077))
;


var g__31484__auto___32081 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__31484__auto___32081){
return (function cljs$spec$gen$alpha$return(var_args){
var args__31388__auto__ = [];
var len__31381__auto___32082 = arguments.length;
var i__31382__auto___32083 = (0);
while(true){
if((i__31382__auto___32083 < len__31381__auto___32082)){
args__31388__auto__.push((arguments[i__31382__auto___32083]));

var G__32084 = (i__31382__auto___32083 + (1));
i__31382__auto___32083 = G__32084;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});})(g__31484__auto___32081))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31484__auto___32081){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31484__auto___32081),args);
});})(g__31484__auto___32081))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__31484__auto___32081){
return (function (seq32017){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32017));
});})(g__31484__auto___32081))
;


var g__31484__auto___32085 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__31484__auto___32085){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__31388__auto__ = [];
var len__31381__auto___32086 = arguments.length;
var i__31382__auto___32087 = (0);
while(true){
if((i__31382__auto___32087 < len__31381__auto___32086)){
args__31388__auto__.push((arguments[i__31382__auto___32087]));

var G__32088 = (i__31382__auto___32087 + (1));
i__31382__auto___32087 = G__32088;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});})(g__31484__auto___32085))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31484__auto___32085){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31484__auto___32085),args);
});})(g__31484__auto___32085))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__31484__auto___32085){
return (function (seq32018){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32018));
});})(g__31484__auto___32085))
;


var g__31484__auto___32089 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__31484__auto___32089){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__31388__auto__ = [];
var len__31381__auto___32090 = arguments.length;
var i__31382__auto___32091 = (0);
while(true){
if((i__31382__auto___32091 < len__31381__auto___32090)){
args__31388__auto__.push((arguments[i__31382__auto___32091]));

var G__32092 = (i__31382__auto___32091 + (1));
i__31382__auto___32091 = G__32092;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});})(g__31484__auto___32089))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31484__auto___32089){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31484__auto___32089),args);
});})(g__31484__auto___32089))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__31484__auto___32089){
return (function (seq32019){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32019));
});})(g__31484__auto___32089))
;


var g__31484__auto___32093 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__31484__auto___32093){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__31388__auto__ = [];
var len__31381__auto___32094 = arguments.length;
var i__31382__auto___32095 = (0);
while(true){
if((i__31382__auto___32095 < len__31381__auto___32094)){
args__31388__auto__.push((arguments[i__31382__auto___32095]));

var G__32096 = (i__31382__auto___32095 + (1));
i__31382__auto___32095 = G__32096;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});})(g__31484__auto___32093))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31484__auto___32093){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31484__auto___32093),args);
});})(g__31484__auto___32093))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__31484__auto___32093){
return (function (seq32020){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32020));
});})(g__31484__auto___32093))
;

var g__31497__auto___32118 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__31497__auto___32118){
return (function cljs$spec$gen$alpha$any(var_args){
var args__31388__auto__ = [];
var len__31381__auto___32119 = arguments.length;
var i__31382__auto___32120 = (0);
while(true){
if((i__31382__auto___32120 < len__31381__auto___32119)){
args__31388__auto__.push((arguments[i__31382__auto___32120]));

var G__32121 = (i__31382__auto___32120 + (1));
i__31382__auto___32120 = G__32121;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});})(g__31497__auto___32118))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31497__auto___32118){
return (function (args){
return cljs.core.deref.call(null,g__31497__auto___32118);
});})(g__31497__auto___32118))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__31497__auto___32118){
return (function (seq32097){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32097));
});})(g__31497__auto___32118))
;


var g__31497__auto___32122 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__31497__auto___32122){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__31388__auto__ = [];
var len__31381__auto___32123 = arguments.length;
var i__31382__auto___32124 = (0);
while(true){
if((i__31382__auto___32124 < len__31381__auto___32123)){
args__31388__auto__.push((arguments[i__31382__auto___32124]));

var G__32125 = (i__31382__auto___32124 + (1));
i__31382__auto___32124 = G__32125;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});})(g__31497__auto___32122))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31497__auto___32122){
return (function (args){
return cljs.core.deref.call(null,g__31497__auto___32122);
});})(g__31497__auto___32122))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__31497__auto___32122){
return (function (seq32098){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32098));
});})(g__31497__auto___32122))
;


var g__31497__auto___32126 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__31497__auto___32126){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__31388__auto__ = [];
var len__31381__auto___32127 = arguments.length;
var i__31382__auto___32128 = (0);
while(true){
if((i__31382__auto___32128 < len__31381__auto___32127)){
args__31388__auto__.push((arguments[i__31382__auto___32128]));

var G__32129 = (i__31382__auto___32128 + (1));
i__31382__auto___32128 = G__32129;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});})(g__31497__auto___32126))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31497__auto___32126){
return (function (args){
return cljs.core.deref.call(null,g__31497__auto___32126);
});})(g__31497__auto___32126))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__31497__auto___32126){
return (function (seq32099){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32099));
});})(g__31497__auto___32126))
;


var g__31497__auto___32130 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__31497__auto___32130){
return (function cljs$spec$gen$alpha$char(var_args){
var args__31388__auto__ = [];
var len__31381__auto___32131 = arguments.length;
var i__31382__auto___32132 = (0);
while(true){
if((i__31382__auto___32132 < len__31381__auto___32131)){
args__31388__auto__.push((arguments[i__31382__auto___32132]));

var G__32133 = (i__31382__auto___32132 + (1));
i__31382__auto___32132 = G__32133;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});})(g__31497__auto___32130))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31497__auto___32130){
return (function (args){
return cljs.core.deref.call(null,g__31497__auto___32130);
});})(g__31497__auto___32130))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__31497__auto___32130){
return (function (seq32100){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32100));
});})(g__31497__auto___32130))
;


var g__31497__auto___32134 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__31497__auto___32134){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__31388__auto__ = [];
var len__31381__auto___32135 = arguments.length;
var i__31382__auto___32136 = (0);
while(true){
if((i__31382__auto___32136 < len__31381__auto___32135)){
args__31388__auto__.push((arguments[i__31382__auto___32136]));

var G__32137 = (i__31382__auto___32136 + (1));
i__31382__auto___32136 = G__32137;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});})(g__31497__auto___32134))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31497__auto___32134){
return (function (args){
return cljs.core.deref.call(null,g__31497__auto___32134);
});})(g__31497__auto___32134))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__31497__auto___32134){
return (function (seq32101){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32101));
});})(g__31497__auto___32134))
;


var g__31497__auto___32138 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__31497__auto___32138){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__31388__auto__ = [];
var len__31381__auto___32139 = arguments.length;
var i__31382__auto___32140 = (0);
while(true){
if((i__31382__auto___32140 < len__31381__auto___32139)){
args__31388__auto__.push((arguments[i__31382__auto___32140]));

var G__32141 = (i__31382__auto___32140 + (1));
i__31382__auto___32140 = G__32141;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});})(g__31497__auto___32138))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31497__auto___32138){
return (function (args){
return cljs.core.deref.call(null,g__31497__auto___32138);
});})(g__31497__auto___32138))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__31497__auto___32138){
return (function (seq32102){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32102));
});})(g__31497__auto___32138))
;


var g__31497__auto___32142 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__31497__auto___32142){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__31388__auto__ = [];
var len__31381__auto___32143 = arguments.length;
var i__31382__auto___32144 = (0);
while(true){
if((i__31382__auto___32144 < len__31381__auto___32143)){
args__31388__auto__.push((arguments[i__31382__auto___32144]));

var G__32145 = (i__31382__auto___32144 + (1));
i__31382__auto___32144 = G__32145;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});})(g__31497__auto___32142))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31497__auto___32142){
return (function (args){
return cljs.core.deref.call(null,g__31497__auto___32142);
});})(g__31497__auto___32142))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__31497__auto___32142){
return (function (seq32103){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32103));
});})(g__31497__auto___32142))
;


var g__31497__auto___32146 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__31497__auto___32146){
return (function cljs$spec$gen$alpha$double(var_args){
var args__31388__auto__ = [];
var len__31381__auto___32147 = arguments.length;
var i__31382__auto___32148 = (0);
while(true){
if((i__31382__auto___32148 < len__31381__auto___32147)){
args__31388__auto__.push((arguments[i__31382__auto___32148]));

var G__32149 = (i__31382__auto___32148 + (1));
i__31382__auto___32148 = G__32149;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});})(g__31497__auto___32146))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31497__auto___32146){
return (function (args){
return cljs.core.deref.call(null,g__31497__auto___32146);
});})(g__31497__auto___32146))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__31497__auto___32146){
return (function (seq32104){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32104));
});})(g__31497__auto___32146))
;


var g__31497__auto___32150 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__31497__auto___32150){
return (function cljs$spec$gen$alpha$int(var_args){
var args__31388__auto__ = [];
var len__31381__auto___32151 = arguments.length;
var i__31382__auto___32152 = (0);
while(true){
if((i__31382__auto___32152 < len__31381__auto___32151)){
args__31388__auto__.push((arguments[i__31382__auto___32152]));

var G__32153 = (i__31382__auto___32152 + (1));
i__31382__auto___32152 = G__32153;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});})(g__31497__auto___32150))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31497__auto___32150){
return (function (args){
return cljs.core.deref.call(null,g__31497__auto___32150);
});})(g__31497__auto___32150))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__31497__auto___32150){
return (function (seq32105){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32105));
});})(g__31497__auto___32150))
;


var g__31497__auto___32154 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__31497__auto___32154){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__31388__auto__ = [];
var len__31381__auto___32155 = arguments.length;
var i__31382__auto___32156 = (0);
while(true){
if((i__31382__auto___32156 < len__31381__auto___32155)){
args__31388__auto__.push((arguments[i__31382__auto___32156]));

var G__32157 = (i__31382__auto___32156 + (1));
i__31382__auto___32156 = G__32157;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});})(g__31497__auto___32154))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31497__auto___32154){
return (function (args){
return cljs.core.deref.call(null,g__31497__auto___32154);
});})(g__31497__auto___32154))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__31497__auto___32154){
return (function (seq32106){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32106));
});})(g__31497__auto___32154))
;


var g__31497__auto___32158 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__31497__auto___32158){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__31388__auto__ = [];
var len__31381__auto___32159 = arguments.length;
var i__31382__auto___32160 = (0);
while(true){
if((i__31382__auto___32160 < len__31381__auto___32159)){
args__31388__auto__.push((arguments[i__31382__auto___32160]));

var G__32161 = (i__31382__auto___32160 + (1));
i__31382__auto___32160 = G__32161;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});})(g__31497__auto___32158))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31497__auto___32158){
return (function (args){
return cljs.core.deref.call(null,g__31497__auto___32158);
});})(g__31497__auto___32158))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__31497__auto___32158){
return (function (seq32107){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32107));
});})(g__31497__auto___32158))
;


var g__31497__auto___32162 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__31497__auto___32162){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__31388__auto__ = [];
var len__31381__auto___32163 = arguments.length;
var i__31382__auto___32164 = (0);
while(true){
if((i__31382__auto___32164 < len__31381__auto___32163)){
args__31388__auto__.push((arguments[i__31382__auto___32164]));

var G__32165 = (i__31382__auto___32164 + (1));
i__31382__auto___32164 = G__32165;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});})(g__31497__auto___32162))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31497__auto___32162){
return (function (args){
return cljs.core.deref.call(null,g__31497__auto___32162);
});})(g__31497__auto___32162))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__31497__auto___32162){
return (function (seq32108){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32108));
});})(g__31497__auto___32162))
;


var g__31497__auto___32166 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__31497__auto___32166){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__31388__auto__ = [];
var len__31381__auto___32167 = arguments.length;
var i__31382__auto___32168 = (0);
while(true){
if((i__31382__auto___32168 < len__31381__auto___32167)){
args__31388__auto__.push((arguments[i__31382__auto___32168]));

var G__32169 = (i__31382__auto___32168 + (1));
i__31382__auto___32168 = G__32169;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});})(g__31497__auto___32166))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31497__auto___32166){
return (function (args){
return cljs.core.deref.call(null,g__31497__auto___32166);
});})(g__31497__auto___32166))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__31497__auto___32166){
return (function (seq32109){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32109));
});})(g__31497__auto___32166))
;


var g__31497__auto___32170 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__31497__auto___32170){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__31388__auto__ = [];
var len__31381__auto___32171 = arguments.length;
var i__31382__auto___32172 = (0);
while(true){
if((i__31382__auto___32172 < len__31381__auto___32171)){
args__31388__auto__.push((arguments[i__31382__auto___32172]));

var G__32173 = (i__31382__auto___32172 + (1));
i__31382__auto___32172 = G__32173;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});})(g__31497__auto___32170))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31497__auto___32170){
return (function (args){
return cljs.core.deref.call(null,g__31497__auto___32170);
});})(g__31497__auto___32170))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__31497__auto___32170){
return (function (seq32110){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32110));
});})(g__31497__auto___32170))
;


var g__31497__auto___32174 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__31497__auto___32174){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__31388__auto__ = [];
var len__31381__auto___32175 = arguments.length;
var i__31382__auto___32176 = (0);
while(true){
if((i__31382__auto___32176 < len__31381__auto___32175)){
args__31388__auto__.push((arguments[i__31382__auto___32176]));

var G__32177 = (i__31382__auto___32176 + (1));
i__31382__auto___32176 = G__32177;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});})(g__31497__auto___32174))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31497__auto___32174){
return (function (args){
return cljs.core.deref.call(null,g__31497__auto___32174);
});})(g__31497__auto___32174))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__31497__auto___32174){
return (function (seq32111){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32111));
});})(g__31497__auto___32174))
;


var g__31497__auto___32178 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__31497__auto___32178){
return (function cljs$spec$gen$alpha$string(var_args){
var args__31388__auto__ = [];
var len__31381__auto___32179 = arguments.length;
var i__31382__auto___32180 = (0);
while(true){
if((i__31382__auto___32180 < len__31381__auto___32179)){
args__31388__auto__.push((arguments[i__31382__auto___32180]));

var G__32181 = (i__31382__auto___32180 + (1));
i__31382__auto___32180 = G__32181;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});})(g__31497__auto___32178))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31497__auto___32178){
return (function (args){
return cljs.core.deref.call(null,g__31497__auto___32178);
});})(g__31497__auto___32178))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__31497__auto___32178){
return (function (seq32112){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32112));
});})(g__31497__auto___32178))
;


var g__31497__auto___32182 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__31497__auto___32182){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__31388__auto__ = [];
var len__31381__auto___32183 = arguments.length;
var i__31382__auto___32184 = (0);
while(true){
if((i__31382__auto___32184 < len__31381__auto___32183)){
args__31388__auto__.push((arguments[i__31382__auto___32184]));

var G__32185 = (i__31382__auto___32184 + (1));
i__31382__auto___32184 = G__32185;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});})(g__31497__auto___32182))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31497__auto___32182){
return (function (args){
return cljs.core.deref.call(null,g__31497__auto___32182);
});})(g__31497__auto___32182))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__31497__auto___32182){
return (function (seq32113){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32113));
});})(g__31497__auto___32182))
;


var g__31497__auto___32186 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__31497__auto___32186){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__31388__auto__ = [];
var len__31381__auto___32187 = arguments.length;
var i__31382__auto___32188 = (0);
while(true){
if((i__31382__auto___32188 < len__31381__auto___32187)){
args__31388__auto__.push((arguments[i__31382__auto___32188]));

var G__32189 = (i__31382__auto___32188 + (1));
i__31382__auto___32188 = G__32189;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});})(g__31497__auto___32186))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31497__auto___32186){
return (function (args){
return cljs.core.deref.call(null,g__31497__auto___32186);
});})(g__31497__auto___32186))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__31497__auto___32186){
return (function (seq32114){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32114));
});})(g__31497__auto___32186))
;


var g__31497__auto___32190 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__31497__auto___32190){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__31388__auto__ = [];
var len__31381__auto___32191 = arguments.length;
var i__31382__auto___32192 = (0);
while(true){
if((i__31382__auto___32192 < len__31381__auto___32191)){
args__31388__auto__.push((arguments[i__31382__auto___32192]));

var G__32193 = (i__31382__auto___32192 + (1));
i__31382__auto___32192 = G__32193;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});})(g__31497__auto___32190))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31497__auto___32190){
return (function (args){
return cljs.core.deref.call(null,g__31497__auto___32190);
});})(g__31497__auto___32190))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__31497__auto___32190){
return (function (seq32115){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32115));
});})(g__31497__auto___32190))
;


var g__31497__auto___32194 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__31497__auto___32194){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__31388__auto__ = [];
var len__31381__auto___32195 = arguments.length;
var i__31382__auto___32196 = (0);
while(true){
if((i__31382__auto___32196 < len__31381__auto___32195)){
args__31388__auto__.push((arguments[i__31382__auto___32196]));

var G__32197 = (i__31382__auto___32196 + (1));
i__31382__auto___32196 = G__32197;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});})(g__31497__auto___32194))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31497__auto___32194){
return (function (args){
return cljs.core.deref.call(null,g__31497__auto___32194);
});})(g__31497__auto___32194))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__31497__auto___32194){
return (function (seq32116){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32116));
});})(g__31497__auto___32194))
;


var g__31497__auto___32198 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__31497__auto___32198){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__31388__auto__ = [];
var len__31381__auto___32199 = arguments.length;
var i__31382__auto___32200 = (0);
while(true){
if((i__31382__auto___32200 < len__31381__auto___32199)){
args__31388__auto__.push((arguments[i__31382__auto___32200]));

var G__32201 = (i__31382__auto___32200 + (1));
i__31382__auto___32200 = G__32201;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});})(g__31497__auto___32198))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31497__auto___32198){
return (function (args){
return cljs.core.deref.call(null,g__31497__auto___32198);
});})(g__31497__auto___32198))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__31497__auto___32198){
return (function (seq32117){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32117));
});})(g__31497__auto___32198))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__31388__auto__ = [];
var len__31381__auto___32204 = arguments.length;
var i__31382__auto___32205 = (0);
while(true){
if((i__31382__auto___32205 < len__31381__auto___32204)){
args__31388__auto__.push((arguments[i__31382__auto___32205]));

var G__32206 = (i__31382__auto___32205 + (1));
i__31382__auto___32205 = G__32206;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((0) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__31389__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__32202_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__32202_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq32203){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32203));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__32207_SHARP_){
return (new Date(p1__32207_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1518288629506
