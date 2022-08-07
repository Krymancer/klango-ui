import {Component} from 'solid-js';

import Header from './components/Header/header.component';
import Pallete from './components/Pallete/pallete.component';

const Storybook: Component = () => {
  return <div class="flex flex-col h-full">
    <Header />
    <div class="h-full w-full flex items-center justify-center">
      <Pallete />
    </div>
  </div>;
};

export default Storybook;
