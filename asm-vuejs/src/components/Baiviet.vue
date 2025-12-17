<script setup>
import { ref, onMounted } from 'vue'

import { useRouter } from 'vue-router'
const router = useRouter()

/*người dùng*/
const isLogin = ref(false)
const currentUser = ref(null)

/*form*/
const title = ref('')
const content = ref('')
const image = ref('')

/*data*/
const posts = ref([])
const userPosts = ref([])

/*sửa data*/
const isEditing = ref(false)
const editId = ref(null)

/*load*/
onMounted(() => {
  isLogin.value = localStorage.getItem('isLogin') === 'true'
  currentUser.value = JSON.parse(localStorage.getItem('currentUser'))

  const data = localStorage.getItem('posts')
  if (data) {
    posts.value = JSON.parse(data)
    filterUserPosts()
  }
})

/*lưu*/
const saveLocal = () => {
  localStorage.setItem('posts', JSON.stringify(posts.value))
  filterUserPosts()
}

/*lọc bài viết của người dùng*/
const filterUserPosts = () => {
  if (isLogin.value && currentUser.value?.fullname) {
    userPosts.value = posts.value.filter(p => p.author === currentUser.value.fullname)
  } else {
    userPosts.value = []
  }
}

/*tạo và sửa*/
const submitPost = () => {
  if (!isLogin.value) {
    alert('Vui lòng đăng nhập để đăng bài')
    router.push('/login')
    return
  }

  if (!title.value || !content.value) {
    alert('Vui lòng nhập tiêu đề và nội dung')
    return
  }

  if (isEditing.value) {
    const post = posts.value.find(p => p.id === editId.value)
    if (!post) return

    if (post.author !== currentUser.value?.fullname) {
      alert('Bạn không thể sửa bài viết này!')
      resetForm()
      return
    }

    post.title = title.value
    post.content = content.value
    post.image = image.value
  } else {
    posts.value.unshift({
      id: Date.now(),
      title: title.value,
      content: content.value,
      image: image.value,
      author: currentUser.value?.fullname || 'Ẩn danh'
    })
  }

  saveLocal()
  resetForm()
}

/* sửa bài viết */
const editPost = (post) => {
  if (post.author !== currentUser.value?.fullname) {
    alert('Bạn không thể sửa bài viết này!')
    return
  }

  title.value = post.title
  content.value = post.content
  image.value = post.image
  isEditing.value = true
  editId.value = post.id
}

/* xóa bài viết */
const deletePost = (id) => {
  const post = posts.value.find(p => p.id === id)
  if (!post) return

  if (post.author !== currentUser.value?.fullname) {
    alert('Bạn không thể xóa bài viết này!')
    return
  }

  if (!confirm('Bạn có chắc muốn xóa bài viết này?')) return

  posts.value = posts.value.filter(p => p.id !== id)
  saveLocal()

  if (editId.value === id) resetForm()
}

/* làm mới form */
const resetForm = () => {
  title.value = ''
  content.value = ''
  image.value = ''
  isEditing.value = false
  editId.value = null
}
</script>

<template>
    <div class="container mt-4">
        <div class="row">
            <!-- form-->
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">
                        {{ isEditing ? 'Sửa bài viết' : 'Tạo bài viết' }}
                        </h5>

                        <input
                        v-model="title"
                        class="form-control mb-2"
                        placeholder="Tiêu đề"
                        />

                        <textarea
                        v-model="content"
                        class="form-control mb-2"
                        rows="3"
                        placeholder="Nội dung"
                        ></textarea>

                        <input
                        v-model="image"
                        class="form-control mb-2"
                        placeholder="Link ảnh (Không bắt buộc)"
                        />

                        <button
                        class="btn btn-primary w-100"
                        @click="submitPost"
                        >
                        {{ isEditing ? 'Cập nhật' : 'Đăng bài' }}
                        </button>

                        <button
                        v-if="isEditing"
                        class="btn btn-secondary w-100 mt-2"
                        @click="resetForm"
                        >
                        Hủy sửa
                        </button>

                        <p v-if="isLogin" class="text-muted mt-2">
                        Đăng bởi: <b>{{ currentUser?.fullname || 'Ẩn danh' }}</b>
                        </p>
                    </div>
                </div>
            </div>

            <!--danh sách bài viết-->
            <div class="col-md-8">
                <h5>Danh sách bài viết của bạn</h5>

                <p v-if="userPosts.length === 0" class="text-muted">
                Chưa có bài viết nào
                </p>

                <div v-for="post in userPosts" :key="post.id" class="card mb-3">
                    <img
                        v-if="post.image"
                        :src="post.image"
                        class="card-img-top m-2"
                        @error="e => e.target.src='https://via.placeholder.com/400x200'"
                        style="width: 500px; height: auto;" />

                    <div class="card-body">
                        <h5>{{ post.title }}</h5>
                        <p>{{ post.content }}</p>

                        <small class="text-muted">
                        Tác giả: {{ post.author }}
                        </small>

                        <div class="d-flex gap-2 mt-2">
                        <button
                            class="btn btn-sm btn-warning"
                            @click="editPost(post)"
                        > Sửa</button>

                        <button
                            class="btn btn-sm btn-danger"
                            @click="deletePost(post.id)"
                        > Xóa</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
