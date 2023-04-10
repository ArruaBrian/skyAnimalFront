<script setup>
defineProps({
    title: String,
});
</script>

<template>
    <button class="button">{{ title }}</button>
</template>

<style lang="scss" scoped>
@use '../../style.scss';

.button {
    @extend .text;

    background-color: transparent;

    border: none;
    padding: 9px 16px;
    border-radius: 5px;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: #c44536;
    }
}
</style>
