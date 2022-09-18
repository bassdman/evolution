import { getRandomNumbers, randomText } from '@/helpers/random';
import { defineStore } from 'pinia';
import { reactive } from 'vue'

export const useCreatures = defineStore('creatures', {
    state: () => ({
        creaturesOnGrounds: {},
    }),
    getters: {
        get(state) {
            return function(groundId) {
                return reactive(state.nurientsOfGrounds[groundId]);
            }
        },
        init() {
            return function(config, grounds) {
                const self = this;
                const positionsGood = getRandomNumbers(config.nrGood, 0, grounds.length);
                const positionsEvil = getRandomNumbers(config.nrEvil, 0, grounds.length, positionsGood);

                for (let n of positionsGood) {
                    const ground = grounds[n];
                    self.creaturesOnGrounds[n] = {
                        type: 'good',
                        id: 'c-' + randomText(),
                        ground: ground.id,
                        circle: {
                            color: 'green',
                            width: '5'
                        }
                    };
                }

                for (let n of positionsEvil) {
                    const ground = grounds[n];

                    self.creaturesOnGrounds[n] = {
                        type: 'evil',
                        ground: ground.id,
                        id: 'c-' + randomText(),
                        circle: {
                            color: 'red',
                            width: '5'
                        }
                    };
                }
            }
        },
        uiElements() {
            console.log('initui', this.creaturesOnGrounds)
            return Object.values(this.creaturesOnGrounds);
        }
    },
    actions: {
        setStrategy: function(name, fn) {
            this[name] = fn;
        },
    },
})