import { Button } from '@repo/ui/components/button'

export default function Home() {
	return (
		<div className="flex gap-2 items-center justify-center h-screen">
			<Button variant="outline">Click me</Button>
			<Button variant="default">Click me</Button>
			<Button variant="secondary">Click me</Button>
			<Button variant="ghost">Click me</Button>
			<Button variant="link">Click me</Button>
		</div>
	)
}
