import NextAuth from 'next-auth'
import SpotifyProvider from 'next-auth/providers/spotify'

import SpotifyAPI, { LOGIN_URL } from '../../../lib/spotify'

async function refreshAccessToken() {
  try {
    SpotifyAPI.setAccessToken(token.accessToken)
    SpotifyAPI.setAccessToken(token.refreshToken)

    const { body: refreshedToken } = await SpotifyAPI.refreshAccessToken()

    console.log('Refreshed token is', refreshedToken)

    return {
      ...token,
      accessToken: refreshedToken.access_token,
      accessTokenExpires: Date.now() + refreshToken.expires_in * 1000,
      refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
    }
  } catch (error) {
    console.error(error)

    return {
      ...token,
      error: 'RefreshAccessTokenError',
    }
  }
}

export default NextAuth({
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization: LOGIN_URL,
    }),
  ],

  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, account, user }) {
      // initial sign in

      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          accessTokenExpires: account.expires_at * 1000,
          username: account.providerAccountId,
        }
      }

      // Return previous token if the access token has not expired yet
      if (Date.now() < token.accessTokenExpires) {
        console.log('Token is valid ...')
        return token
      }

      // Access token has expired, try to update it
      console.log('Token expired, refreshing...')
      return await refreshAccessToken(token)
    },
  },
})
