<script setup>
import { ref, computed } from "vue";

const diem = ref("");

const hocLuc = computed(() => {
const value = parseFloat(diem.value);

    if (isNaN(value)) return "";

    if (value < 5.0) return "Yếu";
    else if (value < 6.5) return "Trung bình";
    else if (value < 8.0) return "Khá";
    else if (value < 9.0) return "Giỏi";
    else return "Xuất sắc";
});
</script>

<template>
    <div class="form">
        <h3>Xếp loại học sinh</h3>
        <input v-model="diem" step="0.1"
        placeholder="Nhập điểm trung bình"/> <br>
        <p>Kết quả: {{ hocLuc }}</p>
    </div>
</template>

<style scoped>
input {
    border-radius: 5px;
    border: 2px solid black;
    padding: 10px;
    width: 250px;
}

.form {
    width: 300px;
    margin: 20px auto;
    font-size: 18px;
}
</style>
