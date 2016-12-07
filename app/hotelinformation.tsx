import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Container from './views/common/Container';
import CoverPage from './views/wedding/CoverPage';
import WeddingHeader from './views/wedding/WeddingHeader';
import { SectionTitle, Section, SectionBody } from './views/common/Section';
import './index.css';

ReactDOM.render(
  <Container>
      <WeddingHeader />
      <CoverPage className="wedding_hotelInfo" showOverlay={true}>
        <SectionTitle className="wedding_title--hotel-info">Hotel Information</SectionTitle>
      </CoverPage>
      <Section className="wedding_text_section">
        <SectionTitle>Now Amber</SectionTitle>
        <SectionBody>
          <p>
            We chose to have a destination wedding in Puerto Vallarta, Mexico, because we wanted a location that a majority of our guests had not been to yet—that way this trip could truly feel like a vacation!
We have partnered up with DestinationWeddings.com and have reserved a block of rooms at the all-inclusive Now Amber Resort to try to make this as easy and stress-free as possible for all of our guests attending.
We chose DestinationWeddings.com because the site allows for guests to pay for their hotel stay on a payment plan, so for those on a tight budget (who isn’t?), it makes it possible to attend our wedding.
          </p>
          <p>
Jenny Ruano is the name of our wedding specialist who will be taking care of travel accommodations. She has truly been really great to work with, so I trust that all of you are in good hands with her.
Now that we’ve got that out of the way, the next question is: how do you book?
          </p>
          <h3>Hotel Booking Information</h3>
          <p>
            Visit <a href="http://www.destinationweddings.com/" target="_blank">DestinationWeddings.com</a> <br />
            Click on <span>ARE YOU A WEDDING GUEST? </span><a href="http://www.destinationweddings.com/Weddings/Guests/AttendaWedding.aspx" target="_blank">GET STARTED.</a> <br/>
          </p>
          <p>
            Enter the following information:<br />
            Last Name of Couple: <strong>Medina or Fernandez</strong> (either of our last names will work) <br/>
            <strong>Passcode: MJ1142017</strong> <br/>
          </p>
          <p>
            Register and find all the hotel and booking information at your fingertips!
          </p>
          <p>
            We ask that you please use this site to book your hotel room as we have a room rate/block guarantee. :) <br />

            If you have any questions, feel free to reach out to either one of us: <a href="mailto:mjfiesta2forever@gmail.com?Subject=Wedding%20Questions" target="_top"> mjfiesta2forever@gmail.com </a>
            ❤️
          </p>
          <h3>Flight Booking Information</h3>
          <p>
            Airfare can be booked separately. <br />
            If interested, our wedding specialist, <a href="mailto:jruano@destinationweddings.com">Jenny Ruano</a> can help with booking your airfare. <br />
            She can be contacted by email at: <a href="mailto:jruano@destinationweddings.com">jruano@destinationweddings.com</a> or by phone at <a href="tel:+9185162327">918-516-2327</a>.
          </p>
         
        </SectionBody>
      </Section>
    </Container>
  ,document.getElementById('app'));