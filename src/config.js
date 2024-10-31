const {config} =require('dotenv');
config();
module.exports={
    port: process.env.PORT,
    UserDB: process.env.UserDB,
    PasswordDB: process.env.Password,
    ServerDB: process.env.ServerDB,
    Database: process.env.Database,
    PortDB: process.env.PortDB
}