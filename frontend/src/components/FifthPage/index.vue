<template>
  <div>
    <div class="a">
      你们一起锁门
      <span class="value"> {{ userData["alllocknum"]}} </span>
      次
    </div>
    <div class="b">
      其中你锁门
      <span class="value"> {{ userData["ownlocknum"]}} </span>
      次
    </div>
    <div class="b">
      按时锁门
      <span class="value"> {{ userData["lockintime"]}} </span>
      次
    </div>

    <div class="c">
     准时率为
     <span class="value"> {{ numFilter(intimeRate) }}%</span>
    </div>
    <div class="c">
      <span v-if="intimeRate == 100">
        你们真的是太棒了
      </span>
      <span v-else-if="intimeRate >= 90">
        基本算是全勤啦
      </span>
      <span v-else-if="intimeRate < 90">
        相必你们平时都很忙
      </span>
    </div>
    <div class="d">
      <img class="e1" :src="require('@/assets/hds/' +imgUrl+'.jpg')" />
    </div>
    <div class="e">还记得上次被催促去锁门是哪天晚上吗~
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
      return (this.$store.state.userData["lockintime"]/this.$store.state.userData["alllocknum"]) * 100
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
      imgUrl:this.$store.state.userData["tup2"]
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
