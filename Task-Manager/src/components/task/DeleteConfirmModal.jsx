
const DeleteConfirmModal = ({ isOpen, title, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-60 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-full max-w-sm bg-surface-container-high rounded-xl p-6 border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h4 className="text-lg font-bold text-white mb-2">Delete task</h4>
        <p className="text-sm text-slate-300 mb-4">Are you sure you want to delete “ <span className="font-bold text-red-500">{title}</span >”? <br />This action cannot be undone.</p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded cursor-pointer bg-surface-container-lowest text-white"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded cursor-pointer bg-error text-on-error"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
