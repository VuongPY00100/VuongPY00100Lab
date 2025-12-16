<script setup>
import { ref } from 'vue'

const fullName = ref('')
const email = ref('')
const password = ref('')
const birthday = ref('')

const genders = ref([])
const languages = ref([])
const result = ref(null)

const register = () => {
    result.value = {
        fullName: fullName.value,
        email: email.value,
        birthday: birthday.value,
        genders: [...genders.value],
        languages: [...languages.value]
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="#">
                <h2>Form Đăng Ký</h2>
                <div class="form-group text-start">
                    <label>Họ tên:</label>
                    <input v-model="fullName" type="text" class="form-control" />
                </div>

                <div class="form-group text-start">
                    <label>Email:</label>
                    <input v-model="email" type="email" class="form-control" />
                </div>

                <div class="form-group text-start">
                    <label>Mật khẩu:</label>
                    <input v-model="password" type="password" class="form-control" />
                </div>

                <div class="form-group text-start">
                    <label>Ngày sinh:</label>
                    <input v-model="birthday" type="date" class="form-control" />
                </div>

                <div class="form-group text-start">
                    <label>Giới tính:</label> <br>
                    <input type="checkbox" value="Nam" v-model="genders" /> Nam
                    <input type="checkbox" value="Nữ" v-model="genders" /> Nữ
                    <input type="checkbox" value="Khác" v-model="genders" /> Khác
                </div>

                <div class="form-group text-start">
                    <label>Ngôn ngữ:</label> <br>
                    <input type="checkbox" value="Tiếng Việt" v-model="languages" /> Tiếng Việt
                    <input type="checkbox" value="Tiếng Anh" v-model="languages" /> Tiếng Anh
                    <input type="checkbox" value="Tiếng Nhật" v-model="languages" /> Tiếng Nhật
                </div>
                <button class="btn btn-primary" @click="register">Đăng ký</button> <br>
            </div>

            <div class="#">
                <div v-if="result">
                    <h3>Thông tin đã đăng ký:</h3>
                    <p><strong>Họ tên:</strong> {{ result.fullName }}</p>
                    <p><strong>Email:</strong> {{ result.email }}</p>
                    <p><strong>Ngày sinh:</strong> {{ result.birthday }}</p>
                    <p><strong>Giới tính:</strong> {{ result.genders.join(', ') }}</p>
                    <p><strong>Ngôn ngữ:</strong> {{ result.languages.join(', ') }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
