import prismaClient from "../../prisma";

interface ItemRequest {
  item_id: string
}

class RemoveItemService {
  async execute({ item_id }: ItemRequest) {
    const order = await prismaClient.item.delete({
      where: {
        id: item_id // ← valor correto sendo passado!
      }
    })

    return order
  }
}


export { RemoveItemService }