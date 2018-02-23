// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__30102__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__30102__auto__){
return or__30102__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__30102__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__30102__auto__)){
return or__30102__auto__;
} else {
var or__30102__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__30102__auto____$1)){
return or__30102__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__37770_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__37770_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__37771 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__37772 = null;
var count__37773 = (0);
var i__37774 = (0);
while(true){
if((i__37774 < count__37773)){
var n = cljs.core._nth.call(null,chunk__37772,i__37774);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37775 = seq__37771;
var G__37776 = chunk__37772;
var G__37777 = count__37773;
var G__37778 = (i__37774 + (1));
seq__37771 = G__37775;
chunk__37772 = G__37776;
count__37773 = G__37777;
i__37774 = G__37778;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__37771);
if(temp__5457__auto__){
var seq__37771__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37771__$1)){
var c__31033__auto__ = cljs.core.chunk_first.call(null,seq__37771__$1);
var G__37779 = cljs.core.chunk_rest.call(null,seq__37771__$1);
var G__37780 = c__31033__auto__;
var G__37781 = cljs.core.count.call(null,c__31033__auto__);
var G__37782 = (0);
seq__37771 = G__37779;
chunk__37772 = G__37780;
count__37773 = G__37781;
i__37774 = G__37782;
continue;
} else {
var n = cljs.core.first.call(null,seq__37771__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37783 = cljs.core.next.call(null,seq__37771__$1);
var G__37784 = null;
var G__37785 = (0);
var G__37786 = (0);
seq__37771 = G__37783;
chunk__37772 = G__37784;
count__37773 = G__37785;
i__37774 = G__37786;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__37787){
var vec__37788 = p__37787;
var _ = cljs.core.nth.call(null,vec__37788,(0),null);
var v = cljs.core.nth.call(null,vec__37788,(1),null);
var and__30090__auto__ = v;
if(cljs.core.truth_(and__30090__auto__)){
return v.call(null,dep);
} else {
return and__30090__auto__;
}
}),cljs.core.filter.call(null,(function (p__37791){
var vec__37792 = p__37791;
var k = cljs.core.nth.call(null,vec__37792,(0),null);
var v = cljs.core.nth.call(null,vec__37792,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__37804_37812 = cljs.core.seq.call(null,deps);
var chunk__37805_37813 = null;
var count__37806_37814 = (0);
var i__37807_37815 = (0);
while(true){
if((i__37807_37815 < count__37806_37814)){
var dep_37816 = cljs.core._nth.call(null,chunk__37805_37813,i__37807_37815);
if(cljs.core.truth_((function (){var and__30090__auto__ = dep_37816;
if(cljs.core.truth_(and__30090__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_37816));
} else {
return and__30090__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_37816,(depth + (1)),state);
} else {
}

var G__37817 = seq__37804_37812;
var G__37818 = chunk__37805_37813;
var G__37819 = count__37806_37814;
var G__37820 = (i__37807_37815 + (1));
seq__37804_37812 = G__37817;
chunk__37805_37813 = G__37818;
count__37806_37814 = G__37819;
i__37807_37815 = G__37820;
continue;
} else {
var temp__5457__auto___37821 = cljs.core.seq.call(null,seq__37804_37812);
if(temp__5457__auto___37821){
var seq__37804_37822__$1 = temp__5457__auto___37821;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37804_37822__$1)){
var c__31033__auto___37823 = cljs.core.chunk_first.call(null,seq__37804_37822__$1);
var G__37824 = cljs.core.chunk_rest.call(null,seq__37804_37822__$1);
var G__37825 = c__31033__auto___37823;
var G__37826 = cljs.core.count.call(null,c__31033__auto___37823);
var G__37827 = (0);
seq__37804_37812 = G__37824;
chunk__37805_37813 = G__37825;
count__37806_37814 = G__37826;
i__37807_37815 = G__37827;
continue;
} else {
var dep_37828 = cljs.core.first.call(null,seq__37804_37822__$1);
if(cljs.core.truth_((function (){var and__30090__auto__ = dep_37828;
if(cljs.core.truth_(and__30090__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_37828));
} else {
return and__30090__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_37828,(depth + (1)),state);
} else {
}

var G__37829 = cljs.core.next.call(null,seq__37804_37822__$1);
var G__37830 = null;
var G__37831 = (0);
var G__37832 = (0);
seq__37804_37812 = G__37829;
chunk__37805_37813 = G__37830;
count__37806_37814 = G__37831;
i__37807_37815 = G__37832;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__37808){
var vec__37809 = p__37808;
var seq__37810 = cljs.core.seq.call(null,vec__37809);
var first__37811 = cljs.core.first.call(null,seq__37810);
var seq__37810__$1 = cljs.core.next.call(null,seq__37810);
var x = first__37811;
var xs = seq__37810__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__37809,seq__37810,first__37811,seq__37810__$1,x,xs,get_deps__$1){
return (function (p1__37795_SHARP_){
return clojure.set.difference.call(null,p1__37795_SHARP_,x);
});})(vec__37809,seq__37810,first__37811,seq__37810__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__37833 = cljs.core.seq.call(null,provides);
var chunk__37834 = null;
var count__37835 = (0);
var i__37836 = (0);
while(true){
if((i__37836 < count__37835)){
var prov = cljs.core._nth.call(null,chunk__37834,i__37836);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37837_37845 = cljs.core.seq.call(null,requires);
var chunk__37838_37846 = null;
var count__37839_37847 = (0);
var i__37840_37848 = (0);
while(true){
if((i__37840_37848 < count__37839_37847)){
var req_37849 = cljs.core._nth.call(null,chunk__37838_37846,i__37840_37848);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37849,prov);

var G__37850 = seq__37837_37845;
var G__37851 = chunk__37838_37846;
var G__37852 = count__37839_37847;
var G__37853 = (i__37840_37848 + (1));
seq__37837_37845 = G__37850;
chunk__37838_37846 = G__37851;
count__37839_37847 = G__37852;
i__37840_37848 = G__37853;
continue;
} else {
var temp__5457__auto___37854 = cljs.core.seq.call(null,seq__37837_37845);
if(temp__5457__auto___37854){
var seq__37837_37855__$1 = temp__5457__auto___37854;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37837_37855__$1)){
var c__31033__auto___37856 = cljs.core.chunk_first.call(null,seq__37837_37855__$1);
var G__37857 = cljs.core.chunk_rest.call(null,seq__37837_37855__$1);
var G__37858 = c__31033__auto___37856;
var G__37859 = cljs.core.count.call(null,c__31033__auto___37856);
var G__37860 = (0);
seq__37837_37845 = G__37857;
chunk__37838_37846 = G__37858;
count__37839_37847 = G__37859;
i__37840_37848 = G__37860;
continue;
} else {
var req_37861 = cljs.core.first.call(null,seq__37837_37855__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37861,prov);

var G__37862 = cljs.core.next.call(null,seq__37837_37855__$1);
var G__37863 = null;
var G__37864 = (0);
var G__37865 = (0);
seq__37837_37845 = G__37862;
chunk__37838_37846 = G__37863;
count__37839_37847 = G__37864;
i__37840_37848 = G__37865;
continue;
}
} else {
}
}
break;
}

var G__37866 = seq__37833;
var G__37867 = chunk__37834;
var G__37868 = count__37835;
var G__37869 = (i__37836 + (1));
seq__37833 = G__37866;
chunk__37834 = G__37867;
count__37835 = G__37868;
i__37836 = G__37869;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__37833);
if(temp__5457__auto__){
var seq__37833__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37833__$1)){
var c__31033__auto__ = cljs.core.chunk_first.call(null,seq__37833__$1);
var G__37870 = cljs.core.chunk_rest.call(null,seq__37833__$1);
var G__37871 = c__31033__auto__;
var G__37872 = cljs.core.count.call(null,c__31033__auto__);
var G__37873 = (0);
seq__37833 = G__37870;
chunk__37834 = G__37871;
count__37835 = G__37872;
i__37836 = G__37873;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37833__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37841_37874 = cljs.core.seq.call(null,requires);
var chunk__37842_37875 = null;
var count__37843_37876 = (0);
var i__37844_37877 = (0);
while(true){
if((i__37844_37877 < count__37843_37876)){
var req_37878 = cljs.core._nth.call(null,chunk__37842_37875,i__37844_37877);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37878,prov);

var G__37879 = seq__37841_37874;
var G__37880 = chunk__37842_37875;
var G__37881 = count__37843_37876;
var G__37882 = (i__37844_37877 + (1));
seq__37841_37874 = G__37879;
chunk__37842_37875 = G__37880;
count__37843_37876 = G__37881;
i__37844_37877 = G__37882;
continue;
} else {
var temp__5457__auto___37883__$1 = cljs.core.seq.call(null,seq__37841_37874);
if(temp__5457__auto___37883__$1){
var seq__37841_37884__$1 = temp__5457__auto___37883__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37841_37884__$1)){
var c__31033__auto___37885 = cljs.core.chunk_first.call(null,seq__37841_37884__$1);
var G__37886 = cljs.core.chunk_rest.call(null,seq__37841_37884__$1);
var G__37887 = c__31033__auto___37885;
var G__37888 = cljs.core.count.call(null,c__31033__auto___37885);
var G__37889 = (0);
seq__37841_37874 = G__37886;
chunk__37842_37875 = G__37887;
count__37843_37876 = G__37888;
i__37844_37877 = G__37889;
continue;
} else {
var req_37890 = cljs.core.first.call(null,seq__37841_37884__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37890,prov);

var G__37891 = cljs.core.next.call(null,seq__37841_37884__$1);
var G__37892 = null;
var G__37893 = (0);
var G__37894 = (0);
seq__37841_37874 = G__37891;
chunk__37842_37875 = G__37892;
count__37843_37876 = G__37893;
i__37844_37877 = G__37894;
continue;
}
} else {
}
}
break;
}

var G__37895 = cljs.core.next.call(null,seq__37833__$1);
var G__37896 = null;
var G__37897 = (0);
var G__37898 = (0);
seq__37833 = G__37895;
chunk__37834 = G__37896;
count__37835 = G__37897;
i__37836 = G__37898;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__37899_37903 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__37900_37904 = null;
var count__37901_37905 = (0);
var i__37902_37906 = (0);
while(true){
if((i__37902_37906 < count__37901_37905)){
var ns_37907 = cljs.core._nth.call(null,chunk__37900_37904,i__37902_37906);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37907);

var G__37908 = seq__37899_37903;
var G__37909 = chunk__37900_37904;
var G__37910 = count__37901_37905;
var G__37911 = (i__37902_37906 + (1));
seq__37899_37903 = G__37908;
chunk__37900_37904 = G__37909;
count__37901_37905 = G__37910;
i__37902_37906 = G__37911;
continue;
} else {
var temp__5457__auto___37912 = cljs.core.seq.call(null,seq__37899_37903);
if(temp__5457__auto___37912){
var seq__37899_37913__$1 = temp__5457__auto___37912;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37899_37913__$1)){
var c__31033__auto___37914 = cljs.core.chunk_first.call(null,seq__37899_37913__$1);
var G__37915 = cljs.core.chunk_rest.call(null,seq__37899_37913__$1);
var G__37916 = c__31033__auto___37914;
var G__37917 = cljs.core.count.call(null,c__31033__auto___37914);
var G__37918 = (0);
seq__37899_37903 = G__37915;
chunk__37900_37904 = G__37916;
count__37901_37905 = G__37917;
i__37902_37906 = G__37918;
continue;
} else {
var ns_37919 = cljs.core.first.call(null,seq__37899_37913__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37919);

var G__37920 = cljs.core.next.call(null,seq__37899_37913__$1);
var G__37921 = null;
var G__37922 = (0);
var G__37923 = (0);
seq__37899_37903 = G__37920;
chunk__37900_37904 = G__37921;
count__37901_37905 = G__37922;
i__37902_37906 = G__37923;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__30102__auto__ = goog.require__;
if(cljs.core.truth_(or__30102__auto__)){
return or__30102__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__37924__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__37924 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37925__i = 0, G__37925__a = new Array(arguments.length -  0);
while (G__37925__i < G__37925__a.length) {G__37925__a[G__37925__i] = arguments[G__37925__i + 0]; ++G__37925__i;}
  args = new cljs.core.IndexedSeq(G__37925__a,0,null);
} 
return G__37924__delegate.call(this,args);};
G__37924.cljs$lang$maxFixedArity = 0;
G__37924.cljs$lang$applyTo = (function (arglist__37926){
var args = cljs.core.seq(arglist__37926);
return G__37924__delegate(args);
});
G__37924.cljs$core$IFn$_invoke$arity$variadic = G__37924__delegate;
return G__37924;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__37927_SHARP_,p2__37928_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37927_SHARP_)].join('')),p2__37928_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__37929_SHARP_,p2__37930_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37929_SHARP_)].join(''),p2__37930_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__37931 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__37931.addCallback(((function (G__37931){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__37931))
);

G__37931.addErrback(((function (G__37931){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__37931))
);

return G__37931;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e37932){if((e37932 instanceof Error)){
var e = e37932;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37932;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e37933){if((e37933 instanceof Error)){
var e = e37933;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37933;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__37934 = cljs.core._EQ_;
var expr__37935 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__37934.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__37935))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__37934.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__37935))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__37934.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__37935))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__37934,expr__37935){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__37934,expr__37935))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37937,callback){
var map__37938 = p__37937;
var map__37938__$1 = ((((!((map__37938 == null)))?((((map__37938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37938.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37938):map__37938);
var file_msg = map__37938__$1;
var request_url = cljs.core.get.call(null,map__37938__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__30102__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__30102__auto__)){
return or__30102__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__37938,map__37938__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__37938,map__37938__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__34580__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34580__auto__){
return (function (){
var f__34581__auto__ = (function (){var switch__34525__auto__ = ((function (c__34580__auto__){
return (function (state_37978){
var state_val_37979 = (state_37978[(1)]);
if((state_val_37979 === (7))){
var inst_37974 = (state_37978[(2)]);
var state_37978__$1 = state_37978;
var statearr_37980_38007 = state_37978__$1;
(statearr_37980_38007[(2)] = inst_37974);

(statearr_37980_38007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37979 === (1))){
var state_37978__$1 = state_37978;
var statearr_37981_38008 = state_37978__$1;
(statearr_37981_38008[(2)] = null);

(statearr_37981_38008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37979 === (4))){
var inst_37942 = (state_37978[(7)]);
var inst_37942__$1 = (state_37978[(2)]);
var state_37978__$1 = (function (){var statearr_37982 = state_37978;
(statearr_37982[(7)] = inst_37942__$1);

return statearr_37982;
})();
if(cljs.core.truth_(inst_37942__$1)){
var statearr_37983_38009 = state_37978__$1;
(statearr_37983_38009[(1)] = (5));

} else {
var statearr_37984_38010 = state_37978__$1;
(statearr_37984_38010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37979 === (15))){
var inst_37959 = (state_37978[(8)]);
var inst_37956 = (state_37978[(9)]);
var inst_37961 = inst_37959.call(null,inst_37956);
var state_37978__$1 = state_37978;
var statearr_37985_38011 = state_37978__$1;
(statearr_37985_38011[(2)] = inst_37961);

(statearr_37985_38011[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37979 === (13))){
var inst_37968 = (state_37978[(2)]);
var state_37978__$1 = state_37978;
var statearr_37986_38012 = state_37978__$1;
(statearr_37986_38012[(2)] = inst_37968);

(statearr_37986_38012[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37979 === (6))){
var state_37978__$1 = state_37978;
var statearr_37987_38013 = state_37978__$1;
(statearr_37987_38013[(2)] = null);

(statearr_37987_38013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37979 === (17))){
var inst_37965 = (state_37978[(2)]);
var state_37978__$1 = state_37978;
var statearr_37988_38014 = state_37978__$1;
(statearr_37988_38014[(2)] = inst_37965);

(statearr_37988_38014[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37979 === (3))){
var inst_37976 = (state_37978[(2)]);
var state_37978__$1 = state_37978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37978__$1,inst_37976);
} else {
if((state_val_37979 === (12))){
var state_37978__$1 = state_37978;
var statearr_37989_38015 = state_37978__$1;
(statearr_37989_38015[(2)] = null);

(statearr_37989_38015[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37979 === (2))){
var state_37978__$1 = state_37978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37978__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_37979 === (11))){
var inst_37947 = (state_37978[(10)]);
var inst_37954 = figwheel.client.file_reloading.blocking_load.call(null,inst_37947);
var state_37978__$1 = state_37978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37978__$1,(14),inst_37954);
} else {
if((state_val_37979 === (9))){
var inst_37947 = (state_37978[(10)]);
var state_37978__$1 = state_37978;
if(cljs.core.truth_(inst_37947)){
var statearr_37990_38016 = state_37978__$1;
(statearr_37990_38016[(1)] = (11));

} else {
var statearr_37991_38017 = state_37978__$1;
(statearr_37991_38017[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37979 === (5))){
var inst_37942 = (state_37978[(7)]);
var inst_37948 = (state_37978[(11)]);
var inst_37947 = cljs.core.nth.call(null,inst_37942,(0),null);
var inst_37948__$1 = cljs.core.nth.call(null,inst_37942,(1),null);
var state_37978__$1 = (function (){var statearr_37992 = state_37978;
(statearr_37992[(10)] = inst_37947);

(statearr_37992[(11)] = inst_37948__$1);

return statearr_37992;
})();
if(cljs.core.truth_(inst_37948__$1)){
var statearr_37993_38018 = state_37978__$1;
(statearr_37993_38018[(1)] = (8));

} else {
var statearr_37994_38019 = state_37978__$1;
(statearr_37994_38019[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37979 === (14))){
var inst_37947 = (state_37978[(10)]);
var inst_37959 = (state_37978[(8)]);
var inst_37956 = (state_37978[(2)]);
var inst_37957 = console.log("Loading!",inst_37947);
var inst_37958 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_37959__$1 = cljs.core.get.call(null,inst_37958,inst_37947);
var state_37978__$1 = (function (){var statearr_37995 = state_37978;
(statearr_37995[(8)] = inst_37959__$1);

(statearr_37995[(12)] = inst_37957);

(statearr_37995[(9)] = inst_37956);

return statearr_37995;
})();
if(cljs.core.truth_(inst_37959__$1)){
var statearr_37996_38020 = state_37978__$1;
(statearr_37996_38020[(1)] = (15));

} else {
var statearr_37997_38021 = state_37978__$1;
(statearr_37997_38021[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37979 === (16))){
var inst_37956 = (state_37978[(9)]);
var inst_37963 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_37956);
var state_37978__$1 = state_37978;
var statearr_37998_38022 = state_37978__$1;
(statearr_37998_38022[(2)] = inst_37963);

(statearr_37998_38022[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37979 === (10))){
var inst_37970 = (state_37978[(2)]);
var state_37978__$1 = (function (){var statearr_37999 = state_37978;
(statearr_37999[(13)] = inst_37970);

return statearr_37999;
})();
var statearr_38000_38023 = state_37978__$1;
(statearr_38000_38023[(2)] = null);

(statearr_38000_38023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37979 === (8))){
var inst_37948 = (state_37978[(11)]);
var inst_37950 = console.log("Evaling!",inst_37948);
var inst_37951 = eval(inst_37948);
var state_37978__$1 = (function (){var statearr_38001 = state_37978;
(statearr_38001[(14)] = inst_37950);

return statearr_38001;
})();
var statearr_38002_38024 = state_37978__$1;
(statearr_38002_38024[(2)] = inst_37951);

(statearr_38002_38024[(1)] = (10));


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
});})(c__34580__auto__))
;
return ((function (switch__34525__auto__,c__34580__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__34526__auto__ = null;
var figwheel$client$file_reloading$state_machine__34526__auto____0 = (function (){
var statearr_38003 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38003[(0)] = figwheel$client$file_reloading$state_machine__34526__auto__);

(statearr_38003[(1)] = (1));

return statearr_38003;
});
var figwheel$client$file_reloading$state_machine__34526__auto____1 = (function (state_37978){
while(true){
var ret_value__34527__auto__ = (function (){try{while(true){
var result__34528__auto__ = switch__34525__auto__.call(null,state_37978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34528__auto__;
}
break;
}
}catch (e38004){if((e38004 instanceof Object)){
var ex__34529__auto__ = e38004;
var statearr_38005_38025 = state_37978;
(statearr_38005_38025[(5)] = ex__34529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38026 = state_37978;
state_37978 = G__38026;
continue;
} else {
return ret_value__34527__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__34526__auto__ = function(state_37978){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__34526__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__34526__auto____1.call(this,state_37978);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__34526__auto____0;
figwheel$client$file_reloading$state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__34526__auto____1;
return figwheel$client$file_reloading$state_machine__34526__auto__;
})()
;})(switch__34525__auto__,c__34580__auto__))
})();
var state__34582__auto__ = (function (){var statearr_38006 = f__34581__auto__.call(null);
(statearr_38006[(6)] = c__34580__auto__);

return statearr_38006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34582__auto__);
});})(c__34580__auto__))
);

return c__34580__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__38028 = arguments.length;
switch (G__38028) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__38030,callback){
var map__38031 = p__38030;
var map__38031__$1 = ((((!((map__38031 == null)))?((((map__38031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38031.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38031):map__38031);
var file_msg = map__38031__$1;
var namespace = cljs.core.get.call(null,map__38031__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__38031,map__38031__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__38031,map__38031__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__38033){
var map__38034 = p__38033;
var map__38034__$1 = ((((!((map__38034 == null)))?((((map__38034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38034.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38034):map__38034);
var file_msg = map__38034__$1;
var namespace = cljs.core.get.call(null,map__38034__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__38036){
var map__38037 = p__38036;
var map__38037__$1 = ((((!((map__38037 == null)))?((((map__38037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38037.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38037):map__38037);
var file_msg = map__38037__$1;
var namespace = cljs.core.get.call(null,map__38037__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__30090__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__30090__auto__){
var or__30102__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30102__auto__)){
return or__30102__auto__;
} else {
var or__30102__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30102__auto____$1)){
return or__30102__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__30090__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__38039,callback){
var map__38040 = p__38039;
var map__38040__$1 = ((((!((map__38040 == null)))?((((map__38040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38040.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38040):map__38040);
var file_msg = map__38040__$1;
var request_url = cljs.core.get.call(null,map__38040__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__38040__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__34580__auto___38090 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34580__auto___38090,out){
return (function (){
var f__34581__auto__ = (function (){var switch__34525__auto__ = ((function (c__34580__auto___38090,out){
return (function (state_38075){
var state_val_38076 = (state_38075[(1)]);
if((state_val_38076 === (1))){
var inst_38049 = cljs.core.seq.call(null,files);
var inst_38050 = cljs.core.first.call(null,inst_38049);
var inst_38051 = cljs.core.next.call(null,inst_38049);
var inst_38052 = files;
var state_38075__$1 = (function (){var statearr_38077 = state_38075;
(statearr_38077[(7)] = inst_38052);

(statearr_38077[(8)] = inst_38050);

(statearr_38077[(9)] = inst_38051);

return statearr_38077;
})();
var statearr_38078_38091 = state_38075__$1;
(statearr_38078_38091[(2)] = null);

(statearr_38078_38091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38076 === (2))){
var inst_38052 = (state_38075[(7)]);
var inst_38058 = (state_38075[(10)]);
var inst_38057 = cljs.core.seq.call(null,inst_38052);
var inst_38058__$1 = cljs.core.first.call(null,inst_38057);
var inst_38059 = cljs.core.next.call(null,inst_38057);
var inst_38060 = (inst_38058__$1 == null);
var inst_38061 = cljs.core.not.call(null,inst_38060);
var state_38075__$1 = (function (){var statearr_38079 = state_38075;
(statearr_38079[(10)] = inst_38058__$1);

(statearr_38079[(11)] = inst_38059);

return statearr_38079;
})();
if(inst_38061){
var statearr_38080_38092 = state_38075__$1;
(statearr_38080_38092[(1)] = (4));

} else {
var statearr_38081_38093 = state_38075__$1;
(statearr_38081_38093[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38076 === (3))){
var inst_38073 = (state_38075[(2)]);
var state_38075__$1 = state_38075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38075__$1,inst_38073);
} else {
if((state_val_38076 === (4))){
var inst_38058 = (state_38075[(10)]);
var inst_38063 = figwheel.client.file_reloading.reload_js_file.call(null,inst_38058);
var state_38075__$1 = state_38075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38075__$1,(7),inst_38063);
} else {
if((state_val_38076 === (5))){
var inst_38069 = cljs.core.async.close_BANG_.call(null,out);
var state_38075__$1 = state_38075;
var statearr_38082_38094 = state_38075__$1;
(statearr_38082_38094[(2)] = inst_38069);

(statearr_38082_38094[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38076 === (6))){
var inst_38071 = (state_38075[(2)]);
var state_38075__$1 = state_38075;
var statearr_38083_38095 = state_38075__$1;
(statearr_38083_38095[(2)] = inst_38071);

(statearr_38083_38095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38076 === (7))){
var inst_38059 = (state_38075[(11)]);
var inst_38065 = (state_38075[(2)]);
var inst_38066 = cljs.core.async.put_BANG_.call(null,out,inst_38065);
var inst_38052 = inst_38059;
var state_38075__$1 = (function (){var statearr_38084 = state_38075;
(statearr_38084[(12)] = inst_38066);

(statearr_38084[(7)] = inst_38052);

return statearr_38084;
})();
var statearr_38085_38096 = state_38075__$1;
(statearr_38085_38096[(2)] = null);

(statearr_38085_38096[(1)] = (2));


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
});})(c__34580__auto___38090,out))
;
return ((function (switch__34525__auto__,c__34580__auto___38090,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34526__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34526__auto____0 = (function (){
var statearr_38086 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38086[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34526__auto__);

(statearr_38086[(1)] = (1));

return statearr_38086;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34526__auto____1 = (function (state_38075){
while(true){
var ret_value__34527__auto__ = (function (){try{while(true){
var result__34528__auto__ = switch__34525__auto__.call(null,state_38075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34528__auto__;
}
break;
}
}catch (e38087){if((e38087 instanceof Object)){
var ex__34529__auto__ = e38087;
var statearr_38088_38097 = state_38075;
(statearr_38088_38097[(5)] = ex__34529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38098 = state_38075;
state_38075 = G__38098;
continue;
} else {
return ret_value__34527__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34526__auto__ = function(state_38075){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34526__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34526__auto____1.call(this,state_38075);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34526__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34526__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34526__auto__;
})()
;})(switch__34525__auto__,c__34580__auto___38090,out))
})();
var state__34582__auto__ = (function (){var statearr_38089 = f__34581__auto__.call(null);
(statearr_38089[(6)] = c__34580__auto___38090);

return statearr_38089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34582__auto__);
});})(c__34580__auto___38090,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__38099,opts){
var map__38100 = p__38099;
var map__38100__$1 = ((((!((map__38100 == null)))?((((map__38100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38100.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38100):map__38100);
var eval_body = cljs.core.get.call(null,map__38100__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__38100__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__30090__auto__ = eval_body;
if(cljs.core.truth_(and__30090__auto__)){
return typeof eval_body === 'string';
} else {
return and__30090__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e38102){var e = e38102;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__38103_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38103_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__38104){
var vec__38105 = p__38104;
var k = cljs.core.nth.call(null,vec__38105,(0),null);
var v = cljs.core.nth.call(null,vec__38105,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__38108){
var vec__38109 = p__38108;
var k = cljs.core.nth.call(null,vec__38109,(0),null);
var v = cljs.core.nth.call(null,vec__38109,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__38115,p__38116){
var map__38117 = p__38115;
var map__38117__$1 = ((((!((map__38117 == null)))?((((map__38117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38117.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38117):map__38117);
var opts = map__38117__$1;
var before_jsload = cljs.core.get.call(null,map__38117__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__38117__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__38117__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__38118 = p__38116;
var map__38118__$1 = ((((!((map__38118 == null)))?((((map__38118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38118.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38118):map__38118);
var msg = map__38118__$1;
var files = cljs.core.get.call(null,map__38118__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__38118__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__38118__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__34580__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34580__auto__,map__38117,map__38117__$1,opts,before_jsload,on_jsload,reload_dependents,map__38118,map__38118__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__34581__auto__ = (function (){var switch__34525__auto__ = ((function (c__34580__auto__,map__38117,map__38117__$1,opts,before_jsload,on_jsload,reload_dependents,map__38118,map__38118__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_38272){
var state_val_38273 = (state_38272[(1)]);
if((state_val_38273 === (7))){
var inst_38134 = (state_38272[(7)]);
var inst_38133 = (state_38272[(8)]);
var inst_38135 = (state_38272[(9)]);
var inst_38132 = (state_38272[(10)]);
var inst_38140 = cljs.core._nth.call(null,inst_38133,inst_38135);
var inst_38141 = figwheel.client.file_reloading.eval_body.call(null,inst_38140,opts);
var inst_38142 = (inst_38135 + (1));
var tmp38274 = inst_38134;
var tmp38275 = inst_38133;
var tmp38276 = inst_38132;
var inst_38132__$1 = tmp38276;
var inst_38133__$1 = tmp38275;
var inst_38134__$1 = tmp38274;
var inst_38135__$1 = inst_38142;
var state_38272__$1 = (function (){var statearr_38277 = state_38272;
(statearr_38277[(7)] = inst_38134__$1);

(statearr_38277[(8)] = inst_38133__$1);

(statearr_38277[(9)] = inst_38135__$1);

(statearr_38277[(11)] = inst_38141);

(statearr_38277[(10)] = inst_38132__$1);

return statearr_38277;
})();
var statearr_38278_38361 = state_38272__$1;
(statearr_38278_38361[(2)] = null);

(statearr_38278_38361[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (20))){
var inst_38175 = (state_38272[(12)]);
var inst_38183 = figwheel.client.file_reloading.sort_files.call(null,inst_38175);
var state_38272__$1 = state_38272;
var statearr_38279_38362 = state_38272__$1;
(statearr_38279_38362[(2)] = inst_38183);

(statearr_38279_38362[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (27))){
var state_38272__$1 = state_38272;
var statearr_38280_38363 = state_38272__$1;
(statearr_38280_38363[(2)] = null);

(statearr_38280_38363[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (1))){
var inst_38124 = (state_38272[(13)]);
var inst_38121 = before_jsload.call(null,files);
var inst_38122 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_38123 = (function (){return ((function (inst_38124,inst_38121,inst_38122,state_val_38273,c__34580__auto__,map__38117,map__38117__$1,opts,before_jsload,on_jsload,reload_dependents,map__38118,map__38118__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38112_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38112_SHARP_);
});
;})(inst_38124,inst_38121,inst_38122,state_val_38273,c__34580__auto__,map__38117,map__38117__$1,opts,before_jsload,on_jsload,reload_dependents,map__38118,map__38118__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38124__$1 = cljs.core.filter.call(null,inst_38123,files);
var inst_38125 = cljs.core.not_empty.call(null,inst_38124__$1);
var state_38272__$1 = (function (){var statearr_38281 = state_38272;
(statearr_38281[(14)] = inst_38122);

(statearr_38281[(15)] = inst_38121);

(statearr_38281[(13)] = inst_38124__$1);

return statearr_38281;
})();
if(cljs.core.truth_(inst_38125)){
var statearr_38282_38364 = state_38272__$1;
(statearr_38282_38364[(1)] = (2));

} else {
var statearr_38283_38365 = state_38272__$1;
(statearr_38283_38365[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (24))){
var state_38272__$1 = state_38272;
var statearr_38284_38366 = state_38272__$1;
(statearr_38284_38366[(2)] = null);

(statearr_38284_38366[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (39))){
var inst_38225 = (state_38272[(16)]);
var state_38272__$1 = state_38272;
var statearr_38285_38367 = state_38272__$1;
(statearr_38285_38367[(2)] = inst_38225);

(statearr_38285_38367[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (46))){
var inst_38267 = (state_38272[(2)]);
var state_38272__$1 = state_38272;
var statearr_38286_38368 = state_38272__$1;
(statearr_38286_38368[(2)] = inst_38267);

(statearr_38286_38368[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (4))){
var inst_38169 = (state_38272[(2)]);
var inst_38170 = cljs.core.List.EMPTY;
var inst_38171 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_38170);
var inst_38172 = (function (){return ((function (inst_38169,inst_38170,inst_38171,state_val_38273,c__34580__auto__,map__38117,map__38117__$1,opts,before_jsload,on_jsload,reload_dependents,map__38118,map__38118__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38113_SHARP_){
var and__30090__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38113_SHARP_);
if(cljs.core.truth_(and__30090__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38113_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__38113_SHARP_)));
} else {
return and__30090__auto__;
}
});
;})(inst_38169,inst_38170,inst_38171,state_val_38273,c__34580__auto__,map__38117,map__38117__$1,opts,before_jsload,on_jsload,reload_dependents,map__38118,map__38118__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38173 = cljs.core.filter.call(null,inst_38172,files);
var inst_38174 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_38175 = cljs.core.concat.call(null,inst_38173,inst_38174);
var state_38272__$1 = (function (){var statearr_38287 = state_38272;
(statearr_38287[(17)] = inst_38171);

(statearr_38287[(12)] = inst_38175);

(statearr_38287[(18)] = inst_38169);

return statearr_38287;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_38288_38369 = state_38272__$1;
(statearr_38288_38369[(1)] = (16));

} else {
var statearr_38289_38370 = state_38272__$1;
(statearr_38289_38370[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (15))){
var inst_38159 = (state_38272[(2)]);
var state_38272__$1 = state_38272;
var statearr_38290_38371 = state_38272__$1;
(statearr_38290_38371[(2)] = inst_38159);

(statearr_38290_38371[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (21))){
var inst_38185 = (state_38272[(19)]);
var inst_38185__$1 = (state_38272[(2)]);
var inst_38186 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_38185__$1);
var state_38272__$1 = (function (){var statearr_38291 = state_38272;
(statearr_38291[(19)] = inst_38185__$1);

return statearr_38291;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38272__$1,(22),inst_38186);
} else {
if((state_val_38273 === (31))){
var inst_38270 = (state_38272[(2)]);
var state_38272__$1 = state_38272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38272__$1,inst_38270);
} else {
if((state_val_38273 === (32))){
var inst_38225 = (state_38272[(16)]);
var inst_38230 = inst_38225.cljs$lang$protocol_mask$partition0$;
var inst_38231 = (inst_38230 & (64));
var inst_38232 = inst_38225.cljs$core$ISeq$;
var inst_38233 = (cljs.core.PROTOCOL_SENTINEL === inst_38232);
var inst_38234 = (inst_38231) || (inst_38233);
var state_38272__$1 = state_38272;
if(cljs.core.truth_(inst_38234)){
var statearr_38292_38372 = state_38272__$1;
(statearr_38292_38372[(1)] = (35));

} else {
var statearr_38293_38373 = state_38272__$1;
(statearr_38293_38373[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (40))){
var inst_38247 = (state_38272[(20)]);
var inst_38246 = (state_38272[(2)]);
var inst_38247__$1 = cljs.core.get.call(null,inst_38246,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_38248 = cljs.core.get.call(null,inst_38246,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_38249 = cljs.core.not_empty.call(null,inst_38247__$1);
var state_38272__$1 = (function (){var statearr_38294 = state_38272;
(statearr_38294[(20)] = inst_38247__$1);

(statearr_38294[(21)] = inst_38248);

return statearr_38294;
})();
if(cljs.core.truth_(inst_38249)){
var statearr_38295_38374 = state_38272__$1;
(statearr_38295_38374[(1)] = (41));

} else {
var statearr_38296_38375 = state_38272__$1;
(statearr_38296_38375[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (33))){
var state_38272__$1 = state_38272;
var statearr_38297_38376 = state_38272__$1;
(statearr_38297_38376[(2)] = false);

(statearr_38297_38376[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (13))){
var inst_38145 = (state_38272[(22)]);
var inst_38149 = cljs.core.chunk_first.call(null,inst_38145);
var inst_38150 = cljs.core.chunk_rest.call(null,inst_38145);
var inst_38151 = cljs.core.count.call(null,inst_38149);
var inst_38132 = inst_38150;
var inst_38133 = inst_38149;
var inst_38134 = inst_38151;
var inst_38135 = (0);
var state_38272__$1 = (function (){var statearr_38298 = state_38272;
(statearr_38298[(7)] = inst_38134);

(statearr_38298[(8)] = inst_38133);

(statearr_38298[(9)] = inst_38135);

(statearr_38298[(10)] = inst_38132);

return statearr_38298;
})();
var statearr_38299_38377 = state_38272__$1;
(statearr_38299_38377[(2)] = null);

(statearr_38299_38377[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (22))){
var inst_38188 = (state_38272[(23)]);
var inst_38185 = (state_38272[(19)]);
var inst_38189 = (state_38272[(24)]);
var inst_38193 = (state_38272[(25)]);
var inst_38188__$1 = (state_38272[(2)]);
var inst_38189__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_38188__$1);
var inst_38190 = (function (){var all_files = inst_38185;
var res_SINGLEQUOTE_ = inst_38188__$1;
var res = inst_38189__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_38188,inst_38185,inst_38189,inst_38193,inst_38188__$1,inst_38189__$1,state_val_38273,c__34580__auto__,map__38117,map__38117__$1,opts,before_jsload,on_jsload,reload_dependents,map__38118,map__38118__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38114_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__38114_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_38188,inst_38185,inst_38189,inst_38193,inst_38188__$1,inst_38189__$1,state_val_38273,c__34580__auto__,map__38117,map__38117__$1,opts,before_jsload,on_jsload,reload_dependents,map__38118,map__38118__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38191 = cljs.core.filter.call(null,inst_38190,inst_38188__$1);
var inst_38192 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_38193__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_38192);
var inst_38194 = cljs.core.not_empty.call(null,inst_38193__$1);
var state_38272__$1 = (function (){var statearr_38300 = state_38272;
(statearr_38300[(23)] = inst_38188__$1);

(statearr_38300[(24)] = inst_38189__$1);

(statearr_38300[(26)] = inst_38191);

(statearr_38300[(25)] = inst_38193__$1);

return statearr_38300;
})();
if(cljs.core.truth_(inst_38194)){
var statearr_38301_38378 = state_38272__$1;
(statearr_38301_38378[(1)] = (23));

} else {
var statearr_38302_38379 = state_38272__$1;
(statearr_38302_38379[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (36))){
var state_38272__$1 = state_38272;
var statearr_38303_38380 = state_38272__$1;
(statearr_38303_38380[(2)] = false);

(statearr_38303_38380[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (41))){
var inst_38247 = (state_38272[(20)]);
var inst_38251 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_38252 = cljs.core.map.call(null,inst_38251,inst_38247);
var inst_38253 = cljs.core.pr_str.call(null,inst_38252);
var inst_38254 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38253)].join('');
var inst_38255 = figwheel.client.utils.log.call(null,inst_38254);
var state_38272__$1 = state_38272;
var statearr_38304_38381 = state_38272__$1;
(statearr_38304_38381[(2)] = inst_38255);

(statearr_38304_38381[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (43))){
var inst_38248 = (state_38272[(21)]);
var inst_38258 = (state_38272[(2)]);
var inst_38259 = cljs.core.not_empty.call(null,inst_38248);
var state_38272__$1 = (function (){var statearr_38305 = state_38272;
(statearr_38305[(27)] = inst_38258);

return statearr_38305;
})();
if(cljs.core.truth_(inst_38259)){
var statearr_38306_38382 = state_38272__$1;
(statearr_38306_38382[(1)] = (44));

} else {
var statearr_38307_38383 = state_38272__$1;
(statearr_38307_38383[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (29))){
var inst_38188 = (state_38272[(23)]);
var inst_38225 = (state_38272[(16)]);
var inst_38185 = (state_38272[(19)]);
var inst_38189 = (state_38272[(24)]);
var inst_38191 = (state_38272[(26)]);
var inst_38193 = (state_38272[(25)]);
var inst_38221 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_38224 = (function (){var all_files = inst_38185;
var res_SINGLEQUOTE_ = inst_38188;
var res = inst_38189;
var files_not_loaded = inst_38191;
var dependencies_that_loaded = inst_38193;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38188,inst_38225,inst_38185,inst_38189,inst_38191,inst_38193,inst_38221,state_val_38273,c__34580__auto__,map__38117,map__38117__$1,opts,before_jsload,on_jsload,reload_dependents,map__38118,map__38118__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38223){
var map__38308 = p__38223;
var map__38308__$1 = ((((!((map__38308 == null)))?((((map__38308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38308.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38308):map__38308);
var namespace = cljs.core.get.call(null,map__38308__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38188,inst_38225,inst_38185,inst_38189,inst_38191,inst_38193,inst_38221,state_val_38273,c__34580__auto__,map__38117,map__38117__$1,opts,before_jsload,on_jsload,reload_dependents,map__38118,map__38118__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38225__$1 = cljs.core.group_by.call(null,inst_38224,inst_38191);
var inst_38227 = (inst_38225__$1 == null);
var inst_38228 = cljs.core.not.call(null,inst_38227);
var state_38272__$1 = (function (){var statearr_38310 = state_38272;
(statearr_38310[(16)] = inst_38225__$1);

(statearr_38310[(28)] = inst_38221);

return statearr_38310;
})();
if(inst_38228){
var statearr_38311_38384 = state_38272__$1;
(statearr_38311_38384[(1)] = (32));

} else {
var statearr_38312_38385 = state_38272__$1;
(statearr_38312_38385[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (44))){
var inst_38248 = (state_38272[(21)]);
var inst_38261 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38248);
var inst_38262 = cljs.core.pr_str.call(null,inst_38261);
var inst_38263 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38262)].join('');
var inst_38264 = figwheel.client.utils.log.call(null,inst_38263);
var state_38272__$1 = state_38272;
var statearr_38313_38386 = state_38272__$1;
(statearr_38313_38386[(2)] = inst_38264);

(statearr_38313_38386[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (6))){
var inst_38166 = (state_38272[(2)]);
var state_38272__$1 = state_38272;
var statearr_38314_38387 = state_38272__$1;
(statearr_38314_38387[(2)] = inst_38166);

(statearr_38314_38387[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (28))){
var inst_38191 = (state_38272[(26)]);
var inst_38218 = (state_38272[(2)]);
var inst_38219 = cljs.core.not_empty.call(null,inst_38191);
var state_38272__$1 = (function (){var statearr_38315 = state_38272;
(statearr_38315[(29)] = inst_38218);

return statearr_38315;
})();
if(cljs.core.truth_(inst_38219)){
var statearr_38316_38388 = state_38272__$1;
(statearr_38316_38388[(1)] = (29));

} else {
var statearr_38317_38389 = state_38272__$1;
(statearr_38317_38389[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (25))){
var inst_38189 = (state_38272[(24)]);
var inst_38205 = (state_38272[(2)]);
var inst_38206 = cljs.core.not_empty.call(null,inst_38189);
var state_38272__$1 = (function (){var statearr_38318 = state_38272;
(statearr_38318[(30)] = inst_38205);

return statearr_38318;
})();
if(cljs.core.truth_(inst_38206)){
var statearr_38319_38390 = state_38272__$1;
(statearr_38319_38390[(1)] = (26));

} else {
var statearr_38320_38391 = state_38272__$1;
(statearr_38320_38391[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (34))){
var inst_38241 = (state_38272[(2)]);
var state_38272__$1 = state_38272;
if(cljs.core.truth_(inst_38241)){
var statearr_38321_38392 = state_38272__$1;
(statearr_38321_38392[(1)] = (38));

} else {
var statearr_38322_38393 = state_38272__$1;
(statearr_38322_38393[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (17))){
var state_38272__$1 = state_38272;
var statearr_38323_38394 = state_38272__$1;
(statearr_38323_38394[(2)] = recompile_dependents);

(statearr_38323_38394[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (3))){
var state_38272__$1 = state_38272;
var statearr_38324_38395 = state_38272__$1;
(statearr_38324_38395[(2)] = null);

(statearr_38324_38395[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (12))){
var inst_38162 = (state_38272[(2)]);
var state_38272__$1 = state_38272;
var statearr_38325_38396 = state_38272__$1;
(statearr_38325_38396[(2)] = inst_38162);

(statearr_38325_38396[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (2))){
var inst_38124 = (state_38272[(13)]);
var inst_38131 = cljs.core.seq.call(null,inst_38124);
var inst_38132 = inst_38131;
var inst_38133 = null;
var inst_38134 = (0);
var inst_38135 = (0);
var state_38272__$1 = (function (){var statearr_38326 = state_38272;
(statearr_38326[(7)] = inst_38134);

(statearr_38326[(8)] = inst_38133);

(statearr_38326[(9)] = inst_38135);

(statearr_38326[(10)] = inst_38132);

return statearr_38326;
})();
var statearr_38327_38397 = state_38272__$1;
(statearr_38327_38397[(2)] = null);

(statearr_38327_38397[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (23))){
var inst_38188 = (state_38272[(23)]);
var inst_38185 = (state_38272[(19)]);
var inst_38189 = (state_38272[(24)]);
var inst_38191 = (state_38272[(26)]);
var inst_38193 = (state_38272[(25)]);
var inst_38196 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_38198 = (function (){var all_files = inst_38185;
var res_SINGLEQUOTE_ = inst_38188;
var res = inst_38189;
var files_not_loaded = inst_38191;
var dependencies_that_loaded = inst_38193;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38188,inst_38185,inst_38189,inst_38191,inst_38193,inst_38196,state_val_38273,c__34580__auto__,map__38117,map__38117__$1,opts,before_jsload,on_jsload,reload_dependents,map__38118,map__38118__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38197){
var map__38328 = p__38197;
var map__38328__$1 = ((((!((map__38328 == null)))?((((map__38328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38328.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38328):map__38328);
var request_url = cljs.core.get.call(null,map__38328__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38188,inst_38185,inst_38189,inst_38191,inst_38193,inst_38196,state_val_38273,c__34580__auto__,map__38117,map__38117__$1,opts,before_jsload,on_jsload,reload_dependents,map__38118,map__38118__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38199 = cljs.core.reverse.call(null,inst_38193);
var inst_38200 = cljs.core.map.call(null,inst_38198,inst_38199);
var inst_38201 = cljs.core.pr_str.call(null,inst_38200);
var inst_38202 = figwheel.client.utils.log.call(null,inst_38201);
var state_38272__$1 = (function (){var statearr_38330 = state_38272;
(statearr_38330[(31)] = inst_38196);

return statearr_38330;
})();
var statearr_38331_38398 = state_38272__$1;
(statearr_38331_38398[(2)] = inst_38202);

(statearr_38331_38398[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (35))){
var state_38272__$1 = state_38272;
var statearr_38332_38399 = state_38272__$1;
(statearr_38332_38399[(2)] = true);

(statearr_38332_38399[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (19))){
var inst_38175 = (state_38272[(12)]);
var inst_38181 = figwheel.client.file_reloading.expand_files.call(null,inst_38175);
var state_38272__$1 = state_38272;
var statearr_38333_38400 = state_38272__$1;
(statearr_38333_38400[(2)] = inst_38181);

(statearr_38333_38400[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (11))){
var state_38272__$1 = state_38272;
var statearr_38334_38401 = state_38272__$1;
(statearr_38334_38401[(2)] = null);

(statearr_38334_38401[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (9))){
var inst_38164 = (state_38272[(2)]);
var state_38272__$1 = state_38272;
var statearr_38335_38402 = state_38272__$1;
(statearr_38335_38402[(2)] = inst_38164);

(statearr_38335_38402[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (5))){
var inst_38134 = (state_38272[(7)]);
var inst_38135 = (state_38272[(9)]);
var inst_38137 = (inst_38135 < inst_38134);
var inst_38138 = inst_38137;
var state_38272__$1 = state_38272;
if(cljs.core.truth_(inst_38138)){
var statearr_38336_38403 = state_38272__$1;
(statearr_38336_38403[(1)] = (7));

} else {
var statearr_38337_38404 = state_38272__$1;
(statearr_38337_38404[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (14))){
var inst_38145 = (state_38272[(22)]);
var inst_38154 = cljs.core.first.call(null,inst_38145);
var inst_38155 = figwheel.client.file_reloading.eval_body.call(null,inst_38154,opts);
var inst_38156 = cljs.core.next.call(null,inst_38145);
var inst_38132 = inst_38156;
var inst_38133 = null;
var inst_38134 = (0);
var inst_38135 = (0);
var state_38272__$1 = (function (){var statearr_38338 = state_38272;
(statearr_38338[(7)] = inst_38134);

(statearr_38338[(8)] = inst_38133);

(statearr_38338[(9)] = inst_38135);

(statearr_38338[(10)] = inst_38132);

(statearr_38338[(32)] = inst_38155);

return statearr_38338;
})();
var statearr_38339_38405 = state_38272__$1;
(statearr_38339_38405[(2)] = null);

(statearr_38339_38405[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (45))){
var state_38272__$1 = state_38272;
var statearr_38340_38406 = state_38272__$1;
(statearr_38340_38406[(2)] = null);

(statearr_38340_38406[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (26))){
var inst_38188 = (state_38272[(23)]);
var inst_38185 = (state_38272[(19)]);
var inst_38189 = (state_38272[(24)]);
var inst_38191 = (state_38272[(26)]);
var inst_38193 = (state_38272[(25)]);
var inst_38208 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_38210 = (function (){var all_files = inst_38185;
var res_SINGLEQUOTE_ = inst_38188;
var res = inst_38189;
var files_not_loaded = inst_38191;
var dependencies_that_loaded = inst_38193;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38188,inst_38185,inst_38189,inst_38191,inst_38193,inst_38208,state_val_38273,c__34580__auto__,map__38117,map__38117__$1,opts,before_jsload,on_jsload,reload_dependents,map__38118,map__38118__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38209){
var map__38341 = p__38209;
var map__38341__$1 = ((((!((map__38341 == null)))?((((map__38341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38341.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38341):map__38341);
var namespace = cljs.core.get.call(null,map__38341__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__38341__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38188,inst_38185,inst_38189,inst_38191,inst_38193,inst_38208,state_val_38273,c__34580__auto__,map__38117,map__38117__$1,opts,before_jsload,on_jsload,reload_dependents,map__38118,map__38118__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38211 = cljs.core.map.call(null,inst_38210,inst_38189);
var inst_38212 = cljs.core.pr_str.call(null,inst_38211);
var inst_38213 = figwheel.client.utils.log.call(null,inst_38212);
var inst_38214 = (function (){var all_files = inst_38185;
var res_SINGLEQUOTE_ = inst_38188;
var res = inst_38189;
var files_not_loaded = inst_38191;
var dependencies_that_loaded = inst_38193;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38188,inst_38185,inst_38189,inst_38191,inst_38193,inst_38208,inst_38210,inst_38211,inst_38212,inst_38213,state_val_38273,c__34580__auto__,map__38117,map__38117__$1,opts,before_jsload,on_jsload,reload_dependents,map__38118,map__38118__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38188,inst_38185,inst_38189,inst_38191,inst_38193,inst_38208,inst_38210,inst_38211,inst_38212,inst_38213,state_val_38273,c__34580__auto__,map__38117,map__38117__$1,opts,before_jsload,on_jsload,reload_dependents,map__38118,map__38118__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38215 = setTimeout(inst_38214,(10));
var state_38272__$1 = (function (){var statearr_38343 = state_38272;
(statearr_38343[(33)] = inst_38213);

(statearr_38343[(34)] = inst_38208);

return statearr_38343;
})();
var statearr_38344_38407 = state_38272__$1;
(statearr_38344_38407[(2)] = inst_38215);

(statearr_38344_38407[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (16))){
var state_38272__$1 = state_38272;
var statearr_38345_38408 = state_38272__$1;
(statearr_38345_38408[(2)] = reload_dependents);

(statearr_38345_38408[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (38))){
var inst_38225 = (state_38272[(16)]);
var inst_38243 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38225);
var state_38272__$1 = state_38272;
var statearr_38346_38409 = state_38272__$1;
(statearr_38346_38409[(2)] = inst_38243);

(statearr_38346_38409[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (30))){
var state_38272__$1 = state_38272;
var statearr_38347_38410 = state_38272__$1;
(statearr_38347_38410[(2)] = null);

(statearr_38347_38410[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (10))){
var inst_38145 = (state_38272[(22)]);
var inst_38147 = cljs.core.chunked_seq_QMARK_.call(null,inst_38145);
var state_38272__$1 = state_38272;
if(inst_38147){
var statearr_38348_38411 = state_38272__$1;
(statearr_38348_38411[(1)] = (13));

} else {
var statearr_38349_38412 = state_38272__$1;
(statearr_38349_38412[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (18))){
var inst_38179 = (state_38272[(2)]);
var state_38272__$1 = state_38272;
if(cljs.core.truth_(inst_38179)){
var statearr_38350_38413 = state_38272__$1;
(statearr_38350_38413[(1)] = (19));

} else {
var statearr_38351_38414 = state_38272__$1;
(statearr_38351_38414[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (42))){
var state_38272__$1 = state_38272;
var statearr_38352_38415 = state_38272__$1;
(statearr_38352_38415[(2)] = null);

(statearr_38352_38415[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (37))){
var inst_38238 = (state_38272[(2)]);
var state_38272__$1 = state_38272;
var statearr_38353_38416 = state_38272__$1;
(statearr_38353_38416[(2)] = inst_38238);

(statearr_38353_38416[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (8))){
var inst_38145 = (state_38272[(22)]);
var inst_38132 = (state_38272[(10)]);
var inst_38145__$1 = cljs.core.seq.call(null,inst_38132);
var state_38272__$1 = (function (){var statearr_38354 = state_38272;
(statearr_38354[(22)] = inst_38145__$1);

return statearr_38354;
})();
if(inst_38145__$1){
var statearr_38355_38417 = state_38272__$1;
(statearr_38355_38417[(1)] = (10));

} else {
var statearr_38356_38418 = state_38272__$1;
(statearr_38356_38418[(1)] = (11));

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
}
});})(c__34580__auto__,map__38117,map__38117__$1,opts,before_jsload,on_jsload,reload_dependents,map__38118,map__38118__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__34525__auto__,c__34580__auto__,map__38117,map__38117__$1,opts,before_jsload,on_jsload,reload_dependents,map__38118,map__38118__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34526__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34526__auto____0 = (function (){
var statearr_38357 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38357[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__34526__auto__);

(statearr_38357[(1)] = (1));

return statearr_38357;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34526__auto____1 = (function (state_38272){
while(true){
var ret_value__34527__auto__ = (function (){try{while(true){
var result__34528__auto__ = switch__34525__auto__.call(null,state_38272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34528__auto__;
}
break;
}
}catch (e38358){if((e38358 instanceof Object)){
var ex__34529__auto__ = e38358;
var statearr_38359_38419 = state_38272;
(statearr_38359_38419[(5)] = ex__34529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38420 = state_38272;
state_38272 = G__38420;
continue;
} else {
return ret_value__34527__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__34526__auto__ = function(state_38272){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34526__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34526__auto____1.call(this,state_38272);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34526__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__34526__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34526__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34526__auto__;
})()
;})(switch__34525__auto__,c__34580__auto__,map__38117,map__38117__$1,opts,before_jsload,on_jsload,reload_dependents,map__38118,map__38118__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__34582__auto__ = (function (){var statearr_38360 = f__34581__auto__.call(null);
(statearr_38360[(6)] = c__34580__auto__);

return statearr_38360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34582__auto__);
});})(c__34580__auto__,map__38117,map__38117__$1,opts,before_jsload,on_jsload,reload_dependents,map__38118,map__38118__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__34580__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__38423,link){
var map__38424 = p__38423;
var map__38424__$1 = ((((!((map__38424 == null)))?((((map__38424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38424.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38424):map__38424);
var file = cljs.core.get.call(null,map__38424__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__38424,map__38424__$1,file){
return (function (p1__38421_SHARP_,p2__38422_SHARP_){
if(cljs.core._EQ_.call(null,p1__38421_SHARP_,p2__38422_SHARP_)){
return p1__38421_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__38424,map__38424__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__38427){
var map__38428 = p__38427;
var map__38428__$1 = ((((!((map__38428 == null)))?((((map__38428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38428.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38428):map__38428);
var match_length = cljs.core.get.call(null,map__38428__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__38428__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__38426_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__38426_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__38430_SHARP_,p2__38431_SHARP_){
return cljs.core.assoc.call(null,p1__38430_SHARP_,cljs.core.get.call(null,p2__38431_SHARP_,key),p2__38431_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_38432 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_38432);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_38432);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__38433,p__38434){
var map__38435 = p__38433;
var map__38435__$1 = ((((!((map__38435 == null)))?((((map__38435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38435.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38435):map__38435);
var on_cssload = cljs.core.get.call(null,map__38435__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__38436 = p__38434;
var map__38436__$1 = ((((!((map__38436 == null)))?((((map__38436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38436.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38436):map__38436);
var files_msg = map__38436__$1;
var files = cljs.core.get.call(null,map__38436__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1518288637861
