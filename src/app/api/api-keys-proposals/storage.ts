import { APIKeysProposal, APIKeysProposalData, APIKeysProposalCreatedBy, APIKeysProposalModel } from './models'
import { connectToDatabase } from '@/app/api/multisig/models'  // Use shared connection

export async function createAPIKeysProposal(data: {
  multisigWalletId: string
  title: string
  description: string
  createdBy: APIKeysProposalCreatedBy
  proposalData: APIKeysProposalData
}): Promise<APIKeysProposal> {
  await connectToDatabase()
  
  const proposal = new APIKeysProposalModel({
    multisigWalletId: data.multisigWalletId,
    title: data.title,
    description: data.description,
    createdBy: data.createdBy,
    proposalData: data.proposalData,
    signatures: [],
    status: 'pending'
  })
  
  const saved = await proposal.save()
  return saved as unknown as APIKeysProposal
}

export async function getAPIKeysProposalById(proposalId: string): Promise<APIKeysProposal | null> {
  await connectToDatabase()
  
  const proposal = await APIKeysProposalModel.findById(proposalId).lean()
  if (!proposal) return null
  
  return proposal as unknown as APIKeysProposal
}

export async function getAPIKeysProposalsByWallet(multisigWalletId: string): Promise<APIKeysProposal[]> {
  await connectToDatabase()
  
  const proposals = await APIKeysProposalModel
    .find({ multisigWalletId })
    .sort({ createdAt: -1 })
    .lean()
  
  return proposals as unknown as APIKeysProposal[]
}

export async function addSignatureToAPIKeysProposal(
  proposalId: string,
  signature: {
    signer: string
    signature: string
    publicKey: string
  }
): Promise<APIKeysProposal | null> {
  await connectToDatabase()
  
  const proposal = await APIKeysProposalModel.findByIdAndUpdate(
    proposalId,
    {
      $push: { signatures: signature },
      updatedAt: new Date()
    },
    { new: true }
  ).lean()
  
  if (!proposal) return null
  
  return proposal as unknown as APIKeysProposal
}

export async function updateAPIKeysProposalStatus(
  proposalId: string,
  status: 'pending' | 'completed' | 'failed' | 'canceled',
  txHash?: string
): Promise<APIKeysProposal | null> {
  await connectToDatabase()
  
  const updateData: any = {
    status,
    updatedAt: new Date()
  }
  
  if (txHash) {
    updateData.txHash = txHash
  }
  
  const proposal = await APIKeysProposalModel.findByIdAndUpdate(
    proposalId,
    updateData,
    { new: true }
  ).lean()
  
  if (!proposal) return null
  
  return proposal as unknown as APIKeysProposal
}

export async function deleteAPIKeysProposal(proposalId: string): Promise<boolean> {
  await connectToDatabase()
  
  const result = await APIKeysProposalModel.findByIdAndDelete(proposalId)
  return !!result
}