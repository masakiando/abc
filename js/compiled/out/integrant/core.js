// Compiled by ClojureScript 1.9.946 {}
goog.provide('integrant.core');
goog.require('cljs.core');
goog.require('com.stuartsierra.dependency');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
integrant.core.Ref = (function (key,__meta,__extmap,__hash){
this.key = key;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
integrant.core.Ref.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30790__auto__,k__30791__auto__){
var self__ = this;
var this__30790__auto____$1 = this;
return this__30790__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30791__auto__,null);
});

integrant.core.Ref.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30792__auto__,k32827,else__30793__auto__){
var self__ = this;
var this__30792__auto____$1 = this;
var G__32831 = k32827;
var G__32831__$1 = (((G__32831 instanceof cljs.core.Keyword))?G__32831.fqn:null);
switch (G__32831__$1) {
case "key":
return self__.key;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32827,else__30793__auto__);

}
});

integrant.core.Ref.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30804__auto__,writer__30805__auto__,opts__30806__auto__){
var self__ = this;
var this__30804__auto____$1 = this;
var pr_pair__30807__auto__ = ((function (this__30804__auto____$1){
return (function (keyval__30808__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30805__auto__,cljs.core.pr_writer,""," ","",opts__30806__auto__,keyval__30808__auto__);
});})(this__30804__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30805__auto__,pr_pair__30807__auto__,"#integrant.core.Ref{",", ","}",opts__30806__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null))], null),self__.__extmap));
});

integrant.core.Ref.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32826){
var self__ = this;
var G__32826__$1 = this;
return (new cljs.core.RecordIter((0),G__32826__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

integrant.core.Ref.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30788__auto__){
var self__ = this;
var this__30788__auto____$1 = this;
return self__.__meta;
});

integrant.core.Ref.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30785__auto__){
var self__ = this;
var this__30785__auto____$1 = this;
return (new integrant.core.Ref(self__.key,self__.__meta,self__.__extmap,self__.__hash));
});

integrant.core.Ref.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30794__auto__){
var self__ = this;
var this__30794__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

integrant.core.Ref.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30786__auto__){
var self__ = this;
var this__30786__auto____$1 = this;
var h__30558__auto__ = self__.__hash;
if(!((h__30558__auto__ == null))){
return h__30558__auto__;
} else {
var h__30558__auto____$1 = ((function (h__30558__auto__,this__30786__auto____$1){
return (function (coll__30787__auto__){
return (2146506987 ^ cljs.core.hash_unordered_coll.call(null,coll__30787__auto__));
});})(h__30558__auto__,this__30786__auto____$1))
.call(null,this__30786__auto____$1);
self__.__hash = h__30558__auto____$1;

return h__30558__auto____$1;
}
});

integrant.core.Ref.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32828,other32829){
var self__ = this;
var this32828__$1 = this;
return (!((other32829 == null))) && ((this32828__$1.constructor === other32829.constructor)) && (cljs.core._EQ_.call(null,this32828__$1.key,other32829.key)) && (cljs.core._EQ_.call(null,this32828__$1.__extmap,other32829.__extmap));
});

integrant.core.Ref.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30799__auto__,k__30800__auto__){
var self__ = this;
var this__30799__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),null], null), null),k__30800__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30799__auto____$1),self__.__meta),k__30800__auto__);
} else {
return (new integrant.core.Ref(self__.key,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30800__auto__)),null));
}
});

integrant.core.Ref.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30797__auto__,k__30798__auto__,G__32826){
var self__ = this;
var this__30797__auto____$1 = this;
var pred__32832 = cljs.core.keyword_identical_QMARK_;
var expr__32833 = k__30798__auto__;
if(cljs.core.truth_(pred__32832.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),expr__32833))){
return (new integrant.core.Ref(G__32826,self__.__meta,self__.__extmap,null));
} else {
return (new integrant.core.Ref(self__.key,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30798__auto__,G__32826),null));
}
});

integrant.core.Ref.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30802__auto__){
var self__ = this;
var this__30802__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null))], null),self__.__extmap));
});

integrant.core.Ref.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30789__auto__,G__32826){
var self__ = this;
var this__30789__auto____$1 = this;
return (new integrant.core.Ref(self__.key,G__32826,self__.__extmap,self__.__hash));
});

integrant.core.Ref.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30795__auto__,entry__30796__auto__){
var self__ = this;
var this__30795__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30796__auto__)){
return this__30795__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30796__auto__,(0)),cljs.core._nth.call(null,entry__30796__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30795__auto____$1,entry__30796__auto__);
}
});

integrant.core.Ref.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null)], null);
});

integrant.core.Ref.cljs$lang$type = true;

integrant.core.Ref.cljs$lang$ctorPrSeq = (function (this__30828__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"integrant.core/Ref");
});

