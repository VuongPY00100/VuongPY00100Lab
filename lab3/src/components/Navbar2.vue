<script setup lang="ts">

</script>
<!-- -->
<template>
    <header class="navbar">
        <div class="nav-left">
            <div class="logo">
                <span>Energy Pilates</span>
            </div>

            <ul class="nav-menu">
                <li><i class="bi bi-list-task"></i><a href="#"> Bài viết</a></li>
                <li><i class="bi bi-film"></i><a href="#"> Video</a></li>
                <li><i class="bi bi-info-circle"></i><a href="#"> Giới thiệu</a></li>
                <li><i class="bi bi-calendar3"></i><a href="#" > Sự kiện</a></li>
                <li class="dropdown">
                    <a href="#"><i class="bi bi-person-fill"></i> Tài khoản ▾</a>
                    <ul class="dropdown-menu">
                        <li><a href="#">Đăng nhập</a></li>
                        <li><a href="#">Đăng ký</a></li>
                        <li><a href="#">Hồ sơ</a></li>
                    </ul>
                </li>
            </ul>
        </div>

        <div class="nav-right">
            <a href="#">Tiếng Việt</a>
            <a href="#">Tiếng Anh</a>
        </div>
    </header>
</template>
<!-- -->
<style scoped>
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

/* Dropdown */
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
}
</style>
