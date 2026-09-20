import Dexie, { Table } from "dexie";

export interface LocalNote {
  id: number;
  title: string;
  content: string;
  updatedAt: string;
  syncedAt?: string;
}

class SyncNoteDB extends Dexie {
  notes!: Table<LocalNote, number>;

  constructor() {
    super("SyncNoteDB");
    this.version(1).stores({
      notes: "id,updatedAt",
    });
  }
}

export const db = new SyncNoteDB();
