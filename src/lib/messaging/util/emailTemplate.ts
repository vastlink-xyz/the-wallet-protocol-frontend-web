export function buttonTemplate({
  buttonUrl,
  buttonText,
}: {
  buttonUrl: string
  buttonText: string
}) {
  return `
    <a href="${buttonUrl}" target="_blank" style="background-color: #1E2026; color: #ffffff; padding: 12px 24px; text-decoration: none; font-weight: bold; border-radius: 4px;">
      ${buttonText}
    </a>
  `
}

export function bodyTextTemplate({
  bodyContent,
}: {
  bodyContent: string
}) {
  return `
    <div style="background-color: #F5F5F5; padding: 15px; margin: 20px 0;">
      ${bodyContent}
    </div>
  `
}

export function titleTemplate({
  titleContent,
}: {
  titleContent: string
}) {
  return `
    <h1 style="color: #1E2026; font-size: 22px; margin-top: 20px;">${titleContent}</h1>
  `
}

