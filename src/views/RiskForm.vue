<template>
  <v-container>
    <v-row dense>
      <v-col cols="12" class="py-0">
        <v-select
          v-model="selectedEvent"
          label="Event"
          :items="events"
          item-text="name"
          item-value="value"
        >
        </v-select>
      </v-col>
    </v-row>
    <component :is="selectedEvent"></component>
    <!-- need to make submit button here -->
  </v-container>
</template>

<script>
import FamilyVisit from '../components/FamilyVisit'
import GoingToStore from '../components/GoingToStore'
import WorkDay from '../components/WorkDay'
import SharedCarRide from '../components/SharedCarRide'
import PlaneRide from '../components/PlaneRide'
import Vacation from '../components/Vacation'
import SchoolDay from '../components/SchoolDay'

export default {
  name: 'RiskForm',
  components: {
    FamilyVisit, GoingToStore, WorkDay, SharedCarRide, PlaneRide, Vacation, SchoolDay
  },
  data: () => ({
    selectedEvent: null,
    events: [
      {
        name: "Family Visit",
        value: "FamilyVisit"
      },
      {
        name: "Going To Store",
        value: "GoingToStore"
      },
      {
        name: "Work Day",
        value: "WorkDay"
      },
      {
        name: "Shared Car Ride",
        value: "SharedCarRide"
      },
      {
        name: "Plane Ride",
        value: "PlaneRide"
      },
      {
        name: "Vacation",
        value: "Vacation"
      },
      {
        name: "School Day",
        value: "SchoolDay"
      },
    ]
  }),
  methods:{
    method1 () {

    },
  }
}
</script>
