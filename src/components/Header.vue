<script setup>
    import { useRouter } from 'vue-router';

    const emit = defineEmits();
    const props = defineProps(['siteName', 'findByText', 'findByPrice']);

    const routerList = useRouter().options.routes;
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
        <div class="nav_menu">
            <ul>
                <li v-for="(routeConfig, index) in routerList.filter(route => route.title !== '')" :key="index"><RouterLink :to="routeConfig.path" v-text="routeConfig.title"/></li>
            </ul>
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
    .nav_menu {
        width: 100%;
        text-align: center;
        clear: both;
        padding-top: 20px;
    }
    .nav_menu ul {
        margin: 2px auto;
        line-height: 1.4;
        padding-left: 0;
    }
    .nav_menu li {
        display: inline;
        text-align: center;
        padding: 0 20px;
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
