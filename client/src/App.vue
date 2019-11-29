<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <RaffleComponent/>
    <MembersComponent/>
  </div>
</template>

<script>
import MembersComponent from "./components/MembersComponent.vue";
import RaffleComponent from "./components/RaffleComponent.vue";

export default {
  name: "app",
  components: {
    MembersComponent,
    RaffleComponent
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
