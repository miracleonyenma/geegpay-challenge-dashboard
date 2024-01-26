const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(value);
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
