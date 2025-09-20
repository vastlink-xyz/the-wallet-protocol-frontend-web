import { MessagingService } from './MessagingService'
import { sendEmail } from '@/lib/messaging/util/sendgrid'

class EmailService extends MessagingService {
  constructor(config = {}) {
    super()
    // config reserved for future use
    void config
  }

  async send({ to, subjectText, bodyText, html }: { to: string, subjectText: string, bodyText: string, html?: string }) {
    return sendEmail({
      to,
      from: 'Vastbase <no-reply@vastlink.xyz>',
      subject: subjectText,
      text: bodyText,
      html: html || bodyText,
    })
  }
}

const emailService = new EmailService()
Object.freeze(emailService)

export default emailService

