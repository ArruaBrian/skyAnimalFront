<script setup>
import { ref } from 'vue';
import Logo from './Logo.vue';
import NavBarList from './NavBarList.vue';
import ArrowButton from './buttons/ArrowButton.vue';
import NavbarUser from './NavbarUser.vue';

const show = ref(true);

const showEvent = () => {
    show.value = !show.value;
};
</script>

<template>
    <!-- Static space for the grid -->

    <div class="staticNavSpace">
        <!-- Reactive container -->

        <div :class="`nav ${show ? 'navShow' : 'navHidden'}`">
            <!-- Child container (more stable) -->

            <div class="navContainer">
                <!-- Logo container -->

                <div class="logoContainer">
                    <Logo :size="`${show ? '60px' : '40px'}`" />
                    <ArrowButton
                        @showEvent="showEvent"
                        size="25px"
                        :isActive="show"
                    />
                </div>

                <!-- List of pages -->

                <NavBarList :isActive="show" />

                <!-- User area -->

                <NavbarUser :isActive="show" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.staticNavSpace {
    width: 80px;
}
.nav {
    border-right: #636b97 1px solid;
    height: 100%;
    overflow: hidden;
    background-color: #2b304d;
    position: fixed;
    box-sizing: border-box;
    padding: 10px;
    transition: all 0.5s ease-in-out;
}

.logoContainer {
    grid-area: logo;
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
    height: 100%;
    display: grid;
    grid-template-columns: 100%;
    gap: 40px;
    grid-template-rows: 10% 1fr 15%;
    grid-template-areas:
        'logo'
        'list'
        'user';
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
