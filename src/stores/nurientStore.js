import { defineStore } from 'pinia';

export const useNurients = defineStore('nurients', {
    state: () => ({
        Nurients: {
            A: { name: 'A' },
            B: { name: 'B' },
            C: { name: 'C' },
            D: { name: 'D' },
            E: { name: 'E' },
            F: { name: 'F' },
            G: { name: 'G' },
            H: { name: 'H' },
            I: { name: 'I' },
        },
        avgNrOfNurientsPerTile: 100
    }),
    getters: {
        getAllNurients(state) {
            return function() {
                Object.keys(state.Nurients);
            }
        },
        getInitialNrOfNurientsForTile(state) {
            return function() {
                const nurients = [];
                Object.keys(state.Nurients).forEach(nurientKey => {
                    nurients[nurientKey] = state.Nurients[nurientKey];
                    nurients[nurientKey].nr = Math.floor(Math.random() * state.avgNrOfNurientsPerTile * 2);
                })
                return nurients;
            }
        }
    },
    actions: {
        setStrategy: function(name, fn) {
            this[name] = fn;
        },
    },
})