import React, { useEffect, useState } from 'react';

export default function FloatingButtons() {
  const [showScroll, setShowScroll] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setShowScroll(window.scrollY > 300);
      const doc = document.documentElement;
      const pct = (doc.scrollTop / (doc.scrollHeight - window.innerHeight)) * 100 || 0;
      setProgress(pct);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="fixed top-16 left-0 h-1 bg-gradient-to-r from-blue-600 to-yellow-400 z-40" style={{ width: `${progress}%` }} />

      <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg z-40">💬</a>

      {showScroll && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-24 right-6 w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg z-40">↑</button>
      )}
    </>
  );
}
