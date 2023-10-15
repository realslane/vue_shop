<script setup>
    import { ref } from 'vue';
    import FooterShop from './components/Footer.vue';
    import HeaderShop from './components/Header.vue';
    import useFetch from './components/UseFetch.vue'

    const findByText = ref('');
    const findByPrice = ref('');
</script>
<script>
    export default {
        data() {
            return {
                products: []
            };
        },
        created() {
            useFetch('https://fakestoreapi.com/products').then(response => this.products = response);
        }
    };
</script>

<template>
    <HeaderShop siteName="ModnyjShop"
            v-model:findByText="findByText"
            v-model:findByPrice="findByPrice"
            v-model:products="products"
            @setFindByText="findByText = $event"
            @setFindByPrice="findByPrice = $event"
    />
    <RouterView :findByText="findByText"
                :findByPrice="findByPrice"
                :products="products"
                @addProduct="products.push($event)"
    />
    <FooterShop/>
</template>
