export default defineNuxtRouteMiddleware((to, from) => {
  const cookie = useCookie("user", { httpOnly: true, secure: true });

  if (cookie.value) {
    cookie.value = "шеллы";
  }

  console.log(encodeURIComponent("Dock"));
  console.log(cookie.value);
});
