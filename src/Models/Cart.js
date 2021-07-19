import {Model, Collection} from 'js-abstract-model'
 import {CartItem, CartItemList} from './CartItem'
import Price from './Price';

class Cart extends Model {

    constructor(data) {
        super(data, [
            {key: 'id'},
            {
                key: 'cartItems',
                relatedModel: CartItemList,
            },
            {
                key: 'price',
                relatedModel: Price,
            },
        ]);
    }
    addToCart (product) {
        if (this.cartItems.list.find(item => item.product.id === product.id)){
          this.cartItems.list.find(item => item.product.id === product.id).quantity++
        } else {
            this.cartItems.list.push(new CartItem({ product }))
        }
    }
    removeItem (cartId) {
        this.cartItems.list = this.cartItems.list.filter(item => item.id !== cartId)
    }
    totalFinalPrice () {
        let finalPrice = 0
        this.cartItems.list.forEach(item => finalPrice += item.price.final)
       return this.finalPrice = finalPrice
    }
}

class CartList extends Collection {
    model() {
        return Cart;
    }
}
export {Cart, CartList};
