import express from "express";
import "./database/database";
import cors from "cors";
import userRoutes from "./API/routes/userRoutes";
import customerRoutes from "./API/routes/customerRoutes";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use("/user", userRoutes)
app.use("/customer", customerRoutes)



app.listen(port, ()=>{
    console.log(`listen on ${port}`);
})