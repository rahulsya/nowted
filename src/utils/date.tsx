export const FormatDate = (date: Date, option: boolean = true) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  if (option == false) {
    return new Date(date).toLocaleDateString("en-GB");
  }
  return new Date(date).toLocaleDateString("en-ID", options as any);
};

export const dateNow = () => {
  const date = new Date();

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based, so add 1
  const day = date.getDate().toString().padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};
