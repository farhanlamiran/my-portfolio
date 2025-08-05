import { useState } from "react"
import { Menu, X } from 'lucide-react';
import AnchorSmoothNav from "./AnchorSmoothNav";
import { navItems } from "@/constants/navItems";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        FL
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <AnchorSmoothNav items={navItems} className="text-white /80 hover:text-white transition-colors" />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-white p-2"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-white/10">
                        <div className="flex flex-col space-y-4 pt-4">
                            <AnchorSmoothNav items={navItems} className="text-white /80 hover:text-white transition-colors" />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar