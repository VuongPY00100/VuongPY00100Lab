<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const activeTab = ref('baiViet')

const isLogin = ref(false)
const user = ref(null)

const userPosts = ref([])   
const userVideos = ref([])  

// load data video và bài viết của user
const loadUser = () => {
  isLogin.value = localStorage.getItem('isLogin') === 'true'

  if (isLogin.value) {
    user.value = JSON.parse(localStorage.getItem('currentUser'))

    // Lọc bài viết/video của user
    const posts = JSON.parse(localStorage.getItem('posts') || '[]')
    userPosts.value = posts.filter(p => p.author === user.value.fullname)

    const videos = JSON.parse(localStorage.getItem('videos') || '[]')
    userVideos.value = videos.filter(v => v.author === user.value.fullname)
  } else {
    user.value = null
    userPosts.value = []
    userVideos.value = []
  }
}

const logout = () => {
  localStorage.removeItem('isLogin')
  localStorage.removeItem('currentUser')

  window.dispatchEvent(new Event('f5'))

  isLogin.value = false
  user.value = null
}

onMounted(() => {
  loadUser()
  window.addEventListener('f5', loadUser)
})

onBeforeUnmount(() => {
  window.removeEventListener('f5', loadUser)
})
</script>
<template>
  <section class="row tren">
      <div class="col-sm-4">
        <h3 class="text-success-emphasis mb-3 tieuDeThongTin">Thông tin người dùng</h3>
        <div class="card p-3">
          <!-- chưa login -->
          <div v-if="!isLogin" class="text-start">
            <i class="bi bi-person-circle fs-1"></i>
            <h4 class="mt-2">Bạn chưa đăng nhập!</h4>

            <router-link to="/login" class="btn btn-primary">Đăng nhập</router-link>
          </div>

          <!-- đã login -->
          <div v-else>
            <p><strong>Họ tên:</strong> {{ user?.fullname }}</p>
            <p><strong>Email:</strong> {{ user?.email }}</p>
            <p><strong>SĐT:</strong> {{ user?.phone }}</p>
            <p><strong>Giới tính:</strong> {{ user?.gender }}</p>

            <button class="btn btn-danger mt-3" @click="logout">
              Đăng xuất
            </button>
          </div>
        </div>
      </div>

      <div class="col-sm-8" style="width: 600px;">
        <h2 class="text-success-emphasis mb-3" style="text-align: left">Hoạt động của tôi</h2>
        <div class="mb-3">
          <div v-if="!isLogin" class="card mt-5">
            <h4 class="text-danger mt-3 mb-3 ms-3">Bạn cần đăng nhập</h4>
          </div>

          <div v-else>
            <div class="container mt-4">
              <!-- Nav tabs -->
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <button
                    class="nav-link"
                    :class="{ active: activeTab === 'baiViet' }"
                    @click="activeTab = 'baiViet'">
                    Bài viết
                  </button>
                </li>

                <li class="nav-item">
                  <button
                    class="nav-link"
                    :class="{ active: activeTab === 'video' }"
                    @click="activeTab = 'video'">
                    Video
                  </button>
                </li>

                <!--li class="nav-item">
                  <button
                    class="nav-link"
                    :class="{ active: activeTab === 'comment' }"
                    @click="activeTab = 'comment'">
                    Bình luận
                  </button>
                </li-->
              </ul>

              <!-- nội dung tab -->
              <div class="border p-3">
                <!-- TAB BÀI VIẾT -->
                <div v-if="activeTab === 'baiViet'">
                  <div
                    v-for="post in userPosts"
                    :key="post.id"
                    class="card p-2 mb-2"
                  >
                    <router-link
                      :to="`/baiviet`"
                      class="text-decoration-none text-dark"
                    >
                      <h6>{{ post.title }}</h6>
                      <p class="text-truncate">{{ post.content }}</p>
                    </router-link>
                  </div>

                  <p v-if="userPosts.length === 0" class="text-muted">
                    Chưa có bài viết nào
                  </p>
                </div>

                <!-- TAB VIDEO -->
                <div v-if="activeTab === 'video'">
                  <div
                    v-for="video in userVideos"
                    :key="video.id"
                    class="card p-2 mb-2"
                  >
                    <router-link
                      :to="`/video`"
                      class="text-decoration-none text-dark"
                    >
                      <h6>{{ video.title }}</h6>
                    </router-link>
                  </div>

                  <p v-if="userVideos.length === 0" class="text-muted">
                    Chưa có video nào
                  </p>
                </div>

                <!--div v-if="activeTab === 'comment'">
                  <p>Chưa có bài viết nào</p>
                </div-->
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
</template>
<style scoped>
.tren {
  padding-top: 10px;
}

.tieuDeThongTin {
  text-align: left;
}

.text-truncate {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
