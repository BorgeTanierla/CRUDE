import postgres from "postgres";
import dotenv from "dotenv";

dotenv.config();

export default postgres(process.env.DATABASE_URL);
