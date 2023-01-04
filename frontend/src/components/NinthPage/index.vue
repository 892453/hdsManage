<template>
  <div class="v">
    <div class="a">
      <div class="b">竹园1号书院</div>
      <div class="c">活动室管理年度关键词</div>
      <div class="d">
        <span v-if="openintimeRate >= 90">
          早起
        </span>
        <span v-else-if="lockintimeRate >= 90">
          夜猫
        </span>
        <span v-else>
          加油
        </span>
      </div>
      <div class="e">
        <span v-if="ownopenRate >= 33">
          中流砥柱
        </span>
        <span v-else-if="ownlockRate >= 33">
          中流砥柱
        </span>
        <span v-else>
          继续加油
        </span>
      </div>
      <div class="f">情比金坚</div>
      <div class="h">
        <img class="p" src="@/assets/images/3.png" />
        <img class="y" src="@/assets/images/cloud2.png" />
      </div>
      <!-- <div class="i">感谢这学期的辛苦付出</div> -->
      <div class="j">书院因你而更美丽整洁</div>
      <div class="k">期待下学期与你再次相会</div>
      <div class="l">顺祝元旦快乐！</div>
      <div class="m">注：数据为日常统计产生，仅供参考，无实际意义</div>
    </div>
  </div>
</template>

<script>
import { getAPI } from '@/axios.api'
import data from "@/data.json";
export default {
  data() {
    return {
      ...data,
    };
  },
  computed: {
    userTotal(){
      // return JSON.parse(this.$store.state.userTotal)
      return this.$store.state.userTotal
    },
    openintimeRate(){
      return (this.$store.state.userData["openintime"]/this.$store.state.userData["allopennum"]) * 100
    },
    lockintimeRate(){
      return (this.$store.state.userData["lockintime"]/this.$store.state.userData["alllocknum"]) * 100
    },
    ownopenRate(){
      return (this.$store.state.userData["ownopennum"]/this.$store.state.userData["allopennum"]) * 100
    },
    ownlockRate(){
      return (this.$store.state.userData["ownlocknum"]/this.$store.state.userData["alllocknum"]) * 100
    },
  },
  filters: {
    numFilter (value) {
      // 截取当前数据到小数点后两位
      let realVal = parseFloat(value).toFixed(0)
      return realVal
    }
  },
  // created() {
  //   const userData = {
  //     'name': this.$store.state.name,
  //   }
  //   getAPI.post('/api/account/userdata/', userData, {
  //     headers: {
  //       'Authorization': `Bearer ${this.$store.state.accessToken}`,
  //     }
  //   })
  //       .then(res => {
  //         // this.$store.state.userTotal = res.data.userTotal;
  //         this.$store.state.userTotal = JSON.parse(res.data);
  //       })
  //       .catch(err => console.error(err))
  // }
};
</script>
<style scoped>
.v {
  background-image: linear-gradient(#ff7853, #ffd287);
  height: 100%;
  color: #73e373;
}
.a {
  margin-top: 10vh;
  height: 60vh;
  border: 5px #73e373 solid;
  background: #fef9f9;
  padding: 5vw;
}
.b {
  font-size: 8vw;
  padding-bottom: unset;
}
.c {
  font-size: 4vw;
  font-weight: 700;
  padding-bottom: 5vh;
}
.d {
  /* margin-top: 20vm; */
  color: rgb(27, 175, 81);
  font-weight: bold;
  font-size: 10vw;
}
.e {
  color: rgb(55, 19, 141);
  font-weight: bold;
  font-size: 10vw;
}
.f {
  color: rgb(214, 24, 24);
  font-weight: bold;
  font-size: 10vw;
}
.p {
  position: absolute;
  width: 40vw;
  left: 47vw;
  top: 20vh;
  z-index: 2;
}
.y {
  position: absolute;
  width: 60vw;
  left: 36vw;
  top: 25vh;
}
.i,
.j,
.k,
.l{
  text-align: center;
  color: black;
  font-size: 4vw;
  padding-top: 1vh;
}
.i{
  animation-name: slide-top;
  animation-duration: 1s;
  animation-delay: .5s;
  animation-fill-mode: backwards;
}
.j{
  animation-name: slide-top;
  animation-duration: 1s;
  animation-delay: 1.5s;
  animation-fill-mode: backwards;
}
.k{
  animation-name: slide-top;
  animation-duration: 1s;
  animation-delay: 2.5s;
  animation-fill-mode: backwards;
}
.l{
  color:#ff7853;
  animation-name: slide-top;
  animation-duration: 1s;
  animation-delay: 3.5s;
  animation-fill-mode: backwards;
}
.m{
  position: absolute;
  color: rgb(255, 255, 255);
  font-size: 2vw;
  left: 27vw;
  top: 75vh;
  z-index: 2;
}
</style>
