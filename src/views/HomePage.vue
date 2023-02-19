<template>
  <ion-page>
    <ion-content class="ion-padding" color="light">

      <PaymentSegments></PaymentSegments>
      <br>
      <ChipSegments></ChipSegments>

    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
  import { IonContent, IonPage } from '@ionic/vue';
  import PaymentSegments from '../components/PaymentSegments.vue';
  import ChipSegments from '../components/ChipSegments.vue';
</script>
