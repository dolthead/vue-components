<script lang="ts" setup>
import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonButton, IonIcon, IonBackButton, IonTitle, IonAccordion, IonAccordionGroup, IonItem, IonLabel } from '@ionic/vue';
import { eye, eyeOff } from 'ionicons/icons';
import { ref } from 'vue';
import CalendarToolbar from '@/components/toolbars/CalendarToolbar.vue';
import NotesToolbar from '@/components/toolbars/NotesToolbar.vue';
import CMIToolbar from '@/components/toolbars/CMIToolbar.vue';
import AvatarToolbar from '@/components/toolbars/AvatarToolbar.vue';
import SearchToolbar from '@/components/toolbars/SearchToolbar.vue';
import StackedToolbar from '@/components/toolbars/StackedToolbar.vue';
import ProfileToolbar from '@/components/toolbars/ProfileToolbar.vue';
import IconsToolbar from '@/components/toolbars/IconsToolbar.vue';
import CopyButton from '@/components/CopyButton.vue';

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
const allClosed = ref(true);
const toggleViewAll = () => {
  allClosed.value = !allClosed.value;
  group.value.$el.value = allClosed.value ? [] : toolbarList.map(x => x.title);
};
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
            <ion-icon slot="icon-only" :icon="allClosed ? eye : eyeOff"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>

      <ion-accordion-group :multiple="true" ref="group">
        <ion-accordion v-for="widget of toolbarList" :key="widget.title" :value="widget.title">
          <ion-item slot="header" color="light">
            <ion-label>{{ widget.title }}</ion-label>
          </ion-item>
          <div class="minimal-padding" slot="content">
            <copy-button :path="`toolbars/${widget.widget.__name}`"></copy-button>
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
}

ion-accordion {
  background-color: transparent;
}

.text-padding {
  display: block;
  margin: 0 16px 8px 16px;

  &:first-child {
    margin-top: 16px;
  }
}
</style>
