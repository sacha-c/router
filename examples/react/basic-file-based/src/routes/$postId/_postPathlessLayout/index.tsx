import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$postId/_postPathlessLayout/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/$postId/_postPathlessLayout/"!</div>
}