integrant.core.Ref.cljs$lang$ctorPrWriter = (function (this__30828__auto__,writer__30829__auto__){
return cljs.core._write.call(null,writer__30829__auto__,"integrant.core/Ref");
});

integrant.core.__GT_Ref = (function integrant$core$__GT_Ref(key){
return (new integrant.core.Ref(key,null,null,null));
});

integrant.core.map__GT_Ref = (function integrant$core$map__GT_Ref(G__32830){
return (new integrant.core.Ref(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__32830),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__32830,new cljs.core.Keyword(null,"key","key",-1516042587))),null));
});

/**
 * Create a reference to a top-level key in a config map.
 */
integrant.core.ref = (function integrant$core$ref(key){
if(((key instanceof cljs.core.Keyword)) || ((cljs.core.vector_QMARK_.call(null,key)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,key)))){
} else {
throw (new Error("Assert failed: (or (keyword? key) (and (vector? key) (every? keyword? key)))"));
}

return integrant.core.__GT_Ref.call(null,key);
});
/**
 * Return true if its argument is a ref.
 */
integrant.core.ref_QMARK_ = (function integrant$core$ref_QMARK_(x){
return (x instanceof integrant.core.Ref);
});
integrant.core.find_refs = (function integrant$core$find_refs(v){
if(cljs.core.truth_(integrant.core.ref_QMARK_.call(null,v))){
var x__31056__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(v);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31056__auto__);
} else {
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs.core.mapcat.call(null,integrant.core.find_refs,v);
} else {
return null;
}
}
});
if(typeof integrant.core.composite_keyword !== 'undefined'){
} else {
/**
 * Return a unique keyword that is derived from an ordered collection of
 *   keywords. The function will return the same keyword for the same collection.
 */
integrant.core.composite_keyword = cljs.core.memoize.call(null,(function (kws){
var parts = (function (){var iter__30984__auto__ = (function integrant$core$iter__32836(s__32837){
return (new cljs.core.LazySeq(null,(function (){
var s__32837__$1 = s__32837;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__32837__$1);
if(temp__5457__auto__){
var s__32837__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32837__$2)){
var c__30982__auto__ = cljs.core.chunk_first.call(null,s__32837__$2);
var size__30983__auto__ = cljs.core.count.call(null,c__30982__auto__);
var b__32839 = cljs.core.chunk_buffer.call(null,size__30983__auto__);
if((function (){var i__32838 = (0);
while(true){
if((i__32838 < size__30983__auto__)){
var kw = cljs.core._nth.call(null,c__30982__auto__,i__32838);
cljs.core.chunk_append.call(null,b__32839,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,kw)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,kw))].join(''));

var G__32844 = (i__32838 + (1));
i__32838 = G__32844;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32839),integrant$core$iter__32836.call(null,cljs.core.chunk_rest.call(null,s__32837__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32839),null);
}
} else {
var kw = cljs.core.first.call(null,s__32837__$2);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,kw)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,kw))].join(''),integrant$core$iter__32836.call(null,cljs.core.rest.call(null,s__32837__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__30984__auto__.call(null,kws);
})();
var prefix = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"+",parts)),"_"].join('');
var composite = cljs.core.keyword.call(null,"integrant.composite",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,prefix))].join(''));
var seq__32840_32845 = cljs.core.seq.call(null,kws);
var chunk__32841_32846 = null;
var count__32842_32847 = (0);
var i__32843_32848 = (0);
while(true){
if((i__32843_32848 < count__32842_32847)){
var kw_32849 = cljs.core._nth.call(null,chunk__32841_32846,i__32843_32848);
cljs.core.derive.call(null,composite,kw_32849);

var G__32850 = seq__32840_32845;
var G__32851 = chunk__32841_32846;
var G__32852 = count__32842_32847;
var G__32853 = (i__32843_32848 + (1));
seq__32840_32845 = G__32850;
chunk__32841_32846 = G__32851;
count__32842_32847 = G__32852;
i__32843_32848 = G__32853;
continue;
} else {
var temp__5457__auto___32854 = cljs.core.seq.call(null,seq__32840_32845);
if(temp__5457__auto___32854){
var seq__32840_32855__$1 = temp__5457__auto___32854;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32840_32855__$1)){
var c__31033__auto___32856 = cljs.core.chunk_first.call(null,seq__32840_32855__$1);
var G__32857 = cljs.core.chunk_rest.call(null,seq__32840_32855__$1);
var G__32858 = c__31033__auto___32856;
var G__32859 = cljs.core.count.call(null,c__31033__auto___32856);
var G__32860 = (0);
seq__32840_32845 = G__32857;
chunk__32841_32846 = G__32858;
count__32842_32847 = G__32859;
i__32843_32848 = G__32860;
continue;
} else {
var kw_32861 = cljs.core.first.call(null,seq__32840_32855__$1);
cljs.core.derive.call(null,composite,kw_32861);

var G__32862 = cljs.core.next.call(null,seq__32840_32855__$1);
var G__32863 = null;
var G__32864 = (0);
var G__32865 = (0);
seq__32840_32845 = G__32862;
chunk__32841_32846 = G__32863;
count__32842_32847 = G__32864;
i__32843_32848 = G__32865;
continue;
}
} else {
}
}
break;
}

