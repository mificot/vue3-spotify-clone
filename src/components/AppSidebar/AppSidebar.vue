<script lang="ts" setup>
import { UISearchIcon, UIHomeIcon, UiLibraryIcon, UiLikedIcon } from "@/icons";
import type { AppSidebarNavigationItem } from "@/components/AppSidebar/AppSidebar.types";

const navigationElements: AppSidebarNavigationItem[] = [
  {
    icon: UIHomeIcon,
    text: "Home",
    to: "#",
  },
  {
    icon: UISearchIcon,
    text: "Search",
    to: "#",
  },
  {
    icon: UiLibraryIcon,
    text: "Your Library",
    to: "#",
  },
  {
    icon: UiLikedIcon,
    text: "Liked songs",
    to: "#",
  },
];
</script>

<template>
  <nav class="app-nav">
    <div class="app-nav-logotype">
      <img class="app-nav-logotype-image" src="@/assets/SpotifyLogotype.png" />
    </div>
    <ul class="app-nav-list">
      <li
        v-for="(item, index) in navigationElements"
        :key="index"
        class="app-nav-list-item"
      >
        <router-link class="app-nav-list-link" :to="item.to">
          <div class="app-nav-list-link-icon">
            <component :is="item.icon" />
          </div>
          <div class="app-nav-list-link-text">Home</div>
        </router-link>
      </li>
    </ul>
    <div class="app-nav-bottom">
      <slot name="bottom"></slot>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@import "@/styles/variables.scss";

$padding-navbar: 2.4rem;
$width-navbar: 100px;

.app-nav {
  height: 100%;
  background-color: $color-black;
  width: $width-navbar;
  padding: $padding-navbar;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.app-nav-logotype {
  width: 100%;
  margin-bottom: 7rem;
}

.app-nav-logotype-image {
  width: 100%;
  height: auto;
}

.app-nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.app-nav-list-item {
  font-size: 2.2rem;
  width: calc($width-navbar - $padding-navbar * 2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3.6rem;
}

.app-nav-list-link {
  padding: 1.5rem;
  border-radius: 100px;
  color: $color-white;
  border: 1px solid transparent;
  transition-property: background-color, color, border-color;
  transition-duration: $transition-duration;
}

.app-nav-list-link:hover {
  border-color: $color-green;
  color: $color-green;
  background-color: $color-green-opacity-15;
}

.app-nav-list-link-icon {
  display: flex;
  align-items: center;
}

.app-nav-list-link-text {
  display: none;
}
</style>
