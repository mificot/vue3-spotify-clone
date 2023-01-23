import type { Component } from "vue";
import type { RouteLocationRaw } from "vue-router";

export interface AppSidebarNavigationItem {
  icon: Component;
  to: RouteLocationRaw;
  text: string;
}
