export tag Booking

  WEDDING = [
    { _id: 1, name: 'Prelude', price: 300.00 }
    { _id: 2, name: 'Marches', price: 300.00 }
    { _id: 3, name: 'Ceremony', price: 300.00 }
    { _id: 4, name: 'Prelude & Marches', price: 400.00 }
    { _id: 5, name: 'Prelude & Ceremony', price: 400.00 }
    { _id: 6, name: 'Marches & Ceremony', price: 400.00 }
    { _id: 7, name: 'Prelude, Marches & Ceremony', price: 450.00 }
  ]

  RECEPTION = [
    { _id: 8, name: '1 Hour Reception', price: 300.00 }
    { _id: 9, name: '2 Hour Reception', price: 500.00 }
    { _id: 10, name: '3 Hour Reception', price: 625.00 }
    { _id: 11, name: '4 Hour Reception', price: 775.00 }
  ]

  BOTH = [
    { _id: 12, name: 'Wedding Service & 1 Hour Reception', price: 600.00 }
    { _id: 13, name: 'Wedding Service & 2 Hour Reception', price: 750.00 }
    { _id: 14, name: 'Wedding Service & 3 Hour Reception', price: 850.00 }
  ]

  def services
    WEDDING.concat RECEPTION, BOTH

  def render
    <self>
      <div.ui.vertical.stripe.segment#booking>
        <div.ui.container>
          <h3.ui.horizontal.divider.header>
            <i.calendar.icon>
            "Contact"
            
          <div.ui.large.form>
            <div.three.fields>
              <div.required.full_name.field>
                <label> "Your Full Name"
                <input#full_name type='text' name='full_name' maxlength='30' value=''>
              <div.required.mobile.field>
                <label> "Mobile phone"
                <input#mobile type='tel' name='mobile' maxlength='10' value=''>
              <div.required.event_date.field>
                <label> "Date of Event"
                <input.ui#eventDate type='text' name='event_date' value=''>
            <div.two.fields>
              <div.required.event_location.field>
                <label> "Event Location"
                <input#event_location type='text' name='event_location' maxlength='100' value=''>
              <div.required.services.field>
                <label> "Services"
                <select.ui.dropdown#services multiple name='service_ids'>
                  for service in services
                    <option value="{service:price}"> "${service:price} - {service:name}"
            <div.ui.segment>
              <div.required.inline.contract_accepted.field>
                <div.ui.toggle.checkbox>
                  <input.hidden#contract_accepted type='checkbox' name='contract_accepted' checked=''>
                  <label for="contract_accepted">
                    <span> "I have read and agree to the terms of the"
                    <a href='fluteviolin_contract.pdf' target='_blank'> " contract"
            
            <div.ui.three.column.stackable.centered.grid>
              <div.column>
                <button.massive.fluid.ui.primary.button#book-now type='submit'> "Contact"