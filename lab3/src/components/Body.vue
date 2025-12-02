<script setup lang="ts">

</script>
<!-- -->
<template>
    <section class="row">
        <aside class="col-sm-4 ">
            <h2 class="text-info mb-3" style="text-align: left">Về tôi</h2>
            <div class="card bg-light">
                <img src="/src/assets/avatar.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Giới thiệu bản thân</h5>
                    <p class="card-text" style="text-align: left">TS. Trần Hoàng, Tổ chức Tư vấn sức khỏe quốc tế độc lập.<br>
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
                        
                        <div>
                            <div class="card-body">
                                <h5 class="card-title">
                                    Phương pháp tập Pilates giúp phục hồi chấn thương cột sống <br>
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
</template>
<!-- -->
<style scoped>

</style>