<script lang="ts" setup>
import { IonCard, IonGrid, IonRow, IonCol, IonCardHeader, IonItem, IonLabel } from '@ionic/vue';
</script>

<template>
  <ion-grid class="ion-no-padding">
     <ion-row>
        <ion-col size="12">
           <ion-card class="card">
              <ion-card-header class="ion-no-padding">
                 <ion-item lines="none">
                    <ion-label><span class="title">Eat what makes you happy</span></ion-label>
                 </ion-item>
              </ion-card-header>
           </ion-card>
        </ion-col>
     </ion-row>
  </ion-grid>
</template>

<style lang="scss" scoped>
.card {
  --background: url("https://images.unsplash.com/photo-1502741126161-b048400d085d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80");
  background-position: center;
  background-size: cover;
  border-radius: 16px !important;
  height: 150px;
  width: 100%;
  max-width: 240px;
  margin: 0 auto;
  padding: 0px !important;

  ion-item {
    padding: 0px 0;
    --background: linear-gradient(rgb(0 0 0 / 7%) 70%, rgb(255 255 255 / 0%) 100%);

    .title {
      color: #ededed;
      font-size: 1.4rem;
      font-weight: 500;
      letter-spacing: 1.2px;
      white-space: break-spaces;
    }
  }
}
</style>
