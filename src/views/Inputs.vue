<script lang="ts" setup>
import { IonButton, IonIcon, IonAccordion, IonAccordionGroup, IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonItem, IonLabel } from '@ionic/vue';
import CopyButton from '@/components/CopyButton.vue';
import RadioInputs from '@/components/inputs/RadioInputs.vue';
import SignupInputs from '@/components/inputs/SignupInputs.vue';
import LoginInputs from '@/components/inputs/LoginInputs.vue';
import SearchInput from '@/components/inputs/SearchInput.vue';
import { ref } from 'vue';
import { eye, eyeOff } from 'ionicons/icons';

const widgetList = [
  { title: 'Radio Inputs', widget: RadioInputs },
  { title: 'Singup Inputs', widget: SignupInputs },
  { title: 'Login Inputs', widget: LoginInputs },
  { title: 'Search Input', widget: SearchInput },
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
        <ion-title>Inputs</ion-title>
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
            <copy-button :path="`inputs/${widget.widget.__name}`"></copy-button>
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
</style>
