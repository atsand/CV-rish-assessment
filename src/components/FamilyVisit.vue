<template>
  <v-container>
    <v-row>
      <v-col cols="4" align-self="center">
        <h3>Guests</h3>
      </v-col>
      <v-col cols="8">
        <v-text-field
          v-model="numberOfPeople"
          type="number"
          max-width="50%"
        ></v-text-field>
      </v-col>
      <v-col cols="4" align-self="center">
        <h3>Duration</h3>
      </v-col>
      <v-col cols="4">
        <v-text-field
          v-model="durationHours"
          label="Hours"
          type="number"
          @change="hourRange()"
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field
          v-model="durationMinutes"
          label="Minutes"
          type="number"
          @change="minuteRange()"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row 
      dense
      justify="center">
      <v-col cols="8" align-self="center">
        <h3>Indoor Event</h3>
      </v-col>
      <v-spacer></v-spacer>
      <v-col 
        cols="2"
      >
        <v-switch
          v-model="indoor"
        ></v-switch>
      </v-col>
    </v-row>
    <v-row 
      dense
      justify="center">
      <v-col cols="8" align-self="center">
        <h3>Shared Food</h3>
      </v-col>
      <v-spacer></v-spacer>
      <v-col 
        cols="2"
      >
        <v-switch
          v-model="sharedFood"
        ></v-switch>
      </v-col>
    </v-row>
    <v-row 
      dense
      justify="center">
      <v-col cols="8" align-self="center">
        <h3>Social Distancing</h3>
      </v-col>
      <v-spacer></v-spacer>
      <v-col 
        cols="2"
      >
        <v-switch
          v-model="distancing"
        ></v-switch>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'FamilyVisit',
  components: {
    
  },
  data: () => ({
    indoor: false,
    sharedFood: false,
    distancing: false,
    durationMinutes: 0,
    durationHours: 0,
    numberOfPeople: 0,
  }),
  methods:{
    hourRange () {
      if(this.durationHours < 0 || this.durationHours === ''){
        this.durationHours = 0
      }
    },
    minuteRange () {
      if(this.durationMinutes > 60){
        this.durationMinutes = 60;
      }
      if(this.durationMinutes < 0 || this.durationMinutes === ''){
        this.durationMinutes = 0
      }
    },
  },
  computed:{
    duration () {
      return (parseInt(this.durationHours) * 60) + parseInt(this.durationMinutes);
    }
  }
}
</script>
