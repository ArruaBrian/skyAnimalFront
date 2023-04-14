<script setup>
import { toRef } from 'vue';
import StoreIcon from './StoreIcon.vue';
import NavBarButton from './buttons/NavBarButton.vue';
import NosotrosIcon from './NosotrosIcon.vue';
import GiftIcon from './GiftIcon.vue';
import ContactIcon from './ContactIcon.vue';
import CartIcon from './CartIcon.vue';

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
        />
        <NavBarButton
            :iconComponent="NosotrosIcon"
            title="Nosotros"
            :isActive="isActiveLocal"
        />
        <NavBarButton
            :iconComponent="GiftIcon"
            title="Premios"
            :isActive="isActiveLocal"
        />
        <NavBarButton
            :iconComponent="ContactIcon"
            title="Contacto"
            :isActive="isActiveLocal"
        />

        <NavBarButton
            :iconComponent="CartIcon"
            title="Carrito"
            :isActive="isActiveLocal"
        />
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
    gap: 25px;
    justify-content: center;
    flex-wrap: nowrap;
}
</style>
