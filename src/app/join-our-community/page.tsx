'use client';

import React from 'react';
import JoinCommunityForm from '@/components/JoinCommunityForm';

export default function JoinOurCommunityPage() {
  return (
    <main className="min-h-screen bg-[#fffff0] pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 md:pb-12 px-2 sm:px-4">
      <div className="max-w-6xl mx-auto">
        <JoinCommunityForm />
      </div>
    </main>
  );
}
