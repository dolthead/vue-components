<script lang="ts" setup>
import { IonCard, IonCardContent, IonCardHeader, IonItem, IonLabel } from '@ionic/vue';
</script>

<template>
  <ion-card class="blog">
    <ion-card-header class="ion-no-padding">
      <ion-item lines="none" class="">
      <div class="profile">
        d
        </div>
        <ion-label><span class="user-name">Design41</span><span class="sub-title">ux designers</span></ion-label>
      </ion-item>
    </ion-card-header>
    <ion-card-content class="ion-padding-horizontal ion-no-padding">
      <p>
        Every member of the team is goal-oriented, they come up with great ideas and avoid mistakes. And let's not forget
        that teamwork draws new friends.
      </p>
    </ion-card-content>
  </ion-card>
</template>

<style lang="scss" scoped>
ion-card.blog {
  border-radius: 16px;
  background: #e7b603;
  letter-spacing: 0.8px;
  padding: 16px;
  margin: 0px;

  ion-card-header,
  ion-card-content {
    background-color: #e7b603 !important;
  }

  ion-card-header {
    img {
      width: 50px;
      height: 50px;
      object-fit: cover;
      object-position: center;
      border-radius: 16px;
      margin-right: 12px;
    }

    ion-img::part(image) {
      border-radius: 8px;
    }
  }

  ion-item {
    background: #e7b603 !important;
    --background: #e7b603 !important;
    padding: 0px 0 10px;

    .profile {
      width: 50px;
      height: 50px;
      background: #ededed;
      color: #e7b603;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50px;
      margin: 0 8px 0 0;
      font-size: 2rem;
      font-weight: 600;
    }

    .user-name {
      color: #ffffff;
      font-size: 1.2rem;
      font-weight: 500;
    }

    span.sub-title {
      display: block;
      color: #f7f7f7;
      font-size: 0.9rem;
      font-weight: 500;
      margin: 2px 0 0px;
    }
  }

  p {
    line-height: 1.5;
    margin-bottom: 0px;
    color: #f5f5f5;
    font-size: 0.89rem;
    text-align: justify;
    letter-spacing: 1px;
  }
}
</style>
