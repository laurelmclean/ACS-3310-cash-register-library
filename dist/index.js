var cashRegister;(()=>{var n={607:n=>{function o(n,o){return Math.round(100*(o-n))/100}function e(n,e){var t=o(n,e);return Number((Math.ceil(20*t-.5)/20).toFixed(2))}n.exports.calculateTotalChange=o,n.exports.calculateRoundedChange=e,n.exports.calculateChangeBreakdown=function(n,o){for(var t=e(n,o),c=[{coinName:"toonie",coinAmount:2,coinCount:0},{coinName:"loonie",coinAmount:1,coinCount:0},{coinName:"quarter",coinAmount:.25,coinCount:0},{coinName:"dime",coinAmount:.1,coinCount:0},{coinName:"nickel",coinAmount:.05,coinCount:0}],i=0,a=0,r=c;a<r.length;a++)for(var u=r[a];t-u.coinAmount>=0;)t=Number((t-u.coinAmount).toFixed(2)),u.coinCount+=1,i+=1;for(var l=c.filter((function(n){return n.coinCount>0})),s=0;s<l.length;s++)l[s].coinCount>1&&(l[s].coinName+="s");var m="You need to dispense";if(0==i)m="You don't need to dispense change.";else if(l.length>1){for(s=0;s<l.length-1;s++)m+=" ".concat(l[s].coinCount," ").concat(l[s].coinName,",");m+=" and ".concat(l[l.length-1].coinCount," ").concat(l[l.length-1].coinName,".")}else 1==l.length&&(m="You need to dispense ".concat(l[0].coinCount," ").concat(l[0].coinName,"."));return m}}},o={},e=function e(t){var c=o[t];if(void 0!==c)return c.exports;var i=o[t]={exports:{}};return n[t](i,i.exports,e),i.exports}(607);cashRegister=e})();