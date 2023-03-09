<script lang="ts" setup>
import { IonCard, IonCardContent, IonIcon, IonText, IonRow, IonCol, IonButton, IonCardHeader, IonItemGroup, IonItem, IonLabel } from '@ionic/vue';
import { arrowForwardOutline } from 'ionicons/icons';
</script>

<template>
  <ion-card class="card">
    <ion-card-header>
      <ion-text>
        <h1 class="title ion-no-margin ion-margin-bottom">Order Summary</h1>
      </ion-text>
      <div class="plan">
        <ion-row class="ion-justify-content-center ion-align-items-center">
          <ion-col size="3">
            <div class="logo">
              <img src="https://cdn-icons-png.flaticon.com/512/7193/7193803.png" alt="Pro logo" />
            </div>
          </ion-col>
          <ion-col size="9">
            <span class="name">Premium Plan</span>
            <span class="price">$9<i>/user</i></span>
            <ion-button fill="clear" shape="round" mode="ios" size="small" class="ion-no-margin ion-no-padding w-auto">
              Change Plan
            </ion-button>
          </ion-col>
        </ion-row>
      </div>
    </ion-card-header>
    <ion-card-content>
      <ion-item-group>
        <ion-item lines="none">
          <ion-label class="ion-no-margin">Plan Duration <span class="ion-float-right">1 month</span></ion-label>
        </ion-item>
        <ion-item lines="none">
          <ion-label class="ion-no-margin">Team Size <span class="ion-float-right">12 members</span></ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Handling Fee <span class="ion-float-right">$0</span></ion-label>
        </ion-item>
        <ion-item lines="none" class="total">
          <ion-label class="total">Total Amount<span class="ion-float-right total">$9</span></ion-label>
        </ion-item>
      </ion-item-group>
      <ion-button fill="solid" size="large" mode="ios" expand="block" class="action">
        <ion-icon slot="end" :icon="arrowForwardOutline"></ion-icon>
        Proceed to Checkout
      </ion-button>
    </ion-card-content>
  </ion-card>
</template>

<style lang="scss" scoped>
ion-card.card {
  border-radius: 16px;
  // box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px !important;
  background: #f4f5f8;
  letter-spacing: 0.8px;
  margin: 0;
  min-width: 280px;
  max-width: 400px;

  ion-card-header,
  ion-card-content {
    background-color: #f4f5f8 !important;
  }

  ion-card-header {
    padding: 16px 16px;

    .title {
      font-size: 1.2rem;
      font-weight: 600;
      color: #191919;
      text-align: left;
      letter-spacing: 1px;
    }

    .plan {
      background: rgb(228 197 255);
      padding: 16px;
      border-radius: 16px;

      .logo {
        padding: 10px;
        background: #a63fff;
        border-radius: 12px;
      }

      span {
        display: block;

        &.name {
          font-size: 1.2rem;
          font-weight: 600;
          color: #191919;
          margin: 0 0 2px 16px;
        }

        &.price {
          font-size: 1rem;
          font-weight: 600;
          color: #191919;
          margin: 0 0 4px 16px;

          i {
            color: #878787;
            font-style: normal;
            font-weight: 500;
          }
        }
      }

      ion-button {
        margin: 0 0 0px 16px;
        --color: #a63fff;
        --color-activated: #a63fff;
        --color-focused: #a63fff;
        font-weight: 600;
        letter-spacing: 1px;
        text-transform: capitalize;
      }
    }
  }

  ion-card-content {
    ion-item {
      --background: transparent !important;
      --inner-padding-start: 0px !important;
      --inner-padding-end: 0px !important;
      --padding-start: 0px !important;
      --padding-end: 0px !important;
      --margin-start: 0px !important;
      --margin-end: 0px !important;
      padding: 0 !important;
      margin: 0 !important;
      --border-color: #d7d7d7;
      --min-height: 32px;

      &.total {
        --min-height: 42px;
      }

      ion-label {
        color: #727272;
        margin: 0px !important;
        font-weight: 500;
        letter-spacing: 1px;

        span {
          font-weight: 500;
          color: #191919;
        }

        &.total,
        span.total {
          color: #191919;
          font-size: 1.2rem;
          font-weight: 600 !important;
        }
      }
    }

    ion-button.action {
      font-weight: 500;
      letter-spacing: 1px;
      margin-top: 16px;
    }
  }
}
</style>
