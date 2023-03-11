<script lang="ts" setup>
import { IonGrid, IonRow, IonCol, IonIcon, IonLabel, IonImg } from '@ionic/vue';
import { navigate } from 'ionicons/icons';
</script>

<template>
   <ion-grid class="ion-no-padding">
      <ion-row class="widget ion-align-items-center">
         <ion-col size="12" class="ion-padding">
            <div class="weather-img">
               <ion-img src="https://cdn-icons-png.flaticon.com/128/4064/4064390.png"></ion-img>
            </div>
            <ion-label class="">
               <span class="temp">12°C</span>
               <span class="weather-desc">Partly Cloudy</span>
               <span class="location ion-margin-bottom">
                  <ion-icon :icon="navigate"></ion-icon>
                  &nbsp;Madrid, Spain
               </span>
            </ion-label>
         </ion-col>
      </ion-row>
   </ion-grid>
</template>

<style lang="scss" scoped>
.widget {
   background: linear-gradient(0deg, #090810, #090810 70%) no-repeat;
   background-position: bottom;
   background-size: cover;
   border-radius: 16px !important;
   height: auto;
   width: 100%;
   min-width: 190px;
   margin: 0px !important;
   padding: 0px !important;

   .weather-img {
      display: flex;
      justify-content: center;

      ion-img {
         width: 80%;
      }
   }

   ion-label {
      margin: 0 !important;

      .temp {
         font-size: 1.8rem;
         text-align: center;
         color: #ededed;
         display: block;
         font-weight: 600;
         letter-spacing: 0.8px;
         margin: 0px 0 5px;
         text-transform: capitalize;
      }

      .weather-desc {
         font-size: 0.9rem;
         text-align: center;
         color: #ededed;
         font-weight: 500;
         letter-spacing: 1px;
         display: block;
      }

      .location {
         font-size: 0.9rem !important;
         text-align: center;
         font-weight: 500;
         color: #858585;
         margin: 15px 0 5px;
         letter-spacing: 0.8px;
         display: flex;
         justify-content: center;
         align-items: center;
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
}</style>
