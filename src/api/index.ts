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

export const getUser = async (id: string) => {
  const user = await api(`users/${id}`);
  return user;
};

export const getPost = async (id: string) => {
  const post = await api(`posts/${id}`);
  return post;
};

export const getCommentsOfPost = async (id: string) => {
  const comments = await api(`posts/${id}/comments`);
  return comments;
};
