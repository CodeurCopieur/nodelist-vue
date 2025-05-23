<template>
  <div class="auth-form">
    <div class="tabs is-centered">
        <ul>
            <li :class="{ 'is-active': !register }">
                <a @click="register = false">Login</a>
            </li>
            <li :class="{ 'is-active': register }">
                <a @click="register = true">Register</a>
            </li>
        </ul>
    </div>

    <form class="card auth" @submit.prevent="handleSubmit">
        <div class="card-content">
            <div class="title">
                <!-- {{ register ? 'Register' : 'Login' }} -->
                {{ formTitle }}
            </div>  
            <div class="content">
                <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                        <input class="input" type="email" placeholder="Email" v-model="credentials.email">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Password</label>
                    <div class="control">
                        <input class="input" type="password" placeholder="Password" v-model="credentials.password">
                    </div>
                </div>  
                <div class="field is-grouped is-grouped-right">
                    <div class="control">
                        <button class="button is-danger" type="submit">
                            <!-- {{ register ? 'Register' : 'Login' }} -->
                            {{ formTitle }}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </form>
  </div>
</template>
<script setup>
import { ref, computed, reactive } from 'vue';

const register = ref(false);

const formTitle = computed(() => {
    return register.value ? 'Register' : 'Login';
});

const credentials = reactive({
    email: '',
    password: '',
});

const handleSubmit = () => {
    if (!credentials.email || !credentials.password) {
        alert('Please fill in all fields : ' + credentials.email + ' ' + credentials.password); 
        return;
    }

    if (register.value) {
        console.log('Register : ', credentials);
    } else {
        console.log('Login : ', credentials);
    }
};
</script>
<style scoped>
    .auth {
        width: 400px;
        margin: 0 auto;
    }
</style>
