import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';
import NotificationController from './app/controllers/NotificationController';

import authMiddleware from './app/middleware/auth';

const routes = new Router();
const upload = multer(multerConfig);

/* POST ROUTES */
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.use(authMiddleware);
routes.post('/files', upload.single('file'), FileController.store);
routes.post('/appointments', AppointmentController.store);

/* GET ROUTES */
routes.get('/appointments', AppointmentController.index);
routes.get('/users', UserController.index);
routes.get('/providers', ProviderController.index);
routes.get('/schedule', ScheduleController.index);
routes.get('/notifications', NotificationController.index);

/* PUT ROUTES */
routes.put('/users', UserController.update);
routes.put('/notifications/:id', NotificationController.update);

/* DELETE ROUTES */
routes.delete('/appointments/:id', AppointmentController.delete);

export default routes;
