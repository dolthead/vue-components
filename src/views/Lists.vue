<script lang="ts" setup>
import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonList, IonItem, IonLabel, modalController } from '@ionic/vue';
import CopyButton from '@/components/CopyButton.vue';

const sections = ['Channel List', 'Chat List', 'Course List', 'Achievement List', 'Grocery List', 'Expense List'].sort();

const openModal = async (name: string) => {
  const modalComponent = (await import(`@/components/lists/${name.replaceAll(' ', '')}.vue`)).default;
  const modal = await modalController.create({
    component: modalComponent,
    breakpoints: [0, 0.4, 0.85],
    initialBreakpoint: 0.85,
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
        <ion-title>Lists</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>

      <ion-list>
        <ion-item v-for="section in sections" :detail="true" @click="openModal(section)" button>
          <ion-label>{{ section }}</ion-label>
          <copy-button :path="`lists/${section.replaceAll(' ', '')}`"></copy-button>
        </ion-item>
      </ion-list>

    </ion-content>
  </ion-page>
</template>
