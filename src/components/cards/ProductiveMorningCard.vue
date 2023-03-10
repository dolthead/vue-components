<script lang="ts" setup>
import { IonCard, IonCardContent, IonCardHeader, IonItem, IonLabel, IonImg, IonText, IonAvatar } from '@ionic/vue';
</script>

<template>
  <ion-card class="blog">
    <ion-card-header>
      <ion-img
        src="https://images.pexels.com/photos/459600/pexels-photo-459600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></ion-img>
    </ion-card-header>
    <ion-card-content>
      <ion-text class="title">
        How to make our morning more productive, according to Science
      </ion-text>
      <ion-item lines="none" class="ion-no-padding ion-margin-top">
        <ion-avatar slot="start">
          <img
            src="https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
        </ion-avatar>
        <ion-label><span class="user-name">Tullia Marina</span><span class="date">Jan 21, 2020</span></ion-label>
      </ion-item>
    </ion-card-content>
  </ion-card>
</template>

<style lang="scss" scoped>
ion-card.blog {
  border-radius: 16px;
  background: #ededed;
  letter-spacing: 0.8px;
  margin: 0;
  min-width: 230px;

  ion-card-header,
  ion-card-content {
    background-color: #ededed !important;
  }

  ion-img::part(image) {
    border-radius: 16px;
  }

  ion-img {
    width: 100% !important;
    max-width: 100% !important;
    height: 180px;
    max-height: 180px;
    object-fit: cover;
  }

  ion-text.title {
    color: #3e3e3e;
    font-size: 1.1rem;
    font-weight: 600;
  }

  ion-item {
    --background: transparent !important;

    ion-avatar {
      height: 40px;
      width: 40px;
      max-width: 40px;
      max-height: 40px;
      object-fit: none !important;
      overflow: hidden !important;
    }

    .user-name {
      color: #3e3e3e;
      font-weight: 600;
    }

    span.date {
      display: block;
      font-size: 0.8rem;
      color: #9d9d9d;
      font-weight: 600;
    }
  }
}
</style>
