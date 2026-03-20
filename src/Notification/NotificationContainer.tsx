import React from 'react'
import { useAtomValue } from 'jotai'
import { NotificationBanner } from './NotificationBanner'
import { notificationAtom } from './notificationAtom'

export function NotificationContainer() {
  const notification = useAtomValue(notificationAtom)

  if (!notification) {
    return null
  }

  return <NotificationBanner {...notification} />
}
