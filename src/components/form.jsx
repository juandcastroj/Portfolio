import { useState } from 'react';

export function Form() {

    const [form, setForm] = useState({ firstName : "", lastName : "",  email : "", message : "", })
    const { firstName, lastName, email, message} = form;
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit click ");  
            // fast validation
            if (!firstName.trim() || !lastName.trim() || !email.trim() || !message.trim()) {
              console.log("campos vacíos");
              setError(true);
              return;
            } else {
              setError(false);
            }

      console.log(firstName, lastName, email, message);   
        setForm({ firstName : "",  lastName : "", email : "",  message : "",})
    }

    const handleChange = (e) => {
      setForm({
        ...form, 
        [e.target.name]: e.target.value,
      })
    }

    const ShowError = () => (
      <div className="mx-6 text-red-600 my-2">All fields are mandatory</div>
    );


    return (
        <>
            <form onSubmit={handleSubmit} className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48 font-mono">
                <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900 dark:text-gray-200">
                        First name
                        </label>
                        <div className="mt-2.5">
                        <input
                            id="first-name"
                            name="firstName"
                            type="text"
                            autoComplete="given-name"
                            value={firstName}
                            onChange={handleChange}
                            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                        />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900 dark:text-gray-200">
                        Last name
                        </label>
                        <div className="mt-2.5">
                        <input
                            id="last-name"
                            name="lastName"
                            type="text"
                            autoComplete="family-name"
                            value={lastName}
                            onChange={handleChange}
                            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                        />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900 dark:text-gray-200">
                        Email
                        </label>
                        <div className="mt-2.5">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            value={email}
                            onChange={handleChange}
                            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                        />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900 dark:text-gray-200">
                        Message
                        </label>
                        <div className="mt-2.5">
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            value={message}
                            onChange={handleChange}
                            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                        />
                        </div>
                    </div>
                    </div>
                    <div className="mt-8 flex justify-end">

                    {error && <ShowError/>}  
                    
                    <button
                        type="submit"
                        className="rounded-md bg-green-900 dark:bg-blue-200 px-3.5 py-2.5 text-center text-sm font-semibold text-white dark:text-gray-800 shadow-sm hover:bg-green-700 dark:hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Send message
                    </button>
                    </div>
                </div>
            </form>
        </>
    )
}