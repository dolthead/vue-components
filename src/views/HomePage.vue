<script lang="ts" setup>
  import { IonContent, IonPage, IonList, IonItem, IonLabel, IonHeader, IonToolbar, IonTitle } from '@ionic/vue';

  const sections = [
    'Segments', 'Toolbars', 'Menus', 'Modals'
    // 'Segments', 'Toolbars', 'Widgets', 'Slides', 'Cards', 'Menus', 'Screens', 'Modals', 'Lists', 'Tabs', 'Inputs',
  ].sort();
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Vue Components</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content color="light">

      <ion-list>
        <ion-item v-for="section in sections" :detail="true" :router-link="`/${ section }`" button>
          <ion-label>{{ section }}</ion-label>
        </ion-item>
      </ion-list>

    </ion-content>
  </ion-page>
</template>
