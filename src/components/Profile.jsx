import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./elements/Navbar";
import swal from "sweetalert2";

export default function ProfilePage() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const email = localStorage.getItem("email");
        console.log("User email:", email);
        if (!email) {
            swal.fire({
                icon: "error",
                iconColor: "#FFFFFF",
                text: "User email not found. Please log in again.",
                color: "#FFFFFF",
                background: "#303655"
            });
            return;
        }

        if (email) {
            axios.get(`http://localhost:3000/user/${email}`)
                .then((res) => setUser(res.data.payload))
                .catch((err) => console.error("Error fetching user:", err));
        }
    }, []);

    if (!user) {
        return <div className="text-white pt-24 px-6">Loading...</div>;
    }

    return (
        <div className="h-screen w-screen bg-gradient-to-b from-slate-900 to-blue-950 pt-24 px-6">
            <Navbar />
            <div className="max-w-xl mx-auto bg-gray-800 p-6 rounded-xl shadow-lg text-white">
                <h1 className="text-3xl font-bold mb-4">Profile</h1>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Balance:</strong> {user.balance}</p>
            </div>
        </div>
    );
}