return composite;
}));
}
integrant.core.normalize_key = (function integrant$core$normalize_key(k){
if(cljs.core.vector_QMARK_.call(null,k)){
return integrant.core.composite_keyword.call(null,k);
} else {
return k;
}
});
integrant.core.ambiguous_key_exception = (function integrant$core$ambiguous_key_exception(config,key,matching_keys){
return cljs.core.ex_info.call(null,["Ambiguous key: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),". Found multiple candidates: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",matching_keys))].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("integrant.core","ambiguous-key","integrant.core/ambiguous-key",953529055),new cljs.core.Keyword(null,"config","config",994861415),config,new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"matching-keys","matching-keys",-1609370737),matching_keys], null));
});
/**
 * Return true if a key is derived from candidate keyword or vector of
 *   keywords.
 */
integrant.core.derived_from_QMARK_ = (function integrant$core$derived_from_QMARK_(key,candidate){
var key__$1 = integrant.core.normalize_key.call(null,key);
if(cljs.core.vector_QMARK_.call(null,candidate)){
return cljs.core.every_QMARK_.call(null,((function (key__$1){
return (function (p1__32866_SHARP_){
return cljs.core.isa_QMARK_.call(null,key__$1,p1__32866_SHARP_);
});})(key__$1))
,candidate);
} else {
return cljs.core.isa_QMARK_.call(null,key__$1,candidate);
}
});
/**
 * Return a seq of all entries in a map, m, where the key is derived from the
 *   a candidate key, k. If there are no matching keys, nil is returned. The
 *   candidate key may be a keyword, or vector of keywords.
 */
integrant.core.find_derived = (function integrant$core$find_derived(m,k){
return cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__32867_SHARP_){
var or__30102__auto__ = cljs.core._EQ_.call(null,cljs.core.key.call(null,p1__32867_SHARP_),k);
if(or__30102__auto__){
return or__30102__auto__;
} else {
return integrant.core.derived_from_QMARK_.call(null,cljs.core.key.call(null,p1__32867_SHARP_),k);
}
}),m));
});
/**
 * Return the map entry in a map, m, where the key is derived from the keyword,
 *   k. If there are no matching keys, nil is returned. If there is more than one
 *   matching key, an ambiguous key exception is raised.
 */
integrant.core.find_derived_1 = (function integrant$core$find_derived_1(m,k){
var kvs = integrant.core.find_derived.call(null,m,k);
if(cljs.core.next.call(null,kvs)){
throw integrant.core.ambiguous_key_exception.call(null,m,k,cljs.core.map.call(null,cljs.core.key,kvs));
} else {
}

return cljs.core.first.call(null,kvs);
});
integrant.core.find_derived_refs = (function integrant$core$find_derived_refs(config,v){
return cljs.core.mapcat.call(null,(function (p1__32868_SHARP_){
return cljs.core.map.call(null,cljs.core.key,integrant.core.find_derived.call(null,config,p1__32868_SHARP_));
}),integrant.core.find_refs.call(null,v));
});
/**
 * Return a dependency graph of all the refs in a config. Resolve derived
 *   dependencies.
 */
