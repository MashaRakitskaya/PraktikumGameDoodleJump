export const convertDateToLocaleString = (createdAt: string | undefined) => {
  if (createdAt) return new Date(createdAt).toLocaleString();
};
