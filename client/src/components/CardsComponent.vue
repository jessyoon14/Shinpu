<template>
  <div id="app">
    <div class="title-section">
      <h1 class="title">
        <img class="vue" src="https://vuejs.org/images/logo.png">
        Card Shuffling
      </h1>

      <div class="speed-buttons">
        <a
          class="button is-small"
          :class="[{ 'is-outlined': shuffleButtonActive === 0, 'is-light': shuffleButtonActive != 0 }]"
          @click="selectShuffleSpeed(0)"
        >Slow</a>
        <a
          class="button is-small"
          :class="[{ 'is-outlined': shuffleButtonActive === 1, 'is-light': shuffleButtonActive != 1 }]"
          @click="selectShuffleSpeed(1)"
        >Medium</a>
        <a
          class="button is-small"
          :class="[{ 'is-outlined': shuffleButtonActive === 2, 'is-light': shuffleButtonActive != 2 }]"
          @click="selectShuffleSpeed(2)"
        >Fast</a>
      </div>
      <div class="main-buttons">
        <transition name="fade">
          <a v-if="shuffledDeck" @click="displayInitialDeck" class="button is-primary is-outlined">
            Reset&nbsp;&nbsp;
            <i class="fas fa-undo"></i>
          </a>
        </transition>
        <transition :name="shuffleSpeed">
          <a @click="shuffleDeck" class="button is-primary">
            Shuffle&nbsp;&nbsp;
            <i class="fas fa-random"></i>
          </a>
        </transition>
      </div>
      <transition name="fade">
        <div v-if="shuffleCount" class="count-section"># of Shuffles: {{ shuffleCount }}</div>
      </transition>
    </div>
    <p>Hello</p>
    <div class="deck">
      <div class="card">
        <span class="card__suit card__suit--top">♣</span>
        <span class="card__number">A</span>
        <span class="card__suit card__suit--bottom">♣</span>
      </div>
    </div>

    <transition-group :name="shuffleSpeed" tag="div" class="deck">
      <div
        v-for="card in cards"
        :key="card.id"
        class="card"
        :class="{ 'black': card.suit === '♠' || card.suit ===  '♣',
                        'red': card.suit === '♥' || card.suit ===  '♦' }"
      >
        <span class="card__suit card__suit--top">{{ card.suit}}</span>
        <span class="card__number">{{ card.name}}</span>
        <span class="card__suit card__suit--bottom">{{ card.suit}}</span>
      </div>
    </transition-group>
    <a href="https://twitter.com/djirdehh" target="_blank" class="twitter-section">
      <i class="fab fa-twitter-square"></i>
    </a>
  </div>
</template>

<script>
import v1 from "../main.js";
//import Vue from "vue";
// export default {
//   name: "CardsComponent",
//   data() {
//     return {
//       vue: 0
//     };
//   }
// };
// this.vue = new Vue({
//   el: "#app",

//   data: {
//     names: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
//     suits: ["♥", "♦", "♠", "♣"],
//     cards: [],
//     shuffleButtonActive: 1,
//     shuffleSpeed: "shuffleMedium",
//     shuffleCount: 0,
//     shuffledDeck: false
//   },
//   created() {
//     this.displayInitialDeck();
//   },
//   methods: {
//     displayInitialDeck() {
//       let id = 1;
//       this.cards = [];
//       for (let s = 0; s < this.suits.length; s++) {
//         for (let n = 0; n < this.names.length; n++) {
//           let card = {
//             id: id,
//             value: n + 1,
//             name: this.names[n],
//             suit: this.suits[s]
//           };
//           this.cards.push(card);
//           id++;
//         }
//       }

//       this.shuffledDeck = false;
//       this.shuffleCount = 0;
//       return this.cards;
//     },
//     selectShuffleSpeed(n) {
//       this.shuffleButtonActive = n;

//       if (n === 0) this.shuffleSpeed = "shuffleSlow";
//       if (n === 1) this.shuffleSpeed = "shuffleMedium";
//       if (n === 2) this.shuffleSpeed = "shuffleFast";
//     },
//     shuffleDeck() {
//       let counter = this.cards.length;

//       while (counter > 0) {
//         let randomIndex = Math.floor(Math.random() * counter);

//         counter--;

//         let temp = this.cards[counter];
//         Vue.set(this.cards, counter, this.cards[randomIndex]);
//         Vue.set(this.cards, randomIndex, temp);
//       }

//       this.shuffledDeck = true;
//       this.shuffleCount++;
//     }
//   }
// });

export default {
  name: "CardsComponent",
  data() {
    return {
      names: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
      suits: ["♥", "♦", "♠", "♣"],
      cards: [],
      shuffleButtonActive: 1,
      shuffleSpeed: "shuffleMedium",
      shuffleCount: 0,
      shuffledDeck: false
    };
  },
  create() {
    this.displayInitialDeck();
  },
  methods: {
    displayInitialDeck() {
      let id = 1;
      this.cards = [];
      for (let s = 0; s < this.suits.length; s++) {
        for (let n = 0; n < this.names.length; n++) {
          let card = {
            id: id,
            value: n + 1,
            name: this.names[n],
            suit: this.suits[s]
          };
          this.cards.push(card);
          id++;
        }
      }

      this.shuffledDeck = false;
      this.shuffleCount = 0;
      return this.cards;
    },
    selectShuffleSpeed(n) {
      this.shuffleButtonActive = n;

      if (n === 0) this.shuffleSpeed = "shuffleSlow";
      if (n === 1) this.shuffleSpeed = "shuffleMedium";
      if (n === 2) this.shuffleSpeed = "shuffleFast";
    },
    shuffleDeck() {
      let counter = this.cards.length;
      while (counter > 0) {
        let randomIndex = Math.floor(Math.random() * counter);

        counter--;

        let temp = this.cards[counter];
        v1.set(this.cards, counter, this.cards[randomIndex]);
        v1.set(this.cards, randomIndex, temp);
      }

      this.shuffledDeck = true;
      this.shuffleCount++;
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto+Slab:300,400,700");
@import url("https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css");
@import url("https://use.fontawesome.com/releases/v5.0.6/css/all.css");
$large: 1210px;
$medium: 768px;

html,
body,
#app {
  height: 100%;
  background: ghostwhite;
}

.title-section {
  font-family: Roboto Slab, sans-serif;
  text-align: center;
  margin-top: 30px;
}

.title-section .title {
  font-weight: 300;
  font-size: 3rem;
}

.title-section .vue {
  height: 55px;
  position: relative;
  top: 10px;
}

.speed-buttons {
  padding-bottom: 30px;
  .button {
    height: 2.5em;
  }
}

.main-buttons {
  display: block;
  margin: 0 auto;
  padding-bottom: 30px;
  text-align: center;
  margin-bottom: 0 !important;
}

.count-section {
  position: absolute;
  top: 10px;
  right: 10px;
}

.deck {
  margin-left: 30px;
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
  width: 100%;
  position: absolute;
  top: 38%;
  text-align: center;
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

  .fa-twitter-square {
    color: #00d1b2;
    font-size: 30px;
  }
}

// Transitions
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

// Media
@media (max-width: $large) {
  .deck {
    position: initial;
    top: 0;
  }

  .twitter-section {
    display: none;
  }
}
</style>




