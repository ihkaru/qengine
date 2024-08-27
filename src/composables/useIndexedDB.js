import { openDB } from 'idb';

export const useIndexedDB = () => {
  const dbPromise = openDB('localdb', 1, {
    upgrade(db) {
      db.createObjectStore('profiles', { keyPath: 'id' });
    },
  });

  const saveProfile = async (profile) => {
    const db = await dbPromise;
    await db.put('profiles', profile);
  };

  const getProfile = async (id) => {
    const db = await dbPromise;
    return await db.get('profiles', id);
  };

  return {
    saveProfile,
    getProfile,
  };
};
