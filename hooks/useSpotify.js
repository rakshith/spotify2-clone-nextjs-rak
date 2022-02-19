import { signIn, useSession } from 'next-auth/react'
import React, { useEffect } from 'react'

import SpotifyAPI from '../lib/spotify'

// const SpotifyAPI = new SpotifyWebApi({
//   clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
//   clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
// })

function useSpotify() {
  const { data: session } = useSession()

  useEffect(() => {
    if (session) {
      if (session.error === 'RefreshAccessTokenError') {
        signIn()
      }

      SpotifyAPI.setAccessToken(session.user.accessToken)
    }
  }, [session])

  return SpotifyAPI
}

export default useSpotify
