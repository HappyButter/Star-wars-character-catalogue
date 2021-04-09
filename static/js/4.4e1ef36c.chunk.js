(this["webpackJsonpsw-characters-catalogue"]=this["webpackJsonpsw-characters-catalogue"]||[]).push([[4],{73:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return q}));var r,a,c,i,o,s,b,l,d,u,p=n(38),j=n.n(p),h=n(39),x=n(37),O=n(0),g=n(42),f=n.n(g),m=n(16),v=n(72),k=n(2),w=n(69),y=n(4),C=n(5),S=n(10),L=C.b.div(r||(r=Object(y.a)(["\n  color: rgb(170, 170, 170);\n  height: 200px;\n  /* max-width: 400px; */\n  min-width: 250px;\n  width:auto;\n  padding: 10px;\n  margin-bottom: 10px;\n  justify-content: center;\n  display: flex;\n  list-style-type: none;\n  flex-direction: column;\n  gap: 10px;\n\n  background: rgba(255, 255, 255, 0.2);\n  box-shadow: 0 8px 32px 0 rgba(100, 100, 100, 0.1);\n  backdrop-filter: blur(14px);\n  -webkit-backdrop-filter: blur(14px);\n  border-radius: 0.4em;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n"]))),N=Object(C.b)(S.b)(a||(a=Object(y.a)(["\n  text-decoration: none;\n  color: #ffc500;\n  padding: 30px 50px 0 50px;\n"]))),P=n(1),F=function(e){var t=e.characterData;return Object(P.jsxs)(L,{children:[Object(P.jsx)("h1",{style:{color:"white"},children:t.name}),Object(P.jsxs)("p",{children:["Gender: ",t.gender]}),Object(P.jsxs)("p",{children:["Birth Year: ",t.birthYear]}),Object(P.jsx)(N,{to:"/characters/".concat(t.index),children:"Read more"})]})},_=C.b.div(c||(c=Object(y.a)(["\n    justify-content: center;\n    /* display: flex;   */\n"]))),Y=n(20),B=C.b.div(i||(i=Object(y.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  background-color: rgba(0, 0, 0, 0.2);\n  z-index: 101;\n"]))),E=C.b.div(o||(o=Object(y.a)(["\n  position: relative;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 101;\n  width: calc(100vw - 5em);\n  height: calc(100vh - 5em);\n  max-width: 1000px;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  gap: 10px;\n  font-size: 1.1em;\n\n  background-color: rgba(100, 100, 100, 0.7);\n  box-shadow: 0 8px 32px 0 rgba(100, 100, 100, 0.1);\n  backdrop-filter: blur(14px);\n  -webkit-backdrop-filter: blur(14px);\n  border-radius: 0.4em;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n"]))),Q=C.b.header(s||(s=Object(y.a)(["\n  text-align: right;\n  padding: 10px;\n  color: #aaa;\n"]))),z=C.b.div(b||(b=Object(y.a)(["\n  width: 25px;\n  height: 3px;\n  background-color: white;\n  margin: 5px;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n"]))),D=C.b.div(l||(l=Object(y.a)(["\n  cursor: pointer;\n  display: block;\n  margin-left: auto;\n  padding: 10px;\n  ",":nth-child(1) {\n    transform: rotate(-45deg) translate(-5px, 6px);\n  }\n\n  ",":nth-child(2) {\n    opacity: 0;\n    transform: translateX(20px);\n  }\n  ",":nth-child(3) {\n    transform: rotate(45deg) translate(-5px, -6px);\n  }\n"])),z,z,z),M=function(e){var t=e.children,n=Object(k.f)(),r=function(e){e.stopPropagation(),n.goBack()};return Object(Y.createPortal)(Object(P.jsx)(B,{onClick:r,children:Object(P.jsxs)(E,{onClick:function(e){return e.stopPropagation()},children:[Object(P.jsx)(Q,{children:Object(P.jsx)("button",{onClick:r,style:{backgroundColor:"transparent",padding:0,border:"none",background:"none"},children:Object(P.jsxs)(D,{children:[Object(P.jsx)(z,{}),Object(P.jsx)(z,{}),Object(P.jsx)(z,{})]})})}),t]})}),document.getElementById("modal"))},G=C.b.div(d||(d=Object(y.a)(["\n  color: rgb(170, 170, 170);\n\n  & > hr {\n    color: rgb(170, 170, 170);\n  }\n"]))),H=function(e){var t=e.characters,n=e.allFilmList,r=Object(k.g)().index,a=Object(O.useMemo)((function(){return t.find((function(e){return e.index===Number(r)}))}),[t,r]),c=Object(O.useMemo)((function(){return n&&a?a.filmList.map((function(e){return n.find((function(t){return t.url===e}))})):[]}),[n,a]);return Object(P.jsxs)(G,{children:[Object(P.jsx)("h1",{style:{color:"white"},children:a.name}),Object(P.jsx)("hr",{}),Object(P.jsx)("br",{}),Object(P.jsxs)("p",{children:["Gender: ",a.gender]}),Object(P.jsxs)("p",{children:["Birth Year: ",a.birthYear]}),Object(P.jsxs)("p",{children:["Height: ",a.height]}),Object(P.jsxs)("p",{children:["Eye Color: ",a.eyeColor]}),Object(P.jsxs)("p",{children:["Hair Color: ",a.hairColor]}),Object(P.jsxs)("p",{children:["Skin Color: ",a.skinColor]}),Object(P.jsx)("br",{}),Object(P.jsx)("hr",{}),Object(P.jsx)("br",{}),Object(P.jsx)("h3",{style:{color:"white"},children:"Film lsit:"}),Object(P.jsx)("br",{}),c.map((function(e,t){return Object(P.jsx)("p",{children:e?e.title:""},t)}))]})},I=function(e){var t=e.searchQuery,n=e.pageNumber,r=e.setPageNumber,a=e.allFilmList,c=Object(O.useState)([]),i=Object(x.a)(c,2),o=i[0],s=i[1],b=Object(O.useState)(!1),l=Object(x.a)(b,2),d=l[0],u=l[1],p=function(e,t){return{name:e.name,gender:e.gender,birthYear:e.birth_year,eyeColor:e.eye_color,hairColor:e.hair_color,skinColor:e.skin_color,height:e.height,filmList:e.films,index:o.length+t}},g=function(){var e=Object(h.a)(j.a.mark((function e(t,n){var a,c,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("https://swapi.dev/api/people/",{params:{search:n,page:t}});case 3:a=e.sent,c=a.data,i=c.results.map(p),s((function(e){return[].concat(Object(v.a)(e),Object(v.a)(i))})),null!==c.next?(u(!0),r((function(e){return e+1}))):u(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(O.useEffect)((function(){s([]),g(n,t)}),[t]),Object(P.jsxs)(_,{children:[Object(P.jsx)(w.a,{dataLength:o.length,next:function(){return g(n,t)},hasMore:d,loader:Object(P.jsx)(m.b,{}),children:o.map((function(e){return Object(P.jsx)(F,{characterData:e},e.index)}))}),Object(P.jsx)(k.c,{children:Object(P.jsx)(k.a,{path:"/characters/:index",children:Object(P.jsx)(M,{children:Object(P.jsx)(H,{characters:o,allFilmList:a})})})})]})},J=n(70),R=C.b.input(u||(u=Object(y.a)(["\n  color: rgb(170, 170, 170);\n  min-width: 250px;\n  padding: 10px;\n  margin-bottom: 10px;\n  gap: 10px;\n\n  background: rgba(255, 255, 255, 0.2);\n  box-shadow: 0 8px 32px 0 rgba(100, 100, 100, 0.1);\n  backdrop-filter: blur(14px);\n  -webkit-backdrop-filter: blur(14px);\n  border-radius: 1.4em;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n\n  &:focus {\n    outline: none;\n  }\n"]))),X=function(e){var t=e.setSearchQuery,n=e.setPageNumber,r=Object(O.useState)(""),a=Object(x.a)(r,2),c=a[0],i=a[1],o=Object(O.useCallback)(Object(J.debounce)((function(e){n(1),t(e)}),1e3),[]);return Object(P.jsx)("div",{children:Object(P.jsx)(R,{type:"text",onChange:function(e){i(e.target.value),o(e.target.value)},value:c,placeholder:"Search..."})})},q=function(){var e=Object(O.useState)(""),t=Object(x.a)(e,2),n=t[0],r=t[1],a=Object(O.useState)(1),c=Object(x.a)(a,2),i=c[0],o=c[1],s=Object(O.useState)([]),b=Object(x.a)(s,2),l=b[0],d=b[1],u=Object(O.useState)(!0),p=Object(x.a)(u,2),g=p[0],v=p[1],k=function(e){var t=e.characters.map((function(e){return e.match(/\d+/g).map(Number)}));return{title:e.title,id:e.episode_id,director:e.director,producer:e.producer,releaseDate:e.release_date,url:e.url,characterIdList:t}},w=function(){var e=Object(h.a)(j.a.mark((function e(){var t,n,r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v(!0),e.next=4,f.a.get("https://swapi.dev/api/films/");case 4:t=e.sent,n=t.data,r=(n=void 0===n?[]:n).results,a=r.map(k),d(a),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0.message);case 15:return e.prev=15,v(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,12,15,18]])})));return function(){return e.apply(this,arguments)}}();return Object(O.useEffect)((function(){w()}),[]),g?Object(P.jsx)(m.b,{}):Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(X,{setSearchQuery:r,setPageNumber:o}),Object(P.jsx)(I,{searchQuery:n,pageNumber:i,setPageNumber:o,allFilmList:l})]})}}}]);
//# sourceMappingURL=4.4e1ef36c.chunk.js.map