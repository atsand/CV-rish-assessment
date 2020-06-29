<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-text-field
          label="My Age"
          v-model="age"
          type="number"
          >
        </v-text-field>
      </v-col>
    </v-row>
    <v-row 
      justify-sm="center"
    >
      <v-col  
        cols="12"
        sm="12" 
      >
        <h2>Health Issues:</h2>
      </v-col>
      <v-col 
        md="6"
        cols="12"
        class="py-0 pr-sm-6"
        v-for="option in healthIssueOptions" 
        :key="option.name"
      >
        <v-switch 
          v-model="healthIssues" 
          :label=option.name 
          :value=option.value 
          inset
        ></v-switch>
      </v-col>
    </v-row>
    <v-row
      justify-sm="center"
    >
      <v-col
        cols="12"
        sm="12"
      >
        <h2>Habbits:</h2>
      </v-col>
      <v-col
        md="6"
        cols="12"
        class="py-0"
        v-for="option in generalHabbits" 
        :key="option.name"
      >
        <v-switch 
          :label="option.name" 
          :value="option.value"
          v-model="habbits"
          inset
        ></v-switch>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        sm="12"
      >
        <v-select
          label="Follow CDC Guidelines"
          :items="guidelineOptions"
          item-text="name"
          item-value="value"></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="3">
        <v-btn primary to="/">
          Home
        </v-btn>
      </v-col>
      <v-col cols="3">
        <v-btn primary>
          Save
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'MyProfile',
  components: {
  },
  data: () => ({
    age: null,
    healthIssues: [],
    habbits: [],
    generalHabbits: [
      {name: "Wear cloth masks",
      value: "Wear cloth masks"},
      {name: "Wash hands regularly",
      value: "Wash hands regularly"},
      {name: "Avoid direct contact",
      value: "Avoid direct contact"},
      {name: "Social distance",
      value: "Social distance"},
    ],
    healthIssueOptions:[
      {name: "Chronic lung disease",
      value: "Chronic lung disease"},
      {name: "Severe asthma",
      value: "Severe asthma"},
      {name: "Serious heart conditions",
      value: "Serious heart conditions"},
      {name: "Immunocompromised",
      value: "Immunocompromised"},
      {name: "Severe obesity",
      value: "Severe obesity"},
      {name: "Diabetes",
      value: "Diabetes"},
      {name: "Chronic kidney disease",
      value: "Chronic kidney disease"},
      {name: "Liver disease",
      value: "Liver disease"},
    ],
    guidelineOptions: [
      {name:"Always",
      value:"Always"},
      {name:"Usually",
      value:"Usually"},
      {name:"Sometimes",
      value:"Sometimes"},
      {name:"Never",
      value:"Never"},
    ],
  }),
  methods:{
    method1 () {

    },
  }
}
</script>
<style scoped>
</style>