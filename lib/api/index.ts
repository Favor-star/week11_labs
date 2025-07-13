const handleApiError = (error: unknown): never => {
  if (error instanceof Error) {
    throw new Error(error.message);
  } else {
    throw new Error("Unkown error occured at fetching data.");
  }
};

export const fetchPosts = async () => {
  try {
    const res = await fetch(process.env.API_LINK!);
    if (!res.ok) {
      throw new Error(`Failed to fetch users: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    handleApiError(error);
  }
};
