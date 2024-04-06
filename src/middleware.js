import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  return NextResponse.redirect(new URL('/about', request.url))
}
 
export default middleware

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/home/:path*',
}