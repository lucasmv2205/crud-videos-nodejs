import { Router } from 'express'
import { CreateCategoryController } from './controllers/CreateCategoryController';
import { GetAllCategoriesController } from './controllers/GetAllCategoriesController';
import { DeleteCategoriesController } from './controllers/DeleteCategoriesController';
import { UpdateCategoryController } from './controllers/UpdateCategoryController';

const routes = Router();

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController().handle);
routes.delete("/categories/:id", new DeleteCategoriesController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);

export { routes }