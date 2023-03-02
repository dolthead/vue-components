<script lang="ts" setup>
  import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonText, IonIcon } from '@ionic/vue';
  import BackgroundTabs from '@/components/tabs/BackgroundTabs.vue';
  import IconTabs from '@/components/tabs/IconTabs.vue';
  import DefaultTabs from '@/components/tabs/DefaultTabs.vue';
  import FilledIconTabs from '@/components/tabs/FilledIconTabs.vue';
  import TopLineTabs from '@/components/tabs/TopLineTabs.vue';
  import ChipTabs from '@/components/tabs/ChipTabs.vue';
  import { star } from 'ionicons/icons';
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="toolbar">
        <ion-buttons slot="start">
          <ion-back-button default-href="/" />
        </ion-buttons>
        <ion-title>Tabs</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>

      <ion-text class="text-padding">Background Tabs</ion-text>
      <BackgroundTabs></BackgroundTabs>
      <br>
      <ion-text class="text-padding">Icon Tabs</ion-text>
      <IconTabs></IconTabs>
      <br>
      <ion-text class="text-padding">Default Tabs</ion-text>
      <DefaultTabs></DefaultTabs>
      <br>
      <ion-text class="text-padding ion-justify-content-center">
        Filled Icon Tabs
        <span class="new-feature ion-justify-content-center">
          <ion-icon :icon="star" color="light"></ion-icon>
          new!
        </span>
      </ion-text>
      <FilledIconTabs></FilledIconTabs>
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
  .new-feature {
    background: #ff3b30;
    color: #fff;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 1em;
    margin-left: 4px;
    font-style: italic;
    text-transform: uppercase;
  }
</style>
