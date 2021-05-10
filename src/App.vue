<template>
  <div id="app">
    <StyleEditor ref="styleEditor" :code="currentStyle"></StyleEditor>
    <ListEditor ref="listEditor" :markdown="currentMarkdown" :enableHtml="enableHtml"></ListEditor>
  </div>
</template>

<script>
  import StyleEditor from './components/StyleEditor'
  import ListEditor from './components/ListEditor'
  import './assets/reset.css'

  export default {
    name: 'app',
    components: {
      StyleEditor,
      ListEditor
    },
    data() {
      return {
        interval: 25,
        currentStyle: '',
        enableHtml: false,
        fullStyle: [
          `/*
*
* Hello there! I made this!
* Today I'd like to build my list of accomplishments for you.
* This is currently for my work between November of 2019 and May 2021.
*
* Just in case you don't want to watch this build, the list is provided here:
- Project Folders - built & implemented
- Red Cap - built, implimented, & admistered
- LIMS Integration - modified & maintaining
- Account Management Data Service - built, implemented, & maintaining
- Ledger & AMDS Mocks - created & maintaining
- Mongo & MySQL - modified & maintaining
- Lab Results - implimentation & maintaining
- Partnerships - maintaining good working relationships with partners & SLIMS staff
- Testing - implmented & ongoing maintaining
*/


{
  -webkit-transition: all .3s;
  transition: all .3s;
}

html {
  color: #ececec;
  background: #4b2650;
}

.styleEditor {
  padding: .5em;
  border: 1px solid;
  margin: .5em;
  overflow: auto;
  width: 50vw; height: 90vh;
}

.token.property { color: #f1a9a0; }
.token.punctuation { color: #dda0dd; }
.token.function { color: #fffacd; }

html {
  -webkit-perspective: 1000px;
          perspective: 1000px;
}

.styleEditor {
  position: fixed; left: 10px; top: 0;
  -webkit-transition: none;
  transition: none;
  -webkit-transform: rotateY(10deg) translateZ(-100px) ;
          transform: rotateY(10deg) translateZ(-100px) ;
}

.listEditor {
  position: fixed; right: 0; top: 0;
  padding: .5em;  margin: .5em;
  width: 48vw; height: 90vh;
  border: 3px solid #c5eff7;
  background: white; color: #222;
  overflow: auto;
}
/* This animated list was Inspired by http://strml.net/ & https://github.com/jirengu-inc/animating-resume
*/


`,
          `
/* Now for some markdown style.
 * marked(https://www.npmjs.com/package/marked).
 */
`
          ,
          `
/* Here comes the styling... */
.listEditor{
  padding: 2em;
}
.listEditor h2 {
  display: inline-block;
  border-bottom: 1px solid;
  margin: 1em 0 .5em;
}
.listEditor ul,.listEditor ol {
  list-style: none;
}
.listEditor ul> li::before{
  content: '•';
  margin-right: .5em;
}
.listEditor ol {
  counter-reset: section;
}
.listEditor ol li::before {
  counter-increment: section;
  content: counters(section, ".") " ";
  margin-right: .5em;
}
.listEditor blockquote {
  margin: 1em;
  padding: .5em;
  background: #ddd;
}
`],
        currentMarkdown: '',
        fullMarkdown: `
Kate Pond's Work 11/19 - 05/21
----

I've created this in order to serve as a reminder of all the good work I've been doing.

Highlights
----
- Project Folders - built & implemented
- Red Cap - built, implimented, & admistered
- LIMS Integration - modified & maintaining
- Account Management Data Service - built, implemented, & maintaining
- Ledger & AMDS Mocks - created & maintaining
- Mongo & MySQL - modified & maintaining
- Lab Results - implimentation & maintaining
- Partnerships - maintaining good working relationships with partners & SLIMS staff
- Testing - implmented & ongoing maintaining

`
      }
    },
    created() {
      this.makeList()
    },

    methods: {
      makeList: async function () {
        await this.progressivelyShowStyle(0)
        await this.progressivelyShowList()
        await this.progressivelyShowStyle(1)
        await this.showHtml()
        await this.progressivelyShowStyle(2)
      },
      showHtml: function () {
        return new Promise((resolve, reject) => {
          this.enableHtml = true
          resolve()
        })
      },
      progressivelyShowStyle(n) {
        return new Promise((resolve, reject) => {
          let interval = this.interval
          let showStyle = (async function () {
            let style = this.fullStyle[n]
            if (!style) { return }
            // Calculate the total number of characters before the n styles
            let length = this.fullStyle.filter((_, index) => index <= n).map((item) => item.length).reduce((p, c) => p + c, 0)
            let prefixLength = length - style.length
            if (this.currentStyle.length < length) {
              let l = this.currentStyle.length - prefixLength
              let char = style.substring(l, l + 1) || ' '
              this.currentStyle += char
              if (style.substring(l - 1, l) === '\n' && this.$refs.styleEditor) {
                this.$nextTick(() => {
                  this.$refs.styleEditor.goBottom()
                })
              }
              setTimeout(showStyle, interval)
            } else {
              resolve()
            }
          }).bind(this)
          showStyle()
        })
      },
      progressivelyShowList() {
        return new Promise((resolve, reject) => {
          let length = this.fullMarkdown.length
          let interval = this.interval
          let showList = () => {
            if (this.currentMarkdown.length < length) {
              this.currentMarkdown = this.fullMarkdown.substring(0, this.currentMarkdown.length + 1)
              let lastChar = this.currentMarkdown[this.currentMarkdown.length - 1]
              let prevChar = this.currentMarkdown[this.currentMarkdown.length - 2]
              console.log(prevChar)
              if (prevChar === '\n' && this.$refs.listEditor) {
                this.$nextTick(() => this.$refs.listEditor.goBottom())
              }
              setTimeout(showList, interval)
            } else {
              resolve()
            }
          }
          showList()
        })
      }
    }
  }

</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    min-height: 100vh;
  }

  * {
    -webkit-transition: all .3s;
    transition: all .3s;
  }
</style>
