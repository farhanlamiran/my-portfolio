// components/DownloadButton.tsx

import { useState } from 'react';
import { Download, Loader2 } from 'lucide-react'; // pastikan kamu pakai lucide-react
import { toast } from 'sonner'; // atau react-hot-toast
import clsx from 'clsx';

export function DownloadButton() {
    const [isLoading, setIsLoading] = useState(false);

    const handleDownload = async () => {
        setIsLoading(true);

        // Simulasi delay untuk animasi loading
        setTimeout(() => {
            const link = document.createElement('a');
            link.href = '/CV_FARHAN_LAMIRAN.pdf';
            link.download = 'CV_FARHAN_LAMIRAN.pdf';
            link.click();

            setIsLoading(false);
            toast.success('Download success!');
        }, 1500); // 1.5 detik delay
    };

    return (
        <button
            onClick={handleDownload}
            className={clsx(
                'group px-8 py-4 border border-white/20 rounded-full text-white transition-all duration-300 backdrop-blur-sm',
                {
                    'hover:bg-white/10 hover:scale-105': !isLoading,
                    'opacity-70 cursor-not-allowed': isLoading,
                }
            )}
            disabled={isLoading}
        >
            <span className="inline-flex items-center gap-2 text-white">
                {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                    <Download className="w-4 h-4" />
                )}
                {isLoading ? 'Downloading...' : 'Download CV'}
            </span>
        </button>
    );
}
