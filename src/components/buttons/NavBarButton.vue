<script setup>
import { toRef } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
    title: String,
    isActive: Boolean,
    iconComponent: Object,
    route: String,
});

const router = useRouter();

const pushTo = (route) => {
    router.push(route);
};

const isActiveLocal = toRef(props, 'isActive');
</script>

<template>
    <div class="buttonContainer" @click="pushTo(`${route}`)">
        <component class="navIconButton" :is="iconComponent" size="25px" />
        <div
            class="magicContainer"
            :class="`${!isActiveLocal ? 'magicShow' : 'magicHidden'}`"
        >
            <button class="navButton">{{ title }}</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../style.scss';

.navButton {
    @extend .btn;

    background-color: transparent;
    border: none;
    position: relative;
    padding: 9px 16px;
    border-radius: 5px;
    box-sizing: border-box;
    color: #636b97;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}

.navIconButton {
    fill: #636b97;
    transition: all 0.2s ease-in-out;
}

.buttonContainer {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease-in-out;
    cursor: pointer;

    &:hover .navButton {
        color: #f5707d;
        fill: #f5707d;
        transition: all 0.5s ease-in-out;
    }

    &:hover .navIconButton {
        fill: #f5707d;
        transition: all 0.5s ease-in-out;
    }
}

.magicContainer {
    width: auto;
    height: auto;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}

.magicShow {
    width: 0%;
    opacity: 0;
    transition: all 0.5s ease-in-out;
}

.magicHidden {
    width: 50%;
    opacity: 1;
    transition: all 0.5s ease-in-out;
}
</style>
