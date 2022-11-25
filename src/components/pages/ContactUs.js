import React,{useState} from 'react' 
const ContactUs = () => {
    const [name,setName]=useState(""); 
    const [email,setEmail]=useState(""); 
    const [subject,setSubject]=useState(""); 
    const [message,setMessage]=useState("");
    const [loading, setLoading] = useState(false);

    function handleSubmit(event) {

        event.preventDefault();
        console.log("name",name);
    
      }
    return (
        <section className="ftco-section">
            <div className="container">
                {/* <div className="row justify-content-center">
                    <div className="col-md-6 text-center mt-4">
                        <h2 className="heading-section">Contact</h2>
                    </div>
                </div> */}
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="wrapper">
                            <div className="row no-gutters">
                                <div className="col-lg-12 col-md-12 order-md-last d-flex align-items-stretch">
                                    <div className="contact-wrap w-100 p-md-5 p-4">
                                        <h3 className="mb-4">Get in touch</h3>
                                        <div id="form-message-warning" className="mb-4"></div>
                                        <div id="form-message-success" className="mb-4">
                                            Your message was sent, thank you!
                                        </div>
                                        <form method="POST" id="contactForm" name="contactForm" className="contactForm" onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="label" htmlFor="name">Full Name</label>
                                                        <input type="text" className="form-control" name="name" id="name" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="label" htmlFor="email">Email Address</label>
                                                        <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label className="label" htmlFor="subject">Subject</label>
                                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label className="label" htmlFor="#">Message</label>
                                                        <textarea name="message" className="form-control" id="message" cols="30" rows="4" placeholder="Message"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="submit" className="btn btn-primary"  value={loading ? 'Send...' : 'Send Message'} disabled={loading}/>
                                                        <div className="submitting"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ContactUs;