<template>
  <div class="status">
    <h1>{{ msg }}</h1>
    <p>{{ status }}</p>
    
  </div>
</template>

<script>
export default {
  name: 'status',
  data () {
    return {
      msg: 'Uhuchain status',
      status: ''
    }
  },
  mounted () {
    this.$http.get('http://localhost:3333/v1/status').then(response => {
      // get body data
      this.status = response.body
    }, response => {
      console.log('error')
    })
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
