import { useAtomValue, useSetAtom } from 'jotai'
import { AlertBanner } from './AlertBanner'
import { alertAtom } from './alertAtom'

export function AlertContainer() {
  const alert = useAtomValue(alertAtom)
  const setAlert = useSetAtom(alertAtom)

  const handleClose = () => {
    setAlert(undefined)
  }

  if (!alert) {
    return null
  }

  return <AlertBanner {...alert} onClose={handleClose} />
}
