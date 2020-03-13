const { env } = process;

const ENV = env.NODE_ENV || 'development';
const API_PORT = env.API_PORT || 8080;

const CONFIG: {ENV: String, API_PORT: string | number} = {
  ENV,
  API_PORT,
};

export default CONFIG;
