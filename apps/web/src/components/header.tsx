import {
	SignInButton,
	SignUpButton,
	SignedIn,
	SignedOut,
	UserButton,
} from '@clerk/nextjs'
import { Button } from '@repo/ui/components/button'
import { Cuboid } from 'lucide-react'
import { ModeToggle } from './theme-toggle'
import Link from 'next/link'

export function Header() {
	return (
		<header className="border-b p-4">
			<div className="max-w-6xl mx-auto flex items-center justify-between gap-2">
				<div className="flex gap-2 items-center">
					<Link href="/" className="flex gap-2 items-center">
						<Cuboid className="size-6" />
						<h1 className="text-2xl font-medium">Bricks</h1>
					</Link>
				</div>

				<div className="flex gap-2 items-center">
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
									avatarBox: '!size-9 border rounded-full',
								},
							}}
						/>
					</SignedIn>

					<ModeToggle />
				</div>
			</div>
		</header>
	)
}
