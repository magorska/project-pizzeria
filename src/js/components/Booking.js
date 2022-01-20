import { templates, select } from '../settings.js';
import AmountWidget from './AmountWidget.js';
import DatePicker from './DatePucker.js';
import HourPicker from './HourPicker.js';

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

    thisBooking.dom.peopleAmount = thisBooking.dom.wrapper.querySelector(select.booking.peopleAmount);
    thisBooking.dom.hoursAmount = thisBooking.dom.wrapper.querySelector(select.booking.hoursAmount);

    thisBooking.dom.datePicker = thisBooking.dom.wrapper.querySelector(select.widgets.datePicker.wrapper);
    thisBooking.dom.hourPicker = thisBooking.dom.wrapper.querySelector(select.widgets.hourPicker.wrapper);

  }

  initWidgets() {
    const thisBooking = this;

    thisBooking.dom.peopleAmount = new AmountWidget(thisBooking.dom.peopleAmount);
    thisBooking.dom.hoursAmount = new AmountWidget(thisBooking.dom.hoursAmount);

    thisBooking.dom.datePicker = new DatePicker(thisBooking.dom.datePicker);
    thisBooking.dom.hourPicker = new HourPicker(thisBooking.dom.hourPicker);

  }

}

export default Booking;