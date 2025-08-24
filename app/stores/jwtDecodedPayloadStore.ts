import { defineStore } from "pinia";

export const useJwtDecodedPayloadStore = defineStore("JwtDecodedPayload", {
  state: (): { data: JwtDecodedPayload | null } => ({
    data: null,
  }),
  actions: {
    setData(data: JwtDecodedPayload | null) {
      this.data = data;
    },
    clearData() {
      this.data = null;
    },
  },
});
