(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(69)},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(16),s=a.n(c),o=a(71),l=a(27),u=a(28),i=a(25),d=a(17),m=a(18),p=a(26),h=a(19),b=a(29),g=a(72);var v=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-danger"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"Melody"),r.a.createElement(g.a,{to:"/signup",activeClassName:"active"},"Signup"))},f=a(6),E=a(21),y=a(5),O=a.n(y),S=a(24),j=a.n(S),w=function(e){return O.a.get("/user/".concat(e))},k=function(e){return O.a.post("/user",{name:e})},C=function(e,t,a){return O.a.put("/user/addSearch",{userId:e,artist:t,song:a})},I=(a(68),function(e){var t=e.user,a=e.updateSearches,c=Object(n.useState)(""),s=Object(f.a)(c,2),o=s[0],l=s[1],u=Object(n.useState)(""),i=Object(f.a)(u,2),d=i[0],m=i[1],p=Object(n.useState)(null),h=Object(f.a)(p,2),b=h[0],g=h[1],v=Object(n.useState)(""),y=Object(f.a)(v,2),S=y[0],w=y[1];return r.a.createElement("div",null,r.a.createElement("div",{className:"container text-center pt-5"},r.a.createElement("i",{className:"fas fa-angle-double-down fa-3x animated swing delay-1s"})),r.a.createElement("section",{style:{background:"#EBF8FD",minHeight:"500px"}},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"exampleClass col-12 text-center pt-3"},r.a.createElement("h3",{id:"1"},"MELODY Music App"),r.a.createElement("input",{onChange:function(e){return l(e.target.value)},placeholder:"artist"}),r.a.createElement("input",{onChange:function(e){return m(e.target.value)},placeholder:"song"}),r.a.createElement("button",{onClick:function(){var e=O.a.get("https://www.googleapis.com/youtube/v3/search?key=AIzaSyCOrYDn-Rpq-DIqgvv5naHsrsCfjPcqby4&q=".concat(encodeURIComponent(d+" - "+o),"&part=id")),n=O.a.get("https://api.musixmatch.com/ws/1.1/matcher.lyrics.get",{params:{format:"jsonp",callback:"jsonp_callback",apikey:"4841837f851469f3b5b537d381f89006",q_artist:o,q_track:d},headers:{"content-type":"application/javascript"},adapter:j.a});return Promise.all([e,n]).then(function(e){console.log("GOT SOME DATA FROM YOUTUBE",e[0]);var n=e[0].data.items.find(function(e){return"youtube#video"===e.id.kind});g(n.id.videoId),console.log("GOT MUSIXMATCH DATA",e[1].data.message.body.lyrics.lyrics_body),w(e[1].data.message.body.lyrics.lyrics_body),console.log(o),a(o),t&&C(t._id,o,d)})}},r.a.createElement("strong",null,"SEARCH")),r.a.createElement("div",{className:"resultSection"},r.a.createElement("span",{className:"videoSection"},b&&r.a.createElement(E.a,{videoId:b,opts:{height:"390",width:"640",playerVars:{autoplay:1}},onReady:function(){return null}})),r.a.createElement("span",{className:"lyricsSection"},S&&r.a.createElement("p",null,S))))))))}),N=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={loaded:!1,user:null},a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("userId");t?w(t).then(function(t){console.log("Got existing user in component",t),e.setState({loaded:!0,user:t.data})}):window.location="/signup"}},{key:"updateSearches",value:function(e){var t=Object(i.a)(this.state.user.searches);t.push(e);var a=Object(u.a)({},this.state.user);a.searches=t,this.setState({user:a}),console.log(this.state.user.searches)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,console.log("this.state.user.searches",this.state.user&&this.state.user.searches),r.a.createElement(v,null),r.a.createElement(I,{user:this.state.user,updateSearches:function(){return e.updateSearches.bind(e)}}))}}]),t}(r.a.Component),x=function(){var e=Object(n.useState)(""),t=Object(f.a)(e,2),a=t[0],c=t[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log("here"),k(a).then(function(e){console.log("Got newly created user in component",e),localStorage.setItem("userId",e.data._id),window.location="/"})}},r.a.createElement("input",{onChange:function(e){return c(e.target.value)},placeholder:"Name"}),r.a.createElement("button",{type:"submit"}," Submit "))},A=function(){return r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement(l.a,{exact:!0,path:"/",component:N}),r.a.createElement(l.a,{exact:!0,path:"/signup",component:x})))};s.a.render(r.a.createElement(A,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.22bef3a1.chunk.js.map