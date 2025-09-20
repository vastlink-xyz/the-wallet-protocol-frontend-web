import { buttonTemplate, titleTemplate, bodyTextTemplate } from '@/lib/messaging/util/emailTemplate'

interface SendOptions {
  to: string
  subjectText: string
  bodyText: string
  html?: string
}

class MessagingService {
  // Prevent direct instantiation
  constructor() {
    if (new.target === MessagingService) {
      throw new Error("Abstract classes can't be instantiated.")
    }
  }

  // To be implemented by subclass
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  send(_opts: SendOptions & Record<string, any>) {
    throw new Error('Method not implemented')
  }

  sendMultisigTransactionNotification({
    to,
    proposalId,
    recipientAddress,
    amount,
    walletLink,
    proposer,
    walletName,
    symbol,
  }: {
    to: string
    proposalId: string
    recipientAddress: string
    amount: string
    walletLink: string
    proposer: string
    walletName: string
    symbol?: string
  }) {
    const subjectText = `Proposal Approval Request: Multisig Transaction - ${walletName}`
    const bodyText = subjectText

    const content = `
      ${titleTemplate({ titleContent: subjectText })}
      <p>A new transaction has been proposed in your team wallet requiring your review.</p>
      
      ${bodyTextTemplate({
        bodyContent: `
        <p><strong>Transaction Details:</strong></p>
        <ul>
          <li><strong>Wallet Name:</strong> ${walletName}</li>
          <li><strong>Proposal ID:</strong> ${proposalId}</li>
          <li><strong>Created by:</strong> ${proposer}</li>
          <li><strong>Recipient:</strong> ${recipientAddress}</li>
          <li><strong>Amount:</strong> ${amount}${symbol ? ` ${symbol}` : ''}</li>
        </ul>
        `
      })}
      
      <p>Please verify all transaction details before signing.</p>
      
      <div style="text-align: center; margin: 30px 0;">
        ${buttonTemplate({ buttonUrl: walletLink, buttonText: 'View Transaction Proposal' })}
      </div>
    `

    const html = content

    return this.send({ to, subjectText, bodyText, html })
  }

  sendWalletSettingsNotification({
    to,
    proposalId,
    walletLink,
    settingsChanges,
    proposer,
    walletName,
  }: {
    to: string
    proposalId: string
    walletLink: string
    proposer: string
    settingsChanges?: {
      threshold?: number
      signerChanges?: boolean
      mfaChanges?: boolean
      nameChanges?: boolean
      changeDescription?: string
    }
    walletName: string
  }) {
    const subjectText = `Proposal Approval Request: Wallet Settings Change - ${walletName}`
    const bodyText = subjectText

    const content = `
      ${titleTemplate({ titleContent: subjectText })}
      <p>A new wallet settings change has been proposed in your team wallet requiring your signature.</p>
      
      ${bodyTextTemplate({
        bodyContent: `
        <p><strong>Change Details:</strong></p>
        <ul>
          <li><strong>Wallet Name:</strong> ${walletName}</li>
          <li><strong>Proposal ID:</strong> ${proposalId}</li>
          <li><strong>Created by:</strong> ${proposer}</li>
          ${settingsChanges?.changeDescription ? `<li><strong>Changes:</strong> ${settingsChanges.changeDescription}</li>` : ''}
        </ul>
        `
      })}
      
      <p>Please verify all details before signing.</p>
      
      <div style="text-align: center; margin: 30px 0;">
        ${buttonTemplate({ buttonUrl: walletLink, buttonText: 'Review Proposal' })}
      </div>
    `

    const html = content
    return this.send({ to, subjectText, bodyText, html })
  }

  sendMultisigWalletAddedNotification({
    to,
    walletAddress,
    threshold,
    signersCount,
    walletLink,
    walletName,
  }: {
    to: string
    walletAddress: string
    threshold: number
    signersCount: number
    walletLink: string
    walletName: string
  }) {
    const subjectText = `You have been added to a Team Wallet: ${walletName}`
    const bodyText = subjectText

    const content = `
      ${titleTemplate({ titleContent: `You have been added to a Team Wallet: ${walletName}` })}
      <p>You have been added as a signer to a new team wallet.</p>
      
      ${bodyTextTemplate({
        bodyContent: `
          <p><strong>Wallet Name:</strong> ${walletName}</p>
          <p><strong>Wallet Address:</strong> ${walletAddress}</p>
          <p><strong>Required signatures:</strong> ${threshold} of ${signersCount} signers</p>
        `
      })}
      
      <p>Please log in to access and manage this wallet.</p>
      
      <div style="text-align: center; margin: 30px 0;">
        ${buttonTemplate({ buttonUrl: walletLink, buttonText: 'Access Wallet' })}
      </div>
    `

    const html = content
    return this.send({ to, subjectText, bodyText, html })
  }

