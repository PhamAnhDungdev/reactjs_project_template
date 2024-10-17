import { Dialog, Pane, WarningSignIcon } from 'evergreen-ui'
import React from 'react'

type PropsType = {
  isOpen: boolean
  toggleModal: any
  message: any
  onConfirm?: any
}

const PopupDelete = (props: PropsType) => {
  const { isOpen, toggleModal, message, onConfirm } = props

  return (
      <Dialog
        isShown={isOpen}
        title={<Pane className="flex gap-2 items-center"><WarningSignIcon color="warning" size={18} />CẢNH BÁO</Pane>}
        intent="danger"
        confirmLabel="Đồng ý"
        cancelLabel="Hủy"
        onCancel={toggleModal}
        onConfirm={onConfirm}
      >
        {message}
      </Dialog>

  )}

export default PopupDelete