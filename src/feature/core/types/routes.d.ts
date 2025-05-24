import type { RouteObject as ReactRouteObject } from 'react-router-dom'

import type { RoleValues } from '@/features/common/types/user'

export interface CustomRouteObject extends ReactRouteObject {
  name: string
  roles?: RoleValues[] | '*'
  path?: string
  element: JSX.Element
  children?: CustomRouteObject[]
  index?: boolean // Indica si esta ruta es la página por defecto en su nivel
}
