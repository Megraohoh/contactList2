// A ContactCollection component that loads existing contacts from storage, and saves new ones. Each new contact should have an auto-generated identifier.
const dataLoad = Object.create(null, {
    loadData: {
        enumerable: true,
        writable: true,
        value: function(localStorageKey){
            const databaseString = localStorage.getItem(localStorageKey)
            return JSON.parse(databaseString)
        }
    },
    saveData: {
        enumerable: true,
        writable: true,
        value: function(databaseObject, localStorageKey){ //databaseObject is the info you pass in, localStorageKey is just the name of that object in the local storage (return name(key) to view info passed in)
            const stringData = JSON.stringify(databaseObject)
            localStorage.setItem(localStorageKey, stringData)
        }
    }
})
module.exports = dataLoad