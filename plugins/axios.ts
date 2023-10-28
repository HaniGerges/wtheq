import { Context } from "@nuxt/types";

export default ({ $axios, redirect, app, store }: Context) => {
  // request
  $axios.onRequest((req) => {
    $axios.setToken(store.state.user.token, "Bearer");
    $axios.setHeader("Session-Key", store.state.user.session_key);

    return req;
  });
  // response
  $axios.onResponse((response) => {
    return response;
  });
  // error
  $axios.onError((error) => {
    if (!error.response) {
      return;
    }
    const code = error.response.status;

    return Promise.reject(error.response.data.errors);
  });
};
