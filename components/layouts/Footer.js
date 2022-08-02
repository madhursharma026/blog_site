import Link from 'next/link'
import EmailSubscribe from '../Footer/EmailSubscribe'
import FooterLast from '../Footer/FooterLast'
import FooterOptions from '../Footer/FooterOptions'
import PreviousNextBtn from '../Footer/PreviousNextBtn'

export default function Footer() {
    return (
        <>
        <div className="data-container">
            <PreviousNextBtn />
            <EmailSubscribe />
            <FooterOptions />
        </div>
        <FooterLast />
        </>
    )
}
