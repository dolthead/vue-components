<script lang="ts" setup>
import { IonCard, IonCardContent, IonIcon, IonButtons, IonItem, IonAvatar, IonButton, IonLabel } from '@ionic/vue';
import { closeOutline, checkmarkOutline } from 'ionicons/icons';
</script>

<template>
  <ion-card class="meetup">
     <ion-card-content class="ion-no-padding">
        <ion-item lines="none" slot="header" class="">
           <ion-avatar slot="start">
              <img src="https://media-exp1.licdn.com/dms/image/D560BAQGzQnTVtMlXRw/company-logo_100_100/0/1667321566629?e=1678924800&v=beta&t=oGUeRywObSYu6e0t-ks4NiEohX2gUj2e85TPuYIl_og" />
           </ion-avatar>
           <ion-label><span class="desc">UI Design trends | 2023</span><span class="location">Madison, Wisconsin</span></ion-label>
        </ion-item>
        <ion-item lines="none" class="action">
           <ion-label>Wanna join?</ion-label>
           <ion-buttons>
              <ion-button class="ion-float-right" fill="outline" color="danger">
                 <ion-icon :icon="closeOutline"></ion-icon>
              </ion-button>
              <ion-button class="ion-float-right" fill="solid" color="primary">
                 <ion-icon :icon="checkmarkOutline"></ion-icon>
              </ion-button>
           </ion-buttons>
        </ion-item>
     </ion-card-content>
  </ion-card>
</template>

<style lang="scss" scoped>
ion-card.meetup {
  border-radius: 16px !important;
  --border-radius: 16px !important;
  background: #f4f5f8;
  letter-spacing: 0.8px;
  margin: 0;

  ion-card-header,
  ion-card-content {
    background-color: #f4f5f8 !important;
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
  padding: 16px 0 0;
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
    --border-radius: 8px;
  }
  .desc {
    color: #3e3e3e;
    font-size: 1.2rem;
    letter-spacing: 1.2px;
    font-weight: 600;
  }
  span.location {
    display: block;
    color: #9d9d9d;
    font-size: 0.9rem;
    letter-spacing: 0.9px;
    font-weight: 500;
  }
}
.action {
  padding: 16px 0;
  margin: 0 16px 8px;
  --background: #e4eeff !important;
  --border-radius: 16px;
  line-height: 50px;
  ion-label {
    color: var(--ion-color-primary);
    font-size: 1.2rem;
    letter-spacing: 1.2px;
    font-weight: 600;
  }
  ion-button {
    height: 40px;
    width: 40px;
    margin-left: 12px;
    --border-radius: 50px;
  }
}
</style>
