<script lang="ts" setup>
import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonButton, IonIcon, IonAccordionGroup, IonAccordion, IonItem, IonLabel } from '@ionic/vue';
import { eye, eyeOff } from 'ionicons/icons';
import { ref } from 'vue';
import PaymentSegments from '@/components/segments/PaymentSegments.vue';
import ChipSegments from '@/components/segments/ChipSegments.vue';
import TabSegments from '@/components/segments/TabSegments.vue';
import DotSegments from '@/components/segments/DotSegments.vue';
import MdSegments from '@/components/segments/MdSegments.vue';
import VerticalSegments from '@/components/segments/VerticalSegments.vue';
import CopyButton from '@/components/CopyButton.vue';

const widgetList = [
  { title: 'Payments', widget: PaymentSegments },
  { title: 'Chips', widget: ChipSegments },
  { title: 'Tabs', widget: TabSegments },
  { title: 'Dots', widget: DotSegments },
  { title: 'Material Design', widget: MdSegments },
  { title: 'Vertical', widget: VerticalSegments },
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
        <ion-title>Segments</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="toggleViewAll">
            <ion-icon slot="icon-only" :icon="allClosed ? eye : eyeOff"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>

      <ion-accordion-group :multiple="true" ref="group">
        <ion-accordion v-for="widget of widgetList" :key="widget.title" :value="widget.title">
          <ion-item slot="header" color="light">
            <ion-label>{{ widget.title }}</ion-label>
          </ion-item>
          <div class="minimal-padding" slot="content">
            <copy-button :path="`segments/${widget.widget.__name}`"></copy-button>
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
  // background-color: var(--ion-color-light-shade);
  // background-color: transparent;
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
