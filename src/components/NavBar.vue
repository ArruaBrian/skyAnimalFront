<script setup>
import Logo from './Logo.vue';
import NavBarList from './NavBarList.vue';
</script>

<template>
    <div class="nav">
        <Logo size="60" />

        <NavBarList />
    </div>
</template>

<style lang="scss" scoped>
.nav {
    width: 100%;
    height: 120px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    padding: 0px 20px;
}
</style>
