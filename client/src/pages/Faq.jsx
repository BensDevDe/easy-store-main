import React from 'react'
import Announcment from '../components/Announcment'
import styled from 'styled-components'

const Container = styled.div`
display:flex;
flex-direction:column;
overflow:hidden;
padding:20px;
`

const H1 = styled.h1``
const P = styled.p``
const H3 = styled.h3``
const H4 = styled.h4``

const Faq = () => {
  return (
    <>
    <Announcment/>
     <Container>
     <H1>Cookies</H1>
     <H3>Was sind Cookies?</H3>
      <P>Cookies und ähnliche Technologien sind sehr kleine Textdokumente oder Codeteile, die oft einen eindeutigen Identifikationscode enthalten. Wenn Sie eine Website besuchen oder eine mobile Anwendung verwenden, bittet ein Computer Ihren Computer oder Ihr mobiles Gerät um die Erlaubnis, diese Datei auf Ihrem Computer oder mobilen Gerät zu speichern und Zugang zu Informationen zu erhalten. Informationen, die durch Cookies und ähnliche Technologien gesammelt werden, können das Datum und die Uhrzeit des Besuchs sowie die Art und Weise, wie Sie eine bestimmte Website oder mobile Anwendung nutzen, beinhalten.</P>
      <H3>Warum verwenden wir Cookies?</H3>
      <P>Cookies sorgen dafür, dass Sie während Ihres Besuchs in unserem Online-Shop eingeloggt bleiben, alle Artikel in Ihrem Warenkorb gespeichert bleiben, Sie sicher einkaufen können und die Website weiterhin reibungslos funktioniert. Die Cookies stellen auch sicher, dass wir sehen können, wie unsere Website genutzt wird und wie wir sie verbessern können. Darüber hinaus können je nach Ihren Präferenzen unsere eigenen Cookies verwendet werden, um Ihnen gezielte Werbung zu präsentieren, die Ihren persönlichen Interessen entspricht.</P>
      <H3>Welche Art von Cookies verwenden wir?</H3>
      <H4>Notwendige Cookies</H4>
      <P>Diese Cookies sind notwendig, damit die Website ordnungsgemäß funktioniert. Einige der folgenden Aktionen können mit diesen Cookies durchgeführt werden.- Speichern Sie Artikel in einem Warenkorb für Online-Käufe - Speichern Sie Ihre Cookie-Einstellungen für diese Website - Speichern von Spracheinstellungen - Melden Sie sich bei unserem Portal an. Wir müssen überprüfen, ob du eingeloggt bist.</P>
      <H4>Performance cookies</H4>
      <P>Diese Cookies werden verwendet, um statistische Informationen über die Nutzung unserer Website zu sammeln, auch Analyse-Cookies genannt. Wir verwenden diese Daten zur Leistungssteigerung und Webseitenoptimierung.</P>
      <H4>Funktionale Cookies</H4>
      <P>Diese Cookies ermöglichen mehr Funktionalität für unsere Website-Besucher. Diese Cookies können von unseren externen Dienstleistern oder unserer eigenen Website gesetzt werden. Die folgenden Funktionalitäten können aktiviert werden oder auch nicht, wenn Sie diese Kategorie akzeptieren.- Live-Chat-Dienste- Online-Videos ansehen- Social Media Sharing-Buttons- Melden Sie sich mit Social Media auf unserer Website an.</P>
      <H4>Werbung / Tracking Cookies</H4>
      <P>Diese Cookies werden von externen Werbepartnern gesetzt und dienen der Profilerstellung und Datenverfolgung über mehrere Websites hinweg. Wenn Sie diese Cookies akzeptieren, können wir unsere Werbung auf anderen Websites basierend auf Ihrem Benutzerprofil und Ihren Präferenzen anzeigen. Diese Cookies speichern auch Daten darüber, wie viele Besucher unsere Werbung gesehen oder angeklickt haben, um Werbekampagnen zu optimieren.</P>
     </Container>
    </>
   
  )
}

export default Faq