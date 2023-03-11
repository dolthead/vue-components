<script lang="ts" setup>
import { IonGrid, IonRow, IonCol, IonTitle, IonAvatar, IonLabel } from '@ionic/vue';
</script>

<template>
  <ion-grid class="widget">
    <ion-row class="ion-padding-vertical">
      <ion-col size="12">
        <ion-title class="ion-text-start">Contact</ion-title>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col size="3" class="ion-text-center ion-margin-bottom">
        <div class="contact-person">
          <ion-avatar>
            <img alt="Name"
              src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
          </ion-avatar>
        </div>
        <ion-label class="name">Paulina</ion-label>
      </ion-col>
      <ion-col size="3" class="ion-text-center ion-margin-bottom">
        <div class="contact-person">
          <ion-avatar>
            <img alt="Name"
              src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
          </ion-avatar>
        </div>
        <ion-label class="name">Steven</ion-label>
      </ion-col>
      <ion-col size="3" class="ion-text-center ion-margin-bottom">
        <div class="contact-person">
          <ion-avatar>
            <img alt="Name"
              src="https://images.unsplash.com/photo-1613145997970-db84a7975fbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
          </ion-avatar>
        </div>
        <ion-label class="name">Trevor</ion-label>
      </ion-col>
      <ion-col size="3" class="ion-text-center ion-margin-bottom">
        <div class="contact-person">
          <ion-avatar>
            <img alt="Name" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </ion-avatar>
        </div>
        <ion-label class="name">Susan</ion-label>
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
  padding: 0px 16px;

  ion-col {
    min-width: 60px;
  }
  
  ion-title {
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 1px;
    color: #3e3e3e;
    padding: 0 0px;
  }

  ion-avatar {
    width: 45px;
    height: 45px;
    margin-bottom: 5px;
  }

  .contact-person {
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .name {
    font-size: 0.9rem;
    font-weight: 600;
    color: #666666 !important;
    letter-spacing: 0.5px;
  }
}
</style>
