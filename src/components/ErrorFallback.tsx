interface Props {
	resetErrorBoundary: () => void
}

const ErrorFallback = (props: Props) => {
	return (
		<div className="my-auto grid h-screen w-screen place-items-center px-4 md:px-0">
			<div
				role="alert"
				className="flex w-full max-w-[60ch] flex-col items-center rounded bg-red-100 px-2 py-8 text-center md:px-14">
				<h2 className="text-5xl font-bold text-red-600">Oops!</h2>
				<div className="my-10 py-4 text-gray-700">
					<p>It seems something went wrong, Sorry for the inconvenience.</p>
					<p>
						Our engineers have been informed and are working to fix it. Please reload
						the page to continue.
					</p>
				</div>
				<button
					onClick={props.resetErrorBoundary}
					className="rounded bg-red-600 px-8 py-2 font-semibold text-white transition-transform">
					Reload
				</button>
			</div>
		</div>
	)
}

export default ErrorFallback
