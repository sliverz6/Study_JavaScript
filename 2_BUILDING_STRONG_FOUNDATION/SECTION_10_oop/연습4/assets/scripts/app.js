class Product {
    // title = 'DEFAULT';
    // imageUrl;
    // description;
    // price;

    constructor(title, image, desc, price) {
        this.title = title;
        this.imageUrl = image;
        this.description = desc;
        this.price = price;
    }
}

class ElementAttribute {
    constructor(attrName, attrValue) {
        this.name = attrName;
        this.value = attrValue;
    }
}

class Component {
    constructor(renderHookId) {
        this.hookId = renderHookId;
    }

    createRootElement(tag, cssClasses, attributes) {
        const rootEl = document.createElement(tag);
        if (cssClasses) {
            rootEl.className = cssClasses;
        }
        if (attributes && attributes.length > 0) {
            for (const attr of attributes) {
                rootEl.setAttribute(attr.name, attr.value);
            }
        }
        const hookEl = document.getElementById(this.hookId);
        hookEl.append(rootEl);
        return rootEl;
    }
}

class ShoppingCart extends Component {
    items = [];

    set cartItem(value) {
        this.items = value;
        this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`;
    }

    get totalAmount() {
        const sum = this.items.reduce((prevValue, curItem) => prevValue + curItem.price, 0);
        return sum;
    }

    addProduct(product) {
        const updatedCart = [...this.items];
        updatedCart.push(product);
        this.cartItem = updatedCart;
    }

    render() {
        const cartEl = this.createRootElement('section', 'cart');
        cartEl.innerHTML = `
            <h2>Total: \$${0}</h2>
            <button>Order Now!</button>
        `;
        this.totalOutput = cartEl.querySelector('h2');
        return cartEl;
    }
}

class ProductItem extends Component {
    constructor(product, renderHookId) {
        super(renderHookId);
        this.product = product;
    }

    addToCart() {
        App.addProductToCart(this.product);
    }
    
    render() {
        const prodEl = this.createRootElement('li', 'product-item');
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
        const addCartBtn = prodEl.querySelector('button');
        addCartBtn.addEventListener('click', this.addToCart.bind(this));
        return prodEl;
    }
}

class ProductList extends Component {
    products = [
        new Product(
            'A Pillow',
            'https://www.uratex.com.ph/wp-content/uploads/MouldedPillow.png',
            'A soft pillow!',
            19.99
        ),
        new Product(
            'A Carpet',
            'https://irugcarpet.com/web/product/big/201809/86880b9167cce44c0b6a33d4f2880e8e.jpg',
            'A carpet which you might like - or not.',
            89.99
        )
    ];
    
    constructor(renderHookId) {
        super(renderHookId);
    }

    render() {
        const prodList = this.createRootElement('ul', 'product-list', [
            new ElementAttribute('id', 'prod-list')
        ]);
        for (const prod of this.products) {
            const productItem = new ProductItem(prod, 'prod-list');
            productItem.render();
        }
        return prodList;
    }
}

class Shop {
    render() {
        this.cart = new ShoppingCart('app');
        this.cart.render();
        const productList = new ProductList('app');
        productList.render();
    }
}

class App {
    static init() {
        const shop = new Shop();
        shop.render();
        this.cart = shop.cart;
    }
    
    static addProductToCart(product) {
        this.cart.addProduct(product);
    }
}

App.init();