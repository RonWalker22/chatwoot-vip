export default {
  AUTHENTICATE: 'AUTHENTICATE',
  CLEAR_USER: 'LOGOUT',
  SET_CURRENT_USER: 'SET_CURRENT_USER',
  SET_CURRENT_ACCOUNT_ID: 'SET_CURRENT_ACCOUNT_ID',
  SET_CURRENT_USER_AVAILABILITY: 'SET_CURRENT_USER_AVAILABILITY',

  // Chat List
  RECEIVE_CHAT_LIST: 'RECEIVE_CHAT_LIST',
  SET_ALL_CONVERSATION: 'SET_ALL_CONVERSATION',
  EMPTY_ALL_CONVERSATION: 'EMPTY_ALL_CONVERSATION',
  SET_CONV_TAB_META: 'SET_CONV_TAB_META',
  CLEAR_LIST_LOADING_STATUS: 'CLEAR_LIST_LOADING_STATUS',
  SET_LIST_LOADING_STATUS: 'SET_LIST_LOADING_STATUS',
  SET_ALL_MESSAGES_LOADED: 'SET_ALL_MESSAGES_LOADED',
  CLEAR_ALL_MESSAGES_LOADED: 'CLEAR_ALL_MESSAGES_LOADED',
  CHANGE_CHAT_STATUS_FILTER: 'CHANGE_CHAT_STATUS_FILTER',
  UPDATE_ASSIGNEE: 'UPDATE_ASSIGNEE',
  UPDATE_CONVERSATION_CONTACT: 'UPDATE_CONVERSATION_CONTACT',

  SET_CURRENT_CHAT_WINDOW: 'SET_CURRENT_CHAT_WINDOW',
  CLEAR_CURRENT_CHAT_WINDOW: 'CLEAR_CURRENT_CHAT_WINDOW',
  CLEAR_ALL_MESSAGES: 'CLEAR_ALL_MESSAGES',
  RESOLVE_CONVERSATION: 'RESOLVE_CONVERSATION',
  ADD_CONVERSATION: 'ADD_CONVERSATION',
  UPDATE_CONVERSATION: 'UPDATE_CONVERSATION',
  MUTE_CONVERSATION: 'MUTE_CONVERSATION',
  UNMUTE_CONVERSATION: 'UNMUTE_CONVERSATION',
  ASSIGN_AGENT: 'ASSIGN_AGENT',
  SET_CHAT_META: 'SET_CHAT_META',
  ADD_MESSAGE: 'ADD_MESSAGE',
  MARK_MESSAGE_READ: 'MARK_MESSAGE_READ',
  SET_PREVIOUS_CONVERSATIONS: 'SET_PREVIOUS_CONVERSATIONS',
  SET_ACTIVE_INBOX: 'SET_ACTIVE_INBOX',

  SET_CONVERSATION_CAN_REPLY: 'SET_CONVERSATION_CAN_REPLY',

  // Inboxes
  SET_INBOXES_UI_FLAG: 'SET_INBOXES_UI_FLAG',
  SET_INBOXES: 'SET_INBOXES',
  SET_INBOX_ITEM: 'SET_INBOX_ITEM',
  ADD_INBOXES: 'ADD_INBOXES',
  EDIT_INBOXES: 'EDIT_INBOXES',
  DELETE_INBOXES: 'DELETE_INBOXES',

  // Agent
  SET_ACCOUNT_UI_FLAG: 'SET_ACCOUNT_UI_FLAG',
  SET_ACCOUNTS: 'SET_ACCOUNTS',
  ADD_ACCOUNT: 'ADD_ACCOUNT',
  EDIT_ACCOUNT: 'EDIT_ACCOUNT',
  DELETE_ACCOUNT: 'DELETE_AGENT',

  // Agent
  SET_AGENT_FETCHING_STATUS: 'SET_AGENT_FETCHING_STATUS',
  SET_AGENT_CREATING_STATUS: 'SET_AGENT_CREATING_STATUS',
  SET_AGENT_UPDATING_STATUS: 'SET_AGENT_UPDATING_STATUS',
  SET_AGENT_DELETING_STATUS: 'SET_AGENT_DELETING_STATUS',
  SET_AGENTS: 'SET_AGENTS',
  ADD_AGENT: 'ADD_AGENT',
  EDIT_AGENT: 'EDIT_AGENT',
  DELETE_AGENT: 'DELETE_AGENT',
  UPDATE_AGENTS_PRESENCE: 'UPDATE_AGENTS_PRESENCE',

  // Canned Response
  SET_CANNED_UI_FLAG: 'SET_CANNED_UI_FLAG',
  SET_CANNED: 'SET_CANNED',
  ADD_CANNED: 'ADD_CANNED',
  EDIT_CANNED: 'EDIT_CANNED',
  DELETE_CANNED: 'DELETE_CANNED',

  // Labels
  SET_LABEL_UI_FLAG: 'SET_LABEL_UI_FLAG',
  SET_LABELS: 'SET_LABELS',
  ADD_LABEL: 'ADD_LABEL',
  EDIT_LABEL: 'EDIT_LABEL',
  DELETE_LABEL: 'DELETE_LABEL',

  // Integrations
  SET_INTEGRATIONS_UI_FLAG: 'SET_INTEGRATIONS_UI_FLAG',
  SET_INTEGRATIONS: 'SET_INTEGRATIONS',
  ADD_INTEGRATION: 'ADD_INTEGRATION',
  DELETE_INTEGRATION: 'DELETE_INTEGRATION',

  // WebHook
  SET_WEBHOOK_UI_FLAG: 'SET_WEBHOOK_UI_FLAG',
  SET_WEBHOOK: 'SET_WEBHOOK',
  ADD_WEBHOOK: 'ADD_WEBHOOK',
  DELETE_WEBHOOK: 'DELETE_WEBHOOK',

  // Contacts
  SET_CONTACT_UI_FLAG: 'SET_CONTACT_UI_FLAG',
  SET_CONTACT_ITEM: 'SET_CONTACT_ITEM',
  SET_CONTACTS: 'SET_CONTACTS',
  EDIT_CONTACT: 'EDIT_CONTACT',
  UPDATE_CONTACTS_PRESENCE: 'UPDATE_CONTACTS_PRESENCE',

  // Contact Conversation
  SET_CONTACT_CONVERSATIONS_UI_FLAG: 'SET_CONTACT_CONVERSATIONS_UI_FLAG',
  SET_CONTACT_CONVERSATIONS: 'SET_CONTACT_CONVERSATIONS',

  // Conversation Label
  SET_CONVERSATION_LABELS_UI_FLAG: 'SET_CONVERSATION_LABELS_UI_FLAG',
  SET_CONVERSATION_LABELS: 'SET_CONVERSATION_LABELS',
  SET_BULK_CONVERSATION_LABELS: 'SET_BULK_CONVERSATION_LABELS',

  // Reports
  SET_ACCOUNT_REPORTS: 'SET_ACCOUNT_REPORTS',
  SET_ACCOUNT_SUMMARY: 'SET_ACCOUNT_SUMMARY',
  TOGGLE_ACCOUNT_REPORT_LOADING: 'TOGGLE_ACCOUNT_REPORT_LOADING',

  // Conversation Metadata
  SET_CONVERSATION_METADATA: 'SET_CONVERSATION_METADATA',

  // Conversation Page
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
  SET_CONVERSATION_END_REACHED: 'SET_CONVERSATION_END_REACHED',
  CLEAR_CONVERSATION_PAGE: 'CLEAR_CONVERSATION_PAGE',

  // Notification Settings
  SET_USER_NOTIFICATION_UI_FLAG: 'SET_USER_NOTIFICATION_UI_FLAG',
  SET_USER_NOTIFICATION: 'SET_USER_NOTIFICATION',

  // User Typing
  ADD_USER_TYPING_TO_CONVERSATION: 'ADD_USER_TYPING_TO_CONVERSATION',
  REMOVE_USER_TYPING_FROM_CONVERSATION: 'REMOVE_USER_TYPING_FROM_CONVERSATION',

  // Feedbacks
  SET_FEEDBACK_UI_FLAG: 'SET_FEEDBACK_UI_FLAG',
  SET_FEEDBACKS: 'SET_FEEDBACKS',
  SET_FEEDBACK_ITEM: 'SET_FEEDBACK_ITEM',
  ADD_FEEDBACK: 'ADD_FEEDBACK',
  EDIT_FEEDBACK: 'EDIT_FEEDBACK',
  UPDATE_FEEDBACK: 'UPDATE_FEEDBACK',
  DELETE_FEEDBACK: 'DELETE_FEEDBACK',
  ADD_COMMENT: 'ADD_COMMENT',
  DELETE_COMMENT: 'DELETE_COMMENT',
  CHANGE_FEEDBACK_STATUS_FILTER: 'CHANGE_FEEDBACK_STATUS_FILTER',
  SET_FEEDBACK_EVALUATION: 'SET_FEEDBACK_EVALUATION',
  SET_FEEDBACK_STATUS: 'SET_FEEDBACK_STATUS',
};
