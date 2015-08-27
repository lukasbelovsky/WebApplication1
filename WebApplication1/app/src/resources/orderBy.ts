import {OrderByDirection} from './orderByDirection';

export default class OrderBy {
    value: string;
    direction: OrderByDirection;

    constructor(value) {
        this.value = value;
        this.direction = OrderByDirection.ASC;
    }

    toString():string {
        return this.value + " " + ((this.direction == OrderByDirection.ASC) ? "asc" : "desc")
    }


    



}