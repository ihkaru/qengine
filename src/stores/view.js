import { defineStore } from "pinia";

export const useViewStore = defineStore("view", {
  state: () => ({
    view: "surveys",
    title: "Daftar Survey",
    selectedSurvey: null,
    selectedVillage: null,
    selectedRt: null,
    selectedAssignment: null,
    qustionerLeftDrawerOpen: false,
  }),

  getters: {
    get(state) {
      return state.view;
    },
    getTitle(state) {
      return state.view;
    },
  },

  actions: {
    set(view) {
      this.view = view;
    },
    setTitle(title) {
      this.title = title;
    },
    selectSurvey(survey) {
      this.selectedSurvey = survey;
      this.view = "villages";
      this.title = survey.name;
    },
    selectVillage(village) {
      this.selectedVillage = village;
      this.view = "rts";
      this.title = village.name;
    },
    selectRt(rt) {
      this.selectedRt = rt;
      this.view = "residents";
      this.title = rt.name;
    },
    selectAssignment(assignment) {
      this.selectedAssignment = assignment;
      this.view = "kuesioner";
      this.title = assignment.name;
    },
    goBack() {
      if (this.view === "residents") {
        this.view = "rts";
        this.title = this.selectedVillage.name;
        this.selectedRt = null;
      } else if (this.view === "rts") {
        this.view = "villages";
        this.title = this.selectedSurvey.name;
        this.selectedVillage = null;
      } else if (this.view === "villages") {
        this.view = "surveys";
        this.title = "Daftar Survey";
        this.selectedSurvey = null;
      } else if (this.view === "kuesioner") {
        this.view = "residents";
        this.title = this.selectedRt.name;
        this.selectedAssignment = null;
      }
    },
    toggleLeftDrawer() {
      this.qustionerLeftDrawerOpen = !this.qustionerLeftDrawerOpen;
    },
  },
});
