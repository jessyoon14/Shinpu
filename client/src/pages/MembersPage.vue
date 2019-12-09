<template>
  <div>
    <MembersComponent/>
  </div>
</template>

<script>
import MembersComponent from "../components/MembersComponent.vue";

export default {
  name: "memberspage",
  components: {
    MembersComponent
  }
};
</script>

<style scoped>
h1 {
  font-size: 30px;
  font-weight: 200;
  color: #666666;
}
</style>
