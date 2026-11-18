const ENV_KEYS = ["BETTER_AUTH_URL", "ORIGIN"] as const;

type KEYS = (typeof ENV_KEYS)[number];

const validateEnv = (): Record<KEYS, string> => {
  const env = {} as Record<KEYS, string>;

  for (const key of ENV_KEYS) {
    const value = process.env[key];

    if (value === undefined) {
      throw new Error(`Environment ${key} is not set.`);
    }

    env[key] = value;
  }

  return env;
};

export const env = validateEnv();
