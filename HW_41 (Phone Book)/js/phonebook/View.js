class View {
    renderAddForm() {
        const phonebookContainer = document.getElementById('phoneBook');
        const formElement = document.createElement('form');

        formElement.classList.add('contact_form');
        formElement.setAttribute('id', 'add_form');
        formElement.innerHTML = this.addFormInnerHTML();
        phonebookContainer.append(formElement);
    }
    renderSearchContact() {
        const phonebookContainer = document.getElementById('phoneBook');
        const search = document.createElement('div');

        search.classList.add('search_contact');
        search.setAttribute('id', 'search');
        search.innerHTML = this.searchContactInnerHTML();
        phonebookContainer.append(search);
    }

    renderChangeForm(data) {
        const phonebookContainer = document.getElementById('phoneBook');
        const formElement = document.createElement('form');

        formElement.classList.add('contact_form');
        formElement.setAttribute('id', 'change_form');
        formElement.setAttribute(`data-id`, `${data.id}`)
        formElement.innerHTML = this.changeFormInnerHTML(data);
        phonebookContainer.append(formElement);
    }

    renderInfo(data) {
        const phonebookContainer = document.getElementById('phoneBook');
        const infoContainer = document.createElement('div');
        infoContainer.classList.add('about_contact_form')
        infoContainer.setAttribute('id', 'info_container')
        infoContainer.innerHTML = this.infoInnerHTML(data);
        phonebookContainer.append(infoContainer)

        return infoContainer
    }

    renderNoContact() {
        const phonebookContainer = document.getElementById('phoneBook');
        const noContactContainer = document.createElement('div');
        noContactContainer.classList.add('about_contact_form')
        noContactContainer.setAttribute('id', 'nocontact')
        noContactContainer.innerHTML = this.noContactInnerHTML();
        phonebookContainer.append(noContactContainer)
    }

    renderContactsContainer() {
        const phonebookContainer = document.getElementById('phoneBook');
        const contactsContainer = document.createElement('div');
        contactsContainer.classList.add('about_contact_form')
        contactsContainer.setAttribute('id', 'contact_container')
        contactsContainer.innerHTML = this.contactsContainerInnerHTML();
        phonebookContainer.append(contactsContainer)
    }

    renderContactsItem(data) {
        const contactsItem = document.createElement('div');
        contactsItem.setAttribute('data-id',`${data.id}`)
        contactsItem.classList.add('contact_item');
        contactsItem.innerHTML = this.contactItemInnerHTML(data);
        const contactContainer = document.getElementById('contact_item')
        contactContainer.append(contactsItem)
    }

    removeContact (contact) {
        contact.remove()
    }

    clearContainer (container) {
        container.innerHTML=``
    }

    addFormInnerHTML () {
        return `
                <input name="name" placeholder="Name" class="contact_name">
                <input name="phone" placeholder="Phone number" type="tel" class="contact_number">
                <input name="position" placeholder="Position" class="contact_position">
                <button class="btn_add" type="submit">Add contact</button>`;
    }

    searchContactInnerHTML () {
        return `
            <input type="search" placeholder="Search" class="search">
            <select class="search_select" id="search_select">
                <option value="name">Name</option>
                <option value="number">Number</option>            
            </select>
            <button class="btn_clear">Clear</button>`;
    }


    changeFormInnerHTML (data) {
        return `
            <input name="name"  placeholder=${data.name} class="contact_name">
            <input name="phone" placeholder=${data.phone} type="tel" class="contact_number">
            <input name="position" placeholder=${data.position} class="contact_position">
            <button class="btn_add" type="submit">Change contact</button>`;
    }

    infoInnerHTML (data) {
        return `
        <fieldset>
            <legend><b>INFO:</b> </legend>
            <h3 type="text" class="about_contact_name">${data.name}</h3>
            <p type="text" class="about_contact_number" >${data.phone}</p>
            <p type="text" class="about_contact_position" >${data.position}</p>
            <div class="about_contact_btns">
                <button class="about_contact_back">Back</button>
            </div>
        </fieldset>`;
    }

    noContactInnerHTML () {
        return `<p type="text" class="about_contact_number">No contacts</p>`;
    }

    contactsContainerInnerHTML (){
        return `
            <fieldset id="contact_item">
                <legend><b>CONTACTS :</b> </legend>
            </fieldset>`;
    }

    contactItemInnerHTML(data) {
        return `
        <h3 type="text" class="about_contact_name" >${data.name}</h3>
        <p type="text" class="about_contact_number">${data.phone}</p>
        <p type="text" class="about_contact_position">${data.position}</p>
        <div class="about_contact_btns">
            <button class="about_contact_change">Change</button>
            <button class="about_contact_info">Info</button>
            <button class="about_contact_remove">Remove</button>
        </div>`;
    }
}

export default View;