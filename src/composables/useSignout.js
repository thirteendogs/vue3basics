import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

const error = ref(null)

const signout = async () => {
    error.value = null

    try {
        await projectAuth.signOut()
    } catch (err) {
        console.log(err.message);
        error.value = err.message
    }
}

const useSignout = () => {
    return { error, signout}
}

export default useSignout