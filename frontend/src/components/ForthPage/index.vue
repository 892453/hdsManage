<template>
  <div>
    <div class="a">
      你们总共开门
      <span class="value"> {{ userData["allopennum"]}} </span>
      次
    </div>
    <div class="b">
      其中你开门
      <span class="value"> {{ userData["ownopennum"]}} </span>
      次
    </div>
    <div class="b">
      按时开门
      <span class="value"> {{ userData["openintime"]}} </span>
      次
    </div>

    <div class="c">
     准时率为
     <span class="value"> {{ numFilter(intimeRate) }}%</span>
    </div>
    <div class="c">
      <span v-if="intimeRate == 100">
        什么都阻挡不了一颗早起的心
      </span>
      <span v-else-if="intimeRate >= 90">
        基本算是全勤啦
      </span>
      <span v-else-if="intimeRate < 90">
        想必平时有点忙
      </span>
    </div>
    <div class="d">
      <img class="e1" :src="require('@/assets/hds/' +imgUrl+'.jpg')"/>
    </div>
    <div class="e">
      这样的场景你应该再也熟悉不过了~
    </div>
  </div>
</template>

<script>
export default {
  // computed是界于created和mounted之间发生的，此时正是页面进行渲染的时候
  computed: {
    userData(){
      // console.log("third page userdata::",this.$store.state.userData)
      // return JSON.parse(this.$store.state.userTotal)
      return this.$store.state.userData
    },
    intimeRate(){
      return (this.$store.state.userData["openintime"]/this.$store.state.userData["allopennum"]) * 100
    }
  },
  methods:{
    numFilter (value) {
      // console.log("value::",value);
      // 截取当前数据到小数点后两位
      let realVal = parseFloat(value).toFixed(2)
      return realVal
    }
  },
  data(){
    return {
      imgUrl:this.$store.state.userData["tup1"]
    }
  }
  
};
</script>

<style scoped>
.a,
.b,
.c,
.d,
.e,
.f {
  text-align: center;
  color: white;
}

.a {
  font-size: 5vw;
  padding-top: 15vh;
  animation-name: slide-top;
  animation-duration: 1s;
  animation-delay: .5s;
  animation-fill-mode: backwards;
}
.b{
  font-size: 5vw;
  animation-name: slide-top;
  animation-duration: 1s;
  animation-delay: 1s;
  animation-fill-mode: backwards;
}
.c{
  font-size: 5vw;
  animation-name: slide-top;
  animation-duration: 1s;
  animation-delay: 1.5s;
  animation-fill-mode: backwards;
}
.d{
  width: 60vw;
  margin: auto;
  padding-top: 2vh;
  animation-name: slide-top;
  animation-duration: 1s;
  animation-delay: 2s;
  animation-fill-mode: backwards;
}
.e {
  font-size: 5vw;
  padding-top: 2vh;
  animation-name: slide-top;
  animation-duration: 1s;
  animation-delay: 2.5s;
  animation-fill-mode: backwards;
}

</style>
