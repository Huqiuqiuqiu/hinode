(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a0b8695"],{"8e2a":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"message"},[n("div",{staticClass:"message-info"},[n("Panel",{scopedSlots:e._u([{key:"header",fn:function(){return[n("router-link",{attrs:{to:"/"}},[e._v("主页")]),n("span",[e._v("/")]),n("span",[e._v("新消息")])]},proxy:!0},{key:"content",fn:function(){return[n("div",{staticClass:"content"},[e.hasnot_read_messages.length?n("div",e._l(e.hasnot_read_messages,(function(t,s){return n("p",{key:s},[n("router-link",{attrs:{to:"/user/"+t.author.loginname}},[e._v(e._s(t.author.loginname))]),e._v("在话题 "),n("router-link",{attrs:{to:"/post/"+t.topic.id}},[e._v(e._s(t.topic.title))]),e._v("中@了你 ")],1)})),0):n("p",[e._v("无消息")])])]},proxy:!0}])}),n("Panel",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("过往信息")]},proxy:!0},{key:"content",fn:function(){return[e.has_read_messages.length?n("div",e._l(e.has_read_messages,(function(t,s){return n("p",{key:s},[n("router-link",{attrs:{to:"/user/"+t.author.loginname}},[e._v(e._s(t.author.loginname))]),e._v("在话题 "),n("router-link",{attrs:{to:"/post/"+t.topic.id}},[e._v(e._s(t.topic.title))]),e._v("中@了你 ")],1)})),0):n("p",[e._v("无消息")])]},proxy:!0}])})],1),n("AsideInfo")],1)},a=[],r=n("1da1"),o=(n("96cf"),n("f34a")),i=n("555c"),c={components:{Panel:o["a"],AsideInfo:i["a"]},data:function(){return{has_read_messages:[],hasnot_read_messages:[]}},created:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=localStorage.getItem("token"),t.next=3,e.$axios.get("/messages?accesstoken=".concat(n));case 3:s=t.sent,e.has_read_messages=s.data.has_read_messages,e.hasnot_read_messages=s.data.hasnot_read_messages;case 6:case"end":return t.stop()}}),t)})))()}},u=c,_=(n("ec7e"),n("2877")),l=Object(_["a"])(u,s,a,!1,null,null,null);t["default"]=l.exports},b545:function(e,t,n){},ec7e:function(e,t,n){"use strict";n("b545")}}]);
//# sourceMappingURL=chunk-2a0b8695.355b8906.js.map