<template>
  <div>
    <div ref="lineChart" style="width: 100%; height: 500px;"></div>
  </div>

</template>

<script>
  export default {
    name:'liness',
    data(){
      return{
        mychart:null,
        option:{}
      }
    },

    mounted(){
      this.init()
      this.updateChart()
      window.addEventListener('resize', this.handleResize)
    },

    methods:{
      init(){
        this.mychart = this.$echarts.init(this.$refs.lineChart)
      },

      updateChart(){
        this.option={
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
          }]
        }
        this.mychart.setOption(this.option)
      },
      handleResize () {
        this.mychart.resize()
      },
    },
    beforeDestroy() {
      this.mychart && this.mychart.dispose()
      this.mychart = null
      window.removeEventListener('resize', this.handleResize)
    }

  }
</script>

<style>

</style>
