<script lang="ts" setup>
import { IonGrid, IonRow, IonCol, IonTitle, IonAvatar, IonLabel, IonButton } from '@ionic/vue';
</script>

<template>
  <ion-grid class="widget">
     <ion-row class="ion-padding-vertical">
        <ion-col size="12">
           <ion-title class="ion-text-start">Mutual Friends</ion-title>
        </ion-col>
     </ion-row>
     <ion-row class="ion-padding-bottom">
        <ion-col size="6" class="ion-text-center">
           <div class="f-section">
              <div class="follow-person">
                 <ion-avatar>
                    <img alt="Name" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                 </ion-avatar>
              </div>
              <ion-label class="name">Kristin</ion-label>
              <ion-button fill="solid" color="primary" shape="round" size="small" class="ion-text-capitalize" mode="ios">
                 Follow
              </ion-button>
           </div>
        </ion-col>
        <ion-col size="6" class="ion-text-center">
           <div class="f-section">
              <div class="follow-person">
                 <ion-avatar>
                    <img alt="Name" src="https://images.unsplash.com/photo-1628890920690-9e29d0019b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                 </ion-avatar>
              </div>
              <ion-label class="name">Andrew</ion-label>
              <ion-button fill="solid" color="primary" shape="round" size="small" class="ion-text-capitalize" mode="ios">
                 Follow
              </ion-button>
           </div>
        </ion-col>
        <ion-col size="6" class="ion-text-center">
           <div class="f-section">
              <div class="follow-person">
                 <ion-avatar>
                    <img alt="Name" src="https://images.unsplash.com/photo-1639747279286-c07eecb47a0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                 </ion-avatar>
              </div>
              <ion-label class="name">Barrett</ion-label>
              <ion-button fill="solid" color="primary" shape="round" size="small" class="ion-text-capitalize" mode="ios">
                 Follow
              </ion-button>
           </div>
        </ion-col>
        <ion-col size="6" class="ion-text-center">
           <div class="f-section">
              <div class="follow-person">
                 <ion-avatar>
                    <img alt="Name" src="https://images.unsplash.com/photo-1521252659862-eec69941b071?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                 </ion-avatar>
              </div>
              <ion-label class="name">Cecelia</ion-label>
              <ion-button fill="solid" color="primary" shape="round" size="small" class="ion-text-capitalize" mode="ios">
                 Follow
              </ion-button>
           </div>
        </ion-col>
     </ion-row>
  </ion-grid>
</template>

<style lang="scss" scoped>
.widget {
  background-color: #fff !important;
  border-radius: 16px !important;
  height: auto;
  width: 100%;
  min-width: 240px;
  max-width: 460px;
  margin: 0 auto;
  padding: 5px 10px;

  ion-title {
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 1px;
    color: #3e3e3e;
    padding: 0 0px;
  }
  .f-section
  {
    background: #fbfbfb;
    border: 1px solid #f1f1f1;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    
    &:hover
    {
      background: #fff;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }

    ion-avatar
    {
      width: 45px;
      height: 45px;
      margin-bottom: 5px;
    }
    .follow-person
    {
      display: flex;
      justify-content: center;
      text-align: center;
      padding: 16px 0 0;
    }
    .name
    {
      font-size: 0.9rem;
      font-weight: 600;
      color: #666666 !important;
      letter-spacing: 0.5px;
    }
    ion-button
    {
      margin: 16px;
      letter-spacing: 0.5px;
      font-weight: 500;
    }
  }
}
</style>
