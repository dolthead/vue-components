<script lang="ts" setup>
  import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonText } from '@ionic/vue';
  import PaymentSegments from '../components/segments/PaymentSegments.vue';
  import ChipSegments from '../components/segments/ChipSegments.vue';
  import TabSegments from '../components/segments/TabSegments.vue';
  import DotSegments from '../components/segments/DotSegments.vue';
  import MdSegments from '../components/segments/MdSegments.vue';
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/" />
        </ion-buttons>
        <ion-title>Segments</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding" color="light">

      <ion-text class="text-padding">Payment Segments</ion-text>
      <PaymentSegments></PaymentSegments>
      <br>
      <ion-text class="text-padding">Chip Segments</ion-text>
      <ChipSegments></ChipSegments>
      <br>
      <ion-text class="text-padding">Tab Segments</ion-text>
      <TabSegments></TabSegments>
      <br>
      <ion-text class="text-padding">Dot Segments</ion-text>
      <DotSegments></DotSegments>
      <br>
      <ion-text class="text-padding">MD Segments</ion-text>
      <MdSegments></MdSegments>

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
