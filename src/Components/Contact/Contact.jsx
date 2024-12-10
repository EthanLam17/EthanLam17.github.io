
import './Contact.css'


const Contact = () => {



  return (
    <div className="Contact">
      <div>
        If you got to this point to learn about me, please reach out! I would love to get to know you :)
      </div>
						<p>Fill out the form below to send me an email</p>
							<div class="col-8 col-12-small">
								<form method="POST" action="https://formsubmit.co/ethanlam0@yahoo.com">
									<div class="row gtr-uniform gtr-50">
										<input type="hidden" name="_subject" value="Website response" />
										<div class="col-6 col-12-xsmall"><input type="text" name="name" id="name" placeholder="Name" required/></div>
										<div class="col-6 col-12-xsmall"><input type="text" name="company" id="company" placeholder="Company" required/></div>
										<div class="col-6 col-12-xsmall"><input type="email" name="email" id="email" placeholder="Email" required /></div>
										<div class="col-12"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
									</div>
									<ul class="actions">
										<li><input type="submit" value="Send Message" /></li>
									</ul>
								</form>
							</div>

    </div>
  )
}


export default Contact