const Modal = ({isOpen, onClick, children}) => {

    const preferences = {
        modalOverlay: isOpen ? 'fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50' : 'hidden',
        modalContent: isOpen ? 'bg-white p-4 rounded-md shadow-md grid justify-items-center' : 'hidden'
    }

    const handleContentClick = (event) => {
        event.stopPropagation()
    }

  return (
    <div className={preferences.modalOverlay} onClick={onClick}>
        <div className={preferences.modalContent} onClick={handleContentClick}>
            {children}
        </div>
    </div>
  )
}

export default Modal