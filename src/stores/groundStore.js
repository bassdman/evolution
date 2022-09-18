import { ensureArray } from '@/helpers/arrayHelpers';
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
                const id = 'g-' + randomText();
                const ground = {
                    nr: i,
                    id,
                    ui: {
                        background: '',
                        circles: [],
                        circle: {}
                    }
                };
                this.grounds[id] = ground;
            }
        },
        getGround(id) {
            return this.grounds[id];
        },
        allGroundIds() {
            return Object.values(this.grounds).map(ground => ground.id);
        },
        allGrounds() {
            return Object.values(this.grounds);
        },
        addUIElements(elems) {
            for (let uiElem of ensureArray(elems)) {
                if (!uiElem.ground) {
                    console.error('uiElement has no ground-attribute. will be ignored');
                    continue;
                }
                if (!uiElem.id) {
                    console.error('uiElement has no id-attribute. will be ignored');
                    continue;
                }
                const uiConfig = this.getGround(uiElem.ground).ui;

                if (uiElem.background) {
                    uiConfig.background = uiElem.background;
                }
                if (uiElem.circles) {
                    for (let circle of uiElem.circles) {
                        uiConfig.push(circle);
                    }
                }
                if (uiElem.circle) {
                    uiConfig.circle = uiElem.circle;
                    console.log('circle bei' + uiElem.circle)
                }
                this.grounds[uiElem.ground].ui = uiConfig;
            }
        }
    },
})