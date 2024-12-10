import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', '/3d-assets/scenes/public(.*)', '/'])

export default clerkMiddleware(async (auth, request) => {
  const url = request.nextUrl.clone();

  if (url.pathname.startsWith('/3d-assets/scenes/course')) {
    const { userId }: { userId: string | null } = await auth()
    if (!userId) {
      url.pathname = '/dest'
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  }

  if (!isPublicRoute(request)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|splinecode|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
    '/3d-assets(.*)',
  ],
};
