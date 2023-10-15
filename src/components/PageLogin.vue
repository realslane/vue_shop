<script setup>
    import {ErrorMessage, Form, Field} from 'vee-validate';
</script>
<script>
    export default {
        data() {
            return {
                login: '',
                password: ''
            };
        },
        mounted() {
            if (localStorage.login) {
                this.login = localStorage.login;
            }
        },
        emits: [ 'addProduct' ],
        methods: {
            checkLogin() {
                localStorage.login = this.login;
                this.$router.push('/add_product');
            },
            isRequired(value) {
                if (value && value.trim()) {
                    return true;
                }

                return 'Field is required'
            }
        },
        props: ['findByText', 'findByPrice', 'products']
    };
</script>

<template>
    <h2>Авторизация.</h2>

    <Form @submit="checkLogin()">
        Логин:<br/>
        <Field name="login" v-model="login" :rules="isRequired"/><br/>
        <ErrorMessage name="login"/><br/><br/>

        Пароль:<br/>
        <Field name="password" type="password" v-model="password" :rules="isRequired"/><br/>
        <ErrorMessage name="password"/><br/><br/>

        <button>Вход</button>
    </Form>
</template>
