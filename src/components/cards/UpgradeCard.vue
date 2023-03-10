<script lang="ts" setup>
import { IonIcon, IonText, IonButton, IonGrid, IonCol, IonRow, IonCard, IonCardContent } from '@ionic/vue';
import { arrowForwardOutline } from 'ionicons/icons';
</script>

<template>
  <ion-grid class="ion-no-padding">
     <ion-row>
        <ion-col size="12">
           <ion-card class="card">
              <ion-card-content>
                 <ion-text>
                    <h1 class="desc">Upgrade your <br/> Plan</h1>
                 </ion-text>
                 <ion-button fill="solid" class="circle-button" color="light">
                    <ion-icon size="large" :icon="arrowForwardOutline"></ion-icon>
                 </ion-button>
              </ion-card-content>
           </ion-card>
        </ion-col>
     </ion-row>
  </ion-grid>
</template>

<style lang="scss" scoped>
.card {
  --background: url("https://images.pexels.com/photos/11280358/pexels-photo-11280358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-position: top;
  background-size: cover;
  border-radius: 16px !important;
  height: 150px;
  width: 100%;
  min-width: 280px;
  max-width: 400px;
  margin: 0 auto;
  padding: 0px !important;
}

ion-card-content {
  padding: 32px 16px 16px;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: linear-gradient(
    rgba(255, 255, 255, 0) 5%,
    rgb(0 0 0 / 24%) 55%
  ) !important;

  ion-text {
    h1.desc {
      color: #ededed !important;
      font-size: 1.6rem;
      font-weight: 500;
      letter-spacing: 2px;
      display: -webkit-inline-box;
    }
  }

  ion-button.circle-button {
    --border-radius: 50%;
    width: 45px;
    height: 45px;
    float: right;
  }
}
</style>