integrant.core.dependency_graph = (function integrant$core$dependency_graph(config){
return cljs.core.reduce_kv.call(null,(function (g,k,v){
return cljs.core.reduce.call(null,(function (p1__32869_SHARP_,p2__32870_SHARP_){
return com.stuartsierra.dependency.depend.call(null,p1__32869_SHARP_,k,p2__32870_SHARP_);
}),g,integrant.core.find_derived_refs.call(null,config,v));
}),com.stuartsierra.dependency.graph.call(null),config);
});
integrant.core.find_keys = (function integrant$core$find_keys(config,keys,f){
var graph = integrant.core.dependency_graph.call(null,config);
var keyset = cljs.core.set.call(null,cljs.core.mapcat.call(null,((function (graph){
return (function (p1__32871_SHARP_){
return cljs.core.map.call(null,cljs.core.key,integrant.core.find_derived.call(null,config,p1__32871_SHARP_));
});})(graph))
,keys));
return cljs.core.sort.call(null,com.stuartsierra.dependency.topo_comparator.call(null,graph),clojure.set.union.call(null,keyset,f.call(null,graph,keyset)));
});
integrant.core.dependent_keys = (function integrant$core$dependent_keys(config,keys){
return integrant.core.find_keys.call(null,config,keys,com.stuartsierra.dependency.transitive_dependencies_set);
});
integrant.core.reverse_dependent_keys = (function integrant$core$reverse_dependent_keys(config,keys){
return cljs.core.reverse.call(null,integrant.core.find_keys.call(null,config,keys,com.stuartsierra.dependency.transitive_dependents_set));
});
integrant.core.missing_refs_exception = (function integrant$core$missing_refs_exception(config,refs){
return cljs.core.ex_info.call(null,["Missing definitions for refs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",refs))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("integrant.core","missing-refs","integrant.core/missing-refs",-232418620),new cljs.core.Keyword(null,"config","config",994861415),config,new cljs.core.Keyword(null,"missing-refs","missing-refs",-2034637127),refs], null));
});
integrant.core.ambiguous_refs = (function integrant$core$ambiguous_refs(config){
return cljs.core.filter.call(null,(function (p1__32872_SHARP_){
return cljs.core.next.call(null,integrant.core.find_derived.call(null,config,p1__32872_SHARP_));
}),integrant.core.find_refs.call(null,config));
});
integrant.core.missing_refs = (function integrant$core$missing_refs(config){
return cljs.core.remove.call(null,(function (p1__32873_SHARP_){
return integrant.core.find_derived.call(null,config,p1__32873_SHARP_);
}),integrant.core.find_refs.call(null,config));
});
integrant.core.resolve_ref = (function integrant$core$resolve_ref(config,ref){
return cljs.core.val.call(null,cljs.core.first.call(null,integrant.core.find_derived.call(null,config,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ref))));
});
integrant.core.expand_key = (function integrant$core$expand_key(config,value){
return clojure.walk.postwalk.call(null,(function (p1__32874_SHARP_){
if(cljs.core.truth_(integrant.core.ref_QMARK_.call(null,p1__32874_SHARP_))){
return integrant.core.resolve_ref.call(null,config,p1__32874_SHARP_);
} else {
return p1__32874_SHARP_;
}
}),value);
});
integrant.core.run_exception = (function integrant$core$run_exception(system,completed,remaining,f,k,v,t){
return cljs.core.ex_info.call(null,["Error on key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," when running system"].join(''),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("integrant.core","run-threw-exception","integrant.core/run-threw-exception",1175352467),new cljs.core.Keyword(null,"system","system",-29381724),system,new cljs.core.Keyword(null,"completed-keys","completed-keys",-988226740),cljs.core.reverse.call(null,completed),new cljs.core.Keyword(null,"remaining-keys","remaining-keys",-607706590),cljs.core.rest.call(null,remaining),new cljs.core.Keyword(null,"function","function",-2127255473),f,new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"value","value",305978217),v], null),t);
});
integrant.core.try_run_action = (function integrant$core$try_run_action(system,completed,remaining,f,k){
var v = system.call(null,k);
try{return f.call(null,k,v);
}catch (e32875){var t = e32875;
throw integrant.core.run_exception.call(null,system,completed,remaining,f,k,v,t);
}});
integrant.core.run_loop = (function integrant$core$run_loop(system,keys,f){
var completed = cljs.core.List.EMPTY;
var remaining = keys;
while(true){
if(cljs.core.seq.call(null,remaining)){
var k = cljs.core.first.call(null,remaining);
integrant.core.try_run_action.call(null,system,completed,remaining,f,k);

var G__32876 = cljs.core.cons.call(null,k,completed);
var G__32877 = cljs.core.rest.call(null,remaining);
completed = G__32876;
remaining = G__32877;
continue;
} else {
return null;
}
break;
}
});
/**
 * Apply a side-effectful function f to each key value pair in a system map.
 *   Keys are traversed in dependency order. The function should take two
 *   arguments, a key and value.
 */
integrant.core.run_BANG_ = (function integrant$core$run_BANG_(system,keys,f){
if(cljs.core.map_QMARK_.call(null,system)){
} else {
throw (new Error("Assert failed: (map? system)"));
}

if(cljs.core.truth_((function (){var G__32878 = system;
var G__32878__$1 = (((G__32878 == null))?null:cljs.core.meta.call(null,G__32878));
if((G__32878__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("integrant.core","origin","integrant.core/origin",-1025941839).cljs$core$IFn$_invoke$arity$1(G__32878__$1);
}
})())){
} else {
throw (new Error("Assert failed: (some-> system meta :integrant.core/origin)"));
}

return integrant.core.run_loop.call(null,system,integrant.core.dependent_keys.call(null,new cljs.core.Keyword("integrant.core","origin","integrant.core/origin",-1025941839).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,system)),keys),f);
});
/**
 * Apply a side-effectful function f to each key value pair in a system map.
 *   Keys are traversed in reverse dependency order. The function should take two
 *   arguments, a key and value.
 */
integrant.core.reverse_run_BANG_ = (function integrant$core$reverse_run_BANG_(system,keys,f){
if(cljs.core.map_QMARK_.call(null,system)){
} else {
throw (new Error("Assert failed: (map? system)"));
}

if(cljs.core.truth_((function (){var G__32879 = system;
var G__32879__$1 = (((G__32879 == null))?null:cljs.core.meta.call(null,G__32879));
if((G__32879__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("integrant.core","origin","integrant.core/origin",-1025941839).cljs$core$IFn$_invoke$arity$1(G__32879__$1);
}
})())){
} else {
throw (new Error("Assert failed: (some-> system meta :integrant.core/origin)"));
}

return integrant.core.run_loop.call(null,system,integrant.core.reverse_dependent_keys.call(null,new cljs.core.Keyword("integrant.core","origin","integrant.core/origin",-1025941839).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,system)),keys),f);
});
integrant.core.build_exception = (function integrant$core$build_exception(system,f,k,v,t){
return cljs.core.ex_info.call(null,["Error on key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," when building system"].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("integrant.core","build-threw-exception","integrant.core/build-threw-exception",-205617592),new cljs.core.Keyword(null,"system","system",-29381724),system,new cljs.core.Keyword(null,"function","function",-2127255473),f,new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"value","value",305978217),v], null),t);
});
integrant.core.try_build_action = (function integrant$core$try_build_action(system,f,k,v){
try{return f.call(null,k,v);
}catch (e32880){var t = e32880;
throw integrant.core.build_exception.call(null,system,f,k,v,t);
}});
integrant.core.build_key = (function integrant$core$build_key(f,assertf,system,p__32881){
var vec__32882 = p__32881;
var k = cljs.core.nth.call(null,vec__32882,(0),null);
var v = cljs.core.nth.call(null,vec__32882,(1),null);
var v_SINGLEQUOTE_ = integrant.core.expand_key.call(null,system,v);
assertf.call(null,system,k,v_SINGLEQUOTE_);

return cljs.core.vary_meta.call(null,cljs.core.assoc.call(null,system,k,integrant.core.try_build_action.call(null,system,f,k,v_SINGLEQUOTE_)),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("integrant.core","build","integrant.core/build",-1937237701),k], null),v_SINGLEQUOTE_);
});
/**
 * Apply a function f to each key value pair in a configuration map. Keys are
 *   traversed in dependency order, and any references in the value expanded. The
 *   function should take two arguments, a key and value, and return a new value.
 *   An optional fourth argument, assertf, may be supplied to provide an assertion
 *   check on the system, key and expanded value.
 */
