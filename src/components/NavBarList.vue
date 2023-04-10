<script setup>
import NavBarButton from './buttons/NavBarButton.vue';
</script>

<template>
    <div class="navList">
        <NavBarButton title="productos" />
        <NavBarButton title="productos" />
        <NavBarButton title="productos" />
    </div>
</template>

<style lang="scss" scoped>
.navList {
    width: 250px;
    height: 40%;
    display: flex;
    gap: 5px;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    justify-content: center;
    flex-wrap: nowrap;
}
</style>
