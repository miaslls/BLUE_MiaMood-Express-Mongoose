import ListEntry from './ListEntry.js';

export const createListEntryService = (list, text, starred, completed) => {
  return ListEntry.create({ list, text, starred, completed });
};
