import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { ThemeContextProvider, useThemeContext } from "@/design-system/ms-fluent-for-bic-65f6c6/lib/ThemeContext";
import { FluentProvider } from "@fluentui/react-components";

import appCss from "../styles.css?url";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0078D4" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Daniel Chiru" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%230078D4'/%3E%3Ctext x='50%25' y='54%25' font-family='Segoe UI,Arial,sans-serif' font-size='34' font-weight='700' text-anchor='middle' fill='white' dominant-baseline='middle'%3EDC%3C/text%3E%3C/svg%3E" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: () => (
    <main style={{ minHeight: "60vh", display: "grid", placeItems: "center", padding: 32, fontFamily: "Segoe UI, system-ui, sans-serif", textAlign: "center" }}>
      <div>
        <h1 style={{ fontSize: 28, margin: 0 }}>Page not found</h1>
        <p style={{ color: "#666", marginTop: 8 }}>
          The page you were looking for doesn't exist. <a href="/">Go home</a>.
        </p>
      </div>
    </main>
  ),
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <ThemeWrapper>
          <Outlet />
        </ThemeWrapper>
      </ThemeContextProvider>
    </QueryClientProvider>
  );
}

function ThemeWrapper({ children }: { children: ReactNode }) {
  const { theme } = useThemeContext();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <>{children}</>;
  return <FluentProvider theme={theme}>{children}</FluentProvider>;
}
