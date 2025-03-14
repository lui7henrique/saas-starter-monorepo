import { auth, currentUser } from '@clerk/nextjs/server'
import { Button } from '@repo/ui/components/button'

export default async function Home() {
	const { userId } = await auth()

	if (!userId) {
		return (
			<div className="flex flex-col items-center justify-center">
				Sign in to view this page
			</div>
		)
	}

	const user = await currentUser()

	return (
		<div className="flex flex-col items-center justify-center p-4">
			<pre className="max-w-xl max-h-[50vh] overflow-auto border rounded-md">
				{JSON.stringify(user, null, 2)}
			</pre>

			<Button>oi</Button>
		</div>
	)
}
