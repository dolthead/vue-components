<script lang="ts" setup>
import { IonGrid, IonRow, IonCol, IonLabel, IonIcon } from '@ionic/vue';
import { fileTrayOutline } from 'ionicons/icons';
</script>

<template>
  <ion-grid class="ion-no-padding">
    <ion-row class="widget">
      <ion-col size="12" class="ion-padding">
        <ion-label class="">
          <span class="title">Inbox</span>
          <span class="sub-title">Website home page design</span>
          <span class="count ion-margin-bottom">9 more</span>
        </ion-label>
        <div class="inbox-btn">
          <ion-icon color="primary" :icon="fileTrayOutline"></ion-icon>
        </div>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<style lang="scss" scoped>
.widget {
  background: linear-gradient(0deg, #1b5cd6, #3472e6 80%) no-repeat;
  background-position: bottom;
  background-size: cover;
  border-radius: 16px !important;
  height: auto;
  width: 100%;
  margin: 0px !important;
  padding: 0px !important;

  ion-label {
    margin: 0 !important;

    .sub-title {
      font-size: 0.9rem;
      color: #ebebeb;
      font-weight: 500;
      letter-spacing: 1px;
      display: block;
    }

    .title {
      font-size: 1.2rem;
      color: #f1f1f1;
      display: block;
      font-weight: 600;
      letter-spacing: 0.8px;
      margin: 0px 0 10px;
      text-transform: capitalize;
    }

    .count {
      font-size: 0.8rem !important;
      font-weight: 500;
      color: #cbcbcb;
      display: block;
      margin: 5px 0 10px;
      letter-spacing: 0.8px;
    }
  }

  .inbox-btn {
    padding: 8px;
    margin-right: 8px;
    background: #f5f5f5;
    width: 40px;
    height: 40px;
    font-size: 1rem;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    ion-icon {
      font-size: 22px;
    }
  }
}
</style>
