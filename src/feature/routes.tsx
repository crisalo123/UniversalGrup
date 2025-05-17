

import type { CustomRouteObject } from './core/types/routes';
import { lazyImport } from './core/utils/lazyImport';


// Ejemplo de lazy import
const { HomePage } = lazyImport(() => import('./pages/homePage'), 'HomePage');
const { ProtursPage } = lazyImport(() => import('./pages/protursPage'), 'ProtursPage');
const { MigrationsPage } = lazyImport(() => import('./pages/migrationsPage'), 'MigrationsPage');

const { TurimsUsa } = lazyImport(() => import('./migration/pages/turimsUsa'), 'TurimsUsa');

const RoutesComponent: CustomRouteObject[] = [
  { 
    name: 'Home',
    path: '/',
    element: <HomePage />
  },

  { 
    name: 'Proturs',
    path: '/Proturs',
    element: <ProtursPage />
  },


  { 
    name: 'Migrations',
    path: '/Migrations',
    element: <MigrationsPage />
  },

  { 
    name: 'Migrations',
    path: '/Migrations',
    element: <MigrationsPage />
  },


  { 
    name: 'Turims Usa',
    path: '/Migrations/TurimsUsa',
    element: <TurimsUsa />
  },
  // Aquí podrías agregar más rutas más adelante
];

export default RoutesComponent;