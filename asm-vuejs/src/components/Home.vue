<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'

/* ===== Người dùng hiện tại ===== */
const currentUser = ref(null)

onMounted(() => {
  const userData = localStorage.getItem('currentUser')
  if (userData) currentUser.value = JSON.parse(userData)
})

/* ===== Bài viết ===== */
const posts = ref([])
const keywordPost = ref('')
const selectedPost = ref(null)

/* ===== Video ===== */
const videos = ref([])
const keywordVideo = ref('')

/* ===== Bình luận ===== */
const newComment = ref('')
const editIndex = ref(-1)
const editCommentText = ref('')

onMounted(() => {
  const postData = localStorage.getItem('posts')
  if (postData) posts.value = JSON.parse(postData)

  const videoData = localStorage.getItem('videos')
  if (videoData) videos.value = JSON.parse(videoData)
})

/* ===== Lọc hiển thị ===== */
const filteredPosts = computed(() => {
  return posts.value
    .filter(post =>
      post.title.toLowerCase().includes(keywordPost.value.toLowerCase())
    )
    .slice(0, 5)
})

const filteredVideos = computed(() => {
  return videos.value
    .filter(video =>
      video.title.toLowerCase().includes(keywordVideo.value.toLowerCase())
    )
    .slice(0, 3)
})

/* ===== Thêm bình luận ===== */
const addComment = (post) => {
  if (!newComment.value.trim()) return
  if (!post.comments) post.comments = []

  post.comments.push({
    fullname: currentUser.value ? currentUser.value.fullname : 'Ẩn danh',
    text: newComment.value
  })

  localStorage.setItem('posts', JSON.stringify(posts.value))
  newComment.value = ''
}

/* ===== Chỉnh sửa bình luận ===== */
const editComment = (comment, index) => {
  editIndex.value = index
  editCommentText.value = comment.text
}

const saveEditedComment = (post) => {
  if (editIndex.value === -1) return
  if (!editCommentText.value.trim()) return

  post.comments[editIndex.value].text = editCommentText.value
  localStorage.setItem('posts', JSON.stringify(posts.value))
  editIndex.value = -1
  editCommentText.value = ''
}

/* ===== Xóa bình luận ===== */
const deleteComment = (post, index) => {
  post.comments.splice(index, 1)
  localStorage.setItem('posts', JSON.stringify(posts.value))
}
</script>

<template>
  <section class="row p-3">
    <!-- Video -->
    <div class="col-sm-7">
      <h2 class="text-success-emphasis mb-3 text-start"> Video nổi bật</h2>
      <input v-model="keywordVideo" class="form-control mb-3" placeholder="Tìm video..." />
      <p v-if="filteredVideos.length === 0" class="text-muted"> Không có video phù hợp</p>

      <div v-for="video in filteredVideos" :key="video.id" class="card mb-3">
        <div class="card-body">
          <p class="fw-semibold mb-2">{{ video.title }}</p>
          <div v-html="video.iframeCode"></div>
          <label class="text-muted"> Tác giả: {{ video.author || 'Ẩn danh' }}</label>
        </div>
      </div>
    </div>

    <!-- Bài viết -->
    <div class="col-sm-5">
      <h2 class="text-success-emphasis mb-3 text-start"> Bài viết được đề xuất </h2>
      <input v-model="keywordPost" class="form-control mb-3" placeholder="Tìm bài viết..." />
      <p v-if="filteredPosts.length === 0" class="text-muted">Không có bài viết phù hợp</p>

      <div v-for="post in filteredPosts" :key="post.id" class="card mb-3">
        <div class="row g-0">
          <div class="col-sm-7">
            <div class="card-body">
              <h5 class="card-title">{{ post.title }}</h5>
              <p class="card-text text-secondary">{{ post.content }}</p>
              <label class="text-muted"> Tác giả: {{ post.author || 'Ẩn danh' }}</label>
              <button class="btn btn-sm btn-outline-success m-2"
                data-bs-toggle="modal" data-bs-target="#postDetailModal"
                @click="selectedPost = post"> Xem chi tiết</button>
            </div>
          </div>

          <div class="col-sm-5 d-flex align-items-center justify-content-center">
            <img v-if="post.image" :src="post.image" style="width:190px" alt="Ảnh bài viết" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Modal chi tiết bài viết với bình luận -->
  <div class="modal fade" id="postDetailModal" tabindex="-1">
    <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ selectedPost?.title }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>

        <div class="modal-body" v-if="selectedPost">
          <div class="row">
            <!-- Nội dung bài viết -->
            <div class="col-md-7">
              <img v-if="selectedPost.image"
                :src="selectedPost.image"
                class="img-fluid mb-3"
                style="width:100%; height:auto;" />
              <p>{{ selectedPost.content }}</p>
              <p class="text-muted">Tác giả: {{ selectedPost.author || 'Ẩn danh' }}</p>
            </div>

            <!-- Bình luận -->
            <div class="col-md-5">
              <h6>Bình luận</h6>

              <div v-if="selectedPost.comments && selectedPost.comments.length > 0" class="mb-3">
                <div v-for="(comment, index) in selectedPost.comments" :key="index" class="border p-2 mb-2 rounded">
                  <p class="mb-1"><strong>{{ comment.fullname }}:</strong></p>

                  <!-- Nếu đang chỉnh sửa bình luận này -->
                  <div v-if="editIndex === index">
                    <input v-model="editCommentText" class="form-control mb-2" />
                    <button class="btn btn-sm btn-success w-100 mb-1" @click="saveEditedComment(selectedPost)">Lưu</button>
                  </div>

                  <!-- Nếu không đang chỉnh sửa -->
                  <div v-else>
                    <p class="mb-1">{{ comment.text }}</p>
                    <div class="d-flex gap-1">
                      <!-- Chỉ người bình luận mới sửa/xóa -->
                      <button
                        v-if="currentUser && comment.fullname === currentUser.fullname"
                        class="btn btn-sm btn-outline-primary flex-grow-1"
                        @click="editComment(comment, index)"
                      >Chỉnh sửa</button>
                      <button
                        v-if="currentUser && comment.fullname === currentUser.fullname"
                        class="btn btn-sm btn-outline-danger flex-grow-1"
                        @click="deleteComment(selectedPost, index)"
                      >Xóa</button>
                    </div>
                  </div>
                </div>
              </div>

              <p v-else class="text-muted">Chưa có bình luận nào</p>

              <!-- Thêm bình luận mới -->
              <div>
                <input v-model="newComment" class="form-control mb-2" placeholder="Nhập bình luận..." />
                <button class="btn btn-sm btn-success w-100" @click="addComment(selectedPost)">Gửi</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
