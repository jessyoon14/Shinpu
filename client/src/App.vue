<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <DateComponent/>
    <CardsComponent/>
    <RaffleComponent/>
    <MembersComponent/>
  </div>
</template>

<script>
import MembersComponent from "./components/MembersComponent.vue";
import RaffleComponent from "./components/RaffleComponent.vue";
import DateComponent from "./components/DateComponent.vue";
import CardsComponent from "./components/CardsComponent.vue";
export default {
  name: "app",
  components: {
    MembersComponent,
    RaffleComponent,
    DateComponent,
    CardsComponent
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
