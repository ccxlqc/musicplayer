<template>
  <transition name="slide">
    <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
  </transition>
</template>

<script>
import MusicList from 'components/music-list/music-list'
import {mapGetters} from 'vuex'
import {getSongList} from 'api/recommend'
import {ERR_OK} from 'api/config'
export default {
  data() {
    return {
      songs: []
    }
  },

  computed: {
    ...mapGetters([
      'disc'
    ]),
    bgImage() {
      return this.disc.imgurl
    },
    title() {
      return this.disc.dissname
    }
  },
  created() {
    this._getSongList()
  },
  methods: {
    _getSongList() {
      getSongList(this.disc.disstid).then((res) => {
        if (res.code === ERR_OK) {
          console.log(res.cdlist[0].songlist)
      }
      })
    },
    _normalizeSongs(list) {
      let ret = []
    }
  },
  components: {
    MusicList
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
