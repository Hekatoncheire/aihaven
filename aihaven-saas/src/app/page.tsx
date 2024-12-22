import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-8">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to AI Haven</h1>
        <p className="text-xl">Host and Train AI Models in the Cloud</p>
      </header>
      <main className="text-center">
        <p className="text-lg mb-8">
          AI Haven provides a powerful platform for hosting and training your AI models in the cloud. Our intuitive interface and robust infrastructure make it easy to deploy and manage your models.
        </p>
        <a
          className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded"
          href="/signup"
        >
          Sign Up Now
        </a>
      </main>
    </div>
  );
}
