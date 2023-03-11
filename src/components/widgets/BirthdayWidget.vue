<script lang="ts" setup>
import { IonGrid, IonRow, IonCol, IonLabel, IonItem, IonAvatar } from '@ionic/vue';
</script>

<template>
   <ion-grid class="ion-no-padding">
      <ion-row>
         <ion-col size="12">
            <div class="widget">
               <ion-item lines="none" class="ion-padding">
                  <ion-avatar slot="start">
                     <ul class="avatars ion-padding-top">
                        <li class="avatars__item">
                           <img src="https://images.unsplash.com/photo-1659998846813-98c469143ab1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGZhY2V8ZW58MHwyfDJ8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="avatars__img">
                        </li>
                        <li class="avatars__item">
                           <img src="https://images.unsplash.com/photo-1665038886524-5648bb9298c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfDJ8Mnx8&auto=format&fit=crop&w=500&q=60" class="avatars__img">
                        </li>
                        <li class="avatars__item">
                           <span class="avatars__others">+8</span>
                        </li>
                     </ul>
                  </ion-avatar>
                  <ion-label><span class="title">Birthday</span><span class="sub-title">Best wishes</span></ion-label>
               </ion-item>
            </div>
         </ion-col>
      </ion-row>
   </ion-grid>
</template>

<style lang="scss" scoped>

.widget {
    background: #212121;
    border-radius: 16px !important;
    height: auto;
    width: 100%;
    margin: 0px !important;
    padding: 0px !important;

    ion-item {
      --background: #fbfbfb !important;
      --border-radius: 16px;
      padding: 0;
      ion-avatar {
        padding: 0px 0;
        margin: 0 8px;
        background: transparent;
        width: auto;
        height: 50px;
        --border-radius: 0px !important;
      }
      ion-label {
        .title {
          font-size: 1.2rem;
          color: #424242;
          font-weight: 600;
          letter-spacing: 1px;
        }
        .sub-title {
          font-size: 0.9rem;
          color: #afafaf;
          display: block;
          font-weight: 600;
          letter-spacing: 1px;
          margin: 2px 0;
        }
      }

      ul.avatars {
        display: flex;
        list-style-type: none;
        margin: 0px 0;
        padding: 0;
        float: right;
        z-index: 1;
      }
      li.avatars__item {
        height: 50px;
        margin: 0px 0px 0px -12px;
        padding: 0px 0px 0px 0px;
        position: relative;
      }
      img.avatars__img,
      span.avatars__initials,
      span.avatars__others {
        background-color: #e1e1e1;
        border: 3px solid #ffffff;
        border-radius: 50%;
        color: #a1a1a1;
        font-size: 16px;
        letter-spacing: 1.2px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        width: 50px;
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
        object-fit: cover;
        object-position: center;
      }
      span.avatars__others {
        background-color: #303030;
        color: #ebebeb;
      }
   }
}
</style>
