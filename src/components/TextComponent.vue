<script setup>
import { computed } from '@vue/reactivity';
import { toRef, ref } from 'vue';

const props = defineProps({
    type: String,
    color: String,
    text: String,
    size: String,
});

// Text tag types

const textTypes = {
    title: 'h1',
    sub: 'h2',
    p: 'p',
    text: 'p',
    btn: 'p',
};

// Tag style types

const syleTypes = {
    title: 'title',
    sub: 'sub',
    p: 'p',
    text: 'text',
    btn: 'btn',
};

// Colors

const colorsTypes = [
    'black',
    'black2',
    'black3',
    'white',
    'red',
    'red2',
    'red3',
];

// default values

const defaultSyle = 'error';
const defaultText = 'h1';

// type

const typeLocal = computed(() => {
    const text = textTypes[props.type] || defaultText;

    return text;
});

// Size but is neccesary

const sizeLocal = toRef(props, 'size');

// Style

const styleLocal = computed(() => {
    const style = syleTypes[props.type] || defaultSyle;
    return style;
});

// Color

const colorLocal = computed(() => {
    const color =
        colorsTypes.find((element) => element == props.color) || defaultSyle;

    return color;
});
</script>

<template>
    <component
        :class="`${props.size ? 'size' : ''} ${styleLocal} ${
            props.color ? 'color-' + colorLocal : ''
        }`"
        :is="typeLocal"
        v-html="props.text"
    />
</template>

<style scoped lang="scss">
.size {
    font-size: v-bind(sizeLocal);
    margin: 0;
}
</style>
