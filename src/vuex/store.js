import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    count: 1,
}

//同步处理state的方法
const mutations = { //fuck 只能是这个名字
    add(state, n) {
        state.count += n;
    },
    reduce(state) {
        state.count--;
    }
}

//异步处理state的方法
const actions = {
    addAction({commit}, n){
        commit('add', n);
    },
   reduceAction({commit}){
        commit('reduce')
    }
}

//每次获取 count 时 都会进行下面的操作
const getters = {
    count: (state) => state.count += 100,
}

//分组
const moduleA = { //用了模块化 好像不能用 mapState(['count']), 其他应该可以用，  fuck？？
    state,
    mutations,
    getters,
    actions,
}

// export default new Vuex.Store({
//     modules: {
//         a: moduleA,
//     }
// })
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
})