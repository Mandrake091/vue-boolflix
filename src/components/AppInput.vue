<template>

    <div class="container">
        <div class="row justify-content-end align-items-center">
            <div class="col-10 col-md-6 col-lg-4">
            <div class="input-group">
            <input type="text" class="form-control form-control-sm " placeholder="Search Movie" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="inputText">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="search">Search</button>
        </div>

            </div>
        </div>
    </div>
</template>

<script>
import store from '../store';
export default {
    name:'AppInput',
    data(){
        return {
            inputText:""
        }
    },
    computed:{

    },
   
    methods:{      
        changeSelect(){
            this.$emit("performSearch", this.inputText)
            console.log(this.inputText)
        },
        search(){
            store.setSearch(this.inputText)
        }
    }
}
</script>
<style>

</style>