integrant.core.build = (function integrant$core$build(var_args){
var G__32886 = arguments.length;
switch (G__32886) {
case 3:
return integrant.core.build.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return integrant.core.build.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

integrant.core.build.cljs$core$IFn$_invoke$arity$3 = (function (config,keys,f){
return integrant.core.build.call(null,config,keys,f,(function (_,___$1,___$2){
return null;
}));
});

integrant.core.build.cljs$core$IFn$_invoke$arity$4 = (function (config,keys,f,assertf){
if(cljs.core.map_QMARK_.call(null,config)){
} else {
throw (new Error("Assert failed: (map? config)"));
}

var relevant_keys = integrant.core.dependent_keys.call(null,config,keys);
var relevant_config = cljs.core.select_keys.call(null,config,relevant_keys);
var temp__5457__auto___32888 = cljs.core.first.call(null,integrant.core.ambiguous_refs.call(null,relevant_config));
if(cljs.core.truth_(temp__5457__auto___32888)){
var ref_32889 = temp__5457__auto___32888;
throw integrant.core.ambiguous_key_exception.call(null,config,ref_32889,cljs.core.map.call(null,cljs.core.key,integrant.core.find_derived.call(null,config,ref_32889)));
} else {
}

var temp__5457__auto___32890 = cljs.core.seq.call(null,integrant.core.missing_refs.call(null,relevant_config));
if(temp__5457__auto___32890){
var refs_32891 = temp__5457__auto___32890;
throw integrant.core.missing_refs_exception.call(null,config,refs_32891);
} else {
}

return cljs.core.reduce.call(null,cljs.core.partial.call(null,integrant.core.build_key,f,assertf),cljs.core.with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("integrant.core","origin","integrant.core/origin",-1025941839),config], null)),cljs.core.map.call(null,((function (relevant_keys,relevant_config){
return (function (k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,config.call(null,k)], null);
});})(relevant_keys,relevant_config))
,relevant_keys));
});

integrant.core.build.cljs$lang$maxFixedArity = 4;

/**
 * Replace all refs with the values they correspond to.
 */
