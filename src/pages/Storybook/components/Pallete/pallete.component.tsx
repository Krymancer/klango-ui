import {Component} from 'solid-js';

const Pallete: Component = () => {
  return (
    <div id="card" class="from-mantle to-crust outline-pink">
      <h1 class="from-pink to-mauve">Catppuccin</h1>
      <p class="text-subtext0">Soothing pastel pallete</p>
      <div id="palette">
        <div class="bg-rosewater"></div>
        <div class="bg-flamingo"></div>
        <div class="bg-pink"></div>
        <div class="bg-mauve"></div>
        <div class="bg-red"></div>
        <div class="bg-maroon"></div>
        <div class="bg-peach"></div>
        <div class="bg-yellow"></div>
        <div class="bg-green"></div>
        <div class="bg-teal"></div>
        <div class="bg-sky"></div>
        <div class="bg-sapphire"></div>
        <div class="bg-blue"></div>
        <div class="bg-lavender"></div>
      </div>
    </div>
  );
};

export default Pallete;
