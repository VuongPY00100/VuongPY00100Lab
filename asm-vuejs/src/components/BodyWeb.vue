<script setup lang="ts">

</script>

<template>
    <section class="row">
        <div class="col-sm-4">
            <h2 class="text-success-emphasis mb-3" style="text-align: left">Bài viết nổi bật</h2>
            <div>
                <ul class="list-group">
                    <li class="list-group-item d-flex align-items-center">
                        <img src="/src/assets/AnhTin/AT1.png" class="me-3 rounded" alt="#" style="width:100px; height:60px;"> <br>
                        <div class="left-text">
                            <p class="mb-1 fw-semibold">Biết ơn đời, đời sẽ thương ta</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <div class="col-sm-8">
            <h2 class="text-success-emphasis mb-3" style="text-align: left">Bài viết được đề xuất</h2>
            <div class="card mb-3">
                <div class="row g-0">                
                    <div>
                        <div class="card-body">
                            <h5 class="card-title">
                                Phương pháp tập Pilates giúp phục hồi chấn thương cột sống 
                            </h5>

                            <div class="col-sm-5">
                                <img src="#" alt="Phương pháp tập Pilates">
                            </div>

                            <p class="card-text text-secondary">
                                Ngoài việc giúp duy trì vóc dáng, cải thiện sự linh hoạt, đều đặn cho người tập, 
                                Pilates giúp cơ bắp và các khớp hoạt động hiệu quả, khoẻ mạnh hơn.
                            </p>
                        </div>

                        <div class="card-body">
                            <h5 class="card-title">
                                Jojo theme
                            </h5>

                            <iframe width="300" height="175" src="https://www.youtube.com/embed/U0TXIXTzJEY?si=atx0gqYw1NkHM7dT" 
                            title="YouTube video player" frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped>
    .left-text{
        text-align: left;
    }
</style>