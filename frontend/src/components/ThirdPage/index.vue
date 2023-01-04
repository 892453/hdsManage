<template>
  <div>
    <div class="a">
      和你并肩管理
      <span class="value"> {{ userData["roomname"] }}</span>
      的小伙伴是
      <span class="value"> {{ userData["pattern"] }} </span>
    </div>
    <div class="b">
      你们一起开门<span class="value"> {{ userData["allopennum"] }} </span>次
    </div>

    <!-- <div class="c">
      <span v-if="userTotal['total'] >= 60">
        改造委员会当场留下了感动的泪水！
        </span>
      <span v-else-if="userTotal['total'] >= 10">
          平时生活也很忙碌吧！但火星一直都在哟
        </span>
      <span v-else>
          火星有点寂寞了，下次记得多陪陪人家~
        </span>
    </div> -->
    <div class="c">
      一起锁门<span class="value"> {{ userData["alllocknum"] }} </span>次
    </div>
    <div class="d">
      一起打扫卫生<span class="value"> {{ userData["cleannum"] }} </span>次
    </div>
    <!-- <div class="d">
      你最喜欢的模式是
      <span class="value"> {{ userTotal["fav"] }}P </span><br>

      <span v-if="userTotal['fav'] === '2P'">
      看来你更喜欢二人世界的甜蜜岁月
      </span>
      <span v-else>
        看来你更喜欢风云莫测的多人运动
      </span>
    </div> -->
    <div class="e">
      <img class="e1" src="@/assets/images/panda.png" />
    </div>
    <!-- <div class="f">
      书院因你们而变得更美~
    </div> -->
  </div>
</template>

<script>
import { getAPI } from '@/axios.api'
import data from "@/data.json";
/*
export default {
  // data一般用来存放vue中的变量，通过return将数据返回到created中
  data() {
    return {
      ...data,
    };
  },
  // computed是界于created和mounted之间发生的，此时正是页面进行渲染的时候
  computed: {
    userTotal(){
      console.log("third page usertotal::",this.$store.state.userTotal)
      // return JSON.parse(this.$store.state.userTotal)
      return this.$store.state.userTotal
    }
  },
  // 首先created是最先执行的，它是一个生命周期，也叫钩子函数，用于页面还没加载完毕时发送请求，初始化data里的值
  created() {
    const userData = {
      'name': (this.$store.state.name).toLowerCase(),
    }
    getAPI.post('/api/account/userdata/', userData, {
      headers: {
        'Authorization': `Bearer ${this.$store.state.accessToken}`,
      }
    })
        .then(res => {
          // this.$store.state.userTotal = res.data.userTotal;
          this.$store.state.userTotal = JSON.parse(res.data);
        })
        .catch(err => console.error(err))
  }
};
*/

export default {
  // computed是界于created和mounted之间发生的，此时正是页面进行渲染的时候
  computed: {
    userData(){
      // console.log("third page userdata::",this.$store.state.userData)
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
.d {
  font-size: 5vw;
  animation-name: slide-top;
  animation-duration: 1s;
  animation-delay: 2s;
  animation-fill-mode: backwards;
}
.e{
  width: 60vw;
  margin: auto;
  padding-top: 2vh;
  animation-name: slide-top;
  animation-duration: 1s;
  animation-delay: 2.5s;
  animation-fill-mode: backwards;
}
.f {
  padding-top: 2vh;
  font-size: 6vw;
  animation-name: slide-top;
  animation-duration: 1s;
  animation-delay: 2.5s;
  animation-fill-mode: backwards;
  z-index: 2;
  position: absolute;
  left: auto;
}

</style>
