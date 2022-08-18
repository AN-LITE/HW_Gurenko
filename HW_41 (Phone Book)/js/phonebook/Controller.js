class Controller {
    constructor(view, model) {
        this.view = view
        this.model = model
        this.selectOption = 'name'

    }

    start() {
        this.view.renderAddForm()
        this.view.renderSearchContact()
        this.view.renderNoContact()

        const debounceSearchInput = this.debounce(this.searchInputHandler, 300);
        document.getElementById('add_form').addEventListener('submit', this.submitHandler);
        document.addEventListener(`DOMContentLoaded`, this.loadHandler)
        document.querySelector(`#search`).addEventListener(`change`, this.searchSelectHandler)
        document.querySelector(`#search`).addEventListener(`input`, debounceSearchInput)
        document.querySelector(`#search`).addEventListener(`click`, this.searchClearHandler)
        console.log(this.selectOption)
    }

    submitHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (!this.model.data) {
            this.view.renderContactsContainer()
            const contactContainerSelector = document.getElementById(`contact_container`)
            contactContainerSelector.addEventListener(`click`, this.contactHandler)
            this.view.removeContact(document.getElementById(`nocontact`))
        }

        const inputs = Array.from(e.target.querySelectorAll('input'));
        const getData = inputs.reduce((acc, item) => {
            if (!item.value.trim())  return;

            try {
                acc[item.name] = item.value
                return acc;
            } catch (error) {
                console.log(error)
            }

        },{})

        if (!getData) {
            return alert('Error inputs data');
        }

        this.model.setData(getData);
        const data = this.model.data;

        this.view.renderContactsItem(getData)

        const container = document.getElementById(`contact_item`)
        this.view.clearContainer(container)

        data.sort((a,b) => a.name > b.name ? 1 : -1)
        data.forEach(item => this.view.renderContactsItem(item))
        e.target.reset();
    }

    loadHandler = () => {
        const data = this.model.data

        if (data) {
            this.view.removeContact(document.getElementById(`nocontact`))
            this.view.renderContactsContainer()
            data.sort((a,b) => a.name > b.name ? 1 : -1)
            data.forEach(item => this.view.renderContactsItem(item))
            const contactContainerSelector = document.getElementById(`contact_container`)
            contactContainerSelector.addEventListener(`click`, this.contactHandler)
        }
    }

    contactHandler = (e) => {
        e.stopPropagation()

        const contactItem = e.target.closest(`.contact_item`)
        const id = +contactItem.getAttribute('data-id')

        if (e.target.classList.contains(`about_contact_remove`)) {

            this.model.removeContact(id)

            this.view.removeContact(contactItem)

            if (!this.model.data) {
                this.view.removeContact(document.getElementById('contact_container'))
                this.view.renderNoContact()
            }
        }

        if (e.target.classList.contains(`about_contact_change`)) {
            const mainContainer = document.getElementById(this.model.phonebookContainerId)

            this.view.clearContainer(mainContainer)

            const data = this.model.data
            const updateData = data.filter(contact => contact.id === id)[0]

            this.view.renderChangeForm(updateData)

            document.getElementById(`change_form`).addEventListener(`submit`, this.changeHandler)
            // document.getElementById('add_form').removeEventListener('submit', this.submitHandler);
            // document.removeEventListener(`DOMContentLoaded`, this.loadHandler)
            // contactContainerSelector.removeEventListener(`click`, this.contactHandler)
            // document.getElementById(`change_form`).removeEventListener(`submit`, this.changeHandler)
        }

        if (e.target.classList.contains(`about_contact_info`)){
            const mainContainer = document.getElementById(this.model.phonebookContainerId)

            this.view.clearContainer(mainContainer)

            const data = this.model.data
            const contact = data.filter(contact => contact.id === id)[0]

            const infoContainer = this.view.renderInfo(contact)

            infoContainer.addEventListener(`click`, this.closeHandler)
        }
    }

    closeHandler = (e) => {
        if (e.target.classList.contains(`about_contact_back`)) window.location.reload()
    }

    changeHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const inputs = Array.from(e.target.querySelectorAll('input'));

        const getData = inputs.reduce((acc, item) => {
            acc[item.name] = item.value
            return acc;
        },{})

        const id = +e.target.getAttribute(`data-id`)

        this.model.changeContact(id, getData)


        window.location.reload()
    }

    searchSelectHandler = (e) => {
        e.preventDefault()
        e.stopPropagation()

        if (!e.target.classList.contains(`search_select`)) return

        this.selectOption = e.target.value


        console.log(this.selectOption)
    }

    searchInputHandler = (e) => {
        e.stopPropagation()

        if (e.target.classList.contains(`search`)) {
            let filteredData = null
            const data = this.model.data

            if(this.selectOption === 'name'){
                filteredData = data.filter(contact => contact.name.includes(e.target.value))
            }else{
                filteredData = data.filter(contact => contact.phone.includes(e.target.value))
            }


            const noContact = document.querySelector(`#nocontact`)
            if (!filteredData.length) {
                this.view.removeContact(document.querySelector(`#contact_container`))
                this.view.renderNoContact()
                return
            }
            else if (noContact){
                this.view.removeContact(noContact)
                this.view.renderContactsContainer()
            }

            this.view.removeContact(document.querySelector(`#contact_container`))

            this.view.renderContactsContainer()
            const contactContainerSelector = document.getElementById(`contact_container`)
            contactContainerSelector.addEventListener(`click`, this.contactHandler)

            filteredData.sort((a,b) => a.name > b.name ? 1 : -1)
            filteredData.forEach(item => this.view.renderContactsItem(item))
        }
    }

    searchClearHandler = (e) => {
        if (e.target.classList.contains(`btn_clear`)) {
            document.querySelector(`.search`).value = ``
            const noContact = document.querySelector(`#nocontact`)
            if (noContact){
                this.view.removeContact(noContact)
                this.view.renderContactsContainer()
            }
            this.view.removeContact(document.querySelector(`#contact_container`))
            this.view.renderContactsContainer()
            const data = this.model.data
            data.forEach(item => this.view.renderContactsItem(item))
        }
    }

    debounce = (fn, ms) => {
        let timeOut;
        return function () {
            const fnCall = () => fn.apply(this, arguments);
            clearTimeout(timeOut);
            timeOut = setTimeout(fnCall, ms)
        }
    }
}

export default Controller;
