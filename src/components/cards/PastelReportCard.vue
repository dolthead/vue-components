<script lang="ts" setup>
import { IonCard, IonCardContent, IonCardHeader, IonBadge, IonImg, IonText } from '@ionic/vue';
import { closeOutline, checkmarkOutline } from 'ionicons/icons';
</script>

<template>
  <ion-card class="card">
     <ion-card-header class="ion-no-padding ion-padding-top ion-padding-horizontal">
        <ion-badge mode="ios" size="large">1</ion-badge>
     </ion-card-header>
     <ion-card-content class="ion-no-padding ion-padding-horizontal ion-padding-bottom">
        <ion-img src="https://cdn3d.iconscout.com/3d/premium/thumb/share-document-6953890-5701075.png"></ion-img>
        <ion-text>
           <h2>Report <span>Analytics and data</span></h2>
        </ion-text>
     </ion-card-content>
  </ion-card>
</template>

<style lang="scss" scoped>
ion-card.card {
  border-radius: 16px;
  background: #c3e3ff;
  letter-spacing: 0.8px;
  margin: 0 auto;
  width: fit-content;

  ion-badge {
    height: 30px;
    width: 30px;
    border-radius: 50px;
    justify-content: center;
    display: flex;
    align-items: center;
    font-size: 1rem;
    --background: #fff !important;
    --color: var(--ion-color-primary-tint);
  }
  ion-img {
    height: 200px;
  }
  h2 {
    letter-spacing: 1.2px;
    font-size: 1.2rem;
    color: var(--ion-color-primary);
    font-weight: 500;
    span {
      display: block;
      letter-spacing: 1px;
      font-size: 0.9rem;
      margin: 5px 0;
      font-weight: 400;
    }
  }
}
</style>
