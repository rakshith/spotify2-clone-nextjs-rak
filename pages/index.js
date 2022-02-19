import Sidebar from '../components/Sidebar'
import { getSession } from 'next-auth/react'
import Center from '../components/Center'

const Home = () => {
  return (
    <div className="h-screen overflow-hidden bg-black">
      <main className="flex">
        <Sidebar />
        <Center />
      </main>

      {/* Player */}

      {/* Footer */}
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
