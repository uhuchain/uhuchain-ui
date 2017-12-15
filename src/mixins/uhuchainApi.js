export default {
  data () {
    return {
      getCarResult: 'this is a car'
    }
  },
  methods: {
    getCar: function (id) {
      console.log('get a car!')
      this.$http.get('http://localhost:3333/v1/cars/' + id).then(response => {
        this.getCarResult = response.body
      }, response => {
        console.log('error')
      })
    }
  }
}
