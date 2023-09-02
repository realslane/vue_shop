<script setup>
    import {ErrorMessage, Form, Field} from 'vee-validate';

    const emit = defineEmits();
</script>
<script>
    export default {
        data() {
            return {
                fio: '',
                birthdate: '',
                address: '',
                agree: ''
            };
        },
        methods: {
            confirmOrder() {
                const response = fetch('https://httpbin.org/post', {
                    method: 'POST',
                    body: JSON.stringify({
                        "id": this.id,
                        "fio": this.fio,
                        "birthdate": this.birthdate,
                        "address": this.address
                    }),
                }).then(response => {
                    this.hideOrderProduct();
                    alert('Ваш заказ принят!');
                });

            },
            hideOrderProduct() {
                document.querySelector('.order_product_form').style.display = 'none';
            },
            isRequired(value) {
                if (value && value.trim()) {
                    return true;
                }

                return 'Field is required!'
            },
            checkAgree(value) {
                if (value) {
                    return true;
                }

                return 'Agree is required!'
            }
        },
        props: {
            maxId: Number
        }
    };
</script>

<template>
    <div class="modal_form order_product_form">
        <button class="hide_form" @click="hideOrderProduct">Закрыть</button>
        <h2>Заказ товара. ID: <span id="order_prodict_id"></span></h2>

        <Form @submit="confirmOrder()">
            Ф.И.О.:<br/>
            <Field name="fio" v-model="fio" :rules="isRequired"/><br/>
            <ErrorMessage name="fio"/><br/><br/>

            Дата рождения:<br/>
            <Field name="birthdate" type="date" v-model="birthdate" :rules="isRequired"/><br/>
            <ErrorMessage name="birthdate"/><br/><br/>

            Адрес:<br/>
            <Field name="address" v-model="address" :rules="isRequired"/><br/>
            <ErrorMessage name="address"/><br/><br/>


            <Field name="agree" type="checkbox" v-model="agree" :value="true" :rules="checkAgree"/>
            Я соглашаюсь со всеми условиями<br/>
            <ErrorMessage name="agree"/><br/><br/>

            <button>Заказать</button>
        </Form>
    </div>
</template>
