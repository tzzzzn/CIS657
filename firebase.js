import { getDatabase, push, ref, set, get } from "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD5Ez_i_0iuf2ye40J6UypmUoYJ8GePVYQ",
    authDomain: "gvsuclubs.firebaseapp.com",
    databaseURL:"https://gvsuclubs-default-rtdb.firebaseio.com",
    projectId: "gvsuclubs",
    storageBucket: "gvsuclubs.appspot.com",
    messagingSenderId: "959435976492",
    appId: "1:959435976492:web:b76c473bae79e3f06b0689",
    measurementId: "G-21F1ERCKC3"
};


// Initialize the Firebase app only once
export function initdb(){
    initializeApp(firebaseConfig);
}

export function newUser(data) {
  const db = getDatabase();
  const reference = ref(db, "user/");
  const newRef = push(reference);
  set(newRef, data).then(() => {
    console.log("Data written successfully!");
  }).catch((error) => {
    console.log("Error writing data:", error);
  });
};

export function newClub(data) {
    const db = getDatabase();
    const reference = ref(db, "club/");
    const newRef = push(reference);
    set(newRef, data).then(() => {
      console.log("Data written successfully!");
    }).catch((error) => {
      console.log("Error writing data:", error);
    });
};

export function newJoiners(data) {
  // console.log(data);
  const db = getDatabase();
  const reference = ref(db, "join/");
  const newRef = push(reference);
  set(newRef, data).then(() => {
    console.log("Data written successfully!");
  }).catch((error) => {
    console.log("Error writing data:", error);
  });
};

export async function readJoinersData(callback) {
  try {
    // Get the database instance
    const db = getDatabase();
    const reference = ref(db, "join/");

    // Read the data from the database asynchronously
    const snapshot =await get(reference);
    const data = snapshot.val();
    // console.log("Received data:", data);
    callback(data);
    // Do something with the retrieved data
  } catch (error) {
    console.error("Error reading data:", error);
  }
};

export async function readData(callback) {
    try {
      // Get the database instance
      const db = getDatabase();
      const reference = ref(db, "user/");
  
      // Read the data from the database asynchronously
      const snapshot = await get(reference);
      const data = snapshot.val();
      // console.log("Received data:", data);
      callback(data);
      // Do something with the retrieved data
    } catch (error) {
      console.error("Error reading data:", error);
    }
};

export async function readClubData(callback) {
    try {
      // Get the database instance
      const db = getDatabase();
      const reference = ref(db, "club/");

      // Read the data from the database asynchronously
      const snapshot = await get(reference);
      const data = snapshot.val();
      // console.log("Received data:", data);
      callback(data);
      // Do something with the retrieved data
    } catch (error) {
      console.error("Error reading data:", error);
    }
};



