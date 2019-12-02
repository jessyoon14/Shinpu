<template>
  <div id="app">
    <div>
      <div id="rectangle"></div>
      <b-navbar toggleable="lg" type="light">
        <b-navbar-brand to="/">
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
        </b-collapse>
      </b-navbar>
    </div>
    <router-view></router-view>
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
@font-face {
  font-family: "NanumSquare";
  src: url("https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css");
  font-weight: normal;
  font-style: normal;
}
* {
  font-family: "NanumSquare", sans-serif;
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
