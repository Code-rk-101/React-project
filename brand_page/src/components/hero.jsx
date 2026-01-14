import HeroContent from "./heroContent";
import HeroImage from "./heroImage";

const Hero = ()=>
{
    return (
        <>
            <main className="hero">
                <HeroContent></HeroContent>
                <HeroImage></HeroImage>
            </main>
        </>
    );
}
export default Hero;