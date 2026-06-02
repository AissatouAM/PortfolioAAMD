import "../styles/Contact.css"
import mail from "../assets/icons/mail.png"
import linkedin from "../assets/icons/linkdin.png"

function Contact(){
  const contacts = [
    {
      id: 1,
      icon: mail,
      coordonnee: "aissatouanne.diop@gmail.com"
    },

    {
      id: 2,
      icon: linkedin,
      coordonnee: "https://www.linkedin.com/in/aissatou-anne-marie-diop-b0b403400"
    }
  ]

  return(
    <div id="contact">
      <h1 className="h1">Let's work <span className="together">together !</span></h1>

      <div className="contacts">

        {contacts.map((contact) => (
          <div className="contact" key={contact.id}>
            <img className="icon" src={contact.icon} alt="icon" />
            <p className="coordonnee">{contact.coordonnee}</p>
          </div>
        ))}

      </div>

    </div>
  )
}

export default Contact