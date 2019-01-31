webpackJsonp([1],{38:function(e,n,t){t(83);var r=t(21)(t(40),t(92),"data-v-fee70a80",null);e.exports=r.exports},40:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(23),o=t.n(r),i=t(45),s=t.n(i),a=t(44),l=t.n(a),u=t(89),c=t.n(u),d=t(88),h=t.n(d),m=t(80);t.n(m);n.default={name:"app",components:{StyleEditor:c.a,ResumeEditor:h.a},data:function(){return{interval:25,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* Inspired by http://strml.net/ & https://github.com/jirengu-inc/animating-resume\n*\n* Hello there! My name is Kate. It's a pleasure to e-meet you! \n* Today I'd like to build my resume for you.\n* If you ask me why, then I'd have to tell you...\n* I think it's fun!\n*/\n\n/* First we'll need to add a transition effect to all the elements */\n* {\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n/* Then I don't know about you, but \n* I find the white background a bit boring. Let's change that, shall we? */\nhtml {\n  color: #ececec;\n  background: #4b2650; \n}\n/* Now we'll need a bit of padding to move the text from the edge of the screen\n* And wouldn't a border be nice,\n* with some margin to keep the text from the edge of the border.\n*/\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 50vw; height: 90vh;\n}\n/* I think it would be nice to have the code highlighted as well */\n.token.selector { color: #ef41fe; }\n.token.property { color: #f1a9a0; }\n.token.punctuation { color: #dda0dd; }\n.token.function { color: #fffacd; }\n\n/* Those colors were pickout using colorsafe.co\n* \"Accessible text colors are generated with \n* WCAG Guidelines recommend contrast ratio\" \n*\n* How about a little perspective now? */\nhtml {\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n}\n/* Here's some fun with that perspective.  */\n.styleEditor {\n  position: fixed; left: 10px; top: 0; \n  -webkit-transition: none; \n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n          transform: rotateY(10deg) translateZ(-100px) ;\n}\n\n/* Now to make the space for my resume... */\n.resumeEditor {\n  position: fixed; right: 0; top: 0;\n  padding: .5em;  margin: .5em;\n  width: 48vw; height: 90vh; \n  border: 3px solid #c5eff7;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* And actually write it! */\n\n\n","\n/* This Markdown needs some style now.\n * We'll accomplish this with some open source tools like \n * marked(https://www.npmjs.com/package/marked) and ??.\n */\n",'\n/* Here comes the styling... */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2 {\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol {\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;            \n  content: counters(section, ".") " ";  \n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],currentMarkdown:"",fullMarkdown:"\nKate Pond\n----\n\nGenius, Unicorn, Goddess, Gatekeeper of Unlimited Knowledge, Leader\n\nSkills\n----\n\n* HTML & CSS\n* Node\n* gulp\n* HTML Email Development\n* Leadership\n* Interpersonal Communication\n* Event Planning \n* Education\n\nExperience\n----\n\n1. Currently Tech Ladies Phoenix City Organizer & ACT-W National Confrence Co-coordinator\n2. Oranganized over 20 events and classes as a Girl Develop It Chapter Leader\n3. Supervisory Ranger for the Mountains Conservation and Recreation Area and Tongass National Forest\n4. Assisted in creating automation for tasks using Node and Gulp\n5. Given 100+ public talks on natural and cultural history\n\nConnect\n----\n\n* [GitHub](https://github.com/Oh-KPond)\n* [Medium](https://medium.com/@OhKPond)\n* [Twitter @OhKPond](https://twitter.com/OhKPond)\n\n> To build your own animated resume，Fork [This Project](https://github.com/Oh-KPond/animated-resume)，and make it your own！\n\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function e(){return n.apply(this,arguments)}var n=l()(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.progressivelyShowStyle(0);case 2:return e.next=4,this.progressivelyShowResume();case 4:return e.next=6,this.progressivelyShowStyle(1);case 6:return e.next=8,this.showHtml();case 8:return e.next=10,this.progressivelyShowStyle(2);case 10:case"end":return e.stop()}},e,this)}));return e}(),showHtml:function(){var e=this;return new o.a(function(n,t){e.enableHtml=!0,n()})},progressivelyShowStyle:function(e){var n=this;return new o.a(function(t,r){var o=n.interval,i=l()(s.a.mark(function n(){var r,a,l,u,c,d=this;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(r=this.fullStyle[e]){n.next=3;break}return n.abrupt("return");case 3:a=this.fullStyle.filter(function(n,t){return t<=e}).map(function(e){return e.length}).reduce(function(e,n){return e+n},0),l=a-r.length,this.currentStyle.length<a?(u=this.currentStyle.length-l,c=r.substring(u,u+1)||" ",this.currentStyle+=c,"\n"===r.substring(u-1,u)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):t();case 6:case"end":return n.stop()}},n,this)})).bind(n);i()})},progressivelyShowResume:function(){var e=this;return new o.a(function(n,t){var r=e.fullMarkdown.length,o=e.interval;!function t(){if(e.currentMarkdown.length<r){e.currentMarkdown=e.fullMarkdown.substring(0,e.currentMarkdown.length+1);var i=(e.currentMarkdown[e.currentMarkdown.length-1],e.currentMarkdown[e.currentMarkdown.length-2]);console.log(i),"\n"===i&&e.$refs.resumeEditor&&e.$nextTick(function(){return e.$refs.resumeEditor.goBottom()}),setTimeout(t,o)}else n()}()})}}}},41:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(84),o=t.n(r);n.default={props:["markdown","enableHtml"],name:"ResumeEditor",computed:{result:function(){return this.enableHtml?o()(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},42:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(85),o=t.n(r);n.default={name:"Editor",props:["code"],computed:{highlightedCode:function(){return o.a.highlight(this.code,o.a.languages.css)},codeInStyleTag:function(){return"<style>"+this.code+"</style>"}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},43:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(39),o=t(38),i=t.n(o);new r.a({el:"#app",render:function(e){return e(i.a)}})},80:function(e,n){},81:function(e,n){},82:function(e,n){},83:function(e,n){},88:function(e,n,t){t(82);var r=t(21)(t(41),t(91),"data-v-e5c0e69c",null);e.exports=r.exports},89:function(e,n,t){t(81);var r=t(21)(t(42),t(90),"data-v-478dca14",null);e.exports=r.exports},90:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{ref:"container",staticClass:"styleEditor"},[t("div",{staticClass:"code",domProps:{innerHTML:e._s(e.codeInStyleTag)}}),e._v(" "),t("pre",{domProps:{innerHTML:e._s(e.highlightedCode)}})])},staticRenderFns:[]}},91:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{ref:"container",staticClass:"resumeEditor",class:{htmlMode:e.enableHtml}},[e.enableHtml?t("div",{domProps:{innerHTML:e._s(e.result)}}):t("pre",[e._v(e._s(e.result))])])},staticRenderFns:[]}},92:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:e.currentStyle}}),e._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:e.currentMarkdown,enableHtml:e.enableHtml}})],1)},staticRenderFns:[]}}},[43]);
//# sourceMappingURL=app.e9c873d519f9f58962e4.js.map