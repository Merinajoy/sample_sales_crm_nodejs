const Config = {
  local: {
    username: 'root',
    password: 'cheeyedan',
    database: 'trillium',
    host: '127.0.0.1',
    dialect: 'mysql',
    port: '3306',
  },
  // localdocker: {
  //   username: "trillium_app",
  //   password: "ZzSXujiZ0bkPLMnEZ8-3",
  //   database: "trillium",
  //   host: "host.docker.internal",
  //   dialect: "mysql",
  //   port: "3308",
  // },
  // development: {
  //   username: "trillium_app",
  //   password: "ZzSXujiZ0bkPLMnEZ8-3",
  //   database: "trillium",
  //   host: "172.16.19.56",
  //   dialect: "mysql",
  //   port: "3306",
  // },
};

// Determine the current environment based on the NODE_ENV environment variable
const environment = process.env.NODE_ENV || 'local';
// const environment = 'local';

export default Config[environment];
