import { Button } from '@repo/ui/components/button'
import { AudioLines, Mic } from 'lucide-react'

export default function Home() {
	return (
		<div className="flex items-center justify-center h-screen gap-2">
			<div className="flex flex-col gap-2 ">
				<Button variant="outline">
					<div className="flex items-center gap-2 p-1 rounded-full border">
						<Mic className="size-3" />
					</div>
					Record audio
				</Button>
				<Button variant="default">
					<div className="flex items-center gap-2 p-1 rounded-full">
						<Mic className="size-3" />
					</div>
					Record audio
				</Button>
				<Button variant="secondary">
					<div className="flex items-center gap-2 p-1 rounded-full border">
						<Mic className="size-3" />
					</div>
					Record audio
				</Button>
				<Button variant="ghost">
					<div className="flex items-center gap-2 p-1 rounded-full border">
						<Mic className="size-3" />
					</div>
					Record audio
				</Button>
				<Button variant="link">
					<div className="flex items-center gap-2 p-1 rounded-full border">
						<Mic className="size-3" />
					</div>
					Record audio
				</Button>
			</div>

			<div className="flex flex-col gap-2 ">
				<Button variant="outline">
					<div className="flex items-center gap-2 p-1 rounded-full border bg-red-500 text-white border-red-400">
						<Mic className="size-3" />
					</div>
					Record audio
				</Button>
				<Button variant="default">
					<div className="flex items-center gap-2 p-1 rounded-full bg-red-500 text-white border-red-400">
						<Mic className="size-3" />
					</div>
					Record audio
				</Button>
				<Button variant="secondary">
					<div className="flex items-center gap-2 p-1 rounded-full border bg-red-500 text-white border-red-400">
						<Mic className="size-3" />
					</div>
					Record audio
				</Button>
				<Button variant="ghost">
					<div className="flex items-center gap-2 p-1 rounded-full border bg-red-500 text-white border-red-400">
						<Mic className="size-3" />
					</div>
					Record audio
				</Button>
				<Button variant="link">
					<div className="flex items-center gap-2 p-1 rounded-full border bg-red-500 text-white border-red-400">
						<Mic className="size-3" />
					</div>
					Record audio
				</Button>
			</div>

			<div className="flex flex-col gap-2 ">
				<Button variant="outline">
					<div className="flex items-center gap-2 p-1 rounded-full border bg-red-500 text-white border-red-400">
						<AudioLines className="size-3" />
					</div>
					Record audio
				</Button>
				<Button variant="default">
					<div className="flex items-center gap-2 p-1 rounded-full bg-red-500 text-white border-red-400">
						<AudioLines className="size-3" />
					</div>
					Record audio
				</Button>
				<Button variant="secondary">
					<div className="flex items-center gap-2 p-1 rounded-full border bg-red-500 text-white border-red-400">
						<AudioLines className="size-3" />
					</div>
					Record audio
				</Button>
				<Button variant="ghost">
					<div className="flex items-center gap-2 p-1 rounded-full border bg-red-500 text-white border-red-400">
						<AudioLines className="size-3" />
					</div>
					Record audio
				</Button>
				<Button variant="link">
					<div className="flex items-center gap-2 p-1 rounded-full border bg-red-500 text-white border-red-400">
						<AudioLines className="size-3" />
					</div>
					Record audio
				</Button>
			</div>
		</div>
	)
}
