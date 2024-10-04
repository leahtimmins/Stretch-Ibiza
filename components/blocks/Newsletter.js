'use client';
import Link from 'next/link';

const Newsletter = ({className}) => {
    return (
        <div className={`mb-2 ${className}`}>
            <h4 className="mb-4 font-bold font-glacialBold">Sign up for our newsletter</h4>
            <label htmlFor="email" className="block text-sm font-medium font-glacialRegular leading-6 text-gray-900">
                Email address
            </label>
            <div className="mt-2">
                <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                aria-describedby="email-description"
                className="block font-glacialRegular w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
            <p id="email-description" className="mt-2 text-sm text-gray-500 font-glacialRegular">
                Review our <Link href="/pages/privacy" title="Privacy policy document" className="underline">privacy policy</Link> 
            </p>
        </div>
    )
}

export default Newsletter;