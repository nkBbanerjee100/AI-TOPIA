import '@styles/styles.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'
import { ClerkProvider } from '@clerk/nextjs'
export const metadata = {
    title: "AI-TOPIA",
    description: "Search for world's leading AI-featured Tools"
}

const RootLayout = ({ children }) => {
    return (
        <ClerkProvider>
            <html lang="en">
                <body>
                    <Provider>
                        <div className='main'>
                            <div className='gradient' />
                        </div>
                        <main className='app'>
                            <Nav />
                            {children}
                        </main>
                    </Provider>
                </body>
            </html>
        </ClerkProvider>
    )
}

export default RootLayout
