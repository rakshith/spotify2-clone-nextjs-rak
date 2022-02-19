import React from 'react'
import { getProviders } from 'next-auth/react'

function Login({ providers }) {
  return (
    <div>
      <img className="mb-5 w-52" src="https://links.papareact.com/9xl" alt="" />

      {Object.values(providers).map((provider) => (
        <div>
          <button>test</button>
        </div>
      ))}
    </div>
  )
}

export default Login

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}
