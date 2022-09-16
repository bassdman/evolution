import { FilterAllNeighboursStrategy } from "@/strategies/filterNeighbours/all";
import { InitPeopleOnRandomPosition } from "@/strategies/initPeople/randomLocation";
const config = {
    strategies: {
        filterNeighbours: [FilterAllNeighboursStrategy],
        groundType: [InitPeopleOnRandomPosition]
    }
}

export { config }