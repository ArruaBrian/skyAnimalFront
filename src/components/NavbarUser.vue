<script setup>
const props = defineProps({
    isActive: Boolean,
});
</script>

<template>
    <div class="userContainer"></div>
</template>

<style scoped lang="scss">
.userContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
}
</style>
