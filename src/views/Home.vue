<template>
  <v-container fill-height class="home-container">
    <v-row 
      justify="space-around"
      align="center"
      class="flex-column full-height"
    >
      <v-col>
        <homegauge></homegauge>
      </v-col>
      <v-col >
        <h2 class="welcome-title">COVID-19<br/>Risk Assessment</h2>
      </v-col>
      <v-col class="align-start-btn">
        <v-btn 
          color="red"
          fab 
          x-large
          to="/riskform">
          <v-icon x-large>mdi-hospital-box</v-icon>
        </v-btn>
        <p>Get Started</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import homegauge from '../components/HomeGauge'

export default {
  name: 'Home',
  components: {
    homegauge,
  }
}
</script>

<style scoped>
.welcome-title{
  text-align: center;
}
.align-start-btn{
  text-justify: center;
  text-align: center;
}
.full-height{
  height: 100vw;
}
.home-container{
  padding-top: 5vh;
  padding-bottom: 5vh;
}
</style>