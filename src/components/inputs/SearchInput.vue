<script lang="ts" setup>
import { IonLabel, IonGrid, IonRow, IonCol, IonSearchbar, IonAvatar } from '@ionic/vue';
import { ref } from 'vue';

const searchText = ref('');
const profiles = [
    {
        name: 'Luis',
        img: 'https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
        name: 'Sofía',
        img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        name: 'Marta',
        img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
    },
    {
        name: 'Cristian',
        img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
    {
        name: 'Ricardo',
        img: 'https://images.unsplash.com/photo-1612979572692-f8a4cb3dce2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODB8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
        name: 'Roziana',
        img: 'https://images.unsplash.com/photo-1600481176431-47ad2ab2745d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTV8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
        name: 'Lucas',
        img: 'https://images.unsplash.com/photo-1610186594416-2c7c0131e35d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
        name: 'Rocco',
        img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
];
const result = ref(profiles);
const filterList = () => {
    result.value = searchText.value.trim() == ''
        ? structuredClone(profiles)
        : profiles.filter(profile => profile.name.toLowerCase().includes(searchText.value.toLowerCase()));
};
</script>

<template>
    <ion-grid class="widget">
        <ion-row class="ion-padding-top">
            <ion-col size="12">
                <ion-searchbar v-model="searchText" class="ion-no-padding" show-clear-button="focus" placeholder="Search"
                    mode="ios" @ion-change="filterList" :debounce="0"></ion-searchbar>
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col size="3" class="ion-text-center ion-margin-bottom person" v-for="profile in result">
                <div class="contact-person">
                    <ion-avatar>
                        <img alt="Name" :src="profile.img" />
                    </ion-avatar>
                </div>
                <ion-label class="name">{{ profile.name }}</ion-label>
            </ion-col>
            <ion-col size="12" class="ion-padding-bottom ion-text-center no-result-found" v-show="result.length === 0">
                <img
                    src="https://www.getillustrations.com/packs/flat-vector-illustrations-for-websites/scenes/_1x/files%20and%20folders,%20search%20_%20folder,%20file,%20document,%20find,%20scan,%20delete_sm.png" />
                <div class="title ion-padding-vertcal">No Result Found</div>
            </ion-col>
        </ion-row>
    </ion-grid>
</template>

<style lang="scss" scoped>
.widget {
    background-color: #fff !important;
    border-radius: 16px !important;
    height: auto;
    width: 100%;
    padding: 0px 16px;

    ion-title {
        font-size: 1.2rem;
        font-weight: 600;
        letter-spacing: 1px;
        color: #3e3e3e;
        padding: 0 0px;
    }

    ion-avatar {
        width: 45px;
        height: 45px;
        margin-bottom: 5px;
    }

    .contact-person {
        display: flex;
        justify-content: center;
        text-align: center;
    }

    .name {
        font-size: 0.9rem;
        font-weight: 600;
        color: #666666 !important;
        letter-spacing: 0.5px;
    }

    .person:hover {
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        border-radius: 8px;
        cursor: pointer;
    }

    .no-result-found {
        img {
            width: 145px;
            height: 145px;
        }

        .title {
            font-size: 1rem;
            color: #666666;
            font-weight: 600;
            letter-spacing: 0.5px;
        }
    }
}
</style>
