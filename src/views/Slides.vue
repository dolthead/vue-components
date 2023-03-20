<script lang="ts" setup>
import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonAccordion, IonAccordionGroup, IonButton, IonIcon, IonItem, IonLabel } from '@ionic/vue';
import WorkoutSlides from '@/components/slides/WorkoutSlides.vue';
import HostingSlides from '@/components/slides/HostingSlides.vue';
import WeatherSlides from '@/components/slides/WeatherSlides.vue';
import CopyButton from '@/components/CopyButton.vue';
import { ref } from 'vue';
import { eye, eyeOff } from 'ionicons/icons';

const widgetList = [
  { title: 'Workout Slides', widget: WorkoutSlides },
  { title: 'Hosting Slides', widget: HostingSlides },
  { title: 'Weather Slides', widget: WeatherSlides },
].sort((a, b) => a.title.localeCompare(b.title));

const group = ref<any | null>(null);
const allClosed = ref(true);
const toggleViewAll = () => {
  allClosed.value = !allClosed.value;
  group.value.$el.value = allClosed.value ? [] : widgetList.map(x => x.title);
};
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="toolbar">
        <ion-buttons slot="start">
          <ion-back-button default-href="/" />
        </ion-buttons>
      <ion-title>Slides</ion-title>
      <ion-buttons slot="end">
        <ion-button @click="toggleViewAll">
          <ion-icon slot="icon-only" :icon="allClosed ? eye : eyeOff"></ion-icon>
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-no-padding">

      <ion-accordion-group :multiple="true" ref="group">
        <ion-accordion v-for="widget of widgetList" :key="widget.title" :value="widget.title">
          <ion-item slot="header" color="light">
            <ion-label>{{ widget.title }}</ion-label>
          </ion-item>
          <div class="minimal-padding" slot="content">
            <copy-button :path="`slides/${widget.widget.__name}`"></copy-button>
            <component :is="widget.widget"></component>
          </div>
        </ion-accordion>
      </ion-accordion-group>

    </ion-content>
  </ion-page>
</template>

<style lang="scss" scoped>
.minimal-padding {
  padding: 6px;
}
ion-accordion {
  background-color: transparent;
}
ion-item {
  background-color: var(--ion-color-light);
}
.text-padding {
  display: block;
  margin: 0 16px 8px 16px;

  &:first-child {
    margin-top: 16px;
  }
}
</style>
