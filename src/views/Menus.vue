<script lang="ts" setup>
  import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonList, IonItem, IonLabel } from '@ionic/vue';

  const sections = [ 'Avatar Menu', 'Logo Menu' ];
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/" />
        </ion-buttons>
        <ion-title>Menus</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content color="light">

      <ion-list>
        <ion-item v-for="section in sections" :detail="true" :router-link="`/${ section.replaceAll(' ', '') }`" button>
          <ion-label>{{ section }}</ion-label>
        </ion-item>
      </ion-list>

    </ion-content>
  </ion-page>
</template>
