<script lang="ts" setup>
  import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonList, IonItem, IonLabel, IonCard, IonCardContent, IonIcon } from '@ionic/vue';
  import { logoIonic, logoVue, logoGithub } from 'ionicons/icons';

  const sections = [
    'Segments', 'Toolbars', 'Menus', 'Modals', 'Lists', 'Inputs'
    // 'Segments', 'Toolbars', 'Widgets', 'Slides', 'Cards', 'Menus', 'Screens', 'Modals', 'Lists', 'Tabs', 'Inputs',
  ].sort();
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="ion-padding-horizontal" mode="ios">
        <ion-icon :icon="logoIonic" color="primary" size="large" slot="start"></ion-icon>
        <ion-icon :icon="logoVue" style="color: seagreen" size="large" slot="end"></ion-icon>
        <ion-title>
            Ionic Vue Components
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content color="light">

      <ion-card class="top-card">
        <ion-card-content>
          <p>
            Based on the designs on <a href="https://www.codemyionic.com/" target="_blank">CodeMyIonic.com</a> from <a href="https://github.com/sidh41" target="_blank">@sidh41</a>.
            Visit CodeMyIonic.com for side-by-side Angular, React, and (coming soon) Vue examples.
          </p>
          <br>
          <p>
            <ion-icon :icon="logoGithub" style="color: darkslategray"></ion-icon>
            Browse this code at 
            <a href="https://github.com/dolthead/vue-components" target="_blank">github.com/dolthead/vue-components</a>. 
            
          </p>
          <br>
          <p>
            More examples will be added each week, so check back again soon!
          </p>
        </ion-card-content>
      </ion-card>

      <ion-list>
        <ion-item v-for="section in sections" :detail="true" :router-link="`/${ section }`" button>
          <ion-label>{{ section }}</ion-label>
        </ion-item>
      </ion-list>

    </ion-content>
  </ion-page>
</template>
