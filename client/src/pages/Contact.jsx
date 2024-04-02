
import BasicBreadcrumbs from '../components/Breadcrumbs'
import ContactForm from '../components/ContactForm'
import EmailSignUp from '../components/EmailSignUp'
import Map from '../components/Map'

export default function Contact() {
    return (
        <>
            <div className='bg-gray-300'>
                <BasicBreadcrumbs
                    first="Home"
                    last="Contact"
                />
            </div>

            <ContactForm />
            <Map />
            <EmailSignUp />

        </>
    )
}
