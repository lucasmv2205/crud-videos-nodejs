import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

export class DeleteCategoriesService{
  async execute(id: string){
    const repo = getRepository(Category);

    if(!await repo.findOne(id)){
      return new Error('Categorie does not exist')
    }

    await repo.delete(id);

  }
}