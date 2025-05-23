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

    <form class="card auth">
        <div class="card-content">
            <div class="title">
                {{ register ? 'Register' : 'Login' }}
            </div>  
            <div class="content">
                <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                        <input class="input" type="email" placeholder="Email">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Password</label>
                    <div class="control">
                        <input class="input" type="password" placeholder="Password">
                    </div>
                </div>  
                <div class="field">
                    <div class="control">
                        <button class="button is-danger" type="submit">
                            {{ register ? 'Register' : 'Login' }}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </form>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const register = ref(false);
</script>
<style scoped>
    .auth {
        width: 400px;
        margin: 0 auto;
    }
</style>
