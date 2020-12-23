(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{165:function(e,t,a){},170:function(e,t,a){},187:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(33),s=a.n(c),o=a(73),l=a(24),u=a(25);function i(){var e=Object(l.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n          transform: rotate(360deg);\n    }\n  }\n"]);return i=function(){return e},e}function p(){var e=Object(l.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return p=function(){return e},e}var E=u.a.div(p()),m=u.a.div(i()),d=function(e){return function(t){var a=t.isLoading,n=Object(o.a)(t,["isLoading"]);return a?r.a.createElement(E,null,r.a.createElement(m,null)):r.a.createElement(e,n)}},b=a(11),T=a(16),f=a(7),S=a(27);function _(){var e=Object(l.a)(["\n    text-align: center;\n"]);return _=function(){return e},e}function O(){var e=Object(l.a)(["\n    border: 1px red solid;\n    width: 100%;\n"]);return O=function(){return e},e}var v=u.a.div(O()),P=u.a.p(_()),h=function(e){var t=e.message;return r.a.createElement(v,null,r.a.createElement(P,null,t))},y=a(15),g=function(e){var t=e.posts;return t&&t.length>0?(t=[].concat(Object(S.a)(t.filter((function(e){var t=e.title;return t.length>=5&&"[Pin]"===t.substr(0,5)}))),Object(S.a)(t.filter((function(e){var t=e.title;return!(t.length>=5&&"[Pin]"===t.substr(0,5))})))),r.a.createElement("div",null,t.map((function(e){var t=e._id,a=e.title;return r.a.createElement("ul",{className:"list-group list-group-flush",key:t},r.a.createElement(y.b,{className:"list-group-item text-secondary border-top  border-bottom my-2 m-50",to:"/post/".concat(t)},function(e){var t=e.split(" ").filter((function(e){return!("["==e[0]&&"]"==e[e.length-1])})),a=e.split(" ").filter((function(e){return"["==e[0]&&"]"==e[e.length-1]}));return r.a.createElement("span",null,a.map((function(e){return r.a.createElement("span",{style:{marginRight:"10px"},className:"badge ".concat("[Pin]"===e?"badge-danger":"badge-light"," ")},e.substr(1,e.length-2)," ")})),t.join(" "))}(a)))})))):r.a.createElement(h,{message:"No posts in the database so far."})},A=Object(T.b)((function(e){return{posts:e.post.posts}}))((function(e){var t=e.posts;return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center display-5 mt-2 mb-3"},"JUDE",r.a.createElement("small",null,"'S BLOG")),r.a.createElement(g,{posts:t}))})),C=(a(84),a(69)),j=a.n(C),x=Object(T.b)((function(e,t){var a=t.match.params.postID;return{post:e.post.posts.find((function(e){return e._id===a}))}}))((function(e){var t=e.post;return Object(n.useEffect)((function(){window.MathJax.typeset()}),[t]),t?r.a.createElement("div",{className:"markdown-body mt-5"},r.a.createElement(j.a,{source:t.body})):r.a.createElement(h,{message:"Please check the URL, since the post is not found in the database."})})),L=a(5),R=a.n(L),U=a(47),w=a(36),D=a(6),N=a(37),k={FETCH_ALL_POSTS_START:"FETCH_ALL_POSTS_START",FETCH_ALL_POSTS_SUCCESS:"FETCH_ALL_POSTS_SUCCESS",FETCH_ALL_POSTS_FAILURE:"FETCH_ALL_POSTS_FAILURE",UPDATE_POST_START:"UPDATE_POST_START",UPDATE_POST_SUCCESS:"UPDATE_POST_SUCCESS",UPDATE_POST_FAILURE:"UPDATE_POST_FAILURE",CREATE_POST_START:"CREATE_POST_START",CREATE_POST_SUCCESS:"CREATE_POST_SUCCESS",CREATE_POST_FAILURE:"CREATE_POST_FAILURE",DELETE_POST_START:"DELETE_POST_START",DELETE_POST_SUCCESS:"DELETE_POST_SUCCESS",DELETE_POST_FAILURE:"DELETE_POST_FAILURE"},F=function(e,t){return{type:k.UPDATE_POST_SUCCESS,payload:{postID:e,post:t}}},I=a(70);a(165);a(23),a(166),a(169);var H=Object(T.b)((function(e,t){var a=t.match.params.id;return{post:e.post.posts.find((function(e){return e._id===a})),id:a}}),(function(e){return{updatePost:function(t,a){return e(function(e,t){return{type:k.UPDATE_POST_START,payload:{postID:e,post:t}}}(t,a))},createPost:function(t,a){return e(function(e,t){return{type:k.CREATE_POST_START,payload:{title:e,body:t}}}(t,a))},deletePost:function(t){return e(function(e){return{type:k.DELETE_POST_START,payload:e}}(t))}}}))((function(e){var t=e.post,a=e.updatePost,c=e.createPost,s=e.deletePost,o=e.id,l=Object(n.useState)({title:"",body:""}),u=Object(N.a)(l,2),i=u[0],p=u[1];Object(n.useEffect)((function(){t&&p(t)}),[t]);var E=function(e){p(Object(D.a)(Object(D.a)({},i),{},{body:e}))},m=i.title,d=i.body,b=function(){var e=Object(U.a)(R.a.mark((function e(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o?a(o,i):c(m,d);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",null,"Post Name:",r.a.createElement("br",null),r.a.createElement("input",{className:"form-control",type:"text",value:m,name:"title",onChange:function(e){var t=e.target,a=t.name,n=t.value;p(Object(D.a)(Object(D.a)({},i),{},Object(w.a)({},a,n)))}})),r.a.createElement("div",null,"Post Body:",r.a.createElement("br",null),r.a.createElement(I.Controlled,{value:d,options:{mode:"markdown",lineNumbers:!0,theme:"eclipse",extraKeys:{Enter:"newlineAndIndentContinueMarkdownList"},lineWrapping:!0},name:"body",onBeforeChange:function(e,t,a){E(a)},onChange:function(e,t,a){E(a)}})),r.a.createElement("div",{className:"btn-group"},r.a.createElement("button",{className:"btn btn-primary",onClick:b},o?"Update":"Create"),o?r.a.createElement("button",{className:"btn btn-danger",onClick:Object(U.a)(R.a.mark((function e(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.confirm("Do you want to delete this post-page?")&&s(o);case 1:case"end":return e.stop()}}),e)})))},"Delete"):null))})),M=function(e){var t=e.posts;return r.a.createElement("div",{style:{maxHeight:"65vh",overflowY:"auto"}},r.a.createElement("ul",{className:"list-group"},t.map((function(e){var t=e._id,a=e.title;return r.a.createElement(y.b,{key:t,to:"/maintain/posts/edit/".concat(t),className:"list-group-item"},a)}))))},J=Object(b.d)(Object(T.b)((function(e){return{posts:e.post.posts}})),f.e)((function(e){var t=e.posts;return r.a.createElement("div",null,r.a.createElement("h2",null,"Update Posts"),r.a.createElement("div",{className:"fluid-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-2"},r.a.createElement("div",{className:"btn-group"},r.a.createElement(y.b,{to:"/maintain/posts/create",className:"btn btn-primary"},"Create")),r.a.createElement(M,{posts:t})),r.a.createElement("div",{className:"col-md-10"},r.a.createElement("div",null,r.a.createElement(f.a,{path:"/maintain/posts/create",component:H}),r.a.createElement(f.a,{path:"/maintain/posts/edit/:id",component:H}))))))})),B=function(){var e=Object(n.useState)(!0),t=Object(N.a)(e,2),a=t[0],c=t[1];return r.a.createElement("nav",{className:"navbar-light navbar navbar-expand-sm  bg-light"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"navbar-brand font-weight-bold text-uppercase",href:"#"},"Jude Gao"),r.a.createElement("button",{onClick:function(){c(!a)},className:"navbar-toggler",type:"button"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"".concat(a?"collapse":""," navbar-collapse")},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item mx-1 text-uppercase"},r.a.createElement(y.b,{to:"/",className:"nav-link",href:"#"},"Home")),r.a.createElement("li",{className:"nav-item mx-1 text-uppercase"},r.a.createElement(y.b,{to:"/maintain",className:"nav-link",href:"#"},"Config")),r.a.createElement("li",{className:"nav-item mx-1 bg-secondary text-uppercase"},r.a.createElement("a",{href:"/resume.pdf",target:"_blank",className:"nav-link text-light"},"R\xe9sum\xe9"))))))},G=Object(b.d)(Object(T.b)((function(e){return{isLoading:!e.post.errorMessage&&!1===e.post.synced,errorMessage:e.post.errorMessage}})),d)((function(e){var t=e.errorMessage;return t?r.a.createElement("div",null,r.a.createElement("h1",null,t),r.a.createElement("p",null,"App is not in a normal state. Please refresh."),r.a.createElement("p",null,"Jude Gao")):r.a.createElement("div",null,r.a.createElement(B,null),r.a.createElement("div",{className:"container"},r.a.createElement(f.a,{path:"/",exact:!0,component:A}),r.a.createElement(f.a,{path:"/post/:postID",component:x})),r.a.createElement(f.a,{path:"/maintain",component:J}),r.a.createElement("p",{className:"text-center text-uppercase font-weight-bold text-secondary mt-5"},"\xa9 2020 gaojude.github.io/"))})),K=(a(170),{posts:[],synced:!1,errorMessage:null}),W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k.FETCH_ALL_POSTS_SUCCESS:return Object(D.a)(Object(D.a)({},e),{},{posts:t.payload,synced:!0});case k.UPDATE_POST_START:return Object(D.a)(Object(D.a)({},e),{},{synced:!1});case k.UPDATE_POST_SUCCESS:return Object(D.a)(Object(D.a)({},e),{},{posts:e.posts.map((function(e){return e._id===t.payload.postID?t.payload.post:e})),synced:!0});case k.CREATE_POST_START:return Object(D.a)(Object(D.a)({},e),{},{synced:!1});case k.CREATE_POST_SUCCESS:return Object(D.a)(Object(D.a)({},e),{},{synced:!0,posts:[t.payload].concat(Object(S.a)(e.posts))});case k.DELETE_POST_START:return Object(D.a)(Object(D.a)({},e),{},{synced:!1});case k.DELETE_POST_SUCCESS:return Object(D.a)(Object(D.a)({},e),{},{synced:!0,posts:e.posts.filter((function(e){return e._id!==t.payload}))});case k.FETCH_ALL_POSTS_FAILURE:case k.UPDATE_POST_FAILURE:case k.CREATE_POST_FAILURE:case k.DELETE_POST_FAILURE:return Object(D.a)(Object(D.a)({},e),{},{errorMessage:t.payload});default:return e}},Y=Object(b.c)({post:W}),q=a(71),z=a(72),Q=a(9),V=a(28),X=a.n(V),Z=R.a.mark(le),$=R.a.mark(ue),ee=R.a.mark(ie),te=R.a.mark(pe),ae=R.a.mark(Ee),ne=R.a.mark(me),re=R.a.mark(de),ce=R.a.mark(be),se="post",oe=function(e){return"post/".concat(e)};function le(){var e,t;return R.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,X.a.get("".concat("","/").concat(se));case 3:return e=a.sent,t=e.data,a.next=7,Object(Q.b)((r=t.reverse(),{type:k.FETCH_ALL_POSTS_SUCCESS,payload:r}));case 7:a.next=13;break;case 9:return a.prev=9,a.t0=a.catch(0),a.next=13,Object(Q.b)((n=a.t0.message,{type:k.FETCH_ALL_POSTS_FAILURE,payload:n}));case 13:case"end":return a.stop()}var n,r}),Z,null,[[0,9]])}function ue(e){var t,a,n,r,c;return R.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.payload,a=t.postID,n=t.post,s.prev=1,s.next=4,X.a.post("".concat("","/").concat(oe(a)),n);case 4:return r=s.sent,c=r.data,s.next=8,Object(Q.b)(F(a,c));case 8:s.next=14;break;case 10:return s.prev=10,s.t0=s.catch(1),s.next=14,Object(Q.b)((o=s.t0.message,{type:k.UPDATE_POST_FAILURE,payload:o}));case 14:case"end":return s.stop()}var o}),$,null,[[1,10]])}function ie(e){var t,a,n,r,c;return R.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.payload,a=t.title,n=t.body,s.prev=1,s.next=4,X.a.post("".concat("","/").concat(se),{title:a,body:n});case 4:return r=s.sent,c=r.data,s.next=8,Object(Q.b)({type:k.CREATE_POST_SUCCESS,payload:c});case 8:s.next=14;break;case 10:return s.prev=10,s.t0=s.catch(1),s.next=14,Object(Q.b)((o=s.t0.message,{type:k.CREATE_POST_FAILURE,payload:o}));case 14:case"end":return s.stop()}var o}),ee,null,[[1,10]])}function pe(e){var t;return R.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,a.prev=1,a.next=4,X.a.delete("".concat("","/").concat(oe(t)));case 4:return a.next=6,Object(Q.b)({type:k.DELETE_POST_SUCCESS,payload:t});case 6:a.next=12;break;case 8:return a.prev=8,a.t0=a.catch(1),a.next=12,Object(Q.b)((n=a.t0.message,{type:k.DELETE_POST_FAILURE,payload:n}));case 12:case"end":return a.stop()}var n}),te,null,[[1,8]])}function Ee(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Q.c)(k.UPDATE_POST_START,ue);case 2:case"end":return e.stop()}}),ae)}function me(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Q.c)(k.CREATE_POST_START,ie);case 2:case"end":return e.stop()}}),ne)}function de(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Q.c)(k.DELETE_POST_START,pe);case 2:case"end":return e.stop()}}),re)}function be(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Q.a)([le(),Ee(),me(),de()]);case 2:case"end":return e.stop()}}),ce)}var Te=R.a.mark(fe);function fe(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Q.a)([be()]);case 2:case"end":return e.stop()}}),Te)}var Se=Object(z.a)(),_e=Object(b.e)(Y,Object(b.a)(q.logger,Se));Se.run(fe);var Oe=_e;s.a.render(r.a.createElement(T.a,{store:Oe},r.a.createElement(y.a,null,r.a.createElement(G,null))),document.getElementById("root"))},74:function(e,t,a){e.exports=a(187)},84:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.cb7dacc2.chunk.js.map