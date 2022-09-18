import { randomText } from '@/helpers/random';
import { defineStore } from 'pinia';

export const useGround = defineStore('grounds', {
    state: () => ({
        initialized: false,
        grounds: {

        }
    }),
    getters: {
        groundAsArray(state) {
            return function() {
                return Object.values(state.grounds);
            }
        },

    },
    actions: {
        initGrounds(config) {
            const nrOfgrounds = (config.width || 10) * (config.height || 10);

            //    const placePeopleOnMap = config.strategiesStore.get('groundType');
            //    const locationOfPeople = placePeopleOnMap.run(config, nrOfgrounds);

            for (let i = 1; i <= nrOfgrounds; i++) {
                const id = randomText();
                const ground = {
                    nr: i,
                    id
                };
                this.grounds[id] = ground;
            }
        },
        allGroundIds() {
            return Object.values(this.grounds).map(ground => ground.id);
        },
        allGrounds() {
            return Object.values(this.grounds);
        }
    },
})