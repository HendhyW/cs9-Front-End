import Navbar from "./elements/Navbar";
import Card from "./elements/Card";

export default function ProductPage() {
    return (
        <div className="min-h-screen w-screen bg-gradient-to-b from-slate-900 to-blue-950">
            <Navbar />
            <div className="pt-24 flex flex-col items-center">
                <h1 className="text-white font-bold text-4xl pb-10">
                    Our Products
                </h1>
                <Card />
            </div>
        </div>
    );
}
