(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{339:function(t,e,r){"use strict";r.r(e);var n=r(49);r(105),r(9);var o={props:["id"],data:function(){return{stats:[],user:{},error:""}},methods:{fetchProfile:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.github.com/users/".concat(t.id)).then((function(data){return data.json()}));case 3:t.user=e.sent,t.stats=(r=t.user,n=void 0,n=[],r.company&&n.push({icon:"building",title:r.company}),r.location&&n.push({icon:"cursor",title:r.location}),r.email&&n.push({icon:"mailbox",title:r.email}),r.blog&&n.push({icon:"mailbox",title:r.blog}),n.push({icon:"person-lines-fill",title:"Followers",badge:r.followers},{icon:"person",title:"Following",badge:r.following},{icon:"star",title:"Public Repos",badge:r.public_repos}),n),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),t.error=e.t0.message||"Something went wrong.",alert(e.t0.message);case 11:case"end":return e.stop()}var r,n}),e,null,[[0,7]])})))()}},mounted:function(){this.fetchProfile()}},l=r(64),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[this.error?r("div",[t._v(t._s(this.error))]):this.user.id?r("div",[r("b-img",{staticClass:"mx-auto",staticStyle:{height:"20rem",width:"20rem"},attrs:{src:this.user.avatar_url,rounded:"circle",alt:"Circle image"}}),t._v(" "),r("b-card",{staticClass:"mx-auto mt-2",staticStyle:{"max-width":"20rem"},attrs:{"no-body":""}},[r("b-card-text",[r("div",{staticClass:"p-3"},[r("h2",{staticClass:"text-2xl leading-7 font-semibold"},[t._v(t._s(this.user.name))]),t._v(" "),r("h3",{staticClass:"text-xl leading-7 font-light"},[t._v(t._s(this.user.login))])])]),t._v(" "),r("b-list-group",{attrs:{flush:""}},t._l(t.stats,(function(e){return r("b-list-group-item",{key:e.title,staticClass:"d-flex justify-content-between align-items-center py-2"},[r("span",[r("b-icon",{staticClass:"mr-2",attrs:{icon:e.icon,scale:"1",variant:"secondary"}}),t._v("\n          "+t._s(e.title)+"\n        ")],1),t._v(" "),e.badge?r("b-badge",{attrs:{variant:"primary",pill:""}},[t._v(t._s(e.badge))]):t._e()],1)})),1)],1)],1):r("div",[t._v("Loading...")])])}),[],!1,null,null,null);e.default=component.exports}}]);