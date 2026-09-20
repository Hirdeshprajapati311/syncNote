export const isRecent = (updateAt: string) => {
  const date = new Date(updateAt);
  const now = new Date();

  const diff = now.getTime() - date.getTime();
  const twoDays = 2 * 24 * 60 * 60 * 1000;
  return diff <= twoDays;
};
