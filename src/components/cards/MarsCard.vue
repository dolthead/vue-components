<script lang="ts" setup>
import { IonIcon, IonText, IonButton } from '@ionic/vue';
import { arrowForwardOutline } from 'ionicons/icons';
</script>

<template>
  <div class="bg">
    <div class="card">
      <div class="display">
        <img src="https://www.freepnglogos.com/uploads/mars-png/mars-discover-solar-system-part-kila-blog-16.png"
          alt="Planet Image" />
      </div>
      <div class="desc">
        <ion-text class="planet">Mars<span>Solar System</span></ion-text>
        <ion-button color="danger" expand="block" fill="clear" size="default"
          class="ion-no-margin ion-no-padding ion-padding-end ion-float-left ion-text-start" mode="ios">
          <ion-icon slot="end" :icon="arrowForwardOutline"></ion-icon>
          Know more
        </ion-button>
      </div>
      <div class="count">4</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  display: flex;
  justify-content: center;
  padding: 110px 16px 40px;
  height: auto;
  background-image: linear-gradient(to top,
      #1e3c72 0%,
      #1e3c72 1%,
      #2a5298 100%);
}

.card {
  border-radius: 16px;
  background: #ffffff;
  letter-spacing: 0.8px;
  margin: 0 auto;
  height: 250px;
  width: 70%;
  min-width: 175px;
  max-width: 250px;
  position: relative;

  .display {
    position: relative;

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 0;
      margin: 0;
      width: 75%;
      box-shadow: rgb(0 0 0 / 42%) 0px 20px 50px -16px;
      border-radius: 50%;
    }
  }

  .desc {
    position: absolute;
    bottom: 0px;
    padding: 0px 30px 5px;

    .planet {
      font-size: 2.2rem;
      font-weight: bolder;
      color: #454c69;
      margin-bottom: 16px;

      span {
        font-size: 1.2rem;
        font-weight: 400;
        display: block;
        margin-bottom: 16px;
      }
    }
  }

  .count {
    position: absolute;
    font-size: 11rem;
    font-weight: bolder;
    right: 16px;
    bottom: 0;
    color: rgba(69, 76, 105, 0.1);
    line-height: 1.3;
  }

  .title {
    font-size: 1.2rem;
    font-weight: 600;
    color: #191919;
    text-align: left;
    letter-spacing: 1px;
  }
}
</style>
