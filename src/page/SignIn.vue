<template>
    <div>
        <button @click="btn">11111</button>
    </div>
</template>
<script>
export default {
    name:'SignIn',
    methods:{
        btn(){
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="less">
    
</style>