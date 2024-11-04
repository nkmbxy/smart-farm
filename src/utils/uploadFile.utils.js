const { initializeApp } = require("firebase/app");
const {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} = require("firebase/storage");
const config = require("../configs/firebase.config");
const { giveCurrentDateTime } = require("./time.utils");

initializeApp(config.firebaseConfig);

const storage = getStorage();

async function uploadFileFirebase(file) {
  try {
    const dateTime = giveCurrentDateTime();
    const metadata = {
      contentType: "image/jpeg",
    };
    const storageRef = ref(
      storage,
      `files/${file.originalname + " " + dateTime}`
    );
    const snapshot = await uploadBytesResumable(
      storageRef,
      file.buffer,
      metadata
    );
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    console.error("Error creating user:", error);
  }
}

module.exports = {
  uploadFileFirebase,
};
