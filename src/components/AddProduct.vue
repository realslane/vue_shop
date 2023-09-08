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
            };
        },
        methods: {
            addProduct(emit) {
                emit('addProduct', {
                    id: this.maxId + 1,
                    title: this.productName,
                    price: this.productPrice,
                    image: 'no_photo.jpg'
                });
                this.hideAddProduct();
            },
            hideAddProduct() {
                document.querySelector('.add_product_form').style.display = 'none';
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
            maxId: Number
        }
    };
</script>

<template>
    <div class="modal_form add_product_form">
        <button class="hide_form" @click="hideAddProduct">Закрыть</button>
        <h2>Добавить товар</h2>

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
