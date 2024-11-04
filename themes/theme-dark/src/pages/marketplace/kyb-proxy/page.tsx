'use client'

import { KYBFlow } from "./kyb-flow";

export default function KYBPage() {
  return (
    <div className="bg-background">
      <KYBFlow showExternalLink={true} />
    </div>
  );
}
