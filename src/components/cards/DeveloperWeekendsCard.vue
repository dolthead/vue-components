<script lang="ts" setup>
import { IonCard, IonGrid, IonRow, IonCol, IonCardHeader, IonItem, IonLabel, IonAvatar, IonCardContent, IonText } from '@ionic/vue';
</script>

<template>
   <ion-grid class="ion-no-padding">
      <ion-row>
         <ion-col size="12">
            <ion-card class="card">
               <ion-card-header class="ion-no-padding">
                  <ion-item lines="none" class="">
                     <ion-avatar slot="start">
                        <img
                           src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80" />
                     </ion-avatar>
                     <ion-label><span class="user-name">Guibson Martins</span><span class="sub-title">UI/UX
                           Designer</span></ion-label>
                  </ion-item>
               </ion-card-header>
               <ion-card-content>
                  <ion-text>
                     <h1 class="desc">How Developers spend their weekends</h1>
                  </ion-text>
               </ion-card-content>
            </ion-card>
         </ion-col>
      </ion-row>
   </ion-grid>
</template>

<style lang="scss" scoped>
.card {
   --background: url("https://images.pexels.com/photos/2765869/pexels-photo-2765869.jpeg?auto=compress&cs=tinysrgb&w=600");
   background-position: center;
   background-size: cover;
   border-radius: 16px !important;
   height: 300px;
   width: 100%;
   margin: 0px !important;
   padding: 0px !important;

   ion-item {
      padding: 0px 0;
      --background: linear-gradient(rgb(0 0 0 / 15%) 50%, rgba(255, 255, 255, 0) 100%);

      .user-name {
         color: #ededed;
         font-size: 1.02rem;
         font-weight: 500;
         letter-spacing: 1.2px;
      }

      span.sub-title {
         display: block;
         font-size: 0.8rem;
         color: #d3d3d3;
         font-weight: 500;
         letter-spacing: 0.8px;
      }
   }

   ion-card-content {
      padding: 16px 16px 8px;
      position: absolute;
      bottom: 0;
      width: 100%;
      background: linear-gradient(rgba(255, 255, 255, 0) 5%, rgb(0 0 0 / 59%) 25%) !important;

      ion-text {
         h1.desc {
            color: #ededed !important;
            font-size: 1.6rem;
            font-weight: 500;
            letter-spacing: 2px;
         }
      }
   }
}
</style>
