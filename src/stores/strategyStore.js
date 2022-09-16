import { config } from "../../evolution.config";

import { defineStore } from 'pinia';


export const useStrategies = defineStore('strategies', {
    state: () => ({
        filterNeighbours: '',
        groundType: ''
    }),
    getters: {
        getDefaultOption() {
            return function(strategyName) {
                const allOptions = this.getAllOptions(strategyName);

                const optsFiltererd = allOptions.filter(o => o.default == true);
                const val = optsFiltererd.length ? optsFiltererd[0].name : allOptions.length ? allOptions[0].name : '';

                return val;

            }
        },
        getAllOptions() {
            return function(strategyName) {
                if (config.strategies[strategyName] == null)
                    throw new Error('Strategy ' + strategyName + ' does not exist. It must be one of ' + Object.keys(config.strategies).join(','));

                return config.strategies[strategyName];
            }
        },
        get(state) {
            return function(strategyName) {
                const currentStrategy = state[strategyName];

                if (currentStrategy == null)
                    throw new Error('Strategy ' + strategyName + ' does not exist. It must be one of ' + Object.keys(state).join(','));

                if (currentStrategy == "")
                    return config.strategies[strategyName][0];

                return config.strategies[strategyName].filter(s => s.name == currentStrategy)[0];
            }

        },

    },
    actions: {
        setStrategy: function(name, fn) {
            this[name] = fn;
        },
    },
})