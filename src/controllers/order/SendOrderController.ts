import { SendOrderService } from "../../services/orders/SendOrderService";
import { Request, Response } from "express";

class SendOrderController {
    async handle(req: Request, res: Response){
        const { order_id } = req.body;

        const sendOrder = new SendOrderService();

        const order = await sendOrder.execute({
            order_id
        })

        return res.json(order);
    }
}

export { SendOrderController }