(this.webpackJsonppersonalweb=this.webpackJsonppersonalweb||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},107:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),o=a.n(l),c=(a(75),a(37)),i=a(57),s=a(11),u=a(25),m=a(49),p=a(110),h=a(111),d=a(112),f=a(118);a(76);var E=function(){return r.a.createElement(p.a,{className:"about-container"},r.a.createElement(h.a,null,r.a.createElement("h2",null,"About")),r.a.createElement(h.a,null,r.a.createElement(d.a,{xs:10,sm:10,md:6},r.a.createElement(f.a,null,r.a.createElement(f.a.Image,{src:"Asset/IMG_4969.jpg",thumbnail:!0}),r.a.createElement(f.a.Caption,null,"Stand tall over challenges.")))),r.a.createElement(h.a,null,r.a.createElement(d.a,{md:10},r.a.createElement("p",null,"Hi, thanks for dropping by! "),r.a.createElement("p",null,"My name is Chinh Le. I'm a freshman at The University of Texas at Dallas, major in Computer Science. My interest includes app and game develepment, virtual reality technology, and photography."),r.a.createElement("p",null,"Check out my projects at ",r.a.createElement(s.b,{to:"/proj"},"Projects"),". Check out my photos at ",r.a.createElement(s.b,{to:"/gallery"},"Gallery"),"."),r.a.createElement("p",null,"Currently exploring ReactNative."),r.a.createElement("br",null),r.a.createElement("span",{className:"contact"},"Contact:",r.a.createElement("a",{href:"https://www.linkedin.com/in/chinh-le-a20113192/",target:"_blank"},"  Linkedin"),r.a.createElement("a",{href:"https://github.com/dangchinh25",target:"_blank"}," Github"),r.a.createElement("a",{href:"https://drive.google.com/file/d/1wXE1lHl5wCA8TGF_r8v8gNOTmT9f20X_/view?usp=sharing",target:"_blank"}," Resume")))))},b=a(117),v=a(116),g=a(61);a(81);var y=function(e){return r.a.createElement("div",{className:"header"},r.a.createElement(b.a,{bg:"light"},r.a.createElement(p.a,null,r.a.createElement(b.a.Brand,null,r.a.createElement(s.b,{to:"/"},"DangChinh")),r.a.createElement("div",{className:"nav-item"},r.a.createElement(v.a.Link,null,r.a.createElement(s.b,{to:"/about"},"About")),r.a.createElement(v.a.Link,null,r.a.createElement(s.b,{to:"/gallery"},"Gallery")),r.a.createElement(v.a.Link,null,r.a.createElement(s.b,{to:"/proj"},"Projects")),r.a.createElement(g.a,{variant:"light",onClick:e.changeTheme},r.a.createElement("i",{className:"fa fa-adjust"}))))))};var j=a(47),k=a.n(j),w=a(62);a(90);var O=function(){var e=Object(n.useState)({gallery:[]}),t=Object(c.a)(e,2),a=t[0],l=t[1],o="https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=f475fca09b09eab4f43334a38aa05a35&user_id=185265760@N03&format=json&nojsoncallback=1";function i(){return(i=Object(w.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(o).then((function(e){return e.json()})).then((function(e){console.log(e),l({gallery:e.photos.photo})}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){i.apply(this,arguments)}()}),[]),r.a.createElement(p.a,null,r.a.createElement("h3",null,"Gallery"),a.gallery.map((function(e){return r.a.createElement(f.a,null,r.a.createElement(f.a.Image,{src:"https://farm66.staticflickr.com/1/".concat(e.id,"_").concat(e.secret,"_q.jpg"),thumbnail:!0}))})),r.a.createElement(h.a,null,r.a.createElement(d.a,{md:4})))},C=a(20),x=a(21),B=a(23),S=a(22),N=a(32),I=a(24),F=function(e){function t(){var e,a;Object(C.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(B.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(r)))).selectBox=function(){a.props.selectBox(a.props.row,a.props.col)},a}return Object(I.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:this.props.boxClass,id:this.props.id,onClick:this.selectBox})}}]),t}(r.a.Component),A=function(e){function t(){return Object(C.a)(this,t),Object(B.a)(this,Object(S.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){for(var e=14*this.props.cols,t=[],a="",n=0;n<this.props.rows;n++)for(var l=0;l<this.props.cols;l++){var o=n+"_"+l;a=this.props.gridFull[n][l]?"box on":"box off",t.push(r.a.createElement(F,{boxClass:a,key:o,boxId:o,row:n,col:l,selectBox:this.props.selectBox}))}return r.a.createElement("div",{className:"grid",style:{width:e}},t)}}]),t}(r.a.Component),_=a(113),G=a(114),L=a(38),T=function(e){function t(){var e,a;Object(C.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(B.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(r)))).handleSelect=function(e){a.props.gridSize(e)},a}return Object(I.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"center"},r.a.createElement(_.a,null,r.a.createElement(g.a,{variant:"outline-secondary",onClick:this.props.playButton},"Play"),r.a.createElement(g.a,{variant:"outline-secondary",onClick:this.props.pauseButton},"Pause"),r.a.createElement(g.a,{variant:"outline-secondary",onClick:this.props.clear},"Clear"),r.a.createElement(g.a,{variant:"outline-secondary",onClick:this.props.slow},"Slow"),r.a.createElement(g.a,{variant:"outline-secondary",onClick:this.props.fast},"Fast"),r.a.createElement(g.a,{variant:"outline-secondary",onClick:this.props.seed},"Seed"),r.a.createElement(G.a,{title:"Grid Size",variant:"secondary",id:"size-menu",onSelect:this.handleSelect},r.a.createElement(L.a.Item,{eventKey:"1"},"20x10"),r.a.createElement(L.a.Item,{eventKey:"2"},"50x30"),r.a.createElement(L.a.Item,{eventKey:"3"},"70x50"))))}}]),t}(r.a.Component),z=(a(103),function(e){function t(){var e;return Object(C.a)(this,t),(e=Object(B.a)(this,Object(S.a)(t).call(this))).arrayClone=function(e){return JSON.parse(JSON.stringify(e))},e.selectBox=function(t,a){var n=e.arrayClone(e.state.gridFull);n[t][a]=!n[t][a],e.setState({gridFull:n})},e.seed=function(){for(var t=e.arrayClone(e.state.gridFull),a=0;a<e.rows;a++)for(var n=0;n<e.cols;n++)1===Math.floor(4*Math.random())&&(t[a][n]=!0);e.setState({gridFull:t})},e.playButton=function(){clearInterval(e.intervalID),e.intervalID=setInterval(e.play,e.speed)},e.pauseButton=function(){clearInterval(e.intervalID)},e.fast=function(){e.speed=100,e.playButton()},e.slow=function(){e.speed=1e3,e.playButton()},e.clear=function(){var t=Array(e.rows).fill().map((function(){return Array(e.cols).fill(!1)}));e.setState({gridFull:t,generation:0})},e.gridSize=function(t){switch(t){case"1":e.cols=20,e.rows=10;break;case"2":e.cols=50,e.rows=30;break;default:e.cols=70,e.rows=50}e.clear()},e.play=function(){for(var t=e.state.gridFull,a=e.arrayClone(e.state.gridFull),n=0;n<e.rows;n++)for(var r=0;r<e.cols;r++){var l=0;n>0&&t[n-1][r]&&l++,n>0&&r>0&&t[n-1][r-1]&&l++,n>0&&r<e.cols-1&&t[n-1][r+1]&&l++,r<e.cols-1&&t[n][r+1]&&l++,r>0&&t[n][r-1]&&l++,n<e.rows-1&&t[n+1][r]&&l++,n<e.rows-1&&r>0&&t[n+1][r-1]&&l++,n<e.rows-1&&r<e.cols-1&&t[n+1][r+1]&&l++,t[n][r]&&(l<2||l>3)&&(a[n][r]=!1),t[n][r]||3!==l||(a[n][r]=!0)}e.setState({gridFull:a,generation:e.state.generation+1})},e.speed=100,e.rows=30,e.cols=50,e.state={generation:0,gridFull:Array(e.rows).fill().map((function(){return Array(e.cols).fill(!1)}))},e.selectBox=e.selectBox.bind(Object(N.a)(e)),e.arrayClone=e.arrayClone.bind(Object(N.a)(e)),e.seed=e.seed.bind(Object(N.a)(e)),e}return Object(I.a)(t,e),Object(x.a)(t,[{key:"componentDidMount",value:function(){this.seed(),this.playButton()}},{key:"render",value:function(){return r.a.createElement("div",{className:"game-of-life"},r.a.createElement("h1",null,"The Game of Life"),r.a.createElement(T,{playButton:this.playButton,pauseButton:this.pauseButton,slow:this.slow,fast:this.fast,clear:this.clear,seed:this.seed,gridSize:this.gridSize}),r.a.createElement(A,{gridFull:this.state.gridFull,rows:this.rows,cols:this.cols,selectBox:this.selectBox}),r.a.createElement("h2",null,"Generation: ",this.state.generation," "))}}]),t}(r.a.Component)),D=a(115);a(104);var M=function(){return r.a.createElement("div",{className:"proj-home-page"},r.a.createElement(p.a,null,r.a.createElement(D.a,{className:"overview"},r.a.createElement("h1",null,"Projects List"),r.a.createElement("p",null,"A place where I put together all of my personal projects.")),r.a.createElement(D.a,{className:"project-detail project-1"},r.a.createElement("h1",null,"Game of Life"),r.a.createElement("p",null,"An implementation of the game of life by John Conway."),r.a.createElement(g.a,{variant:"secondary"},r.a.createElement(s.b,{to:"/proj/gameoflife"},"Learn more")))))};a(105);function P(){var e=Object(i.a)(["\nbody {\n  background-color: ",";\n  color: ",";\n}\na {\n  color: ",";\n}\n.header a {\n  color: ",";\n}\n.header nav {\n  background-color: "," !important;\n}\n\n.game-of-life h1,h2 {\n  color: ",";\n}\n\n.jumbotron {\n  color: #292a2d;\n}\n"]);return P=function(){return e},e}var J=Object(m.b)(P(),(function(e){return"dark"===e.theme.mode?"#292a2d":"#EEE"}),(function(e){return"dark"===e.theme.mode?"#EEE":"#292a2d"}),(function(e){return"dark"===e.theme.mode?"#EEE":"#292a2d"}),(function(e){return"dark"===e.theme.mode?"#EEE":"#292a2d"}),(function(e){return"dark"===e.theme.mode?"#35363a":"#f8f9fa"}),(function(e){return"dark"===e.theme.mode?"#EEE":"#292a2d"}));var K=function(){var e=Object(n.useState)({mode:"light"}),t=Object(c.a)(e,2),a=t[0],l=t[1];return r.a.createElement(m.a,{theme:a},r.a.createElement(J,null),r.a.createElement("div",{className:"App"},r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(y,{changeTheme:function(){l("dark"===a.mode?{mode:"light"}:{mode:"dark"})}}),r.a.createElement(u.a,{exact:!0,path:"/proj",component:M}),r.a.createElement(u.a,{path:"/proj/gameoflife",component:z}),r.a.createElement(u.a,{exact:!0,path:"/",component:E}),r.a.createElement(u.a,{path:"/about",component:E}),r.a.createElement(u.a,{path:"/gallery",component:O})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},70:function(e,t,a){e.exports=a(107)},75:function(e,t,a){},76:function(e,t,a){},81:function(e,t,a){},90:function(e,t,a){}},[[70,1,2]]]);
//# sourceMappingURL=main.a8a6ce88.chunk.js.map