import { NextRequest } from 'next/server';
import { MessageProposalModel } from '../multisig/models';
import { getWallets } from '../multisig/storage';
import { getUser } from '../user/storage';

// Get proposals with optional filtering by status and userAddress
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;

    const authMethodId = searchParams.get('authMethodId');
    if (!authMethodId) {
      return Response.json(
        { success: false, error: 'authMethodId is required' },
        { status: 400 }
      );
    }

    // fetch user from authMethodId
    const user = await getUser(authMethodId);
    if (!user || !user.litActionPkp?.ethAddress) {
      return Response.json(
        { success: false, error: 'User or PKP address not found' },
        { status: 404 }
      );
    }

    const proposalId = searchParams.get('pid');
    const walletId = searchParams.get('wid');
    const status = searchParams.get('status');

    const wallets = await getWallets();

    const filteredWallets = wallets.filter((v) =>
      v.signers.some(
        (signer) =>
          signer.ethAddress.toLowerCase() ===
          user.litActionPkp!.ethAddress.toLowerCase()
      )
    );

    if (filteredWallets.length === 0) {
      return Response.json(
        { success: false, error: 'No wallets found for the user' },
        { status: 404 }
      );
    }

    // Build query object
    const query: any = {
      walletId: { $in: filteredWallets.map((wallet) => wallet.id) },
    };

    if (proposalId) {
      query.id = proposalId;
    }

    if (walletId) {
      query.walletId = walletId;
    }

    if (status) {
      query.status = status;
    }

    // Get proposals from user's team wallets
    const proposals = await MessageProposalModel.find(query)
      .sort({ createdAt: -1 })
      .lean();

    // filter proposals based on user PKP address
    // only include proposals that are pending or where the user is a signer
    const filgeredProposals = proposals.filter((v) => {
      if (v.status === 'pending') {
        return true;
      }
      if (!v.settingsData?.originalState?.signers) {
        return false;
      }

      return v.settingsData.originalState.signers.some(
        (signer: { ethAddress: string }) =>
          signer.ethAddress.toLowerCase() ===
          user.litActionPkp!.ethAddress.toLowerCase()
      );
    });

    return Response.json({ success: true, data: filgeredProposals });
  } catch (error) {
    console.error('Error fetching proposals:', error);
    return Response.json(
      { success: false, error: 'Failed to fetch proposals' },
      { status: 500 }
    );
  }
}
