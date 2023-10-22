<script setup>
    import {ErrorMessage, Form, Field} from 'vee-validate';
</script>
<script>
    export default {
        data() {
            return {
                fio: '',
                address: '',
                email: '',
                phone: '',
                agree: ''
            };
        },
        emits: [ 'addProduct' ],
        methods: {
            confirmOrder() {
                const response = fetch('https://httpbin.org/post', {
                    method: 'POST',
                    body: JSON.stringify({
                        "id": this.id,
                        "fio": this.fio,
                        "email": this.birthdate,
                        "phone": this.phone,
                        "address": this.address
                    }),
                }).then(response => {
                    localStorage.setItem('cart', JSON.stringify({}));
                    alert('Ваш заказ принят!');
                });

            },
            isRequired(value) {
                if (value && value.trim()) {
                    return true;
                }

                return 'Field is required'
            },
            checkAgree(value) {
                if (value) {
                    return true;
                }

                return 'Agree is required'
            },
            checkEmail(value) {
                const required = this.isRequired(value);
                if (required !== true) {
                    return required;
                }

                if (value.match(/^\S+@\S+\.\S+$/)) {
                    return true;
                }

                return 'Must be a valid email'
            },
            checkPhone(value) {
                const required = this.isRequired(value);
                if (required !== true) {
                    return required;
                }

                if (value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)) {
                    return true;
                }

                return 'Must be a valid phone'
            }
        },
        props: ['findByText', 'findByPrice', 'products']
    };
</script>

<template>
    <h2>Заказ выбранных товаров.</h2>

    <Form @submit="confirmOrder()">
        Ф.И.О.:<br/>
        <Field name="fio" v-model="fio" :rules="isRequired"/><br/>
        <ErrorMessage name="fio"/><br/><br/>

        Адрес:<br/>
        <Field name="address" v-model="address" :rules="isRequired"/><br/>
        <ErrorMessage name="address"/><br/><br/>

        Email:<br/>
        <Field name="email" type="email" v-model="email" :rules="checkEmail"/><br/>
        <ErrorMessage name="email"/><br/><br/>

        Телефон:<br/>
        <Field name="phone" type="phone" v-model="phone" :rules="checkPhone"/><br/>
        <ErrorMessage name="phone"/><br/><br/>


        <Field name="agree" type="checkbox" v-model="agree" :value="true" :rules="checkAgree"/>
        Я соглашаюсь со всеми условиями<br/>
        <ErrorMessage name="agree"/><br/><br/>

        <button>Заказать</button>
    </Form>
</template>
