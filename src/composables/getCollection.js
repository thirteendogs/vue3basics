import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getCollection = collection => {
    const error = ref(null)
    const documents = ref(null)

    const collectionRef = projectFirestore.collection(collection)
        .orderBy('createdAt')
    
    collectionRef.onSnapshot(snap => {
        const results = []

        snap.docs.forEach(doc => {
            doc.data().createdAt && results.push({ ...doc.data(), id:doc.id })
        })

        documents.value = results
        error.value = null
    }, (err) => {
        documents.value = null
        error.value = 'could not fetch data'
    })

    return { error, documents }
}

export default getCollection