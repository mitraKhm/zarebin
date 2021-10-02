import {Model} from 'js-abstract-model'

class Price extends Model {

    constructor(data) {
        super(data, [
            {key: 'extraCost'},
            {
                key: 'base',
                default: 0
            },
            {
                key: 'discount',
                default: 0
            },
            {
                key: 'final',
                default: 0
            },
            {key: 'discountDetail'},
        ]);
    }

    toman(key, suffix) {
        if (this[key]) {
            let string = this[key].toLocaleString('fa');
            if (typeof suffix === 'undefined' || suffix) {
                string += ' تومان ';
            }

            return string;
        }
        return null;
    }

    discountInPercent() {
        return Math.round(this.discount*100/this.base);
    }

}

export default Price;
