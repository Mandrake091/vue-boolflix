<template>
        <div>
       
        </div>

</template>

<script>
// import store from '../store';
export default {
    name:'SearchBar',
    data(){
        return {  
            search:'',   
        }
    },
    computed:{

    },
    methods:{
        find(){
            this.$emit('performSearch', this.search)
            this.search = ''
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
