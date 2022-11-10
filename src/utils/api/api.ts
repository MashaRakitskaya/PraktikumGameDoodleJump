interface UserThemeProps {
  user: any;
  isDarkTheme: boolean;
}

export const findOrCreateUserTheme = ({
  user,
  isDarkTheme
}: UserThemeProps) => {
  fetch(`http://localhost:3000/user-theme/${user.id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ theme: isDarkTheme ? 'dark' : 'light' })
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((userTheme) => {
      console.log('Success:', userTheme);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

export const updateUserTheme = ({ user, isDarkTheme }: UserThemeProps) => {
  fetch(`http://localhost:3000/user-theme/${user.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ theme: isDarkTheme ? 'dark' : 'light' })
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((userTheme) => {
      console.log('Success:', userTheme);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};
