// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__34640 = arguments.length;
switch (G__34640) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async34641 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34641 = (function (f,blockable,meta34642){
this.f = f;
this.blockable = blockable;
this.meta34642 = meta34642;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34643,meta34642__$1){
var self__ = this;
var _34643__$1 = this;
return (new cljs.core.async.t_cljs$core$async34641(self__.f,self__.blockable,meta34642__$1));
});

cljs.core.async.t_cljs$core$async34641.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34643){
var self__ = this;
var _34643__$1 = this;
return self__.meta34642;
});

cljs.core.async.t_cljs$core$async34641.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34641.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34641.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async34641.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async34641.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34642","meta34642",-427050733,null)], null);
});

cljs.core.async.t_cljs$core$async34641.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34641.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34641";

cljs.core.async.t_cljs$core$async34641.cljs$lang$ctorPrWriter = (function (this__30773__auto__,writer__30774__auto__,opt__30775__auto__){
return cljs.core._write.call(null,writer__30774__auto__,"cljs.core.async/t_cljs$core$async34641");
});

cljs.core.async.__GT_t_cljs$core$async34641 = (function cljs$core$async$__GT_t_cljs$core$async34641(f__$1,blockable__$1,meta34642){
return (new cljs.core.async.t_cljs$core$async34641(f__$1,blockable__$1,meta34642));
});

}

return (new cljs.core.async.t_cljs$core$async34641(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__34647 = arguments.length;
switch (G__34647) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__34650 = arguments.length;
switch (G__34650) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__34653 = arguments.length;
switch (G__34653) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_34655 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_34655);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_34655,ret){
return (function (){
return fn1.call(null,val_34655);
});})(val_34655,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__34657 = arguments.length;
switch (G__34657) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__31147__auto___34659 = n;
var x_34660 = (0);
while(true){
if((x_34660 < n__31147__auto___34659)){
(a[x_34660] = (0));

var G__34661 = (x_34660 + (1));
x_34660 = G__34661;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__34662 = (i + (1));
i = G__34662;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async34663 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34663 = (function (flag,meta34664){
this.flag = flag;
this.meta34664 = meta34664;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34665,meta34664__$1){
var self__ = this;
var _34665__$1 = this;
return (new cljs.core.async.t_cljs$core$async34663(self__.flag,meta34664__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async34663.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34665){
var self__ = this;
var _34665__$1 = this;
return self__.meta34664;
});})(flag))
;

cljs.core.async.t_cljs$core$async34663.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34663.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async34663.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34663.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34663.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34664","meta34664",2005834754,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async34663.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34663.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34663";

cljs.core.async.t_cljs$core$async34663.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30773__auto__,writer__30774__auto__,opt__30775__auto__){
return cljs.core._write.call(null,writer__30774__auto__,"cljs.core.async/t_cljs$core$async34663");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async34663 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34663(flag__$1,meta34664){
return (new cljs.core.async.t_cljs$core$async34663(flag__$1,meta34664));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async34663(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async34666 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34666 = (function (flag,cb,meta34667){
this.flag = flag;
this.cb = cb;
this.meta34667 = meta34667;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34668,meta34667__$1){
var self__ = this;
var _34668__$1 = this;
return (new cljs.core.async.t_cljs$core$async34666(self__.flag,self__.cb,meta34667__$1));
});

cljs.core.async.t_cljs$core$async34666.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34668){
var self__ = this;
var _34668__$1 = this;
return self__.meta34667;
});

cljs.core.async.t_cljs$core$async34666.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34666.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async34666.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34666.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async34666.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34667","meta34667",942920546,null)], null);
});

cljs.core.async.t_cljs$core$async34666.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34666.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34666";

cljs.core.async.t_cljs$core$async34666.cljs$lang$ctorPrWriter = (function (this__30773__auto__,writer__30774__auto__,opt__30775__auto__){
return cljs.core._write.call(null,writer__30774__auto__,"cljs.core.async/t_cljs$core$async34666");
});

cljs.core.async.__GT_t_cljs$core$async34666 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34666(flag__$1,cb__$1,meta34667){
return (new cljs.core.async.t_cljs$core$async34666(flag__$1,cb__$1,meta34667));
});

}

