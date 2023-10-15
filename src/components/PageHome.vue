<script setup>
    import BodyShop from './Body.vue';
</script>
<script>
    export default {
        props: ['findByText', 'findByPrice', 'products']
    };
</script>

<template>
    <BodyShop :findByText="findByText"
          :findByPrice="findByPrice"
          :products="products"
    />
</template>
