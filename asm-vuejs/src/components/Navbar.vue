<script setup lang="ts">

</script>
<!-- -->
<template>
    <header class="navbar ">
      <div class="nav-left">
        <div class="logo">
          <span>Blog</span>
        </div>

        <ul class="nav-menu">
          <li><i class="bi bi-list-task"></i><a href="#"> Bài viết</a></li>
          <li><i class="bi bi-film"></i><a href="#"> Video</a></li>
          <li><i class="bi bi-info-circle"></i><a href="#"> Giới thiệu</a></li>
          <li><i class="bi bi-calendar3"></i><a href="#" > Sự kiện</a></li>
        </ul>
      </div>

        <div class="nav-right">
            <!--a href="#">Tiếng Việt</a>
            <a href="#">Tiếng Anh</a-->

          <i class="bi bi-person-fill"></i><a href="#" data-bs-toggle="modal" data-bs-target="#myModal">
            Tài khoản</a>
          <!--div class="container mt-3">
                      <button type="button" >
                          Tài khoản
                      </button>
                    </div-->
          <!-- The Modal -->    
          <div class="modal" id="myModal">
          <div class="modal-dialog">
              <div class="modal-content">

                  <div class="modal-header">
                      <h4 class="modal-title">Đăng nhập/ Đăng ký</h4>
                      <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                  </div>

                  <div class="modal-body">

                  <!-- Nav tabs -->
                  <ul class="nav nav-tabs" role="tablist">
                      <li class="nav-item">
                          <a class="nav-link" data-bs-toggle="tab" href="#register">Đăng ký</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" data-bs-toggle="tab" href="#login">Đăng nhập</a>
                      </li>
                      <li class="nav-item">
                      </li>
                  </ul>

                  <!-- Tab pannes -->
                  <div class="tab-content">
                      <div id="register" class="contaiter tab-pane active"><br>
                          <!-- Form Đăng Ký -->
                          <div class="card p-4">
                              <h4 class="mb-3">Form Đăng Ký Thông Tin</h4>
                              <form>
                                  <div class="mb-3">
                                      <label for="fullname" class="form-label">Họ và Tên</label>
                                      <input type="text" class="form-control" id="fullname" placeholder="Nhập họ và tên">
                                  </div>
                                  <div class="mb-3">
                                      <label for="email" class="form-label">Email</label>
                                      <input type="email" class="form-control" id="email" placeholder="Nhập email">
                                  </div>
                                  <div class="mb-3">
                                      <label for="phone" class="form-label">Số Điện Thoại</label>
                                      <input type="text" class="form-control" id="phone" placeholder="Nhập số điện thoại">
                                  </div>
                                  <div class="mb-3">
                                      <label for="password" class="form-label">Mật Khẩu</label>
                                      <input type="password" class="form-control" id="password" placeholder="Nhập mật khẩu">
                                  </div>
                                  <div class="mb-3">
                                      <label for="confirmPassword" class="form-label">Xác Nhận Mật Khẩu</label>
                                      <input type="password" class="form-control" id="confirmPassword" placeholder="Xác nhận mật khẩu">
                                  </div>
                                  <div class="mb-3">
                                      <label class="form-label">Giới Tính:</label>
                                      <div>
                                          <div class="form-check form-check-inline">
                                              <input class="form-check-input" type="radio" name="gender" id="male" value="Nam">
                                              <label class="form-check-label" for="male">Nam</label>
                                          </div>
                                          <div class="form-check form-check-inline">
                                              <input class="form-check-input" type="radio" name="gender" id="female" value="Nữ">
                                              <label class="form-check-label" for="female">Nữ</label>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="mb-3">
                                      <label for="language" class="form-label">Ngôn Ngữ</label>
                                      <select class="form-select" id="language">
                                          <option value="vi">Tiếng Việt</option>
                                          <option value="en">English</option>
                                      </select>
                                  </div>
                                  <div class="form-check mb-3">
                                      <input class="form-check-input" type="checkbox" id="terms">
                                      <label class="form-check-label" for="terms">
                                          Tôi đồng ý với các điều khoản và điều kiện
                                      </label>
                                  </div>
                                  <button type="submit" class="btn btn-primary">Đăng Ký</button>
                              </form>
                          </div>
                      </div>

                      <div id="login" class="contaiter tab-pane fade"><br>
                          <!-- Form Đăng Nhập -->
                          <div class="card p-4">
                              <h4 class="mb-3">Form Đăng nhập</h4>
                              <form>
                                  <div class="mb-3">
                                      <label for="loginEmail" class="form-label">Email</label>
                                      <input type="email" class="form-control" id="loginEmail" placeholder="Nhập email">
                                  </div>
                                  <div class="mb-3">
                                      <label for="loginPassword" class="form-label">Mật Khẩu</label>
                                      <input type="password" class="form-control" id="loginPassword" placeholder="Nhập mật khẩu">
                                  </div>
                                  <button type="submit" class="btn btn-primary">Đăng Nhập</button>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>  
            </div>
        </div>
          </div>
        </div>
    </header>
</template>
<!-- -->
<style scoped>
label{
    text-align: left;
    display: block;
}

body {
    margin: 0;
    font-family: Arial, sans-serif;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 25px;
    background: #f4f8fb;
    border-bottom: 1px solid #ddd;
}

.logo span {
    background: #c5f18e;
    padding: 6px 14px;
    border-radius: 8px;
    font-weight: bold;
    color: #2e2e2e;
}

.nav-left {
    display: flex;
    align-items: center;
    gap: 25px;
}

.nav-menu {
    list-style: none;
    display: flex;
    gap: 20px;
    margin: 0;
    padding: 0;
}

.nav-menu a {
    color: #333;
    text-decoration: none;
    font-size: 15px;
}

.nav-right a {
    margin-left: 15px;
    text-decoration: none;
    color: #333;
}

/* Dropdown 
.dropdown {
    position: relative;
}

.dropdown-menu {
    display: none;
    position: absolute;
    background: white;
    list-style: none;
    padding: 10px 0;
    margin: 0;
    top: 22px;
    left: 0;
    min-width: 120px;
    border: 1px solid #ddd;
    border-radius: 6px;
}

.dropdown-menu li a {
    display: block;
    padding: 8px 15px;
    color: #333;
    text-decoration: none;
}

.dropdown:hover .dropdown-menu {
    display: block;
}*/
</style>
