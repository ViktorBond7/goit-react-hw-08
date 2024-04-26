import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./contactsSlice";
import filterSlice from "./filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactSlice,
    filters: filterSlice,
  },
});
