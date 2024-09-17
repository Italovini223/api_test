import { prismaClient } from "../prisma";

export class ServiceTest {
  async execute() {
    try {
        
        const examples = await prismaClient.bi_ads_data.findMany({
            take: 50,
        })
    
        return examples
        
    } catch (error) {
      throw error
    }



  }
}
