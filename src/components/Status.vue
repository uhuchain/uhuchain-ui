<template>
  <div class="status">
    <h1>{{ msg }}</h1>
    <p>{{ status }}</p>
    
  </div>
</template>

<script>
import uhuchainApi from '../mixins/uhuchainApi.js'
export default {
  name: 'status',
  data () {
    return {
      msg: 'Uhuchain status'
    }
  },
  mixins: [uhuchainApi],
  mounted () {
    this.getStatus()
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
