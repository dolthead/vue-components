<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts" setup>
  import { IonApp, IonRouterOutlet } from '@ionic/vue';
</script>

<style lang="scss">
  :root {
    ion-content {
      --background: rgb(221 232 243);
    }
    --ion-color-toolbar: hsl(218, 29%, 41%);
    --ion-color-toolbar-rgb: 74,96,135;
    --ion-color-toolbar-contrast: #ffffff;
    --ion-color-toolbar-contrast-rgb: 255,255,255;
    --ion-color-toolbar-shade: #415477;
    --ion-color-toolbar-tint: #5c7093;
  }

  .ion-color-toolbar {
    --ion-color-base: var(--ion-color-toolbar);
    --ion-color-base-rgb: var(--ion-color-toolbar-rgb);
    --ion-color-contrast: var(--ion-color-toolbar-contrast);
    --ion-color-contrast-rgb: var(--ion-color-toolbar-contrast-rgb);
    --ion-color-shade: var(--ion-color-toolbar-shade);
    --ion-color-tint: var(--ion-color-toolbar-tint);
  }

@media (prefers-color-scheme: dark) {
    :is(.ios, .md) body ion-content {
      --background: hsl(218, 29%, 21%);
    }
}
@font-face {
    font-family: 'Urbanist';
    font-style: normal;
    font-display: swap;
    font-weight: 600;
    src: url(../assets/font/Urbanist-VariableFont_wght.ttf) format('woff2');
}
@font-face {
    font-family: 'Urbanist';
    font-style: normal;
    font-display: swap;
    font-weight: 500;
    src: url(../assets/font/Urbanist-VariableFont_wght.ttf) format('woff2');
}
@font-face {
    font-family: 'Urbanist';
    font-style: normal;
    font-display: swap;
    font-weight: 400;
    src: url(../assets/font/Urbanist-VariableFont_wght.ttf) format('woff2');
}
@font-face {
    font-family: 'Urbanist';
    font-style: normal;
    font-display: swap;
    font-weight: 300;
    src: url(../assets/font/Urbanist-VariableFont_wght.ttf) format('woff2');
}
@font-face {
    font-family: 'Urbanist';
    font-style: normal;
    font-display: swap;
    font-weight: 200;
    src: url(../assets/font/Urbanist-Light.ttf) format('woff2');
}
:root[mode=ios],
:root[mode=md]{
  --ion-font-family: 'Urbanist', sans-serif;
  font-family:  'Urbanist', sans-serif !important;
}
</style>
