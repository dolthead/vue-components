import { ref, onMounted } from 'vue'; // delete this

export function useTabs() {
    const tabBarRef = ref<any | null>(null); // delete this (and the related ref on the ion-tab-bar in the template)
    // delete this onMounted method--it is only necessary when the tabs are used out of proper Ionic page structure
    onMounted(() => {
        const tabBar = tabBarRef.value?.$el;
        const firstTab = tabBar.querySelector('ion-tab-button');
        firstTab.setAttribute('aria-selected', 'true');
        firstTab.classList.add('tab-selected');
        tabBar.querySelectorAll('ion-tab-button').forEach(tab => {
            tab.classList.add('tab-has-label','tab-has-icon','tab-layout-icon-top','ion-activatable','ion-selectable','ion-focusable');
            tab.onclick = (ev: MouseEvent) => {
                const prevSelected = tabBar.querySelector('.tab-selected');
                prevSelected.setAttribute('aria-selected', 'false');
                prevSelected.classList.remove('tab-selected');
                const nextSelected = (ev.currentTarget as HTMLElement);
                nextSelected.setAttribute('aria-selected', 'true');
                nextSelected.classList.add('tab-selected');
            }
        });
    });
    return { tabBarRef };
};
