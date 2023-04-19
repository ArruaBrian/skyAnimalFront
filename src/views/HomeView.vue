<script setup>
import DogoSvg from '../components/DogoSvg.vue';
import TextComponent from '../components/TextComponent.vue';
</script>

<template>
    <div class="homeContainer">
        <div class="homeBanner">
            <div class="textContainer">
                <TextComponent
                    size="10vw"
                    color="red"
                    type="title"
                    text="Tu PetShop <br/> FAVORITO"
                />

                <TextComponent
                    type="sub"
                    color="black3"
                    text="En SkyAnimal nos preocupamos por el cuidado y salud de tus mascotas <br/> por eso nos preocupamos en entregar la mejor calidad en nuestro productos"
                />
            </div>
            <div class="dogoContainer">
                <DogoSvg class="dogoPosition" height="800px" width="800px" />
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
.dogoContainer {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.dogoPosition {
    grid-area: dogo;
}

.textContainer {
    grid-area: text;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0px;
}

.homeBanner {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 'text' 'dogo';
    gap: 10px;
}
</style>
