import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/$postId/_postPathlessLayout',
)({
  component: RouteComponent,
  notFoundComponent: () => "This /$postId/_postPathlessLayout is not shown"
})

function RouteComponent() {
  return <Outlet/>
}
