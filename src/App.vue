<script setup>
import NavBar from './components/NavBar.vue';
</script>

<template>
    <div id="main">
        <!-- NavBar -->
        <NavBar />
    </div>
</template>

<style scoped>
#main {
    background-color: #f5f4f4;
    width: 100%;
    height: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    flex-wrap: nowrap;
    background-image: url('../public/HomeBackground.png');
    background-size: cover;
    background-position: 0px -240px;
}
</style>
