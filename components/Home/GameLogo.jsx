import Image from "next/image";
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/outline';

const GameLogo = () => {
    return (
        <section className="flex items-center justify-between bg-quinary px-90px pt-150px pb-73px space-x-62.4px">
            <ChevronLeftIcon className="text-white w-90px h-90px" />
            <div className="flex items-center justify-between flex-grow">
                <Image
                    src="/pubg-1 1.png"
                    width={130}
                    height={76}
                    objectFit="contain"
                    alt="pubg"
                />
                <Image
                    src="/download-destiny-logo-3400 1.png"
                    width={316}
                    height={73}
                    objectFit="contain"
                    alt="download-destiny-logo-3400 1"
                />
                <Image
                    src="/escape_from_tarkov_PNG17 1.png"
                    width={210}
                    height={94}
                    objectFit="contain"
                    alt="escape_from_tarkov_PNG17 1"
                />
                <Image
                    src="/apex-legends-logo 1.png"
                    width={122}
                    height={92}
                    objectFit="contain"
                    alt="apex-legends-logo 1"
                />
                <Image
                    src="/call-of-duty 1.png"
                    width={255}
                    height={50}
                    objectFit="contain"
                    alt="call_of_duty"
                />
            </div>
            <ChevronRightIcon className="w-90px h-90px text-tertiary" />
        </section>
    )
}

export default GameLogo;