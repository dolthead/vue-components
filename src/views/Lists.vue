<script lang="ts" setup>
import { IonButton, IonIcon, IonAccordion, IonAccordionGroup, IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonList, IonItem, IonLabel, modalController } from '@ionic/vue';
import CopyButton from '@/components/CopyButton.vue';
import { ref } from 'vue';
import { eye, eyeOff } from 'ionicons/icons';
import ChannelList from '@/components/lists/ChannelList.vue';
import ChatList from '@/components/lists/ChatList.vue';
import CourseList from '@/components/lists/CourseList.vue';
import AchievementList from '@/components/lists/AchievementList.vue';
import GroceryList from '@/components/lists/GroceryList.vue';
import ExpenseList from '@/components/lists/ExpenseList.vue';

const widgetList = [
  { title: 'Channel List', widget: ChannelList },
  { title: 'Chat List', widget: ChatList },
  { title: 'Course List', widget: CourseList },
  { title: 'Achievement List', widget: AchievementList },
  { title: 'Grocery List', widget: GroceryList },
  { title: 'Expense List', widget: ExpenseList },
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
        <ion-title>Lists</ion-title>
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
            <copy-button :path="`lists/${widget.widget.__name}`"></copy-button>
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
