const apiUrl = 'https://jsonplaceholder.typicode.com/';

const makeRequest = (url: string, options?: RequestInit) =>
  fetch(`${apiUrl}${url}`, {
    method: 'GET',
    ...options,
  });

export const api = async (url: string, options?: RequestInit) => {
  try {
    // Do the request
    let response = await makeRequest(url, options);

    return response.json();
  } catch (e) {
    // Place to handle global api errors
    throw e;
  }
};

export const getPosts = async () => {
  const posts = await api('posts');
  return posts;
};
