<script setup lang="ts">

</script>

<template>
  <h1>Bảng Thành Phần Dinh Dưỡng</h1>
  <table>
    <tr>
        <th rowspan="2">Thành Phần</th>
        <th colspan="2">Giá Trị</th>
    </tr>
    <tr>
        <th>Khối Lượng</th>
        <th>% DV*</th>
    </tr>
    <tr>
        <td>Calories</td>
        <td>200 kcal</td>
        <td>20%</td>
    </tr>
    <tr>
        <td>Chất Béo</td>
        <td>9 g</td>
        <td>14%</td>
    </tr>
    <tr>
        <td>Chất Béo Bão Hòa</td>
        <td>4 g</td>
        <td>20%</td>
    </tr>
    <tr>
        <td>Chất Đạm</td>
        <td>8 g</td>
        <td>16%</td>
    </tr>
    <tr>
        <td>Chất Xơ</td>
        <td>5 g</td>
        <td>20%</td>
    </tr>
    <tr>
        <td>Đường</td>
        <td>12 g</td>
        <td>-</td>
    </tr>
    <tr>
        <td rowspan="2">Vitamin</td>
        <td>Vitamin C</td>
        <td>25%</td>
    </tr>
    <tr>
        <td>Vitamin D</td>
        <td>10%</td>
    </tr>
</table>
  
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
}

h1 {
  font-weight: bold;
  color: #e74c3c;
  margin-bottom: 10px;
}

th, td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}    

th {
  background-color: #ffcc00;
  font-weight: bold;
}

.sub-header {
  background-color: #ffcc00;
  font-weight: bold;
}

tr:nth-child(even) {
  background-color: #fafafa;
}
</style>
