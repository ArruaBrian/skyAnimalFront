<script setup>
import { toRef } from 'vue';
import StoreIcon from './StoreIcon.vue';
import NavBarButton from './buttons/NavBarButton.vue';
import NosotrosIcon from './NosotrosIcon.vue';
import GiftIcon from './GiftIcon.vue';
import ContactIcon from './ContactIcon.vue';
import CartIcon from './CartIcon.vue';
import ShowerIcon from './ShowerIcon.vue';

const props = defineProps({
    isActive: Boolean,
});

const isActiveLocal = toRef(props, 'isActive');
</script>

<template>
    <div class="navList">
        <NavBarButton
            :iconComponent="StoreIcon"
            title="Productos"
            :isActive="isActiveLocal"
            route="/productos"
        />
        <NavBarButton
            :iconComponent="NosotrosIcon"
            title="Nosotros"
            :isActive="isActiveLocal"
            route="/nosotros"
        />
        <NavBarButton
            :iconComponent="GiftIcon"
            title="Premios"
            :isActive="isActiveLocal"
            route="/premios"
        />
        <NavBarButton
            :iconComponent="ContactIcon"
            title="Contacto"
            :isActive="isActiveLocal"
            route="/contacto"
        />

        <NavBarButton
            :iconComponent="ShowerIcon"
            title="Turnos"
            :isActive="isActiveLocal"
            route="/turnos"
        />

        <NavBarButton
            :iconComponent="CartIcon"
            title="Carrito"
            :isActive="isActiveLocal"
            route="/carrito"
        />
    </div>
</template>

<style lang="scss" scoped>
.navList {
    grid-area: list;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    justify-content: flex-start;
    flex-wrap: nowrap;
}
</style>