integrant.core.expand = (function integrant$core$expand(config){
return integrant.core.build.call(null,config,cljs.core.keys.call(null,config),(function (_,v){
return v;
}));
});
if(typeof integrant.core.init_key !== 'undefined'){
} else {
/**
 * Turn a config value associated with a key into a concrete implementation.
 *   For example, a database URL might be turned into a database connection.
 */
integrant.core.init_key = (function (){var method_table__31157__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__31158__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__31159__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__31160__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__31161__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"integrant.core","init-key"),((function (method_table__31157__auto__,prefer_table__31158__auto__,method_cache__31159__auto__,cached_hierarchy__31160__auto__,hierarchy__31161__auto__){
return (function (key,value){
return integrant.core.normalize_key.call(null,key);
});})(method_table__31157__auto__,prefer_table__31158__auto__,method_cache__31159__auto__,cached_hierarchy__31160__auto__,hierarchy__31161__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__31161__auto__,method_table__31157__auto__,prefer_table__31158__auto__,method_cache__31159__auto__,cached_hierarchy__31160__auto__));
})();
}
if(typeof integrant.core.halt_key_BANG_ !== 'undefined'){
} else {
/**
 * Halt a running or suspended implementation associated with a key. This is
 *   often used for stopping processes or cleaning up resources. For example, a
 *   database connection might be closed. This multimethod must be idempotent.
 *   The return value of this multimethod is discarded.
 */
integrant.core.halt_key_BANG_ = (function (){var method_table__31157__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__31158__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__31159__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__31160__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__31161__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"integrant.core","halt-key!"),((function (method_table__31157__auto__,prefer_table__31158__auto__,method_cache__31159__auto__,cached_hierarchy__31160__auto__,hierarchy__31161__auto__){
return (function (key,value){
return integrant.core.normalize_key.call(null,key);
});})(method_table__31157__auto__,prefer_table__31158__auto__,method_cache__31159__auto__,cached_hierarchy__31160__auto__,hierarchy__31161__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__31161__auto__,method_table__31157__auto__,prefer_table__31158__auto__,method_cache__31159__auto__,cached_hierarchy__31160__auto__));
})();
}
cljs.core._add_method.call(null,integrant.core.halt_key_BANG_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,v){
return null;
}));
if(typeof integrant.core.resume_key !== 'undefined'){
} else {
/**
 * Turn a config value associated with a key into a concrete implementation,
 *   but reuse resources (e.g. connections, running threads, etc) from an existing
 *   implementation. By default this multimethod calls init-key and ignores the
 *   additional argument.
 */
integrant.core.resume_key = (function (){var method_table__31157__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__31158__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__31159__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__31160__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__31161__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"integrant.core","resume-key"),((function (method_table__31157__auto__,prefer_table__31158__auto__,method_cache__31159__auto__,cached_hierarchy__31160__auto__,hierarchy__31161__auto__){
return (function (key,value,old_value,old_impl){
return integrant.core.normalize_key.call(null,key);
});})(method_table__31157__auto__,prefer_table__31158__auto__,method_cache__31159__auto__,cached_hierarchy__31160__auto__,hierarchy__31161__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__31161__auto__,method_table__31157__auto__,prefer_table__31158__auto__,method_cache__31159__auto__,cached_hierarchy__31160__auto__));
})();
}
cljs.core._add_method.call(null,integrant.core.resume_key,new cljs.core.Keyword(null,"default","default",-1987822328),(function (k,v,_,___$1){
return integrant.core.init_key.call(null,k,v);
}));
if(typeof integrant.core.suspend_key_BANG_ !== 'undefined'){
} else {
/**
 * Suspend a running implementation associated with a key, so that it may be
 *   eventually passed to resume-key. By default this multimethod calls halt-key!,
 *   but it may be customized to do things like keep a server running, but buffer
 *   incoming requests until the server is resumed.
 */
integrant.core.suspend_key_BANG_ = (function (){var method_table__31157__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__31158__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__31159__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__31160__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__31161__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"integrant.core","suspend-key!"),((function (method_table__31157__auto__,prefer_table__31158__auto__,method_cache__31159__auto__,cached_hierarchy__31160__auto__,hierarchy__31161__auto__){
return (function (key,value){
return integrant.core.normalize_key.call(null,key);
});})(method_table__31157__auto__,prefer_table__31158__auto__,method_cache__31159__auto__,cached_hierarchy__31160__auto__,hierarchy__31161__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__31161__auto__,method_table__31157__auto__,prefer_table__31158__auto__,method_cache__31159__auto__,cached_hierarchy__31160__auto__));
})();
}
cljs.core._add_method.call(null,integrant.core.suspend_key_BANG_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (k,v){
return integrant.core.halt_key_BANG_.call(null,k,v);
}));
if(typeof integrant.core.pre_init_spec !== 'undefined'){
} else {
/**
 * Return a spec for the supplied key that is used to check the associated
 *   value before the key is initiated.
 */
integrant.core.pre_init_spec = (function (){var method_table__31157__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__31158__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__31159__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__31160__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__31161__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"integrant.core","pre-init-spec"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__31161__auto__,method_table__31157__auto__,prefer_table__31158__auto__,method_cache__31159__auto__,cached_hierarchy__31160__auto__));
})();
}
cljs.core._add_method.call(null,integrant.core.pre_init_spec,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return null;
}));
integrant.core.spec_exception = (function integrant$core$spec_exception(system,k,v,spec,ed){
return cljs.core.ex_info.call(null,["Spec failed on key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," when building system\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__31229__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_32892_32894 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_32893_32895 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_32892_32894,_STAR_print_fn_STAR_32893_32895,sb__31229__auto__){
return (function (x__31230__auto__){
return sb__31229__auto__.append(x__31230__auto__);
});})(_STAR_print_newline_STAR_32892_32894,_STAR_print_fn_STAR_32893_32895,sb__31229__auto__))
;

try{cljs.spec.alpha.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_32893_32895;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_32892_32894;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__31229__auto__)].join('');
})())].join(''),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("integrant.core","build-failed-spec","integrant.core/build-failed-spec",1167262590),new cljs.core.Keyword(null,"system","system",-29381724),system,new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"spec","spec",347520401),spec,new cljs.core.Keyword(null,"explain","explain",484226146),ed], null));
});
integrant.core.assert_pre_init_spec = (function integrant$core$assert_pre_init_spec(system,key,value){
var temp__5457__auto__ = integrant.core.pre_init_spec.call(null,key);
if(cljs.core.truth_(temp__5457__auto__)){
var spec = temp__5457__auto__;
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.call(null,spec,value))){
return null;
} else {
throw integrant.core.spec_exception.call(null,system,key,value,spec,cljs.spec.alpha.explain_data.call(null,spec,value));
}
} else {
return null;
}
});
/**
 * Turn a config map into an system map. Keys are traversed in dependency
 *   order, initiated via the init-key multimethod, then the refs associated with
 *   the key are expanded.
 */
