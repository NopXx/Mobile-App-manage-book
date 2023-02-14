const API = "https://cfd6-223-24-171-158.ap.ngrok.io/api";

export const getBooks = async () => {
  const res = await fetch(`${API}/books`);
  return await res.json();
};

export const getBookSearchAll = async (value) => {
  const res = await fetch(`${API}/books/search?value=${value}`);
  return await res.json();
};

export const getBookSearch = async (table, value) => {
  const res = await fetch(`${API}/book?table=${table}&value=${value}`);
  return await res.json();
};



