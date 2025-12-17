<script setup>
import { ref, onMounted } from 'vue'

import { useRouter } from 'vue-router'
const router = useRouter()

/*người dùng*/
const isLogin = ref(false)
const currentUser = ref(null)

/*form*/
const title = ref('')
const iframeCode = ref('')

/*video data*/
const videos = ref([])       
const userVideos = ref([])

/*sửa data*/
const isEditing = ref(false)
const editId = ref(null)

/*load*/
onMounted(() => {
  isLogin.value = localStorage.getItem('isLogin') === 'true'
  currentUser.value = JSON.parse(localStorage.getItem('currentUser'))

  const data = localStorage.getItem('videos')
  if (data) {
    videos.value = JSON.parse(data)
    filterUserVideos()
  }
})

/*lưu*/
const saveLocal = () => {
  localStorage.setItem('videos', JSON.stringify(videos.value))
  filterUserVideos()
}

/*lọc video của người dùng*/
const filterUserVideos = () => {
  if (isLogin.value && currentUser.value?.fullname) {
    userVideos.value = videos.value.filter(v => v.author === currentUser.value.fullname)
  } else {
    userVideos.value = []
  }
}

/*tạo và sửa*/
const submitVideo = () => {
  if (!isLogin.value) {
    alert('Vui lòng đăng nhập để thêm video')
    router.push('/login')
    return
  }

  if (!title.value || !iframeCode.value) {
    alert('Vui lòng nhập đầy đủ thông tin')
    return
  }

  if (isEditing.value) {
    const video = videos.value.find(v => v.id === editId.value)
    if (!video) return

    if (video.author !== currentUser.value?.fullname) {
      alert('Bạn không thể sửa video này!')
      resetForm()
      return
    }

    video.title = title.value
    video.iframeCode = iframeCode.value
  } else {
    videos.value.unshift({
      id: Date.now(),
      title: title.value,
      iframeCode: iframeCode.value,
      author: currentUser.value?.fullname || 'Ẩn danh'
    })
  }

  saveLocal()
  resetForm()
}

/*sửa*/
const editVideo = (video) => {
  if (video.author !== currentUser.value?.fullname) {
    alert('Bạn không thể sửa video này!')
    return
  }

  title.value = video.title
  iframeCode.value = video.iframeCode
  isEditing.value = true
  editId.value = video.id
}

/*xóa*/
const deleteVideo = (id) => {
  const video = videos.value.find(v => v.id === id)
  if (!video) return

  if (video.author !== currentUser.value?.fullname) {
    alert('Bạn không có quyền xóa video này!')
    return
  }

  if (!confirm('Bạn có chắc muốn xóa video này?')) return

  videos.value = videos.value.filter(v => v.id !== id)
  saveLocal()

  if (editId.value === id) resetForm()
}

/*làm mới form*/
const resetForm = () => {
  title.value = ''
  iframeCode.value = ''
  isEditing.value = false
  editId.value = null
}
</script>

<template>
    <div class="container mt-4">
        <div class="row">
            <!--form-->
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{{ isEditing ? 'Sửa video' : 'Thêm video' }}</h5>
                        <input v-model="title"
                        class="form-control mb-2"
                        placeholder="Tiêu đề video"/>

                        <textarea v-model="iframeCode" class="form-control mb-3"
                        rows="5" placeholder="Dán code iframe YouTube vào đây (width=450, height=255)"></textarea>

                        <button class="btn btn-primary w-100"
                        @click="submitVideo" >
                        {{ isEditing ? 'Cập nhật' : 'Thêm video' }}
                        </button>

                        <button v-if="isEditing"
                        class="btn btn-secondary w-100 mt-2"
                        @click="resetForm">
                        Hủy sửa</button>

                        <p v-if="isLogin" class="text-muted mt-2">
                        Video của: <b>{{ currentUser?.fullname || 'Ẩn danh' }}</b>
                        </p>
                    </div>
                </div>
            </div>

            <!--danh sách-->
            <div class="col-md-8">
                <h5>Danh sách video của bạn</h5>

                <p v-if="userVideos.length === 0" class="text-muted">
                Chưa có video nào
                </p>

                <div v-for="video in userVideos"
                :key="video.id" class="card mb-3" >
                    <div class="card-body">
                        <h5 class="card-title">{{ video.title }}</h5>

                        <!--hiện iframe-->
                        <div v-html="video.iframeCode" class="mb-2"></div>
                        <small class="text-muted">
                        Tác giả: {{ video.author }}
                        </small>

                        <div class="d-flex gap-2 mt-2">
                        <button
                            class="btn btn-sm btn-warning"
                            @click="editVideo(video)"
                        > Sửa</button>

                        <button
                            class="btn btn-sm btn-danger"
                            @click="deleteVideo(video.id)"
                        > Xóa</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>