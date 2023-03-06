export const readableString = (str: string, factor: string) => {
  const arr = str.split(factor);
  const newArr = arr?.map((item: string | number) => {
    const num = Number(item),
      str = item.toString();
    return !isNaN(num) ? item : str.charAt(0).toUpperCase() + str.slice(1);
  });
  return newArr.join(" ");
};
