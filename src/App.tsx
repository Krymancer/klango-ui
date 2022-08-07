import {Component} from 'solid-js';

import {store} from '@src/store';

import Storybook from '@pages/Storybook';

const App: Component = () => {
  const state = store;

  return (
    <div class={state.theme}>
      <div class="bg-gradient-to-b from-base to-crust h-screen w-full m-auto">
        <Storybook/>
      </div>
    </div>
  );
};

export default App;
