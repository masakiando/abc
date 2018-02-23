// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38448){
var map__38449 = p__38448;
var map__38449__$1 = ((((!((map__38449 == null)))?((((map__38449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38449.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38449):map__38449);
var m = map__38449__$1;
var n = cljs.core.get.call(null,map__38449__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38449__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38451_38473 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38452_38474 = null;
var count__38453_38475 = (0);
var i__38454_38476 = (0);
while(true){
if((i__38454_38476 < count__38453_38475)){
var f_38477 = cljs.core._nth.call(null,chunk__38452_38474,i__38454_38476);
cljs.core.println.call(null,"  ",f_38477);

var G__38478 = seq__38451_38473;
var G__38479 = chunk__38452_38474;
var G__38480 = count__38453_38475;
var G__38481 = (i__38454_38476 + (1));
seq__38451_38473 = G__38478;
chunk__38452_38474 = G__38479;
count__38453_38475 = G__38480;
i__38454_38476 = G__38481;
continue;
} else {
var temp__5457__auto___38482 = cljs.core.seq.call(null,seq__38451_38473);
if(temp__5457__auto___38482){
var seq__38451_38483__$1 = temp__5457__auto___38482;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38451_38483__$1)){
var c__31033__auto___38484 = cljs.core.chunk_first.call(null,seq__38451_38483__$1);
var G__38485 = cljs.core.chunk_rest.call(null,seq__38451_38483__$1);
var G__38486 = c__31033__auto___38484;
var G__38487 = cljs.core.count.call(null,c__31033__auto___38484);
var G__38488 = (0);
seq__38451_38473 = G__38485;
chunk__38452_38474 = G__38486;
count__38453_38475 = G__38487;
i__38454_38476 = G__38488;
continue;
} else {
var f_38489 = cljs.core.first.call(null,seq__38451_38483__$1);
cljs.core.println.call(null,"  ",f_38489);

var G__38490 = cljs.core.next.call(null,seq__38451_38483__$1);
var G__38491 = null;
var G__38492 = (0);
var G__38493 = (0);
seq__38451_38473 = G__38490;
chunk__38452_38474 = G__38491;
count__38453_38475 = G__38492;
i__38454_38476 = G__38493;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38494 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30102__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30102__auto__)){
return or__30102__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38494);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38494)))?cljs.core.second.call(null,arglists_38494):arglists_38494));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38455_38495 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38456_38496 = null;
var count__38457_38497 = (0);
var i__38458_38498 = (0);
while(true){
if((i__38458_38498 < count__38457_38497)){
var vec__38459_38499 = cljs.core._nth.call(null,chunk__38456_38496,i__38458_38498);
var name_38500 = cljs.core.nth.call(null,vec__38459_38499,(0),null);
var map__38462_38501 = cljs.core.nth.call(null,vec__38459_38499,(1),null);
var map__38462_38502__$1 = ((((!((map__38462_38501 == null)))?((((map__38462_38501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38462_38501.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38462_38501):map__38462_38501);
var doc_38503 = cljs.core.get.call(null,map__38462_38502__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38504 = cljs.core.get.call(null,map__38462_38502__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38500);

cljs.core.println.call(null," ",arglists_38504);

if(cljs.core.truth_(doc_38503)){
cljs.core.println.call(null," ",doc_38503);
} else {
}

var G__38505 = seq__38455_38495;
var G__38506 = chunk__38456_38496;
var G__38507 = count__38457_38497;
var G__38508 = (i__38458_38498 + (1));
seq__38455_38495 = G__38505;
chunk__38456_38496 = G__38506;
count__38457_38497 = G__38507;
i__38458_38498 = G__38508;
continue;
} else {
var temp__5457__auto___38509 = cljs.core.seq.call(null,seq__38455_38495);
if(temp__5457__auto___38509){
var seq__38455_38510__$1 = temp__5457__auto___38509;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38455_38510__$1)){
var c__31033__auto___38511 = cljs.core.chunk_first.call(null,seq__38455_38510__$1);
var G__38512 = cljs.core.chunk_rest.call(null,seq__38455_38510__$1);
var G__38513 = c__31033__auto___38511;
var G__38514 = cljs.core.count.call(null,c__31033__auto___38511);
var G__38515 = (0);
seq__38455_38495 = G__38512;
chunk__38456_38496 = G__38513;
count__38457_38497 = G__38514;
i__38458_38498 = G__38515;
continue;
} else {
var vec__38464_38516 = cljs.core.first.call(null,seq__38455_38510__$1);
var name_38517 = cljs.core.nth.call(null,vec__38464_38516,(0),null);
var map__38467_38518 = cljs.core.nth.call(null,vec__38464_38516,(1),null);
var map__38467_38519__$1 = ((((!((map__38467_38518 == null)))?((((map__38467_38518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38467_38518.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38467_38518):map__38467_38518);
var doc_38520 = cljs.core.get.call(null,map__38467_38519__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38521 = cljs.core.get.call(null,map__38467_38519__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38517);

cljs.core.println.call(null," ",arglists_38521);

if(cljs.core.truth_(doc_38520)){
cljs.core.println.call(null," ",doc_38520);
} else {
}

var G__38522 = cljs.core.next.call(null,seq__38455_38510__$1);
var G__38523 = null;
var G__38524 = (0);
var G__38525 = (0);
seq__38455_38495 = G__38522;
chunk__38456_38496 = G__38523;
count__38457_38497 = G__38524;
i__38458_38498 = G__38525;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__38469 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38470 = null;
var count__38471 = (0);
var i__38472 = (0);
while(true){
if((i__38472 < count__38471)){
var role = cljs.core._nth.call(null,chunk__38470,i__38472);
var temp__5457__auto___38526__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___38526__$1)){
var spec_38527 = temp__5457__auto___38526__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38527));
} else {
}

var G__38528 = seq__38469;
var G__38529 = chunk__38470;
var G__38530 = count__38471;
var G__38531 = (i__38472 + (1));
seq__38469 = G__38528;
chunk__38470 = G__38529;
count__38471 = G__38530;
i__38472 = G__38531;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__38469);
if(temp__5457__auto____$1){
var seq__38469__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38469__$1)){
var c__31033__auto__ = cljs.core.chunk_first.call(null,seq__38469__$1);
var G__38532 = cljs.core.chunk_rest.call(null,seq__38469__$1);
var G__38533 = c__31033__auto__;
var G__38534 = cljs.core.count.call(null,c__31033__auto__);
var G__38535 = (0);
seq__38469 = G__38532;
chunk__38470 = G__38533;
count__38471 = G__38534;
i__38472 = G__38535;
continue;
} else {
var role = cljs.core.first.call(null,seq__38469__$1);
var temp__5457__auto___38536__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___38536__$2)){
var spec_38537 = temp__5457__auto___38536__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38537));
} else {
}

var G__38538 = cljs.core.next.call(null,seq__38469__$1);
var G__38539 = null;
var G__38540 = (0);
var G__38541 = (0);
seq__38469 = G__38538;
chunk__38470 = G__38539;
count__38471 = G__38540;
i__38472 = G__38541;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1518288637980
