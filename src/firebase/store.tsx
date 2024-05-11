import {
  addDoc,
  collection,
  CollectionReference,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";
import firebase_app from "./config";
import { Folder, FolderData, Note, NoteData } from "@/types/types";

const db = getFirestore(firebase_app);
export const newNote = async (data: NoteData) => {
  try {
    const { id, ...restData } = data;
    const docRef = await addDoc(collection(db, "notes"), {
      ...restData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    return {
      id: docRef.id,
    };
  } catch (error) {
    throw new Error();
  }
};

export const getNote = async (id: string) => {
  const docRef = doc(db, "notes", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data() as Note;
  } else {
    throw {
      message: "Note not found",
      status: 404,
    };
  }
};

export const updateNote = async (data: NoteData) => {
  const docRef = doc(db, "notes", data.id);
  await setDoc(docRef, {
    ...data,
    updatedAt: serverTimestamp(),
  });
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data() as Note;
  } else {
    throw {
      message: "Note not found",
      status: 404,
    };
  }
};

export const getRecentNotes = async () => {
  try {
    const noteRef = collection(db, "notes") as CollectionReference<Note>;
    const q = query(noteRef, orderBy("updatedAt", "desc"), limit(5));
    const querySnapshot = await getDocs(q);
    let data: Note[] = [];
    querySnapshot.forEach((doc) => {
      const docData = {
        ...doc.data(),
        id: doc.id,
      };
      data.push(docData);
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const newFolder = async () => {
  try {
    const docRef = await addDoc(collection(db, "folders"), {
      name: "Untitled Folder",
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    return {
      id: docRef.id,
      name: "Untitled Folder",
    };
  } catch (error) {
    throw new Error();
  }
};

export const setFolder = async (data: FolderData) => {
  const docRef = doc(db, "folders", data.id);
  await setDoc(docRef, {
    ...data,
    updatedAt: serverTimestamp(),
  });
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data() as Folder;
  } else {
    throw {
      message: "Folder not found",
      status: 404,
    };
  }
};

export const getNoteFolder = async () => {
  try {
    const folderRef = collection(db, "folders") as CollectionReference<Folder>;
    const q = query(folderRef, orderBy("updatedAt", "desc"));
    const querySnapshot = await getDocs(q);
    let data: Folder[] = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getNotesByFolder = async (folder: string) => {
  try {
    const noteRef = collection(db, "notes") as CollectionReference<Note>;
    const q = query(noteRef, where("folder", "==", folder));
    const querySnapshot = await getDocs(q);
    let data: Note[] = [];
    querySnapshot.forEach((doc) => {
      const docData = {
        ...doc.data(),
        id: doc.id,
      };
      data.push(docData);
    });
    return data;
  } catch (error) {}
};
