import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import ProductRouter from "./routes/product";
import ProductCategory from "./routes/category";
import authRouter from "./routes/user";
import cartRouter from "./routes/cart"


const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:4200", // Cung cấp nguồn (origin) của ứng dụng Angular
}));
app.use("/api", ProductRouter);
app.use("/api", ProductCategory);
app.use("/api", authRouter);
app.use("/api", cartRouter);


mongoose.connect(`mongodb://127.0.0.1:27017/web209`);

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});

export const viteNodeApp = app;
