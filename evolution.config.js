import { FilterAllNeighboursStrategy } from "@/strategies/filterNeighbours/all";
import { InitPeopleOnRandomPosition } from "@/strategies/initPeople/randomLocation";
const config = {
    strategies: {
        filterNeighbours: [FilterAllNeighboursStrategy],
        pointType: [InitPeopleOnRandomPosition]
    }
}

export { config }