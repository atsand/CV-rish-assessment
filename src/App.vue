<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
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
        <v-row justify="center" class="align-items-center" dense>
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
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ currentRoute }}</v-toolbar-title>

      <v-spacer></v-spacer>

      
    </v-app-bar>

    <!--Main content-->
    <v-main>
      <v-container>
        <v-row
            justify="center">
          <v-col
            lg="6"
            md="8"
            sm=12>
            <router-view/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!--Footer-->
    <v-footer app>
      <v-btn
        icon
        to="/"
        large
      >
          <v-icon dark x-large>mdi-home</v-icon>
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
    </v-footer>
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
export default {
  name: 'App',
  components: {
  },
  data: () => ({
    activeComponent: 'Home',
    drawer: false,
    profilePages: [
      {name: "Home",
      value: "home",
      route: "/"},
      {name: "Profile Settings",
      value: "profile settings",
      route: "/profile"},
    ],
    navigationLinks: [
      {name: "Home",
      route: "/",
      icon: "mdi-home"},
      {name: "My Profile",
      route: "/profile",
      icon: "mdi-account"
      },
      {name: "Risk Form",
      route: "/riskform",
      icon: "mdi-format-list-checkbox"
      },
    ],
  }),
  computed: {
    currentRoute () {
      return this.$route.name;
    },
    currentYear () {
       return new Date().getFullYear();
    }
  },
};
</script>

<style>
.main-container{
  min-width: 50%;
}
.align-items-center{
  align-items: center;
}
</style>
