import { ModeToggle } from '@/components/mode-toggle'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import {
  BoxesIcon,
  BoxIcon,
  HouseIcon,
  ShoppingBasketIcon,
  WalletIcon,
} from 'lucide-react'

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => {
    return (
      <div>
        <p>This is the notFoundComponent configured on root route</p>
        <Link to="/">Start Over</Link>
      </div>
    )
  },
})

function RootComponent() {
  return (
    <>
      <header className="sticky top-0 z-10 py-4 border-b-1 bg-background">
        <NavigationMenu
          viewport={false}
          className="justify-between max-w-full w-7/9 m-auto px-5"
        >
          <div className="font-bold text-xl">COD Zone</div>

          <NavigationMenuList className="mx-auto flex gap-5">
            <NavigationMenuItem>
              <Link
                to="/"
                activeProps={{ className: 'font-bold' }}
                activeOptions={{ exact: true }}
              >
                <NavigationMenuLink className="py-2 px-4">
                  <div className="flex items-center gap-2">
                    <HouseIcon className="size-4 text-muted-foreground" />
                    <span>Home</span>
                  </div>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="py-2 px-4">
                <div className="flex items-center gap-2">
                  <WalletIcon className="size-4 text-muted-foreground" />
                  <span>Economy</span>
                </div>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-0 min-w-max">
                <NavigationMenuList className="flex flex-col gap-0">
                  <NavigationMenuItem className="w-full m-0">
                    <Link
                      to="/economy/bundles"
                      activeProps={{ className: 'font-bold' }}
                      activeOptions={{ exact: true }}
                    >
                      <NavigationMenuLink>
                        <div className="flex items-center gap-2 py-1 pl-1 pr-10">
                          <BoxesIcon className="size-4 text-muted-foreground" />
                          <span>Bundles</span>
                        </div>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="w-full m-0">
                    <Link
                      to="/economy/items"
                      activeProps={{ className: 'font-bold' }}
                      activeOptions={{ exact: true }}
                    >
                      <NavigationMenuLink>
                        <div className="flex items-center gap-2 py-1 pl-1 pr-10">
                          <BoxIcon className="size-4 text-muted-foreground" />
                          <span>Items</span>
                        </div>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="w-full m-0">
                    <Link
                      to="/economy/speedups"
                      activeProps={{ className: 'font-bold' }}
                      activeOptions={{ exact: true }}
                    >
                      <NavigationMenuLink>
                        <div className="flex items-center gap-2 py-1 pl-1 pr-10">
                          <ShoppingBasketIcon className="size-4 text-muted-foreground" />
                          <span>Speedups</span>
                        </div>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="py-2 px-4">
                <div className="flex items-center gap-2">
                  <WalletIcon className="size-4 text-muted-foreground" />
                  <span>Pets</span>
                </div>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-0 min-w-max">
                <NavigationMenuList className="flex flex-col gap-0">
                  <NavigationMenuItem>
                    <Link
                      to="/pets/upgrade"
                      activeProps={{ className: 'font-bold' }}
                      activeOptions={{ exact: true }}
                    >
                      <NavigationMenuLink className="py-2 px-4">
                        <div className="flex items-center gap-2">
                          <HouseIcon className="size-4 text-muted-foreground" />
                          <span>Upgrade</span>
                        </div>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>

          <div>
            <ModeToggle />
          </div>
        </NavigationMenu>
      </header>
      <main className="w-7/9 m-auto min-h-screen flex flex-col border-l-1 border-r-1 p-15">
        <Outlet />
      </main>
    </>
  )
}
