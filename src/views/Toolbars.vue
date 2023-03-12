<script lang="ts" setup>
  import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonButton, IonIcon, IonBackButton, IonTitle, IonAccordion, IonAccordionGroup, IonItem, IonLabel } from '@ionic/vue';
  import { eye } from 'ionicons/icons';
  import { ref } from 'vue';
  import CalendarToolbar from '@/components/toolbars/CalendarToolbar.vue';
  import NotesToolbar from '@/components/toolbars/NotesToolbar.vue';
  import CMIToolbar from '@/components/toolbars/CMIToolbar.vue';
  import AvatarToolbar from '@/components/toolbars/AvatarToolbar.vue';
  import SearchToolbar from '@/components/toolbars/SearchToolbar.vue';
  import StackedToolbar from '@/components/toolbars/StackedToolbar.vue';
  import ProfileToolbar from '@/components/toolbars/ProfileToolbar.vue';
  import IconsToolbar from '@/components/toolbars/IconsToolbar.vue';

const toolbarList = [
  { title: 'Calendar', widget: CalendarToolbar },
  { title: 'Notes', widget: NotesToolbar },
  { title: 'CodeMyIonic', widget: CMIToolbar },
  { title: 'Avatars', widget: AvatarToolbar },
  { title: 'Search', widget: SearchToolbar },
  { title: 'Stacked', widget: StackedToolbar },
  { title: 'Profile', widget: ProfileToolbar },
  { title: 'Icons', widget: IconsToolbar },
].sort((a, b) => a.title.localeCompare(b.title));

const group = ref<any | null>(null);

const multiple = ref(false);

const toggleViewAll = () => {
  multiple.value = !multiple.value;
  group.value?.$el.querySelectorAll('ion-accordion').forEach((accordion: any) => {
    if (multiple.value) accordion.expandAccordion();
    else accordion.collapseAccordion();
  });
}
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="toolbar">
        <ion-buttons slot="start">
          <ion-back-button default-href="/" />
        </ion-buttons>
        <ion-title>Toolbars</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="toggleViewAll">
            <ion-icon slot="icon-only" :icon="eye"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>

      <ion-accordion-group :multiple="multiple" ref="group">
        <ion-accordion v-for="widget of toolbarList" :key="widget.title">
          <ion-item slot="header" color="light">
            <ion-label>{{ widget.title }}</ion-label>
          </ion-item>
          <div class="minimal-padding" slot="content">
            <component :is="widget.widget"></component>
          </div>
        </ion-accordion>
      </ion-accordion-group>

    </ion-content>
  </ion-page>
</template>

<style lang="scss" scoped>
.minimal-padding {
  padding: 1px;
  background-color: var(--ion-color-light-shade);
}
  .text-padding {
    display: block;
    margin: 0 16px 8px 16px;
    &:first-child {
      margin-top: 16px;
    }
  }
</style>
