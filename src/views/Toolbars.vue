<script lang="ts" setup>
  import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle } from '@ionic/vue';
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
  <ion-page mode="ios">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/" />
        </ion-buttons>
        <ion-title>Toolbars</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding" color="light">

      <CalendarToolbar></CalendarToolbar>
      <br>
      <NotesToolbar></NotesToolbar>
      <br>
      <CMIToolbar></CMIToolbar>
      <br>
      <AvatarToolbar></AvatarToolbar>
      <br>
      <SearchToolbar></SearchToolbar>
      <br>
      <StackedToolbar></StackedToolbar>
      <br>
      <ProfileToolbar></ProfileToolbar>
      <br>
      <IconsToolbar></IconsToolbar>

    </ion-content>
  </ion-page>
</template>

