<script setup>
import { toRef } from 'vue';
import NavBarButton from './buttons/NavBarButton.vue';
import UserIcon from './UserIcon.vue';
import GearIcon from './GearIcon.vue';

const props = defineProps({
    isActive: Boolean,
});

const isActiveLocal = toRef(props, 'isActive');
</script>

<template>
    <div class="userContainer">
        <NavBarButton
            :iconComponent="UserIcon"
            title="Usuario"
            :isActive="isActiveLocal"
        />
        <NavBarButton
            :iconComponent="GearIcon"
            title="Opciones"
            :isActive="isActiveLocal"
        />
    </div>
</template>

<style scoped lang="scss">
.userContainer {
    grid-area: user;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
    border-top: 1px solid #636b97;
}
</style>
