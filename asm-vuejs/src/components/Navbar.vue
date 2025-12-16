<script setup>
import { ref, onMounted } from 'vue'

const isLogin = ref(false)

const checkLogin = () => {
    isLogin.value = localStorage.getItem('isLogin') === 'true'
}

const logout = () => {
    localStorage.removeItem('isLogin')
    alert('Đã đăng xuất!')
    isLogin.value = false
}

onMounted(() => {
    checkLogin()
})
</script>
<!-- -->
<template>
    <header class="navbar ">
        <div class="nav-left">
            <div class="logo">
            <router-link to="/"><span>Blog</span></router-link>
            </div>

            <ul class="nav-menu">
                <li><i class="bi bi-list-task"></i><router-link to="/baiviet">Bài viết</router-link></li>
                <li><i class="bi bi-film"></i><router-link to="/video">Video</router-link></li>
                <li><i class="bi bi-info-circle"></i><a href="#"> Giới thiệu</a></li>
                <li><i class="bi bi-calendar3"></i><a href="#" > Sự kiện</a></li>
            </ul>
        </div>

        <div class="nav-righ">
            <!-- CHƯA LOGIN -->
            <router-link v-if="!isLogin" to="/login">
                Login
            </router-link>

            <!-- ĐÃ LOGIN -->
            <a v-else href="#" @click.prevent="logout">
                Logout
            </a>
        </div>
    </header>
</template>
<!-- -->
<style scoped>
label{
    text-align: left;
    display: block;
}

body {
    margin: 0;
    font-family: Arial, sans-serif;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 25px;
    background: #f4f8fb;
    border-bottom: 1px solid #ddd;
}

.logo span {
    background: #c5f18e;
    padding: 6px 14px;
    border-radius: 8px;
    font-weight: bold;
    color: #2e2e2e;
}

.nav-left {
    display: flex;
    align-items: center;
    gap: 25px;
}

.nav-menu {
    list-style: none;
    display: flex;
    gap: 20px;
    margin: 0;
    padding: 0;
}

.nav-menu a {
    color: #333;
    text-decoration: none;
    font-size: 15px;
}

.nav-right a {
    margin-left: 15px;
    text-decoration: none;
    color: #333;
}

/* Dropdown 
.dropdown {
    position: relative;
}

.dropdown-menu {
    display: none;
    position: absolute;
    background: white;
    list-style: none;
    padding: 10px 0;
    margin: 0;
    top: 22px;
    left: 0;
    min-width: 120px;
    border: 1px solid #ddd;
    border-radius: 6px;
}

.dropdown-menu li a {
    display: block;
    padding: 8px 15px;
    color: #333;
    text-decoration: none;
}

.dropdown:hover .dropdown-menu {
    display: block;
}*/
</style>
