<script lang="ts" setup>
  import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle } from '@ionic/vue';
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

      <PaymentSegments></PaymentSegments>
      <br>
      <ChipSegments></ChipSegments>
      <br>
      <TabSegments></TabSegments>
      <br>
      <DotSegments></DotSegments>
      <br>
      <MdSegments></MdSegments>

    </ion-content>
  </ion-page>
</template>

