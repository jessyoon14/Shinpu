<template>
  <div id="app">
    <b-card title="Card Title" no-body>
      <b-card-header header-tag="nav">
        <b-nav card-header tabs>
          <!-- <b-nav-item>'s with child routes. Note the trailing slash on the first <b-nav-item> -->
          <b-nav-item to="/" exact exact-active-class="active">청소당번 선발</b-nav-item>
          <b-nav-item to="/history" exact exact-active-class="active">동방청소 기록</b-nav-item>
          <b-nav-item to="/members" exact exact-active-class="active">후보</b-nav-item>
        </b-nav>
      </b-card-header>

      <b-card-body>
        <!-- Child route gets rendered in <router-view> or <nuxt-child> -->
        <router-view></router-view>
        <!-- Or if using Nuxt.js
      <nuxt-child></nuxt-child>
        -->
      </b-card-body>
    </b-card>
    <p>
      <!-- use router-link component for navigation. -->
      <!-- specify the link by passing the `to` prop. -->
      <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
      <router-link to="/">Home |</router-link>
      <router-link to="/history">History |</router-link>
      <router-link to="/members">Members</router-link>
    </p>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
@font-face {
  font-family: "BBTreeGL";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_nine_@1.1/BBTreeGL.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}
* {
  font-family: "BBTreeGL", cursive;
  margin: 0;
  padding: 0;
  text-align: center;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
