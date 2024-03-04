interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  title: string;
}

export function ModalAdd({ children, onClose, title }: ModalProps) {
  return (
    <>
      <div
        className="fixed bg-black/50 top-0 right-0 left-0 bottom-0 h-full" onClick={() => onClose()}/>
      <div className="w-[500px] p-5 rounded bg-white z-40 left-1/2 -translate-x-1/2 fixed translate-y-1/2">
        <h1 className="text-2xl text-center mb-2">{title}</h1>

        {children}
      </div>
    </>
  );
}
