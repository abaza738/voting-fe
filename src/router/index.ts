import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProfileView from "../views/ProfileView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      meta: {
        title: "Home",
      },
      component: HomeView,
    },
    {
      path: "/profile",
      name: "profile",
      meta: {
        title: "Profile",
      },
      component: ProfileView,
    },
    {
      path: "/auth",
      name: "auth",
      component: () => import("../views/auth/AuthWrapper.vue"),
      children: [
        {
          path: "/login",
          name: "login",
          meta: {
            title: "Login",
          },
          component: () => import("../views/auth/LoginView.vue"),
        },
        {
          path: "/register",
          name: "register",
          meta: {
            title: "Register",
          },
          component: () => import("../views/auth/RegisterView.vue"),
        },
        {
          path: '/**',
          redirect: 'login',
        },
        {
          path: '',
          redirect: 'login',
        },
      ],
    },
    {
      path: "/vote/:id",
      name: "vote-session",
      meta: {
        title: "Vote",
      },
      component: () => import("../views/VoteView.vue"),
    },
    {
      path: "/list",
      name: "list",
      meta: {
        title: "Session List",
      },
      component: () => import("../views/ListView.vue"),
    },
    {
      path: '/**',
      redirect: { name: 'home' },
    },
    {
      path: '',
      redirect: { name: 'home' },
    },
  ],
});

export default router;
