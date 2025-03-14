import {
	SignInButton,
	SignUpButton,
	SignedIn,
	SignedOut,
	UserButton,
} from '@clerk/nextjs'
import { Button } from '@repo/ui/components/button'
import { ModeToggle } from './theme-toggle'

export function Header() {
	return (
		<header className="border-b p-4">
			<div className="max-w-6xl mx-auto flex items-center justify-end gap-2">
				<SignedOut>
					<SignInButton mode="modal">
						<Button variant="outline">Sign in</Button>
					</SignInButton>

					<SignUpButton mode="modal">
						<Button>Sign up</Button>
					</SignUpButton>
				</SignedOut>

				<SignedIn>
					<UserButton
						appearance={{
							elements: {
								avatarBox: '!size-8 border rounded-full',
							},
						}}
					/>
				</SignedIn>

				<ModeToggle />
			</div>
		</header>
	)
}
