<template>
    <div>
        {{count}}
        <div>
            <button @click='add(1)'>加1</button>
            <button @click='reduce'>减少</button>
        </div>
    </div>
</template>

<script>
    // import store from '@/vuex/store'; //在main 入口文件中引入了
    import { mapState, mapMutations } from 'vuex';

    export default {
        data(){
            return {
                msg: 'Test',
            }
        },
        computed: {
            ...mapState(['count']),
        },
        methods: {
            ...mapMutations(['add', 'reduce']),
        },
        // store,
    }
</script>