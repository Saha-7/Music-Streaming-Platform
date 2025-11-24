import express from "express"
import { getAllAlbum } from "./controller.js"

const router = express.Router()


router.get("/album/all", getAllAlbum)

export default router