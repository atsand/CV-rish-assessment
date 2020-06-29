<template>
  <v-dialog
    v-model="riskDialog"
  >
    <template v-slot:activator="{ on }">
      <v-btn
        icon
        v-on="on"
      >
        <v-avatar 
          :color="riskScore > 33 ? riskScore > 66 ? 'red' : 'orange' : 'green' "
          size="40">
          <span>{{ riskScore }}</span>
        </v-avatar>
      </v-btn>
    </template>    
      <v-card>
        <v-card-title>
          Risk Score Details
        </v-card-title>
        <v-card-text>
          Your Risk Score is
          <v-avatar 
            v-if="riskScore"
            :color="riskScore > 33 ? riskScore > 66 ? 'red' : 'orange' : 'green' "
            size="40">
            <span>{{ riskScore }}</span>
          </v-avatar>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn 
            @click="riskDialog = false"
          >
            OK
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
  </v-dialog>
</template>

<script>

export default {
  name: 'RiskIcon',
  components: {
    
  },
  data: () => ({
    riskDialog: false
  }),
  computed:{
    riskScore () {
      return this.$store.getters.getRiskScore
    },
  }
}
</script>
