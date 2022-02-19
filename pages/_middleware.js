import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

export async function middleware(req, res, next) {
  // token exists if use is logged in
  const token = await getToken({ req, secret: process.env.JWT_SECRET })

  const { pathname } = req.nextUrl
  // Allow the requests if the following is true...
  if (pathname.includes('/api/auth') || token) {
    return NextResponse.next()
  }

  // protect routes
  if (!token && pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', req.url))
  }
}
