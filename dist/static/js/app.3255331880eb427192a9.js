webpackJsonp([1],{38:function(n,t,e){e(81);var i=e(22)(e(40),e(93),"data-v-0e391e9d",null);n.exports=i.exports},40:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(23),r=e.n(i),o=e(45),s=e.n(o),a=e(44),l=e.n(a),d=e(92),c=e.n(d),u=e(91),m=e.n(u),f=e(80);e.n(f);t.default={name:"app",components:{StyleEditor:c.a,ListEditor:m.a},data:function(){return{interval:25,currentStyle:"",enableHtml:!1,fullStyle:["/*\n*\n* Hello there! I made this!\n* Today I'd like to build my list of accomplishments for you.\n* This is currently for my work between November of 2019 and May 2021.\n*\n* Just in case you don't want to watch this build, the list is provided here:\n- Project Folders - built & implemented\n- Red Cap - built, implimented, & admistered\n- LIMS Integration - modified & maintaining\n- Account Management Data Service - built, implemented, & maintaining\n- Ledger & AMDS Mocks - created & maintaining\n- Mongo & MySQL - modified & maintaining\n- Lab Results - implimentation & maintaining\n- Partnerships - maintaining good working relationships with partners & SLIMS staff\n- Testing - implmented & ongoing maintaining\n*/\n\n\n{\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n\nhtml {\n  color: #ececec;\n  background: #4b2650;\n}\n\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 50vw; height: 90vh;\n}\n\n.token.property { color: #f1a9a0; }\n.token.punctuation { color: #dda0dd; }\n.token.function { color: #fffacd; }\n\nhtml {\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n}\n\n.styleEditor {\n  position: fixed; left: 10px; top: 0;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n          transform: rotateY(10deg) translateZ(-100px) ;\n}\n\n.listEditor {\n  position: fixed; right: 0; top: 0;\n  padding: .5em;  margin: .5em;\n  width: 48vw; height: 90vh;\n  border: 3px solid #c5eff7;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* This animated list was Inspired by http://strml.net/ & https://github.com/jirengu-inc/animating-resume\n*/\n\n\n","\n/* Now for some markdown style.\n * marked(https://www.npmjs.com/package/marked).\n */\n",'\n/* Here comes the styling... */\n.listEditor{\n  padding: 2em;\n}\n.listEditor h2 {\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.listEditor ul,.listEditor ol {\n  list-style: none;\n}\n.listEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.listEditor ol {\n  counter-reset: section;\n}\n.listEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.listEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],currentMarkdown:"",fullMarkdown:"\nKate Pond's Work 11/19 - 05/21\n----\n\nI've created this in order to serve as a reminder of all the good work I've been doing.\n\nHighlights\n----\n- Project Folders - built & implemented\n- Red Cap - built, implimented, & admistered\n- LIMS Integration - modified & maintaining\n- Account Management Data Service - built, implemented, & maintaining\n- Ledger & AMDS Mocks - created & maintaining\n- Mongo & MySQL - modified & maintaining\n- Lab Results - implimentation & maintaining\n- Partnerships - maintaining good working relationships with partners & SLIMS staff\n- Testing - implmented & ongoing maintaining\n\n"}},created:function(){this.makeList()},methods:{makeList:function(){function n(){return t.apply(this,arguments)}var t=l()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowList();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new r.a(function(t,e){n.enableHtml=!0,t()})},progressivelyShowStyle:function(n){var t=this;return new r.a(function(e,i){var r=t.interval,o=l()(s.a.mark(function t(){var i,a,l,d,c,u=this;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(i=this.fullStyle[n]){t.next=3;break}return t.abrupt("return");case 3:a=this.fullStyle.filter(function(t,e){return e<=n}).map(function(n){return n.length}).reduce(function(n,t){return n+t},0),l=a-i.length,this.currentStyle.length<a?(d=this.currentStyle.length-l,c=i.substring(d,d+1)||" ",this.currentStyle+=c,"\n"===i.substring(d-1,d)&&this.$refs.styleEditor&&this.$nextTick(function(){u.$refs.styleEditor.goBottom()}),setTimeout(o,r)):e();case 6:case"end":return t.stop()}},t,this)})).bind(t);o()})},progressivelyShowList:function(){var n=this;return new r.a(function(t,e){var i=n.fullMarkdown.length,r=n.interval;!function e(){if(n.currentMarkdown.length<i){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);var o=(n.currentMarkdown[n.currentMarkdown.length-1],n.currentMarkdown[n.currentMarkdown.length-2]);console.log(o),"\n"===o&&n.$refs.listEditor&&n.$nextTick(function(){return n.$refs.listEditor.goBottom()}),setTimeout(e,r)}else t()}()})}}}},41:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(84),r=e.n(i);t.default={props:["markdown","enableHtml"],name:"ListEditor",computed:{result:function(){return this.enableHtml?r()(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},42:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(85),r=e.n(i);t.default={name:"Editor",props:["code"],computed:{highlightedCode:function(){return r.a.highlight(this.code,r.a.languages.css)},codeInStyleTag:function(){return"<style>"+this.code+"</style>"}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},43:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(39),r=e(38),o=e.n(r);new i.a({el:"#app",render:function(n){return n(o.a)}})},80:function(n,t){},81:function(n,t){},82:function(n,t){},83:function(n,t){},91:function(n,t,e){e(83);var i=e(22)(e(41),e(95),"data-v-41d62b00",null);n.exports=i.exports},92:function(n,t,e){e(82);var i=e(22)(e(42),e(94),"data-v-3941a7f9",null);n.exports=i.exports},93:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),e("ListEditor",{ref:"listEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}},94:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ref:"container",staticClass:"styleEditor"},[e("div",{staticClass:"code",domProps:{innerHTML:n._s(n.codeInStyleTag)}}),n._v(" "),e("pre",{domProps:{innerHTML:n._s(n.highlightedCode)}})])},staticRenderFns:[]}},95:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ref:"container",staticClass:"listEditor",class:{htmlMode:n.enableHtml}},[n.enableHtml?e("div",{domProps:{innerHTML:n._s(n.result)}}):e("pre",[n._v(n._s(n.result))])])},staticRenderFns:[]}}},[43]);
//# sourceMappingURL=app.3255331880eb427192a9.js.map