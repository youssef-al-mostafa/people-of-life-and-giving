import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle, Eye, EyeOff, Mail, Lock, Shield } from 'lucide-react';
import { FormEventHandler, useState } from 'react';

import InputError from '@/components/admin/core/input-error';
import TextLink from '@/components/admin/core/text-link';
import { Button } from '@/components/common/button';
import { Checkbox } from '@/components/common/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/common/label';
import AuthLayout from '@/layouts/auth-layout';

type LoginForm = {
    email: string;
    password: string;
    remember: boolean;
};

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
    const [showPassword, setShowPassword] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm<Required<LoginForm>>({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <Head title="Log in" />

            {status && (
                <div className="fixed top-4 right-4 z-50 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg shadow-lg animate-in slide-in-from-top duration-300">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-medium">{status}</span>
                    </div>
                </div>
            )}

            <div className="w-full max-w-md">
                <div className="backdrop-blur-xl border border-white/20
                                rounded-2xl shadow-2xl p-8 relative overflow-hidden
                                bg-gray-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-purple-400/5"></div>
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-r from-indigo-400/10 to-pink-400/10 rounded-full blur-3xl"></div>

                    <div className="relative z-10">
                        <div className="text-center mb-8">
                            <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h1>
                            <p className="text-gray-600">Login in to your account to continue</p>
                        </div>

                        <form onSubmit={submit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                                    Email Address
                                </Label>
                                <div className="relative group">
                                    <Input
                                        id="email"
                                        type="email"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        placeholder="Enter your email"
                                        className="pl-11 h-12 bg-white/50 border-gray-200 rounded-xl
                                                   focus:ring-2 focus:ring-blue-500 focus:border-transparent
                                                   transition-all duration-200 hover:bg-white/70 text-black"
                                    />
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5
                                                     text-black group-focus-within:text-blue-500
                                                     transition-colors" />
                                </div>
                                <InputError message={errors.email} />
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="password"
                                        className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                                        Password
                                    </Label>
                                    {canResetPassword && (
                                        <TextLink
                                            href={route('password.request')}
                                            className="text-sm text-blue-600 font-medium decoration-clone"
                                            tabIndex={5}
                                        >
                                            Forgot password?
                                        </TextLink>
                                    )}
                                </div>
                                <div className="relative group">
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        required
                                        tabIndex={2}
                                        autoComplete="current-password"
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                        placeholder="Enter your password"
                                        className="pl-11 pr-11 h-12 bg-white/50 border-gray-200 rounded-xl
                                                   focus:ring-2 focus:ring-blue-500 focus:border-transparent
                                                   transition-all duration-200 hover:bg-white/70 text-black"
                                    />
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2
                                                     w-5 h-5 text-black group-focus-within:text-blue-500
                                                     transition-colors" />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                    >
                                        {showPassword ? <EyeOff className="w-5 h-5 text-black" /> : <Eye className="w-5 h-5 text-black" />}
                                    </button>
                                </div>
                                <InputError message={errors.password} />
                            </div>

                            <div className="flex items-center">
                                <div className="flex items-center space-x-3">
                                    <Checkbox
                                        id="remember"
                                        name="remember"
                                        checked={data.remember}
                                        onClick={() => setData('remember', !data.remember)}
                                        tabIndex={3}
                                        className="w-4 h-4 text-blue-600 rounded border-gray-300
                                                   focus:ring-blue-500 focus:ring-2 bg-white"
                                    />
                                    <Label htmlFor="remember" className="text-sm text-gray-600
                                                                         cursor-pointer">
                                        Remember me for 30 days
                                    </Label>
                                </div>
                            </div>

                            <Button
                                type="submit"
                                className="w-fit h-1 mx-auto flex p-5 text-white text-xl cursor-pointer
                                           font-semibold rounded-xl shadow-lg hover:shadow-xl
                                           transition-all duration-200 transform hover:scale-[1.02]
                                           disabled:opacity-50 disabled:cursor-not-allowed
                                           disabled:transform-none"
                                tabIndex={4}
                                disabled={processing}>
                                Login In
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
