import { AppWrapper } from '@/my-ui/root/AppWrapper'
import './globals.css'
import { Inter } from 'next/font/google'
import { server_component_pb } from '@/state/pb/server_component_pb'
import { PBUserRecord } from '@/state/user'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Welcome to real estates',
  description: 'Find your dream property',
}

export default async function RootLayout({children,}: {children: React.ReactNode}) {
  const {cookies} = await server_component_pb()
  const user_string = cookies().get("pb_auth")?.value ?? "{}"
    const user = JSON.parse(user_string).model as PBUserRecord

  return (
    <html lang="en">
      <body className={inter.className}>
        <AppWrapper user={user}>
          {children}
        </AppWrapper>
      </body>
      {/* <Toaster/> */}
    </html>
  )
}
