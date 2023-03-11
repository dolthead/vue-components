<script lang="ts" setup>
import { IonCard, IonGrid, IonRow, IonCol, IonCardContent, IonText } from '@ionic/vue';
</script>

<template>
   <ion-grid class="ion-no-padding">
      <ion-row>
         <ion-col size="12">
            <ion-card class="card">
               <ion-card-content>
                  <ion-text>
                     <h1 class="title">Sweetest <br/> tunes</h1>
                  </ion-text>
               </ion-card-content>
            </ion-card>
         </ion-col>
      </ion-row>
   </ion-grid>
</template>

<style lang="scss" scoped>
.card {
  --background: url("https://images.unsplash.com/photo-1490367605959-06955305859b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
  background-position: center;
  background-size: cover;
  border-radius: 16px !important;
  height: 150px;
  width: 100%;
  min-width: 226px;
  max-width: 300px;
  margin: 0 auto;
  padding: 0px !important;

  ion-card-content {
    padding: 16px 16px 8px;
    position: absolute;
    bottom: 0;
    width: 100%;
    background: linear-gradient(
      rgb(255 255 255 / 0%) 0%,
      rgb(0 0 0 / 13%) 70%
    ) !important;

    ion-text {
      h1.title {
        color: #ededed !important;
        font-size: 1.4rem;
        font-weight: 500;
        letter-spacing: 2px;
      }
    }
  }
}
</style>
