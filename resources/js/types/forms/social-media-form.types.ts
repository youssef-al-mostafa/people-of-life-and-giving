import { z } from 'zod';
import { LucideIcon } from 'lucide-react';
import { Facebook, Instagram, Youtube, Mail, Phone, Twitter } from 'lucide-react';

export const socialMediaFormSchema = z.object({
    facebook: z.string().url("Please enter a valid Facebook URL").optional().or(z.literal("")),
    instagram: z.string().url("Please enter a valid Instagram URL").optional().or(z.literal("")),
    youtube: z.string().url("Please enter a valid YouTube URL").optional().or(z.literal("")),
    twitter: z.string().url("Please enter a valid X (Twitter) URL").optional().or(z.literal("")),
    email: z.string().email("Please enter a valid email address").optional().or(z.literal("")),
    primaryPhone: z.string().regex(
        /^\+[0-9]{10,15}$/,
        "Phone must start with + and contain 10-15 digits"
    ).optional().or(z.literal("")),
    secondaryPhone: z.string().regex(
        /^\+[0-9]{10,15}$/,
        "Phone must start with + and contain 10-15 digits"
    ).optional().or(z.literal("")),
});

export interface GeneralProps {
    generalSettings: SocialMediaFormData;
}

export interface SocialMediaInputField {
    id: keyof SocialMediaFormData;
    icon: LucideIcon;
    type: 'url' | 'email' | 'tel';
    placeholder: string;
    required?: boolean;
}

export interface SocialMediaFormResponse {
    success: boolean;
    message: string;
    data?: SocialMediaFormData;
    errors?: SocialMediaFormErrors;
}

export interface SocialMediaFormProps {
    initialData?: Partial<SocialMediaFormData>;
    onSuccess?: (data: SocialMediaFormData) => void;
    onError?: (errors: SocialMediaFormErrors) => void;
    readonly?: boolean;
}
export type SocialMediaFormData = z.infer<typeof socialMediaFormSchema>;
export type SocialMediaFormErrors = Partial<Record<keyof SocialMediaFormData, string>>;
export type FormSubmissionState = 'idle' | 'submitting' | 'success' | 'error';

export const inputFields: SocialMediaInputField[] = [
    {
      id: 'facebook',
      icon: Facebook,
      type: 'url',
      placeholder: 'Facebook Account URL',
      required : false ,
    },
    {
      id: 'instagram',
      icon: Instagram,
      type: 'url',
      placeholder: 'Instagram Account URL',
    },
    {
      id: 'youtube',
      icon: Youtube,
      type: 'url',
      placeholder: 'YouTube Channel URL',
    },
    {
      id: 'twitter',
      icon: Twitter,
      type: 'url',
      placeholder: 'X (Twitter) Account URL',
    },
    {
      id: 'email',
      icon: Mail,
      type: 'email',
      placeholder: 'Email Address',
      required : false
    },
    {
      id: 'primaryPhone',
      icon: Phone,
      type: 'tel',
      placeholder: 'Primary Phone Number (+1234567890)',
      required : false
    },
    {
      id: 'secondaryPhone',
      icon: Phone,
      type: 'tel',
      placeholder: 'Secondary Phone Number (+1234567890)',
    },
  ];
