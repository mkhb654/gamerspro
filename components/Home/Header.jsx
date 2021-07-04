import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="absolute top-0 left-0 right-0 z-40 px-151px py-14px">
            <div className="flex items-center justify-between h-110px">
                <Image
                    src="/logo.svg"
                    width={128}
                    height={110}
                    objectFit="contain"
                    alt="logo"
                />
                <div className="items-center hidden space-x-50px xl:flex">
                    <ul className="flex items-center justify-center font-medium text-white text-20px space-x-46px">
                        <li><Link href="/"><a>Home</a></Link></li>
                        <li><Link href="/"><a>RoadMaps</a></Link></li>
                        <li><Link href="/"><a>Games</a></Link></li>
                        <li><Link href="/"><a>Rules</a></Link></li>
                        <li><Link href="/"><a>Wallet</a></Link></li>
                        <li><Link href="/"><a>Stack</a></Link></li>
                    </ul>
                    <Link href="/">
                        <a className="flex items-center justify-center font-medium text-white h-60px w-186px text-20px bg-primary rounded-5px">Contact Us</a>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header;