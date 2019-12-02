<template>
  <div id="app">
    <div>
      <div id="rectangle"></div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">
          <img class="mylogo" src="../dist/sparclean.png">
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">청소당번 선발</b-nav-item>
            <b-nav-item to="/history">청소기록</b-nav-item>
            <b-nav-item to="/members">후보관리</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

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
  /* font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
  text-align: center;
}
h1 {
  font-size: 30px;
}

#rectangle {
  width: 100%;
  height: 5px;
  background: #ee8727;
}

.mylogo {
  width: 184px;
  height: 54px;
}
</style>
