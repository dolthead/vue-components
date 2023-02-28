<script lang="ts" setup>
  import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonText } from '@ionic/vue';
  import BackgroundTabs from '@/components/tabs/BackgroundTabs.vue';
  import IconTabs from '@/components/tabs/IconTabs.vue';
  import DefaultTabs from '@/components/tabs/DefaultTabs.vue';
  import TopLineTabs from '@/components/tabs/TopLineTabs.vue';
  import ChipTabs from '@/components/tabs/ChipTabs.vue';
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/" />
        </ion-buttons>
        <ion-title>Tabs</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content color="light">

      <ion-text class="text-padding">Background Tabs</ion-text>
      <BackgroundTabs></BackgroundTabs>
      <br>
      <ion-text class="text-padding">Icon Tabs</ion-text>
      <IconTabs></IconTabs>
      <br>
      <ion-text class="text-padding">Default Tabs</ion-text>
      <DefaultTabs></DefaultTabs>
      <br>
      <ion-text class="text-padding">Top Line Tabs</ion-text>
      <TopLineTabs></TopLineTabs>
      <br>
      <ion-text class="text-padding">Chip Tabs</ion-text>
      <ChipTabs></ChipTabs>

    </ion-content>
  </ion-page>
</template>

<style lang="scss" scoped>
  .text-padding {
    display: block;
    margin: 0 16px 8px 16px;
    &:first-child {
      margin-top: 16px;
    }
  }
</style>
