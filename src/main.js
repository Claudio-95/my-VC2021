import { createApp } from 'vue';
import App from './App.vue';
createApp(App).mount('#app');
import { createPopper } from '@popperjs/core';

const popcorn = document.querySelector('#popcorn');
const tooltip = document.querySelector('#tooltip');
createPopper(popcorn, tooltip, {
    placement: 'top',
});
