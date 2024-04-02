
import HeroSlider from '../components/HeroSlider'
import JwelleryShowcase from '../components/JwelleryShowcase'
import ProductSlider from '../components/ProductSlider'
import Showcase from '../components/Showcase'
import Brand from '../components/Brand'
import JwelleryShow from '../components/JwelleryShow'
import EmailSignUp from '../components/EmailSignUp'

export default function Home() {
    return (
        <>
            <HeroSlider />
            <Showcase />
            <ProductSlider />
            <Brand />
            <JwelleryShowcase />
            <JwelleryShow />
            <EmailSignUp />
        </>
    )
}
