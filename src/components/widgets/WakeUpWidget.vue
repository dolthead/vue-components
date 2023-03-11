<script lang="ts" setup>
import { IonGrid, IonRow, IonCol, IonIcon, IonToggle, IonText } from '@ionic/vue';
import { alarmOutline } from 'ionicons/icons';
</script>

<template>
  <ion-grid class="ion-no-padding widget">
    <ion-row class="ion-padding-vertical ion-align-items-center">
      <ion-col size="6" class="">
        <ion-icon color="success" class="app-icon" :icon="alarmOutline"></ion-icon>
      </ion-col>
      <ion-col size="6" class="ion-text-end">
        <ion-toggle color="success" mode="md" checked aria-label="Alarm"></ion-toggle>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col size="12" class="ion-padding-top">
        <ion-text color="success">
          <h6 class="sub-title ion-text-capitalize">Wake Up Alarm</h6>
          <h1 class="ion-no-margin ion-margin-bottom title">05:00am</h1>
        </ion-text>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<style lang="scss" scoped>
.widget {
  background-color: #303030 !important;
  border-radius: 16px !important;
  height: auto;
  width: 100%;
  min-width: 200px;
  max-width: 300px;
  padding: 10px 25px;
  margin: 0 auto;

  .app-icon {
    font-size: 2rem;
  }

  .title {
    font-size: 2rem;
    letter-spacing: 1.2px;
    font-weight: 600;
  }

  .sub-title {
    font-size: 1rem;
    letter-spacing: 1.2px;
    font-weight: 500;
  }
}
</style>
