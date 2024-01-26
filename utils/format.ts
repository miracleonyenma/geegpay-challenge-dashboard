const formatCurrency = (value: number, options?: Intl.NumberFormatOptions) => {
  return new Intl.NumberFormat(
    "en-US",
    options || {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    },
  ).format(value);
};

const formatDate = (date: string, options?: Intl.DateTimeFormatOptions) => {
  return new Intl.DateTimeFormat(
    "en-US",
    options || {
      dateStyle: "long",
    },
  ).format(new Date(date));
};

export { formatCurrency, formatDate };
