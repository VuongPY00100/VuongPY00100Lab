<script setup>
// Import hình ảnh từ thư mục assets
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
const items = ([
    { title: '123', content: 'Dô', image: img1 },
    { title: 'ABC', content: 'XYZ', image: img2 },
    { title: 'Ngày xx, thàng 3,Teyvat', content: 'Ngày Hoa anh đào nở', image: img3 },
]);
</script>

<template>
    <div class="container mt-5">
        <h2 class="text-center">Bản tin</h2>
        <div class="row">
            <div class="col-sm-4 mb-4" v-for="(item, index) in items" :key="index">
                <div class="card">
                    <img :src="item.image" class="img-fluid" alt="Hình ảnh" />
                    <div class="card-body">
                        <h5 class="card-title">{{ item.title }}</h5>
                        <p class="card-text">{{ item.content }}</p>
                        <button class="btn btn-info">Xem chi tiết </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
