import { ActiveTag } from 'active-tag'

export tag Booking < ActiveTag
  prop fullName
  prop mobile
  prop date
  prop location
  prop services

  validates fullName: { presence: true }
  validates mobile: { pattern: /^\d{10}$/ }
  validates date: { presence: true }
  validates location: { presence: true }
  validates services: { length: { in:  [1,3] }}

  WEDDING = [
    { id: 1, name: 'Prelude', price: 300.00 }
    { id: 2, name: 'Marches', price: 300.00 }
    { id: 3, name: 'Ceremony', price: 300.00 }
    { id: 4, name: 'Prelude & Marches', price: 400.00 }
    { id: 5, name: 'Prelude & Ceremony', price: 400.00 }
    { id: 6, name: 'Marches & Ceremony', price: 400.00 }
    { id: 7, name: 'Prelude, Marches & Ceremony', price: 450.00 }
  ]

  RECEPTION = [
    { id: 8, name: '1 Hour Reception', price: 300.00 }
    { id: 9, name: '2 Hour Reception', price: 500.00 }
    { id: 10, name: '3 Hour Reception', price: 625.00 }
    { id: 11, name: '4 Hour Reception', price: 775.00 }
  ]

  BOTH = [
    { id: 12, name: 'Wedding Service & 1 Hour Reception', price: 600.00 }
    { id: 13, name: 'Wedding Service & 2 Hour Reception', price: 750.00 }
    { id: 14, name: 'Wedding Service & 3 Hour Reception', price: 850.00 }
  ]

  def service_options
    WEDDING.concat RECEPTION, BOTH

  def onSaveSuccess
    submitting do
      console.log 'booking saved'

  def onSaveFailure
    submitting do
      markFieldErrors

  def markFieldErrors
    for field, array of errors
      document.querySelector(".{field}"):classList.add('error')

  def clearFieldErrors
    const errorInputs = document.querySelectorAll('.error')
    for el in errorInputs
      el:classList.remove('error')

  def submitting block
    const contactButton = @bookNow.dom:classList
    clearFieldErrors
    contactButton.add('loading')
    block()
    contactButton.remove('loading')

  def render
    <self>
      <div.ui.vertical.stripe.segment#booking>
        <div.ui.container>
          <h3.ui.horizontal.divider.header>
            <i.calendar.icon>
            "Contact"
            
          <form.ui.large.form method='post' name='booking' action="/?p=thanks" :submit.save>
            <input type='hidden' name='form-name' value='booking'>
            <div.three.fields>
              <div.required.fullName.field>
                <label> "Your Full Name"
                <input#fullName[fullName] type='text' name='full_name' maxlength='30' value=''>
              <div.required.mobile.field>
                <label> "Mobile phone"
                <input#mobile[mobile] type='tel' name='mobile' maxlength='10' value=''>
              <div.required.date.field>
                <label> "Date of Event"
                <input.ui#eventDate[date] type='text' name='event_date' value=''>
            <div.two.fields>
              <div.required.location.field>
                <label> "Event Location"
                <input#eventLocation[location] type='text' name='event_location' maxlength='100' value=''>
              <div.required.services.field>
                <label> "Services"
                <select.ui.dropdown#services[services] multiple name='services'>
                  for service in service_options
                    <option> "${service:price} - {service:name}"
            <div.ui.segment>
              <div.inline>
                <label for="contract_accepted">
                  <span> "You can download a copy of our "
                  <a href='fluteviolin_contract.pdf' target='_blank'> "contract here."
            
            <div.ui.three.column.stackable.centered.grid>
              <div.column>
                <button.massive.fluid.ui.primary.button#bookNow@bookNow type='submit'> "Contact"