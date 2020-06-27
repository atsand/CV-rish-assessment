<template>
  <v-container>
    <v-row 
      justify="center"
      align="center"
    >
      <v-col cols="12">
        <homegauge></homegauge>
      </v-col>
      <v-col
        cols="8"
      >
        <h2 class="welcome-title">COVID-19<br/>Risk Assessment</h2>
      </v-col>
      <v-col cols="12" class="align-start-btn">
        <v-btn 
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
</style>