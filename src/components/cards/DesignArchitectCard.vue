<script lang="ts" setup>
import { IonText, IonItem, IonAvatar, IonLabel } from '@ionic/vue';
</script>

<template>
  <div class="card">
    <img src="https://i.ibb.co/0Kk5gfS/PNG-image-3.png" />
    <ion-text class="status">
      1<span>/5</span>
    </ion-text>
  </div>
  <div class="card-footer">
    <ion-item lines="none" slot="header">
      <ion-avatar slot="end">
        <img
          src="https://images.pexels.com/photos/2379003/pexels-photo-2379003.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
      </ion-avatar>
      <ion-label><span class="user-name">Marius S.</span><span class="sub-title">Design Architect</span></ion-label>
    </ion-item>
  </div>
</template>

<style lang="scss" scoped>
.card {
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  background: #4381ff;
  height: 300px;
  width: 100%;
  margin: 0 !important;
  margin-top: 30px !important;
  padding: 16px 0 !important;
  position: relative;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  img {
    width: auto;
    height: 332px;
    object-fit: fill;
    top: -32px;
    position: absolute;
    right: 0;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }

  ion-text.status {
    padding: 16px;
    font-size: 1rem;
    color: #fff;
    font-weight: 600;
    letter-spacing: 1px;

    span {
      font-size: 0.7rem;
      color: #c1c1c1;
      font-weight: 400;
    }
  }
}

.card-footer {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  padding: 8px 16px;
  background: #2e64ff;

  ion-item {
    background: transparent !important;
    --background: transparent !important;
    --inner-padding-start: 0px !important;
    --inner-padding-end: 0px !important;
    --padding-start: 0px !important;
    --padding-end: 0px !important;
    --margin-start: 0px !important;
    --margin-end: 0px !important;
    padding: 0 !important;
    margin: 0 !important;

    :hover {
      background: transparent !important;
    }

    ion-label {
      margin: 0px !important;
    }

    ion-avatar {
      height: 45px;
      width: 45px;
      max-width: 45px;
      max-height: 45px;
      object-fit: none !important;
      overflow: hidden !important;
      border: 3px solid #ffffff4f;
      margin-right: 0;
    }

    .user-name {
      color: #fff;
      font-size: 1rem;
      font-weight: 500;
      letter-spacing: 1px;
    }

    span.sub-title {
      display: block;
      color: #cdcdcd;
      font-size: 0.8rem;
      font-weight: 500;
      letter-spacing: 1px;
      margin: 4px 0 0;
    }
  }
}
</style>
