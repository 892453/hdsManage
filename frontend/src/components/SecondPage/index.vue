<template>
  <div>
    <div class="a">亲爱的<span class="value">{{userData["name"]}}</span>同学</div>
    <div class="b">这一学期在你和大家的共同努力下</div>
    <div class="c">你和书院其他<span class="value">44</span>位小伙伴</div>
    <div class="d">共同管理了书院<span class="value">11</span>间活动室</div>
    <div class="e">维护了书院活动室<span class="value">70</span>天的正常运转</div>
    <div class="f">感谢你们辛苦付出 </div>
    <div class="g">出发去回顾一下这学期吧~</div>
  </div>
</template>

<script>
export default {
  // computed是界于created和mounted之间发生的，此时正是页面进行渲染的时候
  computed: {
    userData(){
      // console.log("second page usertotal::",this.$store.state.userData)
      // return JSON.parse(this.$store.state.userTotal)
      return this.$store.state.userData
    }
  },
};
</script>

<style scoped>
.a,
.b,
.c,
.d,
.e,
.f,
.g{
  text-align: center;
  color: white;
}

.a {
  font-size: 6vw;
  padding-top: 10vh;
  animation-name: slide-top;
  animation-duration: 1s;
  animation-delay: .5s;
  animation-fill-mode: backwards;
}
.b {
  font-size: 5vw;
  padding-top: 3vh;
  animation-name: slide-top;
  animation-duration: 1s;
  animation-delay: 1s;
  animation-fill-mode: backwards;
}
.c {
  font-size: 5vw;
  padding-top: 3vh;
  animation-name: slide-top;
  animation-duration: 1s;
  animation-delay: 1.5s;
  animation-fill-mode: backwards;
}
.d {
  font-size: 5vw;
  padding-top: 3vh;
  animation-name: slide-top;
  animation-duration: 1s;
  animation-delay: 2.0s;
  animation-fill-mode: backwards;
}
.e {
  font-size: 5vw;
  padding-top: 3vh;
  animation-name: slide-top;
  animation-duration: 1s;
  animation-delay: 2.5s;
  animation-fill-mode: backwards;
}
.f {
  font-size: 6vw;
  padding-top: 3vh;
  font-weight: lighter;
  animation-name: slide-top;
  animation-duration: 1s;
  animation-delay: 3.0s;
  animation-fill-mode: backwards;
}
.g{
  font-size: 6vw;
  padding-top: 3vh;
  font-weight: lighter;
  animation-name: slide-top;
  animation-duration: 1s;
  animation-delay: 3.0s;
  animation-fill-mode: backwards;
}
</style>
