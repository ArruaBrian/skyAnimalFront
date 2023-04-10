<script setup>
import NavBarButton from './buttons/NavBarButton.vue';
</script>

<template>
    <div class="nav">
        <NavBarButton title="productos" />
        <NavBarButton title="productos" />
        <NavBarButton title="productos" />
    </div>
</template>

<style lang="scss" scoped>
.nav {
    width: 40%;
    border: 1px solid red;
    height: 100%;
    display: flex;
    gap: 5px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
}
</style>
