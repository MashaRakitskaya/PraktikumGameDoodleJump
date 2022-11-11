import fetch from 'node-fetch';

export const fetchGetUserData = async (cookies) => {
  try {
    const response = await fetch(`https://ya-praktikum.tech/api/v2/auth/user`, {
      method: 'GET',
      headers: {
        Cookie: `authCookie=${cookies.authCookie}; uuid=${cookies.uuid}`
      }
    });
    if (!response.ok) {
      const message = `An error ${response}`;
      throw new Error(message);
    }
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.log('Fetch error: ', error);
  }
};
