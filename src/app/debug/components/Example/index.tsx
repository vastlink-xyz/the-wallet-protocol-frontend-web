import { IRelayPKP, SessionSigs } from "@lit-protocol/types";
import { EditAuthmethod } from "./EditAuthmethod";
import { ExecuteLitActionCode } from "./ExecuteLitActionCode";
import { Upgrade } from "./Upgrade";
import { useState, useEffect } from "react";
import { getMultiProviderSessionSigs } from "@/lib/lit";
import { AllUsers } from "./AllUsers";
import { AllMultisigWallets } from "./AllMultisigWallets";
import { BtcDemo } from "./BtcDemo";
import { useUserData } from "@/hooks/useUserData";
import { useAuthContext } from "@/hooks/useAuthContext";

// Define tab options
type DebugTab = 'edit-authmethod' | 'execute-lit-action' | 'upgrade' | 'all-users' | 'all-wallets' | 'btc-demo';

export function Example() {
  // Use hook for stable auth method reference
  const { authMethod, getCustomAuthSessionSigs } = useAuthContext();
  const { userData } = useUserData();
  const [sessionSigs, setSessionSigs] = useState<SessionSigs | null>(null);

  const [loading, setLoading] = useState(false);
  // Add state for active tab
  const [activeTab, setActiveTab] = useState<DebugTab>('btc-demo');
  
  useEffect(() => {
    const fetchSessionSigs = async () => {
      const sigs = await getCustomAuthSessionSigs();
      setSessionSigs(sigs);
    };
    fetchSessionSigs();
  }, []);

  // Render tab buttons
  const renderTabButtons = () => {
    return (
      <div className="flex flex-wrap gap-2 mb-6">
        <TabButton 
          label="Edit Auth Method" 
          isActive={activeTab === 'edit-authmethod'} 
          onClick={() => setActiveTab('edit-authmethod')} 
        />
        <TabButton 
          label="Execute Lit Action" 
          isActive={activeTab === 'execute-lit-action'} 
          onClick={() => setActiveTab('execute-lit-action')} 
        />
        <TabButton 
          label="Upgrade" 
          isActive={activeTab === 'upgrade'} 
          onClick={() => setActiveTab('upgrade')} 
        />
        <TabButton 
          label="All Users" 
          isActive={activeTab === 'all-users'} 
          onClick={() => setActiveTab('all-users')} 
        />
        <TabButton 
          label="All Wallets" 
          isActive={activeTab === 'all-wallets'} 
          onClick={() => setActiveTab('all-wallets')} 
        />
        <TabButton 
          label="BTC Demo" 
          isActive={activeTab === 'btc-demo'} 
          onClick={() => setActiveTab('btc-demo')} 
        />
      </div>
    );
  };

  // Render active component based on selected tab
  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'edit-authmethod':
        return authMethod ? (
          <EditAuthmethod 
            authMethod={authMethod} 
            actionPkp={userData?.litActionPkp || null}
            loading={loading}
          />
        ) : (
          <div>No auth method available</div>
        );
      case 'execute-lit-action':
        return authMethod ? (
          <ExecuteLitActionCode 
            authMethod={authMethod as any} 
            actionPkp={userData?.litActionPkp || null}
            loading={loading}
          />
        ) : (
          <div>No auth method available</div>
        );
      case 'upgrade':
        return authMethod ? (
          <Upgrade 
            authMethod={authMethod as any} 
            actionPkp={userData?.litActionPkp || null}
          />
        ) : (
          <div>No auth method available</div>
        );
      case 'all-users':
        return (
          <AllUsers 
            currentUserPkp={userData?.litActionPkp || null}
            currentUserAuthMethod={authMethod as any}
          />
        );
      case 'all-wallets':
        return (
          <AllMultisigWallets 
            currentUserPkp={userData?.litActionPkp || null}
            currentUserAuthMethod={authMethod as any}
            sessionSigs={sessionSigs}
          />
        );
      case 'btc-demo':
        return (<BtcDemo />);
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      {renderTabButtons()}
      {renderActiveComponent()}
    </div>
  );
}

// TabButton component for navigation
function TabButton({ 
  label, 
  isActive, 
  onClick 
}: { 
  label: string; 
  isActive: boolean; 
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md font-medium transition-colors ${
        isActive 
          ? 'bg-blue-500 text-white' 
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      }`}
    >
      {label}
    </button>
  );
}
