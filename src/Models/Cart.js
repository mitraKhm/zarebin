import {Model, Collection} from 'js-abstract-model'
import {CartItemList} from './CartItem'

class Cart extends Model {

    constructor(data) {
        super(data, [
            {key: 'id'},
            {
                key: 'cart-items',
                relatedModel: CartItemList,
            },
            {key: 'profit-value'},
            {key: 'base-cost'},
            {key: 'final-price'}
        ]);
    }
}

class CartList extends Collection {
    model() {
        return Cart;
    }
}

export {Cart, CartList};
