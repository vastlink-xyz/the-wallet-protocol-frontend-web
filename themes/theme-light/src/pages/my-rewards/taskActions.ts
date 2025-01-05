import { RewardActionType } from "./types";

export type TaskActionHander = {
  type: RewardActionType
  handler?: () => void
  path?: string
}

const openChatbot = () => {
  const chatbot = document.querySelector('#vastlink-chatbot')
  const chatbotButton = chatbot?.querySelector('.rcb-toggle-button')
  if (chatbotButton) {
    chatbotButton.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  }
}

export const taskActions: Record<RewardActionType, TaskActionHander> = {
  [RewardActionType.DAILY_AI_CHAT]: {
    type: RewardActionType.DAILY_AI_CHAT,
    handler: openChatbot
  },
  [RewardActionType.DAILY_LOGIN]: {
    type: RewardActionType.DAILY_LOGIN,
    path: '/auth',
  },
  [RewardActionType.FIRST_AI_CHAT]: {
    type: RewardActionType.FIRST_AI_CHAT,
    handler: openChatbot
  },
}