  sendInviteEmail({
    to,
    senderEmail,
    tokenType,
    amount,
    inviteUrl,
  }: {
    to: string
    senderEmail: string
    tokenType: string
    amount: string
    inviteUrl: string
  }) {
    const subjectText = `${senderEmail} invited you to Vastbase`
    const bodyText = subjectText

    const content = `
      ${titleTemplate({ titleContent: subjectText })}
      
      ${bodyTextTemplate({
        bodyContent: `
          <p>Click the button below to create your wallet and register with Vastbase:</p>
        `
      })}
      
      <div style="text-align: center; margin: 30px 0;">
        ${buttonTemplate({ buttonUrl: inviteUrl, buttonText: 'Register' })}
      </div>
    `

    const html = content
    return this.send({ to, subjectText, bodyText, html })
  }

  sendRecipientRegisteredEmail({
    to,
    recipientEmail,
    tokenType,
    amount,
    completeUrl,
  }: {
    to: string
    recipientEmail: string
    tokenType: string
    amount: string
    completeUrl: string
  }) {
    const subjectText = `${recipientEmail} has completed registration`
    const bodyText = `The recipient ${recipientEmail} has completed their registration process. You can now proceed with the next steps.`

    const content = `
      <p>${recipientEmail} has completed registration</p>
    `

    const html = content
    return this.send({ to, subjectText, bodyText, html })
  }

  sendProposalExecutedNotification({
    to,
    proposalId,
    proposalType,
    walletName,
    walletLink,
    executionDetails,
  }: {
    to: string
    proposalId: string
    proposalType: 'transaction' | 'settings'
    walletName: string
    walletLink: string
    executionDetails: {
      recipientAddress?: string
      amount?: string
      symbol?: string
      changeDescription?: string
      transactionUrl?: string
    }
  }) {
    const isTransaction = proposalType === 'transaction'
    const subjectText = `Proposal Executed Successfully: ${isTransaction ? 'Transaction' : 'Settings Change'} - ${walletName}`
    const bodyText = subjectText

    const content = `
      ${titleTemplate({ titleContent: subjectText })}
      <p>The proposal has been approved by all required signers and executed successfully.</p>

      ${bodyTextTemplate({
        bodyContent: `
        <p><strong>Proposal Details:</strong></p>
        <ul>
          <li><strong>Proposal ID:</strong> ${proposalId}</li>
          <li><strong>Type:</strong> ${isTransaction ? 'Transaction' : 'Wallet Settings Change'}</li>
          <li><strong>Wallet:</strong> ${walletName}</li>
          ${isTransaction && executionDetails.recipientAddress ? `<li><strong>Recipient:</strong> ${executionDetails.recipientAddress}</li>` : ''}
          ${isTransaction && executionDetails.amount && executionDetails.symbol ? `<li><strong>Amount:</strong> ${executionDetails.amount} ${executionDetails.symbol}</li>` : ''}
          ${!isTransaction && executionDetails.changeDescription ? `<li><strong>Changes:</strong> ${executionDetails.changeDescription}</li>` : ''}
          ${executionDetails.transactionUrl ? `<li><strong>Transaction:</strong> <a href="${executionDetails.transactionUrl}" target="_blank" style="display: inline-block; background-color: #007bff; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; font-size: 12px; margin-left: 8px;">View Transaction</a></li>` : ''}
        </ul>
        `
      })}

      <div style="text-align: center; margin: 30px 0;">
        ${buttonTemplate({ buttonUrl: walletLink, buttonText: 'Review Proposal' })}
      </div>
    `

    const html = content
    return this.send({ to, subjectText, bodyText, html })
  }

  sendCustomTemplateEmail({
    to,
    subjectText,
    bodyText,
    content,
    defaultHtml,
  }: {
    to: string
    subjectText: string
    bodyText: string
    content: string
    defaultHtml?: string
  }) {
    let html = content
    if (defaultHtml) {
      html = defaultHtml
    }
    return this.send({ to, subjectText, bodyText, html })
  }
}

export { MessagingService }

