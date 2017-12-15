<template>
  <div class="getCar">
    <b-container>
      <b-row>
        <b-col></b-col>
        <b-col sm="6">
          <b-form @submit="onSubmit" @reset="onReset">
            <b-form-group id="getCarInputGroup"
                          label="Car ID:"
                          description="ID of the car you want to review">
              </b-form-input>
              <b-form-input id="carIdInput"
                            type="text"
                            v-model="form.id"
                            required
                            placeholder="12345">
              </b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Load</b-button>
            <b-button v-on:click="postCar()" variant="primary" :disabled="saveDisabled">Save</b-button>
          </b-form>         
        </b-col>
        <b-col></b-col>
    </b-row>
    <b-row>
        <b-col></b-col>
        <b-col sm="6">
          <b-form>
            <b-form-group id="CarBrandInputGroup"
                          label="Brand:"
                          description="Brand of the car"
                          class="text-left">
              </b-form-input>
              <b-form-input id="carIdInput"
                            type="text"
                            v-model="car.brand"
                            placeholder="brand">
            </b-form-input>
            </b-form-group>
            <b-form-group id="CarModelInputGroup"
                          label="Model:"
                          description="Model of the car"
                          class="text-left">
              </b-form-input>
              <b-form-input id="carIdInput"
                            type="text"
                            v-model="car.model"
                            placeholder="model">
            </b-form-input>
            </b-form-group>
          </b-form>         
        </b-col>
        <b-col></b-col>
    </b-row>
    </b-container>
  </div>
</template>

<script>
import uhuchainApi from '../mixins/uhuchainApi.js'
export default {
  name: 'getCar',
  data () {
    return {
      form: {
        id: ''
      },
      saveDisabled: true
    }
  },
  mixins: [uhuchainApi],
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.getCar(this.form.id)
      this.saveDisabled = false
      // alert(JSON.stringify(this.form))
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.id = ''
      // Trick to reset/clear native browser form validation state
      this.$nextTick(() => { this.show = true })
    }
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
