<script lang="ts" setup>
import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonList, IonItem, IonLabel } from '@ionic/vue';
import CopyButton from '@/components/CopyButton.vue';

const sections = ['Avatar Menu', 'Logo Menu'];
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="toolbar">
        <ion-buttons slot="start">
          <ion-back-button default-href="/" />
        </ion-buttons>
        <ion-title>Menus (w/ Split Pane)</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>

      <ion-list>
        <ion-item v-for="section in sections" :detail="true" :router-link="`/${section.replaceAll(' ', '')}`" button>
          <ion-label>{{ section }}</ion-label>
          <copy-button :path="`menus/${section.replaceAll(' ', '')}`"></copy-button>
        </ion-item>
      </ion-list>

    </ion-content>
  </ion-page>
</template>
