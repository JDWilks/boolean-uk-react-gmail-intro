// import flaticonWelcomeImage from './assets/images/flaticon-welcome-image.png'
// import backArrow from './assets/icons/back-arrow.png'
// //import downloadButton from './assets/icons/download-button.png'
// import rateStarButton from './assets/icons/rate-star-button.png'
// import rubbishButton from './assets/icons/rubbish-bin-delete-button.png'
import EmailToolBar from './EmailToolBar'
import EmailContent from './EmailContent'

function Main() {
  return (
    <main className="email-view">
      <EmailToolBar />
      <EmailContent />
    </main>
  )
}

export default Main
