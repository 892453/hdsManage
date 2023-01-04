<template>
  <div class="box">
    <div class="title">
      <div class="a">2022</div>
      <div class="b">
        <img class="logo" src="@/assets/images/zy1logo.png" />
      </div>
      <div class="c">活动室管理报告</div>
    </div>
    <div class="human">
      <div class="boy">
        <img class="a" src="@/assets/images/2.png" />
        <img class="b" src="@/assets/images/cloud1.png" />
      </div>
      <div class="girl">
        <img class="a" src="@/assets/images/1.png" />
        <img class="b" src="@/assets/images/cloud2.png" />
      </div>
    </div>
    <div class="star">
      <div class="circle" @click="$emit('start')">
        <div class="left" @click="$emit('start')">→</div>
      </div>
      <div class="label" @click="$emit('start')">点击开启</div>
    </div>
  </div>
</template>

<script>
export default {
  // computed是界于created和mounted之间发生的，此时正是页面进行渲染的时候
  computed: {
    userData(){
      console.log("first page usertotal::",this.$store.state.userData)
      // return JSON.parse(this.$store.state.userTotal)
      return this.$store.state.userData
    }
  },
};
</script>

<style scoped>
.box {
  padding: 5vw;
  padding-top: 10vw;
  overflow: hidden;
}
.title {
  color: white;
  line-height: 1;
  display: grid;
  grid-template-columns: max-content 1fr;
}
.title .a {
  font-size: 25vw;
}
.title .b {
  padding-top: 1em;
  font-size: 5vw;
}
.title .c {
  font-size: 10vw;
}
.human .boy {
  position: relative;
  top: -10vh;
  animation: up-down 2s ease-in-out infinite both;
}
.human .girl {
  position: relative;
  top: -20vh;
  left: 30vw;
  animation: up-down 2s ease-in-out infinite both;
}
@keyframes up-down {
  0% {
    transform: translateY(1vh);
  }
  50% {
    transform: translateY(0vh);
  }
  100% {
    transform: translateY(1vh);
  }
}
.human .boy .a {
  width: 40vw;
  position: relative;
  left: -10vw;
  top: 15vh;
  z-index: 2;
}
.human .boy .b {
  width: 50vw;
  position: relative;
  left: -30vw;
  top: 10vh;
}

.human .girl .a {
  width: 57vw;
  position: relative;
  left: 5vw;
  top: 15vh;
  z-index: 2;
}
.human .girl .b {
  width: 65vw;
  position: relative;
  left: 11vw;
  top: -2vh;
}

.star {
  position: absolute;
  bottom: 10vh;
  left: calc(50vw - 15vw);
}
.star .circle {
  width: 30vw;
  height: 30vw;
  border-radius: 100%;
  background-color: #f04b3f;
  text-align: center;
  font-size: 25vw;
  color: white;
  animation: hvr-ripple-out 2s ease-in-out infinite alternate both;
}
@keyframes hvr-ripple-out {
  100% {
    transform: scale(1.05);
  }
}
.star .label {
  font-size: 5vw;
  text-align: center;
  font-weight: lighter;
}
</style>
