import express from "express"
import { getConversationsForSidebar, getMessages, getUsersForsidebar, sendMessage } from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/upload.middleware.js";

const router = express.Router();
router.use(protectRoute)
router.get("/users",getUsersForsidebar)
router.get("/conversations",getConversationsForSidebar)
router.get("/:id",getMessages)
router.post("/send/:id",upload.single("media"),sendMessage)
// "media" key should match the frontend value 

export default router;