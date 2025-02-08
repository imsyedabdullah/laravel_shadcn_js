import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
import { Link, useForm, usePage } from '@inertiajs/react';

export default function UserApiTokenForm({
    mustVerifyEmail,
    status,
    className = '',
}) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            api_key: user?.api_key || "",
        });

    const submit = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    API Key
                </h2>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="api_key" value="API Key for this user" />

                    <TextInput
                        id="api_key"
                        className="mt-1 block w-full"
                        value={data.api_key}
                        onChange={(e) => setData('api_key', e.target.value)}
                        required
                        isFocused
                        autoComplete="api_key"
						disabled
                    />

                    <InputError className="mt-2" message={errors.api_key} />
                </div>
            </form>
        </section>
    );
}
