import { useState, useEffect } from "react";

export const useAuthInit = () => {
  const [userId, setUserId] = useState(null);
  const [isAuthReady, setIsAuthReady] = useState(false);

  useEffect(() => {
    const appId = typeof __app_id !== "undefined" ? __app_id : "default-app-id";
    const firebaseConfig =
      typeof __firebase_config !== "undefined"
        ? JSON.parse(__firebase_config)
        : null;
    const initialAuthToken =
      typeof __initial_auth_token !== "undefined" ? __initial_auth_token : null;

    console.log(`App ID: ${appId}`);
    if (firebaseConfig) console.log("Firebase Config Loaded.");
    if (initialAuthToken) console.log("Initial Auth Token Present.");

    // Mocking sign-in/user ID assignment
    setUserId("mock-user-" + Math.random().toString(36).substring(2, 9));
    setIsAuthReady(true);
  }, []);

  return { userId, isAuthReady };
};