<script setup lang="ts">

</script>
<!-- -->
<template>
    <div class="container">
        <nav class="navbar navbar-expand-sm navbar-dark bg-col">
            <div class="container p-3 mb-2">
                <a class="navbar-brand" href="/index.html">
                    <img src="/src/assets/logo-energy-pilates.png" alt="Logo" style="width: 110px">
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="bi bi-list-task"></i> Bài viết</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="bi bi-film"></i> Video</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="bi bi-info-circle"></i> Giới thiệu</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="bi bi-calendar3"></i> Sự kiện</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown">
                                <i class="bi bi-person-fill"></i> Tài khoản
                            </a>
                            <ul class="dropdown-menu ">
                                <li><a class="dropdown-item" href="#">Đăng nhập</a></li>
                                <li><a class="dropdown-item" href="#">Quên mật khẩu</a></li>
                                <li><a class="dropdown-item" href="#">Đăng ký thành viên</a></li>
                            </ul>
                        </li>
                    </ul>

                    <ul class="navbar-nav d-flex">
                        <li class="nav-item">
                            <a class="nav-link">Tiếng Việt</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">Tiếng Anh</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> 
  </div>
</template>
<!-- -->
<style scoped>
    .bg-col{
        background-color: aqua;
    }

    a{
        color: black;
    }

    a:hover{
        color: gray;
    }
</style>