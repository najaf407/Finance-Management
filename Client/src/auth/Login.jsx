import React from 'react'
import Logo from '../ui/Logo'
import { PrimaryButton } from '../ui/Button'
import { CircleCheck } from 'lucide-react'

const inputClass =
    'w-full rounded-lg border border-border bg-bg px-3.5 py-2.5 text-sm text-text ' +
    'placeholder:text-text-muted outline-none transition ' +
    'hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20'

const labelClass = 'mb-1.5 block text-sm font-medium text-text'

const points = [
    'Access your finances anytime',
    'Your information stays private',
    'Stay on top of your financial goals',
]

const Login = () => {
    return (
        <>
            <div className="flex min-h-150 items-center justify-center bg-bg p-4 sm:p-6">
                <div className="grid w-full max-w-5xl overflow-hidden rounded-xl border border-border bg-surface lg:grid-cols-2">

                    {/* Side Section */}
                    <aside className="relative hidden flex-col justify-between overflow-hidden border-r border-border bg-primary-soft p-10 lg:flex">

                        {/* Decorative background */}
                        <div className="pointer-events-none absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

                        <div className="relative z-10">
                            <Logo />
                        </div>

                        <div className="relative z-10 max-w-md">
                            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-text">
                                Welcome back
                                <span className="mt-1 block text-primary">
                                    Your finances, all in one place.
                                </span>
                            </h2>

                            <p className="mt-5 max-w-sm leading-7 text-text-muted">
                                Log in to access your account, track your
                                finances and stay in control of your money.
                            </p>

                            <ul className="mt-9 space-y-5">
                                {points.map((point) => (
                                    <li
                                        key={point}
                                        className="flex items-center gap-3 text-sm text-text"
                                    >
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                            <CircleCheck size={18} />
                                        </span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="relative z-10 border-t border-border/80 pt-6">
                            <p className="text-sm font-medium text-text">
                                Your money. Your decisions. Your future.
                            </p>

                            <p className="mt-2 text-xs text-text-muted">
                                A smarter way to stay connected with your finances.
                            </p>
                        </div>
                    </aside>

                    {/* Login Form Section */}
                    <div className="flex flex-col justify-center p-6 sm:p-10">

                        {/* Mobile Logo */}
                        <div className="mb-8 lg:hidden">
                            <Logo />
                        </div>

                        <div className="mb-8">
                            <h1 className="text-2xl font-semibold text-text sm:text-3xl">
                                Login
                            </h1>

                            <p className="mt-2 text-sm text-text-muted">
                                Welcome back! Enter your details to continue.
                            </p>
                        </div>

                        <form action="" className="space-y-5">

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className={labelClass}>
                                    Email
                                </label>

                                <input
                                    id="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    className={inputClass}
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <div className="mb-1.5 flex items-center justify-between">
                                    <label htmlFor="password" className="text-sm font-medium text-text">
                                        Password
                                    </label>

                                    <a
                                        href="#"
                                        className="text-xs font-medium text-primary underline-offset-4 transition hover:text-primary-hover hover:underline"
                                    >
                                        Forgot password?
                                    </a>
                                </div>

                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    className={inputClass}
                                />
                            </div>

                            <PrimaryButton width="w-full">
                                Login
                            </PrimaryButton>

                            <p className="text-center text-sm text-text-muted">
                                Don't have an account?{' '}
                                <a
                                    href="#"
                                    className="font-medium text-primary underline-offset-4 transition hover:text-primary-hover hover:underline"
                                >
                                    Sign up
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
