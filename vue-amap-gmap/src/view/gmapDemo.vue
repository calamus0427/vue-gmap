<template>
<div>
      <div>当前点击位置：{{poi.lat}},{{poi.lng}},城市为: {{ address }}</div>
      <g-map :vid="vid" @click="choose" >
      </g-map>
</div>
</template>

<script>
import GMap from '@/components/gMap'


  export default {
    name: 'demo3D',
    components: { GMap },
    data () {
      return {
        vid:'amap-vue',
        poi:{lat:'',lng:''},
        address:''
      }
    },
    mounted(){
    },
    methods:{
      choose(e){
        this.poi.lat = e.lat ;
        this.poi.lng = e.lng ;
        this.address = e.address;
      }
    }
  }
</script>

<style scoped>
  .amap-demo {
    height: 300px;
  }
</style>
