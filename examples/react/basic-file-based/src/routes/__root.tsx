import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => "This _root.notFoundComponent is not shown"
})

function RootComponent() {
  return (
    <>
      <div className="p-2 flex gap-2 text-lg border-b">
        <Link
          to="/"
          activeProps={{
            className: 'font-bold',
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>{' '}
        <Link
          to="/posts"
          activeProps={{
            className: 'font-bold',
          }}
        >
          Posts
        </Link>{' '}
        <Link
          to="/route-a"
          activeProps={{
            className: 'font-bold',
          }}
        >
          Pathless Layout
        </Link>{' '}
        <Link
          to="/anchor"
          activeProps={{
            className: 'font-bold',
          }}
        >
          Anchor
        </Link>{' '}
        <Link
          // @ts-expect-error
          to="/this-route-does-not-exist"
          activeProps={{
            className: 'font-bold',
          }}
        >
          This Route Does Not Exist
        </Link>
        <Link
          to="/$postId/works"
          params={
            {
            postId: 'the-issue'
            }
          }
          activeProps={{
            className: 'font-bold',
          }}
        >
          A working route
        </Link>
        <Link
          // @ts-ignore to show the issue
          to="/$postId/not-exists"
          params={
            {
            // @ts-ignore to show the issue
            postId: 'the-issue'
            }
          }
          activeProps={{
            className: 'font-bold',
          }}
        >
          The Issue
        </Link>
      </div>
      <hr />
      <Outlet />
      {/* Start rendering router matches */}
      <TanStackRouterDevtools position="bottom-right" />
    </>
  )
}
