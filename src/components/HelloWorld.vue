<template>
  <div>
    <div id="remap" style="width: 1600px;height: 800px;">
      <div id="canvas-frame" class="canvas_frame"></div>
    </div>
    <panel v-if="isPlan.airPlan" @ms="ms" @kg = 'kg' @yy="yy" @or="or" :isRe="isRe" :T="T" :isOpen="isOpen" :isAi="isAi" @patternChange="patternChange" @tChange="tChange" :pattern="pattern" style="position: absolute;top: 300px;left: 400px;z-index: 101;opacity: .9;"></panel>
  </div>
</template>

<script>
  window.abc = true
  import { remap3D } from '../remap3D.js'
  import { Aobjects } from '../data.js'
  import panel from './iot/iotItem/my_panel'
  // import Zlib from 'import-three-examples/src/Zlib'
  // console.log(Zlib, 1)
export default {
  components: {
    panel
  },
  data () {
    return {
      initOption: {
        antialias: true,
        showHelpGrid: false,
        clearCoolr: 0xffffff,
        divHeight:800,
        divWidth:1600
      },
      isPlan: {
        airPlan: false
      },
      isOpen: false,
      isRe: false,
      isAi: false,
      T: 30,
      pattern: 'shouye'
    }
  },
  computed: {
  },
  mounted () {
    this.$nextTick(() => {
      var threeBuild = new remap3D(this.isPlan)
      threeBuild.initmsj3D('remap', this.initOption, Aobjects)
      threeBuild.start()
    })
  },
  methods: {
    abc () {
      return window.abc
    },
    patternChange (e) {
      this.pattern = e
    },
    tChange (e) {
      this.T = e
    },
    ms () {
      this.isRe = !this.isRe
      this.pattern = 'shouye'
    },
    kg () {
      this.isOpen = !this.isOpen
      this.pattern = 'shouye'
    },
    yy (list) {
      getData.airAppoint(this.token, {
        facilityId: this.facilityId,
        yyTime: '2018-12-01',
        timeList: list
      }, res => {
        if (res.data.state === 0) {
          this.$message.success('设置成功')
        } else {
          this.$message.error(res.data.msg)
        }
      })
    },
    or () {
      this.isAi = !this.isAi
      this.pattern = 'shouye'
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
   color: #42b983;
 }
</style>
