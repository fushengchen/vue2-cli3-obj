<template>
    <div>
        <div class="wrap">
            <!-- <home></home> -->

            <!-- <RankHear></RankHear> -->
            <!-- <Rankhome></Rankhome> -->

            <!-- <Servershome></Servershome> -->

            <!-- <MyHome></MyHome> -->

            <router-view></router-view>
            <foot></foot>  
        <!-- {{msg}} -->
        </div>
    </div>
</template>


<script>
import home from './components/home';
import foot from './components/foot';   //以上是引入home和foot组件，构成一个页面 然后进入到home组件中引入其他组件，构成home页面
// import RankHear from './components/RankHear';
// import Rankhome from './components/Rankhome';
// import Servershome from './components/Servershome';
// import MyHome from './components/MyHome';


export default {
    name:'app',
    // date(){return {msg:'app'}},
    components:{home,foot},

//     beforeCreate(){console.log('beforeCreate')},
//     created(){console.log('created')},
//     beforeMount(){console.log('beforeMount')},
//     mounted(){console.log('mounted')},
//     beforeUpdate(){console.log('beforeUpdate')},
//     updated(){console.log('updated')},
}
</script>


