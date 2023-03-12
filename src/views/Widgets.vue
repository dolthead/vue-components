<script lang="ts" setup>
import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonButton, IonIcon } from '@ionic/vue';
import FinanceWidget from '@/components/widgets/FinanceWidget.vue';
import RecentAppsWidget from '@/components/widgets/RecentAppsWidget.vue';
import WakeUpWidget from '@/components/widgets/WakeUpWidget.vue';
import ContactsWidget from '@/components/widgets/ContactsWidget.vue';
import MutualFriendsWidget from '@/components/widgets/MutualFriendsWidget.vue';
import PercentChangeWidget from '@/components/widgets/PercentChangeWidget.vue';
import TrendingWidget from '@/components/widgets/TrendingWidget.vue';
import NextUpWidget from '@/components/widgets/NextUpWidget.vue';
import LifestyleWidget from '@/components/widgets/LifestyleWidget.vue';
import InboxWidget from '@/components/widgets/InboxWidget.vue';
import TodayWidget from '@/components/widgets/TodayWidget.vue';
import ActivitiesWidget from '@/components/widgets/ActivitiesWidget.vue';
import WeatherWidget from '@/components/widgets/WeatherWidget.vue';
import WeatherTimeWidget from '@/components/widgets/WeatherTimeWidget.vue';
import BirthdayWidget from '@/components/widgets/BirthdayWidget.vue';
import { eye } from 'ionicons/icons';
import { ref } from 'vue';

const widgetList = [
  { title: 'Finance', widget: FinanceWidget },
  { title: 'Recent Apps', widget: RecentAppsWidget },
  { title: 'Wake Up', widget: WakeUpWidget },
  { title: 'Contacts', widget: ContactsWidget },
  { title: 'Mutual Friends', widget: MutualFriendsWidget },
  { title: 'Percent Change', widget: PercentChangeWidget },
  { title: 'Trending', widget: TrendingWidget },
  { title: 'Next Up', widget: NextUpWidget },
  { title: 'Lifestyle', widget: LifestyleWidget },
  { title: 'Inbox', widget: InboxWidget },
  { title: 'Today', widget: TodayWidget },
  { title: 'Activities', widget: ActivitiesWidget },
  { title: 'Weather', widget: WeatherWidget },
  { title: 'Weather Time', widget: WeatherTimeWidget },
  { title: 'Birthday', widget: BirthdayWidget },
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
        <ion-title>Widgets</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="toggleViewAll">
            <ion-icon slot="icon-only" :icon="eye"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-no-padding">

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
