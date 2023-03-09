<script lang="ts" setup>
import { IonCard, IonCardContent, IonIcon, IonButtons, IonImg, IonText, IonGrid, IonRow, IonCol, IonButton } from '@ionic/vue';
import { bagOutline } from 'ionicons/icons';
</script>

<template>
  <ion-card class="card" mode="ios">
     <ion-card-content class="ion-padding">
        <ion-img src="https://iecommerce.sconn.co.in/assets/images/product-2.png"></ion-img>
        <ion-text>
           <h2>Sukin Oil Balancing<span>Facial Moisturiser</span></h2>
        </ion-text>
        <ion-grid class="ion-no-padding action-grid">
           <ion-row class="ion-align-items-center">
              <ion-col size="6" class="ion-text-start">
                 <ion-text class="price">
                    $9.00
                 </ion-text>
              </ion-col>
              <ion-col size="6">
                 <ion-buttons class="ion-float-right">
                    <ion-button class="cart">
                       <ion-icon :icon="bagOutline"></ion-icon>
                    </ion-button>
                 </ion-buttons>
              </ion-col>
           </ion-row>
        </ion-grid>
     </ion-card-content>
  </ion-card>
</template>

<style lang="scss" scoped>
ion-card.card {
  border-radius: 16px;
  background: #fff;
  letter-spacing: 0.8px;
  max-width: fit-content;
  margin: 0 auto;

  ion-img {
    height: 200px;
  }
  h2 {
    letter-spacing: 1px;
    font-size: 1.25rem;
    color: #222428;
    font-weight: 500;
    span {
      display: block;
      letter-spacing: 1px;
      font-size: 0.875rem;
      color: #92949c;
      padding: 3px 0 5px;
      font-weight: 400;
      text-transform: capitalize;
    }
  }
  .action-grid {
    .price {
      font-weight: 600 !important;
      font-size: 1.5rem;
      color: #222428;
      text-align: start !important;
      display: block;
    }
    ion-buttons {
      ion-button {
        &.cart {
          --border-radius: 50% !important;
          --background: #222428 !important;
          color: #fff;
          width: 40px !important;
          height: 40px !important;
          --padding-start: 0;
          --padding-end: 0;
          --padding-top: 0;
          --padding-bottom: 0;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
          vertical-align: middle;
        }
        ion-icon {
          font-size: 22px !important;
        }
      }
    }
  }
}
</style>
