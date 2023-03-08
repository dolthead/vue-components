<script lang="ts" setup>
import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonAccordion, IonAccordionGroup, IonItem, IonLabel } from '@ionic/vue';
import ElectricCarCard from '@/components/cards/ElectricCarCard.vue';

const cardList = [
  { title: 'Electric Car', widget: ElectricCarCard },
];
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="toolbar">
        <ion-buttons slot="start">
          <ion-back-button default-href="/" />
        </ion-buttons>
        <ion-title>Cards</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">

      <ion-accordion-group>
        <ion-accordion v-for="card of cardList" :key="card.title">
          <ion-item slot="header" color="light">
            <ion-label>{{ card.title }}</ion-label>
          </ion-item>
          <component :is="card.widget" slot="content"></component>
        </ion-accordion>
      </ion-accordion-group>

    </ion-content>
  </ion-page>
</template>

<style lang="scss" scoped>
ion-accordion {
  background-color: transparent;
}
ion-item {
  background-color: var(--ion-color-light);
}
.text-padding {
  display: block;
  margin: 0 16px 8px 16px;

  &:first-child {
    margin-top: 16px;
  }
}
</style>
