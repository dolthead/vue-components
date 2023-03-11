<script lang="ts" setup>
import { IonGrid, IonRow, IonCol, IonLabel } from '@ionic/vue';
</script>

<template>
  <ion-grid class="ion-no-padding">
    <ion-row class="widget">
      <ion-col size="12" class="ion-padding">
        <ion-label class=""><span class="sub-title">Lifestyle</span><span class="title">How to make our morning more
            productive, according to Science</span></ion-label>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<style lang="scss" scoped>
.widget {
  background: linear-gradient(rgb(0 0 0 / 0%) 100%, rgb(255 255 255 / 0%) 100%), url("https://images.pexels.com/photos/942802/pexels-photo-942802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-position: top;
  background-size: cover;
  border-radius: 16px !important;
  height: auto;
  width: 100%;
  min-width: 190px;
  max-width: 390px;
  margin: 0px auto;
  padding: 0px !important;

  ion-label {
    margin: 0 !important;

    .title {
      font-size: 1rem;
      color: #424242;
      font-weight: 600;
      letter-spacing: 0.8px;
      display: block;
    }

    .sub-title {
      font-size: 0.8rem;
      color: #9d9d9d;
      display: block;
      font-weight: 600;
      letter-spacing: 0.8px;
      margin: 45px 0 10px;
      text-transform: uppercase;
    }
  }
}
</style>
