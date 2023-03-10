<script lang="ts" setup>
import { IonIcon, IonText, IonButton, IonCard, IonCardHeader, IonCardContent, IonItem, IonAvatar, IonLabel } from '@ionic/vue';
import { playCircleOutline } from 'ionicons/icons';
</script>

<template>
  <ion-card class="blog">
    <ion-card-header class="ion-padding">
      <ion-text color="" class="course">
        <h1 class="title">Design</h1>
        <h4 class="desc ion-margin-bottom">6 key UI design principles</h4>
        <h6 class="count">10.5K Subscribers</h6>
      </ion-text>
    </ion-card-header>
    <ion-card-content class="ion-no-padding">
      <ion-item lines="none" slot="header" class="">
        <ion-avatar slot="start">
          <img
            src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI5fHxmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
        </ion-avatar>
        <ion-label><span class="user-name">Brith Larsen</span><span class="sub-title">Capital Region,
            Denmark</span></ion-label>
        <ion-button mode="ios" expand="block" fill="clear" shape="round" size="large"
          class="ion-no-padding">
          <ion-icon :icon="playCircleOutline"></ion-icon>
        </ion-button>
      </ion-item>
    </ion-card-content>
  </ion-card>
</template>

<style lang="scss" scoped>
ion-card.blog {
  border-radius: 16px;
  background: #f4f5f8;
  letter-spacing: 0.8px;
  margin: 0 auto;
  min-width: 275px;
  max-width: 400px;

  ion-card-header,
  ion-card-content {
    background-color: #f4f5f8 !important;
  }

  ion-card-header {
    --background: linear-gradient(rgb(0 0 0 / 40%) 100%,
        rgb(255 255 255 / 0%) 100%),
      url(https://images.pexels.com/photos/7233108/pexels-photo-7233108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
    background-position: top;
    background-size: cover;
    height: 150px;
  }

  .course {
    position: absolute;
    bottom: 16px;

    .title {
      color: #f4f5f8;
      font-size: 1.2rem;
      font-weight: 600;
      letter-spacing: 1.2px;
    }

    .desc {
      color: #dfdfdf;
      font-size: 1.2rem;
      font-weight: 500;
      letter-spacing: 0.8px;
      margin: 0 0px 26px;
    }

    .count {
      color: #c1c1c1;
      font-size: 0.9rem;
      letter-spacing: 0.9px;
    }
  }

  ion-img::part(image) {
    border-radius: 0px;
  }

  ion-img {
    width: 100% !important;
    max-width: 100% !important;
    height: 180px;
    max-height: 180px;
    object-fit: cover;
  }

  ion-item {
    background: #f4f5f8 !important;
    --background: #f4f5f8 !important;
    padding: 8px 0;

    :hover {
      background: transparent !important;
    }

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
      font-size: 1rem;
      font-weight: 600;
    }

    span.sub-title {
      display: block;
      color: #9d9d9d;
      font-size: 0.8rem;
      font-weight: 600;
    }
  }

  p {
    color: #2e2e2e;
    font-size: 1rem;
    letter-spacing: 1px;
  }
}
</style>
