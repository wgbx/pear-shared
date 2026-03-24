import { useAtomValue, useSetAtom } from 'jotai'
import { NotificationBanner } from './NotificationBanner'
import { notificationAtom } from './notificationAtom'

export function NotificationContainer() {
  const notification = useAtomValue(notificationAtom)
  const setNotification = useSetAtom(notificationAtom)

  const handleClose = () => {
    setNotification(undefined)
  }

  if (!notification) {
    return null
  }

  return <NotificationBanner {...notification} onClose={handleClose} />
}
