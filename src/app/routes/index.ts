import express from 'express';
import { userRoutes } from '../modules/users/user.router';
import { AcademicSemesterRoutes } from '../modules/academic/AcademicSemester.route';
const router = express.Router();

const moduleRoutes = [
  { path: '/users', route: userRoutes },
  { path: '/academic-semester', route: AcademicSemesterRoutes },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
// router.use('/users', userRoutes);
// router.use('/academic-semester', AcademicSemesterRoutes);

export default router;
