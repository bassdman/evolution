import { defineStore } from 'pinia';
import { reactive } from 'vue'

export const useNurients = defineStore('nurients', {
    state: () => ({
        nurientsOfGrounds: {},
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
        get(state) {
            return function(groundId) {
                return reactive(state.nurientsOfGrounds[groundId]);
            }
        },
        init(state) {
            return function(grounds) {
                for (let ground of grounds) {
                    const currentNurient = {};
                    Object.keys(state.Nurients).forEach(nurientKey => {
                        currentNurient[nurientKey] = state.Nurients[nurientKey];
                        currentNurient[nurientKey].nr = Math.floor(Math.random() * state.avgNrOfNurientsPerTile * 2);
                    })
                    this.nurientsOfGrounds[ground.id] = currentNurient;
                }
            }
        }
    },
    actions: {
        setStrategy: function(name, fn) {
            this[name] = fn;
        },
    },
})