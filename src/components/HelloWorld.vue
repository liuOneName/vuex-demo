<template>
  <div class="hello">
    {{msg}}
    <h3>
      {{$store.state.count}} -- {{count}}
    </h3>
    <div>
      <button @click='add(10)'>加10</button>
      <button @click='reduce'>减少</button>
      <button @click='test'>test</button>
    </div>
    <hr/>
    <Test />
    <hr>
    <div>
      {{test1}}
    </div>
    <hr>
    <div> <button @click='aa("Test")'>test</button> <button @click="aa('KeepAlives')">keep alive</button></div>
    <keep-alive>
      <component :is='currentView' />
    </keep-alive>
  </div>
</template>

<script>
// import store from '@/vuex/store'; //在main 入口文件中引入了
import { mapState, mapMutations, mapGetters } from 'vuex';
import Test from '@/components/Test';
import KeepAlives from '@/components/KeepAlives';

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hello World',
      currentView: 'Test',
    }
  },
  // computed: {
  //   count(){
  //     return this.$store.state.count;
  //   }
  // },
  // computed: mapState({
  //   count: state => state.count
  // }),
  computed: {
    ...mapState(['count']),//最实用的方法
    ...mapGetters(['count']),
    test1(){
      return '爱你哟'
    }
  },
  methods: {
    ...mapMutations(['add', 'reduce']),
    test(){
      console.log('test');
    },
    aa(data){
      console.log(data);
      this.currentView = data;
    }
  },
  components: {
    Test,
    KeepAlives,
  },
  // store,
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
