import { useRouter as useVueRouter, useRoute as useVueRoute } from "vue-router";

export const useRouter = () => {
  const router = useVueRouter();
  const route = useVueRoute();

  const navigateTo = (path: string, params = {}) => {
    router.push({ path, query: params });
  };

  return {
    router,
    route,
    navigateTo,
  };
};
