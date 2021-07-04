import Card from "./Card";

const AboutSection = () => {
    return (
        <section className="w-full bg-quinary">
            <div className="flex flex-col items-center w-full h-full bg-left-top bg-no-repeat bg-cover pt-106px pb-214px" style={{ backgroundImage: 'url("/favpng_heroes-of-the-storm-character 1.png")' }}>
                <h3 className="font-semibold text-center text-white font-jost text-50px w-735px">Professional Marketplace For Coaches and Gamers</h3>
                <p className="text-center text-white mt-15px text-18px w-728px">Battle against the rest of the world with your favorite crypto projects and characters in this blockchain is -enabled kart racing game available</p>
                <div className="flex items-center justify-center mt-81px space-x-40px">
                    <Card src="/destiny-2-story-heroic-e3-2017-05.png" alt="destiny-2-story-heroic-e3-2017-05" name="Kudrot Haldar" firstText="World" rank="#1" lastText="Pro Player" kills="125" ratio="25" winrate="95%" />
                    <Card src="/pubg.png" alt="pubg" name="Halda Joseph" firstText="World" rank="#1" lastText="Pro Player" kills="200" ratio="25" winrate="95%" />
                    <Card src="/NBA-Live-2004-PC.png" alt="NBA-Live-2004-PC" name="Unadkat Kuti" firstText="World" rank="#1" lastText="Pro Player" kills="175" ratio="25" winrate="95%" />
                    <Card src="/cod-warzone-system-requirements-900x506.png" alt="cod-warzone-system-requirements-900x506" name="Disa Patani" firstText="World" rank="#1" lastText="Pro Player" kills="111" ratio="25" winrate="95%" />
                </div>
            </div>
        </section>
    )
}

export default AboutSection;