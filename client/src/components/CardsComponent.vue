<template>
  <div id="cardgrid">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css"
    >
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.6/css/all.css">
    <h1 class="title">
      <img class="vue-logo" src="https://vuejs.org/images/logo.png">
      Card Shuffling
    </h1>
    <!-- <div class="deck">
      <div class="card">
        <span class="card__suit card__suit--top">♣</span>
        <span class="card__number">A</span>
        <span class="card__suit card__suit--bottom">♣</span>
      </div>
    </div>-->
    <div class="main-buttons">
      <button @click="shuffleDeck" class="button is-primary">
        Shuffle
        <i class="fas fa-random"></i>
      </button>
    </div>
    <transition-group :name="shuffleSpeed" tag="div" class="deck">
      <div v-for="card in cards" :key="card.id" class="card" :class="suitColor[card.suit]">
        <span class="card__suit card__suit--top">{{ card.suit }}</span>
        <span class="card__number">{{ card.rank }}</span>
        <span class="card__suit card__suit--bottom">{{ card.suit }}</span>
      </div>
    </transition-group>
  </div>
</template>

<script>
//import Vue from "vue";
import Vue from "../main.js";
export default {
  name: "CardsComponent",
  data() {
    return {
      ranks: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
      suits: ["♥", "♦", "♠", "♣"],
      cards: [],
      suitColor: {
        "♠": "black",
        "♣": "black",
        "♦": "red",
        "♥": "red"
      },
      shuffleSpeed: "shuffleMedium"
    };
  },
  created() {
    this.displayInitialDeck();
  },
  methods: {
    displayInitialDeck() {
      let id = 1;
      this.cards = [];

      for (let s = 0; s < this.suits.length; s++) {
        for (let r = 0; r < this.ranks.length; r++) {
          let card = {
            id: id,
            rank: this.ranks[r],
            suit: this.suits[s]
          };
          this.cards.push(card);
          id++;
        }
      }
    },
    shuffleDeck() {
      for (let i = this.cards.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * i);

        let temp = this.cards[i];
        Vue.$set(this.cards, i, this.cards[randomIndex]);
        Vue.$set(this.cards, randomIndex, temp);
      }
    }
  }
};
// window.onload = function() {
//   new Vue({
//     el: "#cardgrid"
//   });
// };
</script>



<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto+Slab:300,400,700");

html,
body,
#cards {
  height: 100%;
  background: ghostwhite;
}

.title {
  font-family: Roboto Slab, sans-serif;
  text-align: center;
  padding-top: 30px;
  margin-bottom: 0 !important;
  font-weight: 300;
  font-size: 3rem;
}

.vue-logo {
  height: 55px;
  position: relative;
  top: 10px;
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

.count-section {
  position: absolute;
  top: 10px;
  right: 10px;
}

.fas {
  padding-left: 5px;
}

.deck {
  margin-left: 30px;
  padding-top: 30px;
}

.card {
  width: 75px;
  height: 100px;
  float: left;
  margin-right: 5px;
  margin-bottom: 5px;
  border-radius: 2px;
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
  text-align: left;
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