integrant.core.init = (function integrant$core$init(var_args){
var G__32897 = arguments.length;
switch (G__32897) {
case 1:
return integrant.core.init.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return integrant.core.init.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

integrant.core.init.cljs$core$IFn$_invoke$arity$1 = (function (config){
return integrant.core.init.call(null,config,cljs.core.keys.call(null,config));
});

integrant.core.init.cljs$core$IFn$_invoke$arity$2 = (function (config,keys){
if(cljs.core.map_QMARK_.call(null,config)){
} else {
throw (new Error("Assert failed: (map? config)"));
}

return integrant.core.build.call(null,config,keys,integrant.core.init_key,integrant.core.assert_pre_init_spec);
});

integrant.core.init.cljs$lang$maxFixedArity = 2;

/**
 * Halt a system map by applying halt-key! in reverse dependency order.
 */
integrant.core.halt_BANG_ = (function integrant$core$halt_BANG_(var_args){
var G__32900 = arguments.length;
switch (G__32900) {
case 1:
return integrant.core.halt_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return integrant.core.halt_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

integrant.core.halt_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (system){
return integrant.core.halt_BANG_.call(null,system,cljs.core.keys.call(null,system));
});

integrant.core.halt_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (system,keys){
if(cljs.core.map_QMARK_.call(null,system)){
} else {
throw (new Error("Assert failed: (map? system)"));
}

if(cljs.core.truth_((function (){var G__32901 = system;
var G__32901__$1 = (((G__32901 == null))?null:cljs.core.meta.call(null,G__32901));
if((G__32901__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("integrant.core","origin","integrant.core/origin",-1025941839).cljs$core$IFn$_invoke$arity$1(G__32901__$1);
}
})())){
} else {
throw (new Error("Assert failed: (some-> system meta :integrant.core/origin)"));
}

return integrant.core.reverse_run_BANG_.call(null,system,keys,integrant.core.halt_key_BANG_);
});

integrant.core.halt_BANG_.cljs$lang$maxFixedArity = 2;

integrant.core.missing_keys = (function integrant$core$missing_keys(system,ks){
return cljs.core.remove.call(null,cljs.core.set.call(null,ks),cljs.core.keys.call(null,system));
});
integrant.core.halt_missing_keys_BANG_ = (function integrant$core$halt_missing_keys_BANG_(system,keys){
var graph = integrant.core.dependency_graph.call(null,new cljs.core.Keyword("integrant.core","origin","integrant.core/origin",-1025941839).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,system)));
var seq__32903 = cljs.core.seq.call(null,cljs.core.sort.call(null,com.stuartsierra.dependency.topo_comparator.call(null,graph),integrant.core.missing_keys.call(null,system,keys)));
var chunk__32904 = null;
var count__32905 = (0);
var i__32906 = (0);
while(true){
if((i__32906 < count__32905)){
var k = cljs.core._nth.call(null,chunk__32904,i__32906);
integrant.core.halt_key_BANG_.call(null,k,system.call(null,k));

var G__32907 = seq__32903;
var G__32908 = chunk__32904;
var G__32909 = count__32905;
var G__32910 = (i__32906 + (1));
seq__32903 = G__32907;
chunk__32904 = G__32908;
count__32905 = G__32909;
i__32906 = G__32910;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__32903);
if(temp__5457__auto__){
var seq__32903__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32903__$1)){
var c__31033__auto__ = cljs.core.chunk_first.call(null,seq__32903__$1);
var G__32911 = cljs.core.chunk_rest.call(null,seq__32903__$1);
var G__32912 = c__31033__auto__;
var G__32913 = cljs.core.count.call(null,c__31033__auto__);
var G__32914 = (0);
seq__32903 = G__32911;
chunk__32904 = G__32912;
count__32905 = G__32913;
i__32906 = G__32914;
continue;
} else {
var k = cljs.core.first.call(null,seq__32903__$1);
integrant.core.halt_key_BANG_.call(null,k,system.call(null,k));

var G__32915 = cljs.core.next.call(null,seq__32903__$1);
var G__32916 = null;
var G__32917 = (0);
var G__32918 = (0);
seq__32903 = G__32915;
chunk__32904 = G__32916;
count__32905 = G__32917;
i__32906 = G__32918;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Turn a config map into a system map, reusing resources from an existing
 *   system when it's possible to do so. Keys are traversed in dependency order,
 *   resumed with the resume-key multimethod, then the refs associated with the
 *   key are expanded.
 */
integrant.core.resume = (function integrant$core$resume(var_args){
var G__32920 = arguments.length;
switch (G__32920) {
case 2:
return integrant.core.resume.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return integrant.core.resume.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

integrant.core.resume.cljs$core$IFn$_invoke$arity$2 = (function (config,system){
return integrant.core.resume.call(null,config,system,cljs.core.keys.call(null,config));
});

integrant.core.resume.cljs$core$IFn$_invoke$arity$3 = (function (config,system,keys){
if(cljs.core.map_QMARK_.call(null,config)){
} else {
throw (new Error("Assert failed: (map? config)"));
}

if(cljs.core.map_QMARK_.call(null,system)){
} else {
throw (new Error("Assert failed: (map? system)"));
}

if(cljs.core.truth_((function (){var G__32921 = system;
var G__32921__$1 = (((G__32921 == null))?null:cljs.core.meta.call(null,G__32921));
if((G__32921__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("integrant.core","origin","integrant.core/origin",-1025941839).cljs$core$IFn$_invoke$arity$1(G__32921__$1);
}
})())){
} else {
throw (new Error("Assert failed: (some-> system meta :integrant.core/origin)"));
}

integrant.core.halt_missing_keys_BANG_.call(null,system,keys);

return integrant.core.build.call(null,config,keys,(function (k,v){
if(cljs.core.contains_QMARK_.call(null,system,k)){
return integrant.core.resume_key.call(null,k,v,cljs.core.get.call(null,new cljs.core.Keyword("integrant.core","build","integrant.core/build",-1937237701).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,system)),k),system.call(null,k));
} else {
return integrant.core.init_key.call(null,k,v);
}
}));
});

integrant.core.resume.cljs$lang$maxFixedArity = 3;

/**
 * Suspend a system map by applying suspend-key! in reverse dependency order.
 */
integrant.core.suspend_BANG_ = (function integrant$core$suspend_BANG_(var_args){
var G__32924 = arguments.length;
switch (G__32924) {
case 1:
return integrant.core.suspend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return integrant.core.suspend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

integrant.core.suspend_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (system){
return integrant.core.suspend_BANG_.call(null,system,cljs.core.keys.call(null,system));
});

integrant.core.suspend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (system,keys){
if(cljs.core.map_QMARK_.call(null,system)){
} else {
throw (new Error("Assert failed: (map? system)"));
}

if(cljs.core.truth_((function (){var G__32925 = system;
var G__32925__$1 = (((G__32925 == null))?null:cljs.core.meta.call(null,G__32925));
if((G__32925__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("integrant.core","origin","integrant.core/origin",-1025941839).cljs$core$IFn$_invoke$arity$1(G__32925__$1);
}
})())){
} else {
throw (new Error("Assert failed: (some-> system meta :integrant.core/origin)"));
}

return integrant.core.reverse_run_BANG_.call(null,system,keys,integrant.core.suspend_key_BANG_);
});

integrant.core.suspend_BANG_.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=core.js.map?rel=1518288631117
