<template>
  <!--
    By binding the `key` to `$route.fullPath`, we are forcing the "replacement" of the RouterView component, even when
    routes are using the same component. With this approach it will treat them as distinct and create the component again.
  -->
  <router-view :key="$route.fullPath" />
</template>

<!-- This should generally be the only global CSS in the app. -->
<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}
</style>
