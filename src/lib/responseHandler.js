const responseIsParseable = response => (
  !response.redirect && response.status !== 204
);

export const processResponse = (response) => {
  if (response.ok) {
    if (responseIsParseable(response)) {
      return response.json();
    }

    return Promise.resolve();
  }

  const error = new Error(response.statusText);
  return Promise.reject(error);
};
