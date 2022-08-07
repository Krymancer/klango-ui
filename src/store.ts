import {createStore} from 'solid-js/store';

const [store, setStore] = createStore({
  theme: 'latte',
});

const setTheme = (theme: string) => setStore('theme', theme);

export {store, setTheme};
