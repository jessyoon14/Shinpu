<template>
  <div>
    <h1>{{ `${date.getFullYear()}년 ${date.getMonth()+1}월 ${date.getDate()}일의 청소 당번은!?` }}</h1>
    <CardsComponent/>
  </div>
</template>

<script>
import CardsComponent from "../components/CardsComponent.vue";

export default {
  name: "homepage",
  components: {
    CardsComponent
  },
  data() {
    return {
      date: new Date(),
      month: 0,
      day: 0,
      fulldate: 0,
      error: ""
    };
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
}
h1 {
  font-size: 30px;
  font-weight: 800;
}
</style>
