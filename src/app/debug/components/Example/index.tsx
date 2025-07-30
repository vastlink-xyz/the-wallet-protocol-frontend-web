import { AuthMethod, IRelayPKP, SessionSigs } from "@lit-protocol/types";
import { EditAuthmethod } from "./EditAuthmethod";
import { ExecuteLitActionCode } from "./ExecuteLitActionCode";
import { Upgrade } from "./Upgrade";
import { useState, useEffect, useCallback } from "react";
import { getSessionSigs } from "@/lib/lit";
import { log } from "@/lib/utils";
import { AllUsers } from "./AllUsers";
import { AllMultisigWallets } from "./AllMultisigWallets";
import { BtcDemo } from "./BtcDemo";
import { getAuthMethodIdFromStorage } from "@/lib/storage/authmethod";

// Define tab options
type DebugTab = 'edit-authmethod' | 'execute-lit-action' | 'upgrade' | 'all-users' | 'all-wallets' | 'btc-demo';

export function Example({
  authMethod,
}: {
  authMethod: AuthMethod;
}) {
  const [actionPkp, setActionPkp] = useState<IRelayPKP | null>(null);
  const [loading, setLoading] = useState(false);
  const [sessionSigs, setSessionSigs] = useState<SessionSigs | null>(null);
  // Add state for active tab
  const [activeTab, setActiveTab] = useState<DebugTab>('btc-demo');

  // Fetch user PKPs from API
  const fetchUserPkps = useCallback(async () => {
    if (!authMethod) return;
    
    try {
      setLoading(true);
      const authMethodId = getAuthMethodIdFromStorage() || ''
      
      const response = await fetch(`/api/user/pkp?authMethodId=${authMethodId}`);
      
      if (response.ok) {
        const data = await response.json();
        if (data.litActionPkp) {
          setActionPkp(data.litActionPkp);
        }
      }
    } catch (error) {
      console.error("Error fetching user PKPs:", error);
    } finally {
      setLoading(false);
    }
  }, [authMethod]);

  // Initial data fetch when authMethod is available
  useEffect(() => {
    if (authMethod) {
      fetchUserPkps();
    }
  }, [authMethod, fetchUserPkps]);

  // Fetch session signatures
  useEffect(() => {
    const fetchSessionSigs = async () => {
      if (!sessionSigs && actionPkp && authMethod) {
        const sigs = await getSessionSigs({
          pkpPublicKey: actionPkp.publicKey,
          authMethod: authMethod,
          refreshStytchAccessToken: true,
        });
        setSessionSigs(sigs);
      }
    };

    fetchSessionSigs();
  }, [actionPkp, authMethod, sessionSigs]);

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
        return (
          <EditAuthmethod 
            authMethod={authMethod} 
            actionPkp={actionPkp}
            loading={loading}
          />
        );
      case 'execute-lit-action':
        return (
          <ExecuteLitActionCode 
            authMethod={authMethod} 
            actionPkp={actionPkp}
            loading={loading}
          />
        );
      case 'upgrade':
        return (
          <Upgrade 
            authMethod={authMethod} 
            actionPkp={actionPkp}
          />
        );
      case 'all-users':
        return (
          <AllUsers 
            currentUserPkp={actionPkp}
            currentUserAuthMethod={authMethod}
            sessionSigs={sessionSigs}
          />
        );
      case 'all-wallets':
        return (
          <AllMultisigWallets 
            currentUserPkp={actionPkp}
            currentUserAuthMethod={authMethod}
            sessionSigs={sessionSigs}
          />
        );
      case 'btc-demo':
        return (
          <BtcDemo 
            authMethod={authMethod}
            litactionPkp={actionPkp}
            sessionSigs={sessionSigs}
          />
        );
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
