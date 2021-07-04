import Image from "next/image";

const Card = ({ src, alt, name, firstText, rank, lastText, kills, ratio, winrate }) => {
    return (
        <div>
            <Image
                className="rounded-t-10px"
                src={src}
                width={370}
                height={268}
                objectFit="contain"
                alt={alt}
            />
            <div className="-mt-1.5 text-center text-white rounded-b-10px pt-26px pb-33px bg-gradient-to-b from-septenary to-octonary">
                <h4 className="font-medium text-30px">{name}</h4>
                <hr className="w-7/12 mx-auto mt-8px" />
                <h5 className="mt-5px text-20pxl">{firstText} <span className="font-medium text-25px">{rank}</span> {lastText}</h5>
                <p className="mt-6px text-16px"><span className="font-medium text-25pxl">{kills}</span> Kills | <span className="font-medium text-28px">{ratio}</span> K/D ratio | <span className="font-medium text-25pxl">{winrate}</span> Winrate</p>
                <button className="font-medium border-2 border-white text-20px hover:bg-tertiary hover:border-tertiary rounded-5px mt-30px w-249px h-60px">Select</button>
            </div>
        </div>
    )
}

export default Card;