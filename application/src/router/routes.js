import Home from "./views/Home.vue";

export default [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
  },
  {
    path: "/404",
    name: "404",
    component: () => import("./views/_404.vue"),
    props: true
  },
  // Redirect any unmatched routes to 404 page.
  {
    path: "/:pathMatch(.*)*",
    redirect: "404"
  }
];
