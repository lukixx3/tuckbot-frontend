(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){"use strict";var l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=l(a(0)),n=i(a(39)),o=i(a(42));t.default=({children:e})=>r.createElement("div",{className:"wrapper"},r.createElement(o.default,null),r.createElement("div",{className:"page-container"},r.createElement("div",{className:"content"},e)),r.createElement(n.default,null))},,,,,,,function(e,t,a){"use strict";var l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const i=l(a(0));t.default=({children:e})=>i.createElement("div",null,i.createElement("div",{className:"loader"}),e)},function(e,t,a){"use strict";var l=this&&this.__awaiter||function(e,t,a,l){return new(a||(a=Promise))((function(i,r){function n(e){try{s(l.next(e))}catch(e){r(e)}}function o(e){try{s(l.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(n,o)}s((l=l.apply(e,t||[])).next())}))},i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const r=i(a(0)),n=a(83);t.useRedditVideo=function(e){const[t,a]=r.useState(!1),[i,o]=r.useState(null),[s,u]=r.useState(null);return r.useEffect(()=>{(()=>{l(this,void 0,void 0,(function*(){a(!0);try{const t=yield n.fetchVideo(e);u(t),o(null)}catch(e){u(null),o(e.message)}finally{a(!1)}}))})()},[e]),{isLoading:t,errorMessage:i,videoResponse:s}}},,,function(e,t,a){e.exports=a(21)},function(e,t,a){"use strict";var l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=l(a(0)),n=a(23);a(27);const o=i(a(31));n.render(r.createElement(o.default,null),document.getElementById("main"))},,,,,,function(e,t,a){var l=a(28),i=a(29);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1},n=(l(i,r),i.locals?i.locals:{});e.exports=n},,function(e,t,a){(t=a(30)(!1)).push([e.i,'/*!\n  Ionicons, v2.0.0\n  Created by Ben Sperry for the Ionic Framework, http://ionicons.com/\n  https://twitter.com/benjsperry  https://twitter.com/ionicframework\n  MIT License: https://github.com/driftyco/ionicons\n\n  Android-style icons originally built by Google’s\n  Material Design Icons: https://github.com/google/material-design-icons\n  used under CC BY http://creativecommons.org/licenses/by/4.0/\n  Modified icons to fit ionicon’s grid from original.\n*/@font-face{font-family:"Ionicons";src:url("https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/fonts/ionicons.eot?v=2.0.0");src:url("https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/fonts/ionicons.eot?v=2.0.0#iefix") format("embedded-opentype"),url("https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/fonts/ionicons.ttf?v=2.0.0") format("truetype"),url("https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/fonts/ionicons.woff?v=2.0.0") format("woff"),url("https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/fonts/ionicons.svg?v=2.0.0#Ionicons") format("svg");font-weight:normal;font-style:normal}.image-gallery-fullscreen-button::before,.image-gallery-play-button::before,.image-gallery-left-nav::before,.image-gallery-right-nav::before{display:inline-block;font-family:"Ionicons";speak:none;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;text-rendering:auto;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.image-gallery{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.image-gallery.fullscreen-modal{background:#000;bottom:0;height:100%;left:0;position:fixed;right:0;top:0;width:100%;z-index:5}.image-gallery.fullscreen-modal .image-gallery-content{top:50%;transform:translateY(-50%)}.image-gallery-content{position:relative;line-height:0;top:0}.image-gallery-content.fullscreen{background:#000}.image-gallery-content.fullscreen .image-gallery-slide{background:#000}.image-gallery-slide-wrapper{position:relative}.image-gallery-slide-wrapper.left,.image-gallery-slide-wrapper.right{display:inline-block;width:calc(100% - 113px)}@media(max-width: 768px){.image-gallery-slide-wrapper.left,.image-gallery-slide-wrapper.right{width:calc(100% - 84px)}}.image-gallery-slide-wrapper.image-gallery-rtl{direction:rtl}.image-gallery-fullscreen-button,.image-gallery-play-button,.image-gallery-left-nav,.image-gallery-right-nav{appearance:none;background-color:transparent;border:0;cursor:pointer;outline:none;position:absolute;z-index:4}.image-gallery-fullscreen-button::before,.image-gallery-play-button::before,.image-gallery-left-nav::before,.image-gallery-right-nav::before{color:#fff;line-height:.7;text-shadow:0 2px 2px #1a1a1a;transition:color .2s ease-out}.image-gallery-fullscreen-button:hover::before,.image-gallery-play-button:hover::before,.image-gallery-left-nav:hover::before,.image-gallery-right-nav:hover::before{color:#337ab7}@media(max-width: 768px){.image-gallery-fullscreen-button:hover::before,.image-gallery-play-button:hover::before,.image-gallery-left-nav:hover::before,.image-gallery-right-nav:hover::before{color:#fff}}.image-gallery-fullscreen-button,.image-gallery-play-button{bottom:0}.image-gallery-fullscreen-button::before,.image-gallery-play-button::before{font-size:2.7em;padding:15px 20px;text-shadow:0 1px 1px #1a1a1a}@media(max-width: 768px){.image-gallery-fullscreen-button::before,.image-gallery-play-button::before{font-size:2.4em}}@media(max-width: 480px){.image-gallery-fullscreen-button::before,.image-gallery-play-button::before{font-size:2em}}.image-gallery-fullscreen-button:hover::before,.image-gallery-play-button:hover::before{color:#fff;transform:scale(1.1)}@media(max-width: 768px){.image-gallery-fullscreen-button:hover::before,.image-gallery-play-button:hover::before{transform:none}}.image-gallery-fullscreen-button{right:0}.image-gallery-fullscreen-button::before{content:""}.image-gallery-fullscreen-button.active::before{content:""}.image-gallery-fullscreen-button.active:hover::before{transform:scale(0.9)}.image-gallery-play-button{left:0}.image-gallery-play-button::before{content:""}.image-gallery-play-button.active::before{content:""}.image-gallery-left-nav,.image-gallery-right-nav{color:#fff;font-size:5em;padding:50px 15px;top:50%;transform:translateY(-50%)}.image-gallery-left-nav[disabled],.image-gallery-right-nav[disabled]{cursor:disabled;opacity:.6;pointer-events:none}@media(max-width: 768px){.image-gallery-left-nav,.image-gallery-right-nav{font-size:3.4em;padding:20px 15px}}@media(max-width: 480px){.image-gallery-left-nav,.image-gallery-right-nav{font-size:2.4em;padding:0 15px}}.image-gallery-left-nav{left:0}.image-gallery-left-nav::before{content:""}.image-gallery-right-nav{right:0}.image-gallery-right-nav::before{content:""}.image-gallery-slides{line-height:0;overflow:hidden;position:relative;white-space:nowrap}.image-gallery-slide{background:#fff;left:0;position:absolute;top:0;width:100%}.image-gallery-slide.center{position:relative}.image-gallery-slide img{width:100%}.image-gallery-slide .image-gallery-description{background:rgba(0,0,0,.4);bottom:70px;color:#fff;left:0;line-height:1;padding:10px 20px;position:absolute;white-space:normal}@media(max-width: 768px){.image-gallery-slide .image-gallery-description{bottom:45px;font-size:.8em;padding:8px 15px}}.image-gallery-bullets{bottom:20px;left:0;margin:0 auto;position:absolute;right:0;width:80%;z-index:4}.image-gallery-bullets .image-gallery-bullets-container{margin:0;padding:0;text-align:center}.image-gallery-bullets .image-gallery-bullet{appearance:none;background-color:transparent;border:1px solid #fff;border-radius:50%;box-shadow:0 1px 0 #1a1a1a;cursor:pointer;display:inline-block;margin:0 5px;outline:none;padding:5px}@media(max-width: 768px){.image-gallery-bullets .image-gallery-bullet{margin:0 3px;padding:3px}}@media(max-width: 480px){.image-gallery-bullets .image-gallery-bullet{padding:2.7px}}.image-gallery-bullets .image-gallery-bullet.active{background:#fff}.image-gallery-thumbnails-wrapper{position:relative}.image-gallery-thumbnails-wrapper.thumbnails-wrapper-rtl{direction:rtl}.image-gallery-thumbnails-wrapper.left,.image-gallery-thumbnails-wrapper.right{display:inline-block;vertical-align:top;width:108px}@media(max-width: 768px){.image-gallery-thumbnails-wrapper.left,.image-gallery-thumbnails-wrapper.right{width:81px}}.image-gallery-thumbnails-wrapper.left .image-gallery-thumbnails,.image-gallery-thumbnails-wrapper.right .image-gallery-thumbnails{height:100%;width:100%;left:0;padding:0;position:absolute;top:0}.image-gallery-thumbnails-wrapper.left .image-gallery-thumbnails .image-gallery-thumbnail,.image-gallery-thumbnails-wrapper.right .image-gallery-thumbnails .image-gallery-thumbnail{display:block;margin-right:0;padding:0}.image-gallery-thumbnails-wrapper.left .image-gallery-thumbnails .image-gallery-thumbnail+.image-gallery-thumbnail,.image-gallery-thumbnails-wrapper.right .image-gallery-thumbnails .image-gallery-thumbnail+.image-gallery-thumbnail{margin-left:0}.image-gallery-thumbnails-wrapper.left{margin-right:5px}@media(max-width: 768px){.image-gallery-thumbnails-wrapper.left{margin-right:3px}}.image-gallery-thumbnails-wrapper.right{margin-left:5px}@media(max-width: 768px){.image-gallery-thumbnails-wrapper.right{margin-left:3px}}.image-gallery-thumbnails{overflow:hidden;padding:5px 0}@media(max-width: 768px){.image-gallery-thumbnails{padding:3px 0}}.image-gallery-thumbnails .image-gallery-thumbnails-container{cursor:pointer;text-align:center;transition:transform .45s ease-out;white-space:nowrap}.image-gallery-thumbnail{display:inline-block;border:4px solid transparent;transition:border .3s ease-out;width:100px}@media(max-width: 768px){.image-gallery-thumbnail{border:3px solid transparent;width:75px}}.image-gallery-thumbnail+.image-gallery-thumbnail{margin-left:2px}.image-gallery-thumbnail .image-gallery-thumbnail-inner{position:relative}.image-gallery-thumbnail img{vertical-align:middle;width:100%}.image-gallery-thumbnail.active{border:4px solid #337ab7}@media(max-width: 768px){.image-gallery-thumbnail.active{border:3px solid #337ab7}}.image-gallery-thumbnail-label{box-sizing:border-box;color:#fff;font-size:1em;left:0;line-height:1em;padding:5%;position:absolute;top:50%;text-shadow:1px 1px 0 #000;transform:translateY(-50%);white-space:normal;width:100%}@media(max-width: 768px){.image-gallery-thumbnail-label{font-size:.8em;line-height:.8em}}.image-gallery-index{background:rgba(0,0,0,.4);color:#fff;line-height:1;padding:10px 20px;position:absolute;right:0;top:0;z-index:4}@media(max-width: 768px){.image-gallery-index{font-size:.8em;padding:5px 10px}}body{overflow-x:hidden;overflow-y:scroll}.page-container{width:75%;max-width:75%;margin:0 auto}.image-gallery-thumbnail.active{border-color:#b13323}.image-gallery-fullscreen-button:hover::before,.image-gallery-play-button:hover::before,.image-gallery-left-nav:hover::before,.image-gallery-right-nav:hover::before{color:violet}body{height:100%;margin:0;background-repeat:no-repeat;background-attachment:fixed;background:#000;font-family:"Courier New",Courier,monospace;color:#b9b9b9;place-items:center}h2 small{font-size:.7em;font-weight:normal}a,a:visited{color:#8a2be2;font-weight:bold;text-decoration:none;text-transform:uppercase}a:hover{color:violet;text-align:center;text-decoration:underline}.videoTitle h2{color:#b9b9b9;margin:.25em;font-size:2.5vh}.inline-list{list-style-type:none;padding:0}.inline-list li{display:inline-block;margin:.5em}.inline-list dt:before{content:"";display:block}.inline-list dt,.inline-list dd{display:inline}.inline-list dt:after{content:":"}.inline-list dd{margin-left:.75em}video{min-width:150px;min-height:150px;max-width:85%;max-height:70vh;background-color:#1a1a1a;object-fit:contain}#main{align-items:center;justify-content:center}#tuckie-boy{cursor:grab;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}header,footer{text-align:center}header{letter-spacing:.2ch;text-transform:uppercase}footer{margin:1em;font-size:.8em}.content{text-align:center}video:focus{outline:none}.dot-tv{font-size:.7em;font-weight:bold;letter-spacing:normal;color:rgba(185,185,185,.6)}.loader{border:.5em solid #f3f3f3;border-top:.5em solid #b9b9b9;border-right:.5em solid violet;border-bottom:.5em solid #8a2be2;border-left:.5em solid #b13323;border-radius:50%;width:2.5em;height:2.5em;animation:spin 2s linear infinite;margin:1em auto}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.tuckerGallery{max-width:40%;margin:0 auto}.bold{font-weight:bold}dt{font-weight:bold}dt dt,dt h2 small{white-space:nowrap}',""]),e.exports=t},,function(e,t,a){"use strict";var l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=l(a(0)),n=a(8),o=i(a(36));t.default=()=>r.createElement(n.HashRouter,null,r.createElement(o.default,null))},,,,,function(e,t,a){"use strict";var l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=l(a(0)),n=a(8),o=i(a(37)),s=i(a(43)),u=i(a(45)),c=i(a(80)),d=i(a(81)),f=i(a(84));t.default=()=>r.createElement(n.Switch,null,r.createElement(n.Route,{path:"/",exact:!0,component:s.default}),r.createElement(n.Route,{path:"/contact",exact:!0,component:o.default}),r.createElement(n.Route,{path:"/tucker",exact:!0,component:u.default}),r.createElement(n.Route,{path:"/watch",exact:!0,component:c.default}),r.createElement(n.Route,{path:"/watch/random",exact:!0,component:d.default}),r.createElement(n.Route,{path:"/watch/:redditPostId",exact:!0,component:f.default}),r.createElement(n.Redirect,{to:"/"}))},function(e,t,a){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=l(a(38));t.default=i.default},function(e,t,a){"use strict";var l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=l(a(0)),n=i(a(9));t.default=()=>r.createElement(n.default,null,r.createElement("div",null,r.createElement("p",null,r.createElement("span",{className:"bold"},"Please note: "),"None of the content on this page is owned by the operators of this website."),r.createElement("p",null,"You are free to share links to this website."),r.createElement("dl",{className:"inline-list"},r.createElement("dt",null,"General Inquiries"),r.createElement("dd",null,r.createElement("a",{href:"mailto:inquire@tuckbot.tv"},"inquire@tuckbot.tv")),r.createElement("dt",null,"Takedown Requests"),r.createElement("dd",null,r.createElement("a",{href:"mailto:takedown@tuckbot.tv"},"takedown@tuckbot.tv")))))},function(e,t,a){"use strict";var l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=l(a(0)),n=i(a(40)),o=i(a(41));t.default=()=>r.createElement("footer",null,r.createElement("ul",{className:"inline-list"},r.createElement("li",null,r.createElement(n.default,null)),r.createElement("li",null,r.createElement(o.default,null))))},function(e,t,a){"use strict";var l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const i=l(a(0)),r=a(8);t.default=()=>i.createElement(r.Link,{to:"/contact"},"contact")},function(e,t,a){"use strict";var l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const i=l(a(0)),r=a(8);t.default=()=>i.createElement(r.Link,{to:"/watch/random"},"watch a random video")},function(e,t,a){"use strict";var l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const i=l(a(0)),r=a(6);class n extends i.Component{constructor(e){super(e),this.state={numClicks:0},this.state={numClicks:0},this.handleClick=this.handleClick.bind(this)}handleClick(){this.setState({numClicks:this.state.numClicks+1})}render(){let e=null;return this.state.numClicks>3&&(e=i.createElement(r.Redirect,{push:!0,to:"/tucker"})),i.createElement("header",null,e,i.createElement("h1",null,i.createElement("span",{id:"tuckie-boy",onClick:this.handleClick},"🐶"),"Tuckbot",i.createElement("span",{className:"dot-tv"},".tv")))}}t.default=n},function(e,t,a){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=l(a(44));t.default=i.default},function(e,t,a){"use strict";var l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=l(a(0)),n=i(a(9));t.default=()=>r.createElement(n.default,null,r.createElement("p",null,"Welcome to Tuckbot. If you're on this page, you've either found it by accident or have a curious mind."))},function(e,t,a){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=l(a(46));t.default=i.default},function(e,t,a){"use strict";var l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=l(a(0)),n=i(a(9)),o=i(a(47)),s=Math.floor(Date.now()/1e3)-1456790400,u=Math.floor(s/31536e3);class c extends r.Component{render(){return r.createElement(n.default,null,r.createElement("h1",null,"Hi there, I'm Tucker!"),r.createElement("p",null,"Thanks for the pets! I am ",u," years old. My favorite thing to do is to suck on my toy ducks. I have a few ducks: medium ducks, small ducks, huge ducks, tiny ducks, yellow ducks, green ducks, purple ducks, orange ducks, slightly more yellow ducks...basically every kind of duck. And a few more. Here's a few pictures of me."),r.createElement(o.default,null))}}t.default=c},function(e,t,a){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=l(a(0)),r=l(a(48)),n=a(53);t.default=()=>i.default.createElement(r.default,{items:n.photos,thumbnailPosition:"top",lazyLoad:!0,showFullscreenButton:!1,showPlayButton:!0,showIndex:!0,autoPlay:!0,startIndex:4,slideInterval:5e3,additionalClass:"tuckerGallery"})},,,,,,function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.photos=[{original:a(54),thumbnail:a(55)},{original:a(56),thumbnail:a(57)},{original:a(58),thumbnail:a(59)},{original:a(60),thumbnail:a(61)},{original:a(62),thumbnail:a(63)},{original:a(64),thumbnail:a(65)},{original:a(66),thumbnail:a(67)},{original:a(68),thumbnail:a(69)},{original:a(70),thumbnail:a(71)},{original:a(72),thumbnail:a(73)},{original:a(74),thumbnail:a(75)},{original:a(76),thumbnail:a(77)},{original:a(78),thumbnail:a(79)}]},function(e,t,a){e.exports=a.p+"assets/img/tuck-bowtie_14f97e95b1ef8ca2941f056272e73e5f.jpg"},function(e,t,a){e.exports=a.p+"assets/img/thumb.tuck-bowtie_647d1ad95a77ce681aacfa6ecabedfb5.jpg"},function(e,t,a){e.exports=a.p+"assets/img/tuck-couch_5e1d0c2ceb345ff5406f814f39e1b4ec.jpg"},function(e,t,a){e.exports=a.p+"assets/img/thumb.tuck-couch_efbc5d15fa61bbd0ec6ef7558fb25bc2.jpg"},function(e,t,a){e.exports=a.p+"assets/img/tuck-cozy_cf07098e986c403a2f2d4b6cea34862a.jpg"},function(e,t,a){e.exports=a.p+"assets/img/thumb.tuck-cozy_1c62ee7dc556ab804969fd7c71c1699a.jpg"},function(e,t,a){e.exports=a.p+"assets/img/tuck-deck_58facda914a18b6ddab366e377b85504.jpg"},function(e,t,a){e.exports=a.p+"assets/img/thumb.tuck-deck_489edc74f6529115d6a96e0af130e136.jpg"},function(e,t,a){e.exports=a.p+"assets/img/tuck-ducksuck_c62b095090c81a23a91cd37b7dedf9c6.jpg"},function(e,t,a){e.exports=a.p+"assets/img/thumb.tuck-ducksuck_e290b3cb96d382bd72150c2c1a80708f.jpg"},function(e,t,a){e.exports=a.p+"assets/img/tuck-fiata-wind_5549dcee40c0a7de96cef08f2feb1cc6.jpg"},function(e,t,a){e.exports=a.p+"assets/img/thumb.tuck-fiata-wind_36841a8cf275e705b9bb32c3d05a6dc9.jpg"},function(e,t,a){e.exports=a.p+"assets/img/tuck-fiata_0633450c6d517788bf93a4a0ecbf2eeb.jpg"},function(e,t,a){e.exports=a.p+"assets/img/thumb.tuck-fiata_160c57fd505c1409650c88969f4ff43a.jpg"},function(e,t,a){e.exports=a.p+"assets/img/tuck-lazy_13a5adf0ce5f5a7bdae2c18eb27ad4c3.jpg"},function(e,t,a){e.exports=a.p+"assets/img/thumb.tuck-lazy_4c4b1656bd78a8b373ab229732040566.jpg"},function(e,t,a){e.exports=a.p+"assets/img/tuck-noselick_b70dd4b97f1e5b3eab312747480e1666.jpg"},function(e,t,a){e.exports=a.p+"assets/img/thumb.tuck-noselick_fa38963bbcad67224e14910a957af1c1.jpg"},function(e,t,a){e.exports=a.p+"assets/img/tuck-rainy_47de24d692988659c0d055dfc3feb550.jpg"},function(e,t,a){e.exports=a.p+"assets/img/thumb.tuck-rainy_82623f8b28e727a4c51fd00909536732.jpg"},function(e,t,a){e.exports=a.p+"assets/img/tuck-stump_e9bab2d3b10a9bdcf0cf951b6a8c4488.jpg"},function(e,t,a){e.exports=a.p+"assets/img/thumb.tuck-stump_f3fd4b4c10292c233835b56f38b82299.jpg"},function(e,t,a){e.exports=a.p+"assets/img/tuck-yawn_65fdd6fd79036576661e8a8e4413b184.jpg"},function(e,t,a){e.exports=a.p+"assets/img/thumb.tuck-yawn_15db8953c9bc789735c5dde7fd7c8d70.jpg"},function(e,t,a){e.exports=a.p+"assets/img/tuck-yawn2_e1a6a312cb26e6915b4b2eea05f316c0.jpg"},function(e,t,a){e.exports=a.p+"assets/img/thumb.tuck-yawn2_5aa55b1d1d7d28875e74b83cb0fbc446.jpg"},function(e,t,a){"use strict";var l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const i=l(a(0));t.default=()=>i.createElement("div",null,"You tried to watch with no redditPostId. Good job.")},function(e,t,a){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=l(a(82));t.default=i.default},function(e,t,a){"use strict";var l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=l(a(0)),n=a(8),o=i(a(16)),s=i(a(9)),u=a(17);t.default=()=>{const{videoResponse:e,errorMessage:t}=u.useRedditVideo("random"),a=n.useHistory();return t?r.createElement(s.default,null,"Error: ",t):e?(setTimeout(()=>{a.replace("/watch/"+e.redditPostId)},0),r.createElement("div",null,"Redirecting")):r.createElement(s.default,null,r.createElement(o.default,null,"Loading random video, please wait..."))}},function(e,t,a){"use strict";var l=this&&this.__awaiter||function(e,t,a,l){return new(a||(a=Promise))((function(i,r){function n(e){try{s(l.next(e))}catch(e){r(e)}}function o(e){try{s(l.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(n,o)}s((l=l.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});function i(e){return l(this,void 0,void 0,(function*(){const t=yield fetch("https://api.tuckbot.tv/public/video/"+e,{method:"GET"});if(200!==t.status){let e;try{e=(yield t.json()).status.message}catch(a){e=t.statusText}throw new Error(`${t.status}: ${e}`)}try{const e=yield t.json();return{redditPostId:e.data.redditPostId,redditPostTitle:e.data.redditPostTitle,mirrorUrl:e.data.mirrorUrl}}catch(e){throw new Error("Server returned an invalid result.")}}))}t.fetchVideo=i,t.fetchRandom=function(){return l(this,void 0,void 0,(function*(){return i("random")}))}},function(e,t,a){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=l(a(85));t.default=i.default},function(e,t,a){"use strict";var l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=l(a(0)),n=i(a(86)),o=i(a(9));t.default=({match:{params:{redditPostId:e}}})=>r.createElement(o.default,null,r.createElement(n.default,{redditPostId:e}))},function(e,t,a){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=l(a(87));t.default=i.default},function(e,t,a){"use strict";var l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=l(a(0)),n=a(88),o=a(17),s=i(a(16)),u=i(a(89)),c=i(a(91));t.default=({redditPostId:e})=>{const{isLoading:t,errorMessage:a,videoResponse:l}=o.useRedditVideo(e);let i=l?l.redditPostTitle:"Watch";if(n.setTitle(i),a)return r.createElement("div",null,"Error loading: ",a);if(t)return r.createElement(s.default,null,"Loading...");if(l){const{redditPostTitle:e,mirrorUrl:t,redditPostId:a}=l;return r.createElement(r.Fragment,null,r.createElement(c.default,{title:e,redditPostId:a}),r.createElement(u.default,{mirrorUrl:t}))}return r.createElement("div",null,"Not loading")}},function(e,t,a){"use strict";var l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const i=l(a(0));t.setTitle=function(e){i.useEffect(()=>{document.title=e+" 🐶 Tuckbot"},[e])}},function(e,t,a){"use strict";var l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const i=l(a(0)),r=a(90);t.default=({mirrorUrl:e})=>i.createElement("div",{className:"videoPlayer"},i.createElement("video",{controls:!0,poster:r,src:e,controlsList:"nodownload"}))},function(e,t,a){e.exports=a.p+"assets/img/poster_5165009702bcea916f486ffa60701b9f.png"},function(e,t,a){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=l(a(0));t.default=({title:e,redditPostId:t})=>i.default.createElement("div",{className:"videoTitle"},i.default.createElement("h2",null,e," ",i.default.createElement("small",null,"via ",i.default.createElement("a",{href:"https://reddit.com/"+t},"reddit"))))}],[[20,1,2]]]);
//# sourceMappingURL=client_ee22be7add1c35b4504b.bundle.js.map