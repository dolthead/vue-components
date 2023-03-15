<script lang="ts" setup>
import { IonCard, IonCardContent, IonIcon, IonButton, IonCardHeader, IonCardTitle, IonImg } from '@ionic/vue';
import { add } from 'ionicons/icons';
</script>

<template>
  <ion-card class="card" mode="ios">
    <ion-card-header class="ion-no-padding ion-padding-bottom">
      <ion-card-title>Accent Chair </ion-card-title>
      <div class="price"><i class="currency">$</i>89<i class="penny">.99</i></div>
    </ion-card-header>
    <ion-card-content class="ion-margin-bottom">
      <ion-img src="/assets/wingchair.png"></ion-img>
    </ion-card-content>
    <div class="cart">
      <ion-button>
        <ion-icon :icon="add"></ion-icon>
      </ion-button>
    </div>
  </ion-card>
</template>

<style lang="scss" scoped>
:root {
  display: flex;
  justify-content: center;
  padding: 0;
  height: auto;
  background: transparent !important;
}

.card {
  border-radius: 16px;
  background: #ffe9ec;
  letter-spacing: 0.8px;
  margin: 0;
  padding: 32px 0 32px 32px;
  height: auto;
  width: 100%;
  position: relative;

  ion-card-title {
    color: #9f656c;
    font-size: 1.8rem;
    white-space: nowrap;
    font-weight: 400;
  }

  .price {
    color: #9f656c;
    font-size: 2rem;
    font-weight: 600;

    i.currency {
      margin-right: 2px;
    }

    i {
      font-size: 1.5rem;
      font-style: normal !important;
    }

    i.penny {
      font-size: 1.2rem;
      font-style: normal !important;
    }
  }

  .cart {
    position: absolute;
    bottom: 0;
    right: 0;

    ion-button {
      margin: 0 !important;
      height: 60px !important;
      width: 60px !important;
      --border-radius: 16px 0 16px 0 !important;
      --background: #9f656c;
      --background-activated: #8b4d54;
      --background-focused: #8b4d54;
      --background-hover: #8b4d54;

      ion-icon {
        font-size: 2rem;
      }
    }
  }
}
</style>
