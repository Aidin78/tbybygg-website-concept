import { type NextRequest, NextResponse } from "next/server";
import { services } from "@/content/services";

const slugs = new Set<string>(services.map((service) => service.slug));

// With Cache Components an unknown slug only reaches notFound() after the response has
// started streaming, which serves the 404 page with status 200. Rejecting it here keeps a real 404.
export function proxy(request: NextRequest) {
  const slug = request.nextUrl.pathname.split("/")[2];
  if (!slugs.has(slug)) {
    return NextResponse.rewrite(new URL("/404", request.url));
  }
}

export const config = {
  matcher: "/tjanster/:slug",
};
