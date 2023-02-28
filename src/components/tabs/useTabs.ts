// The code in this file is not necessary if you are using the tabs in a proper Ionic page structure.
// This was only added to put multiple tabs on a single page for this interactive demo.
import { ref, onMounted } from 'vue';

export function useTabs() {
    const tabBarRef = ref<any | null>(null);
    onMounted(() => {
        const tabBar = tabBarRef.value?.$el;
        const firstTab = tabBar.querySelector('ion-tab-button');
        firstTab.setAttribute('aria-selected', 'true');
        firstTab.classList.add('tab-selected');
        tabBar.querySelectorAll('ion-tab-button').forEach((tab:HTMLElement) => {
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
