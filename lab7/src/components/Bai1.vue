<script setup>
import { ref } from 'vue';

const newToDo = ref('');
const jobs = ref(['Ăng sáng', 'Đi học', 'Chơi bóng rổ']);

const addList = () => {
    if (newToDo.value.trim()) {
        jobs.value.push(newToDo.value.trim());
        newToDo.value = '';
    }
};

const removeList = (index) => {
    jobs.value.splice(index, 1);
};
</script>
<template>
    <div class="container">
        <h3 class="text-center">Quản lý công việc</h3>
        <form @submit.prevent="addList">
            <div class="mb-3 text-start">
                <label class="form-label">Tên công việc: </label>
                <input type="text" class="form-control" v-model="newToDo" placeholder="Nhập tên cồn việc">
            </div>
            <button type="submit" class="btn btn-primary">Thêm công việc</button>
        </form>

        <ul class="list-group mt-4">
            <li class="list-group-item d-flex justify-content-between align-item-center" 
            v-for="(job, index) in jobs" :key="index"> {{ job }}
            <button class="btn btn-danger btn-sm" @click="removeList(index)">Xóa</button>
            </li>
        </ul>
    </div>
</template>
<style scoped>

</style>
        