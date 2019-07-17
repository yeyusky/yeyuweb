<template>
  <div class="main">
  {{msg}}
  </div>
  
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main{
    font-size:60px;
    color:red;
  }
</style>
