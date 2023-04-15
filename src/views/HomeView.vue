<script setup>
import { RouterLink } from 'vue-router';
import TextComponent from '../components/TextComponent.vue';
</script>

<template>
    <div class="homeContainer">
        <!-- <router-link :to="`/alla`"><p>hola</p></router-link> -->

        <div class="homeBanner">
            <div class="textContainer">
                <TextComponent
                    size="10vw"
                    color="red"
                    type="title"
                    text="Tu PetShop <br/> FAVORITO"
                    >hola</TextComponent
                >

                <TextComponent
                    type="sub"
                    color="black3"
                    text="En SkyAnimal nos preocupamos por el cuidado y salud de tus mascotas <br/> por eso nos preocupamos en entregar la mejor calidad en nuestro productos"
                    >hola</TextComponent
                >
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.homeContainer {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
}

.textContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0px;
}

.homeBanner {
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    padding: 15px;
}
</style>
