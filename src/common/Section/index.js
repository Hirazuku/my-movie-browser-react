import { SectionGrid, SectionImage, SectionContent, SectionTitle, SectionYear, SectionTags, SectionTag, SectionDescription } from "./styled";
import poster from "../../images/image.jpg"

const Section = ({ title, body, extraHeaderContent }) => (

    <SectionGrid>
        <SectionImage src={poster} />
        <SectionContent>
            <SectionTitle>
                {title}
            </SectionTitle>
            <SectionYear>2009</SectionYear>
            <SectionTags>
                <SectionTag>Horror</SectionTag>
                <SectionTag>Thriller</SectionTag>
            </SectionTags>
            <SectionDescription>{body}{extraHeaderContent}</SectionDescription>
        </SectionContent>
    </SectionGrid>
)

export default Section;