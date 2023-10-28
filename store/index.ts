export interface mainStateType {
  loading: boolean;
}

export const state = (): mainStateType => ({
  loading: false,
});

export const getters = {
  isLoading: (state: mainStateType) => state.loading,
};

export const mutations = {
  SET_LOADER(state: mainStateType, loader: boolean) {
    state.loading = loader;
  },
};

export const actions = {};
