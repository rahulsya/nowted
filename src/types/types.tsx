export type Form = {};

export interface NoteData {
  id: string;
  title: string;
  date: string;
  content: string;
  folder: string;
}

export interface Note {
  id: string;
  title: string;
  date: string;
  content: string;
  folder: string;
}

export interface Folder {
  id: string;
  name: string;
}

export interface FolderData {
  id: string;
  name: string;
}
