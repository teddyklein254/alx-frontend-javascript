// 3-all.js
import { uploadPhoto, createUser } from './utils';

const handleProfileSignup = async () => {
  try {
    const photoResponse = await uploadPhoto();
    const userResponse = await createUser();

    // Logging the desired information
    console.log(photoResponse.body, userResponse.firstName, userResponse.lastName);
  } catch (error) {
    // Handle any errors
    console.log("Signup system offline");
  }
};

export default handleProfileSignup;

