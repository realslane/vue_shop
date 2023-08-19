<script>
    import productsData from "/src/assets/products.json";

    export default {
        data() {
            return {
                products: productsData,
            };
        },
    };
</script>

<template>
    <div class="block_title">Sales Hits</div>
    <div class="products">
        <div class="p_wrap" v-for="product in products" :key="product.id">
            <div class="product">
                <div class="p_img">
                    <a href="">
                        <img :src=product.image />
                    </a>
                </div>
                <div class="p_price">
                    <span>{{ product.price }}</span> кредитов
                </div>
                <a href="" class="p_name">{{product.title}}</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
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
    .p_name {
        font-size: 18px;
        color: #164481;
    }
    .p_name:hover {
        text-decoration: underline;
    }
</style>
