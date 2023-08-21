export const getEnvVariables = () => {
	const env = import.meta.env;

	return {
		...env,
	};
};
