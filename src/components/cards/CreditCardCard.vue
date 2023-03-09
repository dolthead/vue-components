<script lang="ts" setup>
import { IonCard, IonText, IonRow, IonCol } from '@ionic/vue';
</script>

<template>
  <ion-card class="card" mode="ios">
     <ion-text class="type">Credit Card</ion-text>
     <img src="https://iecommerce.sconn.co.in/assets/icon/chip.svg" class="card-chip" alt="Card Chip" />
     <ion-row class="ion-margin-bottom">
        <ion-col size="3">
           <ion-text class="number">4875</ion-text>
        </ion-col>
        <ion-col size="3">
           <ion-text class="number">9677</ion-text>
        </ion-col>
        <ion-col size="3">
           <ion-text class="number">1782</ion-text>
        </ion-col>
        <ion-col size="3">
           <ion-text class="number">9706</ion-text>
        </ion-col>
     </ion-row>
     <ion-row>
        <ion-col size="4">
           <ion-text class="valid">
              <span class="ion-text-uppercase">Valid <span class="d-block">From</span></span>
              <span class="mon-yr">05/20</span>
           </ion-text>
        </ion-col>
        <ion-col size="4">
           <ion-text class="valid">
              <span class="ion-text-uppercase">Valid <span class="d-block">Thru</span></span>
              <span class="mon-yr">04/25</span>
           </ion-text>
        </ion-col>
     </ion-row>
     <ion-row class="ion-align-items-center">
        <ion-col size="9">
           <ion-text class="holder-name">
              Nicolas Farino
           </ion-text>
        </ion-col>
        <ion-col size="3" class="ion-text-end ion-float-right">
           <img src="https://iecommerce.sconn.co.in/assets/icon/mastercard.svg" class="card-type" alt="Card Type" />
        </ion-col>
     </ion-row>
  </ion-card>
</template>

<style lang="scss" scoped>
ion-card.card {
  background-image: url(https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80);
  border-radius: 12px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 216px;
  margin: 0;
  padding: 16px;
  min-width: 270px;
  max-width: 350px;

  ion-col
  {
    padding: 0px !important;
  }

  ion-text {
    &.type {
      font-weight: 500 !important;
      font-size: 1.05rem;
      color: #ffffff4d;
      letter-spacing: 1px;
    }
    &.number {
      font-weight: 500 !important;
      font-size: 1.25rem;
      color: #f4f5f8;
      letter-spacing: 0.5px;
    }
    &.valid {
      display: flex;
      align-items: center !important;
      span {
        font-weight: 400 !important;
        font-size: 0.5rem;
        color: #f4f5f8;
        letter-spacing: 0.5px;
        &.mon-yr {
          font-weight: 400 !important;
          font-size: 1.063rem;
          margin-left: 8px;
        }
      }
      .d-block {
        display: block;
      }
    }
    &.holder-name {
      font-weight: 500 !important;
      font-size: 0.875rem;
      text-transform: uppercase !important;
      color: #f4f5f8;
      letter-spacing: 0.5px;
    }
  }

  img.card-chip {
    height: 38px;
    display: block;
    margin: 16px 0;
  }
  img.card-type {
    height: 40px;
  }
}
</style>
