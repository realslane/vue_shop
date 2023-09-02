<script setup>
    const props = defineProps(['siteName', 'findByText', 'findByPrice']);
    const emit = defineEmits();
</script>

<template>
    <header>
        <img alt="Shop logo" class="logo" src="/src/assets/logo.svg" width="125" height="125" />
        <div class="shop_name">{{ siteName }}</div>
        <div class="search_block">
            Поиск товаров по названию:<br/>
            <input type="text" @input="emit('setFindByText', $event.target.value)"/><br/>
            Цена (меньше введенной):<br/>
            <input type="text" @input="emit('setFindByPrice', $event.target.value)"/>
        </div>
    </header>
</template>

<style scoped>
    header {
        overflow: hidden;
        margin-bottom: 30px;
    }
    .logo {
        height: 60px;
        float: left;
    }
    .search_block {
        width: 30%;
        float: right;
    }
    .search_block input {
        width: 99%;
        box-sizing: border-box;
        margin: 3px 0;
    }
    .shop_name {
        display: inline-block;
        font-size: 30px;
        line-height: 60px;
        color: #d5ad37;
    }
</style>
