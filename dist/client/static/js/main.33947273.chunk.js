(this["webpackJsonpmedia-player-gui"]=this["webpackJsonpmedia-player-gui"]||[]).push([[0],{360:function(e,n,t){e.exports=t(543)},365:function(e,n,t){},543:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),c=t(31),o=t.n(c),i=(t(365),t(16)),u=t(15),l=t(346),s=Object(l.a)({palette:{type:"dark",primary:{light:"#1d2124",main:"#ffffff",dark:"#fff",text:"#fff",contrastText:"#090909"},secondary:{light:"#0C0C0C",main:"#141414",dark:"#141414",text:"#fff",contrastText:"#ffffff"}}}),d=t(602),m=t(141),f=t(8),p=t(83),b=t(137),h=t(36),v=t(13),E=t(35),g=t(212),y=t(223),O=t(335),j=t.n(O);function w(){var e=Object(i.a)(["\n  cursor: pointer;\n"]);return w=function(){return e},e}var S=Object(u.b)(j.a)(w()),C=function(e){var n=e.onDialogOpen,t=e.data;return n&&"function"===typeof n?r.a.createElement(S,{onClick:function(){n(t)}},JSON.stringify(t)):null},k=t(132),x=t.n(k),R=function(e){var n=e.getValue,t=k.duration(n());return t.asHours()>1?Math.floor(t.asHours())+k.utc(t.asMilliseconds()).format(":mm:ss"):k.utc(t.asMilliseconds()).format("mm:ss")},N=function(e){var n=e.getValue;return n()?r.a.createElement("img",{height:48,src:n(),alt:""}):null},T=t(575),P=t(576),_=t(577),U=t(578);function D(){var e=Object(i.a)(["\n  cursor: pointer;\n"]);return D=function(){return e},e}var L=u.b.div(D()),z=function(e){var n=e.data,t=e.selectedMedia,a=e.onSelectedMediaChange,c=t&&t.trackId===n.trackId;return r.a.createElement(L,{onClick:function(){return a(c?null:n)}},"feature-movie"===n.kind?r.a.createElement(T.a,null):r.a.createElement(P.a,null),c?r.a.createElement(_.a,null):r.a.createElement(U.a,null))},F=t(27),M="SET_SELECTED_MEDIA",B=function(e){return e.player.selectedMedia};function A(){var e=Object(i.a)(["\n  width: 100%;\n  height: 75vh;\n\n  .ag-cell-focus {\n    border: none !important;\n  }\n  .ag-icon {\n    color: "," !important;;\n  }\n\n  .ag-theme-material {\n    color: "," !important;\n  }\n"]);return A=function(){return e},e}var q=u.b.div(A(),(function(e){return e.theme.palette.secondary.main}),(function(e){return e.theme.palette.secondary.main})),I=function(e){var n=e.onGridReady,t=(e.onDialogOpen,Object(F.c)(B)),a=Object(F.b)(),c=[{field:"artworkUrl100",cellRenderer:"ImageCellRenderer",width:60},{headerName:"Artist",field:"artistName",width:140},{headerName:"Collection",field:"collectionName",width:140},{headerName:"Track",field:"trackName",width:140},{headerName:"Price",field:"trackPrice",width:80},{headerName:"Genre",field:"primaryGenreName",width:80},{headerName:"Duration",field:"trackTimeMillis",cellRenderer:"DurationFormatter",width:80},{cellRenderer:"PlayCellRenderer",cellRendererParams:{selectedMedia:t,onSelectedMediaChange:function(e){a(function(e){return{type:M,payload:e}}(e))}},width:40}];return r.a.createElement(q,{className:"ag-theme-material"},r.a.createElement(g.AgGridReact,{onGridReady:n,cacheBlockSize:200,gridOptions:{rowModelType:"serverSide"},columnDefs:c,defaultColDef:{resizable:!0,sortable:!0,filter:!0},frameworkComponents:{FullDetailsCellRenderer:C,DurationFormatter:R,ImageCellRenderer:N,PlayCellRenderer:z},cacheOverflowSize:2,maxConcurrentDatasourceRequests:1,maxBlocksInCache:10,animateRows:!0,modules:y.a}))},G=t(611),H=t(612),Y=t(579),V=t(581);function W(){var e=Object(i.a)(["\n  margin-inline-start: 10px;\n  height: 0;\n  z-index: 1;\n  .MuiFab-primary {\n    width: 60px;\n    height: 60px;\n  }\n"]);return W=function(){return e},e}var K=Object(v.a)({},"Search as you type",Y.a),Q=u.b.div(W()),J=function(e){var n=e.options,t=e.onOptionsChange,a=r.a.useState(!1),c=Object(E.a)(a,2),o=c[0],i=c[1];return r.a.createElement(Q,null,r.a.createElement(G.a,{icon:r.a.createElement(V.a,null),onClose:function(){i(!1)},onOpen:function(){i(!0)},open:o,direction:"down",ariaLabel:"Settings"},Object.entries(n).map((function(e){var a,c=Object(E.a)(e,2),o=c[0],i=(c[1],K[o]);return r.a.createElement(H.a,{key:o,icon:r.a.createElement(i,{style:n[o]?null:{fill:"#333"}}),onClick:(a=o,function(){t(Object(v.a)({},a,!n[a]))}),title:o})}))))},X=t(605),$=function(e){return r.a.createElement(X.a,Object.assign({variant:"outlined"},e))},Z=t(580),ee=t(585);function ne(){var e=Object(i.a)(["\n  margin-inline-start: 10px;\n  background-color: ",";\n  .MuiFab-root {\n    width: 60px;\n    height: 60px;\n  }\n"]);return ne=function(){return e},e}function te(){var e=Object(i.a)(["\n  display: flex;\n  width: 100%;\n"]);return te=function(){return e},e}var ae=u.b.div(te()),re=Object(u.b)(Z.a)(ne(),(function(e){return e.theme.palette.secondary.text})),ce=function(e){var n=e.options,t=e.keywords,a=e.onKeywordsChange,c=e.onSubmit,o=n["Search as you type"];return r.a.createElement(ae,null,r.a.createElement($,{fullWidth:!0,label:o?"Search as you type":"Search",onChange:function(e){a(e.target.value)},value:t,onKeyPress:o?null:function(e){return"Enter"===e.key?c():null}}),!o&&r.a.createElement(re,{onClick:c},r.a.createElement(ee.a,null)))},oe=t(609),ie=t(586),ue=t(587),le=t(347);function se(){var e=Object(i.a)(["\n\n.MuiPaper-root {\n  background-color: ",";\n}\n"]);return se=function(){return e},e}function de(){var e=Object(i.a)(["\n  margin: 4rem auto;\n  font-family: ",";\n  color: ",";\n  cursor: default;\n"]);return de=function(){return e},e}var me=u.b.div(de(),(function(e){return e.theme.typography.fontFamily}),(function(e){return e.theme.palette.primary.main})),fe=Object(u.b)(oe.a)(se(),(function(e){return e.theme.palette.secondary.light})),pe=function(e){var n=e.children,t=e.open,a=e.onDialogClose;return r.a.createElement(fe,{fullScreen:!0,open:t,onClose:a},r.a.createElement(ie.a,null,r.a.createElement(ue.a,{edge:"start",onClick:a,"aria-label":"close"},r.a.createElement(le.a,{style:{fill:"white"}}))),r.a.createElement(me,null,n))},be=t(60),he=t(44),ve=t(26),Ee=t.n(ve),ge=t(47),ye=t.n(ge),Oe="".concat("http://localhost:8080").concat("").concat("/api"),je=new(function(){function e(){Object(be.a)(this,e)}return Object(he.a)(e,[{key:"search",value:function(e){return ye.a.get("".concat(Oe,"/search"),{params:e})}},{key:"deleteOneOfMyTopSearches",value:function(e){return Ee.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",ye.a.delete("".concat(Oe,"/top"),{params:{keywords:e}}));case 1:case"end":return n.stop()}}))}}]),e}()),we=Object.freeze(je),Se=function(){function e(n,t){Object(be.a)(this,e),this.mediaSearchService=n,this.keywords=t}return Object(he.a)(e,[{key:"destroy",value:function(){}}]),Object(he.a)(e,[{key:"getRows",value:function(e){var n=e.request,t=e.successCallback,a=e.failCallback,r=n.startRow,c=n.endRow-r;this.mediaSearchService.search({keywords:this.keywords,offset:r,limit:c}).then((function(e){var n=e.data;n?t(n.results,n.lastRow):a()}))}}]),e}(),Ce=t(606),ke=t(588),xe=t(589),Re=t(590),Ne=t(591),Te=t(592),Pe=t(593),_e=t(594),Ue=t(595),De={400:"Bad request",404:"Something went wrong (404)",401:"Authentication failed (401)",403:"Something went wrong, probably too many requests",409:"User already exists",500:"Internal server error"},Le="OPEN_SNACKBAR",ze="CLOSE_SNACKBAR",Fe=function(e){var n=e.statusCode,t=e.message;e.duration;return{type:Le,message:n?De[n]:t}};function Me(){var e=Object(i.a)(["\n  display: flex;\n  margin-inline-end: -1.5rem;\n  align-items: center;\n"]);return Me=function(){return e},e}function Be(){var e=Object(i.a)(["\n  margin: 0 0.2rem;\n  background-color: ",";\n"]);return Be=function(){return e},e}function Ae(){var e=Object(i.a)(["\n  margin-top: -35px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  align-content: center;\n  z-index: 101;\n"]);return Ae=function(){return e},e}function qe(){var e=Object(i.a)(["\n  display: ",";\n"]);return qe=function(){return e},e}function Ie(){var e=Object(i.a)(["\n  width: ",";\n  height: 0;\n"]);return Ie=function(){return e},e}function Ge(){var e=Object(i.a)(["\n  width: 100%;\n"]);return Ge=function(){return e},e}var He=u.b.video(Ge()),Ye=u.b.div(Ie(),(function(e){return e.isFullScreen?"70vw":"500px"})),Ve=u.b.div(qe(),(function(e){return e.hidden?"none":"block"})),We=u.b.div(Ae()),Ke=Object(u.b)(Z.a)(Be(),(function(e){return e.transparent?"transparent":null})),Qe=u.b.div(Me()),Je=function(e){var n=e.isMute,t=Object(F.c)(B),c=!!t&&"feature-movie"===t.kind,o=Object(F.b)(),i=Object(a.useState)(!1),u=Object(E.a)(i,2),l=u[0],s=u[1],d=Object(Ce.a)(r.a.createElement(He,{src:t&&t.previewUrl,autoPlay:!0})),m=Object(E.a)(d,3),f=m[0],p=m[1],b=m[2];Object(a.useEffect)((function(){n?b.mute():b.unmute()}),[n,b]),Object(a.useEffect)((function(){t||b.pause()}),[t,b]);var h=p.time,v=p.duration,g=p.paused,y=h/v*100,O=function(){o(Fe({message:"This feature will be available soon"}))};return r.a.createElement(Ye,{isFullScreen:l},r.a.createElement(Ve,{hidden:!c},r.a.createElement(ke.a,{variant:"determinate",value:y,color:"primary"}),f),r.a.createElement(We,null,r.a.createElement("div",null),r.a.createElement(Qe,null,r.a.createElement(Ke,{size:"small",color:"primary",onClick:O},r.a.createElement(xe.a,null)),r.a.createElement(Ke,{size:"medium",color:"primary",onClick:function(){b.seek(p.time-5)}},r.a.createElement(Re.a,null)),r.a.createElement(Ke,{color:"primary",onClick:g?function(){b.play()}:function(){b.pause()}},g?r.a.createElement(U.a,null):r.a.createElement(Ne.a,null)),r.a.createElement(Ke,{size:"medium",color:"primary",onClick:function(){b.seek(p.time+5)}},r.a.createElement(Te.a,null)),r.a.createElement(Ke,{size:"small",color:"primary",onClick:O},r.a.createElement(Pe.a,null))),c&&r.a.createElement(Ke,{color:"primary",size:"small",style:{alignSelf:"end"},onClick:function(){s(!l)}},l?r.a.createElement(_e.a,null):r.a.createElement(Ue.a,null))))},Xe=t(598),$e=t(599),Ze=t(600),en=t(601),nn=t(129),tn=t.n(nn),an=function(e){var n=e.to,t=e.icon,a=e.onClick,c=Object(p.g)();return r.a.createElement(Z.a,{onClick:function(e){n&&c.push(n),a&&a()}},t||n)},rn=function(){var e=Object(a.useState)({width:window.innerWidth,height:window.innerHeight}),n=Object(E.a)(e,2),t=n[0],r=n[1];return Object(a.useEffect)((function(){var e=function(){r({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[t,r]),t},cn=t(596),on=t(583),un=t(610),ln=t(597),sn=function(e){return!!e.auth.token},dn=function(e){var n=e.auth;return e.user.map[n.profile.username]||n.profile},mn=function(e){return e.auth.pending},fn=function(e){return dn(e).topSearches},pn="".concat("/api","/user"),bn=new(function(){function e(){Object(be.a)(this,e)}return Object(he.a)(e,[{key:"find",value:function(e){return Ee.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",ye.a.get(pn,{params:e}));case 1:case"end":return n.stop()}}))}},{key:"findOne",value:function(e){return Ee.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",ye.a.get("".concat(pn,"/").concat(e)));case 1:case"end":return n.stop()}}))}},{key:"update",value:function(e,n){return Ee.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",ye.a.put("".concat(pn,"/").concat(e),n));case 1:case"end":return t.stop()}}))}},{key:"deleteOne",value:function(e){return Ee.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",ye.a.delete("".concat(pn,"/").concat(e)));case 1:case"end":return n.stop()}}))}},{key:"delete",value:function(e){return Ee.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",ye.a.delete(pn,{data:e}));case 1:case"end":return n.stop()}}))}},{key:"create",value:function(e){return Ee.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",ye.a.post(pn,e));case 1:case"end":return n.stop()}}))}}]),e}()),hn=Object.freeze(bn),vn="FETCH_USERS_SUCCESS",En="UPDATE_USER_SUCCESS",gn="CREATE_USER_REQUEST",yn="CREATE_USER_SUCCESS",On="CREATE_USER_ERROR",jn="DELETE_ONE_USER_SUCCESS",wn="DELETE_USERS_SUCCESS",Sn="FETCH_ONE_USER",Cn="DELETE_ONE_TOP_SEARCH",kn=function(e){return function(n){var t;return Ee.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return n({type:"FETCH_USERS_REQUEST"}),a.prev=1,a.next=4,Ee.a.awrap(hn.find(e));case 4:t=a.sent,n({type:vn,payload:t.data}),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(1),n({type:"FETCH_USERS_ERROR"}),n(Fe(a.t0));case 12:case"end":return a.stop()}}),null,null,[[1,8]])}},xn=function(e){return function(n){var t;return Ee.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Ee.a.awrap(hn.findOne(e));case 3:t=a.sent,n({type:Sn,payload:t.data}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),n(Fe(a.t0));case 10:case"end":return a.stop()}}),null,null,[[0,7]])}};function Rn(){var e=Object(i.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 350px;\n"]);return Rn=function(){return e},e}var Nn=u.b.div(Rn()),Tn=function(e){var n=e.onKeywordsChange,t=Object(a.useRef)(),c=r.a.useState(!1),o=Object(E.a)(c,2),i=o[0],u=o[1],l=Object(F.c)(dn),s=Object(F.c)(fn),d=Object(F.b)(),m=function(){d(xn(l.username)),u(!i)},f=function(e){d(function(e,n){return function(t){var a;return Ee.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Ee.a.awrap(we.deleteOneOfMyTopSearches(n));case 3:a=r.sent,t({type:Cn,payload:{topSearches:a.data,username:e}}),t(xn(e)),t(Fe({message:"".concat(n," removed")})),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),t(Fe(r.t0));case 12:case"end":return r.stop()}}),null,null,[[0,9]])}}(l.username,e))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.a,{onClick:m,buttonRef:t},r.a.createElement(cn.a,null)),r.a.createElement(on.a,{open:i,onClick:m,anchorEl:t.current,placement:"right-end"},r.a.createElement(tn.a,{handle:".handle",defaultPosition:{x:0,y:0}},r.a.createElement(Nn,{className:"handle"},s&&Object.entries(s).map((function(e){var t=Object(E.a)(e,2),a=t[0],c=t[1];return r.a.createElement(ln.a,{badgeContent:c||"0",color:"secondary"},r.a.createElement(un.a,{onClick:function(){n(a),u(!0)},label:a,onDelete:function(){return f(a)}}))}))))))},Pn=function(e){return e&&"string"===typeof e&&e.length>3&&Number(e.slice(e.length-3,e.length))},_n=new(function(){function e(){Object(be.a)(this,e)}return Object(he.a)(e,[{key:"login",value:function(e,n){var t;return Ee.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Ee.a.awrap(ye.a.post("".concat("/api","/login"),{username:e,password:n}));case 3:return t=a.sent,ye.a.defaults.headers.common.Authorization="Bearer ".concat(t.data.token),a.abrupt("return",t);case 8:throw a.prev=8,a.t0=a.catch(0),ye.a.defaults.headers.common.Authorization=null,a.t0.statusCode=Pn(a.t0.message),a.t0;case 13:case"end":return a.stop()}}),null,null,[[0,8]])}},{key:"signUp",value:function(e,n,t,a,r){var c;return Ee.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,Ee.a.awrap(ye.a.post("".concat("/api","/signup"),{username:e,password:n,retypePassword:t,firstName:a,lastName:r}));case 3:return c=o.sent,ye.a.defaults.headers.common.Authorization="Bearer ".concat(c.data.token),o.abrupt("return",c);case 8:throw o.prev=8,o.t0=o.catch(0),ye.a.defaults.headers.common.Authorization=null,o.t0.statusCode=Pn(o.t0.message),o.t0;case 13:case"end":return o.stop()}}),null,null,[[0,8]])}},{key:"getPersistToken",value:function(){return localStorage.getItem("authSnapshot")}}]),e}()),Un=Object.freeze(_n),Dn="LOGIN_REQUEST",Ln="LOGIN_SUCCESS",zn="LOGIN_ERROR",Fn="SIGNUP_REQUEST",Mn="SIGNUP_SUCCESS",Bn="SIGNUP_ERROR",An="LOGOUT";function qn(){var e=Object(i.a)(["\n  position: fixed;\n  z-index: 100;\n"]);return qn=function(){return e},e}function In(){var e=Object(i.a)(["\n  button {\n    margin-top: -5rem;\n    margin-right: 0.5rem;\n  }\n"]);return In=function(){return e},e}function Gn(){var e=Object(i.a)(["\n  display: flex;\n  margin-bottom: 1rem;\n"]);return Gn=function(){return e},e}var Hn=u.b.div(Gn()),Yn=u.b.div(In()),Vn=u.b.div(qn()),Wn=function(){var e=Object(F.c)(B),n=Object(a.useState)(!1),t=Object(E.a)(n,2),c=t[0],o=t[1],i=Object(a.useState)("Metallica"),u=Object(E.a)(i,2),l=u[0],s=u[1],d=function(e,n){var t=Object(a.useState)(e),r=Object(E.a)(t,2),c=r[0],o=r[1];return Object(a.useEffect)((function(){var t=setTimeout((function(){o(e)}),n);return function(){clearTimeout(t)}}),[e]),c}(l,500),m=Object(a.useState)(null),f=Object(E.a)(m,2),p=f[0],b=f[1],g=Object(a.useState)(null),y=Object(E.a)(g,2),O=y[0],j=y[1],w=Object(a.useState)(Object(v.a)({},"Search as you type",!0)),S=Object(E.a)(w,2),C=S[0],k=S[1],x=C["Search as you type"],R=Object(F.b)(),N=rn().width,T=Object(a.useCallback)((function(){p&&d&&p.setServerSideDatasource(new Se(we,d))}),[d,p]);Object(a.useEffect)((function(){x&&T()}),[d,T,x]),Object(a.useEffect)((function(){R(kn())}),[R]),Object(a.useEffect)((function(){p&&(p.sizeColumnsToFit(),setTimeout((function(){return p.sizeColumnsToFit()}),500))}),[p,e,N]);var P=function(e){return s(e)};return r.a.createElement("div",null,r.a.createElement(Yn,null,r.a.createElement(an,{to:"/users",icon:r.a.createElement(Xe.a,null)}),r.a.createElement(an,{icon:r.a.createElement($e.a,null),onClick:function(){R({type:An})}}),r.a.createElement(an,{icon:c?r.a.createElement(Ze.a,null):r.a.createElement(en.a,null),onClick:function(){o(!c)}}),r.a.createElement(Tn,{onKeywordsChange:P})),r.a.createElement(Vn,null,r.a.createElement(tn.a,{handle:".handle",defaultPosition:{x:N-1400,y:-40}},r.a.createElement("div",{className:"handle"},r.a.createElement(Je,{isMute:c})))),r.a.createElement(Hn,null,r.a.createElement(ce,{onKeywordsChange:P,keywords:l,onSubmit:T,options:C}),r.a.createElement(J,{options:C,onOptionsChange:function(e){return k((function(n){return Object(h.a)({},n,{},e)}))}})),r.a.createElement(I,{onGridReady:function(e){var n=e.api;return b(n)},onDialogOpen:function(e){return j({open:!0,content:r.a.createElement(Je,{media:e})})}}),r.a.createElement(pe,{dialog:O,onDialogClose:function(){return j(null)}},O&&O.content))},Kn=t(603),Qn=t(604);function Jn(){var e=Object(i.a)(["\n  cursor: pointer;\n"]);return Jn=function(){return e},e}var Xn=u.b.div(Jn()),$n=function(e){var n=e.data,t=e.onClick,a=e.api;return r.a.createElement(Xn,{onClick:function(){return t({username:n.username,api:a})}},"X")},Zn=function(e){return(0,e.getValue)()||"******"},et=function(e){var n=e.getValue;return x()(n()).format("MM/DD/YYYY HH:mm")},nt=function(e){var n=e.user;return n.ids.map((function(e){return n.map[e]}))},tt=function(e){return 0===e.user.ids.length},at=function(e){return e.user.pending},rt=t(340),ct=t.n(rt);function ot(){var e=Object(i.a)(["\n  background: ",";\n  color: ",";\n  min-width: 10rem !important;\n  font-size: 1.3rem;\n  font-weight: ",";\n  ",";\n  ","\n"]);return ot=function(){return e},e}var it,ut,lt,st=Object(u.b)(ct.a)(ot(),(function(e){return e.theme.palette.secondary.dark}),(function(e){var n=e.secondary,t=e.theme;return n?"#6b6b6b":t.palette.primary.text}),(function(e){return e.secondary?"normal":"bold"}),(function(e){return e.secondary&&"border: 1px solid #c4c4c4"}),(function(e){return e.fullWidth?"width: 100%;":null})),dt=t(345),mt=t(66),ft="email",pt=(it={},Object(v.a)(it,"firstName","First Name"),Object(v.a)(it,"lastName","Last Name"),Object(v.a)(it,ft,"Email"),Object(v.a)(it,"password","Password"),Object(v.a)(it,"retypePassword","Retype password"),it),bt=mt.object().shape((ut={},Object(v.a)(ut,"firstName",mt.string().max(35,"Too long")),Object(v.a)(ut,"lastName",mt.string().max(35,"Too long")),Object(v.a)(ut,ft,mt.string().email("Email not valid").max(35,"Too long").required("Required")),Object(v.a)(ut,"password",mt.string().min(4,"Too short").max(12,"Too long").required("Required")),Object(v.a)(ut,"retypePassword",mt.string().oneOf([mt.ref("password"),null],"Passwords do not math").required("Retype password")),ut)),ht=mt.object().shape((lt={},Object(v.a)(lt,ft,mt.string().email("Email not valid").max(35,"Too long").required("Required")),Object(v.a)(lt,"password",mt.string().min(4,"Too short").max(12,"Too long").required("Required")),lt));function vt(){var e=Object(i.a)(["\n  margin: auto;\n  padding: 1rem;\n  width: fit-content;\n  display: flex;\n  flex-direction: ",";\n"]);return vt=function(){return e},e}function Et(){var e=Object(i.a)(["\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 10;\n  display: flex;\n  position: absolute;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(0, 0, 0, 0.3);\n  \n"]);return Et=function(){return e},e}function gt(){var e=Object(i.a)(["\n  display: inline-block;\n  position: relative;\n"]);return gt=function(){return e},e}function yt(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: ",";\n  "," {\n    flex-direction: column;\n  }\n"]);return yt=function(){return e},e}function Ot(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: ",";\n  justify-content: space-between;\n"]);return Ot=function(){return e},e}var jt,wt=u.b.div(Ot(),(function(e){return e.direction||"row"})),St=u.b.div(yt(),(function(e){return"column"===e.direction?"row":"column"}),(function(e){return e.theme.breakpoints.down("md")})),Ct=u.b.div(gt()),kt=u.b.div(Et()),xt=u.b.form(vt(),(function(e){return e.flexDirection||"row"})),Rt=function(e){var n=e.successContent,t=e.onSecondaryButtonClick,c=e.secondaryButtonLabel,o=e.configuration,i=e.loading,u=e.submitLabel,l=(e.hidePreloader,e.onSubmit),s=Object(f.a)(e,["successContent","onSecondaryButtonClick","secondaryButtonLabel","configuration","loading","submitLabel","hidePreloader","onSubmit"]),d=o.title,m=o.initialValues,p=o.direction,b=o.groups,h=o.validationSchema,v=Object(a.useState)(!1),g=Object(E.a)(v,2),y=g[0],O=g[1],j=!!t&&"function"===typeof t,w=function(){O(!0)},S=function(e){O(!1)},C=function(){O(!1),j&&t()};return y?n||r.a.createElement("div",null,"Success"):r.a.createElement(dt.a,{initialValues:m,validationSchema:h,onSubmit:function(e){if(l)return l({values:e,onSuccess:w,onError:S})}},(function(e){var n=e.handleSubmit,t=e.handleChange,a=e.handleBlur,l=e.values,m=e.errors,h=e.touched;return r.a.createElement(Ct,null,i&&!o.hidePreloader&&r.a.createElement(r.a.Fragment,null,r.a.createElement(ke.a,{color:"secondary"}),r.a.createElement(kt,null)),r.a.createElement(xt,Object.assign({flexDirection:o.flexDirection,onSubmit:n},s),Boolean(d)&&r.a.createElement("div",null,r.a.createElement("h2",null,d)),r.a.createElement(St,{direction:p},b.map((function(e,n){e.title;var c=e.inputs;return r.a.createElement(wt,{key:n,direction:p},c.map((function(e){var n=e.name,o=e.component,u=e.required,s=e.options,d=e.label,p=e.hide,b=Object(f.a)(e,["name","component","required","options","label","hide"]),v=o;return d=function(e){var n=e.label,t=e.name,a=e.required?"":" (Optional)";return Boolean(n)?"".concat(n).concat(a):Boolean(t)?"".concat(t).concat(a):null}({label:pt[d],name:n,required:u}),!p&&r.a.createElement(v,Object.assign({key:n,id:n,name:n,value:l[n],error:h[n]&&Boolean(m[n]),helperText:h[n]?m[n]:null,onChange:t,onBlur:a,options:s,label:d,fullWidth:1===c.length,style:{margin:"0.5rem"},disabled:i},b))})))}))),r.a.createElement(wt,{style:{padding:"0.5rem"}},r.a.createElement(st,{type:"submit",disabled:i}," ",u||"Submit"),j&&r.a.createElement(st,{onClick:C,disabled:i},c||"Cancel"))))}))},Nt={initialValues:(jt={},Object(v.a)(jt,ft,""),Object(v.a)(jt,"firstName",""),Object(v.a)(jt,"lastName",""),Object(v.a)(jt,"password",""),Object(v.a)(jt,"retypePassword",""),jt),title:"Sign Up",hidePreloader:!1,flexDirection:"column",validationSchema:bt,sendForm:function(e){return new Promise((function(e){setTimeout((function(){e({error:!1})}),3e3)}))},groups:[{inputs:[{name:ft,component:$,type:"email",required:!0}]},{inputs:[{name:"firstName",component:$},{name:"lastName",component:$}]},{inputs:[{name:"password",component:$,required:!0,type:"password"}]},{inputs:[{name:"retypePassword",component:$,required:!0,type:"password"}]}]};function Tt(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return Tt=function(){return e},e}var Pt=u.b.div(Tt()),_t=function(e){var n=e.mode,t=e.onCancel,c=Object(p.h)(),o=Object(p.g)(),i=Object(F.b)(),u=Object(F.c)(sn),l=Object(F.c)(mn),s=Object(F.c)(at),d=l||s,m="onBehave"===n;m&&(Nt.title="User Creation"),Object(a.useEffect)((function(){u&&"/signup"===c.pathname&&o.push("/")}),[u,c.pathname,o]);return r.a.createElement(Pt,null,r.a.createElement(Rt,{configuration:Nt,loading:d,onSubmit:function(e){var n=e.values,a=(e.onSuccess,e.onError,n.email),r=n.password,c=n.retypePassword,o=n.firstName,u=n.lastName;i(m?function(e,n){return function(t){var a;return Ee.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t({type:gn}),r.prev=1,r.next=4,Ee.a.awrap(hn.create(e));case 4:a=r.sent,t({type:yn,payload:a.data}),t(Fe({message:"".concat(a.data.username," is created successfully")})),n&&n(),r.next=14;break;case 10:r.prev=10,r.t0=r.catch(1),t({type:On}),t(Fe(r.t0));case 14:case"end":return r.stop()}}),null,null,[[1,10]])}}({username:a,password:r,retypePassword:c,firstName:o,lastName:u},t):function(e,n,t,a,r){return function(c){var o;return Ee.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return c({type:Fn}),i.prev=1,i.next=4,Ee.a.awrap(Un.signUp(e,n,t,a,r));case 4:o=i.sent,c({type:Mn,payload:o.data}),i.next=12;break;case 8:i.prev=8,i.t0=i.catch(1),c({type:Bn}),c(Fe(i.t0));case 12:case"end":return i.stop()}}),null,null,[[1,8]])}}(a,r,c,o,u))},onSecondaryButtonClick:function(){t?t():o.push("/")}}))};function Ut(){var e=Object(i.a)(["\n  button {\n    margin-top: -5rem;\n    margin-right: 0.5rem;\n  }\n"]);return Ut=function(){return e},e}function Dt(){var e=Object(i.a)(["\n  width: 100%;\n  height: 75vh;\n  margin-top: 1rem;\n  .ag-cell-focus {\n    border: none !important;\n  }\n  .ag-icon {\n    color: "," !important;\n  }\n  .ag-theme-material {\n    color: "," !important;\n  }\n"]);return Dt=function(){return e},e}function Lt(){var e=Object(i.a)([""]);return Lt=function(){return e},e}var zt=u.b.div(Lt()),Ft=u.b.div(Dt(),(function(e){return e.theme.palette.secondary.main}),(function(e){return e.theme.palette.secondary.main})),Mt=u.b.div(Ut()),Bt=function(){var e=Object(a.useState)(null),n=Object(E.a)(e,2),t=n[0],c=n[1],o=Object(F.b)(),i=rn().width,u=Object(F.c)(nt),l=Object(a.useState)(!1),s=Object(E.a)(l,2),d=s[0],m=s[1],f=Object(F.c)(tt);Object(a.useEffect)((function(){f&&o(kn())}),[f,o]),Object(a.useEffect)((function(){return o(Fe({message:"Pressing delete will affect selected rows"})),function(){return o(Fe({message:"Don't forget to logout"}))}}),[o]),Object(a.useEffect)((function(){var e=function(e){var n,a=e.key;if(t&&"Delete"===a){var r=t.getSelectedRows();0===r.length?o(Fe({message:"Pressing delete will affect selected rows"})):o((n=r.map((function(e){return e.username})),function(e){var t;return Ee.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e({type:"DELETE_USERS_REQUEST"}),a.prev=1,a.next=4,Ee.a.awrap(hn.delete(n));case 4:t=a.sent,e({type:wn,payload:n}),e(Fe({message:"".concat(t.data.deletedCount," deleted users successfully")})),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(1),e({type:"FETCH_USERS_ERROR"}),e(Fe(a.t0));case 13:case"end":return a.stop()}}),null,null,[[1,9]])}))}};return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}}),[t,o]),Object(a.useEffect)((function(){t&&t.sizeColumnsToFit()}),[t,u]);var p=[{headerName:"#",width:45,checkboxSelection:!0,editable:!1,sortable:!1,filter:!1,pinned:!0},{headerName:"Id",field:"_id",hide:!0,sortable:!1,editable:!1},{headerName:"Username",field:"username",editable:!1},{headerName:"First Name",field:"firstName"},{headerName:"Last Name",field:"lastName"},{headerName:"Password",field:"password",cellRenderer:"PasswordCellFormatter"},{headerName:"Last Login",field:"lastLogin",editable:!1,cellRenderer:"DateCellFormatter"},{headerName:"",cellRenderer:"DeleteCellRenderer",cellRendererParams:{onClick:function(e){var n=e.username;o(Fe({message:r.a.createElement("div",null,"Delete ".concat(n,"? "),r.a.createElement(Z.a,{color:"secondary",onClick:function(){o(function(e){return function(n){return Ee.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"DELETE_ONE_USER_REQUEST"}),t.prev=1,t.next=4,Ee.a.awrap(hn.deleteOne(e));case 4:n({type:jn,payload:e}),n(Fe({message:"".concat(e," is deleted successfully")})),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),n({type:"DELETE_ONE_USER_ERROR"}),n(Fe(t.t0));case 12:case"end":return t.stop()}}),null,null,[[1,8]])}}(n))}},"yes"))}))}},width:80}],b=function(){m(!1)};return Object(a.useEffect)((function(){t&&t.sizeColumnsToFit()}),[i,t]),r.a.createElement(zt,null,r.a.createElement(Mt,null,r.a.createElement(an,{to:"/listing",icon:r.a.createElement(Kn.a,null)}),r.a.createElement(an,{style:{marginLeft:"10px"},icon:r.a.createElement(Qn.a,null),onClick:function(){m(!0)}})),r.a.createElement(Ft,{className:"ag-theme-material"},r.a.createElement(g.AgGridReact,{onGridReady:function(e){var n=e.api;n.sizeColumnsToFit(),c(n)},suppressRowClickSelection:!0,animateRows:!0,rowData:u,rowSelection:"multiple",columnDefs:p,defaultColDef:{resizable:!0,sortable:!0,filter:!0,editable:!0},frameworkComponents:{DeleteCellRenderer:$n,PasswordCellFormatter:Zn,DateCellFormatter:et},modules:y.a,onCellEditingStopped:function(e){var n,t,a=e.column,r=e.data;o((n=r.username,t=Object(v.a)({},a.colId,r[a.colId]),function(e){var a;return Ee.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e({type:"UPDATE_USER_REQUEST"}),r.prev=1,r.next=4,Ee.a.awrap(hn.update(n,t));case 4:a=r.sent,e({type:En,payload:a.data}),e(Fe({message:"".concat(n," is updated successfully")})),r.next=13;break;case 9:r.prev=9,r.t0=r.catch(1),e({type:"UPDATE_USER_ERROR"}),e(Fe(r.t0));case 13:case"end":return r.stop()}}),null,null,[[1,9]])}))}})),r.a.createElement(pe,{open:d,onDialogClose:b},r.a.createElement(_t,{mode:"onBehave",onCancel:b})))},At=function(){return r.a.createElement("div",null,"404")};function qt(){return(qt=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function It(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var Gt=r.a.createElement("path",{d:"M 9 3 L 9 14.625 C 9 14.625 6.16425 12.71875 5.65625 12.71875 C 4.34625 12.71875 4 14.09375 4 14.09375 L 9.03125 20.71875 C 9.63625 21.51675 10.59375 22 11.59375 22 L 16 22 C 18.209 22 20 20.209 20 18 L 20 5 L 18 5 L 18 12 C 18 13.105 17.105 14 16 14 C 15.399 14 14.867 13.7325 14.5 13.3125 C 14.133 13.7325 13.601 14 13 14 C 11.895 14 11 13.105 11 12 L 11 3 L 9 3 z M 12 8 L 12 12 C 12 12.552 12.448 13 13 13 C 13.552 13 14 12.552 14 12 L 14 8 L 12 8 z M 15 8 L 15 12 C 15 12.552 15.448 13 16 13 C 16.552 13 17 12.552 17 12 L 17 8 L 15 8 z"}),Ht=function(e){var n=e.svgRef,t=e.title,a=It(e,["svgRef","title"]);return r.a.createElement("svg",qt({viewBox:"0 0 24 24",ref:n},a),t?r.a.createElement("title",null,t):null,Gt)},Yt=r.a.forwardRef((function(e,n){return r.a.createElement(Ht,qt({svgRef:n},e))}));t.p;function Vt(){var e=Object(i.a)(["\n  .box {\n    align-self: flex-end;\n    animation-duration: 2s;\n    animation-iteration-count: infinite;\n    height: ","rem;\n    margin: 0 auto 0 auto;\n    transform-origin: bottom;\n    fill: ",";\n  }\n  .bounce-7 {\n    animation-name: bounce-7;\n    animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);\n  }\n  @keyframes bounce-7 {\n    0% {\n      transform: scale(1, 1) translateY(0);\n    }\n    10% {\n      transform: scale(1.1, 0.9) translateY(0);\n    }\n    30% {\n      transform: scale(0.9, 1.1) translateY(-100px);\n    }\n    50% {\n      transform: scale(1.05, 0.95) translateY(0);\n    }\n    57% {\n      transform: scale(1, 1) translateY(-7px);\n    }\n    64% {\n      transform: scale(1, 1) translateY(0);\n    }\n    100% {\n      transform: scale(1, 1) translateY(0);\n    }\n  }\n"]);return Vt=function(){return e},e}var Wt,Kt=u.b.div(Vt(),(function(e){return e.size||10}),(function(e){return e.theme.palette.secondary.main})),Qt=function(e){var n=e.size;return r.a.createElement(tn.a,{handle:".handle",defaultPosition:{x:0,y:0},scale:4},r.a.createElement(Kt,{className:"handle",size:n},r.a.createElement(Yt,{className:"box bounce-7"})))},Jt={initialValues:(Wt={},Object(v.a)(Wt,ft,""),Object(v.a)(Wt,"password",""),Wt),flexDirection:"column",hidePreloader:!1,validationSchema:ht,sendForm:function(e){var n=e.email,t=e.password;return Un.login({username:n,password:t})},groups:[{title:"",inputs:[{name:ft,component:$,type:"email",required:!0},{name:"password",component:$,required:!0,type:"password"}]}]};function Xt(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return Xt=function(){return e},e}var $t=u.b.div(Xt()),Zt=function(){var e=Object(p.h)(),n=Object(p.g)(),t=Object(F.b)(),c=Object(F.c)(sn),o=Object(F.c)(mn);Object(a.useEffect)((function(){c&&"/login"===e.pathname&&n.push("/")}),[c,e.pathname,n]);return r.a.createElement($t,null,r.a.createElement($t,null,r.a.createElement(Qt,{size:15}),r.a.createElement(Rt,{onSubmit:function(e){var n=e.values,a=(e.onSuccess,e.onError,n.email),r=n.password;t(function(e,n){return function(t){var a;return Ee.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t({type:Dn}),r.prev=1,r.next=4,Ee.a.awrap(Un.login(e,n));case 4:a=r.sent,t({type:Ln,payload:a.data}),r.next=12;break;case 8:r.prev=8,r.t0=r.catch(1),t({type:zn}),t(Fe(r.t0));case 12:case"end":return r.stop()}}),null,null,[[1,8]])}}(a,r))},secondaryButtonLabel:"Sign Up",configuration:Jt,submitLabel:"Login",loading:o,onSecondaryButtonClick:function(){n.push("/signup")}})))},ea=function(e){return"signup"===e.mode?r.a.createElement(_t,null):r.a.createElement(Zt,null)},na=function(e){var n=e.isAuthenticated,t=(e.children,Object(f.a)(e,["isAuthenticated","children"]));return n?r.a.createElement(p.b,t):r.a.createElement(p.a,{to:"/login"})},ta=function(){var e=Object(F.c)(sn),n=[{url:"/users",component:Bt,isPrivate:!0},{url:"/login",component:function(){return r.a.createElement(ea,{mode:"login"})},isPrivate:!1},{url:"/signup",component:function(){return r.a.createElement(ea,{mode:"signup"})},isPrivate:!1},{url:"/",component:Wn,isPrivate:!0},{url:"*",components:At,isPrivate:!1}];return r.a.createElement(b.a,null,r.a.createElement(p.d,null,n.map((function(n){var t=n.url,a=n.component;return n.isPrivate?r.a.createElement(na,{key:t,isAuthenticated:e,path:t,component:a}):r.a.createElement(p.b,{key:t,path:t,component:a})}))))},aa=t(607),ra=function(e){return e.ui.snackbar};function ca(){var e=Object(i.a)(["\n  width: 80vw;\n"]);return ca=function(){return e},e}function oa(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: auto;\n  min-height: 100vh;\n  ",";\n  color: ",";\n"]);return oa=function(){return e},e}var ia=u.b.div(oa(),(function(e){return"dark"===e.theme.palette.type?"\n      background-color: #2d3436;\n      background-image: linear-gradient(315deg, #2d3436 25%, #000000 100%);\n  ":null}),(function(e){return e.theme.palette.primary.text})),ua=u.b.div(ca()),la=function(){var e=Object(F.b)(),n=Object(F.c)(ra);return r.a.createElement(m.b,{injectFirst:!0},r.a.createElement(d.a,{theme:s},r.a.createElement(u.a,{theme:s},r.a.createElement(ia,null,r.a.createElement(ua,null,r.a.createElement(ta,null)),r.a.createElement(aa.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:!!n.open,autoHideDuration:n.duration,onClose:function(){return e({type:ze})},ContentProps:{"aria-describedby":"message-id"},message:n.message})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var sa=t(81),da={snackbar:{open:!1,message:"",duration:2e3}};var ma=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:da,n=arguments.length>1?arguments[1]:void 0,t=n.type,a=Object(f.a)(n,["type"]);switch(t){case Le:return Object(h.a)({},e,{snackbar:Object(h.a)({},e.snackbar,{},a,{open:!0})});case ze:return Object(h.a)({},e,{snackbar:Object(h.a)({},e.snackbar,{open:!1})});default:return e}},fa={token:null,pending:!1,profile:null};var pa=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fa,n=arguments.length>1?arguments[1]:void 0,t=n.type,a=n.payload;switch(t){case Dn:case Fn:return Object(h.a)({},e,{pending:!0});case zn:case Ln:case Mn:case Bn:return Object(h.a)({},e,{},a,{pending:!1});case An:return Object(h.a)({},fa);default:return e}},ba=t(70),ha={ids:[],map:{},pending:!1};var va=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ha,n=arguments.length>1?arguments[1]:void 0,t=n.type,a=n.payload,r=Object(ba.a)(e.ids),c=Object(h.a)({},e.map);switch(t){case Cn:return c[a.username].topSearches=a.topSearches,Object(h.a)({},e,{map:c,ids:r});case Sn:return-1===r.indexOf((function(e){return e===a.username}))&&r.push(a.username),c[a.username]=a,Object(h.a)({},e,{ids:r,map:c});case En:return-1===r.indexOf((function(e){return e.username===a.username}))&&r.push(a.username),c[a.username]=a,{ids:r,map:c};case yn:return r.push(a.username),c[a.username]=a,Object(h.a)({},e,{ids:r,map:c,pending:!1});case gn:return Object(h.a)({},e,{ids:r,map:c,pending:!0});case On:return Object(h.a)({},e,{pending:!1});case wn:return r=r.filter((function(e){return-1===a.findIndex((function(n){return e===n}))})),c=r.reduce((function(e,n){return e[n]=c[n],e}),{}),Object(h.a)({},e,{ids:r,map:c});case jn:return delete c[a],r=r.filter((function(e){return e!==a})),Object(h.a)({},e,{ids:r,map:c});case vn:return Object(h.a)({},e,{ids:a.rows.map((function(e){return e.username})),map:a.rows.reduce((function(e,n){return e[n.username]=n,e}),{})});default:return e}},Ea={selectedMedia:{previewUrl:"http://www.anyvision.co/admin/wp-content/uploads/2018/02/4.mp4",kind:"feature-movie",trackName:"AnyVision"}};var ga=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ea,n=arguments.length>1?arguments[1]:void 0,t=n.type,a=n.payload;switch(t){case M:return Object(h.a)({},e,{selectedMedia:a});default:return e}},ya=Object(sa.combineReducers)({ui:ma,auth:pa,user:va,player:ga}),Oa=t(343),ja=t(344),wa=Object(sa.createStore)(ya,Object(ja.composeWithDevTools)(Object(sa.applyMiddleware)(Oa.a)));t(541),t(542);o.a.render(r.a.createElement(F.a,{store:wa},r.a.createElement(la,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[360,1,2]]]);
//# sourceMappingURL=main.33947273.chunk.js.map