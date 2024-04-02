
import BasicBreadcrumbs from '../components/Breadcrumbs'
import ContactForm from '../components/ContactForm'
import EmailSignUp from '../components/EmailSignUp'

export default function Contact() {
    return (
        <>
            <BasicBreadcrumbs
                first="Home"
                last="Contact"
            />
            <ContactForm />
            <EmailSignUp />
        </>
    )
}
