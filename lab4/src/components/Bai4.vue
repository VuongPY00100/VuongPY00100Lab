<script setup lang="ts">
import { ref } from 'vue'

interface Post {
  title: string
  content: string
  image: string
}

const posts = ref<Post[]>([
  {
    title: "Bão Koto còn cấp 9, hướng Gia Lai - Đăk Lăk",
    content: "Bão Koto gần như ít di chuyển và đang chịu tác động của không khí lạnh nên sẽ giảm cường độ.",
    image: "src/assets/Tin1.jpg"
  },
  {
    title: "Giá vàng miếng lập kỷ lục gần 155 triệu đồng",
    content: "Mỗi lượng vàng miếng sáng nay tăng 700.000 đồng, lập đỉnh mới gần 155 triệu.",
    image: "src/assets/Tin2.jpg"
  },
  {
    title: "Airbus triệu hồi 6.000 máy bay",
    content: "Ngày 28/11, Airbus ra thông báo triệu hồi khẩn cấp 6.000 chiếc máy bay dòng A320.",
    image: "src/assets/Tin3.jpg"
  }
])

function showDetail(title: string) {
  alert("Bạn chọn: " + title)
}
</script>

<template>
  <div class="container py-4">
    <h3 class="text-primary mb-4">Danh sách tin tức</h3>

    <div class="row">
      <div
        class="col-md-4"
        v-for="(p, index) in posts"
        :key="index"
      >
        <div class="card mb-4 shadow-sm">
          <img
            :src="p.image"
            class="card-img-top"
            alt="Hình ảnh bài viết"
          >

          <div class="card-body">
            <h5 class="card-title">{{ p.title }}</h5>
            <p class="card-text">{{ p.content }}</p>

            <button
              class="btn btn-primary"
              @click="showDetail(p.title)"
            >
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.card img {
  height: 200px;
  object-fit: cover;
}
</style>
