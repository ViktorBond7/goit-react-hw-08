import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";
// import { selectNameFilter } from "../filters/selectors";
// import { selectNameFilter } from "../filters/slice";

export const selectContacts = (state) => state.contacts.items;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  }
);

export const selectLoading = (state) => state.contacts.loading;
