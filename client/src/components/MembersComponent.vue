<template>
  <div class="container">
    <h1>동방 청소 후보</h1>
    <div class="create-post">
      <div>
        <label for="create-post">이름으로 멤버 추가하기</label>
      </div>
      <input type="text" id="create-post" class="in" v-model="text" placeholder="이름">
      <input type="nickname" id="create-post" class="in" v-model="nickname" placeholder="닉네임">
      <button v-on:click="createPost" class="space">멤버 추가하기</button>
    </div>
    <!-- CREATE POST HERE -->
    <p class="error" v-if="error">{{ error }}</p>
    <!-- <div>
      <div
        class="post"
        v-for="(post, index) in posts"
        v-bind:item="post"
        v-bind:index="index"
        v-bind:key="post._id"
        v-bind:name="post.text"
        v-on:dblclick="deletePost(post._id)"
      >
        <p class="text">{{post.text}}</p>
      </div>
    </div>-->
    <transition-group tag="div" class="deck">
      <div
        v-for="(post, index) in posts"
        v-bind:item="post"
        v-bind:index="index"
        v-bind:key="post._id"
        v-bind:name="post.text"
        v-on:dblclick="deletePost(post._id, post.nickname)"
        class="card place"
      >
        <!-- <span>
          <img class="vue-logo" src="./sparcslogo.png">
        </span>-->
        <div id="rectangle">
          <p class="nickname">{{ post.nickname }}</p>
        </div>

        <span class="card__number">{{ post.text }}</span>
      </div>
    </transition-group>
  </div>
</template>

<script>
import PostService from "../PostService";
export default {
  name: "MembersComponent",
  data() {
    return {
      posts: [],
      error: "",
      text: "",
      nickname: ""
    };
  },
  async created() {
    try {
      this.posts = await PostService.getPosts();
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    async createPost() {
      this.text = this.text.trim();
      this.nickname = this.nickname.trim();
      if (this.text === "" || this.nickname === "") {
        console.log("please fill in both fields");
        this.$bvToast.toast("이름과 닉네임 둘 다 입력해주세요", {
          title: "멤버를 추가할 수 없습니다",
          autoHideDelay: 3000,
          appendToast: true
        });
        return;
      }
      for (let i = 0; i < this.posts.length; i++) {
        if (this.posts[i].nickname === this.nickname) {
          console.log("Nickname already exists");
          this.$bvToast.toast("이미 존재하는 닉네임입니다", {
            title: "멤버를 추가할 수 없습니다",
            autoHideDelay: 3000,
            appendToast: true
          });
          return;
        }
      }
      await PostService.insertPost(this.text, this.nickname).catch(err => {
        console.error(err);
      });
      this.posts = await PostService.getPosts();
      this.text = "";
      this.nickname = "";
    },
    async deletePost(id, nickname) {
      await PostService.deletePost(id);
      await PostService.deletePostByNickname(nickname);

      this.posts = await PostService.getPosts();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container {
  max-width: 90%;
  margin: 0 auto;
}

.deck {
  margin-left: 30px;
  padding-top: 30px;
}
#rectangle {
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  width: 100%;
  height: 40px;
  background: #ee8727;
}

.card {
  width: 150px;
  height: 100px;
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
}

.in {
  margin-right: 30px;
}

.space {
  border-radius: 5px;
  height: 2.5em;
  padding: 10px;
  color: white;
  background: rgb(253, 172, 65);
  margin: 10px 30px;
}

/* .place {
  width: 150px;
  height: 100px;
  background-color: white;
} */
.place:hover,
.place.pink {
  background-color: #ffe2a3;
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
.card__number {
  text-align: center;
  padding-top: 20px;
  padding-left: 5px;
  /* width: 100%;
  position: absolute;
  top: 38%;
  text-align: center; */
}
.nickname {
  text-align: center bottom;
  padding-top: 10px;
  color: white;
  font-size: 15px;
}
</style>
