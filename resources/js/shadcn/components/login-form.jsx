import { cn } from "@/shadcn/lib/utils"
import { Button } from "@/shadcn/components/ui/button"
import { Input } from "@/shadcn/components/ui/input"
import { Label } from "@/shadcn/components/ui/label"
import { Link, useForm } from '@inertiajs/react';
import { FaGoogle } from "react-icons/fa";
import InputError from '@/Components/InputError';

export function LoginForm({
	className,
	status,
	canResetPassword,
	...props
}) {

	const { data, setData, post, processing, errors, reset } = useForm({
		email: '',
		password: '',
		remember: false,
	});

	const submit = (e) => {
		e.preventDefault();

		post(route('login'), {
			onFinish: () => reset('password'),
		});
	};

	return (
		(<form onSubmit={submit} className={cn("flex flex-col gap-6", className)} {...props}>
			{status && (
				<div className="mb-4 text-sm font-medium text-green-600">
					{status}
				</div>
			)}

			<div className="flex flex-col items-center gap-2 text-center">
				<h1 className="text-2xl font-bold">Login to your account</h1>
				<p className="text-balance text-sm text-muted-foreground">
					Enter your email below to login to your account
				</p>
			</div>
			<div className="grid gap-6">
				<div className="grid gap-2">
					<Label htmlFor="email">Email</Label>
					<Input
						id="email"
						type="email"
						name="email"
						value={data.email}
						className="mt-1 block w-full"
						autoComplete="username"
						isFocused={true}
						onChange={(e) => setData('email', e.target.value)}
						required />

					<InputError message={errors.email} className="mt-2" />
				</div>
				<div className="grid gap-2">
					<div className="flex items-center">
						<Label htmlFor="password">Password</Label>
						{canResetPassword && (
							<Link href={route('password.request')} className="ml-auto text-sm underline-offset-4 hover:underline">
								Forgot your password?
							</Link>
						)}
					</div>
					<Input
						id="password"
						type="password"
						name="password"
						value={data.password}
						className="mt-1 block w-full"
						autoComplete="current-password"
						onChange={(e) => setData('password', e.target.value)}
						required />
					<InputError message={errors.password} className="mt-2" />
				</div>
				<Button type="submit" className="w-full">
					Login
				</Button>
				<div
					className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
					<span className="relative z-10 bg-background px-2 text-muted-foreground">
						Or continue with
					</span>
				</div>
				<Button variant="outline" className="w-full">
					<FaGoogle />
					Login with Google
				</Button>
			</div>
			<div className="text-center text-sm">
				Don&apos;t have an account?{" "}
				<Link href={route('register')} className="underline underline-offset-4">
					Sign up
				</Link>
			</div>
		</form>)
	);
}
