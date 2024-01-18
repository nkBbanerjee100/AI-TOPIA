import Feed from "@components/Feed"
import SignInPage from "./login/page"
import { SignOutButton, UserProfile } from "@clerk/nextjs"
export const dynamic = 'force-dynamic'
const Home = () => {
    return (
        <section className="w-full flex-center flex-col">

            {/* <UserProfile /> */}
            <h1 className="head_text text-center">Discover and Share
                <br className="max-md:hidden" />
                <span className="green_gradient text-center">Discover AI-based tools</span>
            </h1>
            <p className="desc text-center">
                This platform is a collection of AI-powered tools that can help you discover, create
                or share your own projects. You can browse through the available tools below to get started!
            </p>
            <Feed />
        </section>
    )
}
export default Home
