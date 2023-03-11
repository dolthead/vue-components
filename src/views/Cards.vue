<script lang="ts" setup>
import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonAccordion, IonAccordionGroup, IonItem, IonLabel } from '@ionic/vue';
import ElectricCarCard from '@/components/cards/ElectricCarCard.vue';
import RecentActivityCard from '@/components/cards/RecentActivityCard.vue';
import AppointmentRequestCard from '@/components/cards/AppointmentRequestCard.vue';
import WannaJoinCard from '@/components/cards/WannaJoinCard.vue';
import AccentChairCard from '@/components/cards/AccentChairCard.vue';
import CappuccinoCard from '@/components/cards/CappuccinoCard.vue';
import DesignArchitectCard from '@/components/cards/DesignArchitectCard.vue';
import MoisturiserCard from '@/components/cards/MoisturiserCard.vue';
import PastelReportCard from '@/components/cards/PastelReportCard.vue';
import MedReminderCard from '@/components/cards/MedReminderCard.vue';
import SharedEventCard from '@/components/cards/SharedEventCard.vue';
import MarsCard from '@/components/cards/MarsCard.vue';
import CreditCardCard from '@/components/cards/CreditCardCard.vue';
import OrderSummaryCard from '@/components/cards/OrderSummaryCard.vue';
import IoniconfCard from '@/components/cards/IoniconfCard.vue';
import TravelResortCard from '@/components/cards/TravelResortCard.vue';
import UxDesignersCard from '@/components/cards/UxDesignersCard.vue';
import AppDevelopmentCard from '@/components/cards/AppDevelopmentCard.vue';
import KeyDesignCard from '@/components/cards/KeyDesignCard.vue';
import MasterClassCard from '@/components/cards/MasterClassCard.vue';
import PlankExerciseCard from '@/components/cards/PlankExerciseCard.vue';
import ReviewMeetingCard from '@/components/cards/ReviewMeetingCard.vue';
import VirtualRealityCard from '@/components/cards/VirtualRealityCard.vue';
import BlueMondayCard from '@/components/cards/BlueMondayCard.vue';
import DarkProfileCard from '@/components/cards/DarkProfileCard.vue';
import TwoColorProfileCard from '@/components/cards/TwoColorProfileCard.vue';
import UpgradeCard from '@/components/cards/UpgradeCard.vue';
import SimplicityAndFocusCard from '@/components/cards/SimplicityAndFocusCard.vue';
import ProductiveMorningCard from '@/components/cards/ProductiveMorningCard.vue';
import MorningPlaylistCard from '@/components/cards/MorningPlaylistCard.vue';
import CabbageCard from '@/components/cards/CabbageCard.vue';
import CaseStudyCard from '@/components/cards/CaseStudyCard.vue';
import TilesCard from '@/components/cards/TilesCard.vue';
import PodcastCard from '@/components/cards/PodcastCard.vue';
import CodingLessonsCard from '@/components/cards/CodingLessonsCard.vue';
import EatHappyCard from '@/components/cards/EatHappyCard.vue';
import DeveloperWeekendsCard from '@/components/cards/DeveloperWeekendsCard.vue';
import PhotoOfTheDayCard from '@/components/cards/PhotoOfTheDayCard.vue';
import SweetestTunesCard from '@/components/cards/SweetestTunesCard.vue';

const cardList = [
  { title: 'Electric Car', widget: ElectricCarCard },
  { title: 'Recent Activity', widget: RecentActivityCard },
  { title: 'Appointment Request', widget: AppointmentRequestCard },
  { title: 'Wanna Join', widget: WannaJoinCard },
  { title: 'Accent Chair', widget: AccentChairCard },
  { title: 'Cappuccino', widget: CappuccinoCard },
  { title: 'Design Architect', widget: DesignArchitectCard },
  { title: 'Moisturiser', widget: MoisturiserCard },
  { title: 'Pastel Report', widget: PastelReportCard },
  { title: 'Med Reminder', widget: MedReminderCard },
  { title: 'Shared Event', widget: SharedEventCard },
  { title: 'Mars', widget: MarsCard },
  { title: 'Credit Card', widget: CreditCardCard },
  { title: 'Order Summary', widget: OrderSummaryCard },
  { title: 'Ioniconf', widget: IoniconfCard },
  { title: 'Travel Resort', widget: TravelResortCard },
  { title: 'UX Designers', widget: UxDesignersCard },
  { title: 'App Development', widget: AppDevelopmentCard },
  { title: 'Key Design Principles', widget: KeyDesignCard },
  { title: 'Master Class', widget: MasterClassCard },
  { title: 'Plank Exercise', widget: PlankExerciseCard },
  { title: 'Review Meeting', widget: ReviewMeetingCard },
  { title: 'Virtual Reality', widget: VirtualRealityCard },
  { title: 'Blue Monday', widget: BlueMondayCard },
  { title: 'Dark Profile', widget: DarkProfileCard },
  { title: 'Two Color Profile', widget: TwoColorProfileCard },
  { title: 'Upgrade Your Plan', widget: UpgradeCard },
  { title: 'Simplicity And Focus', widget: SimplicityAndFocusCard },
  { title: 'Productive Morning', widget: ProductiveMorningCard },
  { title: 'Morning Playlist', widget: MorningPlaylistCard },
  { title: 'Cabbage', widget: CabbageCard },
  { title: 'Case Study', widget: CaseStudyCard },
  { title: 'Tiles', widget: TilesCard },
  { title: 'Podcast', widget: PodcastCard },
  { title: 'Coding Lessons', widget: CodingLessonsCard },
  { title: 'Eat Happy', widget: EatHappyCard },
  { title: 'Developer Weekends', widget: DeveloperWeekendsCard },
  { title: 'Photo Of The Day', widget: PhotoOfTheDayCard },
  { title: 'Sweetest Tunes', widget: SweetestTunesCard },
].sort((a, b) => a.title.localeCompare(b.title));
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="toolbar">
        <ion-buttons slot="start">
          <ion-back-button default-href="/" />
        </ion-buttons>
        <ion-title>Cards</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-no-padding">

      <ion-accordion-group>
        <ion-accordion v-for="card of cardList" :key="card.title">
          <ion-item slot="header" color="light">
            <ion-label>{{ card.title }}</ion-label>
          </ion-item>
          <div class="minimal-padding" slot="content">
            <component :is="card.widget"></component>
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
