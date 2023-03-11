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
                     <ion-label><span class="title">Photo of the day</span></ion-label>
                  </ion-item>
               </ion-card-header>
            </ion-card>
         </ion-col>
      </ion-row>
   </ion-grid>
</template>

<style lang="scss" scoped>
.card {
  --background: url("https://images.unsplash.com/photo-1491147334573-44cbb4602074?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80");
  background-position: center;
  background-size: cover;
  border-radius: 16px !important;
  height: 300px;
  width: 100%;
  min-width: 180px;
  margin: 0px !important;
  padding: 0px !important;

  ion-item {
    padding: 0px 0;
    --background: linear-gradient(rgb(0 0 0 / 60%) 80%, rgb(255 255 255 / 0%) 100%);

    .title {
      color: #ededed;
      font-size: 3rem;
      font-weight: 500;
      letter-spacing: 1.2px;
      white-space: break-spaces;
    }
  }
}
</style>
