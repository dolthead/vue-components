<script lang="ts" setup>
import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonButton, IonIcon, IonAccordion, IonAccordionGroup, IonItem, IonLabel } from '@ionic/vue';
import { eye, eyeOff } from 'ionicons/icons';
import { ref } from 'vue';
import BackgroundTabs from '@/components/tabs/BackgroundTabs.vue';
import IconTabs from '@/components/tabs/IconTabs.vue';
import DefaultTabs from '@/components/tabs/DefaultTabs.vue';
import FilledIconTabs from '@/components/tabs/FilledIconTabs.vue';
import TopLineTabs from '@/components/tabs/TopLineTabs.vue';
import ChipTabs from '@/components/tabs/ChipTabs.vue';
import CopyButton from '@/components/CopyButton.vue';

const tabsList = [
  { title: 'Background', widget: BackgroundTabs },
  { title: 'Icon', widget: IconTabs },
  { title: 'Default', widget: DefaultTabs },
  { title: 'Filled Icon', widget: FilledIconTabs },
  { title: 'Top Line', widget: TopLineTabs },
  { title: 'Chip', widget: ChipTabs },
].sort((a, b) => a.title.localeCompare(b.title));

const group = ref<any | null>(null);
const allClosed = ref(true);
const toggleViewAll = () => {
  allClosed.value = !allClosed.value; 
  group.value.$el.value = allClosed.value ? [] : tabsList.map(x => x.title);
};
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="toolbar">
        <ion-buttons slot="start">
          <ion-back-button default-href="/" />
        </ion-buttons>
        <ion-title>Tabs</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="toggleViewAll">
            <ion-icon slot="icon-only" :icon="allClosed ? eye : eyeOff"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>

      <ion-accordion-group :multiple="true" ref="group">
        <ion-accordion v-for="widget of tabsList" :key="widget.title" :value="widget.title">
          <ion-item slot="header" color="light">
            <ion-label>{{ widget.title }}</ion-label>
          </ion-item>
          <div class="minimal-padding" slot="content">
            <component :is="widget.widget"></component>
            <copy-button :path="`tabs/${widget.widget.__name}`"></copy-button>
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
