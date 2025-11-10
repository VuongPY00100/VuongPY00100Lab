<script setup lang="ts">
</script>

<template>

  <div class="container dai">
    <!--header class="row bg-warning p-2">Header</header-->
   <nav class="navbar navbar-expand-sm navbar-dark">
    <div class="container p-3 mb-2 bg-info-subtle text-info-emphasis">
        <a class="navbar-brand" href="/index.html">
            <img src="/src/assets/logo-energy-pilates.png" alt="Logo" style="width: 150px;">
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav me-auto">
                <li class="nav-item">
                    <a class="nav-link col-black" href="#"><i class="fa-solid fa-list"></i> Bài viết</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link col-black" href="#"><i class="fa-solid fa-film"></i> Video</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link col-black" href="#"><i class="fa-solid fa-circle-info"></i> Giới thiệu</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link col-black" href="#"><i class="fa-solid fa-calendar-days"></i> Sự kiện</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle col-black" href="#" role="button" data-bs-toggle="dropdown">
                        <i class="fa-solid fa-user"></i> Tài khoản
                    </a>
                    <ul class="dropdown-menu col-black">
                        <li><a class="dropdown-item" href="#">Đăng nhập</a></li>
                        <li><a class="dropdown-item" href="#">Quên mật khẩu</a></li>
                        <li><a class="dropdown-item" href="#">Đăng ký thành viên</a></li>
                    </ul>
                </li>
            </ul>

            <ul class="navbar-nav d-flex">
                <li class="nav-item">
                    <a class="nav-link col-black">Tiếng Việt</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link col-black">Tiếng Anh</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

    <section class="row">
      <aside class="col-sm-4 ">
        <h2 class="text-info mb-3" style="text-align: left">Về tôi</h2>
        <div class="card bg-light">
            <img src="/src/assets/avatar.png" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Giới thiệu bản thân</h5>
                <p class="card-text">TS. Trần Hoàng, Tổ chức Tư vấn sức khỏe quốc tế độc lập.<br>
                    Châm ngôn: Ta không được chọn nơi mình sinh ra, nhưng ta được chọn cách mình sẽ sống.</p>
            </div>
        </div>

        <h4 class="text-info mt-2">Chuyên mục</h4>
        <ul class="list-group">
            <li class="list-group-item active bg-info d-flex justify-content-between align-items-center">
                <a class="nav-link" href="#">Chế độ tập</a>
                <span class="badge bg-primary rounded-pill">20</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <a class="nav-link" href="#">Chế độ dinh dưỡng</a>
                <span class="badge bg-primary rounded-pill">15</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <a class="nav-link" href="#">Kinh nghiệm cuộc sống</a>
                <span class="badge bg-primary rounded-pill">9</span>
            </li>
        </ul>
      </aside>


      <article class="col-sm-8">
        <h2 class="text-info mb-3" style="text-align: left">Bolg của tôi</h2>
        <div class="card bg-light">
            <img src="#" class="card-img-top" alt="">
            <div class="card-body">
              
<div class="container my-4">
    <div class="row">
        <!-- Bài viết chính bên trái -->
        <div class="col-md-8">
            <div class="card mb-3">
                <div class="row g-0">
                    
                    <div class="col-md-7">
                        <div class="card-body">
                            <h5 class="card-title">
                                Phương pháp tập Pilates giúp phục hồi chấn thương cột sống 
                                <i class="bi bi-chat-left-fill"></i> 16
                            </h5>

                    <div class="col-md-5">
                        <img src="/src/assets/yoga.jpg" alt="Phương pháp tập Pilates">
                    </div>

                            <p class="card-text text-secondary">
                                Ngoài việc giúp duy trì vóc dáng, cải thiện sự linh hoạt, đều đặn cho người tập, 
                                Pilates giúp cơ bắp và các khớp hoạt động hiệu quả, khoẻ mạnh hơn.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <!-- Danh sách bài viết bên phải -->
        <div class="col-md-4">
            <ul class="list-group">
                <li class="list-group-item d-flex align-items-center">
                    <img src="/src/assets/biet-on-doi.jpg" class="me-3 rounded" alt="Biết ơn" style="width:60px; height:60px;">
                    <div>
                        <p class="mb-1 fw-semibold">Biết ơn đời, đời sẽ thương ta <i class="bi bi-chat-left-fill"></i>30</p>
                    </div>
                </li>
                <li class="list-group-item d-flex align-items-center">
                    <img src="/src/assets/cam.jpg" class="me-3 rounded" alt="Cam" style="width:60px; height:60px;">
                    <div>
                        <p class="mb-1 fw-semibold">9 tác dụng tuyệt vời của quả cam</p>
                        <small class="text-muted"><i class="bi bi-chat-left-fill"></i> 28</small>
                    </div>
                </li>
                <li class="list-group-item d-flex align-items-center">
                    <img src="/src/assets/dau-dua.jpg" class="me-3 rounded" alt="Dầu" style="width:60px; height:60px;">
                    <div>
                        <p class="mb-1 fw-semibold">10 công dụng bất ngờ từ dầu dừa</p>
                        <small class="text-muted"><i class="bi bi-chat-left-fill"></i> 14</small>
                    </div>
                </li>
                <li class="list-group-item d-flex align-items-center">
                    <img src="/src/assets/rau.jpg" class="me-3 rounded" alt="Rau" style="width:60px; height:60px;">
                    <div>
                        <p class="mb-1 fw-semibold">Lợi ích khi ăn rau mỗi ngày</p>
                        <small class="text-muted"><i class="bi bi-chat-left-fill"></i> 12</small>
                    </div>
                </li>
            </ul>
        </div>
    </div>

    <!-- Nút Xem thêm -->
    <div class="text-center mt-4">
        <button class="btn btn-info text-white px-4">Xem thêm</button>
    </div>
</div>

            </div>
        </div>
      </article>
    </section>
    <footer class="row bg-dark p-3 col-white" style="margin-top: 25px;">
      <p style="text-align: center;"><i class="bi bi-c-circle"></i> Copyright by Polytechnic</p>
    </footer>
  </div>

</template>

<style scoped>
.link:hover{
  color: gray;
}
.dai{
  width: 1200px;
}
.col-white{
  color: white;
  
}
.col-black{
  color: black;
}
</style>
