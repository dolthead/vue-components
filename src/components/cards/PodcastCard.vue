<script lang="ts" setup>
import { IonCard, IonGrid, IonRow, IonCol, IonCardHeader, IonItem, IonCardContent, IonButton, IonIcon, IonLabel } from '@ionic/vue';
import { play } from 'ionicons/icons';
</script>

<template>
  <ion-grid class="ion-no-padding">
     <ion-row>
        <ion-col size="12">
           <ion-card class="card">
              <ion-card-header class="ion-no-padding">
                 <ion-item lines="none" class="">
                    <ion-label><span class="title">Yagan James Cadorin</span><span class="sub-title">Podcast</span></ion-label>
                 </ion-item>
              </ion-card-header>
              <ion-card-content>
                 <ion-button fill="solid" class="circle-button" color="dark">
                    <ion-icon size="large" :icon="play"></ion-icon>
                 </ion-button>
              </ion-card-content>
           </ion-card>
        </ion-col>
     </ion-row>
  </ion-grid>
</template>

<style lang="scss" scoped>
.card {
  --background: url("https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
  background-position: center;
  background-size: cover;
  border-radius: 16px !important;
  height: auto;
  width: 100%;
  margin: 0px !important;
  padding: 0px !important;

  ion-item {
    padding: 0px 0;
    --background: linear-gradient(
      rgb(0 0 0 / 16%) 60%,
      rgb(255 255 255 / 0%) 100%
    );

    .title {
      color: #ededed;
      font-size: 1.5rem;
      font-weight: 500;
      letter-spacing: 1.5px;
      display: block;
      white-space: break-spaces;
      margin-top: 10px;
    }
    span.sub-title {
      display: block;
      font-size: 0.9rem;
      color: #838383;
      font-weight: 500;
      letter-spacing: 1px;
      margin-top: 8px;
    }
  }
  ion-card-content {
    ion-button.circle-button {
      --border-radius: 50%;
      width: 45px;
      height: 45px;
    }
  }
}
</style>
