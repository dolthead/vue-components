<script lang="ts" setup>
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon, IonCardSubtitle, IonItem, IonAvatar, IonButton, IonLabel } from '@ionic/vue';
import { informationCircleOutline, calendarClear } from 'ionicons/icons';
</script>

<template>
  <ion-card>
    <ion-card-header>
      <ion-card-subtitle>Appointment Request</ion-card-subtitle>
      <ion-card-title>
        <ion-icon :icon="calendarClear"></ion-icon>
        <span>28 Jan 2023, 8am - 10am</span>
      </ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <ion-item lines="none">
        <ion-avatar slot="start">
          <img
            src="https://images.unsplash.com/photo-1654110455429-cf322b40a906?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
        </ion-avatar>
        <ion-icon slot="end" :icon="informationCircleOutline" size="large" class="ion-no-margin"></ion-icon>
        <ion-label>Louis<span>Patterson</span></ion-label>
      </ion-item>
      <div class="action">
        <ion-button shape="round" class="accept" mode="ios">
          Accept
        </ion-button>
        <ion-button shape="round" fill="outline" color="primary" mode="ios">
          Decline
        </ion-button>
      </div>
    </ion-card-content>
  </ion-card>
</template>

<style lang="scss" scoped>
ion-card {
  border-radius: 16px !important;
  max-width: fit-content;
  margin: 0 auto;

  ion-card-header {
    --background: var(--ion-color-primary);

    ion-card-subtitle {
      color: #002e78;
      text-transform: capitalize;
      letter-spacing: 1px;
      font-size: 1rem;
      font-weight: 500;
    }

    ion-card-title {
      font-size: 1.4rem;
      font-weight: 500;
      letter-spacing: 1.2px;
      display: flex;
      align-items: center;
      margin: 8px 0;
      color: #fff;

      ion-icon {
        margin-right: 10px;
      }
    }
  }

  ion-card-content {
    padding: 16px;
    background: #fff !important;

    ion-item {
      --background: transparent !important;
      --inner-padding-start: 0px;
      --inner-padding-end: 0px;
      --padding-start: 0px;
      --padding-end: 0px;

      ion-avatar {
        width: 60px;
        height: 60px;

        img {
          border-radius: 50% !important;
        }
      }

      ion-icon {
        color: #b0ceff;
      }

      ion-label {
        color: #4e4e4e;
        font-size: 1.4rem !important;
        font-weight: 600;
        letter-spacing: 1.4px;
        word-break: break-all;
        white-space: break-spaces;
        margin: 0px;

        span {
          display: block;
        }
      }
    }

    .action {
      display: flex;
      justify-content: center;
      padding: 16px 0 0px;

      ion-button {
        font-size: 1rem;
        letter-spacing: 1px;
        text-transform: capitalize;
        font-weight: 500;

        &.accept {
          width: -webkit-fill-available;
          margin-right: 8px;
        }
      }
    }
  }
}
</style>
