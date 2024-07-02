import { createWebHistory, createRouter } from "vue-router";
import TsumHome from "@/views/TsumHome.vue";

const routes = [
  { path: "/", component: TsumHome},
  { path: "/index", redirect : "/"}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 
