var URL_BASE = process.env.UHUCHAIN_API_URL
var URL_CARS = URL_BASE + '/cars'
var URL_STATUS = URL_BASE + '/status'

export default {
  data () {
    return {
      car: 'this is a car',
      status: 'not available'
    }
  },
  methods: {
    getCar: function (id) {
      console.log('get a car!')
      this.$http.get(URL_CARS + '/' + id).then(response => {
        this.car = response.body
      }, response => {
        this.car = {}
        console.log('error:' + response.body)
      })
    },
    postCar: function () {
      console.log('save a car!')
      this.$http.post(URL_CARS, this.car, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          console.log('car saved')
        }, response => {
          console.log('error:' + response.body)
        })
    },
    getStatus: function (id) {
      console.log('get status!')
      this.$http.get(URL_STATUS).then(response => {
        this.status = response.body
      }, response => {
        console.log('error')
      })
    }
  }
}
