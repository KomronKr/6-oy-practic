import { Router } from "express";
import { postGroups } from "../controller/groups.controller";


const router = Router()

router.get('/', )
router.get('/:id')

router.post('/', postGroups)

router.put('/',)

router.delete('/', )

export default router