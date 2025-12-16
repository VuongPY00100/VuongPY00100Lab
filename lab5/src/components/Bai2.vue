<script setup lang="ts">
import { ref } from 'vue';

const userInput = ref(' ');
</script>
<!-- -->
<template>
    <div class="#">
        <input v-model="userInput" placeholder="Nhập dữ liệu vào đây" />
        <p>Giá trị bạn nhập: {{ userInput }}</p>
    </div>
</template>
<!-- -->
<style scoped>

</style>
