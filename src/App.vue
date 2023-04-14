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
    background-color: #3f4365;
    width: 100%;
    height: 1200px;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    align-items: flex-start;
    gap: 10px;
}
</style>