return (new cljs.core.async.t_cljs$core$async34666(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34669_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34669_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34670_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34670_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__30102__auto__ = wport;
if(cljs.core.truth_(or__30102__auto__)){
return or__30102__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34671 = (i + (1));
i = G__34671;
continue;
}
} else {
return null;
}
break;
}
})();
var or__30102__auto__ = ret;
if(cljs.core.truth_(or__30102__auto__)){
return or__30102__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__30090__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__30090__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__30090__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__31388__auto__ = [];
var len__31381__auto___34677 = arguments.length;
var i__31382__auto___34678 = (0);
while(true){
if((i__31382__auto___34678 < len__31381__auto___34677)){
args__31388__auto__.push((arguments[i__31382__auto___34678]));

var G__34679 = (i__31382__auto___34678 + (1));
i__31382__auto___34678 = G__34679;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((1) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31389__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34674){
var map__34675 = p__34674;
var map__34675__$1 = ((((!((map__34675 == null)))?((((map__34675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34675.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34675):map__34675);
var opts = map__34675__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34672){
var G__34673 = cljs.core.first.call(null,seq34672);
var seq34672__$1 = cljs.core.next.call(null,seq34672);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34673,seq34672__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__34681 = arguments.length;
switch (G__34681) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__34580__auto___34727 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34580__auto___34727){
return (function (){
var f__34581__auto__ = (function (){var switch__34525__auto__ = ((function (c__34580__auto___34727){
return (function (state_34705){
var state_val_34706 = (state_34705[(1)]);
if((state_val_34706 === (7))){
var inst_34701 = (state_34705[(2)]);
var state_34705__$1 = state_34705;
var statearr_34707_34728 = state_34705__$1;
(statearr_34707_34728[(2)] = inst_34701);

(statearr_34707_34728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34706 === (1))){
var state_34705__$1 = state_34705;
var statearr_34708_34729 = state_34705__$1;
(statearr_34708_34729[(2)] = null);

(statearr_34708_34729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34706 === (4))){
var inst_34684 = (state_34705[(7)]);
var inst_34684__$1 = (state_34705[(2)]);
var inst_34685 = (inst_34684__$1 == null);
var state_34705__$1 = (function (){var statearr_34709 = state_34705;
(statearr_34709[(7)] = inst_34684__$1);

return statearr_34709;
})();
if(cljs.core.truth_(inst_34685)){
var statearr_34710_34730 = state_34705__$1;
(statearr_34710_34730[(1)] = (5));

} else {
var statearr_34711_34731 = state_34705__$1;
(statearr_34711_34731[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34706 === (13))){
var state_34705__$1 = state_34705;
var statearr_34712_34732 = state_34705__$1;
(statearr_34712_34732[(2)] = null);

(statearr_34712_34732[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34706 === (6))){
var inst_34684 = (state_34705[(7)]);
var state_34705__$1 = state_34705;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34705__$1,(11),to,inst_34684);
} else {
if((state_val_34706 === (3))){
var inst_34703 = (state_34705[(2)]);
var state_34705__$1 = state_34705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34705__$1,inst_34703);
} else {
if((state_val_34706 === (12))){
var state_34705__$1 = state_34705;
var statearr_34713_34733 = state_34705__$1;
(statearr_34713_34733[(2)] = null);

(statearr_34713_34733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34706 === (2))){
var state_34705__$1 = state_34705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34705__$1,(4),from);
} else {
if((state_val_34706 === (11))){
var inst_34694 = (state_34705[(2)]);
var state_34705__$1 = state_34705;
if(cljs.core.truth_(inst_34694)){
var statearr_34714_34734 = state_34705__$1;
(statearr_34714_34734[(1)] = (12));

} else {
var statearr_34715_34735 = state_34705__$1;
(statearr_34715_34735[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34706 === (9))){
var state_34705__$1 = state_34705;
var statearr_34716_34736 = state_34705__$1;
(statearr_34716_34736[(2)] = null);

(statearr_34716_34736[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34706 === (5))){
var state_34705__$1 = state_34705;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34717_34737 = state_34705__$1;
(statearr_34717_34737[(1)] = (8));

} else {
var statearr_34718_34738 = state_34705__$1;
(statearr_34718_34738[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34706 === (14))){
var inst_34699 = (state_34705[(2)]);
var state_34705__$1 = state_34705;
var statearr_34719_34739 = state_34705__$1;
(statearr_34719_34739[(2)] = inst_34699);

(statearr_34719_34739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34706 === (10))){
var inst_34691 = (state_34705[(2)]);
var state_34705__$1 = state_34705;
var statearr_34720_34740 = state_34705__$1;
(statearr_34720_34740[(2)] = inst_34691);

(statearr_34720_34740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34706 === (8))){
var inst_34688 = cljs.core.async.close_BANG_.call(null,to);
var state_34705__$1 = state_34705;
var statearr_34721_34741 = state_34705__$1;
(statearr_34721_34741[(2)] = inst_34688);

(statearr_34721_34741[(1)] = (10));


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
});})(c__34580__auto___34727))
;
return ((function (switch__34525__auto__,c__34580__auto___34727){
return (function() {
var cljs$core$async$state_machine__34526__auto__ = null;
var cljs$core$async$state_machine__34526__auto____0 = (function (){
var statearr_34722 = [null,null,null,null,null,null,null,null];
(statearr_34722[(0)] = cljs$core$async$state_machine__34526__auto__);

(statearr_34722[(1)] = (1));

return statearr_34722;
});
var cljs$core$async$state_machine__34526__auto____1 = (function (state_34705){
while(true){
var ret_value__34527__auto__ = (function (){try{while(true){
var result__34528__auto__ = switch__34525__auto__.call(null,state_34705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34528__auto__;
}
break;
}
}catch (e34723){if((e34723 instanceof Object)){
var ex__34529__auto__ = e34723;
var statearr_34724_34742 = state_34705;
(statearr_34724_34742[(5)] = ex__34529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34723;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34743 = state_34705;
state_34705 = G__34743;
continue;
} else {
return ret_value__34527__auto__;
}
break;
}
});
cljs$core$async$state_machine__34526__auto__ = function(state_34705){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34526__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34526__auto____1.call(this,state_34705);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34526__auto____0;
cljs$core$async$state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34526__auto____1;
return cljs$core$async$state_machine__34526__auto__;
})()
;})(switch__34525__auto__,c__34580__auto___34727))
})();
var state__34582__auto__ = (function (){var statearr_34725 = f__34581__auto__.call(null);
(statearr_34725[(6)] = c__34580__auto___34727);

return statearr_34725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34582__auto__);
});})(c__34580__auto___34727))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__34744){
var vec__34745 = p__34744;
var v = cljs.core.nth.call(null,vec__34745,(0),null);
var p = cljs.core.nth.call(null,vec__34745,(1),null);
var job = vec__34745;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__34580__auto___34916 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34580__auto___34916,res,vec__34745,v,p,job,jobs,results){
return (function (){
var f__34581__auto__ = (function (){var switch__34525__auto__ = ((function (c__34580__auto___34916,res,vec__34745,v,p,job,jobs,results){
return (function (state_34752){
var state_val_34753 = (state_34752[(1)]);
if((state_val_34753 === (1))){
var state_34752__$1 = state_34752;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34752__$1,(2),res,v);
} else {
if((state_val_34753 === (2))){
var inst_34749 = (state_34752[(2)]);
var inst_34750 = cljs.core.async.close_BANG_.call(null,res);
var state_34752__$1 = (function (){var statearr_34754 = state_34752;
(statearr_34754[(7)] = inst_34749);

return statearr_34754;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34752__$1,inst_34750);
} else {
return null;
}
}
});})(c__34580__auto___34916,res,vec__34745,v,p,job,jobs,results))
;
return ((function (switch__34525__auto__,c__34580__auto___34916,res,vec__34745,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34526__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34526__auto____0 = (function (){
var statearr_34755 = [null,null,null,null,null,null,null,null];
(statearr_34755[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34526__auto__);

(statearr_34755[(1)] = (1));

return statearr_34755;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34526__auto____1 = (function (state_34752){
while(true){
var ret_value__34527__auto__ = (function (){try{while(true){
var result__34528__auto__ = switch__34525__auto__.call(null,state_34752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34528__auto__;
}
break;
}
}catch (e34756){if((e34756 instanceof Object)){
var ex__34529__auto__ = e34756;
var statearr_34757_34917 = state_34752;
(statearr_34757_34917[(5)] = ex__34529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34918 = state_34752;
state_34752 = G__34918;
continue;
} else {
return ret_value__34527__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34526__auto__ = function(state_34752){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34526__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34526__auto____1.call(this,state_34752);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34526__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34526__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34526__auto__;
})()
;})(switch__34525__auto__,c__34580__auto___34916,res,vec__34745,v,p,job,jobs,results))
})();
var state__34582__auto__ = (function (){var statearr_34758 = f__34581__auto__.call(null);
(statearr_34758[(6)] = c__34580__auto___34916);

return statearr_34758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34582__auto__);
});})(c__34580__auto___34916,res,vec__34745,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34759){
var vec__34760 = p__34759;
var v = cljs.core.nth.call(null,vec__34760,(0),null);
var p = cljs.core.nth.call(null,vec__34760,(1),null);
var job = vec__34760;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__31147__auto___34919 = n;
var __34920 = (0);
while(true){
if((__34920 < n__31147__auto___34919)){
var G__34763_34921 = type;
var G__34763_34922__$1 = (((G__34763_34921 instanceof cljs.core.Keyword))?G__34763_34921.fqn:null);
switch (G__34763_34922__$1) {
case "compute":
var c__34580__auto___34924 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34920,c__34580__auto___34924,G__34763_34921,G__34763_34922__$1,n__31147__auto___34919,jobs,results,process,async){
return (function (){
var f__34581__auto__ = (function (){var switch__34525__auto__ = ((function (__34920,c__34580__auto___34924,G__34763_34921,G__34763_34922__$1,n__31147__auto___34919,jobs,results,process,async){
return (function (state_34776){
var state_val_34777 = (state_34776[(1)]);
if((state_val_34777 === (1))){
var state_34776__$1 = state_34776;
var statearr_34778_34925 = state_34776__$1;
(statearr_34778_34925[(2)] = null);

(statearr_34778_34925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34777 === (2))){
var state_34776__$1 = state_34776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34776__$1,(4),jobs);
} else {
if((state_val_34777 === (3))){
var inst_34774 = (state_34776[(2)]);
var state_34776__$1 = state_34776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34776__$1,inst_34774);
} else {
if((state_val_34777 === (4))){
var inst_34766 = (state_34776[(2)]);
var inst_34767 = process.call(null,inst_34766);
var state_34776__$1 = state_34776;
if(cljs.core.truth_(inst_34767)){
var statearr_34779_34926 = state_34776__$1;
(statearr_34779_34926[(1)] = (5));

} else {
var statearr_34780_34927 = state_34776__$1;
(statearr_34780_34927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34777 === (5))){
var state_34776__$1 = state_34776;
var statearr_34781_34928 = state_34776__$1;
(statearr_34781_34928[(2)] = null);

(statearr_34781_34928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34777 === (6))){
var state_34776__$1 = state_34776;
var statearr_34782_34929 = state_34776__$1;
(statearr_34782_34929[(2)] = null);

(statearr_34782_34929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34777 === (7))){
var inst_34772 = (state_34776[(2)]);
var state_34776__$1 = state_34776;
var statearr_34783_34930 = state_34776__$1;
(statearr_34783_34930[(2)] = inst_34772);

(statearr_34783_34930[(1)] = (3));


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
});})(__34920,c__34580__auto___34924,G__34763_34921,G__34763_34922__$1,n__31147__auto___34919,jobs,results,process,async))
;
return ((function (__34920,switch__34525__auto__,c__34580__auto___34924,G__34763_34921,G__34763_34922__$1,n__31147__auto___34919,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34526__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34526__auto____0 = (function (){
var statearr_34784 = [null,null,null,null,null,null,null];
(statearr_34784[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34526__auto__);

(statearr_34784[(1)] = (1));

return statearr_34784;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34526__auto____1 = (function (state_34776){
while(true){
var ret_value__34527__auto__ = (function (){try{while(true){
var result__34528__auto__ = switch__34525__auto__.call(null,state_34776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34528__auto__;
}
break;
}
}catch (e34785){if((e34785 instanceof Object)){
var ex__34529__auto__ = e34785;
var statearr_34786_34931 = state_34776;
(statearr_34786_34931[(5)] = ex__34529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34932 = state_34776;
state_34776 = G__34932;
continue;
} else {
return ret_value__34527__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34526__auto__ = function(state_34776){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34526__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34526__auto____1.call(this,state_34776);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34526__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34526__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34526__auto__;
})()
;})(__34920,switch__34525__auto__,c__34580__auto___34924,G__34763_34921,G__34763_34922__$1,n__31147__auto___34919,jobs,results,process,async))
})();
var state__34582__auto__ = (function (){var statearr_34787 = f__34581__auto__.call(null);
(statearr_34787[(6)] = c__34580__auto___34924);

return statearr_34787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34582__auto__);
});})(__34920,c__34580__auto___34924,G__34763_34921,G__34763_34922__$1,n__31147__auto___34919,jobs,results,process,async))
);


break;
case "async":
var c__34580__auto___34933 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34920,c__34580__auto___34933,G__34763_34921,G__34763_34922__$1,n__31147__auto___34919,jobs,results,process,async){
return (function (){
var f__34581__auto__ = (function (){var switch__34525__auto__ = ((function (__34920,c__34580__auto___34933,G__34763_34921,G__34763_34922__$1,n__31147__auto___34919,jobs,results,process,async){
return (function (state_34800){
var state_val_34801 = (state_34800[(1)]);
if((state_val_34801 === (1))){
var state_34800__$1 = state_34800;
var statearr_34802_34934 = state_34800__$1;
(statearr_34802_34934[(2)] = null);

(statearr_34802_34934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (2))){
var state_34800__$1 = state_34800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34800__$1,(4),jobs);
} else {
if((state_val_34801 === (3))){
var inst_34798 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34800__$1,inst_34798);
} else {
if((state_val_34801 === (4))){
var inst_34790 = (state_34800[(2)]);
var inst_34791 = async.call(null,inst_34790);
var state_34800__$1 = state_34800;
if(cljs.core.truth_(inst_34791)){
var statearr_34803_34935 = state_34800__$1;
(statearr_34803_34935[(1)] = (5));

} else {
var statearr_34804_34936 = state_34800__$1;
(statearr_34804_34936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (5))){
var state_34800__$1 = state_34800;
var statearr_34805_34937 = state_34800__$1;
(statearr_34805_34937[(2)] = null);

(statearr_34805_34937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (6))){
var state_34800__$1 = state_34800;
var statearr_34806_34938 = state_34800__$1;
(statearr_34806_34938[(2)] = null);

(statearr_34806_34938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (7))){
var inst_34796 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
var statearr_34807_34939 = state_34800__$1;
(statearr_34807_34939[(2)] = inst_34796);

(statearr_34807_34939[(1)] = (3));


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
});})(__34920,c__34580__auto___34933,G__34763_34921,G__34763_34922__$1,n__31147__auto___34919,jobs,results,process,async))
;
return ((function (__34920,switch__34525__auto__,c__34580__auto___34933,G__34763_34921,G__34763_34922__$1,n__31147__auto___34919,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34526__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34526__auto____0 = (function (){
var statearr_34808 = [null,null,null,null,null,null,null];
(statearr_34808[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34526__auto__);

(statearr_34808[(1)] = (1));

return statearr_34808;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34526__auto____1 = (function (state_34800){
while(true){
var ret_value__34527__auto__ = (function (){try{while(true){
var result__34528__auto__ = switch__34525__auto__.call(null,state_34800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34528__auto__;
}
break;
}
}catch (e34809){if((e34809 instanceof Object)){
var ex__34529__auto__ = e34809;
var statearr_34810_34940 = state_34800;
(statearr_34810_34940[(5)] = ex__34529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34941 = state_34800;
state_34800 = G__34941;
continue;
} else {
return ret_value__34527__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34526__auto__ = function(state_34800){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34526__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34526__auto____1.call(this,state_34800);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34526__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34526__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34526__auto__;
})()
;})(__34920,switch__34525__auto__,c__34580__auto___34933,G__34763_34921,G__34763_34922__$1,n__31147__auto___34919,jobs,results,process,async))
})();
var state__34582__auto__ = (function (){var statearr_34811 = f__34581__auto__.call(null);
(statearr_34811[(6)] = c__34580__auto___34933);

return statearr_34811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34582__auto__);
});})(__34920,c__34580__auto___34933,G__34763_34921,G__34763_34922__$1,n__31147__auto___34919,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34763_34922__$1)].join('')));

}

var G__34942 = (__34920 + (1));
__34920 = G__34942;
continue;
} else {
}
break;
}

var c__34580__auto___34943 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34580__auto___34943,jobs,results,process,async){
return (function (){
var f__34581__auto__ = (function (){var switch__34525__auto__ = ((function (c__34580__auto___34943,jobs,results,process,async){
return (function (state_34833){
var state_val_34834 = (state_34833[(1)]);
if((state_val_34834 === (1))){
var state_34833__$1 = state_34833;
var statearr_34835_34944 = state_34833__$1;
(statearr_34835_34944[(2)] = null);

(statearr_34835_34944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34834 === (2))){
var state_34833__$1 = state_34833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34833__$1,(4),from);
} else {
if((state_val_34834 === (3))){
var inst_34831 = (state_34833[(2)]);
var state_34833__$1 = state_34833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34833__$1,inst_34831);
} else {
if((state_val_34834 === (4))){
var inst_34814 = (state_34833[(7)]);
var inst_34814__$1 = (state_34833[(2)]);
var inst_34815 = (inst_34814__$1 == null);
var state_34833__$1 = (function (){var statearr_34836 = state_34833;
(statearr_34836[(7)] = inst_34814__$1);

return statearr_34836;
})();
if(cljs.core.truth_(inst_34815)){
var statearr_34837_34945 = state_34833__$1;
(statearr_34837_34945[(1)] = (5));

} else {
var statearr_34838_34946 = state_34833__$1;
(statearr_34838_34946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34834 === (5))){
var inst_34817 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34833__$1 = state_34833;
var statearr_34839_34947 = state_34833__$1;
(statearr_34839_34947[(2)] = inst_34817);

(statearr_34839_34947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34834 === (6))){
var inst_34819 = (state_34833[(8)]);
var inst_34814 = (state_34833[(7)]);
var inst_34819__$1 = cljs.core.async.chan.call(null,(1));
var inst_34820 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34821 = [inst_34814,inst_34819__$1];
var inst_34822 = (new cljs.core.PersistentVector(null,2,(5),inst_34820,inst_34821,null));
var state_34833__$1 = (function (){var statearr_34840 = state_34833;
(statearr_34840[(8)] = inst_34819__$1);

return statearr_34840;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34833__$1,(8),jobs,inst_34822);
} else {
if((state_val_34834 === (7))){
var inst_34829 = (state_34833[(2)]);
var state_34833__$1 = state_34833;
var statearr_34841_34948 = state_34833__$1;
(statearr_34841_34948[(2)] = inst_34829);

(statearr_34841_34948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34834 === (8))){
var inst_34819 = (state_34833[(8)]);
var inst_34824 = (state_34833[(2)]);
var state_34833__$1 = (function (){var statearr_34842 = state_34833;
(statearr_34842[(9)] = inst_34824);

return statearr_34842;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34833__$1,(9),results,inst_34819);
} else {
if((state_val_34834 === (9))){
var inst_34826 = (state_34833[(2)]);
var state_34833__$1 = (function (){var statearr_34843 = state_34833;
(statearr_34843[(10)] = inst_34826);

return statearr_34843;
})();
var statearr_34844_34949 = state_34833__$1;
(statearr_34844_34949[(2)] = null);

(statearr_34844_34949[(1)] = (2));


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
});})(c__34580__auto___34943,jobs,results,process,async))
;
return ((function (switch__34525__auto__,c__34580__auto___34943,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34526__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34526__auto____0 = (function (){
var statearr_34845 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34845[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34526__auto__);

(statearr_34845[(1)] = (1));

return statearr_34845;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34526__auto____1 = (function (state_34833){
while(true){
var ret_value__34527__auto__ = (function (){try{while(true){
var result__34528__auto__ = switch__34525__auto__.call(null,state_34833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34528__auto__;
}
break;
}
}catch (e34846){if((e34846 instanceof Object)){
var ex__34529__auto__ = e34846;
var statearr_34847_34950 = state_34833;
(statearr_34847_34950[(5)] = ex__34529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34951 = state_34833;
state_34833 = G__34951;
continue;
} else {
return ret_value__34527__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34526__auto__ = function(state_34833){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34526__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34526__auto____1.call(this,state_34833);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34526__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34526__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34526__auto__;
})()
;})(switch__34525__auto__,c__34580__auto___34943,jobs,results,process,async))
})();
var state__34582__auto__ = (function (){var statearr_34848 = f__34581__auto__.call(null);
(statearr_34848[(6)] = c__34580__auto___34943);

return statearr_34848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34582__auto__);
});})(c__34580__auto___34943,jobs,results,process,async))
);


var c__34580__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34580__auto__,jobs,results,process,async){
return (function (){
var f__34581__auto__ = (function (){var switch__34525__auto__ = ((function (c__34580__auto__,jobs,results,process,async){
return (function (state_34886){
var state_val_34887 = (state_34886[(1)]);
if((state_val_34887 === (7))){
var inst_34882 = (state_34886[(2)]);
var state_34886__$1 = state_34886;
var statearr_34888_34952 = state_34886__$1;
(statearr_34888_34952[(2)] = inst_34882);

(statearr_34888_34952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34887 === (20))){
var state_34886__$1 = state_34886;
var statearr_34889_34953 = state_34886__$1;
(statearr_34889_34953[(2)] = null);

(statearr_34889_34953[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34887 === (1))){
var state_34886__$1 = state_34886;
var statearr_34890_34954 = state_34886__$1;
(statearr_34890_34954[(2)] = null);

(statearr_34890_34954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34887 === (4))){
var inst_34851 = (state_34886[(7)]);
var inst_34851__$1 = (state_34886[(2)]);
var inst_34852 = (inst_34851__$1 == null);
var state_34886__$1 = (function (){var statearr_34891 = state_34886;
(statearr_34891[(7)] = inst_34851__$1);

return statearr_34891;
})();
if(cljs.core.truth_(inst_34852)){
var statearr_34892_34955 = state_34886__$1;
(statearr_34892_34955[(1)] = (5));

} else {
var statearr_34893_34956 = state_34886__$1;
(statearr_34893_34956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34887 === (15))){
var inst_34864 = (state_34886[(8)]);
var state_34886__$1 = state_34886;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34886__$1,(18),to,inst_34864);
} else {
if((state_val_34887 === (21))){
var inst_34877 = (state_34886[(2)]);
var state_34886__$1 = state_34886;
var statearr_34894_34957 = state_34886__$1;
(statearr_34894_34957[(2)] = inst_34877);

(statearr_34894_34957[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34887 === (13))){
var inst_34879 = (state_34886[(2)]);
var state_34886__$1 = (function (){var statearr_34895 = state_34886;
(statearr_34895[(9)] = inst_34879);

return statearr_34895;
})();
var statearr_34896_34958 = state_34886__$1;
(statearr_34896_34958[(2)] = null);

(statearr_34896_34958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34887 === (6))){
var inst_34851 = (state_34886[(7)]);
var state_34886__$1 = state_34886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34886__$1,(11),inst_34851);
} else {
if((state_val_34887 === (17))){
var inst_34872 = (state_34886[(2)]);
var state_34886__$1 = state_34886;
if(cljs.core.truth_(inst_34872)){
var statearr_34897_34959 = state_34886__$1;
(statearr_34897_34959[(1)] = (19));

} else {
var statearr_34898_34960 = state_34886__$1;
(statearr_34898_34960[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34887 === (3))){
var inst_34884 = (state_34886[(2)]);
var state_34886__$1 = state_34886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34886__$1,inst_34884);
} else {
if((state_val_34887 === (12))){
var inst_34861 = (state_34886[(10)]);
var state_34886__$1 = state_34886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34886__$1,(14),inst_34861);
} else {
if((state_val_34887 === (2))){
var state_34886__$1 = state_34886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34886__$1,(4),results);
} else {
if((state_val_34887 === (19))){
var state_34886__$1 = state_34886;
var statearr_34899_34961 = state_34886__$1;
(statearr_34899_34961[(2)] = null);

(statearr_34899_34961[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34887 === (11))){
var inst_34861 = (state_34886[(2)]);
var state_34886__$1 = (function (){var statearr_34900 = state_34886;
(statearr_34900[(10)] = inst_34861);

return statearr_34900;
})();
var statearr_34901_34962 = state_34886__$1;
(statearr_34901_34962[(2)] = null);

(statearr_34901_34962[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34887 === (9))){
var state_34886__$1 = state_34886;
var statearr_34902_34963 = state_34886__$1;
(statearr_34902_34963[(2)] = null);

(statearr_34902_34963[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34887 === (5))){
var state_34886__$1 = state_34886;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34903_34964 = state_34886__$1;
(statearr_34903_34964[(1)] = (8));

} else {
var statearr_34904_34965 = state_34886__$1;
(statearr_34904_34965[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34887 === (14))){
var inst_34866 = (state_34886[(11)]);
var inst_34864 = (state_34886[(8)]);
var inst_34864__$1 = (state_34886[(2)]);
var inst_34865 = (inst_34864__$1 == null);
var inst_34866__$1 = cljs.core.not.call(null,inst_34865);
var state_34886__$1 = (function (){var statearr_34905 = state_34886;
(statearr_34905[(11)] = inst_34866__$1);

(statearr_34905[(8)] = inst_34864__$1);

return statearr_34905;
})();
if(inst_34866__$1){
var statearr_34906_34966 = state_34886__$1;
(statearr_34906_34966[(1)] = (15));

} else {
var statearr_34907_34967 = state_34886__$1;
(statearr_34907_34967[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34887 === (16))){
var inst_34866 = (state_34886[(11)]);
var state_34886__$1 = state_34886;
var statearr_34908_34968 = state_34886__$1;
(statearr_34908_34968[(2)] = inst_34866);

(statearr_34908_34968[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34887 === (10))){
var inst_34858 = (state_34886[(2)]);
var state_34886__$1 = state_34886;
var statearr_34909_34969 = state_34886__$1;
(statearr_34909_34969[(2)] = inst_34858);

(statearr_34909_34969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34887 === (18))){
var inst_34869 = (state_34886[(2)]);
var state_34886__$1 = state_34886;
var statearr_34910_34970 = state_34886__$1;
(statearr_34910_34970[(2)] = inst_34869);

(statearr_34910_34970[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34887 === (8))){
var inst_34855 = cljs.core.async.close_BANG_.call(null,to);
var state_34886__$1 = state_34886;
var statearr_34911_34971 = state_34886__$1;
(statearr_34911_34971[(2)] = inst_34855);

(statearr_34911_34971[(1)] = (10));


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
}
}
}
}
});})(c__34580__auto__,jobs,results,process,async))
;
return ((function (switch__34525__auto__,c__34580__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34526__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34526__auto____0 = (function (){
var statearr_34912 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34912[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34526__auto__);

(statearr_34912[(1)] = (1));

return statearr_34912;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34526__auto____1 = (function (state_34886){
while(true){
var ret_value__34527__auto__ = (function (){try{while(true){
var result__34528__auto__ = switch__34525__auto__.call(null,state_34886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34528__auto__;
}
break;
}
}catch (e34913){if((e34913 instanceof Object)){
var ex__34529__auto__ = e34913;
var statearr_34914_34972 = state_34886;
(statearr_34914_34972[(5)] = ex__34529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34973 = state_34886;
state_34886 = G__34973;
continue;
} else {
return ret_value__34527__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34526__auto__ = function(state_34886){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34526__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34526__auto____1.call(this,state_34886);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34526__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34526__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34526__auto__;
})()
;})(switch__34525__auto__,c__34580__auto__,jobs,results,process,async))
})();
var state__34582__auto__ = (function (){var statearr_34915 = f__34581__auto__.call(null);
(statearr_34915[(6)] = c__34580__auto__);

return statearr_34915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34582__auto__);
});})(c__34580__auto__,jobs,results,process,async))
);

return c__34580__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__34975 = arguments.length;
switch (G__34975) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__34978 = arguments.length;
switch (G__34978) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__34981 = arguments.length;
switch (G__34981) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__34580__auto___35030 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34580__auto___35030,tc,fc){
return (function (){
var f__34581__auto__ = (function (){var switch__34525__auto__ = ((function (c__34580__auto___35030,tc,fc){
return (function (state_35007){
var state_val_35008 = (state_35007[(1)]);
if((state_val_35008 === (7))){
var inst_35003 = (state_35007[(2)]);
var state_35007__$1 = state_35007;
var statearr_35009_35031 = state_35007__$1;
(statearr_35009_35031[(2)] = inst_35003);

(statearr_35009_35031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (1))){
var state_35007__$1 = state_35007;
var statearr_35010_35032 = state_35007__$1;
(statearr_35010_35032[(2)] = null);

(statearr_35010_35032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (4))){
var inst_34984 = (state_35007[(7)]);
var inst_34984__$1 = (state_35007[(2)]);
var inst_34985 = (inst_34984__$1 == null);
var state_35007__$1 = (function (){var statearr_35011 = state_35007;
(statearr_35011[(7)] = inst_34984__$1);

return statearr_35011;
})();
if(cljs.core.truth_(inst_34985)){
var statearr_35012_35033 = state_35007__$1;
(statearr_35012_35033[(1)] = (5));

} else {
var statearr_35013_35034 = state_35007__$1;
(statearr_35013_35034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (13))){
var state_35007__$1 = state_35007;
var statearr_35014_35035 = state_35007__$1;
(statearr_35014_35035[(2)] = null);

(statearr_35014_35035[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (6))){
var inst_34984 = (state_35007[(7)]);
var inst_34990 = p.call(null,inst_34984);
var state_35007__$1 = state_35007;
if(cljs.core.truth_(inst_34990)){
var statearr_35015_35036 = state_35007__$1;
(statearr_35015_35036[(1)] = (9));

} else {
var statearr_35016_35037 = state_35007__$1;
(statearr_35016_35037[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (3))){
var inst_35005 = (state_35007[(2)]);
var state_35007__$1 = state_35007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35007__$1,inst_35005);
} else {
if((state_val_35008 === (12))){
var state_35007__$1 = state_35007;
var statearr_35017_35038 = state_35007__$1;
(statearr_35017_35038[(2)] = null);

(statearr_35017_35038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (2))){
var state_35007__$1 = state_35007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35007__$1,(4),ch);
} else {
if((state_val_35008 === (11))){
var inst_34984 = (state_35007[(7)]);
var inst_34994 = (state_35007[(2)]);
var state_35007__$1 = state_35007;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35007__$1,(8),inst_34994,inst_34984);
} else {
if((state_val_35008 === (9))){
var state_35007__$1 = state_35007;
var statearr_35018_35039 = state_35007__$1;
(statearr_35018_35039[(2)] = tc);

(statearr_35018_35039[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (5))){
var inst_34987 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34988 = cljs.core.async.close_BANG_.call(null,fc);
var state_35007__$1 = (function (){var statearr_35019 = state_35007;
(statearr_35019[(8)] = inst_34987);

return statearr_35019;
})();
var statearr_35020_35040 = state_35007__$1;
(statearr_35020_35040[(2)] = inst_34988);

(statearr_35020_35040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (14))){
var inst_35001 = (state_35007[(2)]);
var state_35007__$1 = state_35007;
var statearr_35021_35041 = state_35007__$1;
(statearr_35021_35041[(2)] = inst_35001);

(statearr_35021_35041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (10))){
var state_35007__$1 = state_35007;
var statearr_35022_35042 = state_35007__$1;
(statearr_35022_35042[(2)] = fc);

(statearr_35022_35042[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (8))){
var inst_34996 = (state_35007[(2)]);
var state_35007__$1 = state_35007;
if(cljs.core.truth_(inst_34996)){
var statearr_35023_35043 = state_35007__$1;
(statearr_35023_35043[(1)] = (12));

} else {
var statearr_35024_35044 = state_35007__$1;
(statearr_35024_35044[(1)] = (13));

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
});})(c__34580__auto___35030,tc,fc))
;
return ((function (switch__34525__auto__,c__34580__auto___35030,tc,fc){
return (function() {
var cljs$core$async$state_machine__34526__auto__ = null;
var cljs$core$async$state_machine__34526__auto____0 = (function (){
var statearr_35025 = [null,null,null,null,null,null,null,null,null];
(statearr_35025[(0)] = cljs$core$async$state_machine__34526__auto__);

(statearr_35025[(1)] = (1));

return statearr_35025;
});
var cljs$core$async$state_machine__34526__auto____1 = (function (state_35007){
while(true){
var ret_value__34527__auto__ = (function (){try{while(true){
var result__34528__auto__ = switch__34525__auto__.call(null,state_35007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34528__auto__;
}
break;
}
}catch (e35026){if((e35026 instanceof Object)){
var ex__34529__auto__ = e35026;
var statearr_35027_35045 = state_35007;
(statearr_35027_35045[(5)] = ex__34529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35046 = state_35007;
state_35007 = G__35046;
continue;
} else {
return ret_value__34527__auto__;
}
break;
}
});
cljs$core$async$state_machine__34526__auto__ = function(state_35007){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34526__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34526__auto____1.call(this,state_35007);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34526__auto____0;
cljs$core$async$state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34526__auto____1;
return cljs$core$async$state_machine__34526__auto__;
})()
;})(switch__34525__auto__,c__34580__auto___35030,tc,fc))
})();
var state__34582__auto__ = (function (){var statearr_35028 = f__34581__auto__.call(null);
(statearr_35028[(6)] = c__34580__auto___35030);

return statearr_35028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34582__auto__);
});})(c__34580__auto___35030,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__34580__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34580__auto__){
return (function (){
var f__34581__auto__ = (function (){var switch__34525__auto__ = ((function (c__34580__auto__){
return (function (state_35067){
var state_val_35068 = (state_35067[(1)]);
if((state_val_35068 === (7))){
var inst_35063 = (state_35067[(2)]);
var state_35067__$1 = state_35067;
var statearr_35069_35087 = state_35067__$1;
(statearr_35069_35087[(2)] = inst_35063);

(statearr_35069_35087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35068 === (1))){
var inst_35047 = init;
var state_35067__$1 = (function (){var statearr_35070 = state_35067;
(statearr_35070[(7)] = inst_35047);

return statearr_35070;
})();
var statearr_35071_35088 = state_35067__$1;
(statearr_35071_35088[(2)] = null);

(statearr_35071_35088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35068 === (4))){
var inst_35050 = (state_35067[(8)]);
var inst_35050__$1 = (state_35067[(2)]);
var inst_35051 = (inst_35050__$1 == null);
var state_35067__$1 = (function (){var statearr_35072 = state_35067;
(statearr_35072[(8)] = inst_35050__$1);

return statearr_35072;
})();
if(cljs.core.truth_(inst_35051)){
var statearr_35073_35089 = state_35067__$1;
(statearr_35073_35089[(1)] = (5));

} else {
var statearr_35074_35090 = state_35067__$1;
(statearr_35074_35090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35068 === (6))){
var inst_35047 = (state_35067[(7)]);
var inst_35054 = (state_35067[(9)]);
var inst_35050 = (state_35067[(8)]);
var inst_35054__$1 = f.call(null,inst_35047,inst_35050);
var inst_35055 = cljs.core.reduced_QMARK_.call(null,inst_35054__$1);
var state_35067__$1 = (function (){var statearr_35075 = state_35067;
(statearr_35075[(9)] = inst_35054__$1);

return statearr_35075;
})();
if(inst_35055){
var statearr_35076_35091 = state_35067__$1;
(statearr_35076_35091[(1)] = (8));

} else {
var statearr_35077_35092 = state_35067__$1;
(statearr_35077_35092[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35068 === (3))){
var inst_35065 = (state_35067[(2)]);
var state_35067__$1 = state_35067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35067__$1,inst_35065);
} else {
if((state_val_35068 === (2))){
var state_35067__$1 = state_35067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35067__$1,(4),ch);
} else {
if((state_val_35068 === (9))){
var inst_35054 = (state_35067[(9)]);
var inst_35047 = inst_35054;
var state_35067__$1 = (function (){var statearr_35078 = state_35067;
(statearr_35078[(7)] = inst_35047);

return statearr_35078;
})();
var statearr_35079_35093 = state_35067__$1;
(statearr_35079_35093[(2)] = null);

(statearr_35079_35093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35068 === (5))){
var inst_35047 = (state_35067[(7)]);
var state_35067__$1 = state_35067;
var statearr_35080_35094 = state_35067__$1;
(statearr_35080_35094[(2)] = inst_35047);

(statearr_35080_35094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35068 === (10))){
var inst_35061 = (state_35067[(2)]);
var state_35067__$1 = state_35067;
var statearr_35081_35095 = state_35067__$1;
(statearr_35081_35095[(2)] = inst_35061);

(statearr_35081_35095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35068 === (8))){
var inst_35054 = (state_35067[(9)]);
var inst_35057 = cljs.core.deref.call(null,inst_35054);
var state_35067__$1 = state_35067;
var statearr_35082_35096 = state_35067__$1;
(statearr_35082_35096[(2)] = inst_35057);

(statearr_35082_35096[(1)] = (10));


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
});})(c__34580__auto__))
;
return ((function (switch__34525__auto__,c__34580__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__34526__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34526__auto____0 = (function (){
var statearr_35083 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35083[(0)] = cljs$core$async$reduce_$_state_machine__34526__auto__);

(statearr_35083[(1)] = (1));

return statearr_35083;
});
var cljs$core$async$reduce_$_state_machine__34526__auto____1 = (function (state_35067){
while(true){
var ret_value__34527__auto__ = (function (){try{while(true){
var result__34528__auto__ = switch__34525__auto__.call(null,state_35067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34528__auto__;
}
break;
}
}catch (e35084){if((e35084 instanceof Object)){
var ex__34529__auto__ = e35084;
var statearr_35085_35097 = state_35067;
(statearr_35085_35097[(5)] = ex__34529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35098 = state_35067;
state_35067 = G__35098;
continue;
} else {
return ret_value__34527__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34526__auto__ = function(state_35067){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34526__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34526__auto____1.call(this,state_35067);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34526__auto____0;
cljs$core$async$reduce_$_state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34526__auto____1;
return cljs$core$async$reduce_$_state_machine__34526__auto__;
})()
;})(switch__34525__auto__,c__34580__auto__))
})();
var state__34582__auto__ = (function (){var statearr_35086 = f__34581__auto__.call(null);
(statearr_35086[(6)] = c__34580__auto__);

return statearr_35086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34582__auto__);
});})(c__34580__auto__))
);

return c__34580__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__34580__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34580__auto__,f__$1){
return (function (){
var f__34581__auto__ = (function (){var switch__34525__auto__ = ((function (c__34580__auto__,f__$1){
return (function (state_35104){
var state_val_35105 = (state_35104[(1)]);
if((state_val_35105 === (1))){
var inst_35099 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_35104__$1 = state_35104;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35104__$1,(2),inst_35099);
} else {
if((state_val_35105 === (2))){
var inst_35101 = (state_35104[(2)]);
var inst_35102 = f__$1.call(null,inst_35101);
var state_35104__$1 = state_35104;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35104__$1,inst_35102);
} else {
return null;
}
}
});})(c__34580__auto__,f__$1))
;
return ((function (switch__34525__auto__,c__34580__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__34526__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34526__auto____0 = (function (){
var statearr_35106 = [null,null,null,null,null,null,null];
(statearr_35106[(0)] = cljs$core$async$transduce_$_state_machine__34526__auto__);

(statearr_35106[(1)] = (1));

return statearr_35106;
});
var cljs$core$async$transduce_$_state_machine__34526__auto____1 = (function (state_35104){
while(true){
var ret_value__34527__auto__ = (function (){try{while(true){
var result__34528__auto__ = switch__34525__auto__.call(null,state_35104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34528__auto__;
}
break;
}
}catch (e35107){if((e35107 instanceof Object)){
var ex__34529__auto__ = e35107;
var statearr_35108_35110 = state_35104;
(statearr_35108_35110[(5)] = ex__34529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35111 = state_35104;
state_35104 = G__35111;
continue;
} else {
return ret_value__34527__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34526__auto__ = function(state_35104){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34526__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34526__auto____1.call(this,state_35104);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34526__auto____0;
cljs$core$async$transduce_$_state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34526__auto____1;
return cljs$core$async$transduce_$_state_machine__34526__auto__;
})()
;})(switch__34525__auto__,c__34580__auto__,f__$1))
})();
var state__34582__auto__ = (function (){var statearr_35109 = f__34581__auto__.call(null);
(statearr_35109[(6)] = c__34580__auto__);

return statearr_35109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34582__auto__);
});})(c__34580__auto__,f__$1))
);

return c__34580__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__35113 = arguments.length;
switch (G__35113) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__34580__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34580__auto__){
return (function (){
var f__34581__auto__ = (function (){var switch__34525__auto__ = ((function (c__34580__auto__){
return (function (state_35138){
var state_val_35139 = (state_35138[(1)]);
if((state_val_35139 === (7))){
var inst_35120 = (state_35138[(2)]);
var state_35138__$1 = state_35138;
var statearr_35140_35161 = state_35138__$1;
(statearr_35140_35161[(2)] = inst_35120);

(statearr_35140_35161[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35139 === (1))){
var inst_35114 = cljs.core.seq.call(null,coll);
var inst_35115 = inst_35114;
var state_35138__$1 = (function (){var statearr_35141 = state_35138;
(statearr_35141[(7)] = inst_35115);

return statearr_35141;
})();
var statearr_35142_35162 = state_35138__$1;
(statearr_35142_35162[(2)] = null);

(statearr_35142_35162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35139 === (4))){
var inst_35115 = (state_35138[(7)]);
var inst_35118 = cljs.core.first.call(null,inst_35115);
var state_35138__$1 = state_35138;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35138__$1,(7),ch,inst_35118);
} else {
if((state_val_35139 === (13))){
var inst_35132 = (state_35138[(2)]);
var state_35138__$1 = state_35138;
var statearr_35143_35163 = state_35138__$1;
(statearr_35143_35163[(2)] = inst_35132);

(statearr_35143_35163[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35139 === (6))){
var inst_35123 = (state_35138[(2)]);
var state_35138__$1 = state_35138;
if(cljs.core.truth_(inst_35123)){
var statearr_35144_35164 = state_35138__$1;
(statearr_35144_35164[(1)] = (8));

} else {
var statearr_35145_35165 = state_35138__$1;
(statearr_35145_35165[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35139 === (3))){
var inst_35136 = (state_35138[(2)]);
var state_35138__$1 = state_35138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35138__$1,inst_35136);
} else {
if((state_val_35139 === (12))){
var state_35138__$1 = state_35138;
var statearr_35146_35166 = state_35138__$1;
(statearr_35146_35166[(2)] = null);

(statearr_35146_35166[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35139 === (2))){
var inst_35115 = (state_35138[(7)]);
var state_35138__$1 = state_35138;
if(cljs.core.truth_(inst_35115)){
var statearr_35147_35167 = state_35138__$1;
(statearr_35147_35167[(1)] = (4));

} else {
var statearr_35148_35168 = state_35138__$1;
(statearr_35148_35168[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35139 === (11))){
var inst_35129 = cljs.core.async.close_BANG_.call(null,ch);
var state_35138__$1 = state_35138;
var statearr_35149_35169 = state_35138__$1;
(statearr_35149_35169[(2)] = inst_35129);

(statearr_35149_35169[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35139 === (9))){
var state_35138__$1 = state_35138;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35150_35170 = state_35138__$1;
(statearr_35150_35170[(1)] = (11));

} else {
var statearr_35151_35171 = state_35138__$1;
(statearr_35151_35171[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35139 === (5))){
var inst_35115 = (state_35138[(7)]);
var state_35138__$1 = state_35138;
var statearr_35152_35172 = state_35138__$1;
(statearr_35152_35172[(2)] = inst_35115);

(statearr_35152_35172[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35139 === (10))){
var inst_35134 = (state_35138[(2)]);
var state_35138__$1 = state_35138;
var statearr_35153_35173 = state_35138__$1;
(statearr_35153_35173[(2)] = inst_35134);

(statearr_35153_35173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35139 === (8))){
var inst_35115 = (state_35138[(7)]);
var inst_35125 = cljs.core.next.call(null,inst_35115);
var inst_35115__$1 = inst_35125;
var state_35138__$1 = (function (){var statearr_35154 = state_35138;
(statearr_35154[(7)] = inst_35115__$1);

return statearr_35154;
})();
var statearr_35155_35174 = state_35138__$1;
(statearr_35155_35174[(2)] = null);

(statearr_35155_35174[(1)] = (2));


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
});})(c__34580__auto__))
;
return ((function (switch__34525__auto__,c__34580__auto__){
return (function() {
var cljs$core$async$state_machine__34526__auto__ = null;
var cljs$core$async$state_machine__34526__auto____0 = (function (){
var statearr_35156 = [null,null,null,null,null,null,null,null];
(statearr_35156[(0)] = cljs$core$async$state_machine__34526__auto__);

(statearr_35156[(1)] = (1));

return statearr_35156;
});
var cljs$core$async$state_machine__34526__auto____1 = (function (state_35138){
while(true){
var ret_value__34527__auto__ = (function (){try{while(true){
var result__34528__auto__ = switch__34525__auto__.call(null,state_35138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34528__auto__;
}
break;
}
}catch (e35157){if((e35157 instanceof Object)){
var ex__34529__auto__ = e35157;
var statearr_35158_35175 = state_35138;
(statearr_35158_35175[(5)] = ex__34529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35176 = state_35138;
state_35138 = G__35176;
continue;
} else {
return ret_value__34527__auto__;
}
break;
}
});
cljs$core$async$state_machine__34526__auto__ = function(state_35138){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34526__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34526__auto____1.call(this,state_35138);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34526__auto____0;
cljs$core$async$state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34526__auto____1;
return cljs$core$async$state_machine__34526__auto__;
})()
;})(switch__34525__auto__,c__34580__auto__))
})();
var state__34582__auto__ = (function (){var statearr_35159 = f__34581__auto__.call(null);
(statearr_35159[(6)] = c__34580__auto__);

return statearr_35159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34582__auto__);
});})(c__34580__auto__))
);

return c__34580__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__30835__auto__ = (((_ == null))?null:_);
var m__30836__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__30835__auto__)]);
if(!((m__30836__auto__ == null))){
return m__30836__auto__.call(null,_);
} else {
var m__30836__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__30836__auto____$1 == null))){
return m__30836__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__30835__auto__ = (((m == null))?null:m);
var m__30836__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__30835__auto__)]);
if(!((m__30836__auto__ == null))){
return m__30836__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__30836__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__30836__auto____$1 == null))){
return m__30836__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__30835__auto__ = (((m == null))?null:m);
var m__30836__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__30835__auto__)]);
if(!((m__30836__auto__ == null))){
return m__30836__auto__.call(null,m,ch);
} else {
var m__30836__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__30836__auto____$1 == null))){
return m__30836__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__30835__auto__ = (((m == null))?null:m);
var m__30836__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__30835__auto__)]);
if(!((m__30836__auto__ == null))){
return m__30836__auto__.call(null,m);
} else {
var m__30836__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__30836__auto____$1 == null))){
return m__30836__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async35177 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35177 = (function (ch,cs,meta35178){
this.ch = ch;
this.cs = cs;
this.meta35178 = meta35178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35179,meta35178__$1){
var self__ = this;
var _35179__$1 = this;
return (new cljs.core.async.t_cljs$core$async35177(self__.ch,self__.cs,meta35178__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async35177.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35179){
var self__ = this;
var _35179__$1 = this;
return self__.meta35178;
});})(cs))
;

cljs.core.async.t_cljs$core$async35177.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35177.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async35177.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35177.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35177.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35177.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35177.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35178","meta35178",702728901,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async35177.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35177.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35177";

cljs.core.async.t_cljs$core$async35177.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30773__auto__,writer__30774__auto__,opt__30775__auto__){
return cljs.core._write.call(null,writer__30774__auto__,"cljs.core.async/t_cljs$core$async35177");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async35177 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async35177(ch__$1,cs__$1,meta35178){
return (new cljs.core.async.t_cljs$core$async35177(ch__$1,cs__$1,meta35178));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async35177(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__34580__auto___35399 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34580__auto___35399,cs,m,dchan,dctr,done){
return (function (){
var f__34581__auto__ = (function (){var switch__34525__auto__ = ((function (c__34580__auto___35399,cs,m,dchan,dctr,done){
return (function (state_35314){
var state_val_35315 = (state_35314[(1)]);
if((state_val_35315 === (7))){
var inst_35310 = (state_35314[(2)]);
var state_35314__$1 = state_35314;
var statearr_35316_35400 = state_35314__$1;
(statearr_35316_35400[(2)] = inst_35310);

(statearr_35316_35400[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (20))){
var inst_35213 = (state_35314[(7)]);
var inst_35225 = cljs.core.first.call(null,inst_35213);
var inst_35226 = cljs.core.nth.call(null,inst_35225,(0),null);
var inst_35227 = cljs.core.nth.call(null,inst_35225,(1),null);
var state_35314__$1 = (function (){var statearr_35317 = state_35314;
(statearr_35317[(8)] = inst_35226);

return statearr_35317;
})();
if(cljs.core.truth_(inst_35227)){
var statearr_35318_35401 = state_35314__$1;
(statearr_35318_35401[(1)] = (22));

} else {
var statearr_35319_35402 = state_35314__$1;
(statearr_35319_35402[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (27))){
var inst_35257 = (state_35314[(9)]);
var inst_35255 = (state_35314[(10)]);
var inst_35262 = (state_35314[(11)]);
var inst_35182 = (state_35314[(12)]);
var inst_35262__$1 = cljs.core._nth.call(null,inst_35255,inst_35257);
var inst_35263 = cljs.core.async.put_BANG_.call(null,inst_35262__$1,inst_35182,done);
var state_35314__$1 = (function (){var statearr_35320 = state_35314;
(statearr_35320[(11)] = inst_35262__$1);

return statearr_35320;
})();
if(cljs.core.truth_(inst_35263)){
var statearr_35321_35403 = state_35314__$1;
(statearr_35321_35403[(1)] = (30));

} else {
var statearr_35322_35404 = state_35314__$1;
(statearr_35322_35404[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (1))){
var state_35314__$1 = state_35314;
var statearr_35323_35405 = state_35314__$1;
(statearr_35323_35405[(2)] = null);

(statearr_35323_35405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (24))){
var inst_35213 = (state_35314[(7)]);
var inst_35232 = (state_35314[(2)]);
var inst_35233 = cljs.core.next.call(null,inst_35213);
var inst_35191 = inst_35233;
var inst_35192 = null;
var inst_35193 = (0);
var inst_35194 = (0);
var state_35314__$1 = (function (){var statearr_35324 = state_35314;
(statearr_35324[(13)] = inst_35193);

(statearr_35324[(14)] = inst_35232);

(statearr_35324[(15)] = inst_35191);

(statearr_35324[(16)] = inst_35192);

(statearr_35324[(17)] = inst_35194);

return statearr_35324;
})();
var statearr_35325_35406 = state_35314__$1;
(statearr_35325_35406[(2)] = null);

(statearr_35325_35406[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (39))){
var state_35314__$1 = state_35314;
var statearr_35329_35407 = state_35314__$1;
(statearr_35329_35407[(2)] = null);

(statearr_35329_35407[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (4))){
var inst_35182 = (state_35314[(12)]);
var inst_35182__$1 = (state_35314[(2)]);
var inst_35183 = (inst_35182__$1 == null);
var state_35314__$1 = (function (){var statearr_35330 = state_35314;
(statearr_35330[(12)] = inst_35182__$1);

return statearr_35330;
})();
if(cljs.core.truth_(inst_35183)){
var statearr_35331_35408 = state_35314__$1;
(statearr_35331_35408[(1)] = (5));

} else {
var statearr_35332_35409 = state_35314__$1;
(statearr_35332_35409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (15))){
var inst_35193 = (state_35314[(13)]);
var inst_35191 = (state_35314[(15)]);
var inst_35192 = (state_35314[(16)]);
var inst_35194 = (state_35314[(17)]);
var inst_35209 = (state_35314[(2)]);
var inst_35210 = (inst_35194 + (1));
var tmp35326 = inst_35193;
var tmp35327 = inst_35191;
var tmp35328 = inst_35192;
var inst_35191__$1 = tmp35327;
var inst_35192__$1 = tmp35328;
var inst_35193__$1 = tmp35326;
var inst_35194__$1 = inst_35210;
var state_35314__$1 = (function (){var statearr_35333 = state_35314;
(statearr_35333[(13)] = inst_35193__$1);

(statearr_35333[(15)] = inst_35191__$1);

(statearr_35333[(18)] = inst_35209);

(statearr_35333[(16)] = inst_35192__$1);

(statearr_35333[(17)] = inst_35194__$1);

return statearr_35333;
})();
var statearr_35334_35410 = state_35314__$1;
(statearr_35334_35410[(2)] = null);

(statearr_35334_35410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (21))){
var inst_35236 = (state_35314[(2)]);
var state_35314__$1 = state_35314;
var statearr_35338_35411 = state_35314__$1;
(statearr_35338_35411[(2)] = inst_35236);

(statearr_35338_35411[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (31))){
var inst_35262 = (state_35314[(11)]);
var inst_35266 = done.call(null,null);
var inst_35267 = cljs.core.async.untap_STAR_.call(null,m,inst_35262);
var state_35314__$1 = (function (){var statearr_35339 = state_35314;
(statearr_35339[(19)] = inst_35266);

return statearr_35339;
})();
var statearr_35340_35412 = state_35314__$1;
(statearr_35340_35412[(2)] = inst_35267);

(statearr_35340_35412[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (32))){
var inst_35257 = (state_35314[(9)]);
var inst_35255 = (state_35314[(10)]);
var inst_35256 = (state_35314[(20)]);
var inst_35254 = (state_35314[(21)]);
var inst_35269 = (state_35314[(2)]);
var inst_35270 = (inst_35257 + (1));
var tmp35335 = inst_35255;
var tmp35336 = inst_35256;
var tmp35337 = inst_35254;
var inst_35254__$1 = tmp35337;
var inst_35255__$1 = tmp35335;
var inst_35256__$1 = tmp35336;
var inst_35257__$1 = inst_35270;
var state_35314__$1 = (function (){var statearr_35341 = state_35314;
(statearr_35341[(9)] = inst_35257__$1);

(statearr_35341[(10)] = inst_35255__$1);

(statearr_35341[(20)] = inst_35256__$1);

(statearr_35341[(21)] = inst_35254__$1);

(statearr_35341[(22)] = inst_35269);

return statearr_35341;
})();
var statearr_35342_35413 = state_35314__$1;
(statearr_35342_35413[(2)] = null);

(statearr_35342_35413[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (40))){
var inst_35282 = (state_35314[(23)]);
var inst_35286 = done.call(null,null);
var inst_35287 = cljs.core.async.untap_STAR_.call(null,m,inst_35282);
var state_35314__$1 = (function (){var statearr_35343 = state_35314;
(statearr_35343[(24)] = inst_35286);

return statearr_35343;
})();
var statearr_35344_35414 = state_35314__$1;
(statearr_35344_35414[(2)] = inst_35287);

(statearr_35344_35414[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (33))){
var inst_35273 = (state_35314[(25)]);
var inst_35275 = cljs.core.chunked_seq_QMARK_.call(null,inst_35273);
var state_35314__$1 = state_35314;
if(inst_35275){
var statearr_35345_35415 = state_35314__$1;
(statearr_35345_35415[(1)] = (36));

} else {
var statearr_35346_35416 = state_35314__$1;
(statearr_35346_35416[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (13))){
var inst_35203 = (state_35314[(26)]);
var inst_35206 = cljs.core.async.close_BANG_.call(null,inst_35203);
var state_35314__$1 = state_35314;
var statearr_35347_35417 = state_35314__$1;
(statearr_35347_35417[(2)] = inst_35206);

(statearr_35347_35417[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (22))){
var inst_35226 = (state_35314[(8)]);
var inst_35229 = cljs.core.async.close_BANG_.call(null,inst_35226);
var state_35314__$1 = state_35314;
var statearr_35348_35418 = state_35314__$1;
(statearr_35348_35418[(2)] = inst_35229);

(statearr_35348_35418[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (36))){
var inst_35273 = (state_35314[(25)]);
var inst_35277 = cljs.core.chunk_first.call(null,inst_35273);
var inst_35278 = cljs.core.chunk_rest.call(null,inst_35273);
var inst_35279 = cljs.core.count.call(null,inst_35277);
var inst_35254 = inst_35278;
var inst_35255 = inst_35277;
var inst_35256 = inst_35279;
var inst_35257 = (0);
var state_35314__$1 = (function (){var statearr_35349 = state_35314;
(statearr_35349[(9)] = inst_35257);

(statearr_35349[(10)] = inst_35255);

(statearr_35349[(20)] = inst_35256);

(statearr_35349[(21)] = inst_35254);

return statearr_35349;
})();
var statearr_35350_35419 = state_35314__$1;
(statearr_35350_35419[(2)] = null);

(statearr_35350_35419[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (41))){
var inst_35273 = (state_35314[(25)]);
var inst_35289 = (state_35314[(2)]);
var inst_35290 = cljs.core.next.call(null,inst_35273);
var inst_35254 = inst_35290;
var inst_35255 = null;
var inst_35256 = (0);
var inst_35257 = (0);
var state_35314__$1 = (function (){var statearr_35351 = state_35314;
(statearr_35351[(9)] = inst_35257);

(statearr_35351[(10)] = inst_35255);

(statearr_35351[(27)] = inst_35289);

(statearr_35351[(20)] = inst_35256);

(statearr_35351[(21)] = inst_35254);

return statearr_35351;
})();
var statearr_35352_35420 = state_35314__$1;
(statearr_35352_35420[(2)] = null);

(statearr_35352_35420[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (43))){
var state_35314__$1 = state_35314;
var statearr_35353_35421 = state_35314__$1;
(statearr_35353_35421[(2)] = null);

(statearr_35353_35421[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (29))){
var inst_35298 = (state_35314[(2)]);
var state_35314__$1 = state_35314;
var statearr_35354_35422 = state_35314__$1;
(statearr_35354_35422[(2)] = inst_35298);

(statearr_35354_35422[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (44))){
var inst_35307 = (state_35314[(2)]);
var state_35314__$1 = (function (){var statearr_35355 = state_35314;
(statearr_35355[(28)] = inst_35307);

return statearr_35355;
})();
var statearr_35356_35423 = state_35314__$1;
(statearr_35356_35423[(2)] = null);

(statearr_35356_35423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (6))){
var inst_35246 = (state_35314[(29)]);
var inst_35245 = cljs.core.deref.call(null,cs);
var inst_35246__$1 = cljs.core.keys.call(null,inst_35245);
var inst_35247 = cljs.core.count.call(null,inst_35246__$1);
var inst_35248 = cljs.core.reset_BANG_.call(null,dctr,inst_35247);
var inst_35253 = cljs.core.seq.call(null,inst_35246__$1);
var inst_35254 = inst_35253;
var inst_35255 = null;
var inst_35256 = (0);
var inst_35257 = (0);
var state_35314__$1 = (function (){var statearr_35357 = state_35314;
(statearr_35357[(9)] = inst_35257);

(statearr_35357[(10)] = inst_35255);

(statearr_35357[(20)] = inst_35256);

(statearr_35357[(21)] = inst_35254);

(statearr_35357[(29)] = inst_35246__$1);

(statearr_35357[(30)] = inst_35248);

return statearr_35357;
})();
var statearr_35358_35424 = state_35314__$1;
(statearr_35358_35424[(2)] = null);

(statearr_35358_35424[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (28))){
var inst_35273 = (state_35314[(25)]);
var inst_35254 = (state_35314[(21)]);
var inst_35273__$1 = cljs.core.seq.call(null,inst_35254);
var state_35314__$1 = (function (){var statearr_35359 = state_35314;
(statearr_35359[(25)] = inst_35273__$1);

return statearr_35359;
})();
if(inst_35273__$1){
var statearr_35360_35425 = state_35314__$1;
(statearr_35360_35425[(1)] = (33));

} else {
var statearr_35361_35426 = state_35314__$1;
(statearr_35361_35426[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (25))){
var inst_35257 = (state_35314[(9)]);
var inst_35256 = (state_35314[(20)]);
var inst_35259 = (inst_35257 < inst_35256);
var inst_35260 = inst_35259;
var state_35314__$1 = state_35314;
if(cljs.core.truth_(inst_35260)){
var statearr_35362_35427 = state_35314__$1;
(statearr_35362_35427[(1)] = (27));

} else {
var statearr_35363_35428 = state_35314__$1;
(statearr_35363_35428[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (34))){
var state_35314__$1 = state_35314;
var statearr_35364_35429 = state_35314__$1;
(statearr_35364_35429[(2)] = null);

(statearr_35364_35429[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (17))){
var state_35314__$1 = state_35314;
var statearr_35365_35430 = state_35314__$1;
(statearr_35365_35430[(2)] = null);

(statearr_35365_35430[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (3))){
var inst_35312 = (state_35314[(2)]);
var state_35314__$1 = state_35314;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35314__$1,inst_35312);
} else {
if((state_val_35315 === (12))){
var inst_35241 = (state_35314[(2)]);
var state_35314__$1 = state_35314;
var statearr_35366_35431 = state_35314__$1;
(statearr_35366_35431[(2)] = inst_35241);

(statearr_35366_35431[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (2))){
var state_35314__$1 = state_35314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35314__$1,(4),ch);
} else {
if((state_val_35315 === (23))){
var state_35314__$1 = state_35314;
var statearr_35367_35432 = state_35314__$1;
(statearr_35367_35432[(2)] = null);

(statearr_35367_35432[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (35))){
var inst_35296 = (state_35314[(2)]);
var state_35314__$1 = state_35314;
var statearr_35368_35433 = state_35314__$1;
(statearr_35368_35433[(2)] = inst_35296);

(statearr_35368_35433[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (19))){
var inst_35213 = (state_35314[(7)]);
var inst_35217 = cljs.core.chunk_first.call(null,inst_35213);
var inst_35218 = cljs.core.chunk_rest.call(null,inst_35213);
var inst_35219 = cljs.core.count.call(null,inst_35217);
var inst_35191 = inst_35218;
var inst_35192 = inst_35217;
var inst_35193 = inst_35219;
var inst_35194 = (0);
var state_35314__$1 = (function (){var statearr_35369 = state_35314;
(statearr_35369[(13)] = inst_35193);

(statearr_35369[(15)] = inst_35191);

(statearr_35369[(16)] = inst_35192);

(statearr_35369[(17)] = inst_35194);

return statearr_35369;
})();
var statearr_35370_35434 = state_35314__$1;
(statearr_35370_35434[(2)] = null);

(statearr_35370_35434[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (11))){
var inst_35191 = (state_35314[(15)]);
var inst_35213 = (state_35314[(7)]);
var inst_35213__$1 = cljs.core.seq.call(null,inst_35191);
var state_35314__$1 = (function (){var statearr_35371 = state_35314;
(statearr_35371[(7)] = inst_35213__$1);

return statearr_35371;
})();
if(inst_35213__$1){
var statearr_35372_35435 = state_35314__$1;
(statearr_35372_35435[(1)] = (16));

} else {
var statearr_35373_35436 = state_35314__$1;
(statearr_35373_35436[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (9))){
var inst_35243 = (state_35314[(2)]);
var state_35314__$1 = state_35314;
var statearr_35374_35437 = state_35314__$1;
(statearr_35374_35437[(2)] = inst_35243);

(statearr_35374_35437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (5))){
var inst_35189 = cljs.core.deref.call(null,cs);
var inst_35190 = cljs.core.seq.call(null,inst_35189);
var inst_35191 = inst_35190;
var inst_35192 = null;
var inst_35193 = (0);
var inst_35194 = (0);
var state_35314__$1 = (function (){var statearr_35375 = state_35314;
(statearr_35375[(13)] = inst_35193);

(statearr_35375[(15)] = inst_35191);

(statearr_35375[(16)] = inst_35192);

(statearr_35375[(17)] = inst_35194);

return statearr_35375;
})();
var statearr_35376_35438 = state_35314__$1;
(statearr_35376_35438[(2)] = null);

(statearr_35376_35438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (14))){
var state_35314__$1 = state_35314;
var statearr_35377_35439 = state_35314__$1;
(statearr_35377_35439[(2)] = null);

(statearr_35377_35439[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (45))){
var inst_35304 = (state_35314[(2)]);
var state_35314__$1 = state_35314;
var statearr_35378_35440 = state_35314__$1;
(statearr_35378_35440[(2)] = inst_35304);

(statearr_35378_35440[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (26))){
var inst_35246 = (state_35314[(29)]);
var inst_35300 = (state_35314[(2)]);
var inst_35301 = cljs.core.seq.call(null,inst_35246);
var state_35314__$1 = (function (){var statearr_35379 = state_35314;
(statearr_35379[(31)] = inst_35300);

return statearr_35379;
})();
if(inst_35301){
var statearr_35380_35441 = state_35314__$1;
(statearr_35380_35441[(1)] = (42));

} else {
var statearr_35381_35442 = state_35314__$1;
(statearr_35381_35442[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (16))){
var inst_35213 = (state_35314[(7)]);
var inst_35215 = cljs.core.chunked_seq_QMARK_.call(null,inst_35213);
var state_35314__$1 = state_35314;
if(inst_35215){
var statearr_35382_35443 = state_35314__$1;
(statearr_35382_35443[(1)] = (19));

} else {
var statearr_35383_35444 = state_35314__$1;
(statearr_35383_35444[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (38))){
var inst_35293 = (state_35314[(2)]);
var state_35314__$1 = state_35314;
var statearr_35384_35445 = state_35314__$1;
(statearr_35384_35445[(2)] = inst_35293);

(statearr_35384_35445[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (30))){
var state_35314__$1 = state_35314;
var statearr_35385_35446 = state_35314__$1;
(statearr_35385_35446[(2)] = null);

(statearr_35385_35446[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (10))){
var inst_35192 = (state_35314[(16)]);
var inst_35194 = (state_35314[(17)]);
var inst_35202 = cljs.core._nth.call(null,inst_35192,inst_35194);
var inst_35203 = cljs.core.nth.call(null,inst_35202,(0),null);
var inst_35204 = cljs.core.nth.call(null,inst_35202,(1),null);
var state_35314__$1 = (function (){var statearr_35386 = state_35314;
(statearr_35386[(26)] = inst_35203);

return statearr_35386;
})();
if(cljs.core.truth_(inst_35204)){
var statearr_35387_35447 = state_35314__$1;
(statearr_35387_35447[(1)] = (13));

} else {
var statearr_35388_35448 = state_35314__$1;
(statearr_35388_35448[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (18))){
var inst_35239 = (state_35314[(2)]);
var state_35314__$1 = state_35314;
var statearr_35389_35449 = state_35314__$1;
(statearr_35389_35449[(2)] = inst_35239);

(statearr_35389_35449[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (42))){
var state_35314__$1 = state_35314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35314__$1,(45),dchan);
} else {
if((state_val_35315 === (37))){
var inst_35273 = (state_35314[(25)]);
var inst_35282 = (state_35314[(23)]);
var inst_35182 = (state_35314[(12)]);
var inst_35282__$1 = cljs.core.first.call(null,inst_35273);
var inst_35283 = cljs.core.async.put_BANG_.call(null,inst_35282__$1,inst_35182,done);
var state_35314__$1 = (function (){var statearr_35390 = state_35314;
(statearr_35390[(23)] = inst_35282__$1);

return statearr_35390;
})();
if(cljs.core.truth_(inst_35283)){
var statearr_35391_35450 = state_35314__$1;
(statearr_35391_35450[(1)] = (39));

} else {
var statearr_35392_35451 = state_35314__$1;
(statearr_35392_35451[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (8))){
var inst_35193 = (state_35314[(13)]);
var inst_35194 = (state_35314[(17)]);
var inst_35196 = (inst_35194 < inst_35193);
var inst_35197 = inst_35196;
var state_35314__$1 = state_35314;
if(cljs.core.truth_(inst_35197)){
var statearr_35393_35452 = state_35314__$1;
(statearr_35393_35452[(1)] = (10));

} else {
var statearr_35394_35453 = state_35314__$1;
(statearr_35394_35453[(1)] = (11));

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
});})(c__34580__auto___35399,cs,m,dchan,dctr,done))
;
return ((function (switch__34525__auto__,c__34580__auto___35399,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__34526__auto__ = null;
var cljs$core$async$mult_$_state_machine__34526__auto____0 = (function (){
var statearr_35395 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35395[(0)] = cljs$core$async$mult_$_state_machine__34526__auto__);

(statearr_35395[(1)] = (1));

return statearr_35395;
});
var cljs$core$async$mult_$_state_machine__34526__auto____1 = (function (state_35314){
while(true){
var ret_value__34527__auto__ = (function (){try{while(true){
var result__34528__auto__ = switch__34525__auto__.call(null,state_35314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34528__auto__;
}
break;
}
}catch (e35396){if((e35396 instanceof Object)){
var ex__34529__auto__ = e35396;
var statearr_35397_35454 = state_35314;
(statearr_35397_35454[(5)] = ex__34529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35455 = state_35314;
state_35314 = G__35455;
continue;
} else {
return ret_value__34527__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34526__auto__ = function(state_35314){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34526__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34526__auto____1.call(this,state_35314);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34526__auto____0;
cljs$core$async$mult_$_state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34526__auto____1;
return cljs$core$async$mult_$_state_machine__34526__auto__;
})()
;})(switch__34525__auto__,c__34580__auto___35399,cs,m,dchan,dctr,done))
})();
var state__34582__auto__ = (function (){var statearr_35398 = f__34581__auto__.call(null);
(statearr_35398[(6)] = c__34580__auto___35399);

return statearr_35398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34582__auto__);
});})(c__34580__auto___35399,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__35457 = arguments.length;
switch (G__35457) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__30835__auto__ = (((m == null))?null:m);
var m__30836__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__30835__auto__)]);
if(!((m__30836__auto__ == null))){
return m__30836__auto__.call(null,m,ch);
} else {
var m__30836__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__30836__auto____$1 == null))){
return m__30836__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__30835__auto__ = (((m == null))?null:m);
var m__30836__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__30835__auto__)]);
if(!((m__30836__auto__ == null))){
return m__30836__auto__.call(null,m,ch);
} else {
var m__30836__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__30836__auto____$1 == null))){
return m__30836__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__30835__auto__ = (((m == null))?null:m);
var m__30836__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__30835__auto__)]);
if(!((m__30836__auto__ == null))){
return m__30836__auto__.call(null,m);
} else {
var m__30836__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__30836__auto____$1 == null))){
return m__30836__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__30835__auto__ = (((m == null))?null:m);
var m__30836__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__30835__auto__)]);
if(!((m__30836__auto__ == null))){
return m__30836__auto__.call(null,m,state_map);
} else {
var m__30836__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__30836__auto____$1 == null))){
return m__30836__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__30835__auto__ = (((m == null))?null:m);
var m__30836__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__30835__auto__)]);
if(!((m__30836__auto__ == null))){
return m__30836__auto__.call(null,m,mode);
} else {
var m__30836__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__30836__auto____$1 == null))){
return m__30836__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__31388__auto__ = [];
var len__31381__auto___35469 = arguments.length;
var i__31382__auto___35470 = (0);
while(true){
if((i__31382__auto___35470 < len__31381__auto___35469)){
args__31388__auto__.push((arguments[i__31382__auto___35470]));

var G__35471 = (i__31382__auto___35470 + (1));
i__31382__auto___35470 = G__35471;
continue;
} else {
}
break;
}

var argseq__31389__auto__ = ((((3) < args__31388__auto__.length))?(new cljs.core.IndexedSeq(args__31388__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31389__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35463){
var map__35464 = p__35463;
var map__35464__$1 = ((((!((map__35464 == null)))?((((map__35464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35464.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35464):map__35464);
var opts = map__35464__$1;
var statearr_35466_35472 = state;
(statearr_35466_35472[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__35464,map__35464__$1,opts){
return (function (val){
var statearr_35467_35473 = state;
(statearr_35467_35473[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__35464,map__35464__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_35468_35474 = state;
(statearr_35468_35474[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35459){
var G__35460 = cljs.core.first.call(null,seq35459);
var seq35459__$1 = cljs.core.next.call(null,seq35459);
var G__35461 = cljs.core.first.call(null,seq35459__$1);
var seq35459__$2 = cljs.core.next.call(null,seq35459__$1);
var G__35462 = cljs.core.first.call(null,seq35459__$2);
var seq35459__$3 = cljs.core.next.call(null,seq35459__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35460,G__35461,G__35462,seq35459__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async35475 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35475 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta35476){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta35476 = meta35476;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35477,meta35476__$1){
var self__ = this;
var _35477__$1 = this;
return (new cljs.core.async.t_cljs$core$async35475(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta35476__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35475.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35477){
var self__ = this;
var _35477__$1 = this;
return self__.meta35476;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35475.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35475.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35475.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35475.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35475.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35475.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35475.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35475.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35475.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta35476","meta35476",1766169602,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35475.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35475.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35475";

cljs.core.async.t_cljs$core$async35475.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30773__auto__,writer__30774__auto__,opt__30775__auto__){
return cljs.core._write.call(null,writer__30774__auto__,"cljs.core.async/t_cljs$core$async35475");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async35475 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async35475(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35476){
return (new cljs.core.async.t_cljs$core$async35475(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35476));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async35475(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34580__auto___35639 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34580__auto___35639,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__34581__auto__ = (function (){var switch__34525__auto__ = ((function (c__34580__auto___35639,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35579){
var state_val_35580 = (state_35579[(1)]);
if((state_val_35580 === (7))){
var inst_35494 = (state_35579[(2)]);
var state_35579__$1 = state_35579;
var statearr_35581_35640 = state_35579__$1;
(statearr_35581_35640[(2)] = inst_35494);

(statearr_35581_35640[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35580 === (20))){
var inst_35506 = (state_35579[(7)]);
var state_35579__$1 = state_35579;
var statearr_35582_35641 = state_35579__$1;
(statearr_35582_35641[(2)] = inst_35506);

(statearr_35582_35641[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35580 === (27))){
var state_35579__$1 = state_35579;
var statearr_35583_35642 = state_35579__$1;
(statearr_35583_35642[(2)] = null);

(statearr_35583_35642[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35580 === (1))){
var inst_35481 = (state_35579[(8)]);
var inst_35481__$1 = calc_state.call(null);
var inst_35483 = (inst_35481__$1 == null);
var inst_35484 = cljs.core.not.call(null,inst_35483);
var state_35579__$1 = (function (){var statearr_35584 = state_35579;
(statearr_35584[(8)] = inst_35481__$1);

return statearr_35584;
})();
if(inst_35484){
var statearr_35585_35643 = state_35579__$1;
(statearr_35585_35643[(1)] = (2));

} else {
var statearr_35586_35644 = state_35579__$1;
(statearr_35586_35644[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35580 === (24))){
var inst_35539 = (state_35579[(9)]);
var inst_35530 = (state_35579[(10)]);
var inst_35553 = (state_35579[(11)]);
var inst_35553__$1 = inst_35530.call(null,inst_35539);
var state_35579__$1 = (function (){var statearr_35587 = state_35579;
(statearr_35587[(11)] = inst_35553__$1);

return statearr_35587;
})();
if(cljs.core.truth_(inst_35553__$1)){
var statearr_35588_35645 = state_35579__$1;
(statearr_35588_35645[(1)] = (29));

} else {
var statearr_35589_35646 = state_35579__$1;
(statearr_35589_35646[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35580 === (4))){
var inst_35497 = (state_35579[(2)]);
var state_35579__$1 = state_35579;
if(cljs.core.truth_(inst_35497)){
var statearr_35590_35647 = state_35579__$1;
(statearr_35590_35647[(1)] = (8));

} else {
var statearr_35591_35648 = state_35579__$1;
(statearr_35591_35648[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35580 === (15))){
var inst_35524 = (state_35579[(2)]);
var state_35579__$1 = state_35579;
if(cljs.core.truth_(inst_35524)){
var statearr_35592_35649 = state_35579__$1;
(statearr_35592_35649[(1)] = (19));

} else {
var statearr_35593_35650 = state_35579__$1;
(statearr_35593_35650[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35580 === (21))){
var inst_35529 = (state_35579[(12)]);
var inst_35529__$1 = (state_35579[(2)]);
var inst_35530 = cljs.core.get.call(null,inst_35529__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35531 = cljs.core.get.call(null,inst_35529__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35532 = cljs.core.get.call(null,inst_35529__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35579__$1 = (function (){var statearr_35594 = state_35579;
(statearr_35594[(13)] = inst_35531);

(statearr_35594[(12)] = inst_35529__$1);

(statearr_35594[(10)] = inst_35530);

return statearr_35594;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_35579__$1,(22),inst_35532);
} else {
if((state_val_35580 === (31))){
var inst_35561 = (state_35579[(2)]);
var state_35579__$1 = state_35579;
if(cljs.core.truth_(inst_35561)){
var statearr_35595_35651 = state_35579__$1;
(statearr_35595_35651[(1)] = (32));

} else {
var statearr_35596_35652 = state_35579__$1;
(statearr_35596_35652[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35580 === (32))){
var inst_35538 = (state_35579[(14)]);
var state_35579__$1 = state_35579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35579__$1,(35),out,inst_35538);
} else {
if((state_val_35580 === (33))){
var inst_35529 = (state_35579[(12)]);
var inst_35506 = inst_35529;
var state_35579__$1 = (function (){var statearr_35597 = state_35579;
(statearr_35597[(7)] = inst_35506);

return statearr_35597;
})();
var statearr_35598_35653 = state_35579__$1;
(statearr_35598_35653[(2)] = null);

(statearr_35598_35653[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35580 === (13))){
var inst_35506 = (state_35579[(7)]);
var inst_35513 = inst_35506.cljs$lang$protocol_mask$partition0$;
var inst_35514 = (inst_35513 & (64));
var inst_35515 = inst_35506.cljs$core$ISeq$;
var inst_35516 = (cljs.core.PROTOCOL_SENTINEL === inst_35515);
var inst_35517 = (inst_35514) || (inst_35516);
var state_35579__$1 = state_35579;
if(cljs.core.truth_(inst_35517)){
var statearr_35599_35654 = state_35579__$1;
(statearr_35599_35654[(1)] = (16));

} else {
var statearr_35600_35655 = state_35579__$1;
(statearr_35600_35655[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35580 === (22))){
var inst_35539 = (state_35579[(9)]);
var inst_35538 = (state_35579[(14)]);
var inst_35537 = (state_35579[(2)]);
var inst_35538__$1 = cljs.core.nth.call(null,inst_35537,(0),null);
var inst_35539__$1 = cljs.core.nth.call(null,inst_35537,(1),null);
var inst_35540 = (inst_35538__$1 == null);
var inst_35541 = cljs.core._EQ_.call(null,inst_35539__$1,change);
var inst_35542 = (inst_35540) || (inst_35541);
var state_35579__$1 = (function (){var statearr_35601 = state_35579;
(statearr_35601[(9)] = inst_35539__$1);

(statearr_35601[(14)] = inst_35538__$1);

return statearr_35601;
})();
if(cljs.core.truth_(inst_35542)){
var statearr_35602_35656 = state_35579__$1;
(statearr_35602_35656[(1)] = (23));

} else {
var statearr_35603_35657 = state_35579__$1;
(statearr_35603_35657[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35580 === (36))){
var inst_35529 = (state_35579[(12)]);
var inst_35506 = inst_35529;
var state_35579__$1 = (function (){var statearr_35604 = state_35579;
(statearr_35604[(7)] = inst_35506);

return statearr_35604;
})();
var statearr_35605_35658 = state_35579__$1;
(statearr_35605_35658[(2)] = null);

(statearr_35605_35658[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35580 === (29))){
var inst_35553 = (state_35579[(11)]);
var state_35579__$1 = state_35579;
var statearr_35606_35659 = state_35579__$1;
(statearr_35606_35659[(2)] = inst_35553);

(statearr_35606_35659[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35580 === (6))){
var state_35579__$1 = state_35579;
var statearr_35607_35660 = state_35579__$1;
(statearr_35607_35660[(2)] = false);

(statearr_35607_35660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35580 === (28))){
var inst_35549 = (state_35579[(2)]);
var inst_35550 = calc_state.call(null);
var inst_35506 = inst_35550;
var state_35579__$1 = (function (){var statearr_35608 = state_35579;
(statearr_35608[(7)] = inst_35506);

(statearr_35608[(15)] = inst_35549);

return statearr_35608;
})();
var statearr_35609_35661 = state_35579__$1;
(statearr_35609_35661[(2)] = null);

(statearr_35609_35661[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35580 === (25))){
var inst_35575 = (state_35579[(2)]);
var state_35579__$1 = state_35579;
var statearr_35610_35662 = state_35579__$1;
(statearr_35610_35662[(2)] = inst_35575);

(statearr_35610_35662[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35580 === (34))){
var inst_35573 = (state_35579[(2)]);
var state_35579__$1 = state_35579;
var statearr_35611_35663 = state_35579__$1;
(statearr_35611_35663[(2)] = inst_35573);

(statearr_35611_35663[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35580 === (17))){
var state_35579__$1 = state_35579;
var statearr_35612_35664 = state_35579__$1;
(statearr_35612_35664[(2)] = false);

(statearr_35612_35664[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35580 === (3))){
var state_35579__$1 = state_35579;
var statearr_35613_35665 = state_35579__$1;
(statearr_35613_35665[(2)] = false);

(statearr_35613_35665[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35580 === (12))){
var inst_35577 = (state_35579[(2)]);
var state_35579__$1 = state_35579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35579__$1,inst_35577);
} else {
if((state_val_35580 === (2))){
var inst_35481 = (state_35579[(8)]);
var inst_35486 = inst_35481.cljs$lang$protocol_mask$partition0$;
var inst_35487 = (inst_35486 & (64));
var inst_35488 = inst_35481.cljs$core$ISeq$;
var inst_35489 = (cljs.core.PROTOCOL_SENTINEL === inst_35488);
var inst_35490 = (inst_35487) || (inst_35489);
var state_35579__$1 = state_35579;
if(cljs.core.truth_(inst_35490)){
var statearr_35614_35666 = state_35579__$1;
(statearr_35614_35666[(1)] = (5));

} else {
var statearr_35615_35667 = state_35579__$1;
(statearr_35615_35667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35580 === (23))){
var inst_35538 = (state_35579[(14)]);
var inst_35544 = (inst_35538 == null);
var state_35579__$1 = state_35579;
if(cljs.core.truth_(inst_35544)){
var statearr_35616_35668 = state_35579__$1;
(statearr_35616_35668[(1)] = (26));

} else {
var statearr_35617_35669 = state_35579__$1;
(statearr_35617_35669[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35580 === (35))){
var inst_35564 = (state_35579[(2)]);
var state_35579__$1 = state_35579;
if(cljs.core.truth_(inst_35564)){
var statearr_35618_35670 = state_35579__$1;
(statearr_35618_35670[(1)] = (36));

} else {
var statearr_35619_35671 = state_35579__$1;
(statearr_35619_35671[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35580 === (19))){
var inst_35506 = (state_35579[(7)]);
var inst_35526 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35506);
var state_35579__$1 = state_35579;
var statearr_35620_35672 = state_35579__$1;
(statearr_35620_35672[(2)] = inst_35526);

(statearr_35620_35672[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35580 === (11))){
var inst_35506 = (state_35579[(7)]);
var inst_35510 = (inst_35506 == null);
var inst_35511 = cljs.core.not.call(null,inst_35510);
var state_35579__$1 = state_35579;
if(inst_35511){
var statearr_35621_35673 = state_35579__$1;
(statearr_35621_35673[(1)] = (13));

} else {
var statearr_35622_35674 = state_35579__$1;
(statearr_35622_35674[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35580 === (9))){
var inst_35481 = (state_35579[(8)]);
var state_35579__$1 = state_35579;
var statearr_35623_35675 = state_35579__$1;
(statearr_35623_35675[(2)] = inst_35481);

(statearr_35623_35675[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35580 === (5))){
var state_35579__$1 = state_35579;
var statearr_35624_35676 = state_35579__$1;
(statearr_35624_35676[(2)] = true);

(statearr_35624_35676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35580 === (14))){
var state_35579__$1 = state_35579;
var statearr_35625_35677 = state_35579__$1;
(statearr_35625_35677[(2)] = false);

(statearr_35625_35677[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35580 === (26))){
var inst_35539 = (state_35579[(9)]);
var inst_35546 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35539);
var state_35579__$1 = state_35579;
var statearr_35626_35678 = state_35579__$1;
(statearr_35626_35678[(2)] = inst_35546);

(statearr_35626_35678[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35580 === (16))){
var state_35579__$1 = state_35579;
var statearr_35627_35679 = state_35579__$1;
(statearr_35627_35679[(2)] = true);

(statearr_35627_35679[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35580 === (38))){
var inst_35569 = (state_35579[(2)]);
var state_35579__$1 = state_35579;
var statearr_35628_35680 = state_35579__$1;
(statearr_35628_35680[(2)] = inst_35569);

(statearr_35628_35680[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35580 === (30))){
var inst_35531 = (state_35579[(13)]);
var inst_35539 = (state_35579[(9)]);
var inst_35530 = (state_35579[(10)]);
var inst_35556 = cljs.core.empty_QMARK_.call(null,inst_35530);
var inst_35557 = inst_35531.call(null,inst_35539);
var inst_35558 = cljs.core.not.call(null,inst_35557);
var inst_35559 = (inst_35556) && (inst_35558);
var state_35579__$1 = state_35579;
var statearr_35629_35681 = state_35579__$1;
(statearr_35629_35681[(2)] = inst_35559);

(statearr_35629_35681[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35580 === (10))){
var inst_35481 = (state_35579[(8)]);
var inst_35502 = (state_35579[(2)]);
var inst_35503 = cljs.core.get.call(null,inst_35502,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35504 = cljs.core.get.call(null,inst_35502,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35505 = cljs.core.get.call(null,inst_35502,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35506 = inst_35481;
var state_35579__$1 = (function (){var statearr_35630 = state_35579;
(statearr_35630[(16)] = inst_35503);

(statearr_35630[(7)] = inst_35506);

(statearr_35630[(17)] = inst_35504);

(statearr_35630[(18)] = inst_35505);

return statearr_35630;
})();
var statearr_35631_35682 = state_35579__$1;
(statearr_35631_35682[(2)] = null);

(statearr_35631_35682[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35580 === (18))){
var inst_35521 = (state_35579[(2)]);
var state_35579__$1 = state_35579;
var statearr_35632_35683 = state_35579__$1;
(statearr_35632_35683[(2)] = inst_35521);

(statearr_35632_35683[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35580 === (37))){
var state_35579__$1 = state_35579;
var statearr_35633_35684 = state_35579__$1;
(statearr_35633_35684[(2)] = null);

(statearr_35633_35684[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35580 === (8))){
var inst_35481 = (state_35579[(8)]);
var inst_35499 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35481);
var state_35579__$1 = state_35579;
var statearr_35634_35685 = state_35579__$1;
(statearr_35634_35685[(2)] = inst_35499);

(statearr_35634_35685[(1)] = (10));


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
});})(c__34580__auto___35639,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__34525__auto__,c__34580__auto___35639,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__34526__auto__ = null;
var cljs$core$async$mix_$_state_machine__34526__auto____0 = (function (){
var statearr_35635 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35635[(0)] = cljs$core$async$mix_$_state_machine__34526__auto__);

(statearr_35635[(1)] = (1));

return statearr_35635;
});
var cljs$core$async$mix_$_state_machine__34526__auto____1 = (function (state_35579){
while(true){
var ret_value__34527__auto__ = (function (){try{while(true){
var result__34528__auto__ = switch__34525__auto__.call(null,state_35579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34528__auto__;
}
break;
}
}catch (e35636){if((e35636 instanceof Object)){
var ex__34529__auto__ = e35636;
var statearr_35637_35686 = state_35579;
(statearr_35637_35686[(5)] = ex__34529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35687 = state_35579;
state_35579 = G__35687;
continue;
} else {
return ret_value__34527__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34526__auto__ = function(state_35579){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34526__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34526__auto____1.call(this,state_35579);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34526__auto____0;
cljs$core$async$mix_$_state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34526__auto____1;
return cljs$core$async$mix_$_state_machine__34526__auto__;
})()
;})(switch__34525__auto__,c__34580__auto___35639,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__34582__auto__ = (function (){var statearr_35638 = f__34581__auto__.call(null);
(statearr_35638[(6)] = c__34580__auto___35639);

return statearr_35638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34582__auto__);
});})(c__34580__auto___35639,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__30835__auto__ = (((p == null))?null:p);
var m__30836__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__30835__auto__)]);
if(!((m__30836__auto__ == null))){
return m__30836__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__30836__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__30836__auto____$1 == null))){
return m__30836__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__30835__auto__ = (((p == null))?null:p);
var m__30836__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__30835__auto__)]);
if(!((m__30836__auto__ == null))){
return m__30836__auto__.call(null,p,v,ch);
} else {
var m__30836__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__30836__auto____$1 == null))){
return m__30836__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__35689 = arguments.length;
switch (G__35689) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__30835__auto__ = (((p == null))?null:p);
var m__30836__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30835__auto__)]);
if(!((m__30836__auto__ == null))){
return m__30836__auto__.call(null,p);
} else {
var m__30836__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30836__auto____$1 == null))){
return m__30836__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__30835__auto__ = (((p == null))?null:p);
var m__30836__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30835__auto__)]);
if(!((m__30836__auto__ == null))){
return m__30836__auto__.call(null,p,v);
} else {
var m__30836__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30836__auto____$1 == null))){
return m__30836__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__35693 = arguments.length;
switch (G__35693) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__30102__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__30102__auto__)){
return or__30102__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__30102__auto__,mults){
return (function (p1__35691_SHARP_){
if(cljs.core.truth_(p1__35691_SHARP_.call(null,topic))){
return p1__35691_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35691_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30102__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async35694 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35694 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35695){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35695 = meta35695;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35696,meta35695__$1){
var self__ = this;
var _35696__$1 = this;
return (new cljs.core.async.t_cljs$core$async35694(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35695__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35694.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35696){
var self__ = this;
var _35696__$1 = this;
return self__.meta35695;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35694.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35694.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35694.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35694.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35694.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35694.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35694.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35694.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35695","meta35695",909766969,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35694.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35694.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35694";

cljs.core.async.t_cljs$core$async35694.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30773__auto__,writer__30774__auto__,opt__30775__auto__){
return cljs.core._write.call(null,writer__30774__auto__,"cljs.core.async/t_cljs$core$async35694");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async35694 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async35694(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35695){
return (new cljs.core.async.t_cljs$core$async35694(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35695));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async35694(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34580__auto___35814 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34580__auto___35814,mults,ensure_mult,p){
return (function (){
var f__34581__auto__ = (function (){var switch__34525__auto__ = ((function (c__34580__auto___35814,mults,ensure_mult,p){
return (function (state_35768){
var state_val_35769 = (state_35768[(1)]);
if((state_val_35769 === (7))){
var inst_35764 = (state_35768[(2)]);
var state_35768__$1 = state_35768;
var statearr_35770_35815 = state_35768__$1;
(statearr_35770_35815[(2)] = inst_35764);

(statearr_35770_35815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35769 === (20))){
var state_35768__$1 = state_35768;
var statearr_35771_35816 = state_35768__$1;
(statearr_35771_35816[(2)] = null);

(statearr_35771_35816[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35769 === (1))){
var state_35768__$1 = state_35768;
var statearr_35772_35817 = state_35768__$1;
(statearr_35772_35817[(2)] = null);

(statearr_35772_35817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35769 === (24))){
var inst_35747 = (state_35768[(7)]);
var inst_35756 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35747);
var state_35768__$1 = state_35768;
var statearr_35773_35818 = state_35768__$1;
(statearr_35773_35818[(2)] = inst_35756);

(statearr_35773_35818[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35769 === (4))){
var inst_35699 = (state_35768[(8)]);
var inst_35699__$1 = (state_35768[(2)]);
var inst_35700 = (inst_35699__$1 == null);
var state_35768__$1 = (function (){var statearr_35774 = state_35768;
(statearr_35774[(8)] = inst_35699__$1);

return statearr_35774;
})();
if(cljs.core.truth_(inst_35700)){
var statearr_35775_35819 = state_35768__$1;
(statearr_35775_35819[(1)] = (5));

} else {
var statearr_35776_35820 = state_35768__$1;
(statearr_35776_35820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35769 === (15))){
var inst_35741 = (state_35768[(2)]);
var state_35768__$1 = state_35768;
var statearr_35777_35821 = state_35768__$1;
(statearr_35777_35821[(2)] = inst_35741);

(statearr_35777_35821[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35769 === (21))){
var inst_35761 = (state_35768[(2)]);
var state_35768__$1 = (function (){var statearr_35778 = state_35768;
(statearr_35778[(9)] = inst_35761);

return statearr_35778;
})();
var statearr_35779_35822 = state_35768__$1;
(statearr_35779_35822[(2)] = null);

(statearr_35779_35822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35769 === (13))){
var inst_35723 = (state_35768[(10)]);
var inst_35725 = cljs.core.chunked_seq_QMARK_.call(null,inst_35723);
var state_35768__$1 = state_35768;
if(inst_35725){
var statearr_35780_35823 = state_35768__$1;
(statearr_35780_35823[(1)] = (16));

} else {
var statearr_35781_35824 = state_35768__$1;
(statearr_35781_35824[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35769 === (22))){
var inst_35753 = (state_35768[(2)]);
var state_35768__$1 = state_35768;
if(cljs.core.truth_(inst_35753)){
var statearr_35782_35825 = state_35768__$1;
(statearr_35782_35825[(1)] = (23));

} else {
var statearr_35783_35826 = state_35768__$1;
(statearr_35783_35826[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35769 === (6))){
var inst_35699 = (state_35768[(8)]);
var inst_35749 = (state_35768[(11)]);
var inst_35747 = (state_35768[(7)]);
var inst_35747__$1 = topic_fn.call(null,inst_35699);
var inst_35748 = cljs.core.deref.call(null,mults);
var inst_35749__$1 = cljs.core.get.call(null,inst_35748,inst_35747__$1);
var state_35768__$1 = (function (){var statearr_35784 = state_35768;
(statearr_35784[(11)] = inst_35749__$1);

(statearr_35784[(7)] = inst_35747__$1);

return statearr_35784;
})();
if(cljs.core.truth_(inst_35749__$1)){
var statearr_35785_35827 = state_35768__$1;
(statearr_35785_35827[(1)] = (19));

} else {
var statearr_35786_35828 = state_35768__$1;
(statearr_35786_35828[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35769 === (25))){
var inst_35758 = (state_35768[(2)]);
var state_35768__$1 = state_35768;
var statearr_35787_35829 = state_35768__$1;
(statearr_35787_35829[(2)] = inst_35758);

(statearr_35787_35829[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35769 === (17))){
var inst_35723 = (state_35768[(10)]);
var inst_35732 = cljs.core.first.call(null,inst_35723);
var inst_35733 = cljs.core.async.muxch_STAR_.call(null,inst_35732);
var inst_35734 = cljs.core.async.close_BANG_.call(null,inst_35733);
var inst_35735 = cljs.core.next.call(null,inst_35723);
var inst_35709 = inst_35735;
var inst_35710 = null;
var inst_35711 = (0);
var inst_35712 = (0);
var state_35768__$1 = (function (){var statearr_35788 = state_35768;
(statearr_35788[(12)] = inst_35711);

(statearr_35788[(13)] = inst_35710);

(statearr_35788[(14)] = inst_35734);

(statearr_35788[(15)] = inst_35712);

(statearr_35788[(16)] = inst_35709);

return statearr_35788;
})();
var statearr_35789_35830 = state_35768__$1;
(statearr_35789_35830[(2)] = null);

(statearr_35789_35830[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35769 === (3))){
var inst_35766 = (state_35768[(2)]);
var state_35768__$1 = state_35768;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35768__$1,inst_35766);
} else {
if((state_val_35769 === (12))){
var inst_35743 = (state_35768[(2)]);
var state_35768__$1 = state_35768;
var statearr_35790_35831 = state_35768__$1;
(statearr_35790_35831[(2)] = inst_35743);

(statearr_35790_35831[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35769 === (2))){
var state_35768__$1 = state_35768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35768__$1,(4),ch);
} else {
if((state_val_35769 === (23))){
var state_35768__$1 = state_35768;
var statearr_35791_35832 = state_35768__$1;
(statearr_35791_35832[(2)] = null);

(statearr_35791_35832[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35769 === (19))){
var inst_35699 = (state_35768[(8)]);
var inst_35749 = (state_35768[(11)]);
var inst_35751 = cljs.core.async.muxch_STAR_.call(null,inst_35749);
var state_35768__$1 = state_35768;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35768__$1,(22),inst_35751,inst_35699);
} else {
if((state_val_35769 === (11))){
var inst_35723 = (state_35768[(10)]);
var inst_35709 = (state_35768[(16)]);
var inst_35723__$1 = cljs.core.seq.call(null,inst_35709);
var state_35768__$1 = (function (){var statearr_35792 = state_35768;
(statearr_35792[(10)] = inst_35723__$1);

return statearr_35792;
})();
if(inst_35723__$1){
var statearr_35793_35833 = state_35768__$1;
(statearr_35793_35833[(1)] = (13));

} else {
var statearr_35794_35834 = state_35768__$1;
(statearr_35794_35834[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35769 === (9))){
var inst_35745 = (state_35768[(2)]);
var state_35768__$1 = state_35768;
var statearr_35795_35835 = state_35768__$1;
(statearr_35795_35835[(2)] = inst_35745);

(statearr_35795_35835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35769 === (5))){
var inst_35706 = cljs.core.deref.call(null,mults);
var inst_35707 = cljs.core.vals.call(null,inst_35706);
var inst_35708 = cljs.core.seq.call(null,inst_35707);
var inst_35709 = inst_35708;
var inst_35710 = null;
var inst_35711 = (0);
var inst_35712 = (0);
var state_35768__$1 = (function (){var statearr_35796 = state_35768;
(statearr_35796[(12)] = inst_35711);

(statearr_35796[(13)] = inst_35710);

(statearr_35796[(15)] = inst_35712);

(statearr_35796[(16)] = inst_35709);

return statearr_35796;
})();
var statearr_35797_35836 = state_35768__$1;
(statearr_35797_35836[(2)] = null);

(statearr_35797_35836[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35769 === (14))){
var state_35768__$1 = state_35768;
var statearr_35801_35837 = state_35768__$1;
(statearr_35801_35837[(2)] = null);

(statearr_35801_35837[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35769 === (16))){
var inst_35723 = (state_35768[(10)]);
var inst_35727 = cljs.core.chunk_first.call(null,inst_35723);
var inst_35728 = cljs.core.chunk_rest.call(null,inst_35723);
var inst_35729 = cljs.core.count.call(null,inst_35727);
var inst_35709 = inst_35728;
var inst_35710 = inst_35727;
var inst_35711 = inst_35729;
var inst_35712 = (0);
var state_35768__$1 = (function (){var statearr_35802 = state_35768;
(statearr_35802[(12)] = inst_35711);

(statearr_35802[(13)] = inst_35710);

(statearr_35802[(15)] = inst_35712);

(statearr_35802[(16)] = inst_35709);

return statearr_35802;
})();
var statearr_35803_35838 = state_35768__$1;
(statearr_35803_35838[(2)] = null);

(statearr_35803_35838[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35769 === (10))){
var inst_35711 = (state_35768[(12)]);
var inst_35710 = (state_35768[(13)]);
var inst_35712 = (state_35768[(15)]);
var inst_35709 = (state_35768[(16)]);
var inst_35717 = cljs.core._nth.call(null,inst_35710,inst_35712);
var inst_35718 = cljs.core.async.muxch_STAR_.call(null,inst_35717);
var inst_35719 = cljs.core.async.close_BANG_.call(null,inst_35718);
var inst_35720 = (inst_35712 + (1));
var tmp35798 = inst_35711;
var tmp35799 = inst_35710;
var tmp35800 = inst_35709;
var inst_35709__$1 = tmp35800;
var inst_35710__$1 = tmp35799;
var inst_35711__$1 = tmp35798;
var inst_35712__$1 = inst_35720;
var state_35768__$1 = (function (){var statearr_35804 = state_35768;
(statearr_35804[(17)] = inst_35719);

(statearr_35804[(12)] = inst_35711__$1);

(statearr_35804[(13)] = inst_35710__$1);

(statearr_35804[(15)] = inst_35712__$1);

(statearr_35804[(16)] = inst_35709__$1);

return statearr_35804;
})();
var statearr_35805_35839 = state_35768__$1;
(statearr_35805_35839[(2)] = null);

(statearr_35805_35839[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35769 === (18))){
var inst_35738 = (state_35768[(2)]);
var state_35768__$1 = state_35768;
var statearr_35806_35840 = state_35768__$1;
(statearr_35806_35840[(2)] = inst_35738);

(statearr_35806_35840[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35769 === (8))){
var inst_35711 = (state_35768[(12)]);
var inst_35712 = (state_35768[(15)]);
var inst_35714 = (inst_35712 < inst_35711);
var inst_35715 = inst_35714;
var state_35768__$1 = state_35768;
if(cljs.core.truth_(inst_35715)){
var statearr_35807_35841 = state_35768__$1;
(statearr_35807_35841[(1)] = (10));

} else {
var statearr_35808_35842 = state_35768__$1;
(statearr_35808_35842[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__34580__auto___35814,mults,ensure_mult,p))
;
return ((function (switch__34525__auto__,c__34580__auto___35814,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__34526__auto__ = null;
var cljs$core$async$state_machine__34526__auto____0 = (function (){
var statearr_35809 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35809[(0)] = cljs$core$async$state_machine__34526__auto__);

(statearr_35809[(1)] = (1));

return statearr_35809;
});
var cljs$core$async$state_machine__34526__auto____1 = (function (state_35768){
while(true){
var ret_value__34527__auto__ = (function (){try{while(true){
var result__34528__auto__ = switch__34525__auto__.call(null,state_35768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34528__auto__;
}
break;
}
}catch (e35810){if((e35810 instanceof Object)){
var ex__34529__auto__ = e35810;
var statearr_35811_35843 = state_35768;
(statearr_35811_35843[(5)] = ex__34529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35844 = state_35768;
state_35768 = G__35844;
continue;
} else {
return ret_value__34527__auto__;
}
break;
}
});
cljs$core$async$state_machine__34526__auto__ = function(state_35768){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34526__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34526__auto____1.call(this,state_35768);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34526__auto____0;
cljs$core$async$state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34526__auto____1;
return cljs$core$async$state_machine__34526__auto__;
})()
;})(switch__34525__auto__,c__34580__auto___35814,mults,ensure_mult,p))
})();
var state__34582__auto__ = (function (){var statearr_35812 = f__34581__auto__.call(null);
(statearr_35812[(6)] = c__34580__auto___35814);

return statearr_35812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34582__auto__);
});})(c__34580__auto___35814,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__35846 = arguments.length;
switch (G__35846) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__35849 = arguments.length;
switch (G__35849) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__35852 = arguments.length;
switch (G__35852) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__34580__auto___35919 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34580__auto___35919,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__34581__auto__ = (function (){var switch__34525__auto__ = ((function (c__34580__auto___35919,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35891){
var state_val_35892 = (state_35891[(1)]);
if((state_val_35892 === (7))){
var state_35891__$1 = state_35891;
var statearr_35893_35920 = state_35891__$1;
(statearr_35893_35920[(2)] = null);

(statearr_35893_35920[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35892 === (1))){
var state_35891__$1 = state_35891;
var statearr_35894_35921 = state_35891__$1;
(statearr_35894_35921[(2)] = null);

(statearr_35894_35921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35892 === (4))){
var inst_35855 = (state_35891[(7)]);
var inst_35857 = (inst_35855 < cnt);
var state_35891__$1 = state_35891;
if(cljs.core.truth_(inst_35857)){
var statearr_35895_35922 = state_35891__$1;
(statearr_35895_35922[(1)] = (6));

} else {
var statearr_35896_35923 = state_35891__$1;
(statearr_35896_35923[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35892 === (15))){
var inst_35887 = (state_35891[(2)]);
var state_35891__$1 = state_35891;
var statearr_35897_35924 = state_35891__$1;
(statearr_35897_35924[(2)] = inst_35887);

(statearr_35897_35924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35892 === (13))){
var inst_35880 = cljs.core.async.close_BANG_.call(null,out);
var state_35891__$1 = state_35891;
var statearr_35898_35925 = state_35891__$1;
(statearr_35898_35925[(2)] = inst_35880);

(statearr_35898_35925[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35892 === (6))){
var state_35891__$1 = state_35891;
var statearr_35899_35926 = state_35891__$1;
(statearr_35899_35926[(2)] = null);

(statearr_35899_35926[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35892 === (3))){
var inst_35889 = (state_35891[(2)]);
var state_35891__$1 = state_35891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35891__$1,inst_35889);
} else {
if((state_val_35892 === (12))){
var inst_35877 = (state_35891[(8)]);
var inst_35877__$1 = (state_35891[(2)]);
var inst_35878 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35877__$1);
var state_35891__$1 = (function (){var statearr_35900 = state_35891;
(statearr_35900[(8)] = inst_35877__$1);

return statearr_35900;
})();
if(cljs.core.truth_(inst_35878)){
var statearr_35901_35927 = state_35891__$1;
(statearr_35901_35927[(1)] = (13));

} else {
var statearr_35902_35928 = state_35891__$1;
(statearr_35902_35928[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35892 === (2))){
var inst_35854 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35855 = (0);
var state_35891__$1 = (function (){var statearr_35903 = state_35891;
(statearr_35903[(9)] = inst_35854);

(statearr_35903[(7)] = inst_35855);

return statearr_35903;
})();
var statearr_35904_35929 = state_35891__$1;
(statearr_35904_35929[(2)] = null);

(statearr_35904_35929[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35892 === (11))){
var inst_35855 = (state_35891[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35891,(10),Object,null,(9));
var inst_35864 = chs__$1.call(null,inst_35855);
var inst_35865 = done.call(null,inst_35855);
var inst_35866 = cljs.core.async.take_BANG_.call(null,inst_35864,inst_35865);
var state_35891__$1 = state_35891;
var statearr_35905_35930 = state_35891__$1;
(statearr_35905_35930[(2)] = inst_35866);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35891__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35892 === (9))){
var inst_35855 = (state_35891[(7)]);
var inst_35868 = (state_35891[(2)]);
var inst_35869 = (inst_35855 + (1));
var inst_35855__$1 = inst_35869;
var state_35891__$1 = (function (){var statearr_35906 = state_35891;
(statearr_35906[(10)] = inst_35868);

(statearr_35906[(7)] = inst_35855__$1);

return statearr_35906;
})();
var statearr_35907_35931 = state_35891__$1;
(statearr_35907_35931[(2)] = null);

(statearr_35907_35931[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35892 === (5))){
var inst_35875 = (state_35891[(2)]);
var state_35891__$1 = (function (){var statearr_35908 = state_35891;
(statearr_35908[(11)] = inst_35875);

return statearr_35908;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35891__$1,(12),dchan);
} else {
if((state_val_35892 === (14))){
var inst_35877 = (state_35891[(8)]);
var inst_35882 = cljs.core.apply.call(null,f,inst_35877);
var state_35891__$1 = state_35891;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35891__$1,(16),out,inst_35882);
} else {
if((state_val_35892 === (16))){
var inst_35884 = (state_35891[(2)]);
var state_35891__$1 = (function (){var statearr_35909 = state_35891;
(statearr_35909[(12)] = inst_35884);

return statearr_35909;
})();
var statearr_35910_35932 = state_35891__$1;
(statearr_35910_35932[(2)] = null);

(statearr_35910_35932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35892 === (10))){
var inst_35859 = (state_35891[(2)]);
var inst_35860 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35891__$1 = (function (){var statearr_35911 = state_35891;
(statearr_35911[(13)] = inst_35859);

return statearr_35911;
})();
var statearr_35912_35933 = state_35891__$1;
(statearr_35912_35933[(2)] = inst_35860);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35891__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35892 === (8))){
var inst_35873 = (state_35891[(2)]);
var state_35891__$1 = state_35891;
var statearr_35913_35934 = state_35891__$1;
(statearr_35913_35934[(2)] = inst_35873);

(statearr_35913_35934[(1)] = (5));


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
});})(c__34580__auto___35919,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__34525__auto__,c__34580__auto___35919,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__34526__auto__ = null;
var cljs$core$async$state_machine__34526__auto____0 = (function (){
var statearr_35914 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35914[(0)] = cljs$core$async$state_machine__34526__auto__);

(statearr_35914[(1)] = (1));

return statearr_35914;
});
var cljs$core$async$state_machine__34526__auto____1 = (function (state_35891){
while(true){
var ret_value__34527__auto__ = (function (){try{while(true){
var result__34528__auto__ = switch__34525__auto__.call(null,state_35891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34528__auto__;
}
break;
}
}catch (e35915){if((e35915 instanceof Object)){
var ex__34529__auto__ = e35915;
var statearr_35916_35935 = state_35891;
(statearr_35916_35935[(5)] = ex__34529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35936 = state_35891;
state_35891 = G__35936;
continue;
} else {
return ret_value__34527__auto__;
}
break;
}
});
cljs$core$async$state_machine__34526__auto__ = function(state_35891){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34526__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34526__auto____1.call(this,state_35891);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34526__auto____0;
cljs$core$async$state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34526__auto____1;
return cljs$core$async$state_machine__34526__auto__;
})()
;})(switch__34525__auto__,c__34580__auto___35919,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__34582__auto__ = (function (){var statearr_35917 = f__34581__auto__.call(null);
(statearr_35917[(6)] = c__34580__auto___35919);

return statearr_35917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34582__auto__);
});})(c__34580__auto___35919,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__35939 = arguments.length;
switch (G__35939) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34580__auto___35993 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34580__auto___35993,out){
return (function (){
var f__34581__auto__ = (function (){var switch__34525__auto__ = ((function (c__34580__auto___35993,out){
return (function (state_35971){
var state_val_35972 = (state_35971[(1)]);
if((state_val_35972 === (7))){
var inst_35950 = (state_35971[(7)]);
var inst_35951 = (state_35971[(8)]);
var inst_35950__$1 = (state_35971[(2)]);
var inst_35951__$1 = cljs.core.nth.call(null,inst_35950__$1,(0),null);
var inst_35952 = cljs.core.nth.call(null,inst_35950__$1,(1),null);
var inst_35953 = (inst_35951__$1 == null);
var state_35971__$1 = (function (){var statearr_35973 = state_35971;
(statearr_35973[(9)] = inst_35952);

(statearr_35973[(7)] = inst_35950__$1);

(statearr_35973[(8)] = inst_35951__$1);

return statearr_35973;
})();
if(cljs.core.truth_(inst_35953)){
var statearr_35974_35994 = state_35971__$1;
(statearr_35974_35994[(1)] = (8));

} else {
var statearr_35975_35995 = state_35971__$1;
(statearr_35975_35995[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35972 === (1))){
var inst_35940 = cljs.core.vec.call(null,chs);
var inst_35941 = inst_35940;
var state_35971__$1 = (function (){var statearr_35976 = state_35971;
(statearr_35976[(10)] = inst_35941);

return statearr_35976;
})();
var statearr_35977_35996 = state_35971__$1;
(statearr_35977_35996[(2)] = null);

(statearr_35977_35996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35972 === (4))){
var inst_35941 = (state_35971[(10)]);
var state_35971__$1 = state_35971;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35971__$1,(7),inst_35941);
} else {
if((state_val_35972 === (6))){
var inst_35967 = (state_35971[(2)]);
var state_35971__$1 = state_35971;
var statearr_35978_35997 = state_35971__$1;
(statearr_35978_35997[(2)] = inst_35967);

(statearr_35978_35997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35972 === (3))){
var inst_35969 = (state_35971[(2)]);
var state_35971__$1 = state_35971;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35971__$1,inst_35969);
} else {
if((state_val_35972 === (2))){
var inst_35941 = (state_35971[(10)]);
var inst_35943 = cljs.core.count.call(null,inst_35941);
var inst_35944 = (inst_35943 > (0));
var state_35971__$1 = state_35971;
if(cljs.core.truth_(inst_35944)){
var statearr_35980_35998 = state_35971__$1;
(statearr_35980_35998[(1)] = (4));

} else {
var statearr_35981_35999 = state_35971__$1;
(statearr_35981_35999[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35972 === (11))){
var inst_35941 = (state_35971[(10)]);
var inst_35960 = (state_35971[(2)]);
var tmp35979 = inst_35941;
var inst_35941__$1 = tmp35979;
var state_35971__$1 = (function (){var statearr_35982 = state_35971;
(statearr_35982[(11)] = inst_35960);

(statearr_35982[(10)] = inst_35941__$1);

return statearr_35982;
})();
var statearr_35983_36000 = state_35971__$1;
(statearr_35983_36000[(2)] = null);

(statearr_35983_36000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35972 === (9))){
var inst_35951 = (state_35971[(8)]);
var state_35971__$1 = state_35971;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35971__$1,(11),out,inst_35951);
} else {
if((state_val_35972 === (5))){
var inst_35965 = cljs.core.async.close_BANG_.call(null,out);
var state_35971__$1 = state_35971;
var statearr_35984_36001 = state_35971__$1;
(statearr_35984_36001[(2)] = inst_35965);

(statearr_35984_36001[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35972 === (10))){
var inst_35963 = (state_35971[(2)]);
var state_35971__$1 = state_35971;
var statearr_35985_36002 = state_35971__$1;
(statearr_35985_36002[(2)] = inst_35963);

(statearr_35985_36002[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35972 === (8))){
var inst_35952 = (state_35971[(9)]);
var inst_35941 = (state_35971[(10)]);
var inst_35950 = (state_35971[(7)]);
var inst_35951 = (state_35971[(8)]);
var inst_35955 = (function (){var cs = inst_35941;
var vec__35946 = inst_35950;
var v = inst_35951;
var c = inst_35952;
return ((function (cs,vec__35946,v,c,inst_35952,inst_35941,inst_35950,inst_35951,state_val_35972,c__34580__auto___35993,out){
return (function (p1__35937_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35937_SHARP_);
});
;})(cs,vec__35946,v,c,inst_35952,inst_35941,inst_35950,inst_35951,state_val_35972,c__34580__auto___35993,out))
})();
var inst_35956 = cljs.core.filterv.call(null,inst_35955,inst_35941);
var inst_35941__$1 = inst_35956;
var state_35971__$1 = (function (){var statearr_35986 = state_35971;
(statearr_35986[(10)] = inst_35941__$1);

return statearr_35986;
})();
var statearr_35987_36003 = state_35971__$1;
(statearr_35987_36003[(2)] = null);

(statearr_35987_36003[(1)] = (2));


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
});})(c__34580__auto___35993,out))
;
return ((function (switch__34525__auto__,c__34580__auto___35993,out){
return (function() {
var cljs$core$async$state_machine__34526__auto__ = null;
var cljs$core$async$state_machine__34526__auto____0 = (function (){
var statearr_35988 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35988[(0)] = cljs$core$async$state_machine__34526__auto__);

(statearr_35988[(1)] = (1));

return statearr_35988;
});
var cljs$core$async$state_machine__34526__auto____1 = (function (state_35971){
while(true){
var ret_value__34527__auto__ = (function (){try{while(true){
var result__34528__auto__ = switch__34525__auto__.call(null,state_35971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34528__auto__;
}
break;
}
}catch (e35989){if((e35989 instanceof Object)){
var ex__34529__auto__ = e35989;
var statearr_35990_36004 = state_35971;
(statearr_35990_36004[(5)] = ex__34529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36005 = state_35971;
state_35971 = G__36005;
continue;
} else {
return ret_value__34527__auto__;
}
break;
}
});
cljs$core$async$state_machine__34526__auto__ = function(state_35971){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34526__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34526__auto____1.call(this,state_35971);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34526__auto____0;
cljs$core$async$state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34526__auto____1;
return cljs$core$async$state_machine__34526__auto__;
})()
;})(switch__34525__auto__,c__34580__auto___35993,out))
})();
var state__34582__auto__ = (function (){var statearr_35991 = f__34581__auto__.call(null);
(statearr_35991[(6)] = c__34580__auto___35993);

return statearr_35991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34582__auto__);
});})(c__34580__auto___35993,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__36007 = arguments.length;
switch (G__36007) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34580__auto___36052 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34580__auto___36052,out){
return (function (){
var f__34581__auto__ = (function (){var switch__34525__auto__ = ((function (c__34580__auto___36052,out){
return (function (state_36031){
var state_val_36032 = (state_36031[(1)]);
if((state_val_36032 === (7))){
var inst_36013 = (state_36031[(7)]);
var inst_36013__$1 = (state_36031[(2)]);
var inst_36014 = (inst_36013__$1 == null);
var inst_36015 = cljs.core.not.call(null,inst_36014);
var state_36031__$1 = (function (){var statearr_36033 = state_36031;
(statearr_36033[(7)] = inst_36013__$1);

return statearr_36033;
})();
if(inst_36015){
var statearr_36034_36053 = state_36031__$1;
(statearr_36034_36053[(1)] = (8));

} else {
var statearr_36035_36054 = state_36031__$1;
(statearr_36035_36054[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36032 === (1))){
var inst_36008 = (0);
var state_36031__$1 = (function (){var statearr_36036 = state_36031;
(statearr_36036[(8)] = inst_36008);

return statearr_36036;
})();
var statearr_36037_36055 = state_36031__$1;
(statearr_36037_36055[(2)] = null);

(statearr_36037_36055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36032 === (4))){
var state_36031__$1 = state_36031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36031__$1,(7),ch);
} else {
if((state_val_36032 === (6))){
var inst_36026 = (state_36031[(2)]);
var state_36031__$1 = state_36031;
var statearr_36038_36056 = state_36031__$1;
(statearr_36038_36056[(2)] = inst_36026);

(statearr_36038_36056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36032 === (3))){
var inst_36028 = (state_36031[(2)]);
var inst_36029 = cljs.core.async.close_BANG_.call(null,out);
var state_36031__$1 = (function (){var statearr_36039 = state_36031;
(statearr_36039[(9)] = inst_36028);

return statearr_36039;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36031__$1,inst_36029);
} else {
if((state_val_36032 === (2))){
var inst_36008 = (state_36031[(8)]);
var inst_36010 = (inst_36008 < n);
var state_36031__$1 = state_36031;
if(cljs.core.truth_(inst_36010)){
var statearr_36040_36057 = state_36031__$1;
(statearr_36040_36057[(1)] = (4));

} else {
var statearr_36041_36058 = state_36031__$1;
(statearr_36041_36058[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36032 === (11))){
var inst_36008 = (state_36031[(8)]);
var inst_36018 = (state_36031[(2)]);
var inst_36019 = (inst_36008 + (1));
var inst_36008__$1 = inst_36019;
var state_36031__$1 = (function (){var statearr_36042 = state_36031;
(statearr_36042[(8)] = inst_36008__$1);

(statearr_36042[(10)] = inst_36018);

return statearr_36042;
})();
var statearr_36043_36059 = state_36031__$1;
(statearr_36043_36059[(2)] = null);

(statearr_36043_36059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36032 === (9))){
var state_36031__$1 = state_36031;
var statearr_36044_36060 = state_36031__$1;
(statearr_36044_36060[(2)] = null);

(statearr_36044_36060[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36032 === (5))){
var state_36031__$1 = state_36031;
var statearr_36045_36061 = state_36031__$1;
(statearr_36045_36061[(2)] = null);

(statearr_36045_36061[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36032 === (10))){
var inst_36023 = (state_36031[(2)]);
var state_36031__$1 = state_36031;
var statearr_36046_36062 = state_36031__$1;
(statearr_36046_36062[(2)] = inst_36023);

(statearr_36046_36062[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36032 === (8))){
var inst_36013 = (state_36031[(7)]);
var state_36031__$1 = state_36031;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36031__$1,(11),out,inst_36013);
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
});})(c__34580__auto___36052,out))
;
return ((function (switch__34525__auto__,c__34580__auto___36052,out){
return (function() {
var cljs$core$async$state_machine__34526__auto__ = null;
var cljs$core$async$state_machine__34526__auto____0 = (function (){
var statearr_36047 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36047[(0)] = cljs$core$async$state_machine__34526__auto__);

(statearr_36047[(1)] = (1));

return statearr_36047;
});
var cljs$core$async$state_machine__34526__auto____1 = (function (state_36031){
while(true){
var ret_value__34527__auto__ = (function (){try{while(true){
var result__34528__auto__ = switch__34525__auto__.call(null,state_36031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34528__auto__;
}
break;
}
}catch (e36048){if((e36048 instanceof Object)){
var ex__34529__auto__ = e36048;
var statearr_36049_36063 = state_36031;
(statearr_36049_36063[(5)] = ex__34529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36048;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36064 = state_36031;
state_36031 = G__36064;
continue;
} else {
return ret_value__34527__auto__;
}
break;
}
});
cljs$core$async$state_machine__34526__auto__ = function(state_36031){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34526__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34526__auto____1.call(this,state_36031);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34526__auto____0;
cljs$core$async$state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34526__auto____1;
return cljs$core$async$state_machine__34526__auto__;
})()
;})(switch__34525__auto__,c__34580__auto___36052,out))
})();
var state__34582__auto__ = (function (){var statearr_36050 = f__34581__auto__.call(null);
(statearr_36050[(6)] = c__34580__auto___36052);

return statearr_36050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34582__auto__);
});})(c__34580__auto___36052,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36066 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36066 = (function (f,ch,meta36067){
this.f = f;
this.ch = ch;
this.meta36067 = meta36067;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36068,meta36067__$1){
var self__ = this;
var _36068__$1 = this;
return (new cljs.core.async.t_cljs$core$async36066(self__.f,self__.ch,meta36067__$1));
});

cljs.core.async.t_cljs$core$async36066.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36068){
var self__ = this;
var _36068__$1 = this;
return self__.meta36067;
});

cljs.core.async.t_cljs$core$async36066.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36066.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36066.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36066.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36066.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async36069 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36069 = (function (f,ch,meta36067,_,fn1,meta36070){
this.f = f;
this.ch = ch;
this.meta36067 = meta36067;
this._ = _;
this.fn1 = fn1;
this.meta36070 = meta36070;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_36071,meta36070__$1){
var self__ = this;
var _36071__$1 = this;
return (new cljs.core.async.t_cljs$core$async36069(self__.f,self__.ch,self__.meta36067,self__._,self__.fn1,meta36070__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async36069.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_36071){
var self__ = this;
var _36071__$1 = this;
return self__.meta36070;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36069.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36069.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36069.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36069.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__36065_SHARP_){
return f1.call(null,(((p1__36065_SHARP_ == null))?null:self__.f.call(null,p1__36065_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async36069.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36067","meta36067",-2067796835,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36066","cljs.core.async/t_cljs$core$async36066",155336913,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36070","meta36070",-938625775,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36069.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36069.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36069";

cljs.core.async.t_cljs$core$async36069.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30773__auto__,writer__30774__auto__,opt__30775__auto__){
return cljs.core._write.call(null,writer__30774__auto__,"cljs.core.async/t_cljs$core$async36069");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async36069 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36069(f__$1,ch__$1,meta36067__$1,___$2,fn1__$1,meta36070){
return (new cljs.core.async.t_cljs$core$async36069(f__$1,ch__$1,meta36067__$1,___$2,fn1__$1,meta36070));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async36069(self__.f,self__.ch,self__.meta36067,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__30090__auto__ = ret;
if(cljs.core.truth_(and__30090__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__30090__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async36066.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36066.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async36066.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36067","meta36067",-2067796835,null)], null);
});

cljs.core.async.t_cljs$core$async36066.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36066.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36066";

cljs.core.async.t_cljs$core$async36066.cljs$lang$ctorPrWriter = (function (this__30773__auto__,writer__30774__auto__,opt__30775__auto__){
return cljs.core._write.call(null,writer__30774__auto__,"cljs.core.async/t_cljs$core$async36066");
});

cljs.core.async.__GT_t_cljs$core$async36066 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36066(f__$1,ch__$1,meta36067){
return (new cljs.core.async.t_cljs$core$async36066(f__$1,ch__$1,meta36067));
});

}

return (new cljs.core.async.t_cljs$core$async36066(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36072 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36072 = (function (f,ch,meta36073){
this.f = f;
this.ch = ch;
this.meta36073 = meta36073;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36074,meta36073__$1){
var self__ = this;
var _36074__$1 = this;
return (new cljs.core.async.t_cljs$core$async36072(self__.f,self__.ch,meta36073__$1));
});

cljs.core.async.t_cljs$core$async36072.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36074){
var self__ = this;
var _36074__$1 = this;
return self__.meta36073;
});

cljs.core.async.t_cljs$core$async36072.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36072.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36072.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36072.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36072.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36072.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async36072.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36073","meta36073",-1455320673,null)], null);
});

cljs.core.async.t_cljs$core$async36072.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36072.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36072";

cljs.core.async.t_cljs$core$async36072.cljs$lang$ctorPrWriter = (function (this__30773__auto__,writer__30774__auto__,opt__30775__auto__){
return cljs.core._write.call(null,writer__30774__auto__,"cljs.core.async/t_cljs$core$async36072");
});

cljs.core.async.__GT_t_cljs$core$async36072 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36072(f__$1,ch__$1,meta36073){
return (new cljs.core.async.t_cljs$core$async36072(f__$1,ch__$1,meta36073));
});

}

return (new cljs.core.async.t_cljs$core$async36072(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async36075 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36075 = (function (p,ch,meta36076){
this.p = p;
this.ch = ch;
this.meta36076 = meta36076;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36075.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36077,meta36076__$1){
var self__ = this;
var _36077__$1 = this;
return (new cljs.core.async.t_cljs$core$async36075(self__.p,self__.ch,meta36076__$1));
});

cljs.core.async.t_cljs$core$async36075.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36077){
var self__ = this;
var _36077__$1 = this;
return self__.meta36076;
});

cljs.core.async.t_cljs$core$async36075.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36075.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36075.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36075.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36075.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36075.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36075.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async36075.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36076","meta36076",-124371777,null)], null);
});

cljs.core.async.t_cljs$core$async36075.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36075.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36075";

cljs.core.async.t_cljs$core$async36075.cljs$lang$ctorPrWriter = (function (this__30773__auto__,writer__30774__auto__,opt__30775__auto__){
return cljs.core._write.call(null,writer__30774__auto__,"cljs.core.async/t_cljs$core$async36075");
});

cljs.core.async.__GT_t_cljs$core$async36075 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36075(p__$1,ch__$1,meta36076){
return (new cljs.core.async.t_cljs$core$async36075(p__$1,ch__$1,meta36076));
});

}

return (new cljs.core.async.t_cljs$core$async36075(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__36079 = arguments.length;
switch (G__36079) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34580__auto___36119 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34580__auto___36119,out){
return (function (){
var f__34581__auto__ = (function (){var switch__34525__auto__ = ((function (c__34580__auto___36119,out){
return (function (state_36100){
var state_val_36101 = (state_36100[(1)]);
if((state_val_36101 === (7))){
var inst_36096 = (state_36100[(2)]);
var state_36100__$1 = state_36100;
var statearr_36102_36120 = state_36100__$1;
(statearr_36102_36120[(2)] = inst_36096);

(statearr_36102_36120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36101 === (1))){
var state_36100__$1 = state_36100;
var statearr_36103_36121 = state_36100__$1;
(statearr_36103_36121[(2)] = null);

(statearr_36103_36121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36101 === (4))){
var inst_36082 = (state_36100[(7)]);
var inst_36082__$1 = (state_36100[(2)]);
var inst_36083 = (inst_36082__$1 == null);
var state_36100__$1 = (function (){var statearr_36104 = state_36100;
(statearr_36104[(7)] = inst_36082__$1);

return statearr_36104;
})();
if(cljs.core.truth_(inst_36083)){
var statearr_36105_36122 = state_36100__$1;
(statearr_36105_36122[(1)] = (5));

} else {
var statearr_36106_36123 = state_36100__$1;
(statearr_36106_36123[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36101 === (6))){
var inst_36082 = (state_36100[(7)]);
var inst_36087 = p.call(null,inst_36082);
var state_36100__$1 = state_36100;
if(cljs.core.truth_(inst_36087)){
var statearr_36107_36124 = state_36100__$1;
(statearr_36107_36124[(1)] = (8));

} else {
var statearr_36108_36125 = state_36100__$1;
(statearr_36108_36125[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36101 === (3))){
var inst_36098 = (state_36100[(2)]);
var state_36100__$1 = state_36100;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36100__$1,inst_36098);
} else {
if((state_val_36101 === (2))){
var state_36100__$1 = state_36100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36100__$1,(4),ch);
} else {
if((state_val_36101 === (11))){
var inst_36090 = (state_36100[(2)]);
var state_36100__$1 = state_36100;
var statearr_36109_36126 = state_36100__$1;
(statearr_36109_36126[(2)] = inst_36090);

(statearr_36109_36126[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36101 === (9))){
var state_36100__$1 = state_36100;
var statearr_36110_36127 = state_36100__$1;
(statearr_36110_36127[(2)] = null);

(statearr_36110_36127[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36101 === (5))){
var inst_36085 = cljs.core.async.close_BANG_.call(null,out);
var state_36100__$1 = state_36100;
var statearr_36111_36128 = state_36100__$1;
(statearr_36111_36128[(2)] = inst_36085);

(statearr_36111_36128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36101 === (10))){
var inst_36093 = (state_36100[(2)]);
var state_36100__$1 = (function (){var statearr_36112 = state_36100;
(statearr_36112[(8)] = inst_36093);

return statearr_36112;
})();
var statearr_36113_36129 = state_36100__$1;
(statearr_36113_36129[(2)] = null);

(statearr_36113_36129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36101 === (8))){
var inst_36082 = (state_36100[(7)]);
var state_36100__$1 = state_36100;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36100__$1,(11),out,inst_36082);
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
});})(c__34580__auto___36119,out))
;
return ((function (switch__34525__auto__,c__34580__auto___36119,out){
return (function() {
var cljs$core$async$state_machine__34526__auto__ = null;
var cljs$core$async$state_machine__34526__auto____0 = (function (){
var statearr_36114 = [null,null,null,null,null,null,null,null,null];
(statearr_36114[(0)] = cljs$core$async$state_machine__34526__auto__);

(statearr_36114[(1)] = (1));

return statearr_36114;
});
var cljs$core$async$state_machine__34526__auto____1 = (function (state_36100){
while(true){
var ret_value__34527__auto__ = (function (){try{while(true){
var result__34528__auto__ = switch__34525__auto__.call(null,state_36100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34528__auto__;
}
break;
}
}catch (e36115){if((e36115 instanceof Object)){
var ex__34529__auto__ = e36115;
var statearr_36116_36130 = state_36100;
(statearr_36116_36130[(5)] = ex__34529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36131 = state_36100;
state_36100 = G__36131;
continue;
} else {
return ret_value__34527__auto__;
}
break;
}
});
cljs$core$async$state_machine__34526__auto__ = function(state_36100){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34526__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34526__auto____1.call(this,state_36100);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34526__auto____0;
cljs$core$async$state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34526__auto____1;
return cljs$core$async$state_machine__34526__auto__;
})()
;})(switch__34525__auto__,c__34580__auto___36119,out))
})();
var state__34582__auto__ = (function (){var statearr_36117 = f__34581__auto__.call(null);
(statearr_36117[(6)] = c__34580__auto___36119);

return statearr_36117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34582__auto__);
});})(c__34580__auto___36119,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36133 = arguments.length;
switch (G__36133) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__34580__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34580__auto__){
return (function (){
var f__34581__auto__ = (function (){var switch__34525__auto__ = ((function (c__34580__auto__){
return (function (state_36196){
var state_val_36197 = (state_36196[(1)]);
if((state_val_36197 === (7))){
var inst_36192 = (state_36196[(2)]);
var state_36196__$1 = state_36196;
var statearr_36198_36236 = state_36196__$1;
(statearr_36198_36236[(2)] = inst_36192);

(statearr_36198_36236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36197 === (20))){
var inst_36162 = (state_36196[(7)]);
var inst_36173 = (state_36196[(2)]);
var inst_36174 = cljs.core.next.call(null,inst_36162);
var inst_36148 = inst_36174;
var inst_36149 = null;
var inst_36150 = (0);
var inst_36151 = (0);
var state_36196__$1 = (function (){var statearr_36199 = state_36196;
(statearr_36199[(8)] = inst_36173);

(statearr_36199[(9)] = inst_36148);

(statearr_36199[(10)] = inst_36150);

(statearr_36199[(11)] = inst_36149);

(statearr_36199[(12)] = inst_36151);

return statearr_36199;
})();
var statearr_36200_36237 = state_36196__$1;
(statearr_36200_36237[(2)] = null);

(statearr_36200_36237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36197 === (1))){
var state_36196__$1 = state_36196;
var statearr_36201_36238 = state_36196__$1;
(statearr_36201_36238[(2)] = null);

(statearr_36201_36238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36197 === (4))){
var inst_36137 = (state_36196[(13)]);
var inst_36137__$1 = (state_36196[(2)]);
var inst_36138 = (inst_36137__$1 == null);
var state_36196__$1 = (function (){var statearr_36202 = state_36196;
(statearr_36202[(13)] = inst_36137__$1);

return statearr_36202;
})();
if(cljs.core.truth_(inst_36138)){
var statearr_36203_36239 = state_36196__$1;
(statearr_36203_36239[(1)] = (5));

} else {
var statearr_36204_36240 = state_36196__$1;
(statearr_36204_36240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36197 === (15))){
var state_36196__$1 = state_36196;
var statearr_36208_36241 = state_36196__$1;
(statearr_36208_36241[(2)] = null);

(statearr_36208_36241[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36197 === (21))){
var state_36196__$1 = state_36196;
var statearr_36209_36242 = state_36196__$1;
(statearr_36209_36242[(2)] = null);

(statearr_36209_36242[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36197 === (13))){
var inst_36148 = (state_36196[(9)]);
var inst_36150 = (state_36196[(10)]);
var inst_36149 = (state_36196[(11)]);
var inst_36151 = (state_36196[(12)]);
var inst_36158 = (state_36196[(2)]);
var inst_36159 = (inst_36151 + (1));
var tmp36205 = inst_36148;
var tmp36206 = inst_36150;
var tmp36207 = inst_36149;
var inst_36148__$1 = tmp36205;
var inst_36149__$1 = tmp36207;
var inst_36150__$1 = tmp36206;
var inst_36151__$1 = inst_36159;
var state_36196__$1 = (function (){var statearr_36210 = state_36196;
(statearr_36210[(14)] = inst_36158);

(statearr_36210[(9)] = inst_36148__$1);

(statearr_36210[(10)] = inst_36150__$1);

(statearr_36210[(11)] = inst_36149__$1);

(statearr_36210[(12)] = inst_36151__$1);

return statearr_36210;
})();
var statearr_36211_36243 = state_36196__$1;
(statearr_36211_36243[(2)] = null);

(statearr_36211_36243[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36197 === (22))){
var state_36196__$1 = state_36196;
var statearr_36212_36244 = state_36196__$1;
(statearr_36212_36244[(2)] = null);

(statearr_36212_36244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36197 === (6))){
var inst_36137 = (state_36196[(13)]);
var inst_36146 = f.call(null,inst_36137);
var inst_36147 = cljs.core.seq.call(null,inst_36146);
var inst_36148 = inst_36147;
var inst_36149 = null;
var inst_36150 = (0);
var inst_36151 = (0);
var state_36196__$1 = (function (){var statearr_36213 = state_36196;
(statearr_36213[(9)] = inst_36148);

(statearr_36213[(10)] = inst_36150);

(statearr_36213[(11)] = inst_36149);

(statearr_36213[(12)] = inst_36151);

return statearr_36213;
})();
var statearr_36214_36245 = state_36196__$1;
(statearr_36214_36245[(2)] = null);

(statearr_36214_36245[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36197 === (17))){
var inst_36162 = (state_36196[(7)]);
var inst_36166 = cljs.core.chunk_first.call(null,inst_36162);
var inst_36167 = cljs.core.chunk_rest.call(null,inst_36162);
var inst_36168 = cljs.core.count.call(null,inst_36166);
var inst_36148 = inst_36167;
var inst_36149 = inst_36166;
var inst_36150 = inst_36168;
var inst_36151 = (0);
var state_36196__$1 = (function (){var statearr_36215 = state_36196;
(statearr_36215[(9)] = inst_36148);

(statearr_36215[(10)] = inst_36150);

(statearr_36215[(11)] = inst_36149);

(statearr_36215[(12)] = inst_36151);

return statearr_36215;
})();
var statearr_36216_36246 = state_36196__$1;
(statearr_36216_36246[(2)] = null);

(statearr_36216_36246[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36197 === (3))){
var inst_36194 = (state_36196[(2)]);
var state_36196__$1 = state_36196;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36196__$1,inst_36194);
} else {
if((state_val_36197 === (12))){
var inst_36182 = (state_36196[(2)]);
var state_36196__$1 = state_36196;
var statearr_36217_36247 = state_36196__$1;
(statearr_36217_36247[(2)] = inst_36182);

(statearr_36217_36247[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36197 === (2))){
var state_36196__$1 = state_36196;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36196__$1,(4),in$);
} else {
if((state_val_36197 === (23))){
var inst_36190 = (state_36196[(2)]);
var state_36196__$1 = state_36196;
var statearr_36218_36248 = state_36196__$1;
(statearr_36218_36248[(2)] = inst_36190);

(statearr_36218_36248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36197 === (19))){
var inst_36177 = (state_36196[(2)]);
var state_36196__$1 = state_36196;
var statearr_36219_36249 = state_36196__$1;
(statearr_36219_36249[(2)] = inst_36177);

(statearr_36219_36249[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36197 === (11))){
var inst_36162 = (state_36196[(7)]);
var inst_36148 = (state_36196[(9)]);
var inst_36162__$1 = cljs.core.seq.call(null,inst_36148);
var state_36196__$1 = (function (){var statearr_36220 = state_36196;
(statearr_36220[(7)] = inst_36162__$1);

return statearr_36220;
})();
if(inst_36162__$1){
var statearr_36221_36250 = state_36196__$1;
(statearr_36221_36250[(1)] = (14));

} else {
var statearr_36222_36251 = state_36196__$1;
(statearr_36222_36251[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36197 === (9))){
var inst_36184 = (state_36196[(2)]);
var inst_36185 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_36196__$1 = (function (){var statearr_36223 = state_36196;
(statearr_36223[(15)] = inst_36184);

return statearr_36223;
})();
if(cljs.core.truth_(inst_36185)){
var statearr_36224_36252 = state_36196__$1;
(statearr_36224_36252[(1)] = (21));

} else {
var statearr_36225_36253 = state_36196__$1;
(statearr_36225_36253[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36197 === (5))){
var inst_36140 = cljs.core.async.close_BANG_.call(null,out);
var state_36196__$1 = state_36196;
var statearr_36226_36254 = state_36196__$1;
(statearr_36226_36254[(2)] = inst_36140);

(statearr_36226_36254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36197 === (14))){
var inst_36162 = (state_36196[(7)]);
var inst_36164 = cljs.core.chunked_seq_QMARK_.call(null,inst_36162);
var state_36196__$1 = state_36196;
if(inst_36164){
var statearr_36227_36255 = state_36196__$1;
(statearr_36227_36255[(1)] = (17));

} else {
var statearr_36228_36256 = state_36196__$1;
(statearr_36228_36256[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36197 === (16))){
var inst_36180 = (state_36196[(2)]);
var state_36196__$1 = state_36196;
var statearr_36229_36257 = state_36196__$1;
(statearr_36229_36257[(2)] = inst_36180);

(statearr_36229_36257[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36197 === (10))){
var inst_36149 = (state_36196[(11)]);
var inst_36151 = (state_36196[(12)]);
var inst_36156 = cljs.core._nth.call(null,inst_36149,inst_36151);
var state_36196__$1 = state_36196;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36196__$1,(13),out,inst_36156);
} else {
if((state_val_36197 === (18))){
var inst_36162 = (state_36196[(7)]);
var inst_36171 = cljs.core.first.call(null,inst_36162);
var state_36196__$1 = state_36196;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36196__$1,(20),out,inst_36171);
} else {
if((state_val_36197 === (8))){
var inst_36150 = (state_36196[(10)]);
var inst_36151 = (state_36196[(12)]);
var inst_36153 = (inst_36151 < inst_36150);
var inst_36154 = inst_36153;
var state_36196__$1 = state_36196;
if(cljs.core.truth_(inst_36154)){
var statearr_36230_36258 = state_36196__$1;
(statearr_36230_36258[(1)] = (10));

} else {
var statearr_36231_36259 = state_36196__$1;
(statearr_36231_36259[(1)] = (11));

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
}
}
}
}
}
}
});})(c__34580__auto__))
;
return ((function (switch__34525__auto__,c__34580__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34526__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34526__auto____0 = (function (){
var statearr_36232 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36232[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34526__auto__);

(statearr_36232[(1)] = (1));

return statearr_36232;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34526__auto____1 = (function (state_36196){
while(true){
var ret_value__34527__auto__ = (function (){try{while(true){
var result__34528__auto__ = switch__34525__auto__.call(null,state_36196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34528__auto__;
}
break;
}
}catch (e36233){if((e36233 instanceof Object)){
var ex__34529__auto__ = e36233;
var statearr_36234_36260 = state_36196;
(statearr_36234_36260[(5)] = ex__34529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36261 = state_36196;
state_36196 = G__36261;
continue;
} else {
return ret_value__34527__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34526__auto__ = function(state_36196){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34526__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34526__auto____1.call(this,state_36196);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34526__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34526__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34526__auto__;
})()
;})(switch__34525__auto__,c__34580__auto__))
})();
var state__34582__auto__ = (function (){var statearr_36235 = f__34581__auto__.call(null);
(statearr_36235[(6)] = c__34580__auto__);

return statearr_36235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34582__auto__);
});})(c__34580__auto__))
);

return c__34580__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36263 = arguments.length;
switch (G__36263) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__36266 = arguments.length;
switch (G__36266) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__36269 = arguments.length;
switch (G__36269) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34580__auto___36316 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34580__auto___36316,out){
return (function (){
var f__34581__auto__ = (function (){var switch__34525__auto__ = ((function (c__34580__auto___36316,out){
return (function (state_36293){
var state_val_36294 = (state_36293[(1)]);
if((state_val_36294 === (7))){
var inst_36288 = (state_36293[(2)]);
var state_36293__$1 = state_36293;
var statearr_36295_36317 = state_36293__$1;
(statearr_36295_36317[(2)] = inst_36288);

(statearr_36295_36317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36294 === (1))){
var inst_36270 = null;
var state_36293__$1 = (function (){var statearr_36296 = state_36293;
(statearr_36296[(7)] = inst_36270);

return statearr_36296;
})();
var statearr_36297_36318 = state_36293__$1;
(statearr_36297_36318[(2)] = null);

(statearr_36297_36318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36294 === (4))){
var inst_36273 = (state_36293[(8)]);
var inst_36273__$1 = (state_36293[(2)]);
var inst_36274 = (inst_36273__$1 == null);
var inst_36275 = cljs.core.not.call(null,inst_36274);
var state_36293__$1 = (function (){var statearr_36298 = state_36293;
(statearr_36298[(8)] = inst_36273__$1);

return statearr_36298;
})();
if(inst_36275){
var statearr_36299_36319 = state_36293__$1;
(statearr_36299_36319[(1)] = (5));

} else {
var statearr_36300_36320 = state_36293__$1;
(statearr_36300_36320[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36294 === (6))){
var state_36293__$1 = state_36293;
var statearr_36301_36321 = state_36293__$1;
(statearr_36301_36321[(2)] = null);

(statearr_36301_36321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36294 === (3))){
var inst_36290 = (state_36293[(2)]);
var inst_36291 = cljs.core.async.close_BANG_.call(null,out);
var state_36293__$1 = (function (){var statearr_36302 = state_36293;
(statearr_36302[(9)] = inst_36290);

return statearr_36302;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36293__$1,inst_36291);
} else {
if((state_val_36294 === (2))){
var state_36293__$1 = state_36293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36293__$1,(4),ch);
} else {
if((state_val_36294 === (11))){
var inst_36273 = (state_36293[(8)]);
var inst_36282 = (state_36293[(2)]);
var inst_36270 = inst_36273;
var state_36293__$1 = (function (){var statearr_36303 = state_36293;
(statearr_36303[(10)] = inst_36282);

(statearr_36303[(7)] = inst_36270);

return statearr_36303;
})();
var statearr_36304_36322 = state_36293__$1;
(statearr_36304_36322[(2)] = null);

(statearr_36304_36322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36294 === (9))){
var inst_36273 = (state_36293[(8)]);
var state_36293__$1 = state_36293;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36293__$1,(11),out,inst_36273);
} else {
if((state_val_36294 === (5))){
var inst_36273 = (state_36293[(8)]);
var inst_36270 = (state_36293[(7)]);
var inst_36277 = cljs.core._EQ_.call(null,inst_36273,inst_36270);
var state_36293__$1 = state_36293;
if(inst_36277){
var statearr_36306_36323 = state_36293__$1;
(statearr_36306_36323[(1)] = (8));

} else {
var statearr_36307_36324 = state_36293__$1;
(statearr_36307_36324[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36294 === (10))){
var inst_36285 = (state_36293[(2)]);
var state_36293__$1 = state_36293;
var statearr_36308_36325 = state_36293__$1;
(statearr_36308_36325[(2)] = inst_36285);

(statearr_36308_36325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36294 === (8))){
var inst_36270 = (state_36293[(7)]);
var tmp36305 = inst_36270;
var inst_36270__$1 = tmp36305;
var state_36293__$1 = (function (){var statearr_36309 = state_36293;
(statearr_36309[(7)] = inst_36270__$1);

return statearr_36309;
})();
var statearr_36310_36326 = state_36293__$1;
(statearr_36310_36326[(2)] = null);

(statearr_36310_36326[(1)] = (2));


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
});})(c__34580__auto___36316,out))
;
return ((function (switch__34525__auto__,c__34580__auto___36316,out){
return (function() {
var cljs$core$async$state_machine__34526__auto__ = null;
var cljs$core$async$state_machine__34526__auto____0 = (function (){
var statearr_36311 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36311[(0)] = cljs$core$async$state_machine__34526__auto__);

(statearr_36311[(1)] = (1));

return statearr_36311;
});
var cljs$core$async$state_machine__34526__auto____1 = (function (state_36293){
while(true){
var ret_value__34527__auto__ = (function (){try{while(true){
var result__34528__auto__ = switch__34525__auto__.call(null,state_36293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34528__auto__;
}
break;
}
}catch (e36312){if((e36312 instanceof Object)){
var ex__34529__auto__ = e36312;
var statearr_36313_36327 = state_36293;
(statearr_36313_36327[(5)] = ex__34529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36328 = state_36293;
state_36293 = G__36328;
continue;
} else {
return ret_value__34527__auto__;
}
break;
}
});
cljs$core$async$state_machine__34526__auto__ = function(state_36293){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34526__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34526__auto____1.call(this,state_36293);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34526__auto____0;
cljs$core$async$state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34526__auto____1;
return cljs$core$async$state_machine__34526__auto__;
})()
;})(switch__34525__auto__,c__34580__auto___36316,out))
})();
var state__34582__auto__ = (function (){var statearr_36314 = f__34581__auto__.call(null);
(statearr_36314[(6)] = c__34580__auto___36316);

return statearr_36314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34582__auto__);
});})(c__34580__auto___36316,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36330 = arguments.length;
switch (G__36330) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34580__auto___36396 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34580__auto___36396,out){
return (function (){
var f__34581__auto__ = (function (){var switch__34525__auto__ = ((function (c__34580__auto___36396,out){
return (function (state_36368){
var state_val_36369 = (state_36368[(1)]);
if((state_val_36369 === (7))){
var inst_36364 = (state_36368[(2)]);
var state_36368__$1 = state_36368;
var statearr_36370_36397 = state_36368__$1;
(statearr_36370_36397[(2)] = inst_36364);

(statearr_36370_36397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36369 === (1))){
var inst_36331 = (new Array(n));
var inst_36332 = inst_36331;
var inst_36333 = (0);
var state_36368__$1 = (function (){var statearr_36371 = state_36368;
(statearr_36371[(7)] = inst_36332);

(statearr_36371[(8)] = inst_36333);

return statearr_36371;
})();
var statearr_36372_36398 = state_36368__$1;
(statearr_36372_36398[(2)] = null);

(statearr_36372_36398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36369 === (4))){
var inst_36336 = (state_36368[(9)]);
var inst_36336__$1 = (state_36368[(2)]);
var inst_36337 = (inst_36336__$1 == null);
var inst_36338 = cljs.core.not.call(null,inst_36337);
var state_36368__$1 = (function (){var statearr_36373 = state_36368;
(statearr_36373[(9)] = inst_36336__$1);

return statearr_36373;
})();
if(inst_36338){
var statearr_36374_36399 = state_36368__$1;
(statearr_36374_36399[(1)] = (5));

} else {
var statearr_36375_36400 = state_36368__$1;
(statearr_36375_36400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36369 === (15))){
var inst_36358 = (state_36368[(2)]);
var state_36368__$1 = state_36368;
var statearr_36376_36401 = state_36368__$1;
(statearr_36376_36401[(2)] = inst_36358);

(statearr_36376_36401[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36369 === (13))){
var state_36368__$1 = state_36368;
var statearr_36377_36402 = state_36368__$1;
(statearr_36377_36402[(2)] = null);

(statearr_36377_36402[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36369 === (6))){
var inst_36333 = (state_36368[(8)]);
var inst_36354 = (inst_36333 > (0));
var state_36368__$1 = state_36368;
if(cljs.core.truth_(inst_36354)){
var statearr_36378_36403 = state_36368__$1;
(statearr_36378_36403[(1)] = (12));

} else {
var statearr_36379_36404 = state_36368__$1;
(statearr_36379_36404[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36369 === (3))){
var inst_36366 = (state_36368[(2)]);
var state_36368__$1 = state_36368;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36368__$1,inst_36366);
} else {
if((state_val_36369 === (12))){
var inst_36332 = (state_36368[(7)]);
var inst_36356 = cljs.core.vec.call(null,inst_36332);
var state_36368__$1 = state_36368;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36368__$1,(15),out,inst_36356);
} else {
if((state_val_36369 === (2))){
var state_36368__$1 = state_36368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36368__$1,(4),ch);
} else {
if((state_val_36369 === (11))){
var inst_36348 = (state_36368[(2)]);
var inst_36349 = (new Array(n));
var inst_36332 = inst_36349;
var inst_36333 = (0);
var state_36368__$1 = (function (){var statearr_36380 = state_36368;
(statearr_36380[(10)] = inst_36348);

(statearr_36380[(7)] = inst_36332);

(statearr_36380[(8)] = inst_36333);

return statearr_36380;
})();
var statearr_36381_36405 = state_36368__$1;
(statearr_36381_36405[(2)] = null);

(statearr_36381_36405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36369 === (9))){
var inst_36332 = (state_36368[(7)]);
var inst_36346 = cljs.core.vec.call(null,inst_36332);
var state_36368__$1 = state_36368;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36368__$1,(11),out,inst_36346);
} else {
if((state_val_36369 === (5))){
var inst_36341 = (state_36368[(11)]);
var inst_36336 = (state_36368[(9)]);
var inst_36332 = (state_36368[(7)]);
var inst_36333 = (state_36368[(8)]);
var inst_36340 = (inst_36332[inst_36333] = inst_36336);
var inst_36341__$1 = (inst_36333 + (1));
var inst_36342 = (inst_36341__$1 < n);
var state_36368__$1 = (function (){var statearr_36382 = state_36368;
(statearr_36382[(11)] = inst_36341__$1);

(statearr_36382[(12)] = inst_36340);

return statearr_36382;
})();
if(cljs.core.truth_(inst_36342)){
var statearr_36383_36406 = state_36368__$1;
(statearr_36383_36406[(1)] = (8));

} else {
var statearr_36384_36407 = state_36368__$1;
(statearr_36384_36407[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36369 === (14))){
var inst_36361 = (state_36368[(2)]);
var inst_36362 = cljs.core.async.close_BANG_.call(null,out);
var state_36368__$1 = (function (){var statearr_36386 = state_36368;
(statearr_36386[(13)] = inst_36361);

return statearr_36386;
})();
var statearr_36387_36408 = state_36368__$1;
(statearr_36387_36408[(2)] = inst_36362);

(statearr_36387_36408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36369 === (10))){
var inst_36352 = (state_36368[(2)]);
var state_36368__$1 = state_36368;
var statearr_36388_36409 = state_36368__$1;
(statearr_36388_36409[(2)] = inst_36352);

(statearr_36388_36409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36369 === (8))){
var inst_36341 = (state_36368[(11)]);
var inst_36332 = (state_36368[(7)]);
var tmp36385 = inst_36332;
var inst_36332__$1 = tmp36385;
var inst_36333 = inst_36341;
var state_36368__$1 = (function (){var statearr_36389 = state_36368;
(statearr_36389[(7)] = inst_36332__$1);

(statearr_36389[(8)] = inst_36333);

return statearr_36389;
})();
var statearr_36390_36410 = state_36368__$1;
(statearr_36390_36410[(2)] = null);

(statearr_36390_36410[(1)] = (2));


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
});})(c__34580__auto___36396,out))
;
return ((function (switch__34525__auto__,c__34580__auto___36396,out){
return (function() {
var cljs$core$async$state_machine__34526__auto__ = null;
var cljs$core$async$state_machine__34526__auto____0 = (function (){
var statearr_36391 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36391[(0)] = cljs$core$async$state_machine__34526__auto__);

(statearr_36391[(1)] = (1));

return statearr_36391;
});
var cljs$core$async$state_machine__34526__auto____1 = (function (state_36368){
while(true){
var ret_value__34527__auto__ = (function (){try{while(true){
var result__34528__auto__ = switch__34525__auto__.call(null,state_36368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34528__auto__;
}
break;
}
}catch (e36392){if((e36392 instanceof Object)){
var ex__34529__auto__ = e36392;
var statearr_36393_36411 = state_36368;
(statearr_36393_36411[(5)] = ex__34529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36412 = state_36368;
state_36368 = G__36412;
continue;
} else {
return ret_value__34527__auto__;
}
break;
}
});
cljs$core$async$state_machine__34526__auto__ = function(state_36368){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34526__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34526__auto____1.call(this,state_36368);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34526__auto____0;
cljs$core$async$state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34526__auto____1;
return cljs$core$async$state_machine__34526__auto__;
})()
;})(switch__34525__auto__,c__34580__auto___36396,out))
})();
var state__34582__auto__ = (function (){var statearr_36394 = f__34581__auto__.call(null);
(statearr_36394[(6)] = c__34580__auto___36396);

return statearr_36394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34582__auto__);
});})(c__34580__auto___36396,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36414 = arguments.length;
switch (G__36414) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34580__auto___36484 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34580__auto___36484,out){
return (function (){
var f__34581__auto__ = (function (){var switch__34525__auto__ = ((function (c__34580__auto___36484,out){
return (function (state_36456){
var state_val_36457 = (state_36456[(1)]);
if((state_val_36457 === (7))){
var inst_36452 = (state_36456[(2)]);
var state_36456__$1 = state_36456;
var statearr_36458_36485 = state_36456__$1;
(statearr_36458_36485[(2)] = inst_36452);

(statearr_36458_36485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36457 === (1))){
var inst_36415 = [];
var inst_36416 = inst_36415;
var inst_36417 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36456__$1 = (function (){var statearr_36459 = state_36456;
(statearr_36459[(7)] = inst_36416);

(statearr_36459[(8)] = inst_36417);

return statearr_36459;
})();
var statearr_36460_36486 = state_36456__$1;
(statearr_36460_36486[(2)] = null);

(statearr_36460_36486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36457 === (4))){
var inst_36420 = (state_36456[(9)]);
var inst_36420__$1 = (state_36456[(2)]);
var inst_36421 = (inst_36420__$1 == null);
var inst_36422 = cljs.core.not.call(null,inst_36421);
var state_36456__$1 = (function (){var statearr_36461 = state_36456;
(statearr_36461[(9)] = inst_36420__$1);

return statearr_36461;
})();
if(inst_36422){
var statearr_36462_36487 = state_36456__$1;
(statearr_36462_36487[(1)] = (5));

} else {
var statearr_36463_36488 = state_36456__$1;
(statearr_36463_36488[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36457 === (15))){
var inst_36446 = (state_36456[(2)]);
var state_36456__$1 = state_36456;
var statearr_36464_36489 = state_36456__$1;
(statearr_36464_36489[(2)] = inst_36446);

(statearr_36464_36489[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36457 === (13))){
var state_36456__$1 = state_36456;
var statearr_36465_36490 = state_36456__$1;
(statearr_36465_36490[(2)] = null);

(statearr_36465_36490[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36457 === (6))){
var inst_36416 = (state_36456[(7)]);
var inst_36441 = inst_36416.length;
var inst_36442 = (inst_36441 > (0));
var state_36456__$1 = state_36456;
if(cljs.core.truth_(inst_36442)){
var statearr_36466_36491 = state_36456__$1;
(statearr_36466_36491[(1)] = (12));

} else {
var statearr_36467_36492 = state_36456__$1;
(statearr_36467_36492[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36457 === (3))){
var inst_36454 = (state_36456[(2)]);
var state_36456__$1 = state_36456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36456__$1,inst_36454);
} else {
if((state_val_36457 === (12))){
var inst_36416 = (state_36456[(7)]);
var inst_36444 = cljs.core.vec.call(null,inst_36416);
var state_36456__$1 = state_36456;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36456__$1,(15),out,inst_36444);
} else {
if((state_val_36457 === (2))){
var state_36456__$1 = state_36456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36456__$1,(4),ch);
} else {
if((state_val_36457 === (11))){
var inst_36420 = (state_36456[(9)]);
var inst_36424 = (state_36456[(10)]);
var inst_36434 = (state_36456[(2)]);
var inst_36435 = [];
var inst_36436 = inst_36435.push(inst_36420);
var inst_36416 = inst_36435;
var inst_36417 = inst_36424;
var state_36456__$1 = (function (){var statearr_36468 = state_36456;
(statearr_36468[(11)] = inst_36436);

(statearr_36468[(7)] = inst_36416);

(statearr_36468[(12)] = inst_36434);

(statearr_36468[(8)] = inst_36417);

return statearr_36468;
})();
var statearr_36469_36493 = state_36456__$1;
(statearr_36469_36493[(2)] = null);

(statearr_36469_36493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36457 === (9))){
var inst_36416 = (state_36456[(7)]);
var inst_36432 = cljs.core.vec.call(null,inst_36416);
var state_36456__$1 = state_36456;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36456__$1,(11),out,inst_36432);
} else {
if((state_val_36457 === (5))){
var inst_36420 = (state_36456[(9)]);
var inst_36424 = (state_36456[(10)]);
var inst_36417 = (state_36456[(8)]);
var inst_36424__$1 = f.call(null,inst_36420);
var inst_36425 = cljs.core._EQ_.call(null,inst_36424__$1,inst_36417);
var inst_36426 = cljs.core.keyword_identical_QMARK_.call(null,inst_36417,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36427 = (inst_36425) || (inst_36426);
var state_36456__$1 = (function (){var statearr_36470 = state_36456;
(statearr_36470[(10)] = inst_36424__$1);

return statearr_36470;
})();
if(cljs.core.truth_(inst_36427)){
var statearr_36471_36494 = state_36456__$1;
(statearr_36471_36494[(1)] = (8));

} else {
var statearr_36472_36495 = state_36456__$1;
(statearr_36472_36495[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36457 === (14))){
var inst_36449 = (state_36456[(2)]);
var inst_36450 = cljs.core.async.close_BANG_.call(null,out);
var state_36456__$1 = (function (){var statearr_36474 = state_36456;
(statearr_36474[(13)] = inst_36449);

return statearr_36474;
})();
var statearr_36475_36496 = state_36456__$1;
(statearr_36475_36496[(2)] = inst_36450);

(statearr_36475_36496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36457 === (10))){
var inst_36439 = (state_36456[(2)]);
var state_36456__$1 = state_36456;
var statearr_36476_36497 = state_36456__$1;
(statearr_36476_36497[(2)] = inst_36439);

(statearr_36476_36497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36457 === (8))){
var inst_36420 = (state_36456[(9)]);
var inst_36424 = (state_36456[(10)]);
var inst_36416 = (state_36456[(7)]);
var inst_36429 = inst_36416.push(inst_36420);
var tmp36473 = inst_36416;
var inst_36416__$1 = tmp36473;
var inst_36417 = inst_36424;
var state_36456__$1 = (function (){var statearr_36477 = state_36456;
(statearr_36477[(7)] = inst_36416__$1);

(statearr_36477[(14)] = inst_36429);

(statearr_36477[(8)] = inst_36417);

return statearr_36477;
})();
var statearr_36478_36498 = state_36456__$1;
(statearr_36478_36498[(2)] = null);

(statearr_36478_36498[(1)] = (2));


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
});})(c__34580__auto___36484,out))
;
return ((function (switch__34525__auto__,c__34580__auto___36484,out){
return (function() {
var cljs$core$async$state_machine__34526__auto__ = null;
var cljs$core$async$state_machine__34526__auto____0 = (function (){
var statearr_36479 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36479[(0)] = cljs$core$async$state_machine__34526__auto__);

(statearr_36479[(1)] = (1));

return statearr_36479;
});
var cljs$core$async$state_machine__34526__auto____1 = (function (state_36456){
while(true){
var ret_value__34527__auto__ = (function (){try{while(true){
var result__34528__auto__ = switch__34525__auto__.call(null,state_36456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34528__auto__;
}
break;
}
}catch (e36480){if((e36480 instanceof Object)){
var ex__34529__auto__ = e36480;
var statearr_36481_36499 = state_36456;
(statearr_36481_36499[(5)] = ex__34529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36500 = state_36456;
state_36456 = G__36500;
continue;
} else {
return ret_value__34527__auto__;
}
break;
}
});
cljs$core$async$state_machine__34526__auto__ = function(state_36456){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34526__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34526__auto____1.call(this,state_36456);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34526__auto____0;
cljs$core$async$state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34526__auto____1;
return cljs$core$async$state_machine__34526__auto__;
})()
;})(switch__34525__auto__,c__34580__auto___36484,out))
})();
var state__34582__auto__ = (function (){var statearr_36482 = f__34581__auto__.call(null);
(statearr_36482[(6)] = c__34580__auto___36484);

return statearr_36482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34582__auto__);
});})(c__34580__auto___36484,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1518288635115
