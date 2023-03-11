<script lang="ts" setup>
import { IonGrid, IonRow, IonCol, IonImg, IonTitle } from '@ionic/vue';
</script>

<template>
  <ion-grid class="ion-no-padding widget">
    <ion-row>
      <ion-col size="12" class="ion-margin-vertical">
        <ion-title>Recent Apps</ion-title>
      </ion-col>
    </ion-row>
    <ion-row class="ion-justify-content-start">
        <ion-img
          src="https://www.apple.com/in/app-store/images/overview/chiclets/hero_11_3__gnxioi70y0q6_large.jpg"></ion-img>
        <ion-img
          src="https://www.apple.com/in/app-store/images/overview/chiclets/hero_09_2__gndtfbnduhu2_large.jpg"></ion-img>
        <ion-img
          src="https://www.apple.com/in/app-store/images/overview/chiclets/hero_05_2__f6iui41emma2_large.jpg"></ion-img>
        <ion-img
          src="https://www.apple.com/in/app-store/images/overview/chiclets/hero_12_2__elwq8z8uma0y_large.jpg"></ion-img>
    </ion-row>
  </ion-grid>
</template>

<style lang="scss" scoped>
.widget {
  background-color: #fff !important;
  border-radius: 16px !important;
  height: auto;
  width: 100%;
  padding: 10px 25px;

  ion-title {
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 1px;
    color: #3e3e3e;
    padding: 0 6px;
  }

  ion-img {
    width: 80px;
    height: 80px;
    margin: 8px;
  }
}
</style>
