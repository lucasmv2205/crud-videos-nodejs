import { Router } from 'express'
import { CreateCategoryController } from './controllers/CreateCategoryController';
import { GetAllCategoriesController } from './controllers/GetAllCategoriesController';
import { DeleteCategoriesController } from './controllers/DeleteCategoriesController';
import { UpdateCategoryController } from './controllers/UpdateCategoryController';
import { CreateVideoController } from './controllers/CreateVideoController';

const routes = Router();

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController().handle);
routes.delete("/categories/:id", new DeleteCategoriesController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);


routes.post("/videos", new CreateVideoController().handle);

export { routes }