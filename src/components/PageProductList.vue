<script>
    export default {
        computed: {
            cartFromLocalStorage() {
                return JSON.parse(localStorage.getItem('cart') || '[]');
            }
        },
        emits: [ 'addProduct' ],
        methods: {
            addToCart(productId) {
                if (localStorage.getItem('cart') === null) {
                    localStorage.setItem('cart', JSON.stringify({}));
                }

                this.cart[productId] = this.cart[productId] === undefined ? 1 : ++this.cart[productId];
                localStorage.setItem('cart', JSON.stringify(this.cart));
            },
            findProduct() {
                let products = this.products;

                if (this.findByText !== '') {
                    products = products.filter(product => ~(product.title).indexOf(this.findByText));
                }

                if (this.findByPrice !== '') {
                    products = products.filter(product => parseFloat(product.price) <= parseFloat(this.findByPrice));
                }

                return products;
            },
            getProduct(param) {
                let product = this.products.filter(product => product.id == this.productId);

                if (product.length) {
                    return product[0][param];
                }
            },
            inCart(productId) {
                if (localStorage.getItem('cart') === null) {
                    return 0;
                }

                return this.cart[productId] === undefined ? 0 : this.cart[productId];
            }
        },
        data() {
            return {
                cart: [],
            };
        },
        created() {
            this.cart = this.cartFromLocalStorage;
        },
        props: {
            findByText: String,
            findByPrice: String,
            products: Object
        }
    };
</script>

<template>
    <div class="block_title">
        <span>Sales Hits</span>
    </div>
    <div class="products">
        <div class="p_wrap" v-for="product in findProduct()" :key="product.id">
            <div class="product">
                <div class="p_img">
                    <RouterLink :to="`/product/${product.id}`">
                        <img :src=product.image />
                    </RouterLink>
                </div>
                <div class="p_price">
                    <span>{{ product.price }}</span> у.е.
                    <button @click="addToCart(product.id)">Добавить в корзину ({{ inCart(product.id) }})</button>
                </div>
                <RouterLink :to="`/product/${product.id}`" class="p_name">{{product.title}}</RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .add_product {
        float: right;
        padding: 10px 30px;
    }
    .products {
        display: flex;
        flex-wrap: wrap;
        padding-left: 0;
        text-align: center;
    }
    .p_wrap {
        box-sizing: border-box;
        flex: 0 0 25%;
        padding: 10px;
    }
    .product {
        border-top: 1px solid #4b89da;
        padding: 30px 10px 10px 10px;
        background-color: #fdfdfd;
    }
    .p_img {
        width: 80%;
        margin: 0 auto;
        height: 200px;
        margin-bottom: 10px;
    }
    .p_img img{
        max-width: 100%;
        max-height: 200px;
    }
    .p_price {
        text-align: right;
        padding: 20px 0;
        color: #9e6f28;
    }
    .p_price span {
        font-size: 20px;
        color: #753a13;
    }
    .p_price button {
        margin-left: 10px;
    }
    .p_name {
        font-size: 18px;
        color: #164481;
    }
    .p_name:hover {
        text-decoration: underline;
    }
</style>
