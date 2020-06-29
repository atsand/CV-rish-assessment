<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      bottom
      height="auto"
    >
    <!--Items in nav drawer-->
    <!-- Clean up and add links to object array in data -->
      <v-list dense>
        <v-list-item 
          link v-for="link in navigationLinks" 
          :key="link.name"
          :to="link.route">
          <v-list-item-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
                {{link.name}}
              </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-spacer></v-spacer>
      <template v-slot:append>
        <v-row 
          justify="center" 
          class="align-items-center" 
          dense
        >
          <v-col cols="3" center>
            <v-icon large>mdi-eye</v-icon>
          </v-col>
          <v-col cols="3">
          <v-switch v-model="$vuetify.theme.dark"></v-switch>  
          </v-col>        
        </v-row>
      </template>
    </v-navigation-drawer>

    <!--Top bar-->
    <v-app-bar
      elevate-on-scroll
      app
      clipped-left
    >
      <v-toolbar-title>{{ currentRoute }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <riskIcon
        v-if="riskScore"
      ></riskIcon>
    </v-app-bar>

    <!--Main content-->
    <v-main class="main-content">
      <v-content app>
        <router-view/>
      </v-content>
    </v-main>

    <!-- Bottom Navigation -->
    <v-bottom-navigation app
      v-model="activeBtn" 
      grow fixed
    >
      <v-btn icon>
        <v-icon @click.stop="drawer = !drawer">mdi-menu</v-icon>
      </v-btn>
      <v-btn
        icon
        large
        @click="randomizeRisk"
      >
          <v-icon  x-large>mdi-help-circle</v-icon>
      </v-btn>   
      <v-btn
        icon
        to="/profile"
        large
      >
          <v-icon dark x-large>mdi-account-circle</v-icon>
      </v-btn> 
    </v-bottom-navigation>



    <!--Footer-->
    <!-- <v-footer app>
      <v-btn icon>
        <v-icon @click.stop="drawer = !drawer">mdi-menu</v-icon>
      </v-btn>
      <v-btn
        icon
        to="/"
        large
        @click="randomizeRisk">
        <v-icon>mdi-help-circle</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <span>&copy;</span>
      <span>{{ currentYear }} COVID-19 Risk Assessment</span>
      <v-spacer></v-spacer>
      <v-btn
        icon
        to="/profile"
        large
      >
        <v-icon dark x-large>mdi-account-circle</v-icon>
      </v-btn>
    </v-footer> -->
 
  </v-app>
</template>
<!--<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template> -->

<script>
import RiskIcon from './components/RiskIcon'

export default {
  name: 'App',
  components: {
    RiskIcon
  },
  data: () => ({
    activeBtn: 1,
    activeComponent: 'Home',
    drawer: false,
    profilePages: [
      {
        name: "Home",
        value: "home",
        route: "/"},
      {
        name: "Profile Settings",
        value: "profile settings",
        route: "/profile"},
    ],
    navigationLinks: [
      {
        name: "Home",
        route: "/",
        icon: "mdi-home"
      },
      {
        name: "My Profile",
        route: "/profile",
        icon: "mdi-account"
      },
      {
        name: "Risk Form",
        route: "/riskform",
        icon: "mdi-format-list-checkbox"
      },
    ],
  }),
  methods: {
    randomizeRisk () {
      this.$store.dispatch('randomizeRisk')
    }
  },
  computed: {
    currentRoute () {
      return this.$route.name;
    },
    currentYear () {
       return new Date().getFullYear();
    },
    riskScore () {
      return this.$store.getters.getRiskScore
    }
  },
};
</script>

<style>
.main-container{
  padding-top: 5vh;
  padding-bottom: 5vh;
  /* height: 90vh; */
}
.align-items-center{
  align-items: center;
}
</style>
