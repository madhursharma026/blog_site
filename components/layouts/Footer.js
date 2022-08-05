import EmailSubscribe from '../Footer/EmailSubscribe'
import FooterCard from '../Footer/FooterCard'
import FooterLast from '../Footer/FooterLast'
import FooterOptions from '../Footer/FooterOptions'
import PreviousNextBtn from '../Footer/PreviousNextBtn'

export default function Footer() {
    return (
        <div style={{marginBottom:"68px"}}>
        <FooterCard />
            <div className="data-container">
                <PreviousNextBtn />
                <EmailSubscribe />
                <FooterOptions />
            </div>
            <FooterLast />
        </div>
    )
}
