<script setup>
import NavBar from './components/NavBar.vue';
</script>

<template>
    <div class="backColor">
        <div class="backPatron"></div>
        <div id="main">
            <!-- NavBar -->
            <NavBar class="headerArea" />

            <!-- Content area -->

            <RouterView class="mainArea" />
        </div>
    </div>
</template>

<style scoped>
#main {
    width: 100%;
    height: 1200px;
    display: grid;
    grid-template-columns: 80px 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 'header main';
}

.headerArea {
    grid-area: header;
    z-index: 1000;
}
.backColor {
    background-color: #2b304d;
    position: relative;
    z-index: 1;
}

.backPatron {
    z-index: 10;
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url('../public/WebPatron.png');
    background-size: cover;
    background-repeat: repeat;
    opacity: 0.05;
}

.mainArea {
    z-index: 100;
    grid-area: main;
    padding: 20px;
}
</style>
