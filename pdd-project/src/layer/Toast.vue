<template>
  <div class="toast" v-show="visible">
    {{ message }}
  </div>
</template>

<script>
  export default {
    name: 'toast',
    data () {
      return {
        message: '', // 消息文字
        duration: 3000, // 显示时长，毫秒
        closed: false, // 用来判断消息框是否关闭
        timer: null, // 计时器
        visible: false // 是否显示
      }
    },
    mounted () {
      this.startTimer()
    },
    watch: {
      closed (newVal) {
        if (newVal) {
          this.visible = false
          this.destroyElement()
        }
      }
    },
    methods: {
      destroyElement () {
        this.$destroy()
        this.$el.parentNode.removeChild(this.$el)
      },
      startTimer () {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.closed = true
            clearTimeout(this.timer)
          }
        }, this.duration)
      }
    }
  }
</script>

<style scoped lang="stylus">
  .toast
    position fixed
    bottom 40vh
    left 22vw
    min-width 40vw
    max-width 100vw
    font-size 25px
    text-align center
    padding 10px 2vw
    border-radius 40px
    background-color rgba(224,46,36,0.6)
    color white
    letter-spacing 3px
</style>
