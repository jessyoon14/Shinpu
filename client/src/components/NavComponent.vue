<template>
  <div>
    <b-card title="Card Title" no-body>
      <b-card-header header-tag="nav">
        <b-nav card-header tabs>
          <!-- <b-nav-item>'s with child routes. Note the trailing slash on the first <b-nav-item> -->
          <b-nav-item to="/home/" exact exact-active-class="active">Home</b-nav-item>
          <b-nav-item to="/history" exact exact-active-class="active">History</b-nav-item>
          <b-nav-item to="/members" exact exact-active-class="active">Members</b-nav-item>
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
  </div>

  <!-- 
  <div>





    <b-nav card-header tabs>
      <b-nav-item to="/home" exact exact-active-class="active">Active</b-nav-item>
      <b-nav-item to=>Link</b-nav-item>
      <b-nav-item>Another Link</b-nav-item>
      <b-nav-item disabled>Disabled</b-nav-item>
    </b-nav>
  </div>-->
</template>