import fetch from 'node-fetch';

export const fetchGetUserTheme = async (user) => {
  try {
    const response = await fetch(
      `http://localhost:3000/user-theme/${user.id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    if (!response.ok) {
      const message = `An error ${response}`;
      throw new Error(message);
    }
    const userTheme = await response.json();
    return userTheme;
  } catch (error) {
    console.log('Fetch error: ', error);
  }
};
