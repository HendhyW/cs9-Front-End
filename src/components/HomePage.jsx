import Navbar from "./elements/Navbar"

export default function HomePage() {
    
    return(
        <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-blue-950">
            <Navbar/>
            <div>
                <h1 className="text-4xl text-white font-bold">Welcome to NetStore</h1>
                <h1 className="text-3xl text-white font-bold pt-5">Check Out Our Latest Product Now</h1>
            </div>
        </div>
    )
}