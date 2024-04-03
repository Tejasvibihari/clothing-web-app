
import BasicBreadcrumbs from '../components/Breadcrumbs'
import ContactForm from '../components/ContactForm'
import EmailSignUp from '../components/EmailSignUp'
import Map from '../components/Map'

export default function Contact() {
    return (
        <>

            <BasicBreadcrumbs
                first="Home"
                last="Contact"
            />


            <ContactForm />
            <Map />
            <EmailSignUp />

        </>
    )
}
