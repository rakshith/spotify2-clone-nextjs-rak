import Sidebar from '../components/Sidebar'
import { getSession } from 'next-auth/react'
import Center from '../components/Center'
import Player from '../components/Player'

const Home = () => {
  return (
    <div className="h-screen overflow-hidden bg-black text-white">
      <main className="flex">
        <Sidebar />
        <Center />
      </main>

      <Player />
    </div>
  )
}

export default Home

export async function getServerSideProps(ctx) {
  return {
    props: {
      session: await getSession(ctx),
    },
  }
}
