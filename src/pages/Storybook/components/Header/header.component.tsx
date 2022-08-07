import {Component, For} from 'solid-js';

import {store, setTheme} from '@src/store';
const Header: Component = () => {
  const state = store;

  const themes = {
    Latte: 'latte',
    Frappe: 'frappe',
    Macchiato: 'macchiato',
    Mocha: 'mocha',
  };

  function changeTheme(theme: string) {
    setTheme(themes[theme as keyof typeof themes]);
    console.log('Theme', state.theme);
  }


  const style = 'rounded-[5px] p-2';
  const activeStyle = 'bg-pink/50';
  const inactiveStyle = 'bg-overlay0/50';

  return (
    <div class="flex w-full">
      <div class="flex gap-[10px] cursor-pointer p-1 text-text mx-auto">
        <For each={Object.keys(themes)}>
          {(theme) => <div onClick={() => changeTheme(theme)} class={`${(state.theme === theme.toLowerCase() ? activeStyle : inactiveStyle)} ${style}`}>{theme}</div>}
        </For>
      </div>
    </div>
  );
};

export default Header;
