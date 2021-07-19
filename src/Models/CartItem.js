import {Model, Collection} from 'js-abstract-model'
import {Product} from './Product';

class CartItem extends Model {

    constructor(data) {
        super(data, [
            {key: 'id'},
            {
                key: 'product',
                relatedModel: Product,
            },
            {
                key: 'quantity',
                default: 0
            }
        ]);
        this.id = this.product.id
    }
}

class CartItemList extends Collection {
    model() {
        return CartItem;
    }
}

export {CartItem, CartItemList};
