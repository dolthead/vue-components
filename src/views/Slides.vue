<script lang="ts" setup>
  import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonText } from '@ionic/vue';
  import WorkoutSlides from '@/components/slides/WorkoutSlides.vue';
  import HostingSlides from '@/components/slides/HostingSlides.vue';
  import WeatherSlides from '@/components/slides/WeatherSlides.vue';
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="toolbar">
        <ion-buttons slot="start">
          <ion-back-button default-href="/" />
        </ion-buttons>
        <ion-title>Slides</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">

      <ion-text class="text-padding">Weather Slides</ion-text>
      <WeatherSlides></WeatherSlides>
      <br>
      <ion-text class="text-padding">Workout Slides</ion-text>
      <WorkoutSlides></WorkoutSlides>
      <br>
      <ion-text class="text-padding">Hosting Slides</ion-text>
      <HostingSlides></HostingSlides>

    </ion-content>
  </ion-page>
</template>

<style lang="scss" scoped>
  .text-padding {
    display: block;
    margin: 0 16px 8px 16px;
    &:first-child {
      margin-top: 16px;
    }
  }
</style>
