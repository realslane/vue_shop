<script setup>
    import { ref } from 'vue';
    import HeaderShop from './components/Header.vue';
    import BodyShop from './components/Body.vue';
    import FooterShop from './components/Footer.vue';
    import AddProduct from './components/AddProduct.vue';
    import OrderProduct from './components/OrderProduct.vue';

    const findByText = ref('');
    const findByPrice = ref('');
</script>
<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                products: []
            };
        },
        methods: {
            getData() {
                axios.get('https://fakestoreapi.com/products')
                    .then(response => this.products = response.data)
                    .catch(error => console.log('GetData error: ', error));
            }
        },
        created() {
            this.getData()
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
    <BodyShop :findByText="findByText"
          :findByPrice="findByPrice"
          :products="products"
    />
    <AddProduct :maxId="Math.max(...products.map(product => product.id))"
               @addProduct="products.push($event)"
    />
    <OrderProduct :products="products"
                  @addProduct="products.push($event)"
    />
    <FooterShop/>
</template>
