import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";
import { useLocation, useNavigate } from "react-router-dom";

export function TopMenu() {
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <NavigationMenu>
            <NavigationMenuList className="gap-6">
              <NavigationMenuItem>
                <button
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    location.pathname === "/" ? "text-primary" : "text-muted-foreground"
                  )}
                  onClick={() => navigate("/")}
                >
                  Home
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    location.pathname === "/about" ? "text-primary" : "text-muted-foreground"
                  )}
                  onClick={() => navigate("/about")}
                >
                  About
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    location.pathname === "/gallery" ? "text-primary" : "text-muted-foreground"
                  )}
                  onClick={() => navigate("/gallery")}
                >
                  Gallery
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    location.pathname === "/fullgallery" ? "text-primary" : "text-muted-foreground"
                  )}
                  onClick={() => navigate("/fullgallery")}
                >
                  Full Gallery
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    location.pathname === "/swipe" ? "text-primary" : "text-muted-foreground"
                  )}
                  onClick={() => navigate("/swipe")}
                >
                  Swipe Gallery
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    location.pathname === "/yalightbox" ? "text-primary" : "text-muted-foreground"
                  )}
                  onClick={() => navigate("/yalightbox")}
                >
                  YA Lightbox
                </button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}