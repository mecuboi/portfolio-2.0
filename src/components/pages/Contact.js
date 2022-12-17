import React, { useState } from 'react';


function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [textBoxName, setTextBoxName] = useState('bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5')
    const [textBoxEmail, setTextBoxEmail] = useState('bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5')
    const [textBoxMessage, setTextBoxMessage] = useState('bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5')
    const [placeholderName, setPlaceholderName] = useState('')
    // const [placeholderEmail, setPlaceholderEmail] = useState('')
    const [placeholderMessage, setPlaceholderMessage] = useState('')
    const validEmail = document.querySelector('#valid-email')
    const title = document.querySelector('#title')

function validateEmail(text) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(text)) {
        return true
    } else {
        return false
    }
}

function handleClick(e) {
    e.preventDefault();

    if (name && validateEmail(email) && message){
        setName('')
        setEmail('')
        setMessage('')
        title.textContent='Message have been sent! Thank you for reaching out!'
        return
    } 

    if (!name) {
        setTextBoxName('bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5')
        setPlaceholderName('Please fill your name here')
    }

    if (!validateEmail(email)){
        setTextBoxEmail('bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5')
      
    }

    if (!message) {
        setTextBoxMessage('bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5')
        setPlaceholderMessage('Please fill your message here')
    }
    

}

    function handleChange(e) {
        if (e.target.id === 'name') {
            setName(e.target.value)
        } else if (e.target.id === 'email') {
            setEmail(e.target.value)
            if (validateEmail(e.target.value)) {
                console.log('valid email')
                setTextBoxEmail('bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5')
                validEmail.classList.add('hidden')
            } else {
                setTextBoxEmail('bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5')
                validEmail.classList.remove('hidden')
            }
        } else {
            setMessage(e.target.value)
        }  
    }

    function handleBlur(e) {
        if(e.target.id === "name" && !e.target.value) {
            setTextBoxName('bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5')
            setPlaceholderName('Please fill your name here')
        } else if(e.target.id === "name" && e.target.value) {
            setTextBoxName('bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5')
        }
        
        if (e.target.id === "email" && !e.target.value) {
            setTextBoxEmail('bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5')
            // setPlaceholderEmail('Please fill in your email here')
            validEmail.classList.remove('hidden')
        } else if(e.target.id === "email" && e.target.value && validateEmail(e.target.value)) {
            setTextBoxEmail('bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5')
            validEmail.classList.add('hidden')
        }
        
        if (e.target.id === "message" && !e.target.value) {
            setTextBoxMessage('bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5')
            setPlaceholderMessage('Please enter your message here')
        } else if(e.target.id === "message" && e.target.value) {
            setTextBoxMessage('bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5')
        }
    }


    return (
        <div className="grid grid-cols-12">
            <h3 className="col-span-12 text-center font-medium text-gray-700 mt-5 mb-2" id="title">Fill in the form below to reach out to me:</h3>
            <form className="col-span-12 m-2 p-2 md:col-start-4 md:col-end-10">
                <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
                    <input
                        type="text"
                        id="name"
                        className={textBoxName}
                        required
                        value={name}
                        placeholder={placeholderName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                    <input
                        type="email"
                        id="email"
                        className={textBoxEmail}
                        placeholder={"email@email.com"}
                        required
                        value={email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500 hidden" id="valid-email">Please enter a valid email address</p>
                </div>

                <div className="mb-6">
                    <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 ">Message</label>
                    <textarea
                        type="text"
                        id="message"
                        className= {`h-48 ${textBoxMessage}`}
                        value={message}
                        placeholder={placeholderMessage}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <button
                    type="submit"
                    className="text-white bg-yellow-500 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                onClick={handleClick}
                >
                    Submit</button>

            </form>
            
        </div>
    );
}

export default Contact