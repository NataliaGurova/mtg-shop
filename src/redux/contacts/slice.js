
import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, editContact, fetchContacts } from './operations';
import { toast } from 'react-hot-toast';
// import initialContacts from '../data/contacts.json'
// import { nanoid } from 'nanoid'

// const initialState = initialContacts;

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

    .addCase(addContact.pending, (state) => {
      state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
        toast("Contact added!");
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
          const index = state.items.findIndex(
          (contact) => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
        toast("Contact deleted!");
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      
      .addCase(editContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        // Знайдіть індекс контакту, який потрібно відредагувати
        const index = state.items.findIndex((contact) => contact.id === action.payload.id);
        // Замініть старий контакт на новий
        state.items[index] = action.payload;
      })
      .addCase(editContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});


export const contactsReducer = contactsSlice.reducer;


// export const selectContacts = (state) => state.contacts.items;
// export const selectIsLoading = (state) => state.contacts.isLoading;
// export const selectError = (state) => state.contacts.error;

// export const selectFilterName = (state) => state.filters.name;

// export const selectFilteredContacts = createSelector(
//    // Масив вхідних селекторів
//   [selectContacts, selectFilterName],
//   // Функція перетворювач
//   (contacts, filterName) => {
//     // Виконуємо обчислення та повертаємо результат
//     const compareName = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filterName.toLowerCase())
//     );
//     return compareName;
//   }
// )



// export const { selectContacts } = contactsSlice.selectors;
// export const { addContact, deleteContact } = contactsSlice.actions;

  
