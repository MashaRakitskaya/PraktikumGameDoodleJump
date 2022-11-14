interface UserThemeProps {
  userId: number;
  theme: string;
}

export const fetchFindOrCreateUserTheme = ({
  userId,
  theme
}: UserThemeProps) => {
  fetch(`http://localhost:3000/user-theme/${userId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ theme })
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

export const fetchUpdateUserTheme = ({ userId, theme }: UserThemeProps) => {
  fetch(`http://localhost:3000/user-theme/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ theme })
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};
