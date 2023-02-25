<script lang="ts" setup>
import { IonContent, IonPage, IonItem, IonLabel, IonCard, IonCardContent, IonAvatar, IonGrid, IonRow, IonCol, IonBadge } from '@ionic/vue';
</script>

<template>
  <ion-page>
    <ion-content class="ion-padding ion-text-center">
      <ion-grid class="ion-no-padding">
        <ion-row>
          <ion-col size="12">
            <ion-card class="card">
              <ion-card-content class="ion-padding-vertical ion-no-padding">
                <!-- place ion-item "active" class to view unreaded/latest messages -->
                <ion-item class="">
                  <ion-avatar slot="start" size="large">
                    <img alt="profile"
                      src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                  </ion-avatar>
                  <ion-label><span class="user-name">Milovan Thomas</span><span class="msg">Can we have a
                      call?</span></ion-label>
                  <div>
                    <span class="day-time">9:45 pm</span>
                    <span class="msg-count">
                      <ion-badge shape="circle" slot="end" color="primary">2</ion-badge>
                    </span>
                  </div>
                </ion-item>
                <ion-item class="active">
                  <ion-avatar slot="start" size="large">
                    <img alt="profile"
                      src="https://images.unsplash.com/photo-1616766098946-e4fabb7d6da0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                  </ion-avatar>
                  <ion-label><span class="user-name">Alina Vranjes</span><span class="msg">How can I help
                      you?</span></ion-label>
                  <div>
                    <span class="day-time">8:32 pm</span>
                    <span class="msg-count">
                      <ion-badge shape="circle" slot="end" color="primary">2</ion-badge>
                    </span>
                  </div>
                </ion-item>
                <ion-item class="">
                  <ion-avatar slot="start" size="large">
                    <img alt="profile"
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                  </ion-avatar>
                  <ion-label><span class="user-name">Vanessa</span><span class="msg typing">typing...</span></ion-label>
                  <div>
                    <span class="day-time">yesterday</span>
                    <span class="msg-count">
                      <ion-badge shape="circle" slot="end" color="primary">2</ion-badge>
                    </span>
                  </div>
                </ion-item>
                <ion-item class="">
                  <ion-avatar slot="start" size="large">
                    <img alt="profile"
                      src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                  </ion-avatar>
                  <ion-label><span class="user-name">Eduardo</span><span class="msg">Please have a look at attached
                      document.</span></ion-label>
                  <div>
                    <span class="day-time">Mon</span>
                    <span class="msg-count">
                      <ion-badge shape="circle" slot="end" color="primary">2</ion-badge>
                    </span>
                  </div>
                </ion-item>
                <ion-item class="">
                  <ion-avatar slot="start" size="large">
                    <img alt="profile" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                  </ion-avatar>
                  <ion-label><span class="user-name">Yagan</span><span class="msg">Can we connect?</span></ion-label>
                  <div>
                    <span class="day-time">Sun</span>
                    <span class="msg-count">
                      <ion-badge shape="circle" slot="end" color="primary">2</ion-badge>
                    </span>
                  </div>
                </ion-item>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<style lang="scss" scoped>
.card {
  --background: #ededed;
  border-radius: 16px !important;
  height: auto;
  width: 100%;
  margin: 0px !important;
  padding: 0px !important;

  ion-card-content {
    ion-item {
      padding: 0px 0;
      --background: linear-gradient(rgb(0 0 0 / 0%) 100%,
          rgb(255 255 255 / 0%) 100%);
      --border-color: #dbdbdb;

      &:last-child {
        --border-color: #ededed;
      }

      &:hover {
        background: #e1e1e1;
        cursor: pointer;
      }

      ion-avatar[size="large"] {
        width: 50px;
        height: 50px;
      }

      ion-label {
        display: grid;
      }

      .user-name {
        color: #2c2c2c;
        font-size: 1rem;
        font-weight: 500;
        letter-spacing: 0.5px;
      }

      span.day-time {
        display: flex;
        justify-content: end;
        font-size: 0.8rem;
        font-weight: 500;
        letter-spacing: 0.5px;
        color: #a3a3a3;
      }

      .msg {
        color: #a3a3a3;
        font-size: 0.9rem;
        font-weight: 500;
        letter-spacing: 0.5px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 5px 0 0;
      }

      .msg.typing {
        color: #3880ff;
      }

      .msg-count {
        opacity: 0;
        display: flex;
        justify-content: right;
        font-size: 0.8rem;
        margin: 5px 0 0;
      }
    }

    ion-item.active {
      .user-name {
        font-weight: 600;
      }

      span.day-time {
        color: #3880ff;
      }

      .msg {
        color: #404040;
      }

      .msg-count {
        opacity: 1;
      }

      ion-badge[shape="circle"] {
        height: 20px;
        width: 20px;
        align-items: center;
        justify-content: center;
        padding-right: 0.4em;
        padding-left: 0.4em;
        border-bottom-right-radius: 1.1em;
        border-top-right-radius: 1.1em;
        border-bottom-left-radius: 1.1em;
        border-top-left-radius: 1.1em;
        text-align: center;
        padding-top: 0.3em;
        line-height: 1;
        min-height: 1em;
        font-size: 0.75rem;
        min-width: 0.9em;
        padding-bottom: 0.4em;
        display: block;
      }
    }
  }
}</style>
