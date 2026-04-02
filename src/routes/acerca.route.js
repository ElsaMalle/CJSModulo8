import { Router } from "express";
import acercade from "../../acercade.json" with { type: "json" };


const router = Router()

router.get('/acercade', (req, res) => {
    res.status(200).json(acercade)
    console.log(acercade)
})
export default router