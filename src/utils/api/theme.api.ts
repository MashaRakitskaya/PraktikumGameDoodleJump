import { ENDPOINTS } from '../../constans/constans';

interface UserThemeProps {
  userId: number;
  theme: string;
}

export const fetchFindOrCreateUserTheme = ({
  userId,
  theme
}: UserThemeProps) => {
  fetch(`${ENDPOINTS.LOCALHOST}${ENDPOINTS.USERTHEME.PATH}/${userId}`, {
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
  fetch(`${ENDPOINTS.LOCALHOST}${ENDPOINTS.USERTHEME.PATH}/${userId}`, {
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
