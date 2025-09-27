type ErrorMessageProps = {
  message: string;
};

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="bg-red-50 border border-red-300 text-red-800 px-4 py-3 rounded-md shadow-sm flex items-center space-x-3">
      <svg
        className="w-5 h-5 text-red-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v2m0 4h.01M12 5a7 7 0 100 14 7 7 0 000-14z"
        />
      </svg>
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
}
