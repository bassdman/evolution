import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useRound = defineStore('round', {
    state: () => ({
        roundNr: 1
    }),
    getters: {
        getRound(state) {
            return function() {
                return ref(state.roundNr)

            }
        },
    },
    actions: {
        nextRound: function() {
            this.roundNr++;
        },
    },
})