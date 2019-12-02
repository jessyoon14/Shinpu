<template>
  <div id="cardgrid">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css"
    >
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.6/css/all.css">

    <div class="main-buttons">
      <button @click="shuffleDeck" class="button space">
        셔플
        <i class="fas fa-random"></i>
      </button>
      <button @click="displayInitialDeck" class="button space">처음으로</button>
      <button @click="saveChosen(); makeToast();" class="button space">저장</button>
    </div>
    <transition-group :name="shuffleSpeed" tag="div" class="deck">
      <div
        v-for="card in cards"
        :key="card.id"
        class="card place"
        v-on:click="choose(card.id, card.clicked); card.clicked=!card.clicked"
        v-bind:class="{'white':!card.clicked, 'pink':card.clicked}"
      >
        <span>
          <img class="vue-logo" src="./sparcslogo.png">
        </span>
        <span class="card__number">{{ card.name }}</span>
      </div>
    </transition-group>
  </div>
</template>

<script>
//import Vue from "vue";
import Vue from "../main.js";
import PostService from "../PostService";
//import $ from "jquery";
export default {
  name: "CardsComponent",
  data() {
    return {
      cards: [],
      allmembers: [],
      error: "",
      shuffledmembers: [],
      chosenmembers: [],
      shuffleSpeed: "shuffleMedium"
    };
  },
  async created() {
    try {
      this.allmembers = await PostService.getPosts();
      this.shuffledmembers = this.allmembers;
    } catch (err) {
      this.error = err.message;
    }
    this.displayInitialDeck();
  },
  methods: {
    displayInitialDeck() {
      //let id = 1;
      this.cards = [];
      for (let i = 0; i < this.shuffledmembers.length; i++) {
        let card = {
          id: this.shuffledmembers[i]._id,
          name: this.shuffledmembers[i].text,
          clicked: false
        };
        this.cards.push(card);
      }
    },
    shuffleDeck() {
      for (let i = 0; i < this.cards.length; i++) {
        this.cards[i].clicked = false;
      }
      for (let i = this.cards.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * i);

        let temp = this.cards[i];
        Vue.$set(this.cards, i, this.cards[randomIndex]);
        Vue.$set(this.cards, randomIndex, temp);
      }
    },
    choose(id, cl) {
      console.log(id);
      if (!cl) {
        for (let i = 0; i < this.allmembers.length; i++) {
          if (this.allmembers[i]._id === id) {
            this.chosenmembers.push(this.allmembers[i]);
            console.log("Found this card!");
            break;
          }
        }
      }
      //already clicked. Now delete from chosenmembers.
      else {
        for (let i = 0; i < this.chosenmembers.length; i++) {
          if (this.chosenmembers[i]._id === id) {
            this.chosenmembers.splice(i, 1);
            console.log("deleted a card");
            break;
          }
        }
      }
    },
    async saveChosen() {
      //this.$bvToast.show("example-toast");
      if (this.chosenmembers.length != 0) {
        await PostService.addChosen(this.chosenmembers);
      }
    },
    makeToast(append = false) {
      var chosenstr = this.chosenmembers[0].text;
      for (let i = 1; i < this.chosenmembers.length; i++) {
        chosenstr = chosenstr + ", " + this.chosenmembers[i].text;
      }
      this.$bvToast.toast(`${chosenstr}`, {
        title: "오늘의 청소당번 저장",
        autoHideDelay: 5000,
        appendToast: append
      });
    }
  }
};

// $(".place").click(function() {
//   $(this).toggleClass("green");
// });
</script>



<style scoped>
html,
body,
#cards {
  height: 100%;
  background: ghostwhite;
}

.title {
  text-align: center;
  padding-top: 30px;
  margin-bottom: 0 !important;
  font-weight: 300;
  font-size: 3rem;
}

.place {
  width: 50px;
  height: 50px;
  background-color: white;
}
.place:hover,
.place.pink {
  background-color: #ffe2a3;
}

.vue-logo {
  height: 80px;
  width: 40px;
  margin-top: 20px;
}

.speed-buttons {
  text-align: center;
  padding-top: 30px;
}
.speed-buttons .button {
  height: 2.5em;
}

.main-buttons {
  display: block;
  margin: 0 auto;
  text-align: center;
  padding-top: 30px;
  margin-bottom: 0 !important;
}

.space {
  color: white;
  background: rgb(253, 172, 65);
  margin: 10px 30px;
}
.space:hover {
  color: white;
  background: #ffc107;
}
.count-section {
  position: absolute;
  top: 10px;
  right: 10px;
}

.fas {
  padding-left: 5px;
}

.deck {
  width: 80%;
  margin: auto;
  padding-top: 30px;
}

.card {
  width: 100px;
  height: 150px;
  float: left;
  margin-right: 13px;
  margin-bottom: 13px;
  border-radius: 8px;
}

.card__suit {
  width: 100%;
  display: block;
}

.card__suit--top {
  text-align: left;
  padding-left: 5px;
}

.card__suit--bottom {
  position: absolute;
  bottom: 0px;
  text-align: left;
  transform: rotate(180deg);
  padding-left: 5px;
}

.card__number {
  text-align: center;
  padding-top: 10px;
  padding-left: 5px;
  /* width: 100%;
  position: absolute;
  top: 38%;
  text-align: center; */
}

.red {
  color: #ff0000;
}

.black {
  color: #000;
}

.twitter-section {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
.twitter-section .fa-twitter-square {
  color: #00d1b2;
  font-size: 30px;
}

.shuffleSlow-move {
  transition: transform 2s;
}

.shuffleMedium-move {
  transition: transform 1s;
}

.shuffleFast-move {
  transition: transform 0.5s;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 1210px) {
  .deck {
    position: initial;
    top: 0;
  }

  .twitter-section {
    display: none;
  }
}
</style>
