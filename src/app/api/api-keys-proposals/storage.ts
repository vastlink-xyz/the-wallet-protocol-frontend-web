import { APIKeysProposal, APIKeysProposalData, APIKeysProposalCreatedBy, APIKeysProposalModel } from './models'
import { connectToDatabase } from '@/app/api/multisig/models'  // Use shared connection

// Helper function to convert MongoDB document to APIKeysProposal format
function convertToAPIKeysProposal(doc: any): APIKeysProposal {
  if (!doc) return null as any
  
  const converted = doc.toObject ? doc.toObject() : doc
  
  return {
    id: converted.id,
    multisigWalletId: converted.multisigWalletId,
    status: converted.status,
    createdAt: converted.createdAt,
    updatedAt: converted.updatedAt,
    createdBy: converted.createdBy,
    title: converted.title,
    description: converted.description,
    signatures: converted.signatures || [],
    proposalData: converted.proposalData,
    txHash: converted.txHash
  }
}

export async function createAPIKeysProposal(data: {
  multisigWalletId: string
  title: string
  description: string
  createdBy: APIKeysProposalCreatedBy
  proposalData: APIKeysProposalData
}): Promise<APIKeysProposal> {
  await connectToDatabase()
  
  const proposalId = crypto.randomUUID()
  
  const proposal = new APIKeysProposalModel({
    id: proposalId,
    multisigWalletId: data.multisigWalletId,
    title: data.title,
    description: data.description,
    createdBy: data.createdBy,
    proposalData: data.proposalData,
    signatures: [],
    status: 'pending'
  })
  
  const saved = await proposal.save()
  return convertToAPIKeysProposal(saved)
}

export async function getAPIKeysProposalById(proposalId: string): Promise<APIKeysProposal | null> {
  await connectToDatabase()
  
  const proposal = await APIKeysProposalModel.findOne({ id: proposalId }).lean()
  if (!proposal) return null
  
  return convertToAPIKeysProposal(proposal)
}

export async function getAPIKeysProposalsByWallet(multisigWalletId: string): Promise<APIKeysProposal[]> {
  await connectToDatabase()
  
  const proposals = await APIKeysProposalModel
    .find({ multisigWalletId })
    .sort({ createdAt: -1 })
    .lean()
  
  return proposals.map(convertToAPIKeysProposal)
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
  
  const proposal = await APIKeysProposalModel.findOneAndUpdate(
    { id: proposalId },
    {
      $push: { signatures: signature },
      updatedAt: new Date()
    },
    { new: true }
  ).lean()
  
  if (!proposal) return null
  
  return convertToAPIKeysProposal(proposal)
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
  
  const proposal = await APIKeysProposalModel.findOneAndUpdate(
    { id: proposalId },
    updateData,
    { new: true }
  ).lean()
  
  if (!proposal) return null
  
  return convertToAPIKeysProposal(proposal)
}

export async function deleteAPIKeysProposal(proposalId: string): Promise<boolean> {
  await connectToDatabase()
  
  const result = await APIKeysProposalModel.findOneAndDelete({ id: proposalId })
  return !!result
}