import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Loader2 } from 'lucide-react';
import { useEffect, useState, useTransition } from 'react';
import { router } from '@inertiajs/react';
import { z } from 'zod';
import { socialMediaFormSchema } from '@/types/forms';
import { GeneralProps, inputFields, SocialMediaFormData } from '@/types/forms/social-media-form.types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'General',
        href: route('general.index'),
    },
];

const General = ({ generalSettings }: GeneralProps) => {
    const [errors, setErrors] = useState<Partial<Record<keyof SocialMediaFormData, string>>>({});
    const [isPending, startTransition] = useTransition();

    const [formData, setFormData] = useState<SocialMediaFormData>(
        generalSettings || {
            facebook: '',
            instagram: '',
            youtube: '',
            twitter: '',
            email: '',
            primaryPhone: '',
            secondaryPhone: '',
        }
    );

    useEffect(() => {
        if (generalSettings) {
            setFormData(generalSettings);
        }
    }, [generalSettings]);

    const handleChange = (id: keyof z.infer<typeof socialMediaFormSchema>, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
        validateField(id, value);
    };

    const validateField = (id: keyof z.infer<typeof socialMediaFormSchema>, value: string) => {
        const fieldSchema = z.object({ [id]: socialMediaFormSchema.shape[id] });

        try {
            fieldSchema.parse({ [id]: value });

            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[id];
                return newErrors;
            });

            return true;
        } catch (error) {
            if (error instanceof z.ZodError) {
                setErrors((prev) => ({
                    ...prev,
                    [id]: error.errors[0].message,
                }));
            }
            return false;
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        try {
            socialMediaFormSchema.parse(formData);
            startTransition(() => {
                router.post(route('general.store'), formData, {
                    preserveScroll: true,
                    preserveState: true,
                    onSuccess: () => {
                        //console.log('Form submitted successfully');
                    },
                    onError: (formErrors) => {
                        setErrors(formErrors);
                    },
                });
            });
        } catch (error) {
            if (error instanceof z.ZodError) {
                const formattedErrors = error.errors.reduce((acc, curr) => {
                    const key = curr.path[0] as keyof z.infer<typeof socialMediaFormSchema>;
                    acc[key] = curr.message;
                    return acc;
                }, {} as Record<keyof z.infer<typeof socialMediaFormSchema>, string>);

                setErrors(formattedErrors);
            }
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="General Settings" />
            <div className="container mx-auto w-fit mt-8 flex flex-col">
                <form onSubmit={handleSubmit} className="flex flex-col">
                    {inputFields.map((field) => {
                        const Icon = field.icon;
                        return (
                            <div key={field.id}
                                className="mb-4">
                                <div className="relative">
                                    <div className={`
                    input bg-white border-2 rounded-2xl w-[30vw] h-12
                    ${errors[field.id] ? 'border-red-500' : 'border-black'}
                  `}>
                                        <Icon size={36} />
                                        <input
                                            id={field.id}
                                            type={field.type}
                                            className="grow border-black focus:outline-none"
                                            placeholder={field.placeholder}
                                            value={formData[field.id]}
                                            onChange={(e) => handleChange(field.id, e.target.value)}
                                            onBlur={(e) => validateField(field.id, e.target.value)}
                                            disabled={isPending}
                                        />
                                    </div>
                                </div>
                                {errors[field.id] && (
                                    <p className="mt-1 text-sm text-red-600">{errors[field.id]}</p>
                                )}
                            </div>
                        );
                    })}

                    <button
                        type="submit"
                        disabled={isPending || Object.keys(errors).length > 0}
                        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium
                       py-3 px-4 rounded-xl disabled:opacity-50 flex items-center
                       justify-center">
                        {isPending ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Saving...
                            </>
                        ) : (
                            'Save Information'
                        )}
                    </button>
                </form>
            </div>
        </AppLayout>
    );
};

export default General;
