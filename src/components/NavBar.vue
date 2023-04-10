<script setup>
import { ref } from 'vue';
import Logo from './Logo.vue';
import NavBarList from './NavBarList.vue';
import ArrowButton from './buttons/ArrowButton.vue';

const show = ref({
    value: true,

    showEvent: function () {
        this.value = !this.value;
    },
});
</script>

<template>
    <div :class="`nav ${show.value ? 'navShow' : 'navHidden'}`">
        <div class="navContainer">
            <div class="logoContainer">
                <Logo :size="`${show.value ? '60px' : '40px'}`" />
                <button @click="show.showEvent">show</button>
                <ArrowButton @prueba-event="show.showEvent" size="20px" />
            </div>
            <NavBarList />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.nav {
    height: 100%;
    overflow: hidden;
    background-color: #2b304d;
    position: fixed;
    box-sizing: border-box;
    padding: 10px;
    border: red 1px solid;
    transition: all 0.5s ease-in-out;
}

.logoContainer {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    align-items: center;
    box-sizing: border-box;
    padding: 10px;
    transition: all 1s ease-in-out;
}

.navContainer {
    display: flex;
    flex-direction: column;
    gap: 50px;
    justify-content: center;
    align-items: center;
}

.navHidden {
    width: 80px;
    border-radius: 0px;
}

.navShow {
    width: 250px;
    border-radius: 0px 10px 10px 0px;
}
</style>
