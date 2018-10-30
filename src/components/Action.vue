<template>
    <div>
        <h3>{{msg}}</h3>
        <div>
            <p>{{count}}</p>
            <div>
                <button @click='test'>action 加2</button>
                <button @click='reduceAction'>action 减1</button>
            </div>
        </div>
    </div>
</template>

<script>
    // import store from '@/vuex/store';  //在main 入口文件中引入了
    import { mapState, mapActions } from 'vuex';
    export default {
        data(){
            return {
                msg: '异步 action',
            }
        },
        // store,
        computed: {
            ...mapState(['count']),
        },
        methods: {
            ...mapActions(['addAction', 'reduceAction']),
            test(){
                this.addAction(2);
            }
        }
    }
</script>