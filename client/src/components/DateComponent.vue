<template>
  <div>
    <h1>{{ `${date.getFullYear()}년 ${date.getMonth()+1}월 ${date.getDate()}일의 청소 당번은!?` }}</h1>
  </div>
</template>
<script>
export default {
  name: "DateComponent",
  data() {
    return {
      //year: 0,
      date: new Date(),
      month: 0,
      day: 0,
      fulldate: 0,
      error: ""
    };
  },
  create() {
    //const date = new Date();
    //const year = 2019;
    // this.month = date.getMonth;
    // this.day = date.getDay;
    // this.fulldate = date;
  }
};
</script>