<script lang="ts" setup>
import { IonGrid, IonRow, IonCol, IonIcon, IonLabel, IonImg, IonText } from '@ionic/vue';
import { navigateOutline } from 'ionicons/icons';
</script>

<template>
   <ion-grid class="ion-no-padding widget">
      <ion-row class="ion-align-items-center location">
         <ion-col size="6" class="">
            <ion-icon class="app-icon" :icon="navigateOutline"></ion-icon>
            <span>&nbsp;Dubai</span>
         </ion-col>
         <ion-col size="6" class="ion-text-end">
            <ion-label class="time">11:45 am</ion-label>
         </ion-col>
      </ion-row>
      <ion-row class="ion-padding-vertical">
         <ion-col size="12" class="ion-margin-vertical ion-text-center">
            <img class="w-img" src="https://cdn-icons-png.flaticon.com/128/494/494471.png" />
            <ion-text color="light">
               <h1 class="ion-no-margin temp">32°C</h1>
               <h6 class="w-desc ion-text-capitalize ion-no-margin">Very humid</h6>
            </ion-text>
         </ion-col>
      </ion-row>
      <ion-row class="w-info">
         <ion-col size="12">
            <ion-label>
               <ion-img src="https://cdn-icons-png.flaticon.com/128/2011/2011448.png"></ion-img>
               &nbsp;<span>4km/hr</span>
            </ion-label>
            <ion-label>
               <ion-img src="https://cdn-icons-png.flaticon.com/128/606/606797.png"></ion-img>
               &nbsp;<span>5%</span>
            </ion-label>
            <ion-label>
               <ion-img src="https://cdn-icons-png.flaticon.com/128/606/606795.png"></ion-img>
               &nbsp;<span>7,4h</span>
            </ion-label>
         </ion-col>
      </ion-row>
   </ion-grid>
</template>

<style lang="scss" scoped>
.widget {
   background-color: #fdfdfd !important;
   border-radius: 16px !important;
   height: auto;
   width: 100%;
   min-width: 190px;
   max-width: 270px;
   margin: 0 auto;
   padding: 16px 16px;

   .w-img {
      width: 40%;
      border-radius: 50% !important;
      box-shadow: rgb(255 204 103 / 45%) 0px 0px 50px 8px;
      margin: 0 0 5px;
   }

   .location {
      ion-icon {
         margin: -3px 0;
         color: #747474;
         --ionicon-stroke-width: 50px;
      }

      span {
         color: #747474;
         font-weight: 600;
         letter-spacing: 0.5px;
      }

      .time {
         color: #747474;
         font-weight: 500;
      }
   }

   .temp {
      font-size: 2.8rem;
      letter-spacing: 1px;
      font-weight: 500;
      color: #4a4a4a;
   }

   .w-desc {
      font-size: 1rem;
      letter-spacing: 1px;
      font-weight: 500;
      color: #808080;
   }

   .w-info {
      ion-label {
         display: flex;
         align-items: center;
         margin: 0 0 10px;

         &:last-child {
            margin: 0 0 0;
         }
      }

      ion-img {
         width: 16px;
      }

      span {
      color: #808080;
         font-size: 0.9rem;
         letter-spacing: 0.9px;
         margin: 0 2px;
      }
   }
}
</style>
