import React from 'react'
import Announcment from '../components/Announcment'
import styled from 'styled-components'

const Container = styled.div`
display:flex;
flex-direction:column;
overflow:hidden;
padding:20px;
`

const H1 = styled.h1`
text-align:center;`
const P = styled.p``
const H3 = styled.h3``

const Terms = () => {
  return (
    <>
    <Announcment />
    <Container>
      <H1>Terms</H1>
      <H3>AKZEPTIERTE ZAHLUNGSMÖGLICHKEITEN</H3>
      <P>
       Zahlung per Kreditkarte (Visa, Mastercard, Maestro)
       Zahlung per PayPal 
       Zahlung per PayPal Express
       Zahlung per Sofort (Klarna)
       Apple Pay, Google Pay, Shopify Pay
      </P>
      <H3>WEITERE EINZELHEITEN ZUR ZAHLUNG</H3>
      <p>Bei Zahlung per Kreditkarte erfolgt die Belastung Ihres Kreditkartenkontos mit Vertragsschluss.
         Bei Fragen finden Sie unsere Kontaktdaten im Impressum.</p>
         <H3>Versand</H3>
         <P>    
         Wir versenden mit UPS und mit DHL
         Der Versand erfolgt lediglich von Dienstag bis Freitag – bitte beachten Sie, dass wir von Samstag bis Montag keine Pakete versenden.
         <b>VERSANDKOSTEN</b>
         <b>LIEFERUNGEN IM INLAND (DEUTSCHLAND):</b>
           Wir berechnen die Versandkosten nach dem Bestellwert (Brutto Warenwert):
           Warenwert bis 70,00 € = 6,95 € mit UPS (ab 70€ versandkostenfrei)
            Warenwert bis 70,00 € = 7,95 € mit DHL (ab 70€ versandkostenfrei)
          </P>
         <H3>LIEFERFRISTEN</H3>
          <P>Soweit im jeweiligen Angebot keine andere Frist angegeben ist, erfolgt die Lieferung der Ware im Inland (Deutschland) innerhalb von 4 - 5 Tagen, bei Auslandslieferungen innerhalb von 4 - 5 Tagen nach Vertragsschluss (bei vereinbarter Vorauszahlung nach dem Zeitpunkt Ihrer Zahlungsanweisung).
Beachten Sie, dass an Sonn- und Feiertagen keine Zustellung erfolgt.
          Haben Sie Artikel mit unterschiedlichen Lieferzeiten bestellt, versenden wir die Ware in einer gemeinsamen Sendung, sofern wir keine abweichenden Vereinbarungen mit Ihnen getroffen haben.Die Lieferzeit bestimmt sich in diesem Fall nach dem Artikel mit der längsten Lieferzeit den Sie bestellt haben.</P>
         </Container>
    </>
    
  )
}

export default Terms