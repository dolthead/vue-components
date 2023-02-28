<script lang="ts" setup>
  import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonText } from '@ionic/vue';
  import CalendarToolbar from '@/components/toolbars/CalendarToolbar.vue';
  import NotesToolbar from '@/components/toolbars/NotesToolbar.vue';
  import CMIToolbar from '@/components/toolbars/CMIToolbar.vue';
  import AvatarToolbar from '@/components/toolbars/AvatarToolbar.vue';
  import SearchToolbar from '@/components/toolbars/SearchToolbar.vue';
  import StackedToolbar from '@/components/toolbars/StackedToolbar.vue';
  import ProfileToolbar from '@/components/toolbars/ProfileToolbar.vue';
  import IconsToolbar from '@/components/toolbars/IconsToolbar.vue';
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/" />
        </ion-buttons>
        <ion-title>Toolbars</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding" color="light">

      <ion-text class="text-padding">Calendar Toolbar</ion-text>
      <CalendarToolbar></CalendarToolbar>
      <br>
      <ion-text class="text-padding">Notes Toolbar</ion-text>
      <NotesToolbar></NotesToolbar>
      <br>
      <ion-text class="text-padding">CMI Toolbar</ion-text>
      <CMIToolbar></CMIToolbar>
      <br>
      <ion-text class="text-padding">Avatar Toolbar</ion-text>
      <AvatarToolbar></AvatarToolbar>
      <br>
      <ion-text class="text-padding">Search Toolbar</ion-text>
      <SearchToolbar></SearchToolbar>
      <br>
      <ion-text class="text-padding">Stacked Toolbar</ion-text>
      <StackedToolbar></StackedToolbar>
      <br>
      <ion-text class="text-padding">Profile Toolbar</ion-text>
      <ProfileToolbar></ProfileToolbar>
      <br>
      <ion-text class="text-padding">Icons Toolbar</ion-text>
      <IconsToolbar></IconsToolbar>

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
