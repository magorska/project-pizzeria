import { templates, select } from '../settings.js';
import AmountWidget from './AmountWidget.js';

class Booking {
  constructor(element) {
    const thisBooking = this;

    thisBooking.render(element);
    thisBooking.initWidgets();

  }

  render(element) {
    const thisBooking = this;
    const generatedHTML = templates.bookingWidget(element);
    thisBooking.dom = {};
    thisBooking.dom.wrapper = document.querySelector(select.containerOf.booking);
    thisBooking.dom.wrapper.innerHTML = generatedHTML;

    thisBooking.dom.peopleAmount = document.querySelector(select.booking.peopleAmount);
    thisBooking.dom.hoursAmount = document.querySelector(select.booking.hoursAmount);

  }

  initWidgets() {
    const thisBooking = this;

    thisBooking.dom.peopleAmount = new AmountWidget(thisBooking.dom.peopleAmount);
    thisBooking.dom.hoursAmount = new AmountWidget(thisBooking.dom.hoursAmount);

  }

}

export default Booking;