<script lang="ts" setup>
  import { IonContent, IonPage, IonList, IonItem, IonLabel, IonCard, IonCardContent, IonIcon, IonCardHeader, 
    IonCardSubtitle, IonButton, IonHeader, IonToolbar, IonTitle } from '@ionic/vue';
  import { logoIonic, logoVue, logoAngular, logoReact, logoGithub, chevronForward, copyOutline } from 'ionicons/icons';

  const sections = [
    'Segments', 'Toolbars', 'Menus', 'Modals', 'Lists', 'Inputs', 'Tabs', 'Screens', 'Slides', 'Cards', 'Widgets'
  ].sort();
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="toolbar-padding" color="toolbar">
        <ion-icon :icon="logoIonic" color="light" size="large" slot="start"></ion-icon>
        <ion-title>
            Free Ionic Vue Components
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>

      <ion-card class="top-card">
        <ion-card-header>
          <ion-card-subtitle>
            <ion-icon :icon="copyOutline"></ion-icon>
            Copy and paste into your project
          </ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <p>
            Based on the designs on <a href="https://www.codemyionic.com/" target="_blank">CodeMyIonic.com</a> from <a href="https://github.com/sidh41" target="_blank">@sidh41</a>.
            Visit CodeMyIonic.com for side-by-side Angular, React, and (coming soon) Vue examples.
          </p>
          <br>
          <p>
            <ion-icon :icon="logoGithub" style="color: darkslategray"></ion-icon>
            Fork, clone and run this code at 
            <a href="https://github.com/dolthead/vue-components" target="_blank">github.com/dolthead/vue-components</a>. 
          </p>
          <br>
          <p>
            ✅ Updated to Ionic 8.3, Vue 3.5, and Vite 5.4 on 16 Oct 2024.
          </p>
          <br>
        <ion-button fill="outline" href="https://github.com/dolthead/vue-components/tree/main/src/components">
          <ion-icon slot="start" :icon="logoVue" style="color: seagreen" size="small"></ion-icon>
          Code
          <ion-icon slot="end" :icon="chevronForward" size="small"></ion-icon>
        </ion-button>
        <ion-button fill="outline" href="https://www.codemyionic.com/" detail>
          <ion-icon slot="start" :icon="logoAngular" color="danger" size="small"></ion-icon>
          <ion-icon slot="start" :icon="logoReact" style="color: var(--ion-color-primary-tint)" size="small"></ion-icon>
          Code
          <ion-icon slot="end" :icon="chevronForward" size="small"></ion-icon>
        </ion-button>
        </ion-card-content>

        <ion-list>
          <ion-item>
            <strong>Component Demos</strong>
          </ion-item>
          <ion-item v-for="section in sections" :detail="true" :router-link="`/${ section }`" button>
            <ion-label>{{ section }}</ion-label>
          </ion-item>
        </ion-list>
      </ion-card>

    </ion-content>
  </ion-page>
</template>

<style lang="scss" scoped>
.toolbar-padding {
    --padding-start: 8px;
    --padding-end: 4px;

    ion-title {
      padding: 0 8px;
    }
  }
</style>
