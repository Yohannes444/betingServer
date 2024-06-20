export const config = () =>{
    return{
        port: parseInt(process.env.PORT,10) || 3000,
        jwtSecret: process.env.JWT_SECRET,
        mongoUri: process.env.MONGO_PORT
    }
}