<template>
  <ion-page>
    <ion-content class="ion-padding" color="light">

      <PaymentSegments></PaymentSegments>
      <br>
      <ChipSegments></ChipSegments>
      <br>
      <TabSegments></TabSegments>
      <br>
      <DotSegments></DotSegments>

    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
  import { IonContent, IonPage } from '@ionic/vue';
  import PaymentSegments from '../components/PaymentSegments.vue';
  import ChipSegments from '../components/ChipSegments.vue';
  import TabSegments from '../components/TabSegments.vue';
  import DotSegments from '../components/DotSegments.vue';
</script>
