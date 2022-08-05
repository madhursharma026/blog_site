import EmailSubscribe from '../Footer/EmailSubscribe'
import FooterLast from '../Footer/FooterLast'
import FooterOptions from '../Footer/FooterOptions'
import PreviousNextBtn from '../Footer/PreviousNextBtn'
import ProgressBar from "react-progressbar-on-scroll";

export default function Footer() {
    return (
        <>
            <ProgressBar
                color="#BA3838"
                height={10}
                position="bottom"
            />
            <div className="data-container">
                <PreviousNextBtn />
                <EmailSubscribe />
                <FooterOptions />
            </div>
            <FooterLast />
        </>
    )
}
