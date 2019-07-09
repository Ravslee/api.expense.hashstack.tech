

const MONGODB_URL_DEV = "mongodb://localhost:27017/expense";


const env = process.env.NODE_ENV || "dev";
let port = 3000;


export const config: any = {
    env: env,
    port: port,
    debugBuild: env != "production",
   
    dev: {
        dbDocSize: 4,    // Databse document size in KB 4kb by default
        apiHost: process.env.apihost,
        mongoDbUrl: MONGODB_URL_DEV,
    },

  
};

config.get = () => {
    return config[config.env];
}
