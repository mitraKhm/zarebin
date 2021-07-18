import {Model, Collection} from 'js-abstract-model'
import Price from './Price';

class Product extends Model {

    constructor(data) {
        super(data, [
            {key: 'id'},
            {key: 'redirect_url'},
            {key: 'type'},
            {key: 'category'},
            {key: 'title',
                value: function (itemVal, inputData) {
                    if (typeof inputData.title !== 'undefined' && inputData.title !== null) {
                        return inputData.title;
                    } else if (typeof inputData.name !== 'undefined' && inputData.name !== null) {
                        return inputData.name;
                    }
                }
            },
            {key: 'is_free'},
            {key: 'url'},
            {key: 'photo'},
            {key: 'attributes'},
            {
                key: 'price',
                relatedModel: Price,
            },
            {key: 'favor_url'},
            {key: 'unfavor_url'},
        ]);
    }

    createFavorUrl(baseUrl, favored) {
        return baseUrl + '/product/' + this.id + '/' + ((favored) ? 'favored' : 'unfavored');
    }

    setFavor(url) {
        if (typeof url === 'undefined') {
            url = this.favor_url;
        }
        if (url === null) {
            console.error('url is null.');
        }

        return this.crud.create(url);
    }

    setUnfavor(url) {
        if (typeof url === 'undefined') {
            url = this.unfavor_url;
        }
        if (url === null) {
            console.error('url is null.');
        }
        return this.crud.create(url);
    }

}

class ProductList extends Collection {
    model() {
        return Product;
    }
}

export {Product, ProductList};
