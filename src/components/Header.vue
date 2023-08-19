<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
    <header>
        <img alt="Shop logo" class="logo" src="/src/assets/logo.svg" width="125" height="125" />
        <div class="shop_name">{{ msg }}</div>
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
    .shop_name {
        display: inline-block;
        font-size: 30px;
        line-height: 60px;
        color: #d5ad37;
    }
</style>
