<template>
  <div>
    <h1>동방 청소 기록</h1>
    <div>
      <b-table striped hover :items="items" :fields="fields" class="contain"></b-table>
    </div>
  </div>
</template>

<script>
import PostService from "../PostService";
export default {
  name: "HistoryPage",
  data() {
    return {
      fields: [
        { key: "Date", label: "날짜", sortable: true },
        { key: "p1", label: "당번 1" },
        { key: "p2", label: "당번 2" },
        { key: "p3", label: "당번 3" },
        { key: "p4", label: "당번 4" },
        { key: "p5", label: "당번 5" },
        { key: "p6", label: "당번 6" },
        { key: "p7", label: "당번 7" }
      ],
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

<style scoped>
.contain {
  width: 85%;
  margin: 30px auto;
}
h1 {
  font-size: 30px;
  font-weight: 200;
  color: #666666;
}
</style>
