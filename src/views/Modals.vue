<script lang="ts" setup>
  import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonList, IonItem, IonLabel, modalController } from '@ionic/vue';

  const sections = [ 'Connect Modal', 'Expense Modal' ];

  const openModal = async (name: string) => {
        const modalComponent = (await import(`@/components/modals/${name.replaceAll(' ', '')}.vue`)).default;
        const modal = await modalController.create({
            component: modalComponent,
            breakpoints: [0, 0.65],
            initialBreakpoint: 0.65,
        });
        return modal.present();
    }
</script>

<template>
  <ion-page mode="ios">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/" />
        </ion-buttons>
        <ion-title>Modals</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content color="light">

      <ion-list>
        <ion-item v-for="section in sections" :detail="true" @click="openModal(section) " button>
          <ion-label>{{ section }}</ion-label>
        </ion-item>
      </ion-list>

    </ion-content>
  </ion-page>
</template>
