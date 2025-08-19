import{r as l}from"./index.RH_Wq4ov.js";var c={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p;function R(){if(p)return s;p=1;var i=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function t(a,r,e){var o=null;if(e!==void 0&&(o=""+e),r.key!==void 0&&(o=""+r.key),"key"in r){e={};for(var x in r)x!=="key"&&(e[x]=r[x])}else e=r;return r=e.ref,{$$typeof:i,type:a,key:o,ref:r!==void 0?r:null,props:e}}return s.Fragment=u,s.jsx=t,s.jsxs=t,s}var d;function f(){return d||(d=1,c.exports=R()),c.exports}var n=f();function v(){const[i,u]=l.useState([]);return l.useEffect(()=>{fetch("/api/spotify").then(t=>t.json()).then(t=>u(t.items||[]))},[]),n.jsxs("div",{children:[n.jsx("h2",{children:"Mis últimas canciones"}),n.jsx("ul",{children:i.map((t,a)=>n.jsxs("li",{children:[t.track.name," -"," ",t.track.artists.map(r=>r.name).join(", ")]},a))})]})}export{v as default};
