import { Router } from 'express'
import { CreateCategoryController } from './controllers/CreateCategoryController';
import { GetAllCategoriesController } from './controllers/GetAllCategoriesController';
import { DeleteCategoriesController } from './controllers/DeleteCategoriesController';

const routes = Router();

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController().handle);
routes.delete("/categories", new DeleteCategoriesController().handle);

export { routes }