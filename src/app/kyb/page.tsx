'use client'

import { KYBFlow } from "./kyb-flow";

export default function KYBPage() {
  return (
    <div className="bg-background min-h-screen p-12">
      <h1 className="text-2xl font-bold text-primary mb-10">KYB Page</h1>
      <KYBFlow showExternalLink={false} />
    </div>
  );
}
