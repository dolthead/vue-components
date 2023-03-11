<script lang="ts" setup>
import { IonCard, IonGrid, IonRow, IonCol, IonImg } from '@ionic/vue';
</script>

<template>
  <ion-grid>
    <ion-row>
      <ion-col size="6">
        <ion-card class="card">
          <ion-img
            src="https://images.unsplash.com/photo-1519248964876-9524a73205e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=841&q=80"></ion-img>
        </ion-card>
      </ion-col>
      <ion-col size="6">
        <ion-card class="card">
          <ion-img
            src="https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"></ion-img>
        </ion-card>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col size="6">
        <ion-card class="card">
          <ion-img
            src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"></ion-img>
        </ion-card>
      </ion-col>
      <ion-col size="6">
        <ion-card class="card">
          <ion-img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"></ion-img>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<style lang="scss" scoped>
ion-grid {
  background-color: var(--ion-color-dark-tint);
  border-radius: 8px;
  width: 232px;
  margin: 0 auto;
}
.card {
  border-radius: 8px !important;
  padding: 8px;
  margin: 8px;
  background-color: #ededed;
  height: 90px;

  ion-img {
    height: 100%;
    object-fit: cover;
  }

  ion-img::part(image) {
    border-radius: 8px;
  }
}
</style>
