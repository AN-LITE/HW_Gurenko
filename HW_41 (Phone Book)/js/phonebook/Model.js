class Model {
    constructor() {
        this.phonebookContainerId = 'phoneBook'
        this.contactContainerId = 'contact_item'
    }

    setData(contactData){

        const savedData = this.data ? this.data : []

        if (savedData.length) {
            contactData.id = Math.max(...savedData.map(item => item.id)) + 1
        } else contactData.id = 1

        savedData.push(contactData)

        savedData.sort((a, b) => a.id - b.id)

        localStorage.setItem(this.phonebookContainerId,JSON.stringify(savedData))
    }

    get data(){
        return JSON.parse(localStorage.getItem(this.phonebookContainerId));
    }

    removeContact(id) {
        const data = this.data

        if (data.length === 1) {
            return localStorage.removeItem(this.phonebookContainerId)
        }

        const updateData = data.filter(contact => contact.id !== id)

        localStorage.setItem(this.phonebookContainerId, JSON.stringify(updateData))
    }

    changeContact(id, contactData) {
        const data = this.data

        const unChangedData = data.filter(item => item.id !== id)

        contactData.id = id

        unChangedData.push(contactData)

        unChangedData.sort((a, b) => a.name > b.name ? 1 : -1)

        console.log(unChangedData)

        localStorage.setItem(this.phonebookContainerId, JSON.stringify(unChangedData))
    }
}

export default Model;