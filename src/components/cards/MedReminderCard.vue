<script lang="ts" setup>
import { IonCard, IonCardContent, IonCardHeader, IonText, IonItem, IonAvatar, IonLabel } from '@ionic/vue';
</script>

<template>
  <ion-card class="card" mode="ios">
     <ion-card-header class="ion-padding">
        <ion-text class="heading">
           <h1 class="title">Hola, Marco!</h1>
           <h4 class="desc ion-margin-bottom">Let's see the next checklist!</h4>
        </ion-text>
     </ion-card-header>
     <ion-card-content class="ion-no-padding">
        <ion-item lines="none" slot="header" class="">
           <ion-avatar slot="start">
              <img src="https://cdn3d.iconscout.com/3d/premium/thumb/capsule-5228968-4386262.png" />
           </ion-avatar>
           <ion-label><span class="name">Antihistamin</span><span class="sub-title">It's today 9:00</span></ion-label>
        </ion-item>
     </ion-card-content>
  </ion-card>
</template>

<style lang="scss" scoped>
ion-card.card {
  border-radius: 16px;
  background: #fff;
  letter-spacing: 0.8px;
  margin: 0 auto;
  max-width: 300px;

  ion-card-header,
  ion-card-content {
    background-color: rgb(255 255 255 / 40%) !important;
  }

  ion-card-header {
    align-items: center;
    display: flex;
    justify-content: center;
    text-align: center;
    --background: linear-gradient(
        rgb(0 0 0 / 5%) 100%,
        rgb(255 255 255 / 0%) 100%
      ),
      url(https://img.freepik.com/free-photo/3d-render-realistic-medical-stethoscope-color-background_460848-10697.jpg?t=st=1669809833~exp=1669810433~hmac=2fa288a…);
    background-position: top;
    background-size: cover;
    height: 250px;
    position: relative;
    transform: scaleX(-1);
  }
  ion-card-content {
    position: absolute;
    bottom: 0px;
    width: -webkit-fill-available;
    margin: 16px;
    border-radius: 16px;
    margin-bottom: 22px;
  }
  .heading {
    position: absolute;
    top: 0;
    transform: scaleX(-1);

    .title {
      color: #fff;
      font-size: 1.2rem;
      font-weight: 600;
      letter-spacing: 1.2px;
    }
    .desc {
      color: #fff;
      font-size: 1rem;
      font-weight: 500;
      letter-spacing: 1px;
      margin: 0 0px 26px;
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
    // object-position: left;
  }

  ion-item {
    background: transparent !important;
    --background: transparent !important;
    border-radius: 16px;
    --border-radius: 16px;
    padding: 2px 0;
    :hover {
      background: transparent !important;
    }
    ion-avatar {
      height: 50px;
      width: 50px;
      max-width: 50px;
      max-height: 50px;
      object-fit: none !important;
      overflow: hidden !important;
      --border-radius: 0;
    }
    .name {
      color: #262626;
      font-size: 1.2rem;
      font-weight: 600;
    }
    span.sub-title {
      display: block;
      color: #838383;
      font-size: 1rem;
      font-weight: 600;
    }
  }
}
</style>
