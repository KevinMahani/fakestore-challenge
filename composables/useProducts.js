export const useProducts = async () => {
  const { data, error } = await useFetch('https://fakestoreapi.com/products');
  return { data, error };
};