<script setup>
import { ref } from 'vue';

const anim = ref('fade');

</script>

<template>
  <div>
    <nav
      style="
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        margin-bottom: 40px;
      "
    >
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>

    <div class="check">
      <label>
        <input type="radio" name="anim" value="fade" v-model="anim" /> Fade
      </label>
      <label>
        <input type="radio" name="anim" value="slide" v-model="anim" /> Slide
      </label>
      <label>
        <input type="radio" name="anim" value="slide-down" v-model="anim" /> Slide-down
      </label>
      <label>
        <input type="radio" name="anim" value="grow-in" v-model="anim" /> Grow in
      </label>
      <label>
        <input type="radio" name="anim" value="grow-out" v-model="anim" /> Grow out
      </label>
    </div>

    <router-view v-slot="{ Component }">
      <transition :name="anim" mode="out-in">
        <Component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

nav a {
  margin: 0 0.5rem;
  color: white;
}

nav a:hover,
nav a.router-link-exact-active {
  color: crimson;
}

.check{
  display: flex;
  align-items: center;
  justify-content: center;
}

.check label{
  margin: 0 0.5rem;
}

main {
  padding: 1rem;
  max-width: 768px;
  margin: 0 auto;
  will-change: transform, opacity;
}

h1 {
  margin-bottom: 1.5rem;
}

p {
  margin-bottom: 1rem;
}

img {
  width: 100%;
  max-width: 100%;
  margin-bottom: 1.5rem;
}

/* FADE START */

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}

/* FADE END */

/* SLIDE START */

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.slide-enter-active,
.slide-leave-active {
  transition: 0.3s ease-out;
}

/* SLIDE END */

/* SLIDE DOWN START */

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(300px);
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: opacity 0.3s ease-out;
}

/* SLIDE DOWN END */

/* GROW IN START */

.grow-in-enter-from,
.grow-in-leave-to {
  opacity: 0;
  transform: scale(0.3);
}

.grow-in-enter-active,
.grow-in-leave-active {
  transition: opacity 0.3s ease-out;
}

/* GROW IN END */

/* GROW OUT START */

.grow-out-enter-from,
.grow-out-leave-to {
  opacity: 0;
  transform: scale(1.5);
}

.grow-out-enter-active,
.grow-out-leave-active {
  transition: opacity 0.3s ease-in;
}

/* GROW OUT END */


</style>
