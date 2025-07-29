import { CreateUserService } from '../../services/user/CreateUserServices'
import { Request, Response } from "express"

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name,email, password } = req.body;
    const createUserService = new CreateUserService();

    try{
         const user = await createUserService.execute({
        name,
        email,
        password
    });

    return res.json(user);
    } catch(error: any){
        return res.status(400).json({ error: error.message });
    }
   
  }
}

export { CreateUserController }
