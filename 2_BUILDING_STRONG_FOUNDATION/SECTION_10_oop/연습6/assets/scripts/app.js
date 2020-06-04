class Product {
    constructor(title, image, desc, price) {
        this.title = title;
        this.imageUrl = image;
        this.description = desc;
        this.price = price;
    }
}

class ShoppingCart {
    render() {
        const cartEl = document.createElement('section');
        cartEl.className = 'cart';
        cartEl.innerHTML = `
            <h2>Total: \$${0}</h2>
            <button>Order Now!</button>
        `;
        return cartEl;
    }
}

class ProductItem {
    constructor(product) {
        this.product = product;
    }

    render() {
        const prodEl = document.createElement('li');
        prodEl.className = 'product-item';
        prodEl.innerHTML = `
            <div>
                <img src="${this.product.imageUrl}" alt="${this.product.title}">
                <div class="product-item__content">
                    <h2>${this.product.title}</h2>
                    <h3>${this.product.price}</h3>
                    <p>${this.product.description}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        `;
        return prodEl;
    }
}

class ProductList {
    products = [
        new Product(
            'A Pillow',
            'https://www.recorebed.ca/wp-content/uploads/2019/07/pillow-1-edit.jpg',
            'A Soft Pillow',
            19.99
        ),
        new Product(
            'A Carpet',
            'https://irugcarpet.com/web/product/big/201809/86880b9167cce44c0b6a33d4f2880e8e.jpg',
            'A Carpet which you might like - or not.',
            89.99
        ),
    ];

    render() {
        const prodListEl = document.createElement('ul');
        prodListEl.className = 'product-list';
        for (const product of this.products) {
            const productItem = new ProductItem(product);
            const prodItemEl = productItem.render();
            prodListEl.append(prodItemEl);
        }
        return prodListEl;
    }
}

class Shop {
    constructor() {
        
    }

    render() {
        const renderHook = document.getElementById('app');

        const productList = new ProductList();
        const prodListEl = productList.render();
        const cart = new ShoppingCart();
        const cartEl = cart.render();
        
        renderHook.append(cartEl);
        renderHook.append(prodListEl);
    }
}

class App {
    static init() {
        const shop = new Shop();
        shop.render();
    }
}

App.init();