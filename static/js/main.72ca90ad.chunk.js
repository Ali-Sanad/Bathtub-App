(this["webpackJsonpbathtub-app"]=this["webpackJsonpbathtub-app"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(5),s=n.n(c),u=n(4),i="increaseWaterLevel",o="decreaseWaterLevel",l=function(){var e=Object(a.useState)(0),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(),s=Object(u.a)(c,2),l=s[0],b=s[1];return Object(a.useEffect)((function(){var e=setInterval((function(){l===i&&n<5&&r((function(e){return e+1})),l===o&&n>0&&r((function(e){return e-1}))}),2e3);return function(){return clearInterval(e)}}),[n,l]),{level:n,setActionType:b}},b=n(2),j=n.n(b),h=n(0),d=function(){var e=l(),t=e.level,n=e.setActionType;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:j.a.container,children:[Object(h.jsx)("button",{className:j.a.increase,onClick:function(){return n(i)},children:"Increase"}),Object(h.jsx)("button",{className:j.a.decrease,onClick:function(){return n(o)},children:"Decrease"}),Object(h.jsxs)("span",{className:j.a.counter,children:["Counter: ",t]})]}),Object(h.jsx)("div",{className:j.a.BathContainer,children:t?Array(t).fill("").map((function(e,t){return Object(h.jsx)("div",{className:j.a.waterLevel},t)})):null})]})},_=function(){return Object(h.jsx)(d,{})},f=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(_,{})})};s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root"))},2:function(e,t,n){e.exports={BathContainer:"Bathtub_BathContainer__3-YJl",waterLevel:"Bathtub_waterLevel__2WbZ8",container:"Bathtub_container__3QjkJ",increase:"Bathtub_increase__36isU",decrease:"Bathtub_decrease__DGsaz",counter:"Bathtub_counter__16Y51"}}},[[11,1,2]]]);