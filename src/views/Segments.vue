<script lang="ts" setup>
import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonButton, IonIcon, IonAccordionGroup, IonAccordion, IonItem, IonLabel } from '@ionic/vue';
import { eye } from 'ionicons/icons';
import { ref } from 'vue';
import PaymentSegments from '../components/segments/PaymentSegments.vue';
import ChipSegments from '../components/segments/ChipSegments.vue';
import TabSegments from '../components/segments/TabSegments.vue';
import DotSegments from '../components/segments/DotSegments.vue';
import MdSegments from '../components/segments/MdSegments.vue';
import VerticalSegments from '../components/segments/VerticalSegments.vue';

const widgetList = [
  { title: 'Payments', widget: PaymentSegments },
  { title: 'Chips', widget: ChipSegments },
  { title: 'Tabs', widget: TabSegments },
  { title: 'Dots', widget: DotSegments },
  { title: 'Material Design', widget: MdSegments },
  { title: 'Vertical', widget: VerticalSegments },
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
        <ion-title>Segments</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="toggleViewAll">
            <ion-icon slot="icon-only" :icon="eye"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>

      <ion-accordion-group :multiple="multiple" ref="group">
        <ion-accordion v-for="widget of widgetList" :key="widget.title">
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
  padding: 6px;
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
