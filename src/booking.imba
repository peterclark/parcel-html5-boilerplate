export tag Booking

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

  def services
    WEDDING.concat RECEPTION, BOTH

  def render
    <self>
      <div.ui.vertical.stripe.segment#booking>
        <div.ui.container>
          <h3.ui.horizontal.divider.header>
            <i.calendar.icon>
            "Contact"
            
          <form.ui.large.form>
            <input type='hidden' name='form-name' value='booking'>
            <div.three.fields>
              <div.required.full_name.field>
                <label> "Your Full Name"
                <input#fullName@fullName type='text' name='full_name' maxlength='30' value=''>
              <div.required.mobile.field>
                <label> "Mobile phone"
                <input#mobile@to type='tel' name='mobile' maxlength='10' value=''>
              <div.required.event_date.field>
                <label> "Date of Event"
                <input.ui#eventDate type='text' name='event_date' value=''>
            <div.two.fields>
              <div.required.event_location.field>
                <label> "Event Location"
                <input#eventLocation type='text' name='event_location' maxlength='100' value=''>
              <div.required.services.field>
                <label> "Services"
                <select.ui.dropdown#services multiple name='service_ids'>
                  for service in services
                    <option value="{service:id}"> "${service:price} - {service:name}"
            <div.ui.segment>
              <div.required.inline.contract_accepted.field>
                <div.ui.toggle.checkbox>
                  <input.hidden#contractAccepted type='checkbox' name='contract_accepted' checked=''>
                  <label for="contract_accepted">
                    <span> "I have read and agree to the terms of the"
                    <a href='fluteviolin_contract.pdf' target='_blank'> " contract"
            
            <div.ui.three.column.stackable.centered.grid>
              <div.column>
                <button.massive.fluid.ui.primary.button#bookNow type='submit'> "Contact"