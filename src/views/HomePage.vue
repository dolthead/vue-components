<template>
  <ion-page>
    <!-- <ion-header :translucent="true">
      <ion-toolbar color="primary">
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header> -->
    
    <ion-content :fullscreen="true">
      <!-- <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header> -->
    
      <SbSegments></SbSegments>

    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  import SbSegments from '../components/SbSegments.vue';
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
