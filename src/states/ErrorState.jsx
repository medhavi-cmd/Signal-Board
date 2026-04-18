export default function ErrorState() {
  return (
    <div className="error-state">
      <div className="state-card">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/error-state-illustration-svg-download-png-9246554.png"
          alt="Error illustration"
          className="mx-auto mb-4 h-auto w-full max-w-64 rounded-xl border border-slate-200 object-cover"
        />
        <div className="state-card__title">Something went wrong</div>
        <p className="state-card__copy mt-2">
          Refresh the page and try again. If the issue persists, check the local data source.
        </p>
      </div>
    </div>
  );
}