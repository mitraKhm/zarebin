import {Model, Collection} from 'js-abstract-model'
import {CartItemList} from './CartItem'

class Cart extends Model {

    constructor(data) {
        super(data, [
            {key: 'id'},
            {
                key: 'cartItems',
                relatedModel: CartItemList,
            },
            {key: 'profitValue'},
            {key: 'baseCost'},
            {key: 'finalPrice'}
        ]);
    }
}

class CartList extends Collection {
    model() {
        return Cart;
    }
}

export {Cart, CartList};
