<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <h2 class='m-1'> Hola Mundo</h2>
    <button @click="goToDaybook" class="btn btn-primary m-1">PRIMARY</button>
    <button @click="goToDaybook" class="btn btn-secondary m-1"> SECONDARY</button>
    <button @click="goToDaybook" class="btn btn-success m-1">SUCCESS</button>
  </div>
</template>
 <script>
export default {
  methods:{
    goToDaybook(){
      this.$router.push({name:'no-entry'})
    }
  }
}

</script>
