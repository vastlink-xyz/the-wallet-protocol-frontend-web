import axios from 'axios'

interface EmailParams {
  to: string
  from: string
  subject: string
  text: string
  html: string
}

function getEnvOrThrow(key: string): string {
  const value = process.env[key]
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`)
  }
  return value
}

const sendgridApiKey = () => getEnvOrThrow('SENDGRID_API_KEY')

export const sendEmail = async (params: EmailParams): Promise<void> => {
  const { to, subject, html } = params

  const templateId = process.env.SENDGRID_EMAIL_TEMPLATE_ID
  if (!templateId) {
    throw new Error('Missing SENDGRID_EMAIL_TEMPLATE_ID env for SendGrid dynamic template')
  }

  const msg = {
    template_id: templateId,
    personalizations: [
      {
        to: [{ email: to }],
        dynamic_template_data: {
          content: html,
          subject,
        },
      },
    ],
    from: { email: 'no-reply@vastlink.xyz', name: 'Vastbase' },
  }

  try {
    const response = await axios.post('https://api.sendgrid.com/v3/mail/send', msg, {
      headers: {
        Authorization: `Bearer ${sendgridApiKey()}`,
        'Content-Type': 'application/json',
      },
    })
    if (response.status < 200 || response.status >= 300) {
      throw new Error(`SendGrid responded with status ${response.status}`)
    }
  } catch (error) {
    console.error('Error sending email via SendGrid:', error)
    throw error
  }
}

export type { EmailParams }

