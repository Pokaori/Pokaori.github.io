(function(e){function t(t){for(var n,o,i=t[0],l=t[1],c=t[2],m=0,d=[];m<i.length;m++)o=i[m],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,i=1;i<r.length;i++){var l=r[i];0!==a[l]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},s=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"0f3c":function(e,t,r){"use strict";r("64de")},1881:function(e,t,r){},2689:function(e,t,r){},"4ddd":function(e,t,r){"use strict";r("1881")},"54f9":function(e,t,r){"use strict";r("2689")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},s=[],o=(r("034f"),r("2877")),i={},l=Object(o["a"])(i,a,s,!1,null,null,null),c=l.exports,u=r("1da1"),m=r("5530"),d=(r("96cf"),r("522d")),p=r("efe7");n["a"].use(d["a"]);var v="apollo-token",g=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_GRAPHQL_HTTP||"https://webprogbase-lab6-graphql.herokuapp.com/",b=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_FILES_ROOT||g.substr(0,g.indexOf("/graphql"));n["a"].prototype.$filesRoot=b;var h={httpEndpoint:g,wsEndpoint:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_GRAPHQL_WS||"wss://webprogbase-lab6-graphql.herokuapp.com/graphql",tokenName:v,persisting:!1,websocketsOnly:!1,ssr:!1};function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(p["createApolloClient"])(Object(m["a"])(Object(m["a"])({},h),e)),r=t.apolloClient,n=t.wsClient;r.wsClient=n;var a=new d["a"]({defaultClient:r,defaultOptions:{$query:{}},errorHandler:function(e){console.log("%cError","background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;",e.message)}});return a}function _(e,t){return C.apply(this,arguments)}function C(){return C=Object(u["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return"undefined"!==typeof localStorage&&r&&localStorage.setItem(v,r),t.wsClient&&Object(p["restartWebsockets"])(t.wsClient),e.prev=2,e.next=5,t.resetStore();case 5:e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](2),console.log("%cError on cache reset (login)","color: orange;",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[2,7]])}))),C.apply(this,arguments)}var w,R,x,O,y,j,E,$,k,S,q,P,M,U,D,N,A,L=r("8c4f"),B=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.error?r("div",[r("div",{staticClass:"alert alert-danger alert-dismissible fade show",attrs:{role:"alert"}},[r("strong",[e._v("Authentification failed!")]),e._v(" "+e._s(e.error)+" "),r("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"alert","aria-label":"Close"},on:{click:e.noerr}})])]):e._e(),r("form",{on:{submit:e.sendForm}},[r("label",[r("p",{staticClass:"label-txt"},[e._v("ENTER YOUR NAME")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"input",attrs:{type:"text",required:""},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),e._m(0)]),r("label",[r("p",{staticClass:"label-txt"},[e._v("ENTER YOUR PASSWORD")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"input",attrs:{type:"password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._m(1)]),r("button",{attrs:{type:"submit",id:"myBt"}},[e._v("submit")]),r("div",{attrs:{id:"some"}},[e._v("Don't have an account? "),r("router-link",{attrs:{to:"/register"}},[e._v("Register now")])],1)])])},I=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"line-box"},[r("div",{staticClass:"line"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"line-box"},[r("div",{staticClass:"line"})])}],T=(r("d81d"),r("8785")),J=r("5184"),F=Object(J["a"])(w||(w=Object(T["a"])(["query login($username: String!, $password: String!){\n    login(username: $username, password: $password)}"]))),H=Object(J["a"])(R||(R=Object(T["a"])(["query register($username: String!, $password: String!){\n    register(username: $username, password: $password){\n    username}}"]))),V=Object(J["a"])(x||(x=Object(T["a"])(["query rooms {\n    rooms {id name owner {username}}\n    }"]))),Q=Object(J["a"])(O||(O=Object(T["a"])(["mutation createRoom ($name: String!){\n    createRoom(name: $name) {\n        id\n        name\n        timestamp\n    }\n    }"]))),G=Object(J["a"])(y||(y=Object(T["a"])(["subscription roomCreated {\n    roomCreated {\n    id name owner {username}\n        }\n    }"]))),W=Object(J["a"])(j||(j=Object(T["a"])(["subscription roomUpdated {\n    roomUpdated {\n    id name owner {username}\n        }\n    }"]))),Y=Object(J["a"])(E||(E=Object(T["a"])(["subscription roomDeleted {\n    roomDeleted{\n    id \n        }\n    }"]))),z=Object(J["a"])($||($=Object(T["a"])(["subscription currentRoomChanged {\n    currentRoomChanged {\n        id\n      currentRoom { id \n        name \n        owner{username}\n        members{id username}\n        lastMessages{id timestamp author{username} text}\n    }\n    }\n  }\n  "]))),K=Object(J["a"])(k||(k=Object(T["a"])(["subscription messageCreated {\n    messageCreated {\n      id\n      timestamp\n      author { id username }\n      text\n    }\n  }"]))),X=Object(J["a"])(S||(S=Object(T["a"])(["subscription memberJoined {\n    memberJoined { id username }\n  }"]))),Z=Object(J["a"])(q||(q=Object(T["a"])(["subscription memberLeft {\n    memberLeft { id username }\n  }"]))),ee=Object(J["a"])(P||(P=Object(T["a"])(["query me {\n    me {\n      id\n      username\n      currentRoom {\n        id\n        name\n        owner{username}\n        members{id username}\n        lastMessages{id timestamp author{username} text}\n      }\n    }\n  }"]))),te=Object(J["a"])(M||(M=Object(T["a"])(["mutation join($roomId: ID!) {\n    joinRoom(roomId: $roomId) {\n      id\n      name\n    }\n  }"]))),re=Object(J["a"])(U||(U=Object(T["a"])(["mutation leave {\n    leaveCurrentRoom {\n      id \n      name\n    }\n  }"]))),ne=Object(J["a"])(D||(D=Object(T["a"])(["mutation updateRoom ($id: ID!,$name: String!){\n    updateRoom(id: $id, name: $name) {\n      id \n    }\n  }"]))),ae=Object(J["a"])(N||(N=Object(T["a"])(["mutation deleteRoom ($id: ID!){\n    deleteRoom (id: $id) {\n      id \n    }\n  }"]))),se=Object(J["a"])(A||(A=Object(T["a"])(["mutation createMessage ($text: String!) {\n    createMessage(text: $text) {\n      id\n      timestamp\n      author { username }\n      text\n    }\n  }"]))),oe={name:"SignIn",data:function(){return{login:null,user:null,error:null,username:null,password:null,er_mes:"",skipQuery:!0}},methods:{sendForm:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function r(){var n,a,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.preventDefault(),n=null,r.prev=2,r.next=5,t.$apollo.query({query:F,variables:{username:t.username,password:t.password}});case 5:return n=r.sent,console.log(n.data.login),localStorage.setItem("username",t.username),r.next=10,_(t.$apollo.provider.defaultClient,n.data.login);case 10:t.$router.push("/"),r.next=19;break;case 13:r.prev=13,r.t0=r["catch"](2),a=r.t0.graphQLErrors,s=r.t0.networkError,a&&a.map((function(e){var r=e.message;return t.error=r})),s&&(t.error=s);case 19:case"end":return r.stop()}}),r,null,[[2,13]])})))()},noerr:function(){this.error=""}}},ie=oe,le=(r("0f3c"),Object(o["a"])(ie,B,I,!1,null,"50338d99",null)),ce=le.exports,ue=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.error?r("div",[r("div",{staticClass:"alert alert-danger alert-dismissible fade show",attrs:{role:"alert"}},[r("strong",[e._v("Authentification failed!")]),e._v(" "+e._s(e.error)+" "),r("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"alert","aria-label":"Close"},on:{click:e.noerr}})])]):e._e(),r("form",{on:{submit:e.sendForm}},[r("label",[r("p",{staticClass:"label-txt"},[e._v("ENTER YOUR NAME")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"input",attrs:{type:"text",required:""},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),e._m(0)]),r("label",[r("p",{staticClass:"label-txt"},[e._v("ENTER YOUR PASSWORD")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"input",attrs:{type:"password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._m(1)]),r("button",{attrs:{type:"submit",id:"myBt"}},[e._v("submit")]),r("div",{attrs:{id:"some"}},[e._v("Already have an account? "),r("router-link",{attrs:{to:"/sign"}},[e._v("Log in now")])],1)])])},me=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"line-box"},[r("div",{staticClass:"line"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"line-box"},[r("div",{staticClass:"line"})])}],de={name:"register",data:function(){return{id:null,errors:null,username:null,password:null,error:null,er_mes:""}},methods:{sendForm:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function r(){var n,a,s,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.preventDefault(),n=null,a=null,r.prev=3,r.next=6,t.$apollo.query({query:H,variables:{username:t.username,password:t.password}});case 6:return n=r.sent,console.log(n.data),r.next=10,t.$apollo.query({query:F,variables:{username:t.username,password:t.password}});case 10:return a=r.sent,console.log(a.data.login),localStorage.setItem("username",t.username),r.next=15,_(t.$apollo.provider.defaultClient,a.data.login);case 15:t.$router.push("/"),r.next=24;break;case 18:r.prev=18,r.t0=r["catch"](3),s=r.t0.graphQLErrors,o=r.t0.networkError,s&&s.map((function(e){var r=e.message;return t.error=r})),o&&(t.error=o);case 24:case"end":return r.stop()}}),r,null,[[3,18]])})))()},noerr:function(){this.error=""}}},pe=de,ve=(r("4ddd"),Object(o["a"])(pe,ue,me,!1,null,"35d09b7c",null)),ge=ve.exports,be=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"sign"},[r("div",{staticClass:"block-left"},[r("div",{staticClass:"container scrollStatus",attrs:{id:"container"}},[r("div",{staticClass:"inbox_people"},[r("div",{staticClass:"headind_srch"},[r("div",{staticClass:"recent_heading"},[r("h4",[e._v(e._s(e.username)+"`s rooms")])]),r("div",{staticClass:"srch_bar"},[r("form",{on:{submit:e.sendForm}},[r("div",{staticClass:"stylish-input-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.room_name,expression:"room_name"}],staticClass:"search-bar",attrs:{type:"text",placeholder:"Create new",required:""},domProps:{value:e.room_name},on:{input:function(t){t.target.composing||(e.room_name=t.target.value)}}}),e._m(0)])])])]),r("div",{staticClass:"inbox_chat"},e._l(e.rooms,(function(t){return r("div",{key:t.id},[t.owner.username==e.username?r("div",{staticClass:"chat_list active_chat",attrs:{"aria-current":"true"}},[r("div",{staticClass:"chat_people"},[e._m(1,!0),r("div",{staticClass:"chat_ib"},[r("span",{attrs:{id:"text"}},[e._v(e._s(t.name))]),r("input",{staticClass:"btn btn-outline-secondary",attrs:{type:"submit",value:"connect",id:"myBt"},on:{click:function(r){return e.enterRoom(t)}}})])])]):r("div",{staticClass:"chat_list"},[r("div",{staticClass:"chat_people"},[e._m(2,!0),r("div",{staticClass:"chat_ib"},[r("span",{attrs:{id:"text"}},[e._v(" "+e._s(t.name))]),r("input",{staticClass:"btn btn-outline-secondary",attrs:{type:"submit",value:"connect",id:"myBt"},on:{click:function(r){return e.enterRoom(t)}}})])])])])})),0)])])]),e.$apollo.loading?e._e():r("div",[e.deleted?r("div",[r("img",{attrs:{src:"https://icons-for-free.com/iconfiles/png/512/delete+remove+trash+trash+bin+trash+can+icon-1320073117929397588.png",alt:"sunil"}})]):e.me.currentRoom?r("div",{staticClass:"block-right"},[r("div",{staticClass:"block-left"},[r("div",{staticClass:"headind_srch"},[r("div",{staticClass:"recent_heading"},[r("h4",[e._v(e._s(e.me.currentRoom.name))])]),e.username==e.me.currentRoom.owner.username?r("div",{staticClass:"srch_bar"},[r("div",{staticClass:"stylish-input-group"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.updateRoom(e.me.currentRoom)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.update,expression:"update"}],staticClass:"search-bar",attrs:{type:"text",placeholder:"new name",required:""},domProps:{value:e.update},on:{input:function(t){t.target.composing||(e.update=t.target.value)}}}),e._m(3)])])]):e._e()]),r("div",{staticClass:"mesgs"},[r("div",{staticClass:"msg_history"},e._l(e.me.currentRoom.lastMessages,(function(t){return r("div",{key:t.id},[t.author.username!=e.username?r("div",{staticClass:"incoming_msg"},[e._m(4,!0),r("div",{staticClass:"received_msg"},[r("div",{staticClass:"received_withd_msg"},[r("p",[e._v(e._s(t.text))]),r("span",{staticClass:"time_date"},[e._v(" "+e._s(t.timestamp)+" | ["+e._s(t.author.username)+"]")])])])]):r("div",{staticClass:"outgoing_msg "},[r("div",{staticClass:"sent_msg"},[r("p",[e._v(e._s(t.text))]),r("span",{staticClass:"time_date"},[e._v(" "+e._s(t.timestamp)+" | [you]")])])])])})),0),r("form",{on:{submit:function(t){return t.preventDefault(),e.createMessage(t)}}},[r("div",{staticClass:"type_msg"},[r("div",{staticClass:"input_msg_write"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"write_msg",attrs:{type:"text",placeholder:"Type a message",required:""},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}}),e._m(5)])])])])]),r("div",{staticClass:"block-right"},[r("div",{staticClass:"container scrollStatus",attrs:{id:"container"}},[r("div",{staticClass:"headind_srch"},[r("div",{staticClass:"recent_heading"},[r("div",{staticClass:"srch_bar"},[r("div",{staticClass:"stylish-input-group"},[r("span",{staticClass:"input-group-addon"},[e.username==e.me.currentRoom.owner.username?r("button",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"create"},on:{click:function(t){return e.deleteRoom(e.me.currentRoom)}}},[e._v("delete")]):e._e()])])])]),r("div",{staticClass:"srch_bar"},[r("div",{staticClass:"stylish-input-group"},[r("span",{staticClass:"input-group-addon"},[r("button",{attrs:{type:"submit",value:"create"},on:{click:e.leaveRoom}},[e._v("leave")])])])])]),r("div",{staticClass:"inbox_people"},[r("div",{staticClass:"inbox_chat"},[r("ul",{staticClass:"list-group"},e._l(this.me.currentRoom.members,(function(t){return r("div",{key:t.id},[t.username==e.username?r("div",{staticClass:"chat_list active_chat",attrs:{"aria-current":"true"}},[r("div",{staticClass:"chat_people"},[r("div",{staticClass:"chat_ib"},[r("span",{attrs:{id:"text"}},[e._v(e._s(t.username))])])])]):r("div",{staticClass:"chat_list"},[r("div",{staticClass:"chat_people"},[r("div",{staticClass:"chat_ib"},[r("span",{attrs:{id:"text"}},[e._v(e._s(t.username))])])])])])})),0)])])])])]):e._e()])])},he=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{staticClass:"input-group-addon"},[r("button",{attrs:{type:"submit",value:"create"}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"chat_img"},[r("img",{attrs:{src:"https://pics.freeicons.io/uploads/icons/png/2220490481555590627-512.png",alt:"sunil"}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"chat_img"},[r("img",{attrs:{src:"https://pics.freeicons.io/uploads/icons/png/2220490481555590627-512.png",alt:"sunil"}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{staticClass:"input-group-addon"},[r("button",{attrs:{type:"submit",value:"create"}},[e._v("Update")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"incoming_msg_img"},[r("img",{attrs:{src:"https://i.pinimg.com/originals/56/94/0e/56940e478ef908cb6c76de08cbc18ec6.png",alt:"sunil"}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{staticClass:"msg_send_btn",attrs:{type:"submit"}},[r("i",{staticClass:"fa fa-paper-plane-o",attrs:{"aria-hidden":"true"}})])}],fe=(r("a434"),{name:"Home",data:function(){return{rooms:[],room_name:null,username:localStorage.getItem("username"),message:null,me:null,update:null,deleted:!1,id:1}},apollo:{rooms:{query:V},me:{query:ee},$subscribe:{roomCreated:{query:G,result:function(e){var t=e.data,r=t.roomCreated;console.log("SUB CREATE ROOM",r),this.rooms.push(r)}},roomDeleted:{query:Y,result:function(e){for(var t=e.data,r=0;r<this.rooms.length;r++)this.rooms[r].id==t.roomDeleted.id&&this.rooms.splice(r,1);this.me.currentRoom.id==t.roomDeleted.id&&(this.deleted=!0,this.me.currentRoom=null),console.log("SUB ROOM DELETE",t.roomDeleted)}},roomUpdated:{query:W,result:function(e){for(var t=e.data,r=0;r<this.rooms.length;r++)this.rooms[r].id==t.roomUpdated.id&&(console.log(this.rooms[r]),this.$set(this.rooms,r,t.roomUpdated),console.log(this.rooms[r]));console.log("SUB ROOM UPDATE",t.roomUpdated)}},currentRoomChanged:{query:z,result:function(e){var t=e.data;t.currentRoomChanged.currentRoom?this.$set(this.me.currentRoom,"currentRoom",t.currentRoomChanged.currentRoom):this.me.currentRoom=null,console.log("SUB ROOM CHANGE",t.currentRoomChanged.currentRoom)}},memberJoin:{query:X,result:function(e){var t=e.data;this.me.currentRoom.members.push(t.memberJoined);var r={id:this.id,author:{username:"system"},text:t.memberJoined.username+" entered"};this.id++,this.me.currentRoom.lastMessages.push(r),console.log("SUB MEMBER JOIN",t.memberJoined)}},memberLeft:{query:Z,result:function(e){for(var t=e.data,r=0;r<this.me.currentRoom.members.length;r++)this.me.currentRoom.members[r].id==t.memberLeft.id&&this.me.currentRoom.members.splice(r,1);var n={id:this.id,author:{username:"system"},text:t.memberLeft.username+" leaved"};this.me.currentRoom.lastMessages.push(n),this.id++,console.log("SUB MEMBER LEFT",t.memberLeft)}},messageSubCreate:{query:K,result:function(e){var t=e.data;this.me.currentRoom.lastMessages.push(t.messageCreated),console.log("SUB MESSAGE CREATE",t.messageCreated)}}}},methods:{sendForm:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.preventDefault(),r.prev=1,console.log("create post"),r.next=5,t.$apollo.mutate({mutation:Q,variables:{name:t.room_name}});case 5:n=r.sent,console.log(n),t.room_name=null,r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](1),console.log(r.t0);case 13:case"end":return r.stop()}}),r,null,[[1,10]])})))()},enterRoom:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function r(){var n,a,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(r.prev=0,t.deleted=!1,console.log("Hello"),console.log(e),t.me.currentRoom){r.next=12;break}return console.log("enter room"),r.next=8,t.$apollo.mutate({mutation:te,variables:{roomId:e.id}});case 8:n=r.sent,console.log(n),r.next=22;break;case 12:return console.log("leave room"),r.next=15,t.$apollo.mutate({mutation:re});case 15:return a=r.sent,console.log(a),console.log("enter room"),r.next=20,t.$apollo.mutate({mutation:te,variables:{roomId:e.id}});case 20:s=r.sent,console.log(s);case 22:r.next=27;break;case 24:r.prev=24,r.t0=r["catch"](0),console.log(r.t0);case 27:case"end":return r.stop()}}),r,null,[[0,24]])})))()},leaveRoom:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,console.log("leave room"),t.next=4,e.$apollo.mutate({mutation:re});case 4:r=t.sent,console.log(r),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},updateRoom:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,console.log(e),console.log("update room"),r.next=5,t.$apollo.mutate({mutation:ne,variables:{id:e.id,name:t.update}});case 5:n=r.sent,console.log(n),r.next=12;break;case 9:r.prev=9,r.t0=r["catch"](0),console.log(r.t0);case 12:t.update=null;case 13:case"end":return r.stop()}}),r,null,[[0,9]])})))()},deleteRoom:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,console.log(e),console.log("delete room"),r.next=5,t.$apollo.mutate({mutation:ae,variables:{id:e.id}});case 5:for(n=r.sent,console.log(n),a=0;a<t.me.currentRoom.members.length;a++)t.me.currentRoom.members.currentRoom=null;r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](0),console.log(r.t0);case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()},createMessage:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,console.log("create message"),t.next=4,e.$apollo.mutate({mutation:se,variables:{text:e.message}});case 4:r=t.sent,console.log(r),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:e.message=null;case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}}),_e=fe,Ce=(r("54f9"),Object(o["a"])(_e,be,he,!1,null,"5cbfa00c",null)),we=Ce.exports;n["a"].use(L["a"]);var Re=function(e,t,r){localStorage.getItem("username")?r():Oe.push("/sign")},xe=[{path:"/sign",name:"Sign",component:ce},{path:"/register",name:"Register",component:ge},{path:"/",name:"Chats",component:we,beforeEnter:Re}],Oe=new L["a"]({mode:"history",base:"/",routes:xe}),ye=Oe,je=r("2f62");n["a"].use(je["a"]),n["a"].config.productionTip=!1;var Ee=new je["a"].Store({state:{jwt:null},mutations:{set:function(e,t){e.jwt=t},delete:function(e){e.jwt=null}}});new n["a"]({store:Ee,apolloProvider:f(),router:ye,render:function(e){return e(c)}}).$mount("#app")},"64de":function(e,t,r){},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.93e25590.js.map