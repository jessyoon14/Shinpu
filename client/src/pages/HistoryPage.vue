<template>
  <div>
    <h1>동방 청소 기록</h1>
    <div>
      <b-table striped hover :items="items"></b-table>
    </div>
  </div>
</template>

<script>
import PostService from "../PostService";
export default {
  name: "HistoryPage",
  data() {
    return {
      items: [],
      error: ""
    };
  },
  async created() {
    try {
      this.items = await PostService.getHistory();
    } catch (err) {
      this.err = err.message;
    }
  }
};
</script>
