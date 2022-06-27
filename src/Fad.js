import { useState } from 'react';

const fadData = [
    {
        fact: `FOOD CRISIS`,
        description: ` In 20 years, 40% less food is expected to be produced for 9.3 billion
        people. Poor soil leads to poor nutritional value. Today's fruits and
        vegetables already contain 90% fewer nutrients. 2 billion people suffer
        from nutritional deficiencies leading to multitude of diseases.`,
    },
    {
        fact: `WATER SCARCITY`,
        description: `Depleted soils cannot absorb and regulate water flows. Lack of water
        retention leads to water scarcity, droughts & floods. Organic matter can
        hold up to 90% of its weight in water and release it slowly over time.
        This is a big help in drought-prone areas.`,
    },
    {
        fact: `LOSS OF BIO-DIVERSITY`,
        description: `Scientists say that around 27000 species of life forms are becoming
        extinct every year due to loss of habitat. The crisis has reached a
        point where 80% of the insect biomass has gone. Loss of biodiversity
        further disrupts the soil habitat and prevents soil regeneration.`,
    },
    {
        fact: `CLIMATE CHANGE`,
        description: `Carbon stored in soil is 3x that in living plants, and 2x that in the
        atmosphere, which means soil is crucial for carbon sequestration. If the
        world's soils are not revitalized, they could release 850 billion tonnes
        of carbon dioxide into the atmosphere contributing to climate change.
        This is more than all of humanity's emissions in the last 30 years
        combined.`,
    },
    {
        fact: `LOSS OF LIVELIHOOD`,
        description: `Thousands of farmers are committing suicide due to depletion in soil.
        74% of the poor are directly affected by land degradation globally. It
        is estimated that soil extinction is costing the world up to US$ 10.6
        trillion every year.`,
    },
    {
        fact: `CONFLICT AND MIGRATION`,
        description: `Population growth, and food and water scarcity could cause over 1
        billion to migrate to other regions and countries by 2050. Land issues
        have played a significant role in over 90% of major wars and conflicts
        in Africa since 1990. From the French Revolution to the Arab Spring,
        high food prices have been cited as a factor behind mass protest
        movements.`,
    },
    {
        fact: `HOW CAN I SUPPORT?`,
        description: (
            <>
                You can do this right here 👉
                <a
                    className="button"
                    href="https://europe.consciousplanet.org/earth-buddies/"
                    target="_blank"
                >I want to save soil</a
                >
            </>
        )
    }
]

const FactContainer = ({
    fact,
    openFact,
    description,
    setOpenFact,
    isOpen,
}) => {
    return (
        <div
            onClick={() =>
                setOpenFact(fact === openFact ? null : description)
            }
            className="fact-container"
        >
            <div
                className={`fact chevron ${fact === openFact ? "buttom" : "right"
                    }`}
            >
                {fact}
            </div>
            {isOpen && <div className="description">{description}</div>}
        </div>
    )
}

const Fad = () => {
    const [openFact, setOpenFact] = useState(null)
    return (
        <section id="learn-more">
            <div className="learn-more">
                <a className="button"
                    href="https://consciousplanet.org/"
                    target="_blank"
                >
                    LEARN MORE
                </a>
            </div>
            {/* <div className="toggle-btn">
                <button className="button" id="toggle-all" onclick="openAll()">
                    OPEN ALL
                </button>
            </div> */}

            <div id="fad" className="fad">
                {fadData.map((item) => (
                    <FactContainer
                        key={item.fact}
                        fact={item.fact}
                        description={item.description}
                        setOpenFact={setOpenFact}
                        isOpen={openFact === item.fact}
                        openFact={openFact}
                    />
                ))}
            </div>
        </section>
    )
}
export default Fad;