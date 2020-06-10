class Product {
    constructor(title, imageUrl, desc, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = desc;
        this.price = price;
    }
}

class shoppingCart {
    cart = [];

    constructor() {

    }

    addProduct(product) {
        this.cart.push(product);
        console.log(product);
    }

    render() {
        const cartEl = document.createElement('section');
        cartEl.className = 'cart';
        cartEl.innerHTML = `
            <h2>Total: ${0}</h2>
            <button>Order Now!</button>
        `;
        return cartEl;
    }
}

class ProductItem {
    constructor(product) {
        this.product = product
    }

    addToCart(product) {
        App.addProductToCart(product);
    }

    render() {
        const prodEl = document.createElement('li');
        prodEl.className = 'product-item';
        prodEl.innerHTML = `
            <img src="${this.product.imageUrl}" alt="${this.product.title}">
            <div class="product-item__content">
                <h2>${this.product.title}</h2>
                <h3>${this.product.price}</h3>
                <p>${this.product.description}</p>
                <button>Add to Cart</button>
            </div>
        `;
        const addCartBtn = prodEl.querySelector('button');
        addCartBtn.addEventListener('click', this.addToCart.bind(this, this.product));
        return prodEl;
    }
}

class ProductList {
    products = [
        new Product(
            'A Pillow',
            'https://images-na.ssl-images-amazon.com/images/I/61D4O85d%2BoL._AC_SL1500_.jpg',
            'A soft Pillow!',
            19.99
        ),
        new Product(
            'A Carpet',
            'https://ae01.alicdn.com/kf/Hf9c8c08d7998436b929a1a42854b8c3fD.jpg',
            'A Carpet which you might like - or not.',
            89.99
        )
    ];

    constructor() {}

    render() {
        const prodListEl = document.createElement('ul');
        prodListEl.className = 'product-list';
        for (const product of this.products) {
            const productItem = new ProductItem(product);
            const prodEl = productItem.render();
            prodListEl.append(prodEl);
        }
        return prodListEl;
    }
}

class Shop {
    constructor() {
        const renderHook = document.getElementById('app');

        this.cart = new shoppingCart();
        const cartEl = this.cart.render();
        const prodList = new ProductList();
        const prodListEl = prodList.render();

        renderHook.append(cartEl);
        renderHook.append(prodListEl);
    }
}

class App {
    static init() {
        const shop = new Shop();
        this.cart = shop.cart;
    }

    static addProductToCart(product) {
        this.cart.addProduct(product);
    }
}

App.init();