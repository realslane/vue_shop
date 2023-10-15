<script setup>
    import {ErrorMessage, Form, Field} from 'vee-validate';

    const emit = defineEmits();
</script>
<script>
    export default {
        data() {
            return {
                productName: '',
                productPrice: '',
                login: localStorage.login
            };
        },
        mounted() {
            if (!localStorage.login) {
                this.$router.push({name: 'PageLogin'});
            }
        },
        methods: {
            addProduct(emit) {
                emit('addProduct', {
                    id: Math.max(...this.products.map(product => product.id)) + 1,
                    title: this.productName,
                    price: this.productPrice,
                    image: '/no_photo.jpg'
                });
                this.productName = this.productPrice = '';
                this.$router.push({ name: 'PageProductList' });
            },
            isRequired(value) {
                if (value && value.trim()) {
                    return true;
                }

                return 'Field is required!'
            },
            checkPrice(value) {
                const required = this.isRequired(value);

                if (required !== true) {
                    return required;
                }

                if (+value > 0) {
                    return true;
                }

                return 'Field must be "Numeric" > 0'
            }
        },
        props: {
            maxId: Number,
            products: Object
        }
    };
</script>

<template>
    <div class="add_product_form">
        <h2>Добавить товар {{ this.login }}</h2>

        <Form @submit="addProduct(emit)">
            Название товара:<br/>
            <Field name="productName" v-model="productName" :rules="isRequired"/><br/>
            <ErrorMessage name="productName"/><br/><br/>

            Цена:<br/>
            <Field name="productPrice" v-model="productPrice" :rules="checkPrice"/><br/>
            <ErrorMessage name="productPrice"/><br/><br/>

            <button>Добавить</button>
        </Form>
    </div>
</template>
