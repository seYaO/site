<template>
    <div class="home">
        HelloWorld
    </div>
</template>

<style>
.home{
    font-size: 32px;
    padding: 40px;
    text-align: center
}
</style>


<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
let BaaS = require('minapp-sdk')
import config from '../utils/config'
let cacheKey = 'ifanrx_clientID'

export default {
    name: "home",
    components: {
        // HelloWorld
    },
    data() {
        return {
            showBudget: false,
            active: 0,
            value: '',
        }
    },
    beforeMount() {
        document.title = '定制游'
    },
    mounted() {
        console.log('home mounted')
         BaaS.init(config.clientID)
        this.initData()
    },
    methods: {
        initData(){
            let Chord = new BaaS.TableObject('bookshelf')
            let query = new BaaS.Query()
            Chord.find()
            // Chord.setQuery(query).find().then(res => {
            //     console.log(res)
            // })
        },
    }
};
</script>
