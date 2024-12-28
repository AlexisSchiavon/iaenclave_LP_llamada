import React from 'react';
import { Brain } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-900/50 backdrop-blur-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center h-16">
                    <div className="flex items-center space-x-2 animate-float">
                        <Brain className="w-8 h-8 text-blue-400" />
                        <span className="text-2xl font-bold text-white text-glow">IA en Clave</span>
                    </div>
                </div>
            </div>
        </nav>
    );
} 