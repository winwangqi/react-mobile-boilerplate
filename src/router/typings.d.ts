import { LazyExoticComponent, ReactNode } from 'react'

export interface RouteItem {
  paths: string[]
  component: LazyExoticComponent<ReactNode>
}
