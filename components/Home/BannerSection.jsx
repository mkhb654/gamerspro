import Link from "next/link";

const BannerSection = () => {
    return (
        <section className="w-full overflow-x-hidden bg-center bg-no-repeat bg-cover h-959px" style={{ backgroundImage: 'url("/TK_Splash_1_2560x1440 1.jpg")' }}>
            <div className="flex flex-col items-center w-full h-full text-center bg-black bg-opacity-70">
                <div className="text-white font-jost text-80px xl:w-1258px pt-266px">
                    <span className="text-secondary">Find Professional Coaches</span> || <span className="text-tertiary">Earn from Live Tournament</span> || <span className="text-quaternary">NFT Exchange From In Play Wins</span>.
                </div>
                <p className="text-white text-30px w-957px mt-38px mb-46px">Publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual</p>
                <Link href="/">
                    <a className="flex items-center justify-center font-medium text-white h-70px w-232px text-20px bg-primary rounded-5px">Get Started</a>
                </Link>
            </div>
        </section>
    )
}

export default BannerSection;