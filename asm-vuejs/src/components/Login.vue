<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeTab = ref('login')

//REGISTER
const registerData = ref({
    fullname: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    gender: '',
    terms: false
})

const handleRegister = () => {
    const users = JSON.parse(localStorage.getItem('users')) || []
    // check trùng email
    if (users.some(u => u.email === registerData.value.email)) {
        alert('Email đã tồn tại!')
        return
    }

    if (registerData.value.password !== registerData.value.confirmPassword) {
        alert('Mật khẩu xác nhận không khớp!')
        return
    }

    if (!registerData.value.terms) {
        alert('Bạn chưa đồng ý điều khoản!')
        return
    }

    users.push({
        fullname: registerData.value.fullname,
        email: registerData.value.email,
        phone: registerData.value.phone,
        password: registerData.value.password,
        gender: registerData.value.gender
    })

    localStorage.setItem('users', JSON.stringify(users))
    alert('Đăng ký thành công!')

    //reset form
    registerData.value = {
        fullname: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        gender: '',
        terms: false
    }

    activeTab.value = 'login'
}

//LOGIN
const loginEmail = ref('')
const loginPassword = ref('')

const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users')) || []

    const user = users.find(
        u =>
            u.email === loginEmail.value &&
            u.password === loginPassword.value
    )

    if (!user) {
        alert('Email hoặc mật khẩu không đúng!')
        return
    }

    localStorage.setItem('isLogin', 'true')
    localStorage.setItem('currentUser', JSON.stringify(user))

    //phát event cho Nav
    window.dispatchEvent(new Event('f5'))

    alert('Đăng nhập thành công!')

    loginEmail.value = ''
    loginPassword.value = ''

    router.push('/')
}

const onlyNumber = () => {
    registerData.value.phone =
        registerData.value.phone.replace(/\D/g, '')
}

</script>
<template>
    <div class="container mt-4" style="width: 450px;">
        <!-- tab -->
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <button
                    class="nav-link"
                    :class="{ active: activeTab === 'login' }"
                    @click="activeTab = 'login'" >
                    Đăng nhập
                </button>
            </li>
            <li class="nav-item">
                <button
                    class="nav-link"
                    :class="{ active: activeTab === 'register' }"
                    @click="activeTab = 'register'">
                    Đăng ký
                </button>
            </li>
        </ul>

        <div class="tab-content mt-3">
            <!-- login -->
            <div v-if="activeTab === 'login'" class="card p-4">
                <h4 class="center">Đăng nhập</h4>
                <form @submit.prevent="handleLogin">
                    <div class="mb-3">
                        <label>Email</label>
                        <input type="email" class="form-control" v-model="loginEmail">
                    </div>

                    <div class="mb-3">
                        <label>Mật khẩu</label>
                        <input type="password" class="form-control" v-model="loginPassword">
                    </div>

                    <button class="btn btn-primary w-100">Đăng nhập</button>
                </form>
            </div>

            <!-- register -->
            <div v-if="activeTab === 'register'" class="card p-4">
                <h4 class="center">Đăng ký</h4>
                <form @submit.prevent="handleRegister">

                    <div class="mb-3">
                        <label>Họ và tên</label>
                        <input class="form-control" v-model="registerData.fullname">
                    </div>

                    <div class="mb-3">
                        <label>Email</label>
                        <input type="email" class="form-control" v-model="registerData.email">
                    </div>

                    <div class="mb-3">
                        <label>Số điện thoại</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="registerData.phone"
                            maxlength="12"
                            @input="onlyNumber"
                        >
                    </div>

                    <div class="mb-3">
                        <label>Mật khẩu</label>
                        <input type="password" class="form-control" v-model="registerData.password">
                    </div>

                    <div class="mb-3">
                        <label>Xác nhận mật khẩu</label>
                        <input type="password" class="form-control" v-model="registerData.confirmPassword">
                    </div>

                    <div class="mb-3">
                        <label class="d-block">Giới tính</label>
                        <div class="form-check form-check-inline">
                            <input
                                class="form-check-input"
                                type="radio"
                                value="Nam"
                                v-model="registerData.gender"
                            >
                            <label class="form-check-label">Nam</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input
                                class="form-check-input"
                                type="radio"
                                value="Nữ"
                                v-model="registerData.gender"
                            >
                            <label class="form-check-label">Nữ</label>
                        </div>
                    </div>

                    <div class="form-check mb-3">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            v-model="registerData.terms"
                        >
                        <label class="form-check-label">
                            Tôi đồng ý với điều khoản
                        </label>
                    </div>

                    <button class="btn btn-success w-100">Đăng ký</button>
                </form>
            </div>
        </div>
    </div>
</template>
<style scoped>
.center {
    text-align: center;
}
</style>