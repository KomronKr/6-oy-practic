import { Request,Response } from "express"; 
import { createGroup } from "../services/groups.services";

type GroupDto = {
    name: string
    direction: string
}


export async function postGroups(req: Request, res: Response) {
    const body: GroupDto = req.body
    const result = await createGroup(body.name, body.direction)

    if (body.name.length == 0 || body.direction.length == 0 ) {
        return res.status(400).json({
            massage: 'Files must not be empty'
        })
    }

    res.status(201).json({
        massage: 'Group created',
        group: result
    })
}   
export  function getGroups(req: Request, res: Response) {

}   
export  function getGroupsByid(req: Request, res: Response) {

}   
   