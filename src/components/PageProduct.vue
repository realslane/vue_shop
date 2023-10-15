<script>
    import { useRoute } from 'vue-router';

    export default {
        computed: {
            cartFromLocalStorage() {
                return JSON.parse(localStorage.getItem('cart') || '[]');
            },
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
        props: {
            findByText: String,
            findByPrice: String,
            products: Object,
            id: String
        },
        data() {
            return {
                cart: [],
            };
        },
        created() {
            this.cart = this.cartFromLocalStorage;
        },
        setup() {
            const productId = useRoute().params.id;

            return {
                productId
            }
        }
    };
</script>

<template>
    <div class="block_title">
        <span v-text="getProduct('title')" v-if="this.products.find(product => product.id == this.productId)"></span>
        <span v-else>Product not found</span>
    </div>
    <div class="products" v-if="this.products.find(product => product.id == this.productId)">
        <div class="p_wrap">
            <div class="product">
                <div class="p_img">
                    <a href="">
                        <img :src="getProduct('image')" />
                    </a>
                </div>
                <div class="p_price">
                    <span>{{ getProduct('price') }}</span> у.е.
                    <button @click="addToCart(getProduct('id'))">Добавить в корзину ({{ inCart(getProduct('id')) }})</button>
                </div>
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
        width: 100%;
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
