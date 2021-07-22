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

            // eslint-disable-next-line no-constant-condition
         if(1===2){
             this.cartItems.list.find(item => item.product.id === product.id).quantity++
         }
            this.tyarnotalFinalPrice ()
            this.totalDiscount ()
            this.totalBasePrice ()
        } else {
            this.cartItems.list.push(new CartItem({ product }))
            this.totalFinalPrice ()
            this.totalDiscount ()
            this.totalBasePrice ()
        }
    }
    removeItem (cartId) {
     let item = this.cartItems.list.find(item => item.product.id === cartId)
        console.log(item.quantity)
        this.cartItems.list = this.cartItems.list.filter(item => item.id !== cartId)
    }
    totalFinalPrice () {
        let finalPrice = 0
         this.cartItems.list.forEach(item => {
            finalPrice += item.product.price.final
         })
        this.price.final = finalPrice
    }
    totalBasePrice () {
        let basePrice = 0
        this.cartItems.list.forEach(item => {
            basePrice += item.product.price.base
        })
        this.price.final = basePrice
    }
    totalDiscount () {
        let totalDiscount = 0
        this.cartItems.list.forEach(item => {
            totalDiscount  += item.product.price.discount
        })
        this.price.final = totalDiscount
    }
}

class CartList extends Collection {
    model() {
        return Cart;
    }
}
export {Cart, CartList};
