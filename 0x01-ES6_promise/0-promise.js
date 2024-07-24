export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Response received");
      } else {
        reject("Failed to get response");
      }
    }, 1000);
  });
}
