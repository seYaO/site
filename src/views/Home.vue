<template>
  <div class="home">
    <div>HelloWorld</div>
    <div class="clip-path"></div>
  </div>
</template>

<style>
.home {
  font-size: 32px;
  padding: 40px;
  text-align: center;
}
.clip-path {
  width: 100px;
  height: 100px;
  background-color: red;
  /* -webkit-clip-path: polygon(50% 0px, 100% 100%, 0px 100%); */
  /* -webkit-clip-path: polygon(0px 50%, 50% 0px, 100% 50%, 50% 100%, 0px 50%); */
  -webkit-clip-path: polygon(0% 60%, 20% 0%, 60% 0%, 40% 60%, 0% 60%);
  /* -webkit-clip-path: polygon(50% 0px, 100% 100%, 0px 100%); */
  /* -webkit-clip-path: polygon(50% 0px, 100% 100%, 0px 100%); */
}
</style>


<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
let BaaS = require("minapp-sdk");
import config from "../utils/config";
let cacheKey = "ifanrx_clientID";

export default {
  name: "home",
  components: {
    // HelloWorld
  },
  data() {
    return {
      showBudget: false,
      active: 0,
      value: ""
    };
  },
  beforeMount() {
    // document.title = '定制游'
  },
  mounted() {
    console.log("home mounted");
    BaaS.init(config.clientID);
    this.initData();
  },
  methods: {
    initData() {
      let Chord = new BaaS.TableObject("books");
      let query = new BaaS.Query();
    //   Chord.find();
      Chord.setQuery(query).find().then(res => {
          console.log(res)
      })
    }
  }
};
</script>
