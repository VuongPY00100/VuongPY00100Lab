<script setup lang="ts">
import NavbarWeb from './components/Navbar.vue';
import BodyWeb from './components/Home.vue';
</script>

<template>
<NavbarWeb />
<div class="no">
<router-view></router-view>
</div>
</template>

<style scoped>
.no{
    place-items: center;
    
}
</style>
