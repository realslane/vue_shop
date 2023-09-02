<script setup>
    import Hits from './Hits.vue';
</script>
<script>
    export default {
        props: ['findByText', 'findByPrice', 'products']
    };
</script>
<template>
    <main>
        <div class="block_title">Shop Info</div>
        <div class="text_block">
            This store is cool and our prices are the best. This store is cool and our prices are the best.<br />
            This store is cool and our prices are the best. This store is cool and our prices are the best. This store is cool and our prices are the best.<br />
            This store is cool and our prices are the best. This store is cool and our prices are the best. This store is cool and our prices are the best. This store is cool and our prices are the best.<br /><br />
            <div class="tar">
                <i>"And this is the pure truth!"</i><br />
                The store director
            </div>
        </div>
        <Hits :findByText="findByText" :findByPrice="findByPrice" :products="products"/>
    </main>
</template>

<style scoped>
    main {
        width: 100%;
    }
</style>
