<script setup>
import { toRef } from 'vue';

const props = defineProps({
    size: String,
    isActive: Boolean,
});

const localIsActive = toRef(props, 'isActive');
</script>

<template>
    <div class="arrowButton" @click="$emit('showEvent')">
        <svg
            class="arrow"
            :class="`${!localIsActive ? 'isArrowInactive' : 'isArrowActive'}`"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            :width="size"
            :height="size"
        >
            <path
                d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
            />
        </svg>
    </div>
</template>

<style scoped lang="scss">
.arrowButton {
    width: 40px;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.arrow {
    fill: #636b97;
    transition: all 0.3s ease-in-out;

    &:hover {
        fill: #f5707d;
        transition: all 0.3s ease-in-out;
    }
}

.isArrowActive {
    transform: rotate(180deg);
    transition: all 0.3s ease-in-out;
}

.isArrowInactive {
    transform: rotate(0deg);
    transition: all 0.3s ease-in-out;
}
</style>
