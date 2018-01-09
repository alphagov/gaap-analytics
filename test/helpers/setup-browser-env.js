const ga = (send, type, category, action, label) => {
  return {
    send,
    type,
    category,
    action,
    label
  }
}

require('browser-env')({window: {ga}})
