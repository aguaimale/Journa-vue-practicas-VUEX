<template>
    <button class="btn btn-primary">
        <i class="fa fa-2x"
           :class="icon"
        ></i>
    </button>
</template>

<script>
export default{
    props:{
        icon:{
            type: String,
            default:'fa-plus',

        }
    }
}

</script>

<style lang="scss" scoped>

button{
    position:fixed;
    bottom:20px;
    right:20px;
    width:75px;
    height:75px;
    border-radius: 100%;
}

</style>