<template>
  <div class="container">
    <h1>오늘의 청소당번!</h1>
    <div>
      <button v-on:click="shuffle">Shuffle</button>
      <!-- <p>{{shuffledmembers}}</p> -->
      <button v-on:click="choose">Choose</button>
      <p>{{shufflemessage}}</p>
      <!-- <p>{{chosenmembers}}</p> -->
    </div>
    <hr>
    <p class="error" v-if="error">{{ error }}</p>
    <div class="posts-container">
      <div
        class="post"
        v-for="(chosenmember, index) in chosenmembers"
        v-bind:item="chosenmember"
        v-bind:index="index"
        v-bind:key="chosenmember._id"
        v-on:dblclick="deleteChosenmember(chosenmember._id)"
      >
        <!-- {{ `${chosenmember.createdAt.getDate()}/${chosenmember.createdAt.getMonth()}/
        ${chosenmember.createdAt.getFullYear()}`}}-->
        <p class="text">{{chosenmember.text}}</p>
      </div>
    </div>
  </div>
</template>




<script>
import PostService from "../PostService";

export default {
  name: "RaffleComponent",
  data() {
    return {
      allmembers: [],
      error: "",
      shufflemessage: "",
      shuffledmembers: [],
      chosenmembers: [],
      shuffled: false
      //curri: 0
    };
  },
  async created() {
    try {
      this.allmembers = await PostService.getPosts();
      this.shuffledmembers = this.allmembers;
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    shuffle() {
      this.shufflemessage = "";
      this.chosenmembers = [];
      const array = this.shuffledmembers;
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      this.shuffledmembers = array;
      this.shuffled = true;
    },
    choose() {
      if (!this.shuffled) {
        this.shufflemessage = "셔플을 먼저 해주세요!";
      } else if (this.shuffledmembers.length != 0) {
        this.chosenmembers.push(this.shuffledmembers.pop());
      }
    },
    deleteChosenmember(id) {
      //find the object with matching id from chosenmembers array
      for (var i = 0; i < this.chosenmembers.length; i++) {
        if (this.chosenmembers[i]._id === id) {
          this.chosenmembers.splice(i, 1);
          return;
        }
      }
    }
  }
};
</script>




<style scoped>
div.container {
  max-width: 800px;
  margin: 0 auto;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}

div.post {
  position: relative;
  border: 1px solid #5bd658;
  background-color: #bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}

div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
  color: white;
  font-size: 13px;
}

p.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}
</style>

