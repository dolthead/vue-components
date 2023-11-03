<script lang="ts" setup>
import { IonGrid, IonRow, IonCol, IonLabel } from '@ionic/vue';
</script>

<template>
  <ion-grid>
    <ion-row class="widget">
      <ion-col size="12" class="ion-padding-horizontal">
        <ion-label class=""><span class="sub-title">Trending</span></ion-label>
        <p>All life on Earth requires food and water to survive. When searching for life beyond Earth, places that have
          liquid water are of great interest. </p>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<style lang="scss" scoped>
.widget {
  background: linear-gradient(rgb(0 0 0 / 40%) 100%,
      rgb(255 255 255 / 0%) 100%),
    url("https://images.pexels.com/photos/87009/earth-soil-creep-moon-lunar-surface-87009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-position: bottom;
  background-size: cover;
  border-radius: 16px !important;
  height: 192px;
  width: 100%;
  margin: 0px !important;
  padding: 0px !important;

  ion-label {
    margin: 0 !important;

    .title {
      font-size: 2.5rem;
      color: #ffffff;
      font-weight: 500;
      letter-spacing: 1.5px;
      display: block;
    }

    .sub-title {
      font-size: 0.8rem;
      color: #646464;
      display: block;
      font-weight: 600;
      letter-spacing: 0.5px;
      margin: 20px 0;
      text-transform: uppercase;
    }
  }

  p {
    letter-spacing: 1.2px;
    text-align: justify;
    line-height: 1.2em;
    color: #e1e1e1;
    font-weight: 800;
    font-size: 1.1em;
  }
}
</style>
