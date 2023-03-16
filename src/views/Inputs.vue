<script lang="ts" setup>
import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonList, IonItem, IonLabel, modalController } from '@ionic/vue';
import CopyButton from '@/components/CopyButton.vue';

const sections = ['Radio Inputs', 'Signup Inputs', 'Login Inputs', 'Search Input'].sort();

const openModal = async (name: string) => {
  const modalComponent = (await import(`@/components/inputs/${name.replaceAll(' ', '')}.vue`)).default;
  const modal = await modalController.create({
    component: modalComponent,
    breakpoints: [0, 0.5, 0.95],
    initialBreakpoint: 0.95,
  });
  return modal.present();
}
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="toolbar">
        <ion-buttons slot="start">
          <ion-back-button default-href="/" />
        </ion-buttons>
        <ion-title>Inputs</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>

      <ion-list>
        <ion-item v-for="section in sections" :detail="true" @click="openModal(section)" button>
          <ion-label>{{ section }}</ion-label>
          <copy-button :path="`inputs/${section.replaceAll(' ', '')}`"></copy-button>
        </ion-item>
      </ion-list>

    </ion-content>
  </ion-page>
</template>
