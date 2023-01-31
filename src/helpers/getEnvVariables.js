export const getEnvVaiables = () => {
  import.meta.env;

  return {
    ...import.meta.env,
  };
};
